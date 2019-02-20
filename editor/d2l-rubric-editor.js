/**
`d2l-rubric-editor`
Creates and edits a rubric

@demo demo/d2l-rubric-editor.html
*/
import '@polymer/polymer/polymer-legacy.js';

import './d2l-rubric-structure-editor.js';
import './d2l-rubric-editor-cell-styles.js';
import './d2l-rubric-error-handling-behavior.js';
import './d2l-rubric-editor-header.js';
import '../localize-behavior.js';
import './d2l-rubric-dropdown-menu-behavior.js';
import { IronA11yAnnouncer } from '@polymer/iron-a11y-announcer/iron-a11y-announcer.js';
import 'd2l-accordion/d2l-accordion-collapse.js';
import 'd2l-colors/d2l-colors.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import 'd2l-tooltip/d2l-tooltip.js';
import 'd2l-hypermedia-constants/d2l-hypermedia-constants.js';
import 'd2l-inputs/d2l-input-checkbox.js';
import 'd2l-dropdown/d2l-dropdown-button-subtle.js';
import 'd2l-dropdown/d2l-dropdown-menu.js';
import 'd2l-alert/d2l-alert.js';
import 'd2l-link/d2l-link.js';
import './d2l-rubric-visibility-editor.js';
import 's-html/s-html.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = /*html*/`<dom-module id="d2l-rubric-editor">
	<template strip-whitespace="">
		<style include="d2l-rubric-editor-cell-styles">
			:host {
				display: block;
			}

			[hidden] {
				display: none;
			}

			#accordion-container {
				margin: 3rem var(--d2l-rubric-editor-end-gutter-width) 0;
				margin-left: var(--d2l-rubric-editor-start-gutter-width);
				padding: 0.9rem 0.5rem 0.9rem 0;
				border-top: 1px solid var(--d2l-color-mica);
				border-bottom: 1px solid var(--d2l-color-mica);
			}

			:dir(rtl) #accordion-container {
				padding-left: 0.5rem;
				padding-right: 0;
				margin-left: var(--d2l-rubric-editor-end-gutter-width);
				margin-right: var(--d2l-rubric-editor-start-gutter-width);
			}

			#options-container {
				margin-top: 1.2rem;
			}

			#visibility-container {
				line-height: 0;
			}

			#hide-score-container {
				margin-top: 2.15rem;
			}

			#rubric-name-container {
				margin: 0.5rem var(--d2l-rubric-editor-end-gutter-width);
				margin-left: var(--d2l-rubric-editor-start-gutter-width);
			}
			:dir(rtl) #rubric-name-container {
				margin-left:  var(--d2l-rubric-editor-end-gutter-width);
				margin-right: var(--d2l-rubric-editor-start-gutter-width);
			}
			label {
				@apply --d2l-label-text;
			}

			d2l-rubric-text-editor {
				min-height: 4rem;
			}

			.d2l-body-compact {
				padding-top: 1px;
				padding-bottom: 0.8rem;
			}

			#hide-score-container {
				display: inline-block;
			}

			#hide-score-checkbox {
				padding-top: 0.5rem;
				margin: 0;
			}

			#status-dropdown {
				margin-left: 0.3rem;
				margin-right: -0.7rem; /** edge of dropdown arrow to align with rubric **/
			}

			:dir(rtl) #status-dropdown {
				margin-left: -0.7rem; /** edge of dropdown arrow to align with rubric **/
				margin-right: 0.3rem;
			}

			#title-dropdown {
				margin-left: 0.5rem;
				margin-right: 0;
			}

			:dir(rtl) #title-dropdown {
				margin-left: 0;
				margin-right: 0.5rem;
			}

			d2l-alert {
				margin: 0;
				margin-left: var(--d2l-rubric-editor-start-gutter-width);
				margin-right: var(--d2l-rubric-editor-end-gutter-width);
			}
			:dir(rtl) d2l-alert {
				margin-right: var(--d2l-rubric-editor-start-gutter-width);
				margin-left: var(--d2l-rubric-editor-end-gutter-width);
			}
			.checkbox-fieldset {
				border: 0;
				margin: 0;
				margin-inline-end: 0;
				margin-inline-start: 0;
				padding: 0;
				padding-block-start: 0;
				padding-inline-start: 0;
				padding-block-end: 0;
				padding-inline-end: 0;
			}
			.checkbox-fieldset > legend {
				padding-inline-start: 0;
				padding-inline-end: 0;
				padding-bottom: 0.6rem;
			}
			.checkbox-fieldset > div[aria-invalid=true] {
				border-style: solid;
				border-width: 1px;
				border-color: #cd2026;
				border-radius: 0.3rem;
				padding: 8px;
			}
			.checkbox-fieldset > div[aria-invalid=true]:hover {
				border-width: 2px;
			}
			.checkbox-fieldset d2l-input-checkbox {
				margin-bottom: 0.7rem;
			}
			.checkbox-fieldset d2l-input-checkbox:last-of-type {
				margin-bottom: 0;
			}
			.help-link {
				margin-top: 0.6rem;
				margin-bottom: 0.7rem;
			}

			d2l-rubric {
				margin-left: var(--d2l-rubric-editor-start-gutter-width);
				margin-right: var(--d2l-rubric-editor-end-gutter-width);
			}

			:dir(rtl) d2l-rubric {
				margin-right: var(--d2l-rubric-editor-start-gutter-width);
				margin-left: var(--d2l-rubric-editor-end-gutter-width);
			}
			#description-html-container {
				margin-top: 8px;
				margin-bottom: 8px;
			}
			#description-html-container > s-html::shadow > * {
				margin: 0px;
			}
			#rubric-description-container {
				margin-top: 2.3rem;
			}

			#rubric-description-container > .d2l-body-compact {
				padding-top: 0.1rem;
				padding-bottom: 0.5rem;
			}
			#advanced-availability-associations {
				margin-top: 2.3rem;
			}
			#associations-options {
				margin-top: 0.05rem;
			}
		</style>
		<d2l-rubric-editor-header id="rubric-header">
			<div slot="title">[[localize('editRubric')]]</div>
			<d2l-dropdown id="title-dropdown" slot="title-dropdown-menu">
				<d2l-button-icon class="d2l-dropdown-opener" icon="d2l-tier1:chevron-down"></d2l-button-icon>
				<d2l-dropdown-menu>
					<d2l-menu id="title-menu">
						<d2l-menu-item text="[[localize('statistics')]]" disabled="[[!_hasStatisticsLink]]" on-d2l-menu-item-select="_handleSelectStatistics">
						</d2l-menu-item>
						<d2l-menu-item text="[[localize('preview')]]" disabled="[[!_hasPreviewLink]]" on-d2l-menu-item-select="_openPreviewDialog">
						</d2l-menu-item>
					</d2l-menu>
				</d2l-dropdown-menu>
			</d2l-dropdown>
			<d2l-dropdown-button-subtle id="status-dropdown" slot="header-end-content" text="[[_rubricStatusText]]" hidden$="[[!_canChangeStatus]]" on-d2l-menu-item-change="_handleStatusChange">
				<d2l-dropdown-menu>
					<d2l-menu id="status-menu" label="Status"></d2l-menu>
				</d2l-dropdown-menu>
			</d2l-dropdown-button-subtle>
		</d2l-rubric-editor-header>
		<template is="dom-repeat" items="[[_alerts]]">
			<d2l-alert type="[[item.alertType]]" has-close-button="">
				[[item.alertMessage]]
			</d2l-alert>
		</template>
		<div id="rubric-name-container">
			<label for="rubric-name">[[localize('name')]]*</label>
			<template is="dom-if" if="[[!_isLocked]]">
				<d2l-input-text id="rubric-name" value="[[_rubricName]]" on-change="_saveName" aria-invalid="[[isAriaInvalid(_nameInvalid)]]" aria-label$="[[localize('name')]]" disabled="[[!_canEditName]]" prevent-submit="">
				</d2l-input-text>
				<template is="dom-if" if="[[_nameInvalid]]">
					<d2l-tooltip id="name-bubble" for="rubric-name" position="bottom">
						[[_nameInvalidError]]
					</d2l-tooltip>
				</template>
			</template>
			<template is="dom-if" if="[[_isLocked]]">
				<h4>[[_rubricName]]</h4>
			</template>
		</div>
		<template is="dom-if" if="[[!_isLocked]]">
			<d2l-rubric-structure-editor is-single-page-rubric="[[isSinglePageRubric]]" rich-text-enabled="[[richTextEnabled]]" percentage-format-alternate="[[percentageFormatAlternate]]" href="[[href]]" token="[[token]]">
			</d2l-rubric-structure-editor>
		</template>
		<template is="dom-if" if="[[_isLocked]]">
			<d2l-rubric token="[[token]]" href="[[href]]" overall-score-flag="" read-only="">
			</d2l-rubric>
		</template>

		<div id="accordion-container">
			<d2l-accordion-collapse title="[[localize('options')]]" flex="" opened$="[[_isLocked]]">
				<div id="options-container">
					<div id="visibility-container">
						<d2l-rubric-visibility-editor href="[[href]]" token="[[token]]"></d2l-rubric-visibility-editor>
					</div>
					<div id="hide-score-container">
						<label id="hide-score-checkbox-label" for="hide-score-checkbox">[[localize('hideScoreHeader')]]</label>
						<d2l-input-checkbox id="hide-score-checkbox" disabled="[[!_canHideScore]]" on-change="_toggleHideScore" checked$="[[_scoreIsHidden]]" aria-invalid="[[isAriaInvalid(_setScoreVisibilityFailed)]]">
							[[localize('hideScore')]]
						</d2l-input-checkbox>
						<template is="dom-if" if="[[_setScoreVisibilityFailed]]">
							<d2l-tooltip id="hide-score-bubble" for="hide-score-checkbox" position="bottom">
								[[_setScoreVisibilityFailedError]]
							</d2l-tooltip>
						</template>
					</div>
					<div id="rubric-description-container">
						<template is="dom-if" if="[[!_isLocked]]">
							<label for="rubric-description">[[localize('description')]]</label>
							<div class="d2l-body-compact">[[localize('descriptionInfo')]]</div>
							<d2l-rubric-text-editor id="rubric-description" token="[[token]]" aria-invalid="[[isAriaInvalid(_descriptionInvalid)]]" aria-label$="[[localize('description')]]" disabled="[[!_canEditDescription]]" value="[[_rubricDescription]]" on-change="_saveDescription" rich-text-enabled="[[_richTextAndEditEnabled(richTextEnabled,_canEditDescription)]]">
							</d2l-rubric-text-editor>
							<template is="dom-if" if="[[_descriptionInvalid]]">
								<d2l-tooltip id="rubric-description-bubble" for="rubric-description" position="bottom">
									[[_descriptionInvalidError]]
								</d2l-tooltip>
							</template>

						</template>
						<template is="dom-if" if="[[_isLocked]]">
							<label for="rubric-description">[[localize('descriptionReadOnlyMode')]]</label>
							<template is="dom-if" if="[[richTextEnabled]]">
								<div id="description-html-container">
									<s-html html$="[[_getReadOnlyDescription(_rubricDescription, 1)]]"></s-html>
								</div>
							</template>
							<template is="dom-if" if="[[!richTextEnabled]]">
								<h4>
									[[_getReadOnlyDescription(_rubricDescription, 0)]]
								</h4>
							</template>
						</template>
					</div>
					<div id="advanced-availability-associations" hidden$="[[_isArrayEmpty(_associations)]]">
						<label>[[localize('advancedAvailabilityHeader')]]</label>

						<fieldset class="checkbox-fieldset" id="associations">
							<legend class="d2l-body-compact">[[localize('newAssociationLabel')]]</legend>
							<div id="associations-options" aria-invalid$="[[isAriaInvalid(_associationsInvalid)]]">
								<template is="dom-repeat" items="[[_associations]]" as="assn">
									<d2l-input-checkbox class="association" checked$="[[_isAssociationChecked(assn)]]" disabled="[[!_canUpdateAssociation(assn)]]" value="[[index]]" on-change="_handleAssociations">
										[[assn.title]]
									</d2l-input-checkbox>
								</template>
							</div>
							<template is="dom-if" if="[[_associationsInvalid]]">
								<d2l-tooltip id="associations-bubble" for="associations" position="bottom">
									[[_associationsInvalidError]]
								</d2l-tooltip>
							</template>

						</fieldset>
						<div class="help-link d2l-body-compact">
							<d2l-link on-click="_openHelpDialog" href="">[[localize('helpAssociations')]]</d2l-link>
						</div>
					</div>
				</div>
			</d2l-accordion-collapse>
		</div>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-rubric-editor',
	properties: {
		percentageFormatAlternate: {
			type: Boolean,
			value: false
		},
		richTextEnabled: {
			type: Boolean,
			value: false
		},

		/**
		* The href for this siren entity
		*/
		href: {
			type: String,
			reflectToAttribute: true
		},
		/**
		* The user access token
		*/
		token: {
			type: Object,
		},
		_rubricName: {
			type: String,
			computed: '_getRubricName(entity)',
		},
		_canEditName: {
			type: Boolean,
			computed: '_canEditRubricName(entity)',
		},
		_nameInvalid: {
			type: Boolean,
			value: false,
		},
		_nameInvalidError: {
			type: String,
			value: null,
		},
		_nameRequired: {
			type: Boolean,
			computed: '_isNameRequired(entity)',
		},
		isSinglePageRubric: {
			type: Boolean,
			value: true,
			readOnly: true,
		},
		_descriptionEntity: {
			type: Object,
			computed: '_getRubricDescriptionEntity(entity)'
		},
		_rubricDescription: {
			type: String,
			computed: '_getRubricDescription(_descriptionEntity)',
		},
		_canEditDescription: {
			type: Boolean,
			computed: '_canEditRubricDescription(_descriptionEntity)',
		},
		_descriptionInvalid: {
			type: Boolean,
			value: false,
		},
		_descriptionInvalidError: {
			type: String,
			value: null,
		},
		_canHideScore: {
			type: Boolean,
			computed: '_canHideScoreVisibility(entity)',
		},
		_scoreIsHidden: {
			type: Boolean,
			computed: '_computeScoreIsHidden(entity)'
		},
		_setScoreVisibilityFailed: {
			type: Boolean,
			value: false,
		},
		_setScoreVisibilityFailedError: {
			type: String,
			value: null,
		},
		_canChangeStatus: {
			type: Boolean,
			value: false
		},
		_rubricStatusText: {
			type: String,
			value: null
		},
		_rubricStatus: {
			type: String,
			value: null
		},
		_hasStatisticsLink: {
			type: Boolean,
			computed: '_checkForStatisticsLink(entity)'
		},
		_statisticsLink: {
			type: String,
			computed: '_getStatisticsLink(entity)'
		},
		_hasPreviewLink: {
			type: Boolean,
			computed: '_checkForPreviewLink(entity)'
		},
		_previewLink: {
			type: String,
			computed: '_getPreviewLink(entity)'
		},
		_previewDialog: {
			type: Object,
			value: null
		},
		_associations: {
			type: Object,
			computed: '_computeAssociations(entity)'
		},
		_associationsInvalid: {
			type: Boolean,
			value: false,
		},
		_associationsInvalidError: {
			type: String,
			value: null,
		},
		_helpAssociations: {
			type: Object,
			computed: '_getHelpAssociations(entity)'
		},
		_isLocked: {
			type: Boolean,
			value: false,
			observer: '_loadRubricPreviewComponents'
		},
		_isHolistic: {
			type: Boolean,
			value: false
		}
	},
	behaviors: [
		D2L.PolymerBehaviors.Rubric.EntityBehavior,
		D2L.PolymerBehaviors.Siren.SirenActionBehavior,
		window.D2L.Hypermedia.HMConstantsBehavior,
		D2L.PolymerBehaviors.Rubric.LocalizeBehavior,
		D2L.PolymerBehaviors.Rubric.ErrorHandlingBehavior,
		D2L.PolymerBehaviors.Rubric.DropdownMenuBehavior
	],
	listeners: {
		'd2l-siren-entity-save-start': '_onEntitySave',
		'd2l-siren-entity-save-error': '_onEntitySave',
		'd2l-siren-entity-save-end': '_onEntitySave'
	},
	observers: [
		'_onEntityChanged(entity)'
	],
	ready: function() {
		this.addEventListener('d2l-rubric-editor-save-error', this._handleSaveError.bind(this));
	},
	attached: function() {
		IronA11yAnnouncer.requestAvailability();
	},
	_getReadOnlyDescription: function(value, isHtml) {
		if (isHtml) {
			return value || '<p>' + this.localize('descriptionReadOnlyPlaceholder') + '</p>';
		}
		return value || this.localize('descriptionReadOnlyPlaceholder');
	},
	_isArrayEmpty: function(obj) {
		return obj && Array.isArray(obj) && obj.length < 1;
	},
	_handleSaveError: function(e) {
		this._clearAlerts();
		this.fire('iron-announce', { text: this.localize('rubricSavingErrorAriaAlert') }, { bubbles: true });
		this._addAlert('error', e.message, this.localize('rubricSavingErrorMessage'));
	},
	_handleAssociations: function(e) {
		var associationEntity = this._associations[e.currentTarget.value];

		var action = associationEntity.getActionByName('update');
		if (!action) return;
		this.toggleBubble('_associationsInvalid', false, 'associations-bubble');

		var fields = [{ 'name': 'allowed', 'value': e.currentTarget.checked }];
		this.performSirenAction(action, fields).then(function() {
			this.fire('d2l-rubric-associations-saved');
		}.bind(this)).catch(function(err) {
			this.handleValidationError('associations-bubble', '_associationsInvalid', 'associationsSaveFailed', err);
		}.bind(this));
	},
	_canUpdateAssociation: function(associationEntity) {
		return associationEntity.hasActionByName('update');
	},
	_canEditRubricName: function(entity) {
		return entity && entity.hasActionByName('update-name');
	},
	_getRubricName: function(entity) {
		var action = entity && entity.getActionByName('update-name');
		if (action) {
			var field = action.getFieldByName('name');
			if (field) {
				return field.value;
			}
		} else {
			return entity && entity.properties.name;
		}
	},
	_isNameRequired: function(entity) {
		var action = entity && entity.getActionByName('update-name');
		if (!action) {
			return false;
		}
		var field = action.getFieldByName('name');
		if (!field) {
			return false;
		}
		return field.hasClass('required');
	},
	_checkForStatisticsLink: function(entity) {
		return entity && entity.hasLinkByClass('statistics');
	},
	_getStatisticsLink: function(entity) {
		var linkEntity = entity && entity.getLinkByClass('statistics');
		if (linkEntity) {
			return linkEntity.href;
		}
	},
	_checkForPreviewLink: function(entity) {
		return entity && entity.hasLinkByClass('preview');
	},
	_getPreviewLink: function(entity) {
		var linkEntity = entity && entity.getLinkByClass('preview');
		if (linkEntity) {
			return linkEntity.href;
		}
	},
	_getRubricDescriptionEntity: function(entity) {
		return entity && entity.getSubEntityByClass(this.HypermediaClasses.rubrics.description);
	},
	_canEditRubricDescription: function(entity) {
		return entity && entity.hasActionByName('update-description');
	},
	_getRubricDescription: function(entity) {
		var action = entity && entity.getActionByName('update-description');
		if (action) {
			var field = action.getFieldByName('description');
			if (field) {
				return field.value;
			}
		} else {
			var descriptionEntity = this._getRubricDescriptionEntity(this.entity);
			return descriptionEntity &&
				(this.richTextEnabled ? descriptionEntity.properties.html : descriptionEntity.properties.text);
		}
	},
	_getHelpAssociations: function(entity) {
		return entity && entity.getSubEntityByRel('help');
	},
	_onEntityChanged: function(entity) {
		this._nameInvalid = false;
		this._associationsInvalid = false;

		if (entity) {
			if (entity.hasActionByName('update-status')) {
				var options = entity.getActionByName('update-status')
					.getFieldByName('rubric-status').value || [];

				//Only re-populate the menu if _canChangeStatus was previously null/undefined or false
				if (!this._canChangeStatus) {
					var selected = this.populateDropdownMenuOptions('status-menu', options);
					if (selected) {
						this._rubricStatus = selected.value;
						this._rubricStatusText = this.localize('rubricStatus', 'status', selected.title);
					}
				}
				this._canChangeStatus = true;
			}
			this._isLocked = entity.hasClass('locked');
			this._isHolistic = entity.hasClass(this.HypermediaClasses.rubrics.holistic);
		}

	},
	_saveName: function(e) {
		var action = this.entity.getActionByName('update-name');
		if (action) {
			if (this._nameRequired && !e.target.value.trim()) {
				this.handleValidationError('name-bubble', '_nameInvalid', 'nameIsRequired');
			} else {
				this.toggleBubble('_nameInvalid', false, 'name-bubble');
				var fields = [{ 'name': 'name', 'value': e.target.value }];
				this.performSirenAction(action, fields).then(function() {
					this.fire('d2l-rubric-name-saved');
				}.bind(this)).catch(function(err) {
					this.handleValidationError('name-bubble', '_nameInvalid', 'nameSaveFailed', err);
				}.bind(this));
			}
		}
	},
	_onEntitySave: function(e) {
		this.$$('#rubric-header').onEntitySave(e);
	},
	_saveDescription: function(e) {
		var action = this._descriptionEntity.getActionByName('update-description');
		if (action) {
			this.toggleBubble('_descriptionInvalid', false, 'rubric-description-bubble');
			var fields = [{ 'name': 'description', 'value': e.detail.value }];
			this.performSirenAction(action, fields).then(function() {
				this.fire('d2l-rubric-description-saved');
			}.bind(this)).catch(function(err) {
				this.handleValidationError('rubric-description-bubble', '_descriptionInvalid', 'descriptionSaveFailed', err);
			}.bind(this));
		}
	},
	_richTextAndEditEnabled: function(richTextEnabled, canEditDescription) {
		return richTextEnabled && canEditDescription;
	},
	_canHideScoreVisibility: function(entity) {
		return entity && entity.hasActionByName('update-score-visibility');
	},
	_computeScoreIsHidden: function(entity) {
		return entity && entity.hasClass('scoresHiddenForStudents');
	},
	_toggleHideScore: function(e) {
		var action = this.entity.getActionByName('update-score-visibility');
		if (action) {
			var checkbox = e.target;
			checkbox.style.borderColor = '';
			checkbox.disabled = true;
			this.toggleBubble('_setScoreVisibilityFailed', false, 'hide-score-bubble');
			var fields = [{ 'name': 'scoreVisible', 'value': !checkbox.checked }];
			this.performSirenAction(action, fields).then(function() {
				this.fire('d2l-rubric-score-visibility-set');
				if (checkbox.checked) {
					this.fire('iron-announce', { text: this.localize('scoresVisibilityHidden') }, { bubbles: true });
				} else {
					this.fire('iron-announce', { text: this.localize('scoresVisibilityVisible') }, { bubbles: true });
				}
			}.bind(this)).then(function() {
				checkbox.disabled = false;
			}.bind(this)).catch(function(err) {
				checkbox.checked = !checkbox.checked;
				checkbox.style.borderColor = '#cd2026';
				checkbox.disabled = false;
				this.handleValidationError('hide-score-bubble', '_setScoreVisibilityFailed', 'setScoreVisibilityFailed', err);
			}.bind(this));
		}
	},
	_computeAssociations: function(entity) {
		var associations = entity && entity.getSubEntityByRel(this.HypermediaRels.Rubrics.allowedAssociations);
		var associationEntities = associations && associations.getSubEntitiesByRel('item');
		return associationEntities || [];
	},
	_isAssociationChecked: function(associationEntity) {
		var action = associationEntity.getActionByName('update');
		if (action) {
			var field = action.getFieldByName('allowed');
			return field.value;
		}
		return associationEntity.properties.allowed;
	},
	_handleStatusChange: function(e) {
		var menuButton = e.currentTarget;
		var menuItem = e.target;
		var dropdownMenu = dom(menuButton).querySelector('d2l-dropdown-menu');
		if (!this._canChangeStatus || menuItem.value === this._rubricStatus) return;

		dom(dropdownMenu).removeAttribute('opened');
		this.disableMenu(menuButton);

		var action = this.entity.getActionByName('update-status');
		var fields = [{'name':'status', 'value':menuItem.value}];
		this.performSirenAction(action, fields).then(function() {
			this._rubricStatusText = this.localize('rubricStatus', 'status', menuItem.text);
			this._rubricStatus = menuItem.value;
			this.fire('d2l-rubric-status-changed');
			this.fire('iron-announce', { text: this.localize('changeRubricStatusSuccessful', 'status', menuItem.text) }, { bubbles: true });
		}.bind(this)).then(function() {
			this.enableMenu(menuButton);
		}.bind(this)).catch(function(err) {
			this.resetSelectedMenuItem(menuButton, this._rubricStatus);
			this.enableMenu(menuButton);
			this.fire('d2l-rubric-editor-save-error', { message: err.message });
		}.bind(this));
	},
	_handleSelectStatistics: function() {
		if (this._statisticsLink) {
			var ni = new D2L.NavInfo();
			ni.SetNavigation(this._statisticsLink);
			ni.SetTarget('_blank');
			Nav.Go(ni); // eslint-disable-line no-undef
		}
	},
	_openPreviewDialog: function() {
		if (!this._hasPreviewLink) {
			return;
		}

		if (this._previewDialog !== null) {
			this._previewDialog.Close();
		}

		var dialogName = Math.random().toString();
		dialogName = 'previewRubric_' + dialogName.replace('.', '');
		this._previewDialog = new D2L.NonModalDialog(dialogName);
		var title = new D2L.LP.Text.PlainText(this.localize('preview'));
		this._previewDialog.SetTitle(title);
		this._previewDialog.SetButtonTableOffset(27);
		this._previewDialog.AddPrimaryButton(D2L.Control.Button.Type.Close);
		this._previewDialog.SetSize('1315px', '650px');
		var relativeUrl = this._getRelativeUrl(this._previewLink);
		this._previewDialog.SetSrc(relativeUrl);
		this._previewDialog.Open();
	},
	_getRelativeUrl: function(absoluteUrl) {
		var a = document.createElement('a');
		a.href = absoluteUrl;
		return (a.pathname[0] === '/' ? '' : '/') + a.pathname + a.search;
	},
	_openHelpDialog: function(e) {
		e.preventDefault();
		if (!this._helpAssociations) {
			return;
		}
		D2L.LP.Web.UI.Desktop.Controls.InlineHelp.PopupHelp(
			this._helpAssociations.properties.titleLangTerm,
			this._helpAssociations.properties.descriptionLangTerm
		);
	},
	_loadRubricPreviewComponents: function(isLocked) {
		if (isLocked) {
			import('../d2l-rubric.js');
		}
	}
});