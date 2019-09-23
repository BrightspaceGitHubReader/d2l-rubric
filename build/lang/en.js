import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
 * En lang terms
 * @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangEnBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangEnBehavior = {
	en: {
		'addCriteriaGroup': 'Add Criteria Group',
		'addCriterion': 'Add Criterion',
		'addFeedback': 'Add Feedback',
		'addLevel': 'Add Level',
		'addLevelPrepend': 'Add new level before {name}',
		'addLevelAppend': 'Add new level after {name}',
		'addOverallLevelAppend': 'Add new overall level after {name}',
		'addOverallLevelPrepend': 'Add new overall level before {name}',
		'cellPoints': 'Criterion cell points',
		'changeScoringSuccessful': 'Scoring method changed to {method}',
		'clearOverride': 'Clear Override',
		'clearFeedback': 'Clear Feedback',
		'criterionAdded': 'A new criterion has been added',
		'criterionAriaLabel': 'Criterion {index, number} of {count, number}',
		'criterionDeleted': '{name} criterion deleted',
		'criterionDescriptionAriaLabel': 'Description for criterion {criterionName}, level {levelName}',
		'criterionFeedback': 'Criterion Feedback',
		'criterionFeedbackAriaLabel': 'Feedback for criterion {criterionName}, level {levelName}',
		'criterionNameAriaLabel': 'Criterion name',
		'criterionOutOf': 'Criterion {name} is out of {value} points',
		'criterionPlaceholder': 'Click to edit criterion',
		'dashOutOf': '— / {outOf}',
		'description': 'Description',
		'descriptionInfo': 'Add a description for your personal reference. It will not be shared with students.',
		'descriptionSaveFailed': 'Saving description failed',
		'editFeedback': 'Edit Feedback',
		'errorText': 'Oops! We\'re having trouble connecting you. You might want to refresh the page, or try again later.',
		'feedback': 'Feedback',
		'feedbackSaveFailed': 'Saving feedback failed',
		'groupAdded': 'A new criteria group has been added',
		'groupName': 'Criteria group name',
		'groupRegion': 'Criteria group {name}',
		'helpAssociations': 'What are associations?',
		'hideScore': 'Hide scores from students',
		'hideScoreHeader': 'Score Visibility',
		'levelAchieved': 'Level Achieved: ',
		'levelAppended': 'A new level has been added after {name}',
		'levelDeleted': '{name} level deleted',
		'levelName': 'Level name',
		'levelNameAndBulletPoint': '{levelName} \u2022',
		'numberAndPoints': '{number} {number, plural, one {point} other {points}}',
		'numberAndPercentage': '{number} %',
		'levelPoints': 'Level points',
		'levelPrepended': 'A new level has been added before {name}',
		'lockedAlertText': 'This rubric cannot be edited because it has already been used to assess learner work',
		'name': 'Name',
		'nameIsRequired': 'Name is required',
		'nameSaveFailed': 'Saving name failed',
		'options': 'Options',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': 'Overall description for level {levelName}',
		'overallFeedback': 'Overall Feedback',
		'overallFeedbackAriaLabel': 'Overall feedback for level {levelName}',
		'overallLevelDeleted': '{name} overall level deleted',
		'overallLevelName': 'Overall level name',
		'overallScoreDescription': 'Each submission is assigned a level of achievement based on its overall rubric score.',
		'overallScoreHeader': 'Overall Score',
		'overallScore': 'Overall Score',
		'overrideLabel': 'Override',
		'overriddenScoreTip': 'Criterion score has been overridden',
		'overriddenTotalScoreTip': 'The overall rubric score has been overridden. The score will no longer update based on changes to the rubric.',
		'points': '{number} {number, plural, one {point} other {points}}',
		'pointsAbbreviation': 'pt',
		'pointsAreRequired': 'Point value is required',
		'pointsMinimum': '{number} {number, plural, one {point} other {points}} minimum',
		'pointsSaveFailed': 'Saving points failed',
		'percentage': '{number} %',
		'preview': 'Preview',
		'initialFeedback': 'Initial Feedback',
		'refreshText': 'refresh the page',
		'removeCriterion': 'Remove Criterion {name}',
		'removeLevel': 'Remove Level {name}',
		'removeOverallLevel': 'Remove Overall Level {name}',
		'reverseLevelOrder': 'Reverse Level Order',
		'reverseLevelsSuccessful': 'The level order has been reversed',
		'rubricLoadingErrorAriaAlert': 'There was a problem loading your rubric. It cannot be displayed.',
		'rubricLoadingErrorMessage': 'Sorry, we were unable to display the rubric.',
		'rubricSavingErrorAriaAlert': 'There was a problem saving your rubric.',
		'rubricSavingErrorMessage': 'Something went wrong. Please check your rubric.',
		'rubricSummaryA11y': 'This table lists criteria and criteria group name in the first column. The first row lists level names and includes scores if the rubric uses a numeric scoring method.',
		'rubricVisibility': 'Rubric Visibility',
		'rubricVisibilityAlways': 'Rubric is visible to students',
		'rubricVisibilityOnceFeedbackPosted': 'Rubric is hidden from students until feedback is published',
		'rubricVisibilityNever': 'Rubric is hidden from students',
		'rubricVisibilitySaveFailed': 'Changing rubric visibility failed.',
		'scoreOutOf': '{score} / {outOf}',
		'scoring': 'Scoring: {method}',
		'selectNextLevel': 'Select Next Level',
		'selectPreviousLevel': 'Select Previous Level',
		'setScoreVisibilityFailed': 'Setting score visibility failed.',
		'scoresVisibilityHidden': 'Scores are hidden from students',
		'scoresVisibilityVisible': 'Scores are visible to students',
		'statistics': 'Statistics',
		'total': 'Total',
		'totalScoreLabel': 'Rubric Total Score',
		'totalScoreAriaLabel': 'The rubric is out of a total score of {value} points.',
		'moveCriterionUp': 'Move criterion {position} up',
		'moveCriterionDown': 'Move criterion {position} down',
		'criterionMoved': '{name} is now criterion {position}',
		'rangeStartOrMore': 'or more',
		'overallLevelRangeStart': 'Overall Level Start Range',
		'rangeStartRequired': 'Range Start value is required',
		'rangeStartInvalid': 'Range Start value is invalid',
		'closeDialog': 'Close',
		'deleteConfirmationYes': 'Delete',
		'deleteConfirmationNo': 'Cancel',
		'deleteLevelConfirmationTitle': 'Delete this level?',
		'deleteLevelConfirmationText': 'This will permanently delete the level and its contents.',
		'deleteCriterionConfirmationTitle': 'Delete this criterion?',
		'deleteCriterionConfirmationText': 'This will permanently delete the criterion and its contents.',
		'rubricType': 'Type: {rubricType}',
		'changeRubricTypeSuccessful': 'Rubric type changed to {rubricType}',
		'changeConfirmationYes': 'Continue',
		'changeConfirmationNo': 'Cancel',
		'changeRubricTypeWarnTitle': 'Change rubric type?',
		'changeRubricTypeWarnMessage': 'Changing your rubric from analytic to holistic may result in data loss.',
		'rubricStatus': 'Status: {status}',
		'changeRubricStatusSuccessful': 'Rubric status changed to {status}',
		'editRubric': 'Edit Rubric',
		'advancedAvailabilityHeader': 'Advanced Availability',
		'newAssociationLabel': 'Allow new associations in',
		'associationsSaveFailed': 'Saving associations failed',
		'descriptionReadOnlyMode': 'Description (not visible to students)',
		'descriptionReadOnlyPlaceholder': 'No description',
		'groupNameSaveFailed': 'Saving criteria group name failed',
		'makeRubricAvailableHeader': 'Make rubric available to'
	}
};
