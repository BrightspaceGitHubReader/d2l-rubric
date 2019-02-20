import '@polymer/polymer/polymer-legacy.js';
import 'd2l-hypermedia-constants/d2l-hypermedia-constants.js';
import '../d2l-rubric-entity-behavior.js';
import 'd2l-polymer-siren-behaviors/store/siren-action-behavior.js';
import '../localize-behavior.js';
import '../d2l-rubric-loading.js';
import './d2l-rubric-criteria-group-editor.js';
import 'd2l-button/d2l-button.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-rubric-criteria-groups-editor">
	<template strip-whitespace="">
		<style include="d2l-rubric-editor-cell-styles">
			:host {
				display: block;
			}

			d2l-rubric-criteria-group-editor {
				padding-bottom: 24px;
			}

			d2l-rubric-criteria-group-editor:last-of-type {
				padding-bottom: 0px;
			}

			.groups-footer {
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
				align-items: center;
				margin: 0;
				margin-left: var(--d2l-rubric-editor-start-gutter-width);
				margin-right: var(--d2l-rubric-editor-end-gutter-width);
			}

			:dir(rtl) .groups-footer {
				margin-right: var(--d2l-rubric-editor-start-gutter-width);
				margin-left: var(--d2l-rubric-editor-end-gutter-width);
			}

			.groups-footer > .footer-child {
				padding-top: 24px;
			}

			.out-of-text {
				display: flex;
				flex-direction: row;
			}

			.total-text {
				margin: 0 20px;
			}

			[hidden] {
				display: none;
			}
		</style>

		<d2l-rubric-loading hidden$="[[_showContent]]"></d2l-rubric-loading>

		<template is="dom-repeat" items="[[_groups]]" on-dom-change="_groupsDomComplete">
			<d2l-rubric-criteria-group-editor hidden$="[[!_showContent]]" href="[[_getSelfLink(item)]]" token="[[token]]" show-group-name="[[_showGroupName(entity)]]" is-holistic="[[isHolistic]]" percentage-format-alternate="[[percentageFormatAlternate]]" rich-text-enabled="[[richTextEnabled]]">
			</d2l-rubric-criteria-group-editor>
		</template>

		<div class="groups-footer">
			<d2l-button class="footer-child" type="button" on-tap="_handleAddCriteriaGroup" hidden="[[!_canCreate]]" aria-label$="[[localize('addCriteriaGroup')]]">
				[[localize('addCriteriaGroup')]]
			</d2l-button>

			<div class="out-of-text footer-child" hidden="[[!_hasTotalScore]]" aria-label$="[[localize('totalScoreAriaLabel','value',totalScore)]]">
				<span class="total-text">[[localize('total')]]</span><span>[[localize('dashOutOf', 'outOf', totalScore)]]</span>
			</div>
		</div>

	</template>


</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-rubric-criteria-groups-editor',

	properties: {
		_groups: {
			type: Array,
			value: function() { return []; }
		},

		_showContent: {
			type: Boolean,
			value: false
		},

		_canCreate: {
			type: Boolean,
			computed: '_canCreateCriteriaGroup(entity)'
		},

		_waitingForGroups: {
			type: Boolean,
			value: false
		},

		_hasTotalScore: {
			type: Boolean,
			value: false
		},

		totalScore: {
			type: String,
			observer: '_totalScoreChanged'
		},

		richTextEnabled: Boolean,
		isHolistic: {
			type: Boolean,
			value: false
		},
		percentageFormatAlternate: Boolean
	},

	behaviors: [
		D2L.PolymerBehaviors.Rubric.EntityBehavior,
		window.D2L.Hypermedia.HMConstantsBehavior,
		D2L.PolymerBehaviors.Rubric.LocalizeBehavior,
		D2L.PolymerBehaviors.Siren.SirenActionBehavior
	],

	observers: [
		'_onEntityChanged(entity)'
	],

	_onEntityChanged: function(entity) {
		if (!entity) {
			return;
		}
		this._groups = entity.getSubEntitiesByClass(this.HypermediaClasses.rubrics.criteriaGroup);
		this._showContent = true;
	},
	_handleAddCriteriaGroup: function() {
		var action = this.entity.getActionByName('create');
		if (action) {
			this._waitingForGroups = true;
			this.performSirenAction(action).then(function() {
				this.fire('d2l-rubric-criteria-group-added');
				setTimeout(function() {
					this.fire('iron-announce', { text: this.localize('groupAdded') }, { bubbles: true });
				}.bind(this), 2000);
			}.bind(this)).catch(function(err) {
				this._waitingForGroups = false;
				this.fire('d2l-rubric-editor-save-error', { message: err.message });
			}.bind(this));
		}
	},
	_canCreateCriteriaGroup: function(entity) {
		return entity && entity.hasActionByName('create');
	},
	_showGroupName: function(entity) {
		return entity.entities.length > 1;
	},
	_groupsDomComplete: function() {
		if (this._waitingForGroups) {
			this._waitingForGroups = false;
			this._refocus();
		}
	},
	_refocus: function() {
		var allGroups = dom(this.root).querySelectorAll('d2l-rubric-criteria-group-editor');
		var lastGroup = allGroups[allGroups.length - 1];
		lastGroup.$$('d2l-input-text').$$('input').select();
	},
	_totalScoreChanged: function(totalScore) {
		this._hasTotalScore = typeof totalScore !== 'undefined';
	}
});