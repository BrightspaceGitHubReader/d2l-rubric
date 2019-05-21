import '@polymer/polymer/polymer-legacy.js';
import './localize-behavior.js';
import './assessment-result-behavior.js';
import 'd2l-colors/d2l-colors.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import 's-html/s-html.js';
import 'd2l-inputs/d2l-input-text.js';
import './rubric-siren-entity.js';
import 'd2l-tooltip/d2l-tooltip.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-rubric-editable-score">
	<template strip-whitespace="">
		<style>
			:host {
				display: block;
				box-sizing: border-box;
			}
			:host([override-styling]) {
				border-radius: 0.3rem;
				background-color: var(--d2l-color-celestine-plus-2);
			}
			:host(:hover:not([editor-styling])) {
				border-radius: 0.3rem;
				border: 1px solid var(--d2l-color-celestine);
			}
			.total-score-container {
				display: flex;
				justify-content: center;
			}
			d2l-input-text {
				max-width: 150px;
				min-width: 75px;
			}
			.score-out-of.overridden {
				color: var(--d2l-color-celestine);
				display: inline-flex;
			}
			.star {
				display: none;
				padding: 0 5px;
			}
			.score-out-of.overridden .star {
				display: inline-flex;
			}
			.right {
				display: inline;
				padding: 0 5px;
			}
			[hidden] {
				display: none;
			}
		</style>
		<rubric-siren-entity href="[[assessmentHref]]" token="[[token]]" entity="{{assessmentEntity}}"></rubric-siren-entity>
		<rubric-siren-entity href="[[criterionHref]]" token="[[token]]" entity="{{entity}}"></rubric-siren-entity>
		<div class$="[[_getContainerClassName(criterionHref)]]" hidden="[[!_isEditingScore(criterionNum, editingScore)]]">
			<d2l-input-text id="text-area" value="[[getScore(entity, assessmentResult, totalScore)]]" type="number" step="any" min="0" max="100000" on-blur="_blurHandler" on-keypress="_handleKey" prevent-submit="">
			</d2l-input-text>
			<div id="out-of" class="right">[[_localizeOutOf(entity)]]</div>
		</div>
		<div hidden="[[_isEditingScore(criterionNum, editingScore)]]" class$="[[_getOutOfClassName(scoreOverridden)]]">
			[[_localizeOutOf(entity, assessmentResult, totalScore)]]
			<div class="star" id="score-overridden-star">*</div>
			<d2l-tooltip for="score-overridden-star" position="bottom">[[_localizeStarLabel(totalScore)]]</d2l-tooltip>
		</div>
	</template>

	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-rubric-editable-score',

	properties: {
		criterionHref: String,

		/* Entity could be a criterionEntity or a rubricEntity */
		entity: Object,

		assessmentHref: {
			type: String,
			value: null
		},
		token: String,

		/* For desktop criteria, this will be the criterion number.
		   For mobile and total score, this will be 1 for true, -1 for false */
		editingScore: {
			type: Number,
			value: -1,
			notify: true,
			observer: '_editingScoreChanged'
		},
		scoreOverridden: {
			type: Boolean,
			value: false,
		},
		overrideStyling: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		},
		editorStyling: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		},
		totalScore: {
			type: String,
			value: null
		},
		criterionNum: {
			type: Number,
			value: 1
		},
		readOnly: {
			type: Boolean,
			value: true
		},
		parentCell: {
			type: Object,
			value: null
		}
	},

	behaviors: [
		D2L.PolymerBehaviors.Rubric.LocalizeBehavior,
		D2L.PolymerBehaviors.Rubric.AssessmentResultBehavior
	],

	observers: [
		'_onAssessmentResultChanged(entity, assessmentResult)',
		'_totalScoreChanged(totalScore, entity)',
		'_editingState(entity,criterionNum, editingScore)'
	],

	_onAssessmentResultChanged: function(entity, assessmentResult) {
		if (!entity || !assessmentResult) {
			return;
		}

		if (this.totalScore) {
			this.scoreOverridden = this.isTotalScoreOverridden();
			return;
		}
		this.scoreOverridden = this.isScoreOverridden(this.criterionHref);
		this.overrideStyling = this.scoreOverridden;
	},

	focus: function() {
		var elem = this.$['text-area'];
		elem.focus();
		var inputElem = elem.$$('input');
		if (inputElem) {
			elem.$$('input').select();
		}
	},

	_editingScoreChanged: function(newValue) {
		if (this._isEditingScore(this.criterionNum, newValue)) {
			afterNextRender(this, function() {
				this.focus();
			}.bind(this));
		}
	},

	_handleKey: function(event) {
		if (event.keyCode === 13) { // enter key
			event.target.blur();
			event.stopPropagation();
			if (this.parentCell) {
				setTimeout(function() { this.parentCell.focus(); }.bind(this), 0);
			}
			return;
		}
	},

	_blurHandler: function(event) {
		var innerInput = event.target.$$('input');
		if (!innerInput || !innerInput.checkValidity()) {
			return;
		}
		this.editingScore = -1;
		var newScore = event.target.value;
		if (newScore === '') {
			this._clearOverride();
			return;
		}
		var oldScore = this.getScore(this.entity, this.assessmentResult, this.totalScore);
		if (newScore === oldScore) {
			// score didn't change so don't save it
			return;
		}
		this._saveScore(newScore);
	},

	_saveScore: function(score) {
		if (this.criterionHref) {
			this.saveCriterionPoints(this.criterionHref, score);
		} else {
			this.saveTotalPoints(score);
		}
	},

	_clearOverride: function() {
		if (this.criterionHref) {
			this.clearCriterionOverride(this.criterionHref);
		} else {
			this.clearTotalScoreOverride();
		}
	},

	getScore: function(entity, assessmentResult, totalScore) {
		if (!entity || !assessmentResult) {
			return;
		}
		if (totalScore) {
			return totalScore;
		}
		return this.getAssessedScore(entity, assessmentResult);
	},

	_localizeOutOf: function(entity, assessmentResult, totalScore) {
		if (!entity || !entity.properties || !entity.properties.outOf) {
			return null;
		}

		var score = null;
		if (totalScore) {
			score = totalScore;
		} else if (assessmentResult) {
			score = this.getAssessedScore(entity, assessmentResult);
		}
		if (score || score === 0) {
			return this.localize('scoreOutOf', 'score', score.toString(), 'outOf', entity.properties.outOf.toString());
		}
		return this.localize('outOf', 'outOf', entity.properties.outOf.toString());
	},

	_getOutOfClassName: function(scoreOverridden) {
		var className = 'score-out-of';
		if (scoreOverridden && !this.readOnly) {
			className += ' overridden';
		}
		return className;
	},

	_getContainerClassName: function(criterionHref) {
		if (!criterionHref) {
			return 'total-score-container';
		}
		return '';
	},

	_isEditingScore: function(criterionNum, editingScore) {
		return criterionNum === editingScore;
	},

	_localizeStarLabel: function(totalScore) {
		if (totalScore) {
			return this.localize('overriddenTotalScoreTip');
		} else {
			return this.localize('overriddenScoreTip');
		}
	},

	_totalScoreChanged: function(score, entity) {
		var outOf;
		if (entity && entity.properties) {
			outOf = entity.properties.outOf;
		}
		if (score && outOf) {
			this.fire('d2l-rubric-total-score-changed', {score:score, outOf: outOf.toString()});
		} else if (score) {
			this.fire('d2l-rubric-total-score-changed', {score:score});
		}
	},
	_editingState: function(entity, criterionNum, editingScore) {
		if (!entity) {
			return;
		}
		if (this._isEditingScore(criterionNum, editingScore)) {
			this.editorStyling = true;
			this.overrideStyling = false;
		}
		if (!this._isEditingScore(criterionNum, editingScore) && this.scoreOverridden) {
			this.editorStyling = false;
			this.overrideStyling = true;
		}
	}
});
