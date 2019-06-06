import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
 * Zh lang terms
 * @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangZhBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangZhBehavior = {
	zh: {
		'addCriteriaGroup': '添加标准组',
		'addCriterion': '添加标准',
		'addFeedback': '添加反馈',
		'addLevel': '添加级别',
		'addLevelAppend': '在 {name} 之后添加新级别',
		'addLevelPrepend': '在 {name} 之前添加新级别',
		'addOverallLevelAppend': '在 {name} 之后添加新的整体级别',
		'addOverallLevelPrepend': '在 {name} 之前添加新的整体级别',
		'advancedAvailabilityHeader': '高级可用性',
		'associationsSaveFailed': '保存关联失败',
		'cellPoints': '标准单元格分数',
		'changeConfirmationNo': '取消',
		'changeConfirmationYes': '继续',
		'changeRubricStatusSuccessful': '量规状态更改为 {status}',
		'changeRubricTypeSuccessful': '量规类别更改为 {rubricType}',
		'changeRubricTypeWarnMessage': '将您的量规从“分析型”更改为“整体型”可能导致数据丢失。',
		'changeRubricTypeWarnTitle': '更改量规类别？',
		'changeScoringSuccessful': '评分方法更改为 {method}',
		'clearFeedback': '清除反馈',
		'clearOverride': '清除改写',
		'closeDialog': '关闭',
		'criterionAdded': '已添加新标准',
		'criterionAriaLabel': '标准 {index, number}/{count, number}',
		'criterionDeleted': '{name} 标准已删除',
		'criterionDescriptionAriaLabel': '标准 {criterionName}，级别 {levelName} 的描述',
		'criterionFeedback': '标准反馈',
		'criterionFeedbackAriaLabel': '标准 {criterionName}，级别 {levelName} 的反馈',
		'criterionMoved': '{name} 现在为标准 {position}',
		'criterionNameAriaLabel': '标准名称',
		'criterionOutOf': '标准 {name} 超出 {value} 分',
		'criterionPlaceholder': '单击编辑标准',
		'dashOutOf': '— / {outOf}',
		'deleteConfirmationNo': '取消',
		'deleteConfirmationYes': '删除',
		'deleteCriterionConfirmationText': '此操作将永久删除此标准及其内容。',
		'deleteCriterionConfirmationTitle': '删除此标准？',
		'deleteLevelConfirmationText': '此操作将永久删除此级别及其内容。',
		'deleteLevelConfirmationTitle': '删除此级别？',
		'description': '描述',
		'descriptionInfo': '为您的个人参考添加描述。该内容不会与学生共享',
		'descriptionReadOnlyMode': '描述（对学生不可见）',
		'descriptionReadOnlyPlaceholder': '无描述',
		'descriptionSaveFailed': '保存描述失败',
		'editFeedback': '编辑反馈',
		'editRubric': '编辑量规',
		'errorText': '糟糕！我们无法与您建立连接。您可能需要刷新页面或稍后重试。',
		'feedback': '反馈',
		'feedbackSaveFailed': '保存反馈失败',
		'groupAdded': '已添加新标准组',
		'groupName': '标准组名称',
		'groupNameSaveFailed': '保存标准组名称失败',
		'groupRegion': '标准组 {name}',
		'helpAssociations': '关联是什么？',
		'hideScore': '向学生隐藏分数',
		'hideScoreHeader': '分数可见性',
		'initialFeedback': '初始反馈',
		'levelAchieved': '已达到的级别：',
		'levelAppended': '新级别已添加到 {name} 之后',
		'levelDeleted': '已删除 {name} 级别',
		'levelName': '级别名称',
		'levelNameAndBulletPoint': '{levelName} \u2022',
		'levelPoints': '级别分数',
		'levelPrepended': '新级别已添加到 {name} 之前',
		'lockedAlertText': '此量规无法编辑，因为它已用于评估学员作业',
		'moveCriterionDown': '向下移动标准 {position}',
		'moveCriterionUp': '向上移动标准 {position}',
		'name': '名称',
		'nameIsRequired': '需要提供名称',
		'nameSaveFailed': '保存名称失败',
		'newAssociationLabel': '允许以下项目的新关联',
		'numberAndPercentage': '{number} %',
		'numberAndPoints': '{number} {number, plural, one {分} other {分}}',
		'options': '选项',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': '级别 {levelName} 的整体描述',
		'overallFeedback': '整体反馈',
		'overallFeedbackAriaLabel': '级别 {levelName} 的整体反馈',
		'overallLevelDeleted': '已删除 {name} 整体级别',
		'overallLevelName': '整体级别名称',
		'overallLevelRangeStart': '整体级别开始范围',
		'overallScore': '总分数',
		'overallScoreDescription': '根据其总量规分数为每次提交分配成绩级别。',
		'overallScoreHeader': '总分数',
		'overriddenScoreTip': '标准分数已改写',
		'overriddenTotalScoreTip': '总量规分数已改写。该分数将不再根据量规更改进行更新。',
		'overrideLabel': 'Override',
		'percentage': '{number} %',
		'points': '{number} {number, plural, one {分} other {分}}',
		'pointsAbbreviation': '分数',
		'pointsAreRequired': '需要提供分数值',
		'pointsMinimum': '{number} {number, plural, one {分} other {分}} minimum',
		'pointsSaveFailed': '保存分数失败',
		'preview': '预览',
		'rangeStartInvalid': '范围开始值无效',
		'rangeStartOrMore': '或更多',
		'rangeStartRequired': '需要提供范围开始值',
		'refreshText': '刷新页面',
		'removeCriterion': '移除标准 {name}',
		'removeLevel': '移除级别 {name}',
		'removeOverallLevel': '删除整体级别 {name}',
		'reverseLevelOrder': '反转级别顺序',
		'reverseLevelsSuccessful': '级别顺序已反转',
		'rubricLoadingErrorAriaAlert': '加载量规时出现问题。无法显示。',
		'rubricLoadingErrorMessage': '抱歉，我们无法显示量规。',
		'rubricSavingErrorAriaAlert': '保存量规时出现问题。',
		'rubricSavingErrorMessage': '出现错误。请检查您的量规。',
		'rubricStatus': '状态：{status}',
		'rubricSummaryA11y': '此表第一列中列出了标准和标准组名称。第一行列出了级别名称；如果量规使用数字评分方法，则还包括分数。',
		'rubricType': '类型：{rubricType}',
		'rubricVisibility': '量规可见性',
		'rubricVisibilityAlways': '量规对学生可见',
		'rubricVisibilityNever': '量规已向学生隐藏',
		'rubricVisibilityOnceFeedbackPosted': '发布反馈前，量规对学生隐藏',
		'rubricVisibilitySaveFailed': '更改量规可见性失败。',
		'scoreOutOf': '{score}/{outOf}',
		'scoresVisibilityHidden': '分数已向学生隐藏',
		'scoresVisibilityVisible': '分数对学生可见',
		'scoring': '评分方法：{method}',
		'setScoreVisibilityFailed': '设置分数可见性失败。',
		'statistics': '统计',
		'total': '总计',
		'totalScoreAriaLabel': '量规超出了总分数值 {value}。'
	}
};
