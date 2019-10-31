import 'd2l-hypermedia-constants/d2l-hypermedia-constants.js';
import './d2l-rubric-entity-behavior.js';
import 'd2l-polymer-siren-behaviors/store/siren-action-behavior.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};

// Create a promise queue for siren actions
window.D2L.Rubric = window.D2L.Rubric || {};
window.D2L.Rubric.Assessment = window.D2L.Rubric.Assessment || {};
window.D2L.Rubric.Assessment.promise = window.D2L.Rubric.Assessment.promise || Promise.resolve();

/**
 * Behavior for computing assessment results from an assessment entity
 * @polymerBehavior
 */
D2L.PolymerBehaviors.Rubric.AssessmentResultBehaviorImpl = {
	properties: {
		assessmentEntity: {
			type: Object
			//value: null Causes problems with polymer 1 and the store cache
		},
		assessmentResult: {
			type: Object,
			value: null,
			computed: '_computeAssessmentResultAndCellRelations(assessmentEntity)'
		},
		anyFeedback: {
			type: Boolean,
			value: false
		},
		noBottomCells: {
			type: Object,
			value: null
		},
		readOnly: {
			type: Boolean,
			value: false
		},
		_assessmentCriterionCellMap: {
			type: Object,
			value: {}
		},
		_assessmentCriterionMap: {
			type: Object,
			value: {}
		}
	},

	// Computes and returns assessmentResult
	// Also computes (but does not return): noBottomCells, anyFeedback
	_computeAssessmentResultAndCellRelations: function(assessmentEntity) {
		if (!assessmentEntity) {
			return null;
		}
		var noBottomCellsMap = {};
		var assessmentMap = {};
		var prevLevel = null;
		var prevLink = null;
		var criteriaEntities = assessmentEntity.getSubEntitiesByClass(this.HypermediaClasses.rubrics.criterionCellSelector);
		var assessmentCriterionCellMap = {};
		var assessmentCriterionMap = {};
		for (var i = 0; i < criteriaEntities.length; i++) {
			var criterionEntity = criteriaEntities[i];
			var selectedCriterionCellEntity = criterionEntity.getSubEntityByClass(this.HypermediaClasses.rubrics.selected);

			this._buildRubricToAssessmentMap(assessmentCriterionMap, assessmentCriterionCellMap, criterionEntity);
			if (!selectedCriterionCellEntity) {
				// No selected cell in this row, so reset prevLink
				prevLink = null;

				if (criterionEntity.properties && criterionEntity.properties.score != null) { //eslint-disable-line eqeqeq
					var criterionHref = criterionEntity.getLinkByRel(this.HypermediaRels.Rubrics.criterion).href;
					var feedback = criterionEntity.getSubEntityByClass(this.HypermediaClasses.rubrics.feedback) || {};
					assessmentMap[criterionHref] = {
						score: criterionEntity.properties.score,
						level: null,
						feedback: feedback.text,
						feedbackText: feedback.html,
						cellEntity: null
					};
				}

				continue;
			}

			var link = selectedCriterionCellEntity.getLinkByRel(this.HypermediaRels.Rubrics.criterionCell);
			var level = selectedCriterionCellEntity.getLinkByRel(this.HypermediaRels.Rubrics.level);

			this._updateCellRelations(prevLink, prevLevel, level, noBottomCellsMap);
			this._updateAssessmentMap(assessmentMap, selectedCriterionCellEntity, link, level);

			prevLink = link.href;
			prevLevel = level.href;
		}
		this._assessmentCriterionCellMap = assessmentCriterionCellMap;
		this._assessmentCriterionMap = assessmentCriterionMap;
		this.noBottomCells = noBottomCellsMap;

		return assessmentMap;
	},

	_updateAssessmentMap: function(assessmentMap, selectedCriterionCellEntity, link, level) {
		var rowLink = selectedCriterionCellEntity.getLinkByRel(this.HypermediaRels.Rubrics.criterion);
		var feedback = selectedCriterionCellEntity.getSubEntityByClass(this.HypermediaClasses.rubrics.feedback);
		var feedbackHTML = feedback && feedback.properties && feedback.properties.html;
		var feedbackText = feedback && feedback.properties && feedback.properties.text;

		if (feedbackHTML) {
			this.anyFeedback = true;
		}
		var assessment = {};
		if (link.href) {
			assessment = {
				score: selectedCriterionCellEntity.properties.score,
				level: level,
				feedback: feedbackHTML,
				feedbackText: feedbackText,
				cellEntity: selectedCriterionCellEntity
			};

			assessmentMap[link.href] = assessment;
			assessmentMap[rowLink.href] = assessment;
		}
	},

	_updateCellRelations: function(prevLink, prevLevel, level, noBottomCellsMap) {
		if (prevLink) {
			// Keeps track of selected cells with another selected cell directly below
			noBottomCellsMap[prevLink] = (prevLevel === level.href);
		}
	},

	_buildRubricToAssessmentMap: function(assessmentCriterionMap, assessmentCriterionCellMap, criterionEntity) {
		// build a map of criterion-cell hrefs to assessment-criterion-cell hrefs
		var criterionCells = criterionEntity.getSubEntitiesByClass('assessment-criterion-cell');
		for (var j = 0; j < criterionCells.length; j++) {
			var assessmentCriterionCell = criterionCells[j];
			assessmentCriterionCellMap[assessmentCriterionCell.getLinkByRel(this.HypermediaRels.Rubrics.criterionCell).href] = assessmentCriterionCell;
		}
		// build a map of criterion hrefs to assessment criterion
		assessmentCriterionMap[criterionEntity.getLinkByRel(this.HypermediaRels.Rubrics.criterion).href] = criterionEntity;
	},

	_getFieldWithName: function(fields, name) {
		if (Array.prototype.find) {
			return fields.find(function(field) { return field.name === name; });
		} else {
			// Internet Explorer doesn't support the Array.find function, so use a polyfill instead
			for (var i = 0; i < fields.length; i++) {
				if (fields[i].name === name) {
					return fields[i];
				}
			}
			return undefined;
		}
	},

	_getItem: function(criterionEntity, assessmentResult, itemFetcher) {
		if (assessmentResult[this._getSelfLink(criterionEntity)]) {
			return itemFetcher(assessmentResult[this._getSelfLink(criterionEntity)]);
		}
	},

	getAssessedLevelHref: function(criterionEntity, assessmentResult) {
		return this._getItem(criterionEntity, assessmentResult, function(x) {return x.level && x.level.href;});
	},

	getAssessedScore: function(criterionEntity, assessmentResult) {
		return this._getItem(criterionEntity, assessmentResult, function(x) {return x.score;});
	},

	getAssessmentFeedback: function(criterionEntity, assessmentResult, html) {
		if (!criterionEntity || !assessmentResult) {
			return;
		}
		var assessedCriterion = this._assessmentCriterionMap[this._getSelfLink(criterionEntity)];
		if (!assessedCriterion) {
			return;
		}
		var assessedCriterionFeedback = assessedCriterion.getSubEntityByClass('feedback');
		//if feedback does not exist on the criterion we try to get it from one of the criterion cells
		if (!assessedCriterionFeedback) {
			var firstCriterionCell = assessedCriterion.getSubEntitiesByClass('assessment-criterion-cell')[0];
			if (firstCriterionCell) {
				assessedCriterionFeedback = firstCriterionCell.getSubEntityByClass('feedback');
			}
		}
		if (!assessedCriterionFeedback || !assessedCriterionFeedback.properties) {
			return;
		}
		var feedback;
		if (html) {
			feedback = assessedCriterionFeedback.properties.html;
			if (!feedback) {
				return feedback;
			}
			return '<style> p { margin: 0; } </style>' + feedback;
		}
		feedback = assessedCriterionFeedback.properties.text;
		return feedback;
	},

	addToQueue: function(promiseFactory) {
		var promise = window.D2L.Rubric.Assessment.promise.then(promiseFactory);
		window.D2L.Rubric.Assessment.promise = promise.catch(
			function() {
				// don't break the promise chain
				return;
			}
		);

		return promise;
	},

	saveAssessmentFeedback: function(criterionHref, feedback) {
		var saveAssessmentFeedbackPromise = this.saveAssessmentFeedbackPromise.bind(this, criterionHref, feedback);
		return this.addToQueue(saveAssessmentFeedbackPromise);
	},

	saveAssessmentFeedbackPromise: function(criterionHref, feedback) {
		var asssessmentCriterion = this._assessmentCriterionMap[criterionHref];
		var action = asssessmentCriterion.getActionByName('update-critierion-assessment');

		if (action) {
			var fields = action.fields;
			var feedbackField = this._getFieldWithName(fields, 'feedbackText');
			if (feedbackField) {
				feedbackField.value = feedback;
			}
			feedbackField = this._getFieldWithName(fields, 'feedbackHtml');
			if (feedbackField) {
				feedbackField.value = this._escapeHtml(feedback);
			}

			return this.performSirenAction(action, fields);
		}
	},

	isScoreOverridden: function(criterionHref) {
		var assessmentCriterion = this._assessmentCriterionMap[criterionHref];
		if (!assessmentCriterion) {
			return false;
		}
		var selectedCriterionCell = assessmentCriterion.getSubEntityByClass(this.HypermediaClasses.rubrics.selected);
		if (!selectedCriterionCell) {
			return false;
		}
		var overridden = selectedCriterionCell.hasClass(this.HypermediaClasses.rubrics.overridden);
		return !!overridden;
	},

	isTotalScoreOverridden: function() {
		var entity = this.assessmentEntity;
		var action = entity.getActionByName('save');
		if (!action) {
			return false;
		}
		var fields = action.fields;
		var assessmentField = this._getFieldWithName(fields, 'rubricAssessment');
		return assessmentField.value.TotalScoreOverridden;
	},

	saveCriterionPoints: function(criterionHref, points) {
		var saveCriterionPointsPromise = this.saveCriterionPointsPromise.bind(this, criterionHref, points);
		return this.addToQueue(saveCriterionPointsPromise);
	},

	saveCriterionPointsPromise: function(criterionHref, points) {
		var asssessmentCriterion = this._assessmentCriterionMap[criterionHref];
		// Action name is typoed in the API
		var action = asssessmentCriterion.getActionByName('update-critierion-assessment');

		if (action) {
			var fields = action.fields;
			var scoreField = this._getFieldWithName(fields, 'score');
			scoreField.value = points;

			return this.performSirenAction(action, fields);
		}
	},

	saveTotalPoints: function(points) {
		var saveTotalPointsPromise = this.saveTotalPointsPromise.bind(this, points);
		return this.addToQueue(saveTotalPointsPromise);
	},

	saveTotalPointsPromise: function(points) {
		var entity = this.assessmentEntity;
		var action = entity.getActionByName('save');
		if (action) {
			var fields = action.fields;
			var assessmentField = this._getFieldWithName(fields, 'rubricAssessment');
			assessmentField.value.OverallScore = points;
			assessmentField.value.TotalScoreOverridden = true;
			return this.performSirenAction(action, fields);
		}
	},

	clearCriterionOverride: function(criterionHref) {
		var clearCriterionOverridePromise = this.clearCriterionOverridePromise.bind(this, criterionHref);
		return this.addToQueue(clearCriterionOverridePromise);
	},

	clearCriterionOverridePromise: function(criterionHref) {
		var asssessmentCriterion = this._assessmentCriterionMap[criterionHref];
		// Action name is typoed in the API
		var action = asssessmentCriterion.getActionByName('update-critierion-assessment');

		if (action) {
			var fields = action.fields;
			var scoreField = this._getFieldWithName(fields, 'score');
			var defaultScoreField = this._getFieldWithName(fields, 'defaultScore');
			scoreField.value = defaultScoreField.value;

			return this.performSirenAction(action, fields);
		}
	},

	clearTotalScoreOverride: function() {
		var clearTotalScoreOverridePromise = this.clearTotalScoreOverridePromise.bind(this);
		return this.addToQueue(clearTotalScoreOverridePromise);
	},

	clearTotalScoreOverridePromise: function() {
		var entity = this.assessmentEntity;
		var action = entity.getActionByName('save');
		if (action) {
			var fields = action.fields;
			var assessmentField = this._getFieldWithName(fields, 'rubricAssessment');
			assessmentField.value.TotalScoreOverridden = false;
			return this.performSirenAction(action, fields);
		}
	},

	_escapeHtml: function(feedback) {
		var div = document.createElement('div');
		div.appendChild(document.createTextNode(feedback));
		return div.innerHTML;
	},

	assessCriterionCell: function(criterionCellHref) {
		var assessCriterionCellPromise = this.assessCriterionCellPromise.bind(this, criterionCellHref);
		return this.addToQueue(assessCriterionCellPromise);
	},

	assessCriterionCellPromise: function(criterionCellHref) {
		if (this._assessmentCriterionCellMap[criterionCellHref]) {
			return this._selectCriterionCell(this._assessmentCriterionCellMap[criterionCellHref]);
		}
	},

	_selectCriterionCell: function(criterionCell) {
		var action = criterionCell.getActionByName('select-criterion-cell');

		if (action) {
			return this.performSirenAction(action);
		}
	},

	canAddFeedback: function(criterion) {
		var assessedCriterion = this._assessmentCriterionMap[this._getSelfLink(criterion)];
		if (!assessedCriterion) {
			return false;
		}
		var action = assessedCriterion.getActionByName('update-critierion-assessment');
		return !!action;
	},

	canAssessCriterionCell: function(criterionCellHref) {
		var criterionCell = this._assessmentCriterionCellMap[criterionCellHref];
		if (criterionCell) {
			var action = criterionCell.getActionByName('select-criterion-cell');
			return !!action;
		}
		return false;
	},

	canOverrideScore: function(criterionHref) {
		var assessedCriterion = this._assessmentCriterionMap[criterionHref];
		if (!assessedCriterion) {
			return false;
		}
		var action = assessedCriterion.getActionByName('update-critierion-assessment');
		return !!action;
	},

	canOverrideTotal: function(assessmentEntity) {
		if (!assessmentEntity) {
			return false;
		}
		var action = assessmentEntity.getActionByName('save');
		return !!action;
	}
};

/** @polymerBehavior */
D2L.PolymerBehaviors.Rubric.AssessmentResultBehavior = [
	D2L.PolymerBehaviors.Rubric.AssessmentResultBehaviorImpl,
	D2L.PolymerBehaviors.Rubric.EntityBehavior,
	D2L.PolymerBehaviors.Siren.SirenActionBehavior,
	window.D2L.Hypermedia.HMConstantsBehavior
];
