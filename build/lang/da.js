import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
 * Da lang terms
 * @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangDaBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangDaBehavior = {
	da: {
		'actionsforEditRubric': 'Handlinger for Rediger rubrik',
		'addCriteriaGroup': 'Tilføj kriteriegruppe',
		'addCriterion': 'Tilføj kriterium',
		'addFeedback': 'Tilføj feedback',
		'addLevel': 'Tilføj niveau',
		'addLevelAppend': 'Tilføj nyt niveau efter {name}',
		'addLevelPrepend': 'Tilføj nyt niveau før {name}',
		'addOverallLevelAppend': 'Tilføj nyt overordnet niveau efter {name}',
		'addOverallLevelPrepend': 'Tilføj nyt overordnet niveau før {name}',
		'addedOverallLevelAppend': 'A new overall score level has been added after {name}',
		'addedOverallLevelPrepend': 'A new overall score level has been added before {name}',
		'advancedAvailabilityHeader': 'Avanceret tilgængelighed',
		'alignmentOptionAutomatic': 'Knyt automatisk præstationsniveauer til procentscorer',
		'alignmentOptionManual': 'Knyt manuelt præstationsniveauer til rubrikniveauer',
		'associationsSaveFailed': 'Det lykkedes ikke at gemme tilknytninger',
		'cellPoints': 'Cellepunkter for kriterium',
		'changeConfirmationNo': 'Annuller',
		'changeConfirmationYes': 'Fortsæt',
		'changeRubricStatusSuccessful': 'Rubrikstatus ændret til {status}',
		'changeRubricTypeSuccessful': 'Rubriktype ændret til {rubricType}',
		'changeRubricTypeWarnMessage': 'Ændring af rubrikken fra analytisk til holistisk kan resultere i datatab.',
		'changeRubricTypeWarnTitle': 'Skal rubriktypen ændres?',
		'changeScoringSuccessful': 'Scoremetode ændret til {method}',
		'clearFeedback': 'Ryd feedback',
		'clearOverride': 'Ryd tilsidesættelse',
		'closeDialog': 'Luk',
		'criteriaGroup': 'Kriteriegruppe',
		'criteriaHeading': 'Criteria',
		'criterion': 'Kriterium',
		'criterionAdded': 'Et nyt kriterium blev tilføjet',
		'criterionAriaLabel': 'Kriterium {index, number} af {count, number}',
		'criterionDeleted': '{name} kriterium slettet',
		'criterionDescriptionAriaLabel': 'Beskrivelse af kriterium {criterionName}, niveau {levelName}',
		'criterionFeedback': 'Feedback for kriterium',
		'criterionFeedbackAriaLabel': 'Feedback for kriterium {criterionName}, niveau {levelName}',
		'criterionFeedbackWithCopy': 'medtages i den samlede feedback og synlig for elever',
		'criterionMoved': '{name} er nu kriterium {position}',
		'criterionNameAriaLabel': 'Kriterienavn',
		'criterionOutOf': 'Kriterium {name} er ud af {value} point',
		'criterionPlaceholder': 'Klik for at redigere kriterium',
		'criterionScore': 'Kriteriescore',
		'dashOutOf': '— / {outOf}',
		'deleteConfirmationNo': 'Annuller',
		'deleteConfirmationYes': 'Slet',
		'deleteCriterionConfirmationText': 'Denne handling sletter dette kriterium og dets indhold permanent.',
		'deleteCriterionConfirmationTitle': 'Skal dette kriterium slettes?',
		'deleteLevelConfirmationText': 'Denne handling sletter niveauet og dens indhold permanent.',
		'deleteLevelConfirmationTitle': 'Skal dette niveau slettes?',
		'description': 'Beskrivelse',
		'descriptionInfo': 'Tilføj en beskrivelse til egen reference. Den vil ikke blive delt med elever.',
		'descriptionReadOnlyMode': 'Beskrivelse (ikke synlig for elever)',
		'descriptionReadOnlyPlaceholder': 'Ingen beskrivelse',
		'descriptionSaveFailed': 'Det lykkedes ikke at gemme beskrivelsen',
		'editFeedback': 'Rediger feedback',
		'editRubric': 'Rediger rubrik',
		'errorText': 'Hovsa! Vi har problemer med at oprette forbindelse. Du kan prøve at opdatere siden eller prøve igen senere.',
		'feedback': 'Feedback',
		'feedbackOn': 'Feedback for {criterionName}',
		'feedbackSaveFailed': 'Det lykkedes ikke at gemme feedbacken',
		'groupAdded': 'En ny kriteriegruppe blev tilføjet',
		'groupName': 'Kriteriegruppenavn',
		'groupNameSaveFailed': 'Det lykkedes ikke at gemme kriteriegruppenavn',
		'groupRegion': 'Kriteriegruppe {name}',
		'helpAssociations': 'Hvad er tilknytninger?',
		'hideScore': 'Skjul scorer for elever',
		'hideScoreHeader': 'Synlighed af score',
		'initialFeedback': 'Første feedback',
		'learningOutcomes': 'Læringsresultater',
		'levelAchieved': 'Opnået niveau:',
		'levelAppended': 'Et nyt niveau blev tilføjet efter {name}',
		'levelDeleted': '{name} niveau slettet',
		'levelLoading': 'Nyt {name} indlæses',
		'levelName': 'Niveaunavn',
		'levelNameAndBulletPoint': '{levelName} •',
		'levelPoints': 'Niveaupunkter',
		'levelPrepended': 'Et nyt niveau blev tilføjet før {name}',
		'loaLevelLabelMultiRubric': 'Achievement level \'{loaLevelName}\' is mapped to rubric levels {otherRubricLevelNames} and {lastRubricLevelName}',
		'loaLevelLabelSingleRubric': 'Achievement level \'{loaLevelName}\' is mapped to rubric level {rubricLevelName}',
		'loaLevelUpdatedLabelMultiRubric': 'Achievement level \'{loaLevelName}\' is now mapped to rubric levels {otherRubricLevelNames} and {lastRubricLevelName}',
		'loaLevelUpdatedLabelSingleRubric': 'Achievement level \'{loaLevelName}\' is now mapped to rubric level {rubricLevelName}',
		'loaOverlayHeading': 'Achievement Levels',
		'loaSliderLabel': 'Grænse for gennemførelse mellem \'{loaLevel1}\' og \'{loaLevel2}\'. Brug venstre og højre piletast til at flytte grænsen.',
		'loaThresholdMovementNotif': 'Threshold moved {direction, select, left {left} right {right}}',
		'lockedAlertText': 'Denne rubrik kan ikke redigeres, da den allerede er blevet brugt til at vurdere elevens arbejde',
		'makeRubricAvailableHeader': 'Make rubric available to',
		'moveCriterionDown': 'Flyt kriterium {position} ned',
		'moveCriterionUp': 'Flyt kriterium {position} op',
		'name': 'Navn',
		'nameIsRequired': 'Navn påkrævet',
		'nameSaveFailed': 'Det lykkedes ikke at gemme navnet',
		'newAssociationLabel': 'Tillad nye tilknytninger i',
		'numberAndPercentage': '{number} %',
		'numberAndPoints': '{number} {number, plural, =1 {point} other {point}}',
		'options': 'Indstillinger',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': 'Overordnet beskrivelse af niveau {levelName}',
		'overallFeedback': 'Overordnet feedback',
		'overallFeedbackAriaLabel': 'Overordnet feedback for niveau {levelName}',
		'overallLevelDeleted': '{name} overordnet niveau slettet',
		'overallLevelName': 'Navn på overordnet niveau',
		'overallLevelRangeStart': 'Startområde for overordnet niveau',
		'overallScore': 'Samlet score',
		'overallScoreDescription': 'Hver aflevering får tildelt et præstationsniveau på baggrund af dens samlede rubrikscore.',
		'overallScoreHeader': 'Samlet score',
		'overallScoreLevel': 'Overordnet scoreniveau',
		'overriddenScoreTip': 'Kriteriescore er blevet tilsidesat',
		'overriddenTotalScoreTip': 'Den samlede rubrikscore er blevet tilsidesat. Scoren opdateres ikke længere afhængigt af ændringer i rubrikken.',
		'overrideLabel': 'Override',
		'percentage': '{number} %',
		'points': '{number} {number, plural, =1 {point} other {point}}',
		'pointsAbbreviation': 'pt',
		'pointsAreRequired': 'Pointværdi påkrævet',
		'pointsMinimum': 'Mindst {number} {number, plural, =1 {point} other {point}}',
		'pointsSaveFailed': 'Det lykkedes ikke at gemme point',
		'preview': 'Forhåndsvisning',
		'rangeStartInvalid': 'Startområdeværdi er ugyldig',
		'rangeStartOrMore': 'eller mere',
		'rangeStartRequired': 'Startområdeværdi påkrævet',
		'refreshText': 'opdater siden',
		'removeCriterion': 'Fjern kriterium {name}',
		'removeLevel': 'Fjern niveau {name}',
		'removeOverallLevel': 'Fjern overordnet niveau {name}',
		'reverseLevelOrder': 'Omvendt niveaurækkefølge',
		'reverseLevelsSuccessful': 'Niveaurækkefølgen blev vendt om',
		'rubricAlignmentSaveFailed': 'Det lykkedes ikke af ændre justering af rubrikken.',
		'rubricFeedbackCopyOption': 'Inkluder rubrikfeedback i Overordnet feedback',
		'rubricLevel': 'Rubrikniveau',
		'rubricLevelsHeading': 'Rubric Levels',
		'rubricLoadingErrorAriaAlert': 'Der opstod et problem med indlæsning af din rubrik. Den kan ikke vises.',
		'rubricLoadingErrorMessage': 'Vi kunne desværre ikke vise rubrikken.',
		'rubricSavingErrorAriaAlert': 'Der opstod et problem med at gemme din rubrik.',
		'rubricSavingErrorMessage': 'Noget gik galt. Kontrollér din rubrik.',
		'rubricStatus': 'Status: {status}',
		'rubricStatusArchived': 'Status: Archived',
		'rubricStatusDraft': 'Status: Draft',
		'rubricStatusPublished': 'Status: Published',
		'rubricSummaryA11y': 'Denne tabel viser kriterier og kriteriegruppenavne i den første kolonne. Den første række viser niveaunavne og omfatter scorer, hvis rubrikken anvender en numerisk scoremetode.',
		'rubricType': 'Type: {rubricType}',
		'rubricVisibility': 'Rubriksynlighed',
		'rubricVisibilityAlways': 'Rubrikken er synlig for elever',
		'rubricVisibilityNever': 'Rubrikken er skjult for elever',
		'rubricVisibilityOnceFeedbackPosted': 'Rubrikken er skjult for elever indtil feedback er offentliggjort',
		'rubricVisibilitySaveFailed': 'Det lykkedes ikke af ændre rubrikkens synlighed.',
		'scoreOutOf': '{score} / {outOf}',
		'scoresVisibilityHidden': 'Scorer er skjult for elever',
		'scoresVisibilityVisible': 'Scorer er synlig for elever',
		'scoring': 'Score: {method}',
		'selectNextLevel': 'Select Next Level',
		'selectPreviousLevel': 'Select Previous Level',
		'setScoreVisibilityFailed': 'Det lykkedes ikke at indstille scorens synlighed.',
		'shareRubricSaveFailed': 'Changing org unit availability failed',
		'sharedAlertText': 'This rubric can only be edited from the org unit that shared it',
		'statistics': 'Statistik',
		'total': 'Samlet',
		'totalMobile': 'Total Score',
		'totalScoreAriaLabel': 'Rubrikken er ud fra en samlet score på {value} point.',
		'totalScoreLabel': 'Rubric Total Score'
	}
};
