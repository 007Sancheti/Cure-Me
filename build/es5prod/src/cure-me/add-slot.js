define(["exports","./cure-me.js","./shared/api/ajax-call.js"],function(_exports,_cureMe,_ajaxCall){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0/* ignoreName */ /* skipSlots */ /* ignoreName */ /* skipSlots */});_exports.usageStatistics$1=_exports.usageStatistics=_exports.runIfDevelopmentMode=_exports.TimePickerElement=_exports.ThemePropertyMixin=_exports.ThemableMixin=_exports.TextFieldMixin=_exports.TextFieldElement=_exports.SelectElement=_exports.OverlayElement=_exports.MultiSelectListMixin=_exports.Lumo=_exports.ListMixin=_exports.ListBoxElement=_exports.ItemMixin=_exports.ItemElement=_exports.FocusablesHelper=_exports.ElementMixin=_exports.DisableUpgradeMixin=_exports.DirMixin=_exports.DatePickerMixin=_exports.DatePickerHelper=_exports.DatePickerElement=_exports.ControlStateMixin=_exports.ComboBoxPlaceholder=_exports.ComboBoxMixin=_exports.ComboBoxLightElement=_exports.ComboBoxDataProviderMixin=_exports.ButtonElement=_exports.$version=_exports.$vaadinUsageStatisticsCollect=_exports.$vaadinUsageStatistics=_exports.$vaadinTimePicker=_exports.$vaadinThemePropertyMixin=_exports.$vaadinThemableMixin=_exports.$vaadinTextFieldMixin=_exports.$vaadinTextField=_exports.$vaadinSelect=_exports.$vaadinOverlay=_exports.$vaadinMultiSelectListMixin=_exports.$vaadinListMixin=_exports.$vaadinListBox=_exports.$vaadinItemMixin=_exports.$vaadinItem=_exports.$vaadinFocusablesHelper=_exports.$vaadinElementMixin=_exports.$vaadinDirMixin=_exports.$vaadinDevelopmentModeDetector=_exports.$vaadinDatePickerMixin=_exports.$vaadinDatePickerHelper=_exports.$vaadinDatePicker=_exports.$vaadinControlStateMixin=_exports.$vaadinComboBoxPlaceholder=_exports.$vaadinComboBoxMixin=_exports.$vaadinComboBoxLight=_exports.$vaadinComboBoxDataProviderMixin=_exports.$vaadinButton=_exports.$disableUpgradeMixin=void 0;function _templateObject30_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n    :host {\n      display: block;\n      background: linear-gradient(to right, #c9d6ff, #e2e2e2);\n      overflow-y:hidden;\n    }\n    #form{\n        display:flex;\n        flex-direction:column;\n          border:2px solid black;\n          border-radius:5px;\n          padding:20px;\n          margin: 10px auto;\n          width:500px;\n          background:white;\n      }\n      #addSlot{\n          background-color:blue;\n          border-radius:5px;\n          color:white;\n          margin-top:10px;\n      }\n      h1{\n          color:blue;\n          text-align:center;\n      } \n      paper-button\n      {\n        background:white;\n      }\n    </style>\n    <app-location route={{route}}></app-location>\n    <div id=\"back\">\n    <paper-button on-click=\"_handleBack\" raised>Back </paper-button>\n    </div>\n    <ajax-call id=\"ajax\"></ajax-call>\n    <iron-form id=\"form\">\n    <h1>Add Slot</h1>\n    <vaadin-date-picker id=\"fromDate\" label=\"From \" placeholder=\"Choose Date\">\n  </vaadin-date-picker>\n  <vaadin-date-picker id=\"toDate\" label=\"To \" placeholder=\"Choose Date\">\n  </vaadin-date-picker>\n  <vaadin-time-picker id=\"fromTime\" label=\"From\" placeholder=\"Choose Time\"></vaadin-time-picker>\n  <vaadin-time-picker id=\"toTime\" label=\"To\" placeholder=\"Choose Time\"></vaadin-time-picker>\n  <vaadin-select id=\"location\" placeholder=\"Select\" label=\"Location\" >\n    <template>\n      <vaadin-list-box >\n      <template is=\"dom-repeat\" placeholder=\"Select\" items={{locationList}}>\n         <vaadin-item>{{item}}</vaadin-item>\n      </template>        \n      </vaadin-list-box>\n    </template>\n  </vaadin-select>\n  <paper-button id=\"addSlot\" label=\"Add Slot\" on-click=\"_onClick\" raised>Add Slot</paper-button>\n  </iron-form>\n  <paper-dialog id=\"modal\">\n  <h3> {{message}}</h3>\n  <div class=\"buttons\">\n  <paper-button dialog-dismiss on-click=\"_handleOk\">ok</paper-button>\n</paper-dialog>\n<paper-toast text={{message}} id=\"toast\"></paper-toast>"]);_templateObject30_941725104e2611ea968e0b510ccc7207=function _templateObject30_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject29_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-time-picker\" theme-for=\"vaadin-time-picker\">\n  <template>\n    <style include=\"lumo-field-button\">\n      [part~=\"toggle-button\"]::before {\n        content: var(--lumo-icons-clock);\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject29_941725104e2611ea968e0b510ccc7207=function _templateObject29_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject28_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [part~=\"toggle-button\"] {\n        cursor: pointer;\n      }\n\n      .input {\n        width: 100%;\n        min-width: 0;\n      }\n    </style>\n    <vaadin-combo-box-light allow-custom-value=\"\" item-label-path=\"value\" filtered-items=\"[[__dropdownItems]]\" disabled=\"[[disabled]]\" readonly=\"[[readonly]]\" theme$=\"[[theme]]\">\n      <template>\n        [[item.label]]\n      </template>\n      <vaadin-time-picker-text-field class=\"input\" name=\"[[name]]\" invalid=\"[[invalid]]\" autocomplete=\"off\" label=\"[[label]]\" required=\"[[required]]\" disabled=\"[[disabled]]\" prevent-invalid-input=\"[[preventInvalidInput]]\" pattern=\"[[pattern]]\" error-message=\"[[errorMessage]]\" autofocus=\"[[autofocus]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" role=\"application\" aria-live=\"assertive\" min$=\"[[min]]\" max$=\"[[max]]\" aria-label$=\"[[label]]\" clear-button-visible=\"[[clearButtonVisible]]\" i18n=\"[[i18n]]\" theme$=\"[[theme]]\">\n        <span slot=\"suffix\" part=\"toggle-button\" role=\"button\" aria-label$=\"[[i18n.selector]]\"></span>\n      </vaadin-time-picker-text-field>\n    </vaadin-combo-box-light>\n"],["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [part~=\"toggle-button\"] {\n        cursor: pointer;\n      }\n\n      .input {\n        width: 100%;\n        min-width: 0;\n      }\n    </style>\n    <vaadin-combo-box-light allow-custom-value=\"\" item-label-path=\"value\" filtered-items=\"[[__dropdownItems]]\" disabled=\"[[disabled]]\" readonly=\"[[readonly]]\" theme\\$=\"[[theme]]\">\n      <template>\n        [[item.label]]\n      </template>\n      <vaadin-time-picker-text-field class=\"input\" name=\"[[name]]\" invalid=\"[[invalid]]\" autocomplete=\"off\" label=\"[[label]]\" required=\"[[required]]\" disabled=\"[[disabled]]\" prevent-invalid-input=\"[[preventInvalidInput]]\" pattern=\"[[pattern]]\" error-message=\"[[errorMessage]]\" autofocus=\"[[autofocus]]\" placeholder=\"[[placeholder]]\" readonly=\"[[readonly]]\" role=\"application\" aria-live=\"assertive\" min\\$=\"[[min]]\" max\\$=\"[[max]]\" aria-label\\$=\"[[label]]\" clear-button-visible=\"[[clearButtonVisible]]\" i18n=\"[[i18n]]\" theme\\$=\"[[theme]]\">\n        <span slot=\"suffix\" part=\"toggle-button\" role=\"button\" aria-label\\$=\"[[i18n.selector]]\"></span>\n      </vaadin-time-picker-text-field>\n    </vaadin-combo-box-light>\n"]);_templateObject28_941725104e2611ea968e0b510ccc7207=function _templateObject28_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject27_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-select\" theme-for=\"vaadin-select\">\n  <template>\n    <style include=\"lumo-field-button\">\n      :host {\n        outline: none;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      [selected] {\n        padding-left: 0;\n        padding-right: 0;\n        flex: auto;\n      }\n\n      :host([theme~=\"small\"]) [selected] {\n        padding: 0;\n        min-height: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"align-right\"]) [selected] {\n        text-align: right;\n      }\n\n      :host([theme~=\"align-center\"]) [selected] {\n        text-align: center;\n      }\n\n      [part=\"toggle-button\"]::before {\n        content: var(--lumo-icons-dropdown);\n      }\n\n      /* Highlight the toggle button when hovering over the entire component */\n      :host(:hover:not([readonly]):not([disabled])) [part=\"toggle-button\"] {\n        color: var(--lumo-contrast-80pct);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-select-text-field\" theme-for=\"vaadin-select-text-field\">\n  <template>\n    <style>\n      :host([theme~=\"align-center\"]) ::slotted([part~=\"value\"]) {\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~=\"align-right\"]) ::slotted([part~=\"value\"]) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n      }\n\n      [part=\"input-field\"] {\n        cursor: default;\n      }\n\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        display: flex;\n      }\n\n      /* ShadyCSS limitation workaround */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) [selected]::before {\n        display: none;\n      }\n\n      [part=\"input-field\"]:focus {\n        outline: none;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-select-overlay\" theme-for=\"vaadin-select-overlay\">\n  <template>\n    <style include=\"lumo-menu-overlay\">\n      :host {\n        --_lumo-item-selected-icon-display: block;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      [part~=\"overlay\"] {\n        min-width: var(--vaadin-select-text-field-width);\n      }\n\n      /* Small viewport adjustment */\n      :host([phone]) {\n        top: 0 !important;\n        right: 0 !important;\n        bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n        left: 0 !important;\n        align-items: stretch;\n        justify-content: flex-end;\n      }\n\n      :host([theme~=\"align-right\"]) {\n        text-align: right;\n      }\n\n      :host([theme~=\"align-center\"]) {\n        text-align: center;\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject27_941725104e2611ea968e0b510ccc7207=function _templateObject27_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject26_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      vaadin-select-text-field {\n        width: 100%;\n        min-width: 0;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [part=\"toggle-button\"] {\n        font-family: \"vaadin-select-icons\";\n      }\n\n      [part=\"toggle-button\"]::before {\n        content: \"\\e900\";\n      }\n    </style>\n\n    <vaadin-select-text-field placeholder=\"[[placeholder]]\" label=\"[[label]]\" required=\"[[required]]\" invalid=\"[[invalid]]\" error-message=\"[[errorMessage]]\" readonly$=\"[[readonly]]\" theme$=\"[[theme]]\">\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n      <div part=\"value\"></div>\n      <div part=\"toggle-button\" slot=\"suffix\" role=\"button\" aria-haspopup=\"listbox\" aria-label=\"Toggle\"></div>\n    </vaadin-select-text-field>\n    <vaadin-select-overlay opened=\"{{opened}}\" with-backdrop=\"[[_phone]]\" phone$=\"[[_phone]]\" theme$=\"[[theme]]\"></vaadin-select-overlay>\n\n    <iron-media-query query=\"[[_phoneMediaQuery]]\" query-matches=\"{{_phone}}\"></iron-media-query>\n"],["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      vaadin-select-text-field {\n        width: 100%;\n        min-width: 0;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [part=\"toggle-button\"] {\n        font-family: \"vaadin-select-icons\";\n      }\n\n      [part=\"toggle-button\"]::before {\n        content: \"\\\\e900\";\n      }\n    </style>\n\n    <vaadin-select-text-field placeholder=\"[[placeholder]]\" label=\"[[label]]\" required=\"[[required]]\" invalid=\"[[invalid]]\" error-message=\"[[errorMessage]]\" readonly\\$=\"[[readonly]]\" theme\\$=\"[[theme]]\">\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n      <div part=\"value\"></div>\n      <div part=\"toggle-button\" slot=\"suffix\" role=\"button\" aria-haspopup=\"listbox\" aria-label=\"Toggle\"></div>\n    </vaadin-select-text-field>\n    <vaadin-select-overlay opened=\"{{opened}}\" with-backdrop=\"[[_phone]]\" phone\\$=\"[[_phone]]\" theme\\$=\"[[theme]]\"></vaadin-select-overlay>\n\n    <iron-media-query query=\"[[_phoneMediaQuery]]\" query-matches=\"{{_phone}}\"></iron-media-query>\n"]);_templateObject26_941725104e2611ea968e0b510ccc7207=function _templateObject26_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject25_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-list-box\" theme-for=\"vaadin-list-box\">\n  <template>\n    <style>\n      :host {\n        -webkit-tap-highlight-color: transparent;\n        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);\n      }\n\n      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */\n      [part=\"items\"] {\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part=\"items\"] ::slotted(*) {\n        flex: none;\n      }\n\n      /* Normal item */\n\n      [part=\"items\"] ::slotted(vaadin-item) {\n        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);\n        cursor: default;\n      }\n\n      [part=\"items\"] ::slotted(vaadin-item) {\n        outline: none;\n        border-radius: var(--lumo-border-radius);\n        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));\n        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);\n      }\n\n      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */\n      [part=\"items\"] ::slotted(vaadin-item)::before {\n        display: var(--_lumo-item-selected-icon-display);\n      }\n\n      /* Hovered item */\n      /* TODO a workaround until we have \"focus-follows-mouse\". After that, use the hover style for focus-ring as well */\n\n      [part=\"items\"] ::slotted(vaadin-item:hover:not([disabled])) {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      /* Focused item */\n\n      [part=\"items\"] ::slotted([focus-ring]:not([disabled])) {\n        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      @media (pointer: coarse) {\n        [part=\"items\"] ::slotted(vaadin-item:hover:not([disabled])) {\n          background-color: transparent;\n        }\n\n        [part=\"items\"] ::slotted([focus-ring]:not([disabled])) {\n          box-shadow: none;\n        }\n      }\n\n      /* Easily add section dividers */\n\n      [part=\"items\"] ::slotted(hr) {\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject25_941725104e2611ea968e0b510ccc7207=function _templateObject25_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject24_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: flex;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [part=\"items\"] {\n        height: 100%;\n        width: 100%;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n    </style>\n    <div part=\"items\">\n      <slot></slot>\n    </div>\n"]);_templateObject24_941725104e2611ea968e0b510ccc7207=function _templateObject24_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject23_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-month-calendar\" theme-for=\"vaadin-month-calendar\">\n  <template>\n    <style>\n      :host {\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        -webkit-tap-highlight-color: transparent;\n        user-select: none;\n        font-size: var(--lumo-font-size-m);\n        color: var(--lumo-body-text-color);\n        text-align: center;\n        padding: 0 var(--lumo-space-xs);\n      }\n\n      /* Month header */\n\n      [part=\"month-header\"] {\n        color: var(--lumo-header-text-color);\n        font-size: var(--lumo-font-size-l);\n        line-height: 1;\n        font-weight: 500;\n        margin-bottom: var(--lumo-space-m);\n      }\n\n      /* Week days and numbers */\n\n      [part=\"weekdays\"],\n      [part=\"weekday\"],\n      [part=\"week-numbers\"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: 1;\n        color: var(--lumo-tertiary-text-color);\n      }\n\n      [part=\"weekdays\"] {\n        margin-bottom: var(--lumo-space-s);\n      }\n\n      /* TODO should have part=\"week-number\" for the cell in weekdays-container */\n      [part=\"weekday\"]:empty,\n      [part=\"week-numbers\"] {\n        width: var(--lumo-size-xs);\n      }\n\n      /* Date and week number cells */\n\n      [part=\"date\"],\n      [part=\"week-number\"] {\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        height: var(--lumo-size-m);\n        position: relative;\n      }\n\n      [part=\"date\"] {\n        transition: color 0.1s;\n      }\n\n      /* Today date */\n\n      [part=\"date\"][today] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Focused date */\n\n      [part=\"date\"]::before {\n        content: \"\";\n        position: absolute;\n        z-index: -1;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        min-width: 2em;\n        min-height: 2em;\n        width: 80%;\n        height: 80%;\n        max-height: 100%;\n        max-width: 100%;\n        border-radius: var(--lumo-border-radius);\n      }\n\n      [part=\"date\"][focused]::before {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      :host(:not([focused])) [part=\"date\"][focused]::before {\n        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;\n      }\n\n      @keyframes vaadin-date-picker-month-calendar-focus-date {\n        50% {\n          box-shadow: 0 0 0 2px transparent;\n        }\n      }\n\n      /* TODO should not rely on the role attribute */\n      [part=\"date\"][role=\"button\"]:not([disabled]):not([selected]):hover::before {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      [part=\"date\"][selected] {\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part=\"date\"][selected]::before {\n        background-color: var(--lumo-primary-color);\n      }\n\n      [part=\"date\"][disabled] {\n        color: var(--lumo-disabled-text-color);\n      }\n\n      @media (pointer: coarse) {\n        [part=\"date\"]:hover:not([selected])::before,\n        [part=\"date\"][focused]:not([selected])::before {\n          display: none;\n        }\n\n        [part=\"date\"][role=\"button\"]:not([disabled]):active::before {\n          display: block;\n        }\n\n        [part=\"date\"][selected]::before {\n          box-shadow: none;\n        }\n      }\n\n      /* Disabled */\n\n      :host([disabled]) * {\n        color: var(--lumo-disabled-text-color) !important;\n      }\n    </style>\n  </template>\n</dom-module><custom-style>\n  <style>\n    @keyframes vaadin-date-picker-month-calendar-focus-date {\n      50% {\n        box-shadow: 0 0 0 2px transparent;\n      }\n    }\n  </style>\n</custom-style>"]);_templateObject23_941725104e2611ea968e0b510ccc7207=function _templateObject23_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject22_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-date-picker\" theme-for=\"vaadin-date-picker\">\n  <template>\n    <style include=\"lumo-field-button\">\n      :host {\n        outline: none;\n      }\n\n      [part=\"toggle-button\"]::before {\n        content: var(--lumo-icons-calendar);\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--lumo-icons-cross);\n      }\n\n      @media (max-width: 420px), (max-height: 420px) {\n        [part=\"overlay-content\"] {\n          height: 70vh;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject22_941725104e2611ea968e0b510ccc7207=function _templateObject22_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject21_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-text-field\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style include=\"lumo-required-field lumo-field-button\">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part=\"label\"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part=\"value\"]:focus,\n      :host([focused]) [part=\"input-field\"] ::slotted(input),\n      :host([focused]) [part=\"input-field\"] ::slotted(textarea) {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in `mask-image` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part=\"value\"],\n        [part=\"input-field\"] ::slotted(input),\n        [part=\"input-field\"] ::slotted(textarea),\n        [part=\"input-field\"] ::slotted([part=\"value\"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part=\"value\"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part=\"input-field\"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part=\"input-field\"]::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part=\"input-field\"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part=\"value\"]::-webkit-input-placeholder,\n      :host([disabled]) [part=\"value\"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]:-ms-input-placeholder,\n      :host([disabled]) [part=\"value\"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::-moz-placeholder,\n      :host([disabled]) [part=\"value\"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::placeholder,\n      :host([disabled]) [part=\"value\"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part=\"input-field\"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part=\"input-field\"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part=\"input-field\"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part=\"label\"],\n      :host([disabled]) [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part=\"input-field\"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part=\"input-field\"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part=\"input-field\"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"label\"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"error-message\"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~=\"align-center\"]) [part=\"value\"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~=\"align-right\"]) [part=\"value\"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~=\"align-right\"]) [part=\"value\"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part=\"input-field\"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part=\"input-field\"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part=\"input-field\"] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>"],["<dom-module id=\"lumo-text-field\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style include=\"lumo-required-field lumo-field-button\">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part=\"label\"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part=\"value\"]:focus,\n      :host([focused]) [part=\"input-field\"] ::slotted(input),\n      :host([focused]) [part=\"input-field\"] ::slotted(textarea) {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in \\`mask-image\\` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part=\"value\"],\n        [part=\"input-field\"] ::slotted(input),\n        [part=\"input-field\"] ::slotted(textarea),\n        [part=\"input-field\"] ::slotted([part=\"value\"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part=\"value\"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part=\"input-field\"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part=\"input-field\"]::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part=\"input-field\"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part=\"value\"]::-webkit-input-placeholder,\n      :host([disabled]) [part=\"value\"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]:-ms-input-placeholder,\n      :host([disabled]) [part=\"value\"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::-moz-placeholder,\n      :host([disabled]) [part=\"value\"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::placeholder,\n      :host([disabled]) [part=\"value\"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part=\"input-field\"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part=\"input-field\"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part=\"input-field\"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part=\"label\"],\n      :host([disabled]) [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part=\"input-field\"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part=\"input-field\"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part=\"input-field\"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"label\"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"error-message\"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~=\"align-center\"]) [part=\"value\"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~=\"align-right\"]) [part=\"value\"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~=\"align-right\"]) [part=\"value\"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part=\"input-field\"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part=\"input-field\"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part=\"input-field\"] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject21_941725104e2611ea968e0b510ccc7207=function _templateObject21_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject20_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-date-picker-overlay\" theme-for=\"vaadin-date-picker-overlay\">\n  <template>\n    <style include=\"lumo-menu-overlay\">\n      [part=\"overlay\"] {\n        /*\n        Width:\n            date cell widths\n          + month calendar side padding\n          + year scroller width\n        */\n        width:\n          calc(\n              var(--lumo-size-m) * 7\n            + var(--lumo-space-xs) * 2\n            + 57px\n          );\n        height: 100%;\n        max-height: calc(var(--lumo-size-m) * 14);\n        overflow: hidden;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      [part=\"overlay\"] {\n        flex-direction: column;\n      }\n\n      [part=\"content\"] {\n        padding: 0;\n        height: 100%;\n        overflow: hidden;\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      @media (max-width: 420px), (max-height: 420px) {\n        [part=\"overlay\"] {\n          width: 100vw;\n          height: 70vh;\n          max-height: 70vh;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject20_941725104e2611ea968e0b510ccc7207=function _templateObject20_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject19_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-date-picker-overlay-content\" theme-for=\"vaadin-date-picker-overlay-content\">\n  <template>\n    <style>\n      :host {\n        position: relative;\n        background-color: transparent;\n        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */\n        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n        background-size: 57px 100%;\n        background-position: top right;\n        background-repeat: no-repeat;\n        cursor: default;\n      }\n\n      /* Month scroller */\n\n      [part=\"months\"] {\n        /* Month calendar height:\n              header height + margin-bottom\n            + weekdays height + margin-bottom\n            + date cell heights\n            + small margin between month calendars\n        */\n        --vaadin-infinite-scroller-item-height:\n          calc(\n              var(--lumo-font-size-l) + var(--lumo-space-m)\n            + var(--lumo-font-size-xs) + var(--lumo-space-s)\n            + var(--lumo-size-m) * 6\n            + var(--lumo-space-s)\n          );\n        --vaadin-infinite-scroller-buffer-offset: 20%;\n        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        position: relative;\n        margin-right: 57px;\n      }\n\n      /* Year scroller */\n\n      [part=\"years\"] {\n        /* TODO get rid of fixed magic number */\n        --vaadin-infinite-scroller-buffer-width: 97px;\n        width: 57px;\n        height: auto;\n        top: 0;\n        bottom: 0;\n        font-size: var(--lumo-font-size-s);\n        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);\n        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        opacity: 0.5;\n        transition: 0.2s opacity;\n      }\n\n      [part=\"years\"]:hover [part=\"year-number\"],\n      [part=\"years\"]:hover [part=\"year-separator\"] {\n        opacity: 1;\n      }\n\n      /* TODO unsupported selector */\n      #scrollers {\n        position: static;\n        display: block;\n      }\n\n      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the\n       * width of the year scroller */\n      #scrollers[desktop] [part=\"months\"] {\n        right: auto;\n      }\n\n      /* Year scroller position indicator */\n      [part=\"years\"]::before {\n        border: none;\n        width: 1em;\n        height: 1em;\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        transform: translate(-75%, -50%) rotate(45deg);\n        border-top-right-radius: calc(var(--lumo-border-radius) / 2);\n        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);\n        z-index: 1;\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50%;\n        transform: translateY(-50%);\n      }\n\n      [part=\"years\"] [part=\"year-separator\"]::after {\n        color: var(--lumo-disabled-text-color);\n        content: \"\u2022\";\n      }\n\n      /* Current year */\n\n      [part=\"years\"] [part=\"year-number\"][current] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Toolbar (footer) */\n\n      [part=\"toolbar\"] {\n        padding: var(--lumo-space-s);\n        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);\n        border-bottom-left-radius: var(--lumo-border-radius);\n        margin-right: 57px;\n      }\n\n      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {\n        [part=\"toolbar\"] {\n          box-shadow: none;\n        }\n      }\n\n      /* Today and Cancel buttons */\n\n      /* TODO: Would be great if I could apply the \"tertiary\" theme from here instead of copying those styles */\n      [part=\"toolbar\"] [part$=\"button\"] {\n        background-color: transparent;\n        margin: 0;\n        min-width: 0;\n        padding: 0 0.75em;\n      }\n\n      /* Narrow viewport mode (fullscreen) */\n\n      :host([fullscreen]) [part=\"toolbar\"] {\n        order: -1;\n        background-color: var(--lumo-base-color);\n      }\n\n      :host([fullscreen]) [part=\"overlay-header\"] {\n        order: -2;\n        height: var(--lumo-size-m);\n        padding: var(--lumo-space-s);\n        position: absolute;\n        left: 0;\n        right: 0;\n        justify-content: center;\n      }\n\n      :host([fullscreen]) [part=\"toggle-button\"],\n      :host([fullscreen]) [part=\"clear-button\"],\n      [part=\"overlay-header\"] [part=\"label\"] {\n        display: none;\n      }\n\n      /* Very narrow screen (year scroller initially hidden) */\n\n      [part=\"years-toggle-button\"] {\n        position: relative;\n        right: auto;\n        display: flex;\n        align-items: center;\n        height: var(--lumo-size-s);\n        padding: 0 0.5em;\n        border-radius: var(--lumo-border-radius);\n        z-index: 3;\n        color: var(--lumo-primary-text-color);\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host([years-visible]) [part=\"years-toggle-button\"] {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part=\"years-toggle-button\"]::before {\n        content: none;\n      }\n\n      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */\n      @media screen and (max-width: 374px) {\n        :host {\n          background-image: none;\n        }\n\n        [part=\"years\"] {\n          background-color: var(--lumo-shade-5pct);\n        }\n\n        [part=\"toolbar\"],\n        [part=\"months\"] {\n          margin-right: 0;\n        }\n\n        /* TODO make date-picker adapt to the width of the years part */\n        [part=\"years\"] {\n          --vaadin-infinite-scroller-buffer-width: 90px;\n          width: 50px;\n        }\n\n        :host([years-visible]) [part=\"months\"] {\n          padding-left: 50px;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"],["<dom-module id=\"lumo-date-picker-overlay-content\" theme-for=\"vaadin-date-picker-overlay-content\">\n  <template>\n    <style>\n      :host {\n        position: relative;\n        background-color: transparent;\n        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */\n        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n        background-size: 57px 100%;\n        background-position: top right;\n        background-repeat: no-repeat;\n        cursor: default;\n      }\n\n      /* Month scroller */\n\n      [part=\"months\"] {\n        /* Month calendar height:\n              header height + margin-bottom\n            + weekdays height + margin-bottom\n            + date cell heights\n            + small margin between month calendars\n        */\n        --vaadin-infinite-scroller-item-height:\n          calc(\n              var(--lumo-font-size-l) + var(--lumo-space-m)\n            + var(--lumo-font-size-xs) + var(--lumo-space-s)\n            + var(--lumo-size-m) * 6\n            + var(--lumo-space-s)\n          );\n        --vaadin-infinite-scroller-buffer-offset: 20%;\n        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        position: relative;\n        margin-right: 57px;\n      }\n\n      /* Year scroller */\n\n      [part=\"years\"] {\n        /* TODO get rid of fixed magic number */\n        --vaadin-infinite-scroller-buffer-width: 97px;\n        width: 57px;\n        height: auto;\n        top: 0;\n        bottom: 0;\n        font-size: var(--lumo-font-size-s);\n        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);\n        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        opacity: 0.5;\n        transition: 0.2s opacity;\n      }\n\n      [part=\"years\"]:hover [part=\"year-number\"],\n      [part=\"years\"]:hover [part=\"year-separator\"] {\n        opacity: 1;\n      }\n\n      /* TODO unsupported selector */\n      #scrollers {\n        position: static;\n        display: block;\n      }\n\n      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the\n       * width of the year scroller */\n      #scrollers[desktop] [part=\"months\"] {\n        right: auto;\n      }\n\n      /* Year scroller position indicator */\n      [part=\"years\"]::before {\n        border: none;\n        width: 1em;\n        height: 1em;\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        transform: translate(-75%, -50%) rotate(45deg);\n        border-top-right-radius: calc(var(--lumo-border-radius) / 2);\n        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);\n        z-index: 1;\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50%;\n        transform: translateY(-50%);\n      }\n\n      [part=\"years\"] [part=\"year-separator\"]::after {\n        color: var(--lumo-disabled-text-color);\n        content: \"\u2022\";\n      }\n\n      /* Current year */\n\n      [part=\"years\"] [part=\"year-number\"][current] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Toolbar (footer) */\n\n      [part=\"toolbar\"] {\n        padding: var(--lumo-space-s);\n        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);\n        border-bottom-left-radius: var(--lumo-border-radius);\n        margin-right: 57px;\n      }\n\n      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {\n        [part=\"toolbar\"] {\n          box-shadow: none;\n        }\n      }\n\n      /* Today and Cancel buttons */\n\n      /* TODO: Would be great if I could apply the \"tertiary\" theme from here instead of copying those styles */\n      [part=\"toolbar\"] [part\\$=\"button\"] {\n        background-color: transparent;\n        margin: 0;\n        min-width: 0;\n        padding: 0 0.75em;\n      }\n\n      /* Narrow viewport mode (fullscreen) */\n\n      :host([fullscreen]) [part=\"toolbar\"] {\n        order: -1;\n        background-color: var(--lumo-base-color);\n      }\n\n      :host([fullscreen]) [part=\"overlay-header\"] {\n        order: -2;\n        height: var(--lumo-size-m);\n        padding: var(--lumo-space-s);\n        position: absolute;\n        left: 0;\n        right: 0;\n        justify-content: center;\n      }\n\n      :host([fullscreen]) [part=\"toggle-button\"],\n      :host([fullscreen]) [part=\"clear-button\"],\n      [part=\"overlay-header\"] [part=\"label\"] {\n        display: none;\n      }\n\n      /* Very narrow screen (year scroller initially hidden) */\n\n      [part=\"years-toggle-button\"] {\n        position: relative;\n        right: auto;\n        display: flex;\n        align-items: center;\n        height: var(--lumo-size-s);\n        padding: 0 0.5em;\n        border-radius: var(--lumo-border-radius);\n        z-index: 3;\n        color: var(--lumo-primary-text-color);\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host([years-visible]) [part=\"years-toggle-button\"] {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part=\"years-toggle-button\"]::before {\n        content: none;\n      }\n\n      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */\n      @media screen and (max-width: 374px) {\n        :host {\n          background-image: none;\n        }\n\n        [part=\"years\"] {\n          background-color: var(--lumo-shade-5pct);\n        }\n\n        [part=\"toolbar\"],\n        [part=\"months\"] {\n          margin-right: 0;\n        }\n\n        /* TODO make date-picker adapt to the width of the years part */\n        [part=\"years\"] {\n          --vaadin-infinite-scroller-buffer-width: 90px;\n          width: 50px;\n        }\n\n        :host([years-visible]) [part=\"months\"] {\n          padding-left: 50px;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject19_941725104e2611ea968e0b510ccc7207=function _templateObject19_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject18_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part=\"text-field\"] {\n        width: 100%;\n        min-width: 0;\n      }\n    </style>\n\n\n    <vaadin-text-field id=\"input\" role=\"application\" autocomplete=\"off\" on-focus=\"_focus\" value=\"{{_userInputValue}}\" invalid=\"[[invalid]]\" label=\"[[label]]\" name=\"[[name]]\" placeholder=\"[[placeholder]]\" required=\"[[required]]\" disabled=\"[[disabled]]\" readonly=\"[[readonly]]\" error-message=\"[[errorMessage]]\" clear-button-visible=\"[[clearButtonVisible]]\" aria-label$=\"[[label]]\" part=\"text-field\" theme$=\"[[theme]]\">\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n      <div part=\"toggle-button\" slot=\"suffix\" on-tap=\"_toggle\" role=\"button\" aria-label$=\"[[i18n.calendar]]\" aria-expanded$=\"[[_getAriaExpanded(opened)]]\"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id=\"overlay\" fullscreen$=\"[[_fullscreen]]\" theme$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\" on-vaadin-overlay-open=\"_onOverlayOpened\" on-vaadin-overlay-close=\"_onOverlayClosed\" disable-upgrade=\"\">\n      <template>\n        <vaadin-date-picker-overlay-content id=\"overlay-content\" i18n=\"[[i18n]]\" fullscreen$=\"[[_fullscreen]]\" label=\"[[label]]\" selected-date=\"{{_selectedDate}}\" slot=\"dropdown-content\" focused-date=\"{{_focusedDate}}\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[_minDate]]\" max-date=\"[[_maxDate]]\" role=\"dialog\" on-date-tap=\"_close\" part=\"overlay-content\" theme$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query=\"[[_fullscreenMediaQuery]]\" query-matches=\"{{_fullscreen}}\">\n    </iron-media-query>\n"],["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part=\"text-field\"] {\n        width: 100%;\n        min-width: 0;\n      }\n    </style>\n\n\n    <vaadin-text-field id=\"input\" role=\"application\" autocomplete=\"off\" on-focus=\"_focus\" value=\"{{_userInputValue}}\" invalid=\"[[invalid]]\" label=\"[[label]]\" name=\"[[name]]\" placeholder=\"[[placeholder]]\" required=\"[[required]]\" disabled=\"[[disabled]]\" readonly=\"[[readonly]]\" error-message=\"[[errorMessage]]\" clear-button-visible=\"[[clearButtonVisible]]\" aria-label\\$=\"[[label]]\" part=\"text-field\" theme\\$=\"[[theme]]\">\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n      <div part=\"toggle-button\" slot=\"suffix\" on-tap=\"_toggle\" role=\"button\" aria-label\\$=\"[[i18n.calendar]]\" aria-expanded\\$=\"[[_getAriaExpanded(opened)]]\"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id=\"overlay\" fullscreen\\$=\"[[_fullscreen]]\" theme\\$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\" on-vaadin-overlay-open=\"_onOverlayOpened\" on-vaadin-overlay-close=\"_onOverlayClosed\" disable-upgrade=\"\">\n      <template>\n        <vaadin-date-picker-overlay-content id=\"overlay-content\" i18n=\"[[i18n]]\" fullscreen\\$=\"[[_fullscreen]]\" label=\"[[label]]\" selected-date=\"{{_selectedDate}}\" slot=\"dropdown-content\" focused-date=\"{{_focusedDate}}\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[_minDate]]\" max-date=\"[[_maxDate]]\" role=\"dialog\" on-date-tap=\"_close\" part=\"overlay-content\" theme\\$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query=\"[[_fullscreenMediaQuery]]\" query-matches=\"{{_fullscreen}}\">\n    </iron-media-query>\n"]);_templateObject18_941725104e2611ea968e0b510ccc7207=function _templateObject18_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject17_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\" id=\"[[_inputId]]\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"],["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\" id=\"[[_inputId]]\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label\\$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden\\$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"]);_templateObject17_941725104e2611ea968e0b510ccc7207=function _templateObject17_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject16_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part=\"overlay-header\"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part=\"overlay-header\"] {\n        display: none;\n      }\n\n      [part=\"label\"] {\n        flex-grow: 1;\n      }\n\n      [part=\"clear-button\"]:not([showclear]) {\n        display: none;\n      }\n\n      [part=\"years-toggle-button\"] {\n        display: flex;\n      }\n\n      [part=\"years-toggle-button\"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part=\"years-toggle-button\"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part=\"months\"],\n      [part=\"years\"] {\n        height: 100%;\n      }\n\n      [part=\"months\"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part=\"months\"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part=\"years\"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part=\"years\"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part=\"years\"]::before {\n        content: '';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part=\"months\"],\n      :host(.animate) [part=\"years\"] {\n        transition: all 200ms;\n      }\n\n      [part=\"toolbar\"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~=\"overlay-header\"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~=\"years-toggle-button\"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id=\"announcer\" role=\"alert\" aria-live=\"polite\">\n      [[i18n.calendar]]\n    </div>\n\n    <div part=\"overlay-header\" on-touchend=\"_preventDefault\" desktop$=\"[[_desktopMode]]\" aria-hidden=\"true\">\n      <div part=\"label\">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part=\"clear-button\" on-tap=\"_clear\" showclear$=\"[[_showClear(selectedDate)]]\"></div>\n      <div part=\"toggle-button\" on-tap=\"_cancel\"></div>\n\n      <div part=\"years-toggle-button\" desktop$=\"[[_desktopMode]]\" on-tap=\"_toggleYearScroller\" aria-hidden=\"true\">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id=\"scrollers\" desktop$=\"[[_desktopMode]]\" on-track=\"_track\">\n      <vaadin-infinite-scroller id=\"monthScroller\" on-custom-scroll=\"_onMonthScroll\" on-touchstart=\"_onMonthScrollTouchStart\" buffer-size=\"3\" active=\"[[initialPosition]]\" part=\"months\">\n        <template>\n          <vaadin-month-calendar i18n=\"[[i18n]]\" month=\"[[_dateAfterXMonths(index)]]\" selected-date=\"{{selectedDate}}\" focused-date=\"[[focusedDate]]\" ignore-taps=\"[[_ignoreTaps]]\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[minDate]]\" max-date=\"[[maxDate]]\" focused$=\"[[_focused]]\" part=\"month\" theme$=\"[[theme]]\">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id=\"yearScroller\" on-tap=\"_onYearTap\" on-custom-scroll=\"_onYearScroll\" on-touchstart=\"_onYearScrollTouchStart\" buffer-size=\"12\" active=\"[[initialPosition]]\" part=\"years\">\n        <template>\n          <div part=\"year-number\" role=\"button\" current$=\"[[_isCurrentYear(index)]]\" selected$=\"[[_isSelectedYear(index, selectedDate)]]\">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part=\"year-separator\" aria-hidden=\"true\"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend=\"_preventDefault\" role=\"toolbar\" part=\"toolbar\">\n      <vaadin-button id=\"todayButton\" part=\"today-button\" disabled=\"[[!_isTodayAllowed(minDate, maxDate)]]\" on-tap=\"_onTodayTap\">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id=\"cancelButton\" part=\"cancel-button\" on-tap=\"_cancel\">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query=\"(min-width: 375px)\" query-matches=\"{{_desktopMode}}\"></iron-media-query>\n"],["\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part=\"overlay-header\"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part=\"overlay-header\"] {\n        display: none;\n      }\n\n      [part=\"label\"] {\n        flex-grow: 1;\n      }\n\n      [part=\"clear-button\"]:not([showclear]) {\n        display: none;\n      }\n\n      [part=\"years-toggle-button\"] {\n        display: flex;\n      }\n\n      [part=\"years-toggle-button\"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part=\"years-toggle-button\"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part=\"months\"],\n      [part=\"years\"] {\n        height: 100%;\n      }\n\n      [part=\"months\"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part=\"months\"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part=\"years\"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part=\"years\"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part=\"years\"]::before {\n        content: '';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part=\"months\"],\n      :host(.animate) [part=\"years\"] {\n        transition: all 200ms;\n      }\n\n      [part=\"toolbar\"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~=\"overlay-header\"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~=\"years-toggle-button\"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id=\"announcer\" role=\"alert\" aria-live=\"polite\">\n      [[i18n.calendar]]\n    </div>\n\n    <div part=\"overlay-header\" on-touchend=\"_preventDefault\" desktop\\$=\"[[_desktopMode]]\" aria-hidden=\"true\">\n      <div part=\"label\">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part=\"clear-button\" on-tap=\"_clear\" showclear\\$=\"[[_showClear(selectedDate)]]\"></div>\n      <div part=\"toggle-button\" on-tap=\"_cancel\"></div>\n\n      <div part=\"years-toggle-button\" desktop\\$=\"[[_desktopMode]]\" on-tap=\"_toggleYearScroller\" aria-hidden=\"true\">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id=\"scrollers\" desktop\\$=\"[[_desktopMode]]\" on-track=\"_track\">\n      <vaadin-infinite-scroller id=\"monthScroller\" on-custom-scroll=\"_onMonthScroll\" on-touchstart=\"_onMonthScrollTouchStart\" buffer-size=\"3\" active=\"[[initialPosition]]\" part=\"months\">\n        <template>\n          <vaadin-month-calendar i18n=\"[[i18n]]\" month=\"[[_dateAfterXMonths(index)]]\" selected-date=\"{{selectedDate}}\" focused-date=\"[[focusedDate]]\" ignore-taps=\"[[_ignoreTaps]]\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[minDate]]\" max-date=\"[[maxDate]]\" focused\\$=\"[[_focused]]\" part=\"month\" theme\\$=\"[[theme]]\">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id=\"yearScroller\" on-tap=\"_onYearTap\" on-custom-scroll=\"_onYearScroll\" on-touchstart=\"_onYearScrollTouchStart\" buffer-size=\"12\" active=\"[[initialPosition]]\" part=\"years\">\n        <template>\n          <div part=\"year-number\" role=\"button\" current\\$=\"[[_isCurrentYear(index)]]\" selected\\$=\"[[_isSelectedYear(index, selectedDate)]]\">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part=\"year-separator\" aria-hidden=\"true\"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend=\"_preventDefault\" role=\"toolbar\" part=\"toolbar\">\n      <vaadin-button id=\"todayButton\" part=\"today-button\" disabled=\"[[!_isTodayAllowed(minDate, maxDate)]]\" on-tap=\"_onTodayTap\">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id=\"cancelButton\" part=\"cancel-button\" on-tap=\"_cancel\">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query=\"(min-width: 375px)\" query-matches=\"{{_desktopMode}}\"></iron-media-query>\n"]);_templateObject16_941725104e2611ea968e0b510ccc7207=function _templateObject16_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject15_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        overflow: hidden;\n        height: 500px;\n      }\n\n      #scroller {\n        position: relative;\n        height: 100%;\n        overflow: auto;\n        outline: none;\n        margin-right: -40px;\n        -webkit-overflow-scrolling: touch;\n        -ms-overflow-style: none;\n        overflow-x: hidden;\n      }\n\n      #scroller.notouchscroll {\n        -webkit-overflow-scrolling: auto;\n      }\n\n      #scroller::-webkit-scrollbar {\n        display: none;\n      }\n\n      .buffer {\n        position: absolute;\n        width: var(--vaadin-infinite-scroller-buffer-width, 100%);\n        box-sizing: border-box;\n        padding-right: 40px;\n        top: var(--vaadin-infinite-scroller-buffer-offset, 0);\n        animation: fadein 0.2s;\n      }\n\n      @keyframes fadein {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }\n    </style>\n\n    <div id=\"scroller\" on-scroll=\"_scroll\">\n      <div class=\"buffer\"></div>\n      <div class=\"buffer\"></div>\n      <div id=\"fullHeight\"></div>\n    </div>\n"]);_templateObject15_941725104e2611ea968e0b510ccc7207=function _templateObject15_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject14_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part=\"weekdays\"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part=\"week-numbers\"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part=\"week-numbers\"][hidden],\n      [part=\"weekday\"][hidden] {\n        display: none;\n      }\n\n      [part=\"weekday\"],\n      [part=\"date\"] {\n        /* Would use calc(100% / 7) but it doesn't work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part=\"weekday\"]:empty,\n      [part=\"week-numbers\"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part=\"month-header\" role=\"heading\">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id=\"monthGrid\" on-tap=\"_handleTap\" on-touchend=\"_preventDefault\" on-touchstart=\"_onMonthGridTouchStart\">\n      <div id=\"weekdays-container\">\n        <div hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\" part=\"weekday\"></div>\n        <div part=\"weekdays\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]\">\n            <div part=\"weekday\" role=\"heading\" aria-label$=\"[[item.weekDay]]\">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id=\"days-container\">\n        <div part=\"week-numbers\" hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekNumbers(_days)]]\">\n            <div part=\"week-number\" role=\"heading\" aria-label$=\"[[i18n.week]] [[item]]\">[[item]]</div>\n          </template>\n        </div>\n        <div id=\"days\">\n          <template is=\"dom-repeat\" items=\"[[_days]]\">\n            <div part=\"date\" today$=\"[[_isToday(item)]]\" selected$=\"[[_dateEquals(item, selectedDate)]]\" focused$=\"[[_dateEquals(item, focusedDate)]]\" date=\"[[item]]\" disabled$=\"[[!_dateAllowed(item, minDate, maxDate)]]\" role$=\"[[_getRole(item)]]\" aria-label$=\"[[_getAriaLabel(item)]]\" aria-disabled$=\"[[_getAriaDisabled(item, minDate, maxDate)]]\">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n"],["\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part=\"weekdays\"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part=\"week-numbers\"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part=\"week-numbers\"][hidden],\n      [part=\"weekday\"][hidden] {\n        display: none;\n      }\n\n      [part=\"weekday\"],\n      [part=\"date\"] {\n        /* Would use calc(100% / 7) but it doesn't work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part=\"weekday\"]:empty,\n      [part=\"week-numbers\"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part=\"month-header\" role=\"heading\">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id=\"monthGrid\" on-tap=\"_handleTap\" on-touchend=\"_preventDefault\" on-touchstart=\"_onMonthGridTouchStart\">\n      <div id=\"weekdays-container\">\n        <div hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\" part=\"weekday\"></div>\n        <div part=\"weekdays\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]\">\n            <div part=\"weekday\" role=\"heading\" aria-label\\$=\"[[item.weekDay]]\">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id=\"days-container\">\n        <div part=\"week-numbers\" hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekNumbers(_days)]]\">\n            <div part=\"week-number\" role=\"heading\" aria-label\\$=\"[[i18n.week]] [[item]]\">[[item]]</div>\n          </template>\n        </div>\n        <div id=\"days\">\n          <template is=\"dom-repeat\" items=\"[[_days]]\">\n            <div part=\"date\" today\\$=\"[[_isToday(item)]]\" selected\\$=\"[[_dateEquals(item, selectedDate)]]\" focused\\$=\"[[_dateEquals(item, focusedDate)]]\" date=\"[[item]]\" disabled\\$=\"[[!_dateAllowed(item, minDate, maxDate)]]\" role\\$=\"[[_getRole(item)]]\" aria-label\\$=\"[[_getAriaLabel(item)]]\" aria-disabled\\$=\"[[_getAriaDisabled(item, minDate, maxDate)]]\">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n"]);_templateObject14_941725104e2611ea968e0b510ccc7207=function _templateObject14_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject13_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-combo-box-item\" theme-for=\"vaadin-combo-box-item\">\n  <template>\n    <style include=\"lumo-item\">\n      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */\n\n      :host {\n        cursor: default;\n        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);\n        padding-left: calc(var(--lumo-border-radius) / 4);\n        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);\n        transition: background-color 100ms;\n        border-radius: var(--lumo-border-radius);\n        overflow: hidden;\n        --_lumo-item-selected-icon-display: block;\n      }\n\n      /* ShadyCSS workaround (show the selected item checkmark) */\n      :host::before {\n        display: block;\n      }\n\n      :host(:hover) {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      :host([focused]:not([disabled])) {\n        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      @media (pointer: coarse) {\n        :host(:hover) {\n          background-color: transparent;\n        }\n\n        :host([focused]:not([disabled])) {\n          box-shadow: none;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject13_941725104e2611ea968e0b510ccc7207=function _templateObject13_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject12_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n    </style>\n    <div part=\"content\">\n      <slot></slot>\n    </div>\n"]);_templateObject12_941725104e2611ea968e0b510ccc7207=function _templateObject12_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject11_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-item\" theme-for=\"vaadin-item\">\n  <template>\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-xs);\n        padding: 0.5em 1em;\n        min-height: var(--lumo-size-m);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      /* Selectable items have a checkmark icon */\n      :host([tabindex])::before {\n        display: var(--_lumo-item-selected-icon-display, none);\n        content: var(--lumo-icons-checkmark);\n        font-family: lumo-icons;\n        font-size: var(--lumo-icon-size-m);\n        line-height: 1;\n        font-weight: normal;\n        width: 1em;\n        height: 1em;\n        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;\n        color: var(--lumo-primary-text-color);\n        flex: none;\n        opacity: 0;\n        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;\n      }\n\n      :host([selected])::before {\n        opacity: 1;\n      }\n\n      :host([active]:not([selected]))::before {\n        transform: scale(0.8);\n        opacity: 0;\n        transition-duration: 0s;\n      }\n\n      [part=\"content\"] {\n        flex: auto;\n      }\n\n      /* Disabled item */\n\n      :host([disabled]) {\n        color: var(--lumo-disabled-text-color);\n        cursor: default;\n        pointer-events: none;\n      }\n\n      /* Slotted icons */\n\n      :host ::slotted(iron-icon) {\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject11_941725104e2611ea968e0b510ccc7207=function _templateObject11_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject10_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-combo-box-overlay\" theme-for=\"vaadin-combo-box-overlay\">\n  <template>\n    <style include=\"lumo-overlay lumo-menu-overlay-core\">\n      [part=\"content\"] {\n        padding: 0;\n      }\n\n      :host {\n        /* TODO: using a legacy mixin (unsupported) */\n        --iron-list-items-container: {\n          border-width: var(--lumo-space-xs);\n          border-style: solid;\n          border-color: transparent;\n        };\n      }\n\n      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */\n      :host([opened]) {\n        --iron-list-items-container_-_border-width: var(--lumo-space-xs);\n        --iron-list-items-container_-_border-style: solid;\n        --iron-list-items-container_-_border-color: transparent;\n      }\n\n      /* Loading state */\n\n      /* When items are empty, the sinner needs some room */\n      :host(:not([closing])) [part~=\"content\"] {\n        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));\n      }\n\n      [part~=\"overlay\"] {\n        position: relative;\n      }\n\n      :host([loading]) [part~=\"loader\"] {\n        box-sizing: border-box;\n        width: var(--lumo-icon-size-s);\n        height: var(--lumo-icon-size-s);\n        position: absolute;\n        z-index: 1;\n        left: var(--lumo-space-s);\n        right: var(--lumo-space-s);\n        top: var(--lumo-space-s);\n        margin-left: auto;\n        margin-inline-start: auto;\n        margin-inline-end: 0;\n        border: 2px solid transparent;\n        border-color:\n          var(--lumo-primary-color-50pct)\n          var(--lumo-primary-color-50pct)\n          var(--lumo-primary-color)\n          var(--lumo-primary-color);\n        border-radius: calc(0.5 * var(--lumo-icon-size-s));\n        opacity: 0;\n        animation:\n          1s linear infinite lumo-combo-box-loader-rotate,\n          .3s .1s lumo-combo-box-loader-fade-in both;\n        pointer-events: none;\n      }\n\n      @keyframes lumo-combo-box-loader-fade-in {\n        0% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n\n      @keyframes lumo-combo-box-loader-rotate {\n        0% {\n          transform: rotate(0deg);\n        }\n\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject10_941725104e2611ea968e0b510ccc7207=function _templateObject10_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject9_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-vaadin-overlay\" theme-for=\"vaadin-overlay\">\n  <template>\n    <style include=\"lumo-overlay\">\n      /* stylelint-disable no-empty-source */\n    </style>\n  </template>\n</dom-module>"]);_templateObject9_941725104e2611ea968e0b510ccc7207=function _templateObject9_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject8_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host([opened]) {\n        pointer-events: auto;\n      }\n    </style>\n\n    <slot></slot>\n\n    <vaadin-combo-box-dropdown-wrapper id=\"overlay\" opened=\"[[opened]]\" position-target=\"[[inputElement]]\" renderer=\"[[renderer]]\" _focused-index=\"[[_focusedIndex]]\" _item-id-path=\"[[itemIdPath]]\" _item-label-path=\"[[itemLabelPath]]\" loading=\"[[loading]]\" theme=\"[[theme]]\">\n    </vaadin-combo-box-dropdown-wrapper>\n"]);_templateObject8_941725104e2611ea968e0b510ccc7207=function _templateObject8_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject7_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <vaadin-combo-box-dropdown id=\"dropdown\" hidden=\"[[_hidden(_items.*, loading)]]\" position-target=\"[[positionTarget]]\" on-template-changed=\"_templateChanged\" on-position-changed=\"_setOverlayHeight\" disable-upgrade=\"\" theme=\"[[theme]]\">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id=\"scroller\" on-click=\"_stopPropagation\">\n          <iron-list id=\"selector\" role=\"listbox\" items=\"[[_getItems(opened, _items)]]\" scroll-target=\"[[_scroller]]\">\n            <template>\n              <vaadin-combo-box-item on-click=\"_onItemClick\" index=\"[[__requestItemByIndex(item, index)]]\" item=\"[[item]]\" label=\"[[getItemLabel(item, _itemLabelPath)]]\" selected=\"[[_isItemSelected(item, _selectedItem, _itemIdPath)]]\" renderer=\"[[renderer]]\" role$=\"[[_getAriaRole(index)]]\" aria-selected$=\"[[_getAriaSelected(_focusedIndex,index)]]\" focused=\"[[_isItemFocused(_focusedIndex,index)]]\" tabindex=\"-1\" theme$=\"[[theme]]\">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n"],["\n    <vaadin-combo-box-dropdown id=\"dropdown\" hidden=\"[[_hidden(_items.*, loading)]]\" position-target=\"[[positionTarget]]\" on-template-changed=\"_templateChanged\" on-position-changed=\"_setOverlayHeight\" disable-upgrade=\"\" theme=\"[[theme]]\">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id=\"scroller\" on-click=\"_stopPropagation\">\n          <iron-list id=\"selector\" role=\"listbox\" items=\"[[_getItems(opened, _items)]]\" scroll-target=\"[[_scroller]]\">\n            <template>\n              <vaadin-combo-box-item on-click=\"_onItemClick\" index=\"[[__requestItemByIndex(item, index)]]\" item=\"[[item]]\" label=\"[[getItemLabel(item, _itemLabelPath)]]\" selected=\"[[_isItemSelected(item, _selectedItem, _itemIdPath)]]\" renderer=\"[[renderer]]\" role\\$=\"[[_getAriaRole(index)]]\" aria-selected\\$=\"[[_getAriaSelected(_focusedIndex,index)]]\" focused=\"[[_isItemFocused(_focusedIndex,index)]]\" tabindex=\"-1\" theme\\$=\"[[theme]]\">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n"]);_templateObject7_941725104e2611ea968e0b510ccc7207=function _templateObject7_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject6_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id=\"overlay\" hidden$=\"[[hidden]]\" opened=\"[[opened]]\" template=\"{{template}}\" style=\"align-items: stretch; margin: 0;\" theme$=\"[[theme]]\">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n"],["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id=\"overlay\" hidden\\$=\"[[hidden]]\" opened=\"[[opened]]\" template=\"{{template}}\" style=\"align-items: stretch; margin: 0;\" theme\\$=\"[[theme]]\">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n"]);_templateObject6_941725104e2611ea968e0b510ccc7207=function _templateObject6_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject5_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        z-index: 200;\n        position: fixed;\n\n        /*\n          Despite of what the names say, <vaadin-overlay> is just a container\n          for position/sizing/alignment. The actual overlay is the overlay part.\n        */\n\n        /*\n          Default position constraints: the entire viewport. Note: themes can\n          override this to introduce gaps between the overlay and the viewport.\n        */\n        top: 0;\n        right: 0;\n        bottom: var(--vaadin-overlay-viewport-bottom);\n        left: 0;\n\n        /* Use flexbox alignment for the overlay part. */\n        display: flex;\n        flex-direction: column; /* makes dropdowns sizing easier */\n        /* Align to center by default. */\n        align-items: center;\n        justify-content: center;\n\n        /* Allow centering when max-width/max-height applies. */\n        margin: auto;\n\n        /* The host is not clickable, only the overlay part is. */\n        pointer-events: none;\n\n        /* Remove tap highlight on touch devices. */\n        -webkit-tap-highlight-color: transparent;\n\n        /* CSS API for host */\n        --vaadin-overlay-viewport-bottom: 0;\n      }\n\n      :host([hidden]),\n      :host(:not([opened]):not([closing])) {\n        display: none !important;\n      }\n\n      [part=\"overlay\"] {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n        pointer-events: auto;\n\n        /* Prevent overflowing the host in MSIE 11 */\n        max-width: 100%;\n        box-sizing: border-box;\n\n        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */\n      }\n\n      [part=\"backdrop\"] {\n        z-index: -1;\n        content: \"\";\n        background: rgba(0, 0, 0, 0.5);\n        position: fixed;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        pointer-events: auto;\n      }\n    </style>\n\n    <div id=\"backdrop\" part=\"backdrop\" hidden$=\"{{!withBackdrop}}\"></div>\n    <div part=\"overlay\" id=\"overlay\" tabindex=\"0\">\n      <div part=\"content\" id=\"content\">\n        <slot></slot>\n      </div>\n    </div>\n"],["\n    <style>\n      :host {\n        z-index: 200;\n        position: fixed;\n\n        /*\n          Despite of what the names say, <vaadin-overlay> is just a container\n          for position/sizing/alignment. The actual overlay is the overlay part.\n        */\n\n        /*\n          Default position constraints: the entire viewport. Note: themes can\n          override this to introduce gaps between the overlay and the viewport.\n        */\n        top: 0;\n        right: 0;\n        bottom: var(--vaadin-overlay-viewport-bottom);\n        left: 0;\n\n        /* Use flexbox alignment for the overlay part. */\n        display: flex;\n        flex-direction: column; /* makes dropdowns sizing easier */\n        /* Align to center by default. */\n        align-items: center;\n        justify-content: center;\n\n        /* Allow centering when max-width/max-height applies. */\n        margin: auto;\n\n        /* The host is not clickable, only the overlay part is. */\n        pointer-events: none;\n\n        /* Remove tap highlight on touch devices. */\n        -webkit-tap-highlight-color: transparent;\n\n        /* CSS API for host */\n        --vaadin-overlay-viewport-bottom: 0;\n      }\n\n      :host([hidden]),\n      :host(:not([opened]):not([closing])) {\n        display: none !important;\n      }\n\n      [part=\"overlay\"] {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n        pointer-events: auto;\n\n        /* Prevent overflowing the host in MSIE 11 */\n        max-width: 100%;\n        box-sizing: border-box;\n\n        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */\n      }\n\n      [part=\"backdrop\"] {\n        z-index: -1;\n        content: \"\";\n        background: rgba(0, 0, 0, 0.5);\n        position: fixed;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        pointer-events: auto;\n      }\n    </style>\n\n    <div id=\"backdrop\" part=\"backdrop\" hidden\\$=\"{{!withBackdrop}}\"></div>\n    <div part=\"overlay\" id=\"overlay\" tabindex=\"0\">\n      <div part=\"content\" id=\"content\">\n        <slot></slot>\n      </div>\n    </div>\n"]);_templateObject5_941725104e2611ea968e0b510ccc7207=function _templateObject5_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject4_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n         display: none;\n      }\n    </style>\n    <div part=\"content\" id=\"content\"></div>\n"]);_templateObject4_941725104e2611ea968e0b510ccc7207=function _templateObject4_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject3_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-button\" theme-for=\"vaadin-button\">\n  <template>\n    <style>\n      :host {\n        /* Sizing */\n        --lumo-button-size: var(--lumo-size-m);\n        min-width: calc(var(--lumo-button-size) * 2);\n        height: var(--lumo-button-size);\n        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);\n        margin: var(--lumo-space-xs) 0;\n        box-sizing: border-box;\n        /* Style */\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 500;\n        color: var(--_lumo-button-color, var(--lumo-primary-text-color));\n        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));\n        border-radius: var(--lumo-border-radius);\n        cursor: default;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Set only for the internal parts so we don\u2019t affect the host vertical alignment */\n      [part=\"label\"],\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      [part=\"label\"] {\n        padding: calc(var(--lumo-button-size) / 6) 0;\n      }\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-button-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"large\"]) {\n        font-size: var(--lumo-font-size-l);\n        --lumo-button-size: var(--lumo-size-l);\n      }\n\n      /* This needs to be the last selector for it to take priority */\n      :host([disabled][disabled]) {\n        pointer-events: none;\n        color: var(--lumo-disabled-text-color);\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      /* For interaction states */\n      :host::before,\n      :host::after {\n        content: \"\";\n        /* We rely on the host always being relative */\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: currentColor;\n        border-radius: inherit;\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n      }\n\n      /* Hover */\n\n      :host(:hover)::before {\n        opacity: 0.05;\n      }\n\n      /* Disable hover for touch devices */\n      @media (pointer: coarse) {\n        :host(:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      /* Active */\n\n      :host::after {\n        transition: opacity 1.4s, transform 0.1s;\n        filter: blur(8px);\n      }\n\n      :host([active])::before {\n        opacity: 0.1;\n        transition-duration: 0s;\n      }\n\n      :host([active])::after {\n        opacity: 0.1;\n        transition-duration: 0s, 0s;\n        transform: scale(0);\n      }\n\n      /* Keyboard focus */\n\n      :host([focus-ring]) {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Types (primary, tertiary, tertiary-inline */\n\n      :host([theme~=\"tertiary\"]),\n      :host([theme~=\"tertiary-inline\"]) {\n        background-color: transparent !important;\n        transition: opacity 0.2s;\n        min-width: 0;\n      }\n\n      :host([theme~=\"tertiary\"])::before,\n      :host([theme~=\"tertiary-inline\"])::before {\n        display: none;\n      }\n\n      :host([theme~=\"tertiary\"]) {\n        padding: 0 calc(var(--lumo-button-size) / 6);\n      }\n\n      @media (hover: hover) {\n        :host([theme*=\"tertiary\"]:not([active]):hover) {\n          opacity: 0.8;\n        }\n      }\n\n      :host([theme~=\"tertiary\"][active]),\n      :host([theme~=\"tertiary-inline\"][active]) {\n        opacity: 0.5;\n        transition-duration: 0s;\n      }\n\n      :host([theme~=\"tertiary-inline\"]) {\n        margin: 0;\n        height: auto;\n        padding: 0;\n        line-height: inherit;\n        font-size: inherit;\n      }\n\n      :host([theme~=\"tertiary-inline\"]) [part=\"label\"] {\n        padding: 0;\n        overflow: visible;\n        line-height: inherit;\n      }\n\n      :host([theme~=\"primary\"]) {\n        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));\n        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));\n        font-weight: 600;\n        min-width: calc(var(--lumo-button-size) * 2.5);\n      }\n\n      :host([theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-primary-color-50pct);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      :host([theme~=\"primary\"]:hover)::before {\n        opacity: 0.1;\n      }\n\n      :host([theme~=\"primary\"][active])::before {\n        background-color: var(--lumo-shade-20pct);\n      }\n\n      @media (pointer: coarse) {\n        :host([theme~=\"primary\"][active])::before {\n          background-color: var(--lumo-shade-60pct);\n        }\n\n        :host([theme~=\"primary\"]:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      :host([theme~=\"primary\"][active])::after {\n        opacity: 0.2;\n      }\n\n      /* Colors (success, error, contrast) */\n\n      :host([theme~=\"success\"]) {\n        color: var(--lumo-success-text-color);\n      }\n\n      :host([theme~=\"success\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-success-color);\n        color: var(--lumo-success-contrast-color);\n      }\n\n      :host([theme~=\"success\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-success-color-50pct);\n      }\n\n      :host([theme~=\"error\"]) {\n        color: var(--lumo-error-text-color);\n      }\n\n      :host([theme~=\"error\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-error-color);\n        color: var(--lumo-error-contrast-color);\n      }\n\n      :host([theme~=\"error\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([theme~=\"contrast\"]) {\n        color: var(--lumo-contrast);\n      }\n\n      :host([theme~=\"contrast\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-contrast);\n        color: var(--lumo-base-color);\n      }\n\n      :host([theme~=\"contrast\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-contrast-50pct);\n      }\n\n      /* Icons */\n\n      [part] ::slotted(iron-icon) {\n        display: inline-block;\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"prefix\"] {\n        margin-left: -0.25em;\n        margin-right: 0.25em;\n      }\n\n      [part=\"suffix\"] {\n        margin-left: 0.25em;\n        margin-right: -0.25em;\n      }\n\n      /* Icon-only */\n\n      :host([theme~=\"icon\"]:not([theme~=\"tertiary-inline\"])) {\n        min-width: var(--lumo-button-size);\n        padding-left: calc(var(--lumo-button-size) / 4);\n        padding-right: calc(var(--lumo-button-size) / 4);\n      }\n\n      :host([theme~=\"icon\"]) [part=\"prefix\"],\n      :host([theme~=\"icon\"]) [part=\"suffix\"] {\n        margin-left: 0;\n        margin-right: 0;\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject3_941725104e2611ea968e0b510ccc7207=function _templateObject3_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject2_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: \"\\2003\";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        flex: none;\n      }\n\n      [part=\"label\"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class=\"vaadin-button-container\">\n      <div part=\"prefix\">\n        <slot name=\"prefix\"></slot>\n      </div>\n      <div part=\"label\">\n        <slot></slot>\n      </div>\n      <div part=\"suffix\">\n        <slot name=\"suffix\"></slot>\n      </div>\n    </div>\n    <button id=\"button\" type=\"button\"></button>\n"],["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: \"\\\\2003\";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        flex: none;\n      }\n\n      [part=\"label\"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class=\"vaadin-button-container\">\n      <div part=\"prefix\">\n        <slot name=\"prefix\"></slot>\n      </div>\n      <div part=\"label\">\n        <slot></slot>\n      </div>\n      <div part=\"suffix\">\n        <slot name=\"suffix\"></slot>\n      </div>\n    </div>\n    <button id=\"button\" type=\"button\"></button>\n"]);_templateObject2_941725104e2611ea968e0b510ccc7207=function _templateObject2_941725104e2611ea968e0b510ccc7207(){return data};return data}function _templateObject_941725104e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      @media only screen and (-webkit-max-device-pixel-ratio: 1) {\n        :host {\n          will-change: transform;\n        }\n      }\n\n      #items {\n        @apply --iron-list-items-container;\n        position: relative;\n      }\n\n      :host(:not([grid])) #items > ::slotted(*) {\n        width: 100%;\n      }\n\n      #items > ::slotted(*) {\n        box-sizing: border-box;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        will-change: transform;\n      }\n    </style>\n\n    <array-selector id=\"selector\" items=\"{{items}}\" selected=\"{{selectedItems}}\" selected-item=\"{{selectedItem}}\"></array-selector>\n\n    <div id=\"items\">\n      <slot></slot>\n    </div>\n"]);_templateObject_941725104e2611ea968e0b510ccc7207=function _templateObject_941725104e2611ea968e0b510ccc7207(){return data};return data}var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),IOS_TOUCH_SCROLLING=IOS&&8<=IOS[1],DEFAULT_PHYSICAL_COUNT=3,HIDDEN_Y="-10000px",SECRET_TABINDEX=-100;/**
                            
                            `iron-list` displays a virtual, 'infinite' list. The template inside
                            the iron-list element represents the DOM to create for each list item.
                            The `items` property specifies an array of list item data.
                            
                            For performance reasons, not every item in the list is rendered at once;
                            instead a small subset of actual template elements *(enough to fill the
                            viewport)* are rendered and reused as the user scrolls. As such, it is important
                            that all state of the list template is bound to the model driving it, since the
                            view may be reused with a new model at any time. Particularly, any state that
                            may change as the result of a user interaction with the list item must be bound
                            to the model to avoid view state inconsistency.
                            
                            ### Sizing iron-list
                            
                            `iron-list` must either be explicitly sized, or delegate scrolling to an
                            explicitly sized parent. By "explicitly sized", we mean it either has an
                            explicit CSS `height` property set via a class or inline style, or else is sized
                            by other layout means (e.g. the `flex` or `fit` classes).
                            
                            #### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)
                            
                            ```html
                            <template is="x-list">
                              <style>
                                :host {
                                  display: block;
                                  height: 100vh;
                                  display: flex;
                                  flex-direction: column;
                                }
                            
                                iron-list {
                                  flex: 1 1 auto;
                                }
                              </style>
                              <app-toolbar>App name</app-toolbar>
                              <iron-list items="[[items]]">
                                <template>
                                  <div>
                                    ...
                                  </div>
                                </template>
                              </iron-list>
                            </template>
                            ```
                            #### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
                            ```html
                            <template is="x-list">
                              <style>
                                :host {
                                  display: block;
                                }
                            
                                iron-list {
                                  height: 100vh; /* don't use % values unless the parent element is sized.
                            *\/
                                }
                              </style>
                              <iron-list items="[[items]]">
                                <template>
                                  <div>
                                    ...
                                  </div>
                                </template>
                              </iron-list>
                            </template>
                            ```
                            #### Main document scrolling -
                            [jsbin](https://jsbin.com/wevirow/edit?html,output)
                            ```html
                            <head>
                              <style>
                                body {
                                  height: 100vh;
                                  margin: 0;
                                  display: flex;
                                  flex-direction: column;
                                }
                            
                                app-toolbar {
                                  position: fixed;
                                  top: 0;
                                  left: 0;
                                  right: 0;
                                }
                            
                                iron-list {
                                  /* add padding since the app-toolbar is fixed at the top *\/
                                  padding-top: 64px;
                                }
                              </style>
                            </head>
                            <body>
                              <app-toolbar>App name</app-toolbar>
                              <iron-list scroll-target="document">
                                <template>
                                  <div>
                                    ...
                                  </div>
                                </template>
                              </iron-list>
                            </body>
                            ```
                            
                            `iron-list` must be given a `<template>` which contains exactly one element. In
                            the examples above we used a `<div>`, but you can provide any element (including
                            custom elements).
                            
                            ### Template model
                            
                            List item templates should bind to template models of the following structure:
                            
                            ```js
                            {
                              index: 0,        // index in the item array
                              selected: false, // true if the current item is selected
                              tabIndex: -1,    // a dynamically generated tabIndex for focus management
                              item: {}         // user data corresponding to items[index]
                            }
                            ```
                            
                            Alternatively, you can change the property name used as data index by changing
                            the `indexAs` property. The `as` property defines the name of the variable to
                            add to the binding scope for the array.
                            
                            For example, given the following `data` array:
                            
                            ##### data.json
                            
                            ```js
                            [
                              {"name": "Bob"},
                              {"name": "Tim"},
                              {"name": "Mike"}
                            ]
                            ```
                            
                            The following code would render the list (note the name property is bound from
                            the model object provided to the template scope):
                            
                            ```html
                            <iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
                            <iron-list items="[[data]]" as="item">
                              <template>
                                <div>
                                  Name: [[item.name]]
                                </div>
                              </template>
                            </iron-list>
                            ```
                            
                            ### Grid layout
                            
                            `iron-list` supports a grid layout in addition to linear layout by setting
                            the `grid` attribute.  In this case, the list template item must have both fixed
                            width and height (e.g. via CSS). Based on this, the number of items
                            per row are determined automatically based on the size of the list viewport.
                            
                            ### Accessibility
                            
                            `iron-list` automatically manages the focus state for the items. It also
                            provides a `tabIndex` property within the template scope that can be used for
                            keyboard navigation. For example, users can press the up and down keys to move
                            to previous and next items in the list:
                            
                            ```html
                            <iron-list items="[[data]]" as="item">
                              <template>
                                <div tabindex$="[[tabIndex]]">
                                  Name: [[item.name]]
                                </div>
                              </template>
                            </iron-list>
                            ```
                            
                            ### Styling
                            
                            You can use the `--iron-list-items-container` mixin to style the container of
                            items:
                            
                            ```css
                            iron-list {
                             --iron-list-items-container: {
                                margin: auto;
                              };
                            }
                            ```
                            
                            ### Resizing
                            
                            `iron-list` lays out the items when it receives a notification via the
                            `iron-resize` event. This event is fired by any element that implements
                            `IronResizableBehavior`.
                            
                            By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
                            trigger this event automatically. If you hide the list manually (e.g. you use
                            `display: none`) you might want to implement `IronResizableBehavior` or fire
                            this event manually right after the list became visible again. For example:
                            
                            ```js
                            document.querySelector('iron-list').fire('iron-resize');
                            ```
                            
                            ### When should `<iron-list>` be used?
                            
                            `iron-list` should be used when a page has significantly more DOM nodes than the
                            ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
                            at a time. This is why we refer to it as a `virtual` list. In this case, a
                            `dom-repeat` will still create 500 nodes which could slow down the web app, but
                            `iron-list` will only create 20.
                            
                            However, having an `iron-list` does not mean that you can load all the data at
                            once. Say you have a million records in the database, you want to split the data
                            into pages so you can bring in a page at the time. The page could contain 500
                            items, and iron-list will only render 20.
                            
                            @element iron-list
                            @demo demo/index.html
                            
                            */(0,_cureMe.Polymer)({/** @override */_template:(0,_cureMe.html)(_templateObject_941725104e2611ea968e0b510ccc7207()),is:"iron-list",properties:{/**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */items:{type:Array},/**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */as:{type:String,value:"item"},/**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */indexAs:{type:String,value:"index"},/**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */selectedAs:{type:String,value:"selected"},/**
     * When true, the list is rendered as a grid. Grid items must have
     * fixed width and height set via CSS. e.g.
     *
     * ```html
     * <iron-list grid>
     *   <template>
     *      <div style="width: 100px; height: 100px;"> 100x100 </div>
     *   </template>
     * </iron-list>
     * ```
     */grid:{type:Boolean,value:/* ignoreName */ /* ignoreName */!1/* skipSlots */ /* skipSlots */ /* skipSlots */ /* skipSlots */,reflectToAttribute:!0,observer:"_gridChanged"},/**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */selectionEnabled:{type:Boolean,value:!1},/**
     * When `multiSelection` is false, this is the currently selected item, or
     * `null` if no item is selected.
     */selectedItem:{type:Object,notify:!0},/**
     * When `multiSelection` is true, this is an array that contains the
     * selected items.
     */selectedItems:{type:Object,notify:!0},/**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */multiSelection:{type:Boolean,value:!1},/**
     * The offset top from the scrolling element to the iron-list element.
     * This value can be computed using the position returned by
     * `getBoundingClientRect()` although it's preferred to use a constant value
     * when possible.
     *
     * This property is useful when an external scrolling element is used and
     * there's some offset between the scrolling element and the list. For
     * example: a header is placed above the list.
     */scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[_cureMe.Templatizer,_cureMe.IronResizableBehavior,_cureMe.IronScrollTargetBehavior,_cureMe.OptionalMutableDataBehavior],/**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */_ratio:.5,/**
   * The padding-top value for the list.
   */_scrollerPaddingTop:0,/**
   * This value is a cached value of `scrollTop` from the last `scroll` event.
   */_scrollPosition:0,/**
   * The sum of the heights of all the tiles in the DOM.
   */_physicalSize:0,/**
   * The average `offsetHeight` of the tiles observed till now.
   */_physicalAverage:0,/**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */_physicalAverageCount:0,/**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */_physicalTop:0,/**
   * The number of items in the list.
   */_virtualCount:0,/**
   * The estimated scroll height based on `_physicalAverage`
   */_estScrollHeight:0,/**
   * The scroll height of the dom node
   */_scrollHeight:0,/**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */_viewportHeight:0,/**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */_viewportWidth:0,/**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!HTMLElement>}
   */_physicalItems:null,/**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */_physicalSizes:null,/**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */_firstVisibleIndexVal:null,/**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */_lastVisibleIndexVal:null,/**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */_maxPages:2,/**
   * The currently focused physical item.
   */_focusedItem:null,/**
   * The virtual index of the focused item.
   */_focusedVirtualIndex:-1,/**
   * The physical index of the focused item.
   */_focusedPhysicalIndex:-1,/**
   * The the item that is focused if it is moved offscreen.
   * @private {?HTMLElement}
   */_offscreenFocusedItem:null,/**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   * @type {?HTMLElement}
   */_focusBackfillItem:null,/**
   * The maximum items per row
   */_itemsPerRow:1,/**
   * The width of each grid item
   */_itemWidth:0,/**
   * The height of the row in grid layout.
   */_rowHeight:0,/**
   * The cost of stamping a template in ms.
   */_templateCost:0,/**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */_parentModel:!0,/**
   * The bottom of the physical content.
   */get _physicalBottom(){return this._physicalTop+this._physicalSize},/**
   * The bottom of the scroll.
   */get _scrollBottom(){return this._scrollPosition+this._viewportHeight},/**
   * The n-th item rendered in the last physical item.
   */get _virtualEnd(){return this._virtualStart+this._physicalCount-1},/**
   * The height of the physical content that isn't on the screen.
   */get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},/**
   * The parent node for the _userTemplate.
   */get _itemsParent(){return(0,_cureMe.dom)((0,_cureMe.dom)(this._userTemplate).parentNode)},/**
   * The maximum scroll top value.
   */get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},/**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},/**
   * The k-th tile that is at the top of the scrolling list.
   */set _physicalStart(val){val=val%this._physicalCount;if(0>val){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},/**
   * The k-th tile that is at the bottom of the scrolling list.
   */get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},/**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},/**
   * True if the current list is visible.
   */get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},/**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(null==idx){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems(function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}// Handle a partially rendered final row in grid mode
if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}})||0;this._firstVisibleIndexVal=idx}return idx},/**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(null==idx){if(this.grid){idx=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems(function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)})}this._lastVisibleIndexVal=idx}return idx},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},/** @override */ready:function ready(){this.addEventListener("focus",this._didFocus.bind(this),!0)},/** @override */attached:function attached(){this._debounce("_render",this._render,_cureMe.animationFrame);// `iron-resize` is fired when the list is attached if the event is added
// before attached causing unnecessary work.
this.listen(this,"iron-resize","_resizeHandler");this.listen(this,"keydown","_keydownHandler")},/** @override */detached:function detached(){this.unlisten(this,"iron-resize","_resizeHandler");this.unlisten(this,"keydown","_keydownHandler")},/**
   * Set the overflow property if this element has its own scrolling region
   */_setOverflow:function _setOverflow(scrollTarget){this.style.webkitOverflowScrolling=scrollTarget===this?"touch":"";this.style.overflowY=scrollTarget===this?"auto":"";// Clear cache.
this._lastVisibleIndexVal=null;this._firstVisibleIndexVal=null;this._debounce("_render",this._render,_cureMe.animationFrame)},/**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */updateViewportBoundaries:function updateViewportBoundaries(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=!!("rtl"===styles.direction);this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},/**
   * Recycles the physical items when needed.
   */_scrollHandler:function _scrollHandler(){var scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),delta=scrollTop-this._scrollPosition,isScrollingDown=0<=delta;// Track the current scroll position.
this._scrollPosition=scrollTop;// Clear indexes for first and last visible indexes.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;// Random access.
if(Math.abs(delta)>this._physicalSize&&0<this._physicalSize){delta=delta-this._scrollOffset;var idxAdjustment=Math.round(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;// Estimate new physical offset based on the virtual start index.
// adjusts the physical start position to stay in sync with the clamped
// virtual start index. It's critical not to let this value be
// more than the scroll position however, since that would result in
// the physical items not covering the viewport, and leading to
// _increasePoolIfNeeded to run away creating items to try to fill it.
this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition);this._update()}else if(0<this._physicalCount){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),_cureMe.microTask)}},/**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */_getReusables:function _getReusables(fromTop){var ith,lastIth,offsetContent,physicalItemHeight,idxs=[],protectedOffsetContent=this._hiddenContentSize*this._ratio,virtualStart=this._virtualStart,virtualEnd=this._virtualEnd,physicalCount=this._physicalCount,top=this._physicalTop+this._scrollOffset,bottom=this._physicalBottom+this._scrollOffset,scrollTop=this._scrollPosition,scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;lastIth=this._physicalEnd;offsetContent=scrollTop-top}else{ith=this._physicalEnd;lastIth=this._physicalStart;offsetContent=bottom-scrollBottom}while(!0){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){// Check that index is within the valid range.
if(virtualEnd+idxs.length+1>=this._virtualCount){break}// Check that the index is not visible.
if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{// Check that index is within the valid range.
if(0>=virtualStart-idxs.length){break}// Check that the index is not visible.
if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=0===ith?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},/**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */_update:function _update(itemSet,movingUp){if(itemSet&&0===itemSet.length||0===this._physicalCount){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);// Adjust offset after measuring.
if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},/**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param {number} size Size of the pool
   */_createPool:function _createPool(size){this._ensureTemplatized();var i,inst,physicalItems=Array(size);for(i=0;i<size;i++){inst=this.stamp(null);// TODO(blasten):
// First element child is item; Safari doesn't support children[0]
// on a doc fragment. Test this to see if it still matters.
physicalItems[i]=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}return physicalItems},_isClientFull:function _isClientFull(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},/**
   * Increases the pool size.
   */_increasePoolIfNeeded:function _increasePoolIfNeeded(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);if(this.grid){var correction=nextPhysicalCount%this._itemsPerRow;if(correction&&nextPhysicalCount-correction<=this._physicalCount){nextPhysicalCount+=this._itemsPerRow}nextPhysicalCount-=correction}var delta=nextPhysicalCount-this._physicalCount,nextIncrease=Math.round(.5*this._physicalCount);if(0>delta){return}if(0<delta){var ts=window.performance.now();// Concat arrays in place.
[].push.apply(this._physicalItems,this._createPool(delta));// Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
// support it.
for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;// Update the physical start if it needs to preserve the model of the
// focused item. In this situation, the focused item is currently rendered
// and its model would have changed after increasing the pool if the
// physical start remained unchanged.
if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=Math.round(.5*this._physicalCount)}// The upper bounds is not fixed when dealing with a grid that doesn't
// fill it's last row with the exact number of items per row.
if(this._virtualEnd>=this._virtualCount-1||0===nextIncrease){// Do nothing.
}else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),_cureMe.microTask)}else if(this._physicalSize<this._optPhysicalSize){// Yield and increase the pool during idle time until the physical size is
// optimal.
this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,nextIncrease)),_cureMe.idlePeriod)}},/**
   * Renders the a new list.
   */_render:function _render(){if(!this.isAttached||!this._isVisible){return}if(0!==this._physicalCount){var reusables=this._getReusables(!0);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(0<this._virtualCount){// Initial render
this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},/**
   * Templetizes the user template.
   */_ensureTemplatized:function _ensureTemplatized(){if(this.ctor){return}this._userTemplate=/** @type {!HTMLTemplateElement} */this.queryEffectiveChildren("template");if(!this._userTemplate){console.warn("iron-list requires a template to be provided in light-dom")}var instanceProps={__key__:!0};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.selectedAs]=!0;instanceProps.tabIndex=!0;this._instanceProps=instanceProps;this.templatize(this._userTemplate,this.mutableData)},_gridChanged:function _gridChanged(newGrid,oldGrid){if("undefined"===typeof oldGrid)return;this.notifyResize();(0,_cureMe.flush)();newGrid&&this._updateGridMetrics()},/**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */_itemsChanged:function _itemsChanged(change){if("items"===change.path){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,_cureMe.animationFrame)}else if("items.splices"===change.path){this._adjustVirtualIndex(change.value.indexSplices);this._virtualCount=this.items?this.items.length:0;// Only blur if at least one item is added or removed.
var itemAddedOrRemoved=change.value.indexSplices.some(function(splice){return 0<splice.addedCount||0<splice.removed.length});if(itemAddedOrRemoved){// Only blur activeElement if it is a descendant of the list (#505,
// #507).
var activeElement=this._getActiveElement();if(this.contains(activeElement)){activeElement.blur()}}// Render only if the affected index is rendered.
var affectedIndexRendered=change.value.indexSplices.some(function(splice){return splice.index+splice.addedCount>=this._virtualStart&&splice.index<=this._virtualEnd},this);if(!this._isClientFull()||affectedIndexRendered){this._debounce("_render",this._render,_cureMe.animationFrame)}}else if("items.length"!==change.path){this._forwardItemPath(change.path,change.value)}},_forwardItemPath:function _forwardItemPath(path,value){path=path.slice(6);// 'items.'.length == 6
var dot=path.indexOf(".");if(-1===dot){dot=path.length}var isIndexRendered,pidx,inst,offscreenInstance=this.modelForElement(this._offscreenFocusedItem),vidx=parseInt(path.substring(0,dot),10);isIndexRendered=this._isIndexRendered(vidx);if(isIndexRendered){pidx=this._getPhysicalIndex(vidx);inst=this.modelForElement(this._physicalItems[pidx])}else if(offscreenInstance){inst=offscreenInstance}if(!inst||inst[this.indexAs]!==vidx){return}path=path.substring(dot+1);path=this.as+(path?"."+path:"");inst._setPendingPropertyOrPath(path,value,!1,!0);inst._flushProperties&&inst._flushProperties();// TODO(blasten): V1 doesn't do this and it's a bug
if(isIndexRendered){this._updateMetrics([pidx]);this._positionItems();this._updateScrollerSize()}},/**
   * @param {!Array<!Object>} splices
   */_adjustVirtualIndex:function _adjustVirtualIndex(splices){splices.forEach(function(splice){// deselect removed items
splice.removed.forEach(this._removeItem,this);// We only need to care about changes happening above the current position
if(splice.index<this._virtualStart){var delta=Math.max(splice.addedCount-splice.removed.length,splice.index-this._virtualStart);this._virtualStart=this._virtualStart+delta;if(0<=this._focusedVirtualIndex){this._focusedVirtualIndex=this._focusedVirtualIndex+delta}}},this)},_removeItem:function _removeItem(item){this.$.selector.deselect(item);// remove the current focused item
if(this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===item){this._removeFocusedItem()}},/**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */_iterateItems:function _iterateItems(fn,itemSet){var pidx,vidx,rtn,i;if(2===arguments.length&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}},/**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */_computeVidx:function _computeVidx(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},/**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */_assignModels:function _assignModels(itemSet){this._iterateItems(function(pidx,vidx){var el=this._physicalItems[pidx],item=this.items&&this.items[vidx];if(null!=item){var inst=this.modelForElement(el);inst.__key__=null;this._forwardProperty(inst,this.as,item);this._forwardProperty(inst,this.selectedAs,this.$.selector.isSelected(item));this._forwardProperty(inst,this.indexAs,vidx);this._forwardProperty(inst,"tabIndex",this._focusedVirtualIndex===vidx?0:-1);this._physicalIndexForKey[inst.__key__]=pidx;inst._flushProperties&&inst._flushProperties(!0);el.removeAttribute("hidden")}else{el.setAttribute("hidden","")}},itemSet)},/**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */_updateMetrics:function _updateMetrics(itemSet){// Make sure we distributed all the physical items
// so we can measure them.
(0,_cureMe.flush)();var newPhysicalSize=0,oldPhysicalSize=0,prevAvgCount=this._physicalAverageCount,prevPhysicalAvg=this._physicalAverage;this._iterateItems(function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0},itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=1===this._itemsPerRow?oldPhysicalSize:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}// Update the average if it measured something.
if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},_updateGridMetrics:function _updateGridMetrics(){this._itemWidth=0<this._physicalCount?this._physicalItems[0].getBoundingClientRect().width:200;this._rowHeight=0<this._physicalCount?this._physicalItems[0].offsetHeight:200;this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},/**
   * Updates the position of the physical items.
   */_positionItems:function _positionItems(){this._adjustScrollPosition();var y=this._physicalTop;if(this.grid){var totalItemWidth=this._itemsPerRow*this._itemWidth,rowOffset=(this._viewportWidth-totalItemWidth)/2;this._iterateItems(function(pidx,vidx){var modulus=vidx%this._itemsPerRow,x=Math.floor(modulus*this._itemWidth+rowOffset);if(this._isRTL){x=-1*x}this.translate3d(x+"px",y+"px",0,this._physicalItems[pidx]);if(this._shouldRenderNextRow(vidx)){y+=this._rowHeight}})}else{var order=[];this._iterateItems(function(pidx,vidx){var item=this._physicalItems[pidx];this.translate3d(0,y+"px",0,item);y+=this._physicalSizes[pidx];var itemId=item.id;if(itemId){order.push(itemId)}});if(order.length){this.setAttribute("aria-owns",order.join(" "))}}},_getPhysicalSizeIncrement:function _getPhysicalSizeIncrement(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},/**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */_shouldRenderNextRow:function _shouldRenderNextRow(vidx){return vidx%this._itemsPerRow===this._itemsPerRow-1},/**
   * Adjusts the scroll position when it was overestimated.
   */_adjustScrollPosition:function _adjustScrollPosition(){var deltaHeight=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);// Note: the delta can be positive or negative.
if(0!==deltaHeight){this._physicalTop=this._physicalTop-deltaHeight;// This may be called outside of a scrollHandler, so use last cached position
var scrollTop=this._scrollPosition;// juking scroll position during interial scrolling on iOS is no bueno
if(!IOS_TOUCH_SCROLLING&&0<scrollTop){this._resetScrollPosition(scrollTop-deltaHeight)}}},/**
   * Sets the position of the scroll.
   */_resetScrollPosition:function _resetScrollPosition(pos){if(this.scrollTarget&&0<=pos){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},/**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */_updateScrollerSize:function _updateScrollerSize(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||0===this._scrollHeight;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;// Amortize height adjustment, so it won't trigger large repaints too often.
if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},/**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToItem
   * @param {(Object)} item The item to be scrolled to
   */scrollToItem:function scrollToItem(item){return this.scrollToIndex(this.items.indexOf(item))},/**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */scrollToIndex:function scrollToIndex(idx){if("number"!==typeof idx||0>idx||idx>this.items.length-1){return}(0,_cureMe.flush)();// Items should have been rendered prior scrolling to an index.
if(0===this._physicalCount){return}idx=this._clamp(idx,0,this._virtualCount-1);// Update the virtual start only when needed.
if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-2*this._itemsPerRow:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();// Estimate new physical offset.
this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart,currentVirtualItem=this._virtualStart,targetOffsetTop=0,hiddenContentSize=this._hiddenContentSize;// scroll to the item as much as we can.
while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(!0);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},/**
   * Reset the physical average and the average count.
   */_resetAverage:function _resetAverage(){this._physicalAverage=0;this._physicalAverageCount=0},/**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */_resizeHandler:function _resizeHandler(){this._debounce("_render",function(){// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(this._isVisible){this.updateViewportBoundaries();// Reinstall the scroll event listener.
this.toggleScrollListener(!0);this._resetAverage();this._render()}else{// Uninstall the scroll event listener.
this.toggleScrollListener(!1)}},_cureMe.animationFrame)},/**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item instance.
   */selectItem:function selectItem(item){return this.selectIndex(this.items.indexOf(item))},/**
   * Selects the item at the given index in the items array.
   *
   * @method selectIndex
   * @param {number} index The index of the item in the items array.
   */selectIndex:function selectIndex(index){if(0>index||index>=this._virtualCount){return}if(!this.multiSelection&&this.selectedItem){this.clearSelection()}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);if(model){model[this.selectedAs]=!0}this.updateSizeForIndex(index)}this.$.selector.selectIndex(index)},/**
   * Deselects the given item.
   *
   * @method deselect
   * @param {Object} item The item instance.
   */deselectItem:function deselectItem(item){return this.deselectIndex(this.items.indexOf(item))},/**
   * Deselects the item at the given index in the items array.
   *
   * @method deselectIndex
   * @param {number} index The index of the item in the items array.
   */deselectIndex:function deselectIndex(index){if(0>index||index>=this._virtualCount){return}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);model[this.selectedAs]=!1;this.updateSizeForIndex(index)}this.$.selector.deselectIndex(index)},/**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @method toggleSelectionForItem
   * @param {Object} item The item object.
   */toggleSelectionForItem:function toggleSelectionForItem(item){return this.toggleSelectionForIndex(this.items.indexOf(item))},/**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @method toggleSelectionForIndex
   * @param {number} index The index of the item in the items array.
   */toggleSelectionForIndex:function toggleSelectionForIndex(index){var isSelected=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(index):this.$.selector.isSelected(this.items[index]);isSelected?this.deselectIndex(index):this.selectIndex(index)},/**
   * Clears the current selection in the list.
   *
   * @method clearSelection
   */clearSelection:function clearSelection(){this._iterateItems(function(pidx,vidx){this.modelForElement(this._physicalItems[pidx])[this.selectedAs]=!1});this.$.selector.clearSelection()},/**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */_selectionEnabledChanged:function _selectionEnabledChanged(selectionEnabled){var handler=selectionEnabled?this.listen:this.unlisten;handler.call(this,this,"tap","_selectionHandler")},/**
   * Select an item from an event object.
   */_selectionHandler:function _selectionHandler(e){var model=this.modelForElement(e.target);if(!model){return}var modelTabIndex,activeElTabIndex,target=(0,_cureMe.dom)(e).path[0],activeEl=this._getActiveElement(),physicalItem=this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];// Safari does not focus certain form controls via mouse
// https://bugs.webkit.org/show_bug.cgi?id=118043
if("input"===target.localName||"button"===target.localName||"select"===target.localName){return}// Set a temporary tabindex
modelTabIndex=model.tabIndex;model.tabIndex=SECRET_TABINDEX;activeElTabIndex=activeEl?activeEl.tabIndex:-1;model.tabIndex=modelTabIndex;// Only select the item if the tap wasn't on a focusable child
// or the element bound to `tabIndex`
if(activeEl&&physicalItem!==activeEl&&physicalItem.contains(activeEl)&&activeElTabIndex!==SECRET_TABINDEX){return}this.toggleSelectionForItem(model[this.as])},_multiSelectionChanged:function _multiSelectionChanged(multiSelection){this.clearSelection();this.$.selector.multi=multiSelection},/**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */updateSizeForItem:function updateSizeForItem(item){return this.updateSizeForIndex(this.items.indexOf(item))},/**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */updateSizeForIndex:function updateSizeForIndex(index){if(!this._isIndexRendered(index)){return null}this._updateMetrics([this._getPhysicalIndex(index)]);this._positionItems();return null},/**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */_manageFocus:function _manageFocus(){var fidx=this._focusedVirtualIndex;if(0<=fidx&&fidx<this._virtualCount){// if it's a valid index, check if that index is rendered
// in a physical item.
if(this._isIndexRendered(fidx)){this._restoreFocusedItem()}else{this._createFocusBackfillItem()}}else if(0<this._virtualCount&&0<this._physicalCount){// otherwise, assign the initial focused index.
this._focusedPhysicalIndex=this._physicalStart;this._focusedVirtualIndex=this._virtualStart;this._focusedItem=this._physicalItems[this._physicalStart]}},/**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */_convertIndexToCompleteRow:function _convertIndexToCompleteRow(idx){// when grid == false _itemPerRow can be unset.
this._itemsPerRow=this._itemsPerRow||1;return this.grid?Math.ceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function _isIndexRendered(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_isIndexVisible:function _isIndexVisible(idx){return idx>=this.firstVisibleIndex&&idx<=this.lastVisibleIndex},_getPhysicalIndex:function _getPhysicalIndex(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},focusItem:function focusItem(idx){this._focusPhysicalItem(idx)},_focusPhysicalItem:function _focusPhysicalItem(idx){if(0>idx||idx>=this._virtualCount){return}this._restoreFocusedItem();// scroll to index to make sure it's rendered
if(!this._isIndexRendered(idx)){this.scrollToIndex(idx)}var physicalItem=this._physicalItems[this._getPhysicalIndex(idx)],model=this.modelForElement(physicalItem),focusable;// set a secret tab index
model.tabIndex=SECRET_TABINDEX;// check if focusable element is the physical item
if(physicalItem.tabIndex===SECRET_TABINDEX){focusable=physicalItem}// search for the element which tabindex is bound to the secret tab index
if(!focusable){focusable=(0,_cureMe.dom)(physicalItem).querySelector("[tabindex=\""+SECRET_TABINDEX+"\"]")}// restore the tab index
model.tabIndex=0;// focus the focusable element
this._focusedVirtualIndex=idx;focusable&&focusable.focus()},_removeFocusedItem:function _removeFocusedItem(){if(this._offscreenFocusedItem){this._itemsParent.removeChild(this._offscreenFocusedItem)}this._offscreenFocusedItem=null;this._focusBackfillItem=null;this._focusedItem=null;this._focusedVirtualIndex=-1;this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function _createFocusBackfillItem(){var fpidx=this._focusedPhysicalIndex;if(this._offscreenFocusedItem||0>this._focusedVirtualIndex){return}if(!this._focusBackfillItem){// Create a physical item.
var inst=this.stamp(null);this._focusBackfillItem=/** @type {!HTMLElement} */inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}// Set the offcreen focused physical item.
this._offscreenFocusedItem=this._physicalItems[fpidx];this.modelForElement(this._offscreenFocusedItem).tabIndex=0;this._physicalItems[fpidx]=this._focusBackfillItem;this._focusedPhysicalIndex=fpidx;// Hide the focused physical.
this.translate3d(0,HIDDEN_Y,0,this._offscreenFocusedItem)},_restoreFocusedItem:function _restoreFocusedItem(){if(!this._offscreenFocusedItem||0>this._focusedVirtualIndex){return}// Assign models to the focused index.
this._assignModels();// Get the new physical index for the focused index.
var fpidx=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),onScreenItem=this._physicalItems[fpidx];if(!onScreenItem){return}var onScreenInstance=this.modelForElement(onScreenItem),offScreenInstance=this.modelForElement(this._offscreenFocusedItem);// Restores the physical item only when it has the same model
// as the offscreen one. Use key for comparison since users can set
// a new item via set('items.idx').
if(onScreenInstance[this.as]===offScreenInstance[this.as]){// Flip the focus backfill.
this._focusBackfillItem=onScreenItem;onScreenInstance.tabIndex=-1;// Restore the focused physical item.
this._physicalItems[fpidx]=this._offscreenFocusedItem;// Hide the physical item that backfills.
this.translate3d(0,HIDDEN_Y,0,this._focusBackfillItem)}else{this._removeFocusedItem();this._focusBackfillItem=null}this._offscreenFocusedItem=null},_didFocus:function _didFocus(e){var targetModel=this.modelForElement(e.target),focusedModel=this.modelForElement(this._focusedItem),hasOffscreenFocusedItem=null!==this._offscreenFocusedItem,fidx=this._focusedVirtualIndex;if(!targetModel){return}if(focusedModel===targetModel){// If the user focused the same item, then bring it into view if it's not
// visible.
if(!this._isIndexVisible(fidx)){this.scrollToIndex(fidx)}}else{this._restoreFocusedItem();// Restore tabIndex for the currently focused item.
if(focusedModel){focusedModel.tabIndex=-1}// Set the tabIndex for the next focused item.
targetModel.tabIndex=0;fidx=targetModel[this.indexAs];this._focusedVirtualIndex=fidx;this._focusedPhysicalIndex=this._getPhysicalIndex(fidx);this._focusedItem=this._physicalItems[this._focusedPhysicalIndex];if(hasOffscreenFocusedItem&&!this._offscreenFocusedItem){this._update()}}},_keydownHandler:function _keydownHandler(e){switch(e.keyCode){case/* ARROW_DOWN */40:if(this._focusedVirtualIndex<this._virtualCount-1)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case/* ARROW_RIGHT */39:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case/* ARROW_UP */38:if(0<this._focusedVirtualIndex)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case/* ARROW_LEFT */37:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case/* ENTER */13:this._focusPhysicalItem(this._focusedVirtualIndex);if(this.selectionEnabled)this._selectionHandler(e);break;}},_clamp:function _clamp(v,min,max){return Math.min(max,Math.max(min,v))},_debounce:function _debounce(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=_cureMe.Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));(0,_cureMe.enqueueDebouncer)(this._debouncers[name])},_forwardProperty:function _forwardProperty(inst,name,value){inst._setPendingProperty(name,value)},/* Templatizer bindings for v2 */_forwardHostPropV2:function _forwardHostPropV2(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).forwardHostProp(prop,value)}},this)},_notifyInstancePropV2:function _notifyInstancePropV2(inst,prop,value){if((0,_cureMe.matches)(this.as,prop)){var idx=inst[this.indexAs];if(prop==this.as){this.items[idx]=value}this.notifyPath((0,_cureMe.translate)(this.as,"items."+idx,prop),value)}},/* Templatizer bindings for v1 */_getStampedChildren:function _getStampedChildren(){return this._physicalItems},_forwardInstancePath:function _forwardInstancePath(inst,path,value){if(0===path.indexOf(this.as+".")){this.notifyPath("items."+inst.__key__+"."+path.slice(this.as.length+1),value)}},_forwardParentPath:function _forwardParentPath(path,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).notifyPath(path,value)}},this)},_forwardParentProp:function _forwardParentProp(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item)[prop]=value}},this)},/* Gets the activeElement of the shadow root/host that contains the list. */_getActiveElement:function _getActiveElement(){var itemsHost=this._itemsParent.node.domHost;return(0,_cureMe.dom)(itemsHost?itemsHost.root:document).activeElement}});var DISABLED_ATTR="disable-upgrade",DisableUpgradeMixin=(0,_cureMe.dedupingMixin)(function(base){/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends {HTMLElement}
   * @private
   */var superClass=(0,_cureMe.ElementMixin)(base),DisableUpgradeClass=/*#__PURE__*/function(_superClass){babelHelpers.inherits(DisableUpgradeClass,_superClass);function DisableUpgradeClass(){babelHelpers.classCallCheck(this,DisableUpgradeClass);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DisableUpgradeClass).apply(this,arguments))}babelHelpers.createClass(DisableUpgradeClass,[{key:"attributeChangedCallback",/**
       * @override
       * @param {string} name Attribute name.
       * @param {?string} old The previous value for the attribute.
       * @param {?string} value The new value for the attribute.
       * @param {?string} namespace The XML namespace for the attribute.
       * @return {void}
       */value:function attributeChangedCallback(name,old,value,namespace){if(name==DISABLED_ATTR){if(!this.__dataEnabled&&null==value&&this.isConnected){babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"connectedCallback",this).call(this)}}else{babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"attributeChangedCallback",this).call(this,name,old,value,/** @type {null|string} */namespace)}}/*
        NOTE: cannot gate on attribute because this is called before
        attributes are delivered. Therefore, we stub this out and
        call `super._initializeProperties()` manually.
      */ /** @override */},{key:"_initializeProperties",value:function _initializeProperties(){}// prevent user code in connected from running
/** @override */},{key:"connectedCallback",value:function connectedCallback(){if(this.__dataEnabled||!this.hasAttribute(DISABLED_ATTR)){babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"connectedCallback",this).call(this)}}// prevent element from turning on properties
/** @override */},{key:"_enableProperties",value:function _enableProperties(){if(!this.hasAttribute(DISABLED_ATTR)){if(!this.__dataEnabled){babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"_initializeProperties",this).call(this)}babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"_enableProperties",this).call(this)}}// only go if "enabled"
/** @override */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(this.__dataEnabled){babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"disconnectedCallback",this).call(this)}}}],[{key:"observedAttributes",/**
     * @suppress {missingProperties} go/missingfnprops
     */get:function get(){return babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass),"observedAttributes",this).concat(DISABLED_ATTR)}}]);return DisableUpgradeClass}(superClass);/**
                                              * @polymer
                                              * @mixinClass
                                              * @implements {Polymer_DisableUpgradeMixin}
                                              */return DisableUpgradeClass});/**
                                          * Element class mixin that allows the element to boot up in a non-enabled
                                          * state when the `disable-upgrade` attribute is present. This mixin is
                                          * designed to be used with element classes like PolymerElement that perform
                                          * initial startup work when they are first connected. When the
                                          * `disable-upgrade` attribute is removed, if the element is connected, it
                                          * boots up and "enables" as it otherwise would; if it is not connected, the
                                          * element boots up when it is next connected.
                                          *
                                          * Using `disable-upgrade` with PolymerElement prevents any data propagation
                                          * to the element, any element DOM from stamping, or any work done in
                                          * connected/disconnctedCallback from occuring, but it does not prevent work
                                          * done in the element constructor.
                                          *
                                          * Note, this mixin must be applied on top of any element class that
                                          * itself implements a `connectedCallback` so that it can control the work
                                          * done in `connectedCallback`. For example,
                                          *
                                          *     MyClass = DisableUpgradeMixin(class extends BaseClass {...});
                                          *
                                          * @mixinFunction
                                          * @polymer
                                          * @appliesMixin ElementMixin
                                          * @template T
                                          * @param {function(new:T)} superClass Class to apply mixin to.
                                          * @return {function(new:T)} superClass with mixin applied.
                                          */_exports.DisableUpgradeMixin=DisableUpgradeMixin;var disableUpgradeMixin={DisableUpgradeMixin:DisableUpgradeMixin};/**
    * @polymerMixin
    */_exports.$disableUpgradeMixin=disableUpgradeMixin;var ThemePropertyMixin=function ThemePropertyMixin(superClass){return(/*#__PURE__*/function(_superClass2){babelHelpers.inherits(VaadinThemePropertyMixin,_superClass2);function VaadinThemePropertyMixin(){babelHelpers.classCallCheck(this,VaadinThemePropertyMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinThemePropertyMixin).apply(this,arguments))}babelHelpers.createClass(VaadinThemePropertyMixin,[{key:"attributeChangedCallback",/** @protected */value:function attributeChangedCallback(name,oldValue,newValue){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinThemePropertyMixin.prototype),"attributeChangedCallback",this).call(this,name,oldValue,newValue);if("theme"===name){this._setTheme(newValue)}}}],[{key:"properties",get:function get(){return{/**
       * Helper property with theme attribute value facilitating propagation
       * in shadow DOM.
       *
       * Enables the component implementation to propagate the `theme`
       * attribute value to the subcomponents in Shadow DOM by binding
       * the subcomponent’s "theme" attribute to the `theme` property of
       * the host.
       *
       * **NOTE:** Extending the mixin only provides the property for binding,
       * and does not make the propagation alone.
       *
       * See [Theme Attribute and Subcomponents](https://github.com/vaadin/vaadin-themable-mixin/wiki/5.-Theme-Attribute-and-Subcomponents).
       * page for more information.
       *
       * @protected
       */theme:{type:String,readOnly:!0}}}}]);return VaadinThemePropertyMixin}(superClass))};_exports.ThemePropertyMixin=ThemePropertyMixin;var vaadinThemePropertyMixin={ThemePropertyMixin:ThemePropertyMixin};_exports.$vaadinThemePropertyMixin=vaadinThemePropertyMixin;var ThemableMixin=function ThemableMixin(superClass){return(/*#__PURE__*/function(_ThemePropertyMixin){babelHelpers.inherits(VaadinThemableMixin,_ThemePropertyMixin);function VaadinThemableMixin(){babelHelpers.classCallCheck(this,VaadinThemableMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinThemableMixin).apply(this,arguments))}babelHelpers.createClass(VaadinThemableMixin,null,[{key:"finalize",/** @protected */value:function finalize(){var _this=this;babelHelpers.get(babelHelpers.getPrototypeOf(VaadinThemableMixin),"finalize",this).call(this);var template=this.prototype._template,hasOwnTemplate=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,inheritedTemplate=Object.getPrototypeOf(this.prototype)._template;if(inheritedTemplate&&!hasOwnTemplate){// The element doesn't define its own template -> include the theme modules from the inherited template
Array.from(inheritedTemplate.content.querySelectorAll("style[include]")).forEach(function(s){_this._includeStyle(s.getAttribute("include"),template)})}this._includeMatchingThemes(template)}/** @protected */},{key:"_includeMatchingThemes",value:function _includeMatchingThemes(template){var _this2=this,domModule=_cureMe.DomModule,modules=domModule.prototype.modules,hasThemes=!1,defaultModuleName=this.is+"-default-theme";Object.keys(modules).sort(function(moduleNameA,moduleNameB){var vaadinA=0===moduleNameA.indexOf("vaadin-"),vaadinB=0===moduleNameB.indexOf("vaadin-"),vaadinThemePrefixes=["lumo-","material-"],vaadinThemeA=0<vaadinThemePrefixes.filter(function(prefix){return 0===moduleNameA.indexOf(prefix)}).length,vaadinThemeB=0<vaadinThemePrefixes.filter(function(prefix){return 0===moduleNameB.indexOf(prefix)}).length;if(vaadinA!==vaadinB){// Include vaadin core styles first
return vaadinA?-1:1}else if(vaadinThemeA!==vaadinThemeB){// Include vaadin theme styles after that
return vaadinThemeA?-1:1}else{// Lastly include custom styles so they override all vaadin styles
return 0}}).forEach(function(moduleName){if(moduleName!==defaultModuleName){var themeFor=modules[moduleName].getAttribute("theme-for");if(themeFor){themeFor.split(" ").forEach(function(themeForToken){if(new RegExp("^"+themeForToken.split("*").join(".*")+"$").test(_this2.is)){hasThemes=!0;_this2._includeStyle(moduleName,template)}})}}});if(!hasThemes&&modules[defaultModuleName]){// No theme modules found, include the default module if it exists
this._includeStyle(defaultModuleName,template)}}/** @private */},{key:"_includeStyle",value:function _includeStyle(moduleName,template){if(template&&!template.content.querySelector("style[include=\"".concat(moduleName,"\"]"))){var styleEl=document.createElement("style");styleEl.setAttribute("include",moduleName);template.content.appendChild(styleEl)}}}]);return VaadinThemableMixin}(ThemePropertyMixin(superClass)))};_exports.ThemableMixin=ThemableMixin;var vaadinThemableMixin={ThemableMixin:ThemableMixin};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * A private mixin to avoid problems with dynamic properties and Polymer Analyzer.
       * No need to expose these properties in the API docs.
       * @polymerMixin
       */_exports.$vaadinThemableMixin=vaadinThemableMixin;var TabIndexMixin=function TabIndexMixin(superClass){return(/*#__PURE__*/function(_superClass3){babelHelpers.inherits(VaadinTabIndexMixin,_superClass3);function VaadinTabIndexMixin(){babelHelpers.classCallCheck(this,VaadinTabIndexMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinTabIndexMixin).apply(this,arguments))}babelHelpers.createClass(VaadinTabIndexMixin,null,[{key:"properties",get:function get(){var properties={/**
       * Internal property needed to listen to `tabindex` attribute changes.
       *
       * For changing the tabindex of this component use the native `tabIndex` property.
       * @private
       */tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};if(window.ShadyDOM){// ShadyDOM browsers need the `tabIndex` in order to notify when the user changes it programmatically.
properties.tabIndex=properties.tabindex}return properties}}]);return VaadinTabIndexMixin}(superClass))},ControlStateMixin=function ControlStateMixin(superClass){return(/*#__PURE__*/function(_TabIndexMixin){babelHelpers.inherits(VaadinControlStateMixin,_TabIndexMixin);function VaadinControlStateMixin(){babelHelpers.classCallCheck(this,VaadinControlStateMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinControlStateMixin).apply(this,arguments))}babelHelpers.createClass(VaadinControlStateMixin,[{key:"ready",value:function ready(){var _this3=this;this.addEventListener("focusin",function(e){if(e.composedPath()[0]===_this3){_this3._focus(e)}else if(-1!==e.composedPath().indexOf(_this3.focusElement)&&!_this3.disabled){_this3._setFocused(!0)}});this.addEventListener("focusout",function(e){return _this3._setFocused(!1)});// In super.ready() other 'focusin' and 'focusout' listeners might be
// added, so we call it after our own ones to ensure they execute first.
// Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
// input field on iOS after “Done” is pressed.
babelHelpers.get(babelHelpers.getPrototypeOf(VaadinControlStateMixin.prototype),"ready",this).call(this);// This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
// where focusout event does not go out of shady DOM because composed property in the event is not true
var ensureEventComposed=function ensureEventComposed(e){if(!e.composed){e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))}};this.shadowRoot.addEventListener("focusin",ensureEventComposed);this.shadowRoot.addEventListener("focusout",ensureEventComposed);this.addEventListener("keydown",function(e){if(!e.defaultPrevented&&9===e.keyCode){if(e.shiftKey){// Flag is checked in _focus event handler.
_this3._isShiftTabbing=!0;HTMLElement.prototype.focus.apply(_this3);_this3._setFocused(!1);// Event handling in IE is asynchronous and the flag is removed asynchronously as well
setTimeout(function(){return _this3._isShiftTabbing=!1},0)}else{// Workaround for FF63-65 bug that causes the focus to get lost when
// blurring a slotted component with focusable shadow root content
// https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
// TODO: Remove when safe
var firefox=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(firefox&&63<=parseFloat(firefox[1])&&66>parseFloat(firefox[1])&&_this3.parentNode&&_this3.nextSibling){var fakeTarget=document.createElement("input");fakeTarget.style.position="absolute";fakeTarget.style.opacity=0;fakeTarget.tabIndex=_this3.tabIndex;_this3.parentNode.insertBefore(fakeTarget,_this3.nextSibling);fakeTarget.focus();fakeTarget.addEventListener("focusout",function(){return _this3.parentNode.removeChild(fakeTarget)})}}}});if(this.autofocus&&!this.focused&&!this.disabled){window.requestAnimationFrame(function(){_this3._focus();_this3._setFocused(!0);_this3.setAttribute("focus-ring","")})}this._boundKeydownListener=this._bodyKeydownListener.bind(this);this._boundKeyupListener=this._bodyKeyupListener.bind(this)}/**
     * @protected
     */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinControlStateMixin.prototype),"connectedCallback",this).call(this);document.body.addEventListener("keydown",this._boundKeydownListener,!0);document.body.addEventListener("keyup",this._boundKeyupListener,!0)}/**
     * @protected
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinControlStateMixin.prototype),"disconnectedCallback",this).call(this);document.body.removeEventListener("keydown",this._boundKeydownListener,!0);document.body.removeEventListener("keyup",this._boundKeyupListener,!0);// in non-Chrome browsers, blur does not fire on the element when it is disconnected.
// reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.
if(this.hasAttribute("focused")){this._setFocused(!1)}}},{key:"_setFocused",value:function _setFocused(focused){if(focused){this.setAttribute("focused","")}else{this.removeAttribute("focused")}// focus-ring is true when the element was focused from the keyboard.
// Focus Ring [A11ycasts]: https://youtu.be/ilj2P5-5CjI
if(focused&&this._tabPressed){this.setAttribute("focus-ring","")}else{this.removeAttribute("focus-ring")}}},{key:"_bodyKeydownListener",value:function _bodyKeydownListener(e){this._tabPressed=9===e.keyCode}},{key:"_bodyKeyupListener",value:function _bodyKeyupListener(){this._tabPressed=!1}/**
     * Any element extending this mixin is required to implement this getter.
     * It returns the actual focusable element in the component.
     */},{key:"_focus",value:function _focus(e){if(this._isShiftTabbing){return}this.focusElement.focus();this._setFocused(!0)}/**
     * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
     * @private
     */},{key:"focus",value:function focus(){if(!this.focusElement||this.disabled){return}this.focusElement.focus();this._setFocused(!0)}/**
     * Native bluring in the host element does nothing because it does not have the focus.
     * In chrome it works, but not in FF.
     * @private
     */},{key:"blur",value:function blur(){this.focusElement.blur();this._setFocused(!1)}},{key:"_disabledChanged",value:function _disabledChanged(disabled){this.focusElement.disabled=disabled;if(disabled){this.blur();this._previousTabIndex=this.tabindex;this.tabindex=-1;this.setAttribute("aria-disabled","true")}else{if("undefined"!==typeof this._previousTabIndex){this.tabindex=this._previousTabIndex}this.removeAttribute("aria-disabled")}}},{key:"_tabindexChanged",value:function _tabindexChanged(tabindex){if(tabindex!==void 0){this.focusElement.tabIndex=tabindex}if(this.disabled&&this.tabindex){// If tabindex attribute was changed while checkbox was disabled
if(-1!==this.tabindex){this._previousTabIndex=this.tabindex}this.tabindex=tabindex=void 0}if(window.ShadyDOM){this.setProperties({tabIndex:tabindex,tabindex:tabindex})}}/**
     * @protected
     */},{key:"click",value:function click(){if(!this.disabled){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinControlStateMixin.prototype),"click",this).call(this)}}},{key:"focusElement",get:function get(){window.console.warn("Please implement the 'focusElement' property in <".concat(this.localName,">"));return this}}],[{key:"properties",get:function get(){return{/**
       * Specify that this control should have input focus when the page loads.
       */autofocus:{type:Boolean},/**
       * Stores the previous value of tabindex attribute of the disabled element
       */_previousTabIndex:{type:Number},/**
       * If true, the user cannot interact with this element.
       */disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}}]);return VaadinControlStateMixin}(TabIndexMixin(superClass)))};/**
    * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
    * implementation fails in the shadow dom, so we have this for vaadin elements.
    * @polymerMixin
    */_exports.ControlStateMixin=ControlStateMixin;var vaadinControlStateMixin={ControlStateMixin:ControlStateMixin};/**
    * Array of Vaadin custom element classes that have been subscribed to the dir changes.
    */_exports.$vaadinControlStateMixin=vaadinControlStateMixin;var directionSubscribers=[],directionUpdater=function directionUpdater(){var documentDir=getDocumentDir();directionSubscribers.forEach(function(element){alignDirs(element,documentDir)})},directionObserver=new MutationObserver(directionUpdater);directionObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var alignDirs=function alignDirs(element,documentDir){if(documentDir){element.setAttribute("dir",documentDir)}else{element.removeAttribute("dir")}},getDocumentDir=function getDocumentDir(){return document.documentElement.getAttribute("dir")},DirMixin=function DirMixin(superClass){return(/*#__PURE__*/function(_superClass4){babelHelpers.inherits(VaadinDirMixin,_superClass4);function VaadinDirMixin(){babelHelpers.classCallCheck(this,VaadinDirMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinDirMixin).apply(this,arguments))}babelHelpers.createClass(VaadinDirMixin,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinDirMixin.prototype),"connectedCallback",this).call(this);if(!this.hasAttribute("dir")){this.__subscribe();alignDirs(this,getDocumentDir())}}/** @protected */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinDirMixin.prototype),"attributeChangedCallback",this).call(this,name,oldValue,newValue);if("dir"!==name){return}// New value equals to the document direction and the element is not subscribed to the changes
var newValueEqlDocDir=newValue===getDocumentDir()&&-1===directionSubscribers.indexOf(this),newValueEmptied=!newValue&&oldValue&&-1===directionSubscribers.indexOf(this),newDiffValue=newValue!==getDocumentDir()&&oldValue===getDocumentDir();// Value was emptied and the element is not subscribed to the changes
if(newValueEqlDocDir||newValueEmptied){this.__subscribe();alignDirs(this,getDocumentDir())}else if(newDiffValue){this.__subscribe(!1)}}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinDirMixin.prototype),"disconnectedCallback",this).call(this);this.__subscribe(!1)}},{key:"__subscribe",value:function __subscribe(){var push=0<arguments.length&&arguments[0]!==void 0?arguments[0]:!0;if(push){-1===directionSubscribers.indexOf(this)&&directionSubscribers.push(this)}else{-1<directionSubscribers.indexOf(this)&&directionSubscribers.splice(directionSubscribers.indexOf(this),1)}}}],[{key:"properties",get:function get(){return{/**
       * @protected
       */dir:{type:String,readOnly:!0}}}}]);return VaadinDirMixin}(superClass))};_exports.DirMixin=DirMixin;var vaadinDirMixin={DirMixin:DirMixin};_exports.$vaadinDirMixin=vaadinDirMixin;var DEV_MODE_CODE_REGEXP=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,FlowClients=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function isMinified(){function test(){/** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/return!0}return uncommentAndRun(test)}function isDevelopmentMode(){try{if(isForcedDevelopmentMode()){return!0}if(!isLocalhost()){return!1}if(FlowClients){return!isFlowProductionMode()}return!isMinified()}catch(e){// Some error in this code, assume production so no further actions will be taken
return!1}}function isForcedDevelopmentMode(){return localStorage.getItem("vaadin.developmentmode.force")}function isLocalhost(){return 0<=["localhost","127.0.0.1"].indexOf(window.location.hostname)}function isFlowProductionMode(){if(FlowClients){var productionModeApps=Object.keys(FlowClients).map(function(key){return FlowClients[key]}).filter(function(client){return client.productionMode});if(0<productionModeApps.length){return!0}}return!1}function uncommentAndRun(callback,args){if("function"!==typeof callback){return}var match=DEV_MODE_CODE_REGEXP.exec(callback.toString());if(match){try{// requires CSP: script-src 'unsafe-eval'
callback=new Function(match[1])}catch(e){// eat the exception
console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}}return callback(args)}// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window.Vaadin=window.Vaadin||{};/**
                                            * Inspects the source code of the given `callback` function for
                                            * specially-marked _commented_ code. If such commented code is found in the
                                            * callback source, uncomments and runs that code instead of the callback
                                            * itself. Otherwise runs the callback as is.
                                            *
                                            * The optional arguments are passed into the callback / uncommented code,
                                            * the result is returned.
                                            *
                                            * See the `isMinified()` function source code in this file for an example.
                                            *
                                            */var runIfDevelopmentMode=function runIfDevelopmentMode(callback,args){if(window.Vaadin.developmentMode){return uncommentAndRun(callback,args)}};_exports.runIfDevelopmentMode=runIfDevelopmentMode;if(window.Vaadin.developmentMode===void 0){window.Vaadin.developmentMode=isDevelopmentMode()}var vaadinDevelopmentModeDetector={runIfDevelopmentMode:runIfDevelopmentMode};_exports.$vaadinDevelopmentModeDetector=vaadinDevelopmentModeDetector;function maybeGatherAndSendStats(){/** vaadin-dev-mode:start
                                    (function () {
                                    'use strict';
                                    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                                    return typeof obj;
                                    } : function (obj) {
                                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                    };
                                    var classCallCheck = function (instance, Constructor) {
                                    if (!(instance instanceof Constructor)) {
                                      throw new TypeError("Cannot call a class as a function");
                                    }
                                    };
                                    var createClass = function () {
                                    function defineProperties(target, props) {
                                      for (var i = 0; i < props.length; i++) {
                                        var descriptor = props[i];
                                        descriptor.enumerable = descriptor.enumerable || false;
                                        descriptor.configurable = true;
                                        if ("value" in descriptor) descriptor.writable = true;
                                        Object.defineProperty(target, descriptor.key, descriptor);
                                      }
                                    }
                                     return function (Constructor, protoProps, staticProps) {
                                      if (protoProps) defineProperties(Constructor.prototype, protoProps);
                                      if (staticProps) defineProperties(Constructor, staticProps);
                                      return Constructor;
                                    };
                                    }();
                                    var getPolymerVersion = function getPolymerVersion() {
                                    return window.Polymer && window.Polymer.version;
                                    };
                                    var StatisticsGatherer = function () {
                                    function StatisticsGatherer(logger) {
                                      classCallCheck(this, StatisticsGatherer);
                                       this.now = new Date().getTime();
                                      this.logger = logger;
                                    }
                                     createClass(StatisticsGatherer, [{
                                      key: 'frameworkVersionDetectors',
                                      value: function frameworkVersionDetectors() {
                                        return {
                                          'Flow': function Flow() {
                                            if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
                                              var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
                                                return window.Vaadin.Flow.clients[key];
                                              }).filter(function (client) {
                                                return client.getVersionInfo;
                                              }).map(function (client) {
                                                return client.getVersionInfo().flow;
                                              });
                                              if (flowVersions.length > 0) {
                                                return flowVersions[0];
                                              }
                                            }
                                          },
                                          'Vaadin Framework': function VaadinFramework() {
                                            if (window.vaadin && window.vaadin.clients) {
                                              var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
                                                return client.getVersionInfo;
                                              }).map(function (client) {
                                                return client.getVersionInfo().vaadinVersion;
                                              });
                                              if (frameworkVersions.length > 0) {
                                                return frameworkVersions[0];
                                              }
                                            }
                                          },
                                          'AngularJs': function AngularJs() {
                                            if (window.angular && window.angular.version && window.angular.version) {
                                              return window.angular.version.full;
                                            }
                                          },
                                          'Angular': function Angular() {
                                            if (window.ng) {
                                              var tags = document.querySelectorAll("[ng-version]");
                                              if (tags.length > 0) {
                                                return tags[0].getAttribute("ng-version");
                                              }
                                              return "Unknown";
                                            }
                                          },
                                          'Backbone.js': function BackboneJs() {
                                            if (window.Backbone) {
                                              return window.Backbone.VERSION;
                                            }
                                          },
                                          'React': function React() {
                                            var reactSelector = '[data-reactroot], [data-reactid]';
                                            if (!!document.querySelector(reactSelector)) {
                                              // React does not publish the version by default
                                              return "unknown";
                                            }
                                          },
                                          'Ember': function Ember() {
                                            if (window.Em && window.Em.VERSION) {
                                              return window.Em.VERSION;
                                            } else if (window.Ember && window.Ember.VERSION) {
                                              return window.Ember.VERSION;
                                            }
                                          },
                                          'jQuery': function (_jQuery) {
                                            function jQuery() {
                                              return _jQuery.apply(this, arguments);
                                            }
                                             jQuery.toString = function () {
                                              return _jQuery.toString();
                                            };
                                             return jQuery;
                                          }(function () {
                                            if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
                                              return jQuery.prototype.jquery;
                                            }
                                          }),
                                          'Polymer': function Polymer() {
                                            var version = getPolymerVersion();
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'LitElement': function LitElement() {
                                            var version = window.litElementVersions && window.litElementVersions[0];
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'LitHtml': function LitHtml() {
                                            var version = window.litHtmlVersions && window.litHtmlVersions[0];
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'Vue.js': function VueJs() {
                                            if (window.Vue) {
                                              return window.Vue.version;
                                            }
                                          }
                                        };
                                      }
                                    }, {
                                      key: 'getUsedVaadinElements',
                                      value: function getUsedVaadinElements(elements) {
                                        var version = getPolymerVersion();
                                        var elementClasses = void 0;
                                        // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
                                        // Check all locations calling the method getEntries() in
                                        // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
                                        // Currently it is only used by BootstrapHandler.
                                        if (version && version.indexOf('2') === 0) {
                                          // Polymer 2: components classes are stored in window.Vaadin
                                          elementClasses = Object.keys(window.Vaadin).map(function (c) {
                                            return window.Vaadin[c];
                                          }).filter(function (c) {
                                            return c.is;
                                          });
                                        } else {
                                          // Polymer 3: components classes are stored in window.Vaadin.registrations
                                          elementClasses = window.Vaadin.registrations || [];
                                        }
                                        elementClasses.forEach(function (klass) {
                                          var version = klass.version ? klass.version : "0.0.0";
                                          elements[klass.is] = { version: version };
                                        });
                                      }
                                    }, {
                                      key: 'getUsedVaadinThemes',
                                      value: function getUsedVaadinThemes(themes) {
                                        ['Lumo', 'Material'].forEach(function (themeName) {
                                          var theme;
                                          var version = getPolymerVersion();
                                          if (version && version.indexOf('2') === 0) {
                                            // Polymer 2: themes are stored in window.Vaadin
                                            theme = window.Vaadin[themeName];
                                          } else {
                                            // Polymer 3: themes are stored in custom element registry
                                            theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
                                          }
                                          if (theme && theme.version) {
                                            themes[themeName] = { version: theme.version };
                                          }
                                        });
                                      }
                                    }, {
                                      key: 'getFrameworks',
                                      value: function getFrameworks(frameworks) {
                                        var detectors = this.frameworkVersionDetectors();
                                        Object.keys(detectors).forEach(function (framework) {
                                          var detector = detectors[framework];
                                          try {
                                            var version = detector();
                                            if (version) {
                                              frameworks[framework] = { version: version };
                                            }
                                          } catch (e) {}
                                        });
                                      }
                                    }, {
                                      key: 'gather',
                                      value: function gather(storage) {
                                        var storedStats = storage.read();
                                        var gatheredStats = {};
                                        var types = ["elements", "frameworks", "themes"];
                                         types.forEach(function (type) {
                                          gatheredStats[type] = {};
                                          if (!storedStats[type]) {
                                            storedStats[type] = {};
                                          }
                                        });
                                         var previousStats = JSON.stringify(storedStats);
                                         this.getUsedVaadinElements(gatheredStats.elements);
                                        this.getFrameworks(gatheredStats.frameworks);
                                        this.getUsedVaadinThemes(gatheredStats.themes);
                                         var now = this.now;
                                        types.forEach(function (type) {
                                          var keys = Object.keys(gatheredStats[type]);
                                          keys.forEach(function (key) {
                                            if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
                                              storedStats[type][key] = { firstUsed: now };
                                            }
                                            // Discards any previously logged version number
                                            storedStats[type][key].version = gatheredStats[type][key].version;
                                            storedStats[type][key].lastUsed = now;
                                          });
                                        });
                                         var newStats = JSON.stringify(storedStats);
                                        storage.write(newStats);
                                        if (newStats != previousStats && Object.keys(storedStats).length > 0) {
                                          this.logger.debug("New stats: " + newStats);
                                        }
                                      }
                                    }]);
                                    return StatisticsGatherer;
                                    }();
                                    var StatisticsStorage = function () {
                                    function StatisticsStorage(key) {
                                      classCallCheck(this, StatisticsStorage);
                                       this.key = key;
                                    }
                                     createClass(StatisticsStorage, [{
                                      key: 'read',
                                      value: function read() {
                                        var localStorageStatsString = localStorage.getItem(this.key);
                                        try {
                                          return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
                                        } catch (e) {
                                          return {};
                                        }
                                      }
                                    }, {
                                      key: 'write',
                                      value: function write(data) {
                                        localStorage.setItem(this.key, data);
                                      }
                                    }, {
                                      key: 'clear',
                                      value: function clear() {
                                        localStorage.removeItem(this.key);
                                      }
                                    }, {
                                      key: 'isEmpty',
                                      value: function isEmpty() {
                                        var storedStats = this.read();
                                        var empty = true;
                                        Object.keys(storedStats).forEach(function (key) {
                                          if (Object.keys(storedStats[key]).length > 0) {
                                            empty = false;
                                          }
                                        });
                                         return empty;
                                      }
                                    }]);
                                    return StatisticsStorage;
                                    }();
                                    var StatisticsSender = function () {
                                    function StatisticsSender(url, logger) {
                                      classCallCheck(this, StatisticsSender);
                                       this.url = url;
                                      this.logger = logger;
                                    }
                                     createClass(StatisticsSender, [{
                                      key: 'send',
                                      value: function send(data, errorHandler) {
                                        var logger = this.logger;
                                         if (navigator.onLine === false) {
                                          logger.debug("Offline, can't send");
                                          errorHandler();
                                          return;
                                        }
                                        logger.debug("Sending data to " + this.url);
                                         var req = new XMLHttpRequest();
                                        req.withCredentials = true;
                                        req.addEventListener("load", function () {
                                          // Stats sent, nothing more to do
                                          logger.debug("Response: " + req.responseText);
                                        });
                                        req.addEventListener("error", function () {
                                          logger.debug("Send failed");
                                          errorHandler();
                                        });
                                        req.addEventListener("abort", function () {
                                          logger.debug("Send aborted");
                                          errorHandler();
                                        });
                                        req.open("POST", this.url);
                                        req.setRequestHeader("Content-Type", "application/json");
                                        req.send(data);
                                      }
                                    }]);
                                    return StatisticsSender;
                                    }();
                                    var StatisticsLogger = function () {
                                    function StatisticsLogger(id) {
                                      classCallCheck(this, StatisticsLogger);
                                       this.id = id;
                                    }
                                     createClass(StatisticsLogger, [{
                                      key: '_isDebug',
                                      value: function _isDebug() {
                                        return localStorage.getItem("vaadin." + this.id + ".debug");
                                      }
                                    }, {
                                      key: 'debug',
                                      value: function debug(msg) {
                                        if (this._isDebug()) {
                                          console.info(this.id + ": " + msg);
                                        }
                                      }
                                    }]);
                                    return StatisticsLogger;
                                    }();
                                    var UsageStatistics = function () {
                                    function UsageStatistics() {
                                      classCallCheck(this, UsageStatistics);
                                       this.now = new Date();
                                      this.timeNow = this.now.getTime();
                                      this.gatherDelay = 10; // Delay between loading this file and gathering stats
                                      this.initialDelay = 24 * 60 * 60;
                                       this.logger = new StatisticsLogger("statistics");
                                      this.storage = new StatisticsStorage("vaadin.statistics.basket");
                                      this.gatherer = new StatisticsGatherer(this.logger);
                                      this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
                                    }
                                     createClass(UsageStatistics, [{
                                      key: 'maybeGatherAndSend',
                                      value: function maybeGatherAndSend() {
                                        var _this = this;
                                         if (localStorage.getItem(UsageStatistics.optOutKey)) {
                                          return;
                                        }
                                        this.gatherer.gather(this.storage);
                                        setTimeout(function () {
                                          _this.maybeSend();
                                        }, this.gatherDelay * 1000);
                                      }
                                    }, {
                                      key: 'lottery',
                                      value: function lottery() {
                                        return true;
                                      }
                                    }, {
                                      key: 'currentMonth',
                                      value: function currentMonth() {
                                        return this.now.getYear() * 12 + this.now.getMonth();
                                      }
                                    }, {
                                      key: 'maybeSend',
                                      value: function maybeSend() {
                                        var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
                                        var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
                                         if (!firstUse) {
                                          // Use a grace period to avoid interfering with tests, incognito mode etc
                                          firstUse = this.timeNow;
                                          localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
                                        }
                                         if (this.timeNow < firstUse + this.initialDelay * 1000) {
                                          this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
                                          return;
                                        }
                                        if (this.currentMonth() <= monthProcessed) {
                                          this.logger.debug("This month has already been processed");
                                          return;
                                        }
                                        localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
                                        // Use random sampling
                                        if (this.lottery()) {
                                          this.logger.debug("Congratulations, we have a winner!");
                                        } else {
                                          this.logger.debug("Sorry, no stats from you this time");
                                          return;
                                        }
                                         this.send();
                                      }
                                    }, {
                                      key: 'send',
                                      value: function send() {
                                        // Ensure we have the latest data
                                        this.gatherer.gather(this.storage);
                                         // Read, send and clean up
                                        var data = this.storage.read();
                                        data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
                                        data["usageStatisticsVersion"] = UsageStatistics.version;
                                        var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
                                        var self = this;
                                        this.sender.send(info + JSON.stringify(data), function () {
                                          // Revert the 'month processed' flag
                                          localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
                                        });
                                      }
                                    }], [{
                                      key: 'version',
                                      get: function get$1() {
                                        return '2.1.0';
                                      }
                                    }, {
                                      key: 'firstUseKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.firstuse';
                                      }
                                    }, {
                                      key: 'monthProcessedKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.monthProcessed';
                                      }
                                    }, {
                                      key: 'optOutKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.optout';
                                      }
                                    }]);
                                    return UsageStatistics;
                                    }();
                                    try {
                                    window.Vaadin = window.Vaadin || {};
                                    window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
                                    window.Vaadin.usageStatsChecker.maybeGatherAndSend();
                                    } catch (e) {
                                    // Intentionally ignored as this is not a problem in the app being developed
                                    }
                                    }());
                                     vaadin-dev-mode:end **/}var usageStatistics=function usageStatistics(){if("function"===typeof runIfDevelopmentMode){return runIfDevelopmentMode(maybeGatherAndSendStats)}};_exports.usageStatistics$1=_exports.usageStatistics=usageStatistics;var vaadinUsageStatisticsCollect={usageStatistics:usageStatistics};_exports.$vaadinUsageStatisticsCollect=vaadinUsageStatisticsCollect;var vaadinUsageStatistics={usageStatistics:usageStatistics};_exports.$vaadinUsageStatistics=vaadinUsageStatistics;if(!window.Vaadin){window.Vaadin={}}/**
   * Array of Vaadin custom element classes that have been finalized.
   */window.Vaadin.registrations=window.Vaadin.registrations||[];// Use the hack to prevent polymer-modulizer from converting to exports
window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){if(usageStatistics){usageStatistics()}};var statsJob,registered=new Set,ElementMixin=function ElementMixin(superClass){return(/*#__PURE__*/function(_DirMixin){babelHelpers.inherits(VaadinElementMixin,_DirMixin);babelHelpers.createClass(VaadinElementMixin,null,[{key:"finalize",/** @protected */value:function finalize(){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinElementMixin),"finalize",this).call(this);var is=this.is;// Registers a class prototype for telemetry purposes.
if(is&&!registered.has(is)){window.Vaadin.registrations.push(this);registered.add(is);if(window.Vaadin.developmentModeCallback){statsJob=_cureMe.Debouncer.debounce(statsJob,_cureMe.idlePeriod,function(){window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()});(0,_cureMe.enqueueDebouncer)(statsJob)}}}}]);function VaadinElementMixin(){var _this4;babelHelpers.classCallCheck(this,VaadinElementMixin);_this4=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinElementMixin).call(this));if(null===document.doctype){console.warn("Vaadin components require the \"standards mode\" declaration. Please add <!DOCTYPE html> to the HTML document.")}return _this4}return VaadinElementMixin}(DirMixin(superClass)))};_exports.ElementMixin=ElementMixin;var vaadinElementMixin={ElementMixin:ElementMixin};_exports.$vaadinElementMixin=vaadinElementMixin;var ButtonElement=/*#__PURE__*/function(_ElementMixin){babelHelpers.inherits(ButtonElement,_ElementMixin);function ButtonElement(){babelHelpers.classCallCheck(this,ButtonElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ButtonElement).apply(this,arguments))}babelHelpers.createClass(ButtonElement,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(ButtonElement.prototype),"ready",this).call(this);// Leaving default role in the native button, makes navigation announcement
// being different when using focus navigation (tab) versus using normal
// navigation (arrows). The first way announces the label on a button
// since the focus is moved programmatically, and the second on a group.
this.setAttribute("role","button");this.$.button.setAttribute("role","presentation");this._addActiveListeners();// Fix for https://github.com/vaadin/vaadin-button-flow/issues/120
window.ShadyDOM&&window.ShadyDOM.flush()}/**
     * @protected
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(ButtonElement.prototype),"disconnectedCallback",this).call(this);// `active` state is preserved when the element is disconnected between keydown and keyup events.
// reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.
if(this.hasAttribute("active")){this.removeAttribute("active")}}},{key:"_addActiveListeners",value:function _addActiveListeners(){var _this5=this;(0,_cureMe.addListener)(this,"down",function(){return!_this5.disabled&&_this5.setAttribute("active","")});(0,_cureMe.addListener)(this,"up",function(){return _this5.removeAttribute("active")});this.addEventListener("keydown",function(e){return!_this5.disabled&&0<=[13,32].indexOf(e.keyCode)&&_this5.setAttribute("active","")});this.addEventListener("keyup",function(){return _this5.removeAttribute("active")});this.addEventListener("blur",function(){return _this5.removeAttribute("active")})}/**
     * @protected
     */},{key:"focusElement",get:function get(){return this.$.button}}],[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject2_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-button"}},{key:"version",get:function get(){return"2.2.2"}}]);return ButtonElement}(ElementMixin(ControlStateMixin(ThemableMixin((0,_cureMe.GestureEventListeners)(_cureMe.PolymerElement)))));_exports.ButtonElement=ButtonElement;customElements.define(ButtonElement.is,ButtonElement);var vaadinButton={ButtonElement:ButtonElement};_exports.$vaadinButton=vaadinButton;var Lumo=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(Lumo,_HTMLElement);function Lumo(){babelHelpers.classCallCheck(this,Lumo);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Lumo).apply(this,arguments))}babelHelpers.createClass(Lumo,null,[{key:"version",get:function get(){return"1.6.0"}}]);return Lumo}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.Lumo=Lumo;customElements.define("vaadin-lumo-styles",Lumo);var version={Lumo:Lumo};_exports.$version=version;var $_documentContainer=document.createElement("template");$_documentContainer.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id=\"lumo-color\">\n  <template>\n    <style>\n      [theme~=\"dark\"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~=\"dark\"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-color-legacy\">\n  <template>\n    <style include=\"lumo-color\">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer.content);/* Only needed for IE11 when you want to use the dark palette inside the light palette */ /*
                                                                                                                                                    FIXME(polymer-modulizer): the above comments were extracted
                                                                                                                                                    from HTML and may be out of place here. Review them and
                                                                                                                                                    then delete this comment!
                                                                                                                                                  */;var $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>";document.head.appendChild($_documentContainer$1.content);var $_documentContainer$2=document.createElement("template");$_documentContainer$2.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>";document.head.appendChild($_documentContainer$2.content);var $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>";document.head.appendChild($_documentContainer$3.content);var $_documentContainer$4=document.createElement("template");$_documentContainer$4.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, \"Roboto\", \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id=\"lumo-typography\">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can\u2019t combine with the above selector because that doesn\u2019t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~=\"font-size-s\"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~=\"font-size-xs\"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir=\"rtl\"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$4.content);var $_documentContainer$5=(0,_cureMe.html)(_templateObject3_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$5.content);/**
                                                          @license
                                                          Copyright (c) 2018 Vaadin Ltd.
                                                          This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
                                                          */ /*
                                                              * Placeholder object class representing items being loaded.
                                                              *
                                                              * @private
                                                              */var ComboBoxPlaceholder=/*#__PURE__*/function(){function ComboBoxPlaceholder(){babelHelpers.classCallCheck(this,ComboBoxPlaceholder)}babelHelpers.createClass(ComboBoxPlaceholder,[{key:"toString",value:function toString(){return""}}]);return ComboBoxPlaceholder}();_exports.ComboBoxPlaceholder=ComboBoxPlaceholder;var vaadinComboBoxPlaceholder={ComboBoxPlaceholder:ComboBoxPlaceholder};_exports.$vaadinComboBoxPlaceholder=vaadinComboBoxPlaceholder;var ComboBoxDataProviderMixin=function ComboBoxDataProviderMixin(superClass){return(/*#__PURE__*/function(_superClass5){babelHelpers.inherits(DataProviderMixin,_superClass5);function DataProviderMixin(){babelHelpers.classCallCheck(this,DataProviderMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DataProviderMixin).apply(this,arguments))}babelHelpers.createClass(DataProviderMixin,[{key:"_dataProviderClearFilter",value:function _dataProviderClearFilter(dataProvider,opened,value){// Can't depend on filter in this obsever as we don't want
// to clear the filter whenever it's set
if(dataProvider&&this.filter){this.size=void 0;this._pendingRequests={};this.filter="";this.clearCache()}}},{key:"ready",value:function ready(){var _this6=this;babelHelpers.get(babelHelpers.getPrototypeOf(DataProviderMixin.prototype),"ready",this).call(this);this.clearCache();this.$.overlay.addEventListener("index-requested",function(e){var index=e.detail.index;if(index!==void 0){var page=_this6._getPageForIndex(index);if(_this6._shouldLoadPage(page)){_this6._loadPage(page)}}})}},{key:"_dataProviderFilterChanged",value:function _dataProviderFilterChanged(){if(this.dataProvider&&this.opened){this.size=void 0;this._pendingRequests={};this.clearCache()}}},{key:"_ensureFirstPage",value:function _ensureFirstPage(opened){if(opened&&this._shouldLoadPage(0)){this._loadPage(0)}}},{key:"_shouldLoadPage",value:function _shouldLoadPage(page){if(!this.filteredItems||this._forceNextRequest){this._forceNextRequest=!1;return!0}var loadedItem=this.filteredItems[page*this.pageSize];if(loadedItem!==void 0){return babelHelpers.instanceof(loadedItem,ComboBoxPlaceholder)}else{return this.size===void 0}}},{key:"_loadPage",value:function _loadPage(page){var _this7=this;// make sure same page isn't requested multiple times.
if(!this._pendingRequests[page]&&this.dataProvider){this.loading=!0;var params={page:page,pageSize:this.pageSize,filter:this.filter},callback=function callback(items,size){if(_this7._pendingRequests[page]===callback){if(!_this7.filteredItems){var filteredItems=[];filteredItems.splice.apply(filteredItems,[params.page*params.pageSize,items.length].concat(babelHelpers.toConsumableArray(items)));_this7.filteredItems=filteredItems}else{_this7.splice.apply(_this7,["filteredItems",params.page*params.pageSize,items.length].concat(babelHelpers.toConsumableArray(items)))}// Update selectedItem from filteredItems if value is set
if(_this7._isValidValue(_this7.value)&&_this7._getItemValue(_this7.selectedItem)!==_this7.value){_this7._selectItemForValue(_this7.value)}_this7.size=size;delete _this7._pendingRequests[page];if(0===Object.keys(_this7._pendingRequests).length){_this7.loading=!1}if(0===page&&_this7.__repositionOverlayDebouncer&&items.length>(_this7.__maxRenderedItems||0)){setTimeout(function(){return _this7.__repositionOverlayDebouncer.flush()});_this7.__maxRenderedItems=items.length}}};this._pendingRequests[page]=callback;this.dataProvider(params,callback)}}},{key:"_getPageForIndex",value:function _getPageForIndex(index){return Math.floor(index/this.pageSize)}/**
     * Clears the cached pages and reloads data from dataprovider when needed.
     */},{key:"clearCache",value:function clearCache(){if(!this.dataProvider){return}this._pendingRequests={};for(var filteredItems=[],i=0;i<(this.size||0);i++){filteredItems.push(this.__placeHolder)}this.filteredItems=filteredItems;if(this.opened){this._loadPage(0)}else{this._forceNextRequest=!0}}},{key:"_sizeChanged",value:function _sizeChanged(){for(var size=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,filteredItems=(this.filteredItems||[]).slice(0,size),i=0;i<size;i++){filteredItems[i]=filteredItems[i]!==void 0?filteredItems[i]:this.__placeHolder}this.filteredItems=filteredItems}},{key:"_pageSizeChanged",value:function _pageSizeChanged(pageSize,oldPageSize){if(Math.floor(pageSize)!==pageSize||1>pageSize){this.pageSize=oldPageSize;throw new Error("`pageSize` value must be an integer > 0")}this.clearCache()}},{key:"_dataProviderChanged",value:function _dataProviderChanged(dataProvider,oldDataProvider){var _this8=this;this._ensureItemsOrDataProvider(function(){_this8.dataProvider=oldDataProvider})}},{key:"_ensureItemsOrDataProvider",value:function _ensureItemsOrDataProvider(restoreOldValueCallback){if(this.items!==void 0&&this.dataProvider!==void 0){restoreOldValueCallback();throw new Error("Using `items` and `dataProvider` together is not supported")}else if(this.dataProvider&&!this.filteredItems){this.filteredItems=[]}}},{key:"_warnDataProviderValue",value:function _warnDataProviderValue(dataProvider,value){if(dataProvider&&""!==value&&(this.selectedItem===void 0||null===this.selectedItem)){var valueIndex=this._indexOfValue(value,this.filteredItems);if(0>valueIndex||!this._getItemLabel(this.filteredItems[valueIndex])){/* eslint-disable no-console */console.warn("Warning: unable to determine the label for the provided `value`. "+"Nothing to display in the text field. This usually happens when "+"setting an initial `value` before any items are returned from "+"the `dataProvider` callback. Consider setting `selectedItem` "+"instead of `value`");/* eslint-enable no-console */}}}}],[{key:"properties",get:function get(){return{/**
       * Number of items fetched at a time from the dataprovider.
       */pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},/**
       * Total number of items.
       */size:{type:Number,observer:"_sizeChanged"},/**
       * Function that provides items lazily. Receives arguments `params`, `callback`
       *
       * `params.page` Requested page index
       *
       * `params.pageSize` Current page size
       *
       * `params.filter` Currently applied filter
       *
       * `callback(items, size)` Callback function with arguments:
       *   - `items` Current page of items
       *   - `size` Total number of items.
       */dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:function value(){return{}}},__placeHolder:{value:new ComboBoxPlaceholder}}}},{key:"observers",get:function get(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}}]);return DataProviderMixin}(superClass))};_exports.ComboBoxDataProviderMixin=ComboBoxDataProviderMixin;var vaadinComboBoxDataProviderMixin={ComboBoxDataProviderMixin:ComboBoxDataProviderMixin};_exports.$vaadinComboBoxDataProviderMixin=vaadinComboBoxDataProviderMixin;var ComboBoxItemElement=/*#__PURE__*/function(_ThemableMixin){babelHelpers.inherits(ComboBoxItemElement,_ThemableMixin);function ComboBoxItemElement(){babelHelpers.classCallCheck(this,ComboBoxItemElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ComboBoxItemElement).apply(this,arguments))}babelHelpers.createClass(ComboBoxItemElement,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(ComboBoxItemElement.prototype),"connectedCallback",this).call(this);if(!this._itemTemplateInstance){// 2.0 has __dataHost. Might want to consider assigning combobox reference directly to item.
var overlay=this.getRootNode().host.getRootNode().host,dropdown=overlay.__dataHost,comboBoxOverlay=dropdown.getRootNode().host;this._comboBox=comboBoxOverlay.getRootNode().host;this._comboBox._ensureTemplatized();if(this._comboBox._TemplateClass){this._itemTemplateInstance=new this._comboBox._TemplateClass({});this.$.content.textContent="";this.$.content.appendChild(this._itemTemplateInstance.root)}}}},{key:"_render",value:function _render(){if(!this.renderer){return}var model={index:this.index,item:this.item};this.renderer(this.$.content,this._comboBox,model)}},{key:"_rendererOrItemChanged",value:function _rendererOrItemChanged(renderer,index,item){if(item===void 0||index===void 0){return}if(this._oldRenderer!==renderer){this.$.content.innerHTML=""}if(renderer){this._oldRenderer=renderer;this._render()}}},{key:"_updateLabel",value:function _updateLabel(label,_itemTemplateInstance){if(_itemTemplateInstance===void 0&&this.$.content&&!this.renderer){// Only set label to textContent no template
this.$.content.textContent=label}}},{key:"_updateTemplateInstanceVariable",value:function _updateTemplateInstanceVariable(variable,value,_itemTemplateInstance){if(variable===void 0||value===void 0||_itemTemplateInstance===void 0){return}_itemTemplateInstance[variable]=value}}],[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject4_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-combo-box-item"}},{key:"properties",get:function get(){return{/**
       * The index of the item
       */index:Number,/**
       * The item to render
       * @type {(String|Object)}
       */item:Object,/**
       * The text label corresponding to the item
       */label:String,/**
       * True when item is selected
       */selected:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * True when item is focused
       */focused:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * The template instance corresponding to the item
       */_itemTemplateInstance:Object,/**
       * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
       */renderer:Function,/**
       * Saved instance of a custom renderer function.
       */_oldRenderer:Function}}},{key:"observers",get:function get(){return["_rendererOrItemChanged(renderer, index, item.*)","_updateLabel(label, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"index\", index, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"item\", item, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"selected\", selected, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"focused\", focused, _itemTemplateInstance)"]}}]);return ComboBoxItemElement}(ThemableMixin(_cureMe.PolymerElement));customElements.define(ComboBoxItemElement.is,ComboBoxItemElement);var p=Element.prototype,matches=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,FocusablesHelper={/**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the children,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */getTabbableNodes:function getTabbableNodes(node){var result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);// If there is at least one element with tabindex > 0, we need to sort
// the final array by tabindex.
if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result},/**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */isFocusable:function isFocusable(element){// From http://stackoverflow.com/a/1600194/4228703:
// There isn't a definite list, it's up to the browser. The only
// standard we have is DOM Level 2 HTML
// https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
// only elements that have a focus() method are HTMLInputElement,
// HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
// notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
// tests with tabbables in different browsers
// http://allyjs.io/data-tables/focusable.html
// Elements that cannot be focused if they have [disabled] attribute.
if(matches.call(element,"input, select, textarea, button, object")){return matches.call(element,":not([disabled])")}// Elements that can be focused even if they have [disabled] attribute.
return matches.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")},/**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */isTabbable:function isTabbable(element){return this.isFocusable(element)&&matches.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)},/**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */_normalizedTabIndex:function _normalizedTabIndex(element){if(this.isFocusable(element)){var tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1},/**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result` if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */_collectTabbableNodes:function _collectTabbableNodes(node,result){// If not an element or not visible, no need to explore children.
if(node.nodeType!==Node.ELEMENT_NODE||!this._isVisible(node)){return!1}var element=/** @type {!HTMLElement} */node,tabIndex=this._normalizedTabIndex(element),needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}// In ShadowDOM v1, tab order is affected by the order of distribution.
// E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
// in ShadowDOM v0 tab order is not affected by the distribution order,
// in fact getTabbableNodes(#root) returns [#B, #A].
//  <div id="root">
//   <!-- shadow -->
//     <slot name="a">
//     <slot name="b">
//   <!-- /shadow -->
//   <input id="A" slot="a">
//   <input id="B" slot="b" tabindex="1">
//  </div>
var children;if("slot"===element.localName){children=element.assignedNodes({flatten:!0})}else{// Use shadow root if possible, will check for distributed nodes.
children=(element.shadowRoot||element).children}if(children){for(var i=0;i<children.length;i++){// Ensure method is always invoked to collect tabbable children.
needsSort=this._collectTabbableNodes(children[i],result)||needsSort}}return needsSort},/**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */_isVisible:function _isVisible(element){// Check inline style first to save a re-flow. If looks good, check also
// computed style.
var style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1},/**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */_sortByTabIndex:function _sortByTabIndex(tabbables){// Implement a merge sort as Array.prototype.sort does a non-stable sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
var len=tabbables.length;if(2>len){return tabbables}var pivot=Math.ceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)},/**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */_mergeSortByTabIndex:function _mergeSortByTabIndex(left,right){var result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)},/**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */_hasLowerTabOrder:function _hasLowerTabOrder(a,b){// Normalize tabIndexes
// e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
var ati=Math.max(a.tabIndex,0),bti=Math.max(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}};_exports.FocusablesHelper=FocusablesHelper;var vaadinFocusablesHelper={FocusablesHelper:FocusablesHelper};_exports.$vaadinFocusablesHelper=vaadinFocusablesHelper;var overlayContentCounter=0,overlayContentCache={},createOverlayContent=function createOverlayContent(cssText){var is=overlayContentCache[cssText]||processOverlayStyles(cssText);return document.createElement(is)},processOverlayStyles=function processOverlayStyles(cssText){overlayContentCounter++;var is="vaadin-overlay-content-".concat(overlayContentCounter),styledTemplate=document.createElement("template"),style=document.createElement("style");style.textContent=":host { display: block; }"+cssText;styledTemplate.content.appendChild(style);if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(styledTemplate,is)}// NOTE(platosha): Have to use an awkward IIFE returning class here
// to prevent this class from showing up in analysis.json & API docs.
/** @private */var klass=function(){return(/*#__PURE__*/function(_HTMLElement2){babelHelpers.inherits(_class,_HTMLElement2);babelHelpers.createClass(_class,null,[{key:"is",get:function get(){return is}}]);function _class(){var _this9;babelHelpers.classCallCheck(this,_class);_this9=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(_class).call(this));if(!_this9.shadowRoot){_this9.attachShadow({mode:"open"});_this9.shadowRoot.appendChild(document.importNode(styledTemplate.content,!0))}return _this9}babelHelpers.createClass(_class,[{key:"connectedCallback",value:function connectedCallback(){if(window.ShadyCSS){window.ShadyCSS.styleElement(this)}}}]);return _class}(babelHelpers.wrapNativeSuper(HTMLElement)))}();customElements.define(klass.is,klass);overlayContentCache[cssText]=is;return is},OverlayElement=/*#__PURE__*/function(_ThemableMixin2){babelHelpers.inherits(OverlayElement,_ThemableMixin2);babelHelpers.createClass(OverlayElement,null,[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject5_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-overlay"}},{key:"properties",get:function get(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},/**
       * Owner element passed with renderer function
       */owner:Element,/**
       * Custom function for rendering the content of the overlay.
       * Receives three arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `owner` The host element of the renderer function.
       * - `model` The object with the properties related with rendering.
       */renderer:Function,/**
       * The template of the overlay content.
       */template:{type:Object,notify:!0},/**
       * Optional argument for `Polymer.Templatize.templatize`.
       */instanceProps:{type:Object},/**
       * References the content container after the template is stamped.
       */content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Object with properties that is passed to `renderer` function
       */model:Object,/**
       * When true the overlay won't disable the main content, showing
       * it doesn’t change the functionality of the user interface.
       */modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},/**
       * When set to true, the overlay is hidden. This also closes the overlay
       * immediately in case there is a closing animation in progress.
       */hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},/**
       * When true move focus to the first focusable element in the overlay,
       * or to the overlay if there are no focusable elements.
       */focusTrap:{type:Boolean,value:!1},/**
       * Set to true to enable restoring of focus when overlay is closed.
       */restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}},{key:"observers",get:function get(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}}]);function OverlayElement(){var _this10;babelHelpers.classCallCheck(this,OverlayElement);_this10=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(OverlayElement).call(this));_this10._boundMouseDownListener=_this10._mouseDownListener.bind(babelHelpers.assertThisInitialized(_this10));_this10._boundMouseUpListener=_this10._mouseUpListener.bind(babelHelpers.assertThisInitialized(_this10));_this10._boundOutsideClickListener=_this10._outsideClickListener.bind(babelHelpers.assertThisInitialized(_this10));_this10._boundKeydownListener=_this10._keydownListener.bind(babelHelpers.assertThisInitialized(_this10));_this10._observer=new _cureMe.FlattenedNodesObserver(babelHelpers.assertThisInitialized(_this10),function(info){_this10._setTemplateFromNodes(info.addedNodes)});// Listener for preventing closing of the paper-dialog and all components extending `iron-overlay-behavior`.
_this10._boundIronOverlayCanceledListener=_this10._ironOverlayCanceled.bind(babelHelpers.assertThisInitialized(_this10));if(/iPad|iPhone|iPod/.test(navigator.userAgent)){_this10._boundIosResizeListener=function(){return _this10._detectIosNavbar()}}return _this10}babelHelpers.createClass(OverlayElement,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(OverlayElement.prototype),"ready",this).call(this);this._observer.flush();// Need to add dummy click listeners to this and the backdrop or else
// the document click event listener (_outsideClickListener) may never
// get invoked on iOS Safari (reproducible in <vaadin-dialog>
// and <vaadin-context-menu>).
this.addEventListener("click",function(){});this.$.backdrop.addEventListener("click",function(){})}},{key:"_detectIosNavbar",value:function _detectIosNavbar(){if(!this.opened){return}var innerHeight=window.innerHeight,innerWidth=window.innerWidth,landscape=innerWidth>innerHeight,clientHeight=document.documentElement.clientHeight;if(landscape&&clientHeight>innerHeight){this.style.setProperty("--vaadin-overlay-viewport-bottom",clientHeight-innerHeight+"px")}else{this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}}},{key:"_setTemplateFromNodes",value:function _setTemplateFromNodes(nodes){this.template=nodes.filter(function(node){return node.localName&&"template"===node.localName})[0]||this.template}/**
     * @event vaadin-overlay-close
     * fired before the `vaadin-overlay` will be closed. If canceled the closing of the overlay is canceled as well.
     */},{key:"close",value:function close(sourceEvent){var evt=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:sourceEvent}});this.dispatchEvent(evt);if(!evt.defaultPrevented){this.opened=!1}}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(OverlayElement.prototype),"connectedCallback",this).call(this);if(this._boundIosResizeListener){this._detectIosNavbar();window.addEventListener("resize",this._boundIosResizeListener)}}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(OverlayElement.prototype),"disconnectedCallback",this).call(this);this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}},{key:"_ironOverlayCanceled",value:function _ironOverlayCanceled(event){event.preventDefault()}},{key:"_mouseDownListener",value:function _mouseDownListener(event){this._mouseDownInside=0<=event.composedPath().indexOf(this.$.overlay)}},{key:"_mouseUpListener",value:function _mouseUpListener(event){this._mouseUpInside=0<=event.composedPath().indexOf(this.$.overlay)}/**
     * We need to listen on 'click' / 'tap' event and capture it and close the overlay before
     * propagating the event to the listener in the button. Otherwise, if the clicked button would call
     * open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
     *
     * @event vaadin-overlay-outside-click
     * fired before the `vaadin-overlay` will be closed on outside click. If canceled the closing of the overlay is canceled as well.
     */},{key:"_outsideClickListener",value:function _outsideClickListener(event){if(-1!==event.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1;this._mouseUpInside=!1;return}if(!this._last){return}var evt=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event)}}/**
     * @event vaadin-overlay-escape-press
     * fired before the `vaadin-overlay` will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
     */},{key:"_keydownListener",value:function _keydownListener(event){if(!this._last){return}// TAB
if("Tab"===event.key&&this.focusTrap&&!event.defaultPrevented){// if only tab key is pressed, cycle forward, else cycle backwards.
this._cycleTab(event.shiftKey?-1:1);event.preventDefault();// ESC
}else if("Escape"===event.key||"Esc"===event.key){var evt=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event)}}}},{key:"_ensureTemplatized",value:function _ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}/**
     * @event vaadin-overlay-open
     * fired after the `vaadin-overlay` is opened.
     */},{key:"_openedChanged",value:function _openedChanged(opened,wasOpened){var _this11=this;if(!this._instance){this._ensureTemplatized()}if(opened){// Store focused node.
this.__restoreFocusNode=this._getActiveElement();this._animatedOpening();(0,_cureMe.afterNextRender)(this,function(){if(_this11.focusTrap&&!_this11.contains(document._activeElement||document.activeElement)){_this11._cycleTab(0,0)}var evt=new CustomEvent("vaadin-overlay-open",{bubbles:!0});_this11.dispatchEvent(evt)});if(!this.modeless){this._addGlobalListeners()}}else if(wasOpened){this._animatedClosing();if(!this.modeless){this._removeGlobalListeners()}}}},{key:"_hiddenChanged",value:function _hiddenChanged(hidden){if(hidden&&this.hasAttribute("closing")){this._flushAnimation("closing")}}},{key:"_shouldAnimate",value:function _shouldAnimate(){var name=getComputedStyle(this).getPropertyValue("animation-name"),hidden="none"===getComputedStyle(this).getPropertyValue("display");return!hidden&&name&&"none"!=name}},{key:"_enqueueAnimation",value:function _enqueueAnimation(type,callback){var _this12=this,handler="__".concat(type,"Handler"),listener=function listener(){callback();_this12.removeEventListener("animationend",listener);delete _this12[handler]};this[handler]=listener;this.addEventListener("animationend",listener)}},{key:"_flushAnimation",value:function _flushAnimation(type){var handler="__".concat(type,"Handler");if("function"===typeof this[handler]){this[handler]()}}},{key:"_animatedOpening",value:function _animatedOpening(){var _this13=this;if(this.parentNode===document.body&&this.hasAttribute("closing")){this._flushAnimation("closing")}this._attachOverlay();this.setAttribute("opening","");var finishOpening=function finishOpening(){_this13.removeAttribute("opening");document.addEventListener("iron-overlay-canceled",_this13._boundIronOverlayCanceledListener);if(!_this13.modeless){_this13._enterModalState()}};if(this._shouldAnimate()){this._enqueueAnimation("opening",finishOpening)}else{finishOpening()}}},{key:"_attachOverlay",value:function _attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder");this.parentNode.insertBefore(this._placeholder,this);document.body.appendChild(this);this.bringToFront()}},{key:"_animatedClosing",value:function _animatedClosing(){var _this14=this;if(this.hasAttribute("opening")){this._flushAnimation("opening")}if(this._placeholder){this.setAttribute("closing","");var finishClosing=function finishClosing(){_this14.shadowRoot.querySelector("[part=\"overlay\"]").style.removeProperty("pointer-events");_this14._exitModalState();document.removeEventListener("iron-overlay-canceled",_this14._boundIronOverlayCanceledListener);_this14._detachOverlay();_this14.removeAttribute("closing");if(_this14.restoreFocusOnClose&&_this14.__restoreFocusNode){// If the activeElement is `<body>` or inside the overlay,
// we are allowed to restore the focus. In all the other
// cases focus might have been moved elsewhere by another
// component or by the user interaction (e.g. click on a
// button outside the overlay).
var activeElement=_this14._getActiveElement();if(activeElement===document.body||_this14._deepContains(activeElement)){_this14.__restoreFocusNode.focus()}_this14.__restoreFocusNode=null}};if(this._shouldAnimate()){this._enqueueAnimation("closing",finishClosing)}else{finishClosing()}}}},{key:"_detachOverlay",value:function _detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder);this._placeholder.parentNode.removeChild(this._placeholder)}/**
     * Returns all attached overlays in visual stacking order.
     */},{key:"_modelessChanged",value:function _modelessChanged(modeless){if(!modeless){if(this.opened){this._addGlobalListeners();this._enterModalState()}}else{this._removeGlobalListeners();this._exitModalState()}}},{key:"_addGlobalListeners",value:function _addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener);document.addEventListener("mouseup",this._boundMouseUpListener);// Firefox leaks click to document on contextmenu even if prevented
// https://bugzilla.mozilla.org/show_bug.cgi?id=990614
document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0);document.addEventListener("keydown",this._boundKeydownListener)}},{key:"_enterModalState",value:function _enterModalState(){var _this15=this;if("none"!==document.body.style.pointerEvents){// Set body pointer-events to 'none' to disable mouse interactions with
// other document nodes.
this._previousDocumentPointerEvents=document.body.style.pointerEvents;document.body.style.pointerEvents="none"}// Disable pointer events in other attached overlays
OverlayElement.__attachedInstances.forEach(function(el){if(el!==_this15&&!el.hasAttribute("opening")&&!el.hasAttribute("closing")){el.shadowRoot.querySelector("[part=\"overlay\"]").style.pointerEvents="none"}})}},{key:"_removeGlobalListeners",value:function _removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener);document.removeEventListener("mouseup",this._boundMouseUpListener);document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0);document.removeEventListener("keydown",this._boundKeydownListener)}},{key:"_exitModalState",value:function _exitModalState(){if(this._previousDocumentPointerEvents!==void 0){// Restore body pointer-events
document.body.style.pointerEvents=this._previousDocumentPointerEvents;delete this._previousDocumentPointerEvents}// Restore pointer events in the previous overlay(s)
var instances=OverlayElement.__attachedInstances,el;// Use instances.pop() to ensure the reverse order
while(el=instances.pop()){if(el===this){// Skip the current instance
continue}el.shadowRoot.querySelector("[part=\"overlay\"]").style.removeProperty("pointer-events");if(!el.modeless){// Stop after the last modal
break}}}},{key:"_removeOldContent",value:function _removeOldContent(){var _this16=this;if(!this.content||!this._contentNodes){return}this._observer.disconnect();this._contentNodes.forEach(function(node){if(node.parentNode===_this16.content){_this16.content.removeChild(node)}});if(this._originalContentPart){// Restore the original <div part="content">
this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content);this.$.content=this._originalContentPart;this._originalContentPart=void 0}this._observer.connect();this._contentNodes=void 0;this.content=void 0}},{key:"_stampOverlayTemplate",value:function _stampOverlayTemplate(template,instanceProps){this._removeOldContent();if(!template._Templatizer){template._Templatizer=(0,_cureMe.templatize)(template,this,{instanceProps:instanceProps,forwardHostProp:function forwardHostProp(prop,value){if(this._instance){this._instance.forwardHostProp(prop,value)}}})}this._instance=new template._Templatizer({});this._contentNodes=Array.from(this._instance.root.childNodes);var templateRoot=template._templateRoot||(template._templateRoot=template.getRootNode()),_isScoped=templateRoot!==document;if(_isScoped){var isShady=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;if(!this.$.content.shadowRoot){this.$.content.attachShadow({mode:"open"})}var scopeCssText=Array.from(templateRoot.querySelectorAll("style")).reduce(function(result,style){return result+style.textContent},"");if(isShady){// NOTE(platosha): ShadyCSS removes <style>’s from templates, so
// we have to use these protected APIs to get their contents back
var styleInfo=window.ShadyCSS.ScopingShim._styleInfoForNode(templateRoot.host);if(styleInfo){scopeCssText+=styleInfo._getStyleRules().parsedCssText;scopeCssText+="}"}}// The overlay root’s :host styles should not apply inside the overlay
scopeCssText=scopeCssText.replace(/:host/g,":host-nomatch");if(scopeCssText){if(isShady){// ShadyDOM: replace the <div part="content"> with a generated
// styled custom element
var contentPart=createOverlayContent(scopeCssText);contentPart.id="content";contentPart.setAttribute("part","content");this.$.content.parentNode.replaceChild(contentPart,this.$.content);// NOTE(platosha): carry the style scope of the content part
contentPart.className=this.$.content.className;this._originalContentPart=this.$.content;this.$.content=contentPart}else{// Shadow DOM: append a style to the content shadowRoot
var style=document.createElement("style");style.textContent=scopeCssText;this.$.content.shadowRoot.appendChild(style);this._contentNodes.unshift(style)}}this.$.content.shadowRoot.appendChild(this._instance.root);this.content=this.$.content.shadowRoot}else{this.appendChild(this._instance.root);this.content=this}}},{key:"_removeNewRendererOrTemplate",value:function _removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this.template=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}/**
     * Manually invoke existing renderer.
     */},{key:"render",value:function render(){if(this.renderer){this.renderer.call(this.owner,this.content,this.owner,this.model)}}},{key:"_templateOrRendererChanged",value:function _templateOrRendererChanged(template,renderer,owner,model,instanceProps,opened){if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for overlay content")}var ownerOrModelChanged=this._oldOwner!==owner||this._oldModel!==model;this._oldModel=model;this._oldOwner=owner;var templateOrInstancePropsChanged=this._oldInstanceProps!==instanceProps||this._oldTemplate!==template;this._oldInstanceProps=instanceProps;this._oldTemplate=template;var rendererChanged=this._oldRenderer!==renderer;this._oldRenderer=renderer;var openedChanged=this._oldOpened!==opened;this._oldOpened=opened;if(template&&templateOrInstancePropsChanged){this._stampOverlayTemplate(template,instanceProps)}else if(renderer&&(rendererChanged||openedChanged||ownerOrModelChanged)){this.content=this;if(rendererChanged){while(this.content.firstChild){this.content.removeChild(this.content.firstChild)}}if(opened){this.render()}}}},{key:"_isFocused",value:function _isFocused(element){return element&&element.getRootNode().activeElement===element}},{key:"_focusedIndex",value:function _focusedIndex(elements){elements=elements||this._getFocusableElements();return elements.indexOf(elements.filter(this._isFocused).pop())}},{key:"_cycleTab",value:function _cycleTab(increment,index){var focusableElements=this._getFocusableElements();if(index===void 0){index=this._focusedIndex(focusableElements)}index+=increment;// rollover to first item
if(index>=focusableElements.length){index=0;// go to last item
}else if(0>index){index=focusableElements.length-1}focusableElements[index].focus()}},{key:"_getFocusableElements",value:function _getFocusableElements(){// collect all focusable elements
return FocusablesHelper.getTabbableNodes(this.$.overlay)}},{key:"_getActiveElement",value:function _getActiveElement(){var active=document._activeElement||document.activeElement;// document.activeElement can be null
// https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
// In IE 11, it can also be an object when operating in iframes
// or document.documentElement (when overlay closed on outside click).
// In these cases, default it to document.body.
if(!active||active===document.documentElement||!1===babelHelpers.instanceof(active,Element)){active=document.body}while(active.shadowRoot&&active.shadowRoot.activeElement){active=active.shadowRoot.activeElement}return active}},{key:"_deepContains",value:function _deepContains(node){if(this.contains(node)){return!0}var n=node,doc=node.ownerDocument;// walk from node to `this` or `document`
while(n&&n!==doc&&n!==this){n=n.parentNode||n.host}return n===this}/**
     * Brings the overlay as visually the frontmost one
     */},{key:"bringToFront",value:function bringToFront(){var _this17=this,zIndex="",frontmost=OverlayElement.__attachedInstances.filter(function(o){return o!==_this17}).pop();if(frontmost){var frontmostZIndex=frontmost.__zIndex;zIndex=frontmostZIndex+1}this.style.zIndex=zIndex;this.__zIndex=zIndex||parseFloat(getComputedStyle(this).zIndex)}},{key:"_last",/**
     * returns true if this is the last one in the opened overlays stack
     */get:function get(){return this===OverlayElement.__attachedInstances.pop()}}],[{key:"__attachedInstances",get:function get(){return Array.from(document.body.children).filter(function(el){return babelHelpers.instanceof(el,OverlayElement)}).sort(function(a,b){return a.__zIndex-b.__zIndex||0})}}]);return OverlayElement}(ThemableMixin(DirMixin(_cureMe.PolymerElement)));_exports.OverlayElement=OverlayElement;customElements.define(OverlayElement.is,OverlayElement);var vaadinOverlay={OverlayElement:OverlayElement};_exports.$vaadinOverlay=vaadinOverlay;var ComboBoxOverlayElement=/*#__PURE__*/function(_OverlayElement){babelHelpers.inherits(ComboBoxOverlayElement,_OverlayElement);function ComboBoxOverlayElement(){babelHelpers.classCallCheck(this,ComboBoxOverlayElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ComboBoxOverlayElement).apply(this,arguments))}babelHelpers.createClass(ComboBoxOverlayElement,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(ComboBoxOverlayElement.prototype),"ready",this).call(this);var loader=document.createElement("div");loader.setAttribute("part","loader");var content=this.shadowRoot.querySelector("[part~=\"content\"]");content.parentNode.insertBefore(loader,content)}}],[{key:"is",get:function get(){return"vaadin-combo-box-overlay"}}]);return ComboBoxOverlayElement}(OverlayElement);customElements.define(ComboBoxOverlayElement.is,ComboBoxOverlayElement);/**
                                                                           * Element for internal use only.
                                                                           *
                                                                           * @memberof Vaadin
                                                                           * @private
                                                                           */var ComboBoxDropdownElement=/*#__PURE__*/function(_DisableUpgradeMixin){babelHelpers.inherits(ComboBoxDropdownElement,_DisableUpgradeMixin);babelHelpers.createClass(ComboBoxDropdownElement,null,[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject6_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-combo-box-dropdown"}},{key:"properties",get:function get(){return{opened:{type:Boolean,observer:"_openedChanged"},template:{type:Object,notify:!0},/**
       * The element to position/align the dropdown by.
       */positionTarget:{type:Object},/**
       * If `true`, overlay is aligned above the `positionTarget`
       */alignedAbove:{type:Boolean,value:!1},/**
       * Used to propagate the `theme` attribute from the host element.
       */theme:String}}}]);function ComboBoxDropdownElement(){var _this18;babelHelpers.classCallCheck(this,ComboBoxDropdownElement);_this18=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ComboBoxDropdownElement).call(this));_this18._boundSetPosition=_this18._setPosition.bind(babelHelpers.assertThisInitialized(_this18));_this18._boundOutsideClickListener=_this18._outsideClickListener.bind(babelHelpers.assertThisInitialized(_this18));return _this18}babelHelpers.createClass(ComboBoxDropdownElement,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(ComboBoxDropdownElement.prototype),"connectedCallback",this).call(this);this.addEventListener("iron-resize",this._boundSetPosition)}},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(ComboBoxDropdownElement.prototype),"ready",this).call(this);// Preventing the default modal behaviour of the overlay on input clicking
this.$.overlay.addEventListener("vaadin-overlay-outside-click",function(e){e.preventDefault()})}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(ComboBoxDropdownElement.prototype),"disconnectedCallback",this).call(this);this.removeEventListener("iron-resize",this._boundSetPosition);// Making sure the overlay is closed and removed from DOM after detaching the dropdown.
this.opened=!1}},{key:"notifyResize",value:function notifyResize(){babelHelpers.get(babelHelpers.getPrototypeOf(ComboBoxDropdownElement.prototype),"notifyResize",this).call(this);if(this.positionTarget&&this.opened){this._setPosition();// Schedule another position update (to cover virtual keyboard opening for example)
requestAnimationFrame(this._setPosition.bind(this))}}/**
     * Fired after the `vaadin-combo-box-dropdown` opens.
     *
     * @event vaadin-combo-box-dropdown-opened
     */ /**
         * Fired after the `vaadin-combo-box-dropdown` closes.
         *
         * @event vaadin-combo-box-dropdown-closed
         */},{key:"_openedChanged",value:function _openedChanged(opened,oldValue){if(!!opened===!!oldValue){return}if(opened){this.$.overlay.style.position=this._isPositionFixed(this.positionTarget)?"fixed":"absolute";this._setPosition();window.addEventListener("scroll",this._boundSetPosition,!0);document.addEventListener("click",this._boundOutsideClickListener,!0);this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))}else{window.removeEventListener("scroll",this._boundSetPosition,!0);document.removeEventListener("click",this._boundOutsideClickListener,!0);this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))}}// We need to listen on 'click' event and capture it and close the overlay before
// propagating the event to the listener in the button. Otherwise, if the clicked button would call
// open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
},{key:"_outsideClickListener",value:function _outsideClickListener(event){var eventPath=event.composedPath();if(0>eventPath.indexOf(this.positionTarget)&&0>eventPath.indexOf(this.$.overlay)){this.opened=!1}}},{key:"_isPositionFixed",value:function _isPositionFixed(element){var offsetParent=this._getOffsetParent(element);return"fixed"===window.getComputedStyle(element).position||offsetParent&&this._isPositionFixed(offsetParent)}},{key:"_getOffsetParent",value:function _getOffsetParent(element){if(element.assignedSlot){return element.assignedSlot.parentElement}else if(element.parentElement){return element.offsetParent}var parent=element.parentNode;if(parent&&11===parent.nodeType&&parent.host){return parent.host;// parent is #shadowRoot
}}},{key:"_verticalOffset",value:function _verticalOffset(overlayRect,targetRect){return this.alignedAbove?-overlayRect.height:targetRect.height}},{key:"_shouldAlignAbove",value:function _shouldAlignAbove(targetRect){var spaceBelow=(window.innerHeight-targetRect.bottom-Math.min(document.body.scrollTop,0))/window.innerHeight;return .3>spaceBelow}},{key:"_setPosition",value:function _setPosition(e){if(this.hidden){return}if(e&&e.target){var target=e.target===document?document.body:e.target,parent=this.$.overlay.parentElement;if(!(target.contains(this.$.overlay)||target.contains(this.positionTarget))||parent!==document.body){return}}var targetRect=this.positionTarget.getBoundingClientRect();this.alignedAbove=this._shouldAlignAbove(targetRect);var overlayRect=this.$.overlay.getBoundingClientRect();this._translateX=targetRect.left-overlayRect.left+(this._translateX||0);this._translateY=targetRect.top-overlayRect.top+(this._translateY||0)+this._verticalOffset(overlayRect,targetRect);var _devicePixelRatio=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*_devicePixelRatio)/_devicePixelRatio;this._translateY=Math.round(this._translateY*_devicePixelRatio)/_devicePixelRatio;this.$.overlay.style.transform="translate3d(".concat(this._translateX,"px, ").concat(this._translateY,"px, 0)");this.$.overlay.style.width=this.positionTarget.clientWidth+"px";this.$.overlay.style.justifyContent=this.alignedAbove?"flex-end":"flex-start";// TODO: fire only when position actually changes changes
this.dispatchEvent(new CustomEvent("position-changed"))}}]);return ComboBoxDropdownElement}(DisableUpgradeMixin((0,_cureMe.mixinBehaviors)(_cureMe.IronResizableBehavior,_cureMe.PolymerElement)));customElements.define(ComboBoxDropdownElement.is,ComboBoxDropdownElement);var TOUCH_DEVICE=function(){try{document.createEvent("TouchEvent");return!0}catch(e){return!1}}(),ComboBoxDropdownWrapperElement=/*#__PURE__*/function(_ref){babelHelpers.inherits(ComboBoxDropdownWrapperElement,_ref);function ComboBoxDropdownWrapperElement(){babelHelpers.classCallCheck(this,ComboBoxDropdownWrapperElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ComboBoxDropdownWrapperElement).apply(this,arguments))}babelHelpers.createClass(ComboBoxDropdownWrapperElement,[{key:"_fireTouchAction",value:function _fireTouchAction(sourceEvent){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:sourceEvent}}))}},{key:"_getItems",value:function _getItems(opened,items){return opened?items:[]}},{key:"_openedChanged",value:function _openedChanged(opened,items,loading){if(this.$.dropdown.hasAttribute("disable-upgrade")){if(!opened){return}else{this._initDropdown()}}// Do not attach if no items
// Do not dettach if opened but user types an invalid search
this.$.dropdown.opened=!!(opened&&(loading||this.$.dropdown.opened||items&&items.length))}},{key:"_initDropdown",value:function _initDropdown(){var _this19=this;this.$.dropdown.removeAttribute("disable-upgrade");this._templateChanged();this._loadingChanged(this.loading);this.$.dropdown.$.overlay.addEventListener("touchend",function(e){return _this19._fireTouchAction(e)});this.$.dropdown.$.overlay.addEventListener("touchmove",function(e){return _this19._fireTouchAction(e)});// Prevent blurring the input when clicking inside the overlay.
this.$.dropdown.$.overlay.addEventListener("mousedown",function(e){return e.preventDefault()});// IE11: when scrolling with mouse, the focus goes to the scroller.
// This causes the overlay closing due to defocusing the input field.
// Prevent focusing the scroller by setting `unselectable="on"`.
if(/Trident/.test(navigator.userAgent)){this._scroller.setAttribute("unselectable","on")}}},{key:"_templateChanged",value:function _templateChanged(e){if(this.$.dropdown.hasAttribute("disable-upgrade")){return}this._selector=this.$.dropdown.$.overlay.content.querySelector("#selector");this._scroller=this.$.dropdown.$.overlay.content.querySelector("#scroller")}},{key:"_loadingChanged",value:function _loadingChanged(loading){if(this.$.dropdown.hasAttribute("disable-upgrade")){return}if(loading){this.$.dropdown.$.overlay.setAttribute("loading","")}else{this.$.dropdown.$.overlay.removeAttribute("loading")}}},{key:"_selectorChanged",value:function _selectorChanged(selector){this._patchWheelOverScrolling()}},{key:"_setOverlayHeight",value:function _setOverlayHeight(){if(!this.opened||!this.positionTarget||!this._selector){return}var targetRect=this.positionTarget.getBoundingClientRect();this._scroller.style.maxHeight=(window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-max-height"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-max-height"))||"65vh";var maxHeight=this._maxOverlayHeight(targetRect);// overlay max height is restrained by the #scroller max height which is set to 65vh in CSS.
this.$.dropdown.$.overlay.style.maxHeight=maxHeight;// we need to set height for iron-list to make its `firstVisibleIndex` work correctly.
this._selector.style.maxHeight=maxHeight;this.updateViewportBoundaries()}},{key:"_maxOverlayHeight",value:function _maxOverlayHeight(targetRect){var margin=8,minHeight=116;// Height of two items in combo-box
if(this.$.dropdown.alignedAbove){return Math.max(targetRect.top-margin+Math.min(document.body.scrollTop,0),minHeight)+"px"}else{return Math.max(document.documentElement.clientHeight-targetRect.bottom-margin,minHeight)+"px"}}},{key:"_getFocusedItem",value:function _getFocusedItem(focusedIndex){if(0<=focusedIndex){return this._items[focusedIndex]}}},{key:"_isItemSelected",value:function _isItemSelected(item,selectedItem,itemIdPath){if(babelHelpers.instanceof(item,ComboBoxPlaceholder)){return!1}else if(itemIdPath&&item!==void 0&&selectedItem!==void 0){return this.get(itemIdPath,item)===this.get(itemIdPath,selectedItem)}else{return item===selectedItem}}},{key:"_onItemClick",value:function _onItemClick(e){if(e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.stopPropagation){this._stopPropagation(e.detail.sourceEvent)}this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.model.item}}))}/**
     * Gets the index of the item with the provided label.
     * @return {Number}
     */},{key:"indexOfLabel",value:function indexOfLabel(label){if(this._items&&label){for(var i=0;i<this._items.length;i++){if(this.getItemLabel(this._items[i]).toString().toLowerCase()===label.toString().toLowerCase()){return i}}}return-1}/**
     * If dataProvider is used, dispatch a request for the item’s index if
     * the item is a placeholder object.
     *
     * @return {Number}
     */},{key:"__requestItemByIndex",value:function __requestItemByIndex(item,index){if(babelHelpers.instanceof(item,ComboBoxPlaceholder)&&index!==void 0){this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:index}}))}return index}/**
     * Gets the label string for the item based on the `_itemLabelPath`.
     * @return {String}
     */},{key:"getItemLabel",value:function getItemLabel(item,itemLabelPath){itemLabelPath=itemLabelPath||this._itemLabelPath;var label=item&&itemLabelPath?this.get(itemLabelPath,item):void 0;if(label===void 0||null===label){label=item?item.toString():""}return label}},{key:"_isItemFocused",value:function _isItemFocused(focusedIndex,itemIndex){return focusedIndex==itemIndex}},{key:"_getAriaSelected",value:function _getAriaSelected(focusedIndex,itemIndex){return this._isItemFocused(focusedIndex,itemIndex).toString()}},{key:"_getAriaRole",value:function _getAriaRole(itemIndex){return itemIndex!==void 0?"option":!1}},{key:"_focusedIndexChanged",value:function _focusedIndexChanged(index){if(0<=index){this._scrollIntoView(index)}}},{key:"_scrollIntoView",value:function _scrollIntoView(index){if(!(this.opened&&0<=index)){return}var visibleItemsCount=this._visibleItemsCount();if(visibleItemsCount===void 0){// Scroller is not visible. Moving is unnecessary.
return}var targetIndex=index;if(index>this._selector.lastVisibleIndex-1){// Index is below the bottom, scrolling down. Make the item appear at the bottom.
// First scroll to target (will be at the top of the scroller) to make sure it's rendered.
this._selector.scrollToIndex(index);// Then calculate the index for the following scroll (to get the target to bottom of the scroller).
targetIndex=index-visibleItemsCount+1}else if(index>this._selector.firstVisibleIndex){// The item is already visible, scrolling is unnecessary per se. But we need to trigger iron-list to set
// the correct scrollTop on the scrollTarget. Scrolling to firstVisibleIndex.
targetIndex=this._selector.firstVisibleIndex}this._selector.scrollToIndex(Math.max(0,targetIndex));// Sometimes the item is partly below the bottom edge, detect and adjust.
var pidx=this._selector._getPhysicalIndex(index),physicalItem=this._selector._physicalItems[pidx];if(!physicalItem){return}var physicalItemRect=physicalItem.getBoundingClientRect(),scrollerRect=this._scroller.getBoundingClientRect(),scrollTopAdjust=physicalItemRect.bottom-scrollerRect.bottom+this._viewportTotalPaddingBottom;if(0<scrollTopAdjust){this._scroller.scrollTop+=scrollTopAdjust}}},{key:"ensureItemsRendered",value:function ensureItemsRendered(){this._selector._render()}},{key:"adjustScrollPosition",value:function adjustScrollPosition(){if(this.opened&&this._items){this._scrollIntoView(this._focusedIndex)}}/**
     * We want to prevent the kinetic scrolling energy from being transferred from the overlay contents over to the parent.
     * Further improvement ideas: after the contents have been scrolled to the top or bottom and scrolling has stopped, it could allow
     * scrolling the parent similarly to touch scrolling.
     */},{key:"_patchWheelOverScrolling",value:function _patchWheelOverScrolling(){var selector=this._selector;selector.addEventListener("wheel",function(e){var scroller=selector._scroller||selector.scrollTarget,scrolledToTop=0===scroller.scrollTop,scrolledToBottom=1>=scroller.scrollHeight-scroller.scrollTop-scroller.clientHeight;if(scrolledToTop&&0>e.deltaY){e.preventDefault()}else if(scrolledToBottom&&0<e.deltaY){e.preventDefault()}})}},{key:"updateViewportBoundaries",value:function updateViewportBoundaries(){this._cachedViewportTotalPaddingBottom=void 0;this._selector.updateViewportBoundaries()}},{key:"_visibleItemsCount",value:function _visibleItemsCount(){if(!this._selector){return}// Ensure items are rendered
this._selector.flushDebouncer("_debounceTemplate");// Ensure items are positioned
this._selector.scrollToIndex(this._selector.firstVisibleIndex);// Ensure viewport boundaries are up-to-date
this.updateViewportBoundaries();return this._selector.lastVisibleIndex-this._selector.firstVisibleIndex+1}},{key:"_selectItem",value:function _selectItem(item){item="number"===typeof item?this._items[item]:item;if(this._selector.selectedItem!==item){this._selector.selectItem(item)}}},{key:"_preventDefault",value:function _preventDefault(e){if(e.cancelable){e.preventDefault()}}},{key:"_stopPropagation",value:function _stopPropagation(e){e.stopPropagation()}},{key:"_hidden",value:function _hidden(itemsChange){return!this.loading&&(!this._items||!this._items.length)}},{key:"_viewportTotalPaddingBottom",get:function get(){if(this._cachedViewportTotalPaddingBottom===void 0){var itemsStyle=window.getComputedStyle(this._selector.$.items);this._cachedViewportTotalPaddingBottom=[itemsStyle.paddingBottom,itemsStyle.borderBottomWidth].map(function(v){return parseInt(v,10)}).reduce(function(sum,v){return sum+v})}return this._cachedViewportTotalPaddingBottom}}],[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject7_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-combo-box-dropdown-wrapper"}},{key:"properties",get:function get(){return{/**
       * True if the device supports touch events.
       */touchDevice:{type:Boolean,value:TOUCH_DEVICE},opened:Boolean,/**
       * The element to position/align the dropdown by.
       */positionTarget:{type:Object},/**
       * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
       */renderer:Function,/**
       * `true` when new items are being loaded.
       */loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_setOverlayHeight"},/**
       * Used to propagate the `theme` attribute from the host element.
       */theme:String,_selectedItem:{type:Object},_items:{type:Object},_focusedIndex:{type:Number,value:-1,observer:"_focusedIndexChanged"},_focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_selector:Object,_itemIdPath:String}}},{key:"observers",get:function get(){return["_selectorChanged(_selector)","_loadingChanged(loading)","_openedChanged(opened, _items, loading)"]}}]);return ComboBoxDropdownWrapperElement}(/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(_class2,_PolymerElement);function _class2(){babelHelpers.classCallCheck(this,_class2);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(_class2).apply(this,arguments))}return _class2}(_cureMe.PolymerElement));/**
       * Element for internal use only.
       *
       * @memberof Vaadin
       * @private
       */customElements.define(ComboBoxDropdownWrapperElement.is,ComboBoxDropdownWrapperElement);var ComboBoxMixin=function ComboBoxMixin(subclass){return(/*#__PURE__*/function(_subclass){babelHelpers.inherits(VaadinComboBoxMixinElement,_subclass);babelHelpers.createClass(VaadinComboBoxMixinElement,null,[{key:"properties",get:function get(){return{/**
       * True if the dropdown is open, false otherwise.
       */opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},/**
       * Set to true to disable this element.
       */disabled:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * When present, it specifies that the element field is read-only.
       */readonly:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Custom function for rendering the content of every item.
       * Receives three arguments:
       *
       * - `root` The `<vaadin-combo-box-item>` internal container DOM element.
       * - `comboBox` The reference to the `<vaadin-combo-box>` element.
       * - `model` The object with the properties related with the rendered
       *   item, contains:
       *   - `model.index` The index of the rendered item.
       *   - `model.item` The item.
       */renderer:Function,/**
       * A full set of items to filter the visible options from.
       * The items can be of either `String` or `Object` type.
       */items:{type:Array,observer:"_itemsChanged"},/**
       * If `true`, the user can input a value that is not present in the items list.
       * `value` property will be set to the input value in this case.
       * Also, when `value` is set programmatically, the input value will be set
       * to reflect that value.
       */allowCustomValue:{type:Boolean,value:!1},/**
       * A subset of items, filtered based on the user input. Filtered items
       * can be assigned directly to omit the internal filtering functionality.
       * The items can be of either `String` or `Object` type.
       */filteredItems:{type:Array},/**
       * The `String` value for the selected item of the combo box. Provides
       * the value for `iron-form`.
       *
       * When there’s no item selected, the value is an empty string.
       *
       * Use `selectedItem` property to get the raw selected item from
       * the `items` array.
       */value:{type:String,observer:"_valueChanged",notify:!0,value:""},/**
       * Used to detect user value changes and fire `change` events.
       */_lastCommittedValue:String,/*
       * When set to `true`, "loading" attribute is added to host and the overlay element.
       */loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,value:-1},/**
       * Filtering string the user has typed into the input field.
       */filter:{type:String,value:"",notify:!0},/**
       * The selected item from the `items` array.
       */selectedItem:{type:Object,notify:!0},/**
       * Path for label of the item. If `items` is an array of objects, the
       * `itemLabelPath` is used to fetch the displayed string label for each
       * item.
       *
       * The item label is also used for matching items when processing user
       * input, i.e., for filtering and selecting items.
       *
       * When using item templates, the property is still needed because it is used
       * for filtering, and for displaying the selected item value in the input box.
       */itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},/**
       * Path for the value of the item. If `items` is an array of objects, the
       * `itemValuePath:` is used to fetch the string value for the selected
       * item.
       *
       * The item value is used in the `value` property of the combo box,
       * to provide the form value.
       */itemValuePath:{type:String,value:"value"},/**
       * Path for the id of the item. If `items` is an array of objects,
       * the `itemIdPath` is used to compare and identify the same item
       * in `selectedItem` and `filteredItems` (items given by the
       * `dataProvider` callback).
       */itemIdPath:String,/**
       * The name of this element.
       */name:{type:String},/**
       * Set to true if the value is invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_toggleElement:Object,_clearElement:Object,_inputElementValue:String,_closeOnBlurIsPrevented:Boolean,_previousDocumentPointerEvents:String,_itemTemplate:Object}}},{key:"observers",get:function get(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_templateOrRendererChanged(_itemTemplate, renderer)","_loadingChanged(loading)","_selectedItemChanged(selectedItem, itemLabelPath)","_toggleElementChanged(_toggleElement)"]}}]);function VaadinComboBoxMixinElement(){var _this20;babelHelpers.classCallCheck(this,VaadinComboBoxMixinElement);_this20=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinComboBoxMixinElement).call(this));_this20._boundOnFocusout=_this20._onFocusout.bind(babelHelpers.assertThisInitialized(_this20));_this20._boundOverlaySelectedItemChanged=_this20._overlaySelectedItemChanged.bind(babelHelpers.assertThisInitialized(_this20));_this20._boundClose=_this20.close.bind(babelHelpers.assertThisInitialized(_this20));_this20._boundOnOpened=_this20._onOpened.bind(babelHelpers.assertThisInitialized(_this20));_this20._boundOnKeyDown=_this20._onKeyDown.bind(babelHelpers.assertThisInitialized(_this20));_this20._boundOnClick=_this20._onClick.bind(babelHelpers.assertThisInitialized(_this20));_this20._boundOnOverlayTouchAction=_this20._onOverlayTouchAction.bind(babelHelpers.assertThisInitialized(_this20));_this20._boundOnTouchend=_this20._onTouchend.bind(babelHelpers.assertThisInitialized(_this20));return _this20}babelHelpers.createClass(VaadinComboBoxMixinElement,[{key:"ready",value:function ready(){var _this21=this;babelHelpers.get(babelHelpers.getPrototypeOf(VaadinComboBoxMixinElement.prototype),"ready",this).call(this);this.addEventListener("focusout",this._boundOnFocusout);this._lastCommittedValue=this.value;_cureMe.IronA11yAnnouncer.requestAvailability();// 2.0 does not support 'overlay.selection-changed' syntax in listeners
this.$.overlay.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged);this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose);this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened);this.addEventListener("keydown",this._boundOnKeyDown);this.addEventListener("click",this._boundOnClick);this.$.overlay.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction);this.addEventListener("touchend",this._boundOnTouchend);this._observer=new _cureMe.FlattenedNodesObserver(this,function(info){_this21._setTemplateFromNodes(info.addedNodes)})}/**
     * Manually invoke existing renderer.
     */},{key:"render",value:function render(){if(this.$.overlay._selector){this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item").forEach(function(item){return item._render()})}}},{key:"_setTemplateFromNodes",value:function _setTemplateFromNodes(nodes){this._itemTemplate=nodes.filter(function(node){return node.localName&&"template"===node.localName})[0]||this._itemTemplate}},{key:"_removeNewRendererOrTemplate",value:function _removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this._itemTemplate=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}},{key:"_templateOrRendererChanged",value:function _templateOrRendererChanged(template,renderer){if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for combo box items")}this._oldTemplate=template;this._oldRenderer=renderer}/**
     * Opens the dropdown list.
     */},{key:"open",value:function open(){// Prevent _open() being called when input is disabled or read-only
if(!this.disabled&&!this.readonly){this.opened=!0}}/**
     * Closes the dropdown list.
     */},{key:"close",value:function close(){this.opened=!1}},{key:"_openedChanged",value:function _openedChanged(value,old){// Prevent _close() being called when opened is set to its default value (false).
if(old===void 0){return}if(this.opened){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");// For touch devices, we don't want to popup virtual keyboard unless input is explicitly focused by the user.
if(!this.hasAttribute("focused")&&!this.$.overlay.touchDevice){this.focus()}}else{this._onClosed();if(this._openedWithFocusRing&&this.hasAttribute("focused")){this.focusElement.setAttribute("focus-ring","")}}}},{key:"_onOverlayTouchAction",value:function _onOverlayTouchAction(event){// On touch devices, blur the input on touch start inside the overlay, in order to hide
// the virtual keyboard. But don't close the overlay on this blur.
this._closeOnBlurIsPrevented=!0;this.inputElement.blur();this._closeOnBlurIsPrevented=!1}},{key:"_onClick",value:function _onClick(e){this._closeOnBlurIsPrevented=!0;var path=e.composedPath(),isClearElement=-1!==path.indexOf(this._clearElement)||"clear-button"===path[0].getAttribute("part");if(isClearElement){this._clear();this.focus()}else if(-1!==path.indexOf(this.inputElement)){if(-1<path.indexOf(this._toggleElement)&&this.opened){this.close()}else{this.open()}}this._closeOnBlurIsPrevented=!1}/**
     * Keyboard navigation
     */},{key:"_onKeyDown",value:function _onKeyDown(e){if(this._isEventKey(e,"down")){this._closeOnBlurIsPrevented=!0;this._onArrowDown();this._closeOnBlurIsPrevented=!1;// prevent caret from moving
e.preventDefault()}else if(this._isEventKey(e,"up")){this._closeOnBlurIsPrevented=!0;this._onArrowUp();this._closeOnBlurIsPrevented=!1;// prevent caret from moving
e.preventDefault()}else if(this._isEventKey(e,"enter")){this._onEnter(e)}else if(this._isEventKey(e,"esc")){this._onEscape(e)}}},{key:"_isEventKey",value:function _isEventKey(e,k){return _cureMe.IronA11yKeysBehavior.keyboardEventMatchesKeys(e,k)}},{key:"_getItemLabel",value:function _getItemLabel(item){return this.$.overlay.getItemLabel(item)}},{key:"_getItemValue",value:function _getItemValue(item){var value=item&&this.itemValuePath?this.get(this.itemValuePath,item):void 0;if(value===void 0){value=item?item.toString():""}return value}},{key:"_onArrowDown",value:function _onArrowDown(){if(this.opened){if(this.$.overlay._items){this._focusedIndex=Math.min(this.$.overlay._items.length-1,this._focusedIndex+1);this._prefillFocusedItemLabel()}}else{this.open()}}},{key:"_onArrowUp",value:function _onArrowUp(){if(this.opened){if(-1<this._focusedIndex){this._focusedIndex=Math.max(0,this._focusedIndex-1)}else{if(this.$.overlay._items){this._focusedIndex=this.$.overlay._items.length-1}}this._prefillFocusedItemLabel()}else{this.open()}}},{key:"_prefillFocusedItemLabel",value:function _prefillFocusedItemLabel(){var _this22=this;if(-1<this._focusedIndex){// Reset the input value asyncronously to prevent partial value changes
// announce. Makes OSX VoiceOver to announce the complete value instead.
this._inputElementValue="";// 1ms delay needed for OSX VoiceOver to realise input value was reset
setTimeout(function(){_this22._inputElementValue=_this22._getItemLabel(_this22.$.overlay._focusedItem);_this22._markAllSelectionRange()},1)}}},{key:"_setSelectionRange",value:function _setSelectionRange(start,end){// vaadin-text-field does not implement setSelectionRange, hence we need the native input
var input=this._nativeInput||this.inputElement;// Setting selection range focuses and/or moves the caret in some browsers,
// and there's no need to modify the selection range if the input isn't focused anyway.
// This affects Safari. When the overlay is open, and then hiting tab, browser should focus
// the next focusable element instead of the combo-box itself.
// Checking the focused property here is enough instead of checking the activeElement.
if(this.hasAttribute("focused")&&input&&input.setSelectionRange){try{input.setSelectionRange(start,end)}catch(ignore){// IE11 randomly fails when running tests in Sauce.
}}}},{key:"_markAllSelectionRange",value:function _markAllSelectionRange(){if(this._inputElementValue!==void 0){this._setSelectionRange(0,this._inputElementValue.length)}}},{key:"_clearSelectionRange",value:function _clearSelectionRange(){if(this._inputElementValue!==void 0){var pos=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(pos,pos)}}},{key:"_onEnter",value:function _onEnter(e){// should close on enter when custom values are allowed, input field is cleared, or when an existing
// item is focused with keyboard.
if(this.opened&&(this.allowCustomValue||""===this._inputElementValue||-1<this._focusedIndex)){this.close();// Do not submit the surrounding form.
e.preventDefault();// Do not trigger global listeners
e.stopPropagation()}}},{key:"_onEscape",value:function _onEscape(e){if(this.opened){this._stopPropagation(e);if(-1<this._focusedIndex){this._focusedIndex=-1;this._revertInputValue()}else{this.cancel()}}}},{key:"_toggleElementChanged",value:function _toggleElementChanged(toggleElement){var _this23=this;if(toggleElement){// Don't blur the input on toggle mousedown
toggleElement.addEventListener("mousedown",function(e){return e.preventDefault()});// Unfocus previously focused element if focus is not inside combo box (on touch devices)
toggleElement.addEventListener("click",function(e){if(_this23.$.overlay.touchDevice&&!_this23.hasAttribute("focused")){document.activeElement.blur()}})}}/**
     * Clears the current value.
     */},{key:"_clear",value:function _clear(){this.selectedItem=null;if(this.allowCustomValue){this.value=""}this._detectAndDispatchChange()}/**
     * Reverts back to original value.
     */},{key:"cancel",value:function cancel(){this._revertInputValueToValue();// In the next _detectAndDispatchChange() call, the change detection should not pass
this._lastCommittedValue=this.value;this.close()}},{key:"_onOpened",value:function _onOpened(){var _this24=this;// Pre P2 iron-list used a debouncer to render. Now that we synchronously render items,
// we need to flush the DOM to make sure it doesn't get flushed in the middle of _render call
// because that will cause problems to say the least.
(0,_cureMe.flush)();// With iron-list v1.3.9, calling `notifyResize()` no longer renders
// the items synchronously. It is required to have the items rendered
// before we update the overlay and the list positions and sizes.
this.$.overlay.ensureItemsRendered();this.$.overlay._selector.toggleScrollListener(!0);// Ensure metrics are up-to-date
this.$.overlay.updateViewportBoundaries();// Force iron-list to create reusable nodes. Otherwise it will only start
// doing that in scroll listener, which is especially slow in Edge.
this.$.overlay._selector._increasePoolIfNeeded();setTimeout(function(){return _this24._resizeDropdown()},1);// Defer scroll position adjustment to prevent freeze in Edge
window.requestAnimationFrame(function(){return _this24.$.overlay.adjustScrollPosition()});// _detectAndDispatchChange() should not consider value changes done before opening
this._lastCommittedValue=this.value}},{key:"_onClosed",value:function _onClosed(){var _this25=this;// Happens when the overlay is closed by clicking outside
if(this.opened){this.close()}if(this.$.overlay._items&&-1<this._focusedIndex){var focusedItem=this.$.overlay._items[this._focusedIndex];if(this.selectedItem!==focusedItem){this.selectedItem=focusedItem}// make sure input field is updated in case value doesn't change (i.e. FOO -> foo)
this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||this._inputElementValue===void 0){this.selectedItem=null;if(this.allowCustomValue){this.value=""}}else{if(this.allowCustomValue// to prevent a repetitive input value being saved after pressing ESC and Tab.
&&!(this.filteredItems&&this.filteredItems.filter(function(item){return _this25._getItemLabel(item)===_this25._inputElementValue}).length)){var e=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(e);if(!e.defaultPrevented){var customValue=this._inputElementValue;this._selectItemForValue(customValue);this.value=customValue}}else{this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}}this._detectAndDispatchChange();this._clearSelectionRange();if(!this.dataProvider){this.filter=""}}},{key:"_inputValueChanged",/**
     *  Filtering and items handling
     */value:function _inputValueChanged(e){// Handle only input events from our inputElement.
if(-1!==e.composedPath().indexOf(this.inputElement)){this._inputElementValue=this.inputElement[this._propertyForValue];this._filterFromInput(e)}}},{key:"_filterFromInput",value:function _filterFromInput(e){if(!this.opened&&!e.__fromClearButton){this.open()}if(this.filter===this._inputElementValue){// Filter and input value might get out of sync, while keyboard navigating for example.
// Afterwards, input value might be changed to the same value as used in filtering.
// In situation like these, we need to make sure all the filter changes handlers are run.
this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath)}else{this.filter=this._inputElementValue}}},{key:"_itemLabelPathChanged",value:function _itemLabelPathChanged(itemLabelPath,oldItemLabelPath){if("string"!==typeof itemLabelPath){console.error("You should set itemLabelPath to a valid string")}}},{key:"_filterChanged",value:function _filterChanged(filter,itemValuePath,itemLabelPath){if(filter===void 0){return}if(this.items){this.filteredItems=this._filterItems(this.items,filter)}else{// With certain use cases (e. g., external filtering), `items` are
// undefined. Filtering is unnecessary per se, but the filteredItems
// observer should still be invoked to update focused item.
this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},itemValuePath,itemLabelPath)}}},{key:"_loadingChanged",value:function _loadingChanged(loading){if(loading){this._focusedIndex=-1}}},{key:"_revertInputValue",value:function _revertInputValue(){if(""!==this.filter){this._inputElementValue=this.filter}else{this._revertInputValueToValue()}this._clearSelectionRange()}},{key:"_revertInputValueToValue",value:function _revertInputValueToValue(){if(this.allowCustomValue&&!this.selectedItem){this._inputElementValue=this.value}else{this._inputElementValue=this._getItemLabel(this.selectedItem)}}},{key:"_resizeDropdown",value:function _resizeDropdown(){this.$.overlay.$.dropdown.notifyResize()}},{key:"_updateHasValue",value:function _updateHasValue(hasValue){if(hasValue){this.setAttribute("has-value","")}else{this.removeAttribute("has-value")}}},{key:"_selectedItemChanged",value:function _selectedItemChanged(selectedItem,itemLabelPath){if(null===selectedItem||selectedItem===void 0){if(this.filteredItems){if(!this.allowCustomValue){this.value=""}this._updateHasValue(""!==this.value);this._inputElementValue=this.value}}else{var value=this._getItemValue(selectedItem);if(this.value!==value){this.value=value;if(this.value!==value){// The value was changed to something else in value-changed listener,
// so prevent from resetting it to the previous value.
return}}this._updateHasValue(!0);this._inputElementValue=this._getItemLabel(selectedItem);// Could not be defined in 1.x because ready is called after all prop-setters
if(this.inputElement){this.inputElement[this._propertyForValue]=this._inputElementValue}}this.$.overlay._selectedItem=selectedItem;if(this.filteredItems&&this.$.overlay._items){this._focusedIndex=this.filteredItems.indexOf(selectedItem)}}},{key:"_valueChanged",value:function _valueChanged(value,oldVal){if(""===value&&oldVal===void 0){// initializing, no need to do anything (#554)
return}if(this._isValidValue(value)){var item;if(this._getItemValue(this.selectedItem)!==value){this._selectItemForValue(value)}else{item=this.selectedItem}if(!item&&this.allowCustomValue){this._inputElementValue=value}this._updateHasValue(""!==this.value)}else{this.selectedItem=null}// In the next _detectAndDispatchChange() call, the change detection should pass
this._lastCommittedValue=void 0}},{key:"_detectAndDispatchChange",value:function _detectAndDispatchChange(){if(this.value!==this._lastCommittedValue){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}));this._lastCommittedValue=this.value}}},{key:"_itemsChanged",value:function _itemsChanged(items,oldItems){var _this26=this;this._ensureItemsOrDataProvider(function(){_this26.items=oldItems})}},{key:"_itemsOrPathsChanged",value:function _itemsOrPathsChanged(e,itemValuePath,itemLabelPath){if(e.value===void 0){return}if("items"===e.path||"items.splices"===e.path){this.filteredItems=this.items?this.items.slice(0):this.items;var valueIndex=this._indexOfValue(this.value,this.items);this._focusedIndex=valueIndex;var item=-1<valueIndex&&this.items[valueIndex];if(item){this.selectedItem=item}}}},{key:"_filteredItemsChanged",value:function _filteredItemsChanged(e,itemValuePath,itemLabelPath){if(e.value===void 0){return}if("filteredItems"===e.path||"filteredItems.splices"===e.path){this._setOverlayItems(this.filteredItems);this._focusedIndex=this.opened?this.$.overlay.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems);if(this.opened){this._repositionOverlay()}}}},{key:"_filterItems",value:function _filterItems(arr,filter){var _this27=this;if(!arr){return arr}return arr.filter(function(item){filter=filter?filter.toString().toLowerCase():"";// Check if item contains input value.
return-1<_this27._getItemLabel(item).toString().toLowerCase().indexOf(filter)})}},{key:"_selectItemForValue",value:function _selectItemForValue(value){var valueIndex=this._indexOfValue(value,this.filteredItems),previouslySelectedItem=this.selectedItem;this.selectedItem=0<=valueIndex?this.filteredItems[valueIndex]:this.dataProvider&&this.selectedItem===void 0?void 0:null;if(null===this.selectedItem&&null===previouslySelectedItem){this._selectedItemChanged(this.selectedItem)}}},{key:"_setOverlayItems",value:function _setOverlayItems(items){this.$.overlay.set("_items",items)}},{key:"_repositionOverlay",value:function _repositionOverlay(){var _this28=this;// async needed to reposition correctly after filtering
// (especially when aligned on top of input)
this.__repositionOverlayDebouncer=_cureMe.Debouncer.debounce(this.__repositionOverlayDebouncer,// Long debounce: sizing updates invoke multiple styling rounds,
// which is very slow in Edge
_cureMe.timeOut.after(500),function(){var selector=_this28.$.overlay._selector;if(!selector._isClientFull()){// Due to the mismatch of the Y position of the item rendered
// at the top of the scrolling list with some specific scroll
// position values (2324, 3486, 6972, 60972, 95757 etc.)
// iron-list loops the increasing of the pool and adds
// too many items to the DOM.
// Adjusting scroll position to equal the current scrollTop value
// to avoid looping.
selector._resetScrollPosition(selector._physicalTop)}_this28._resizeDropdown();_this28.$.overlay.updateViewportBoundaries();_this28.$.overlay.ensureItemsRendered();selector.notifyResize();(0,_cureMe.flush)()})}},{key:"_indexOfValue",value:function _indexOfValue(value,items){if(items&&this._isValidValue(value)){for(var i=0;i<items.length;i++){if(this._getItemValue(items[i])===value){return i}}}return-1}/**
     * Checks if the value is supported as an item value in this control.
     *
     * @return {boolean}
     */},{key:"_isValidValue",value:function _isValidValue(value){return value!==void 0&&null!==value}},{key:"_overlaySelectedItemChanged",value:function _overlaySelectedItemChanged(e){// stop this private event from leaking outside.
e.stopPropagation();if(babelHelpers.instanceof(e.detail.item,ComboBoxPlaceholder)){// Placeholder items should not be selectable.
return}if(this.opened){this._focusedIndex=this.filteredItems.indexOf(e.detail.item);this.close()}else if(this.selectedItem!==e.detail.item){this.selectedItem=e.detail.item;this._detectAndDispatchChange()}}},{key:"_onFocusout",value:function _onFocusout(event){// Fixes the problem with `focusout` happening when clicking on the scroll bar on Edge
var dropdown=this.$.overlay.$.dropdown;if(dropdown&&dropdown.$&&event.relatedTarget===dropdown.$.overlay){event.composedPath()[0].focus();return}if(!this._closeOnBlurIsPrevented){this.close()}}},{key:"_onTouchend",value:function _onTouchend(event){if(!this._clearElement||event.composedPath()[0]!==this._clearElement){return}event.preventDefault();this._clear()}/**
     * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
     *
     * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
     */},{key:"validate",value:function validate(){return!(this.invalid=!this.checkValidity())}/**
     * Returns true if the current input value satisfies all constraints (if any)
     *
     * You can override the `checkValidity` method for custom validations.
     */},{key:"checkValidity",value:function checkValidity(){if(this.inputElement.validate){return this.inputElement.validate()}}},{key:"_ensureTemplatized",value:function _ensureTemplatized(){if(!this._TemplateClass){var tpl=this._itemTemplate||this._getRootTemplate();if(tpl){this._TemplateClass=(0,_cureMe.templatize)(tpl,this,{instanceProps:this._instanceProps,forwardHostProp:function forwardHostProp(prop,value){var items=this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item");Array.prototype.forEach.call(items,function(item){if(item._itemTemplateInstance){item._itemTemplateInstance.set(prop,value);item._itemTemplateInstance.notifyPath(prop,value,!0)}})}})}}}},{key:"_getRootTemplate",value:function _getRootTemplate(){return Array.prototype.filter.call(this.children,function(elem){return"TEMPLATE"===elem.tagName})[0]}},{key:"_preventInputBlur",value:function _preventInputBlur(){if(this._toggleElement){this._toggleElement.addEventListener("click",this._preventDefault)}if(this._clearElement){this._clearElement.addEventListener("click",this._preventDefault)}}},{key:"_restoreInputBlur",value:function _restoreInputBlur(){if(this._toggleElement){this._toggleElement.removeEventListener("click",this._preventDefault)}if(this._clearElement){this._clearElement.removeEventListener("click",this._preventDefault)}}},{key:"_preventDefault",value:function _preventDefault(e){e.preventDefault()}},{key:"_stopPropagation",value:function _stopPropagation(e){e.stopPropagation()}/**
     * Fired when the value changes.
     *
     * @event value-changed
     * @param {Object} detail
     *  @param {String} detail.value the combobox value
     */ /**
         * Fired when selected item changes.
         *
         * @event selected-item-changed
         * @param {Object} detail
         *  @param {Object|String} detail.value the selected item. Type is the same as the type of `items`.
         */ /**
             * Fired when the user sets a custom value.
             * @event custom-value-set
             * @param {String} detail the custom value
             */ /**
                 * Fired when value changes.
                 * To comply with https://developer.mozilla.org/en-US/docs/Web/Events/change
                 * @event change
                 */},{key:"_propertyForValue",get:function get(){return"value"}},{key:"_instanceProps",get:function get(){return{item:!0,index:!0,selected:!0,focused:!0}}}]);return VaadinComboBoxMixinElement}(subclass))};_exports.ComboBoxMixin=ComboBoxMixin;var vaadinComboBoxMixin={ComboBoxMixin:ComboBoxMixin};_exports.$vaadinComboBoxMixin=vaadinComboBoxMixin;var ComboBoxLightElement=/*#__PURE__*/function(_ThemePropertyMixin2){babelHelpers.inherits(ComboBoxLightElement,_ThemePropertyMixin2);babelHelpers.createClass(ComboBoxLightElement,null,[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject8_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-combo-box-light"}},{key:"properties",get:function get(){return{/**
       * Name of the two-way data-bindable property representing the
       * value of the custom input field.
       */attrForValue:{type:String,value:"value"},inputElement:{type:Element,readOnly:!0}}}}]);function ComboBoxLightElement(){var _this29;babelHelpers.classCallCheck(this,ComboBoxLightElement);_this29=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ComboBoxLightElement).call(this));_this29._boundInputValueChanged=_this29._inputValueChanged.bind(babelHelpers.assertThisInitialized(_this29));_this29.__boundInputValueCommitted=_this29.__inputValueCommitted.bind(babelHelpers.assertThisInitialized(_this29));return _this29}babelHelpers.createClass(ComboBoxLightElement,[{key:"ready",value:function ready(){var _this30=this;babelHelpers.get(babelHelpers.getPrototypeOf(ComboBoxLightElement.prototype),"ready",this).call(this);this._toggleElement=this.querySelector(".toggle-button");this._clearElement=this.querySelector(".clear-button");if(this._clearElement){this._clearElement.addEventListener("mousedown",function(e){e.preventDefault();// Prevent native focus changes
// _focusableElement is needed for paper-input
(_this30.inputElement._focusableElement||_this30.inputElement).focus()})}}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(ComboBoxLightElement.prototype),"connectedCallback",this).call(this);var cssSelector="vaadin-text-field,iron-input,paper-input,.paper-input-input,.input";this._setInputElement(this.querySelector(cssSelector));this._revertInputValue();this.inputElement.addEventListener("input",this._boundInputValueChanged);this.inputElement.addEventListener("change",this.__boundInputValueCommitted);this._preventInputBlur()}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(ComboBoxLightElement.prototype),"disconnectedCallback",this).call(this);this.inputElement.removeEventListener("input",this._boundInputValueChanged);this.inputElement.removeEventListener("change",this.__boundInputValueCommitted);this._restoreInputBlur()}},{key:"__inputValueCommitted",value:function __inputValueCommitted(e){// Detect if the input was cleared (by clicking the clear button on a vaadin-text-field)
// and propagate the value change to combo box value immediately.
if(e.__fromClearButton){this._clear()}}},{key:"focused",get:function get(){return this.getRootNode().activeElement===this.inputElement}},{key:"_propertyForValue",get:function get(){return(0,_cureMe.dashToCamelCase)(this.attrForValue)}},{key:"_inputElementValue",get:function get(){return this.inputElement&&this.inputElement[this._propertyForValue]},set:function set(value){if(this.inputElement){this.inputElement[this._propertyForValue]=value}}}]);return ComboBoxLightElement}(ThemePropertyMixin(ThemableMixin(ComboBoxDataProviderMixin(ComboBoxMixin(_cureMe.PolymerElement)))));_exports.ComboBoxLightElement=ComboBoxLightElement;customElements.define(ComboBoxLightElement.is,ComboBoxLightElement);var vaadinComboBoxLight={ComboBoxLightElement:ComboBoxLightElement};_exports.$vaadinComboBoxLight=vaadinComboBoxLight;var $_documentContainer$6=document.createElement("template");$_documentContainer$6.innerHTML="<dom-module id=\"lumo-overlay\">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part=\"overlay\"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part=\"content\"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part=\"backdrop\"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part=\"backdrop\"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$6.content);var $_documentContainer$7=(0,_cureMe.html)(_templateObject9_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$7.content);var $_documentContainer$8=document.createElement("template");$_documentContainer$8.innerHTML="<dom-module id=\"lumo-menu-overlay-core\">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part=\"overlay\"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part=\"overlay\"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part=\"overlay\"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-menu-overlay\">\n  <template>\n    <style include=\"lumo-overlay lumo-menu-overlay-core\">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part=\"overlay\"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part=\"content\"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part=\"backdrop\"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part=\"overlay\"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part=\"backdrop\"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part=\"overlay\"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$8.content);/* Split as a separate module because combo box can only use the "fullscreen" styles */ /*
                                                                                                                                                  FIXME(polymer-modulizer): the above comments were extracted
                                                                                                                                                  from HTML and may be out of place here. Review them and
                                                                                                                                                  then delete this comment!
                                                                                                                                                  */;var $_documentContainer$9=(0,_cureMe.html)(_templateObject10_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$9.content);var $_documentContainer$a=document.createElement("template");$_documentContainer$a.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'lumo-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: \"\\ea01\";\n      --lumo-icons-align-left: \"\\ea02\";\n      --lumo-icons-align-right: \"\\ea03\";\n      --lumo-icons-angle-down: \"\\ea04\";\n      --lumo-icons-angle-left: \"\\ea05\";\n      --lumo-icons-angle-right: \"\\ea06\";\n      --lumo-icons-angle-up: \"\\ea07\";\n      --lumo-icons-arrow-down: \"\\ea08\";\n      --lumo-icons-arrow-left: \"\\ea09\";\n      --lumo-icons-arrow-right: \"\\ea0a\";\n      --lumo-icons-arrow-up: \"\\ea0b\";\n      --lumo-icons-bar-chart: \"\\ea0c\";\n      --lumo-icons-bell: \"\\ea0d\";\n      --lumo-icons-calendar: \"\\ea0e\";\n      --lumo-icons-checkmark: \"\\ea0f\";\n      --lumo-icons-chevron-down: \"\\ea10\";\n      --lumo-icons-chevron-left: \"\\ea11\";\n      --lumo-icons-chevron-right: \"\\ea12\";\n      --lumo-icons-chevron-up: \"\\ea13\";\n      --lumo-icons-clock: \"\\ea14\";\n      --lumo-icons-cog: \"\\ea15\";\n      --lumo-icons-cross: \"\\ea16\";\n      --lumo-icons-download: \"\\ea17\";\n      --lumo-icons-dropdown: \"\\ea18\";\n      --lumo-icons-edit: \"\\ea19\";\n      --lumo-icons-error: \"\\ea1a\";\n      --lumo-icons-eye: \"\\ea1b\";\n      --lumo-icons-eye-disabled: \"\\ea1c\";\n      --lumo-icons-menu: \"\\ea1d\";\n      --lumo-icons-minus: \"\\ea1e\";\n      --lumo-icons-ordered-list: \"\\ea1f\";\n      --lumo-icons-phone: \"\\ea20\";\n      --lumo-icons-photo: \"\\ea21\";\n      --lumo-icons-play: \"\\ea22\";\n      --lumo-icons-plus: \"\\ea23\";\n      --lumo-icons-redo: \"\\ea24\";\n      --lumo-icons-reload: \"\\ea25\";\n      --lumo-icons-search: \"\\ea26\";\n      --lumo-icons-undo: \"\\ea27\";\n      --lumo-icons-unordered-list: \"\\ea28\";\n      --lumo-icons-upload: \"\\ea29\";\n      --lumo-icons-user: \"\\ea2a\";\n    }\n  </style>\n</custom-style>";document.head.appendChild($_documentContainer$a.content);/* NOTICE: Generated with 'gulp icons' */ /*
                                                                                                    FIXME(polymer-modulizer): the above comments were extracted
                                                                                                    from HTML and may be out of place here. Review them and
                                                                                                    then delete this comment!
                                                                                                    */;var $_documentContainer$b=(0,_cureMe.html)(_templateObject11_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$b.content);/**
                                                          @license
                                                          Copyright (c) 2017 Vaadin Ltd.
                                                          This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
                                                          */ /**
                                                              * A mixin providing `focused`, `focus-ring`, `active`, `disabled` and `selected`.
                                                              *
                                                              * `focused`, `active` and `focus-ring` are set as only as attributes.
                                                              * @polymerMixin
                                                              */var ItemMixin=function ItemMixin(superClass){return(/*#__PURE__*/function(_superClass6){babelHelpers.inherits(VaadinItemMixin,_superClass6);function VaadinItemMixin(){babelHelpers.classCallCheck(this,VaadinItemMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinItemMixin).apply(this,arguments))}babelHelpers.createClass(VaadinItemMixin,[{key:"ready",value:function ready(){var _this31=this;babelHelpers.get(babelHelpers.getPrototypeOf(VaadinItemMixin.prototype),"ready",this).call(this);var attrValue=this.getAttribute("value");if(null!==attrValue){this.value=attrValue}this.addEventListener("focus",function(e){return _this31._setFocused(!0)},!0);this.addEventListener("blur",function(e){return _this31._setFocused(!1)},!0);this.addEventListener("mousedown",function(e){_this31._setActive(_this31._mousedown=!0);var mouseUpListener=function mouseUpListener(){_this31._setActive(_this31._mousedown=!1);document.removeEventListener("mouseup",mouseUpListener)};document.addEventListener("mouseup",mouseUpListener)});this.addEventListener("keydown",function(e){return _this31._onKeydown(e)});this.addEventListener("keyup",function(e){return _this31._onKeyup(e)})}/**
     * @protected
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinItemMixin.prototype),"disconnectedCallback",this).call(this);// in Firefox and Safari, blur does not fire on the element when it is removed,
// especially between keydown and keyup events, being active at the same time.
// reproducible in `<vaadin-select>` when closing overlay on select.
if(this.hasAttribute("active")){this._setFocused(!1)}}},{key:"_selectedChanged",value:function _selectedChanged(selected){this.setAttribute("aria-selected",selected)}},{key:"_disabledChanged",value:function _disabledChanged(disabled){if(disabled){this.selected=!1;this.setAttribute("aria-disabled","true");this.blur()}else{this.removeAttribute("aria-disabled")}}},{key:"_setFocused",value:function _setFocused(focused){if(focused){this.setAttribute("focused","");if(!this._mousedown){this.setAttribute("focus-ring","")}}else{this.removeAttribute("focused");this.removeAttribute("focus-ring");this._setActive(!1)}}},{key:"_setActive",value:function _setActive(active){if(active){this.setAttribute("active","")}else{this.removeAttribute("active")}}},{key:"_onKeydown",value:function _onKeydown(event){if(/^( |SpaceBar|Enter)$/.test(event.key)&&!event.defaultPrevented){event.preventDefault();this._setActive(!0)}}},{key:"_onKeyup",value:function _onKeyup(event){if(this.hasAttribute("active")){this._setActive(!1);this.click()}}},{key:"value",get:function get(){return this._value!==void 0?this._value:this.textContent.trim()},set:function set(value){this._value=value}}],[{key:"properties",get:function get(){return{/**
       * Used for mixin detection because `instanceof` does not work with mixins.
       * e.g. in VaadinListMixin it filters items by using the
       * `element._hasVaadinItemMixin` condition.
       */_hasVaadinItemMixin:{value:!0},/**
       * If true, the user cannot interact with this element.
       */disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},/**
       * If true, the item is in selected state.
       */selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}}]);return VaadinItemMixin}(superClass))};_exports.ItemMixin=ItemMixin;var vaadinItemMixin={ItemMixin:ItemMixin};_exports.$vaadinItemMixin=vaadinItemMixin;var ItemElement=/*#__PURE__*/function(_ItemMixin){babelHelpers.inherits(ItemElement,_ItemMixin);babelHelpers.createClass(ItemElement,null,[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject12_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-item"}},{key:"version",get:function get(){return"2.1.1"}}]);function ItemElement(){var _this32;babelHelpers.classCallCheck(this,ItemElement);_this32=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ItemElement).call(this));/**
              * Submittable string value. The default value is the trimmed text content of the element.
              * @type {string}
              */_this32.value;return _this32}return ItemElement}(ItemMixin(ThemableMixin(_cureMe.PolymerElement)));_exports.ItemElement=ItemElement;customElements.define(ItemElement.is,ItemElement);var vaadinItem={ItemElement:ItemElement};_exports.$vaadinItem=vaadinItem;var $_documentContainer$c=(0,_cureMe.html)(_templateObject13_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$c.content);/**
                                                          @license
                                                          Copyright (c) 2017 Vaadin Ltd.
                                                          This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
                                                          */var DatePickerHelper=/*#__PURE__*/function(){function VaadinDatePickerHelper(){babelHelpers.classCallCheck(this,VaadinDatePickerHelper)}babelHelpers.createClass(VaadinDatePickerHelper,null,[{key:"_getISOWeekNumber",/**
   * Get ISO 8601 week number for the given date.
   *
   * @param {Date} Date object
   * @return {Number} Week number
   */value:function _getISOWeekNumber(date){// Ported from Vaadin Framework method com.vaadin.client.DateTimeService.getISOWeekNumber(date)
var dayOfWeek=date.getDay();// 0 == sunday
// ISO 8601 use weeks that start on monday so we use
// mon=1,tue=2,...sun=7;
if(0===dayOfWeek){dayOfWeek=7}// Find nearest thursday (defines the week in ISO 8601). The week number
// for the nearest thursday is the same as for the target date.
var nearestThursdayDiff=4-dayOfWeek,nearestThursday=new Date(date.getTime()+1e3*(3600*(24*nearestThursdayDiff))),firstOfJanuary=new Date(0,0);// 4 is thursday
firstOfJanuary.setFullYear(nearestThursday.getFullYear());var timeDiff=nearestThursday.getTime()-firstOfJanuary.getTime(),daysSinceFirstOfJanuary=Math.round(timeDiff/(1e3*(3600*24)));// Rounding the result, as the division doesn't result in an integer
// when the given date is inside daylight saving time period.
return Math.floor(daysSinceFirstOfJanuary/7+1)}/**
     * Check if two dates are equal.
     *
     * @param {Date} date1
     * @param {Date} date2
     * @return {Boolean} True if the given date objects refer to the same date
     */},{key:"_dateEquals",value:function _dateEquals(date1,date2){return babelHelpers.instanceof(date1,Date)&&babelHelpers.instanceof(date2,Date)&&date1.getFullYear()===date2.getFullYear()&&date1.getMonth()===date2.getMonth()&&date1.getDate()===date2.getDate()}/**
     * Check if the given date is in the range of allowed dates.
     *
     * @param {Date} date The date to check
     * @param {Date} min Range start
     * @param {Date} max Range end
     * @return {Boolean} True if the date is in the range
     */},{key:"_dateAllowed",value:function _dateAllowed(date,min,max){return(!min||date>=min)&&(!max||date<=max)}/**
     * Get closest date from array of dates.
     *
     * @param {Date} date The date to compare dates with
     * @param {Array} dates Array of date objects
     * @return {Date} Closest date
     */},{key:"_getClosestDate",value:function _getClosestDate(date,dates){return dates.filter(function(date){return date!==void 0}).reduce(function(closestDate,candidate){if(!candidate){return closestDate}if(!closestDate){return candidate}var candidateDiff=Math.abs(date.getTime()-candidate.getTime()),closestDateDiff=Math.abs(closestDate.getTime()-date.getTime());return candidateDiff<closestDateDiff?candidate:closestDate})}/**
     * Extracts the basic component parts of a date (day, month and year)
     * to the expected format.
     */},{key:"_extractDateParts",value:function _extractDateParts(date){return{day:date.getDate(),month:date.getMonth(),year:date.getFullYear()}}}]);return VaadinDatePickerHelper}();_exports.DatePickerHelper=DatePickerHelper;var vaadinDatePickerHelper={DatePickerHelper:DatePickerHelper};_exports.$vaadinDatePickerHelper=vaadinDatePickerHelper;var DatePickerMixin=function DatePickerMixin(subclass){return(/*#__PURE__*/function(_mixinBehaviors){babelHelpers.inherits(VaadinDatePickerMixin,_mixinBehaviors);function VaadinDatePickerMixin(){babelHelpers.classCallCheck(this,VaadinDatePickerMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinDatePickerMixin).apply(this,arguments))}babelHelpers.createClass(VaadinDatePickerMixin,[{key:"ready",value:function ready(){var _this33=this;babelHelpers.get(babelHelpers.getPrototypeOf(VaadinDatePickerMixin.prototype),"ready",this).call(this);this._boundOnScroll=this._onScroll.bind(this);this._boundFocus=this._focus.bind(this);this._boundUpdateAlignmentAndPosition=this._updateAlignmentAndPosition.bind(this);var isClearButton=function isClearButton(e){var path=e.composedPath(),inputIndex=path.indexOf(_this33._inputElement);return 1===path.slice(0,inputIndex).filter(function(el){return el.getAttribute&&"clear-button"===el.getAttribute("part")}).length};(0,_cureMe.addListener)(this,"tap",function(e){// FIXME(platosha): use preventDefault in the text field clear button,
// then the following composedPath check could be simplified down
// to `if (!e.defaultPrevented)`.
// https://github.com/vaadin/vaadin-text-field/issues/352
if(!isClearButton(e)){_this33.open()}});this.addEventListener("touchend",function(e){if(!isClearButton(e)){e.preventDefault()}});this.addEventListener("keydown",this._onKeydown.bind(this));this.addEventListener("input",this._onUserInput.bind(this));this.addEventListener("focus",function(e){return _this33._noInput&&e.target.blur()});this.addEventListener("blur",function(e){return!_this33.opened&&_this33.validate()})}},{key:"_initOverlay",value:function _initOverlay(){var _this34=this;this.$.overlay.removeAttribute("disable-upgrade");this._overlayInitialized=!0;this.$.overlay.addEventListener("opened-changed",function(e){return _this34.opened=e.detail.value});this._overlayContent.addEventListener("close",this._close.bind(this));this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this));this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._boundFocus);// Keep focus attribute in focusElement for styling
this._overlayContent.addEventListener("focus",function(){return _this34.focusElement._setFocused(!0)});this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}/**
     * @protected
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinDatePickerMixin.prototype),"disconnectedCallback",this).call(this);if(this._overlayInitialized){this.$.overlay.removeEventListener("vaadin-overlay-escape-press",this._boundFocus)}this.opened=!1}/**
     * Opens the dropdown.
     */},{key:"open",value:function open(){if(!this.disabled&&!this.readonly){this.opened=!0}}},{key:"_close",value:function _close(e){if(e){e.stopPropagation()}this._focus();this.close()}/**
     * Closes the dropdown.
     */},{key:"close",value:function close(){if(this._overlayInitialized){this.$.overlay.close()}}},{key:"_parseDate",value:function _parseDate(str){// Parsing with RegExp to ensure correct format
var parts=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(str);if(!parts){return}var date=new Date(0,0);// Wrong date (1900-01-01), but with midnight in local time
date.setFullYear(parseInt(parts[1],10));date.setMonth(parseInt(parts[2],10)-1);date.setDate(parseInt(parts[3],10));return date}},{key:"_isNoInput",value:function _isNoInput(fullscreen,ios,i18n){return!this._inputElement||fullscreen||ios||!i18n.parseDate}},{key:"_formatISO",value:function _formatISO(date){if(!babelHelpers.instanceof(date,Date)){return""}var pad=function pad(num){var fmt=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"00";return(fmt+num).substr((fmt+num).length-fmt.length)},yearSign="",yearFmt="0000",yearAbs=date.getFullYear();if(0>yearAbs){yearAbs=-yearAbs;yearSign="-";yearFmt="000000"}else if(1e4<=date.getFullYear()){yearSign="+";yearFmt="000000"}var year=yearSign+pad(yearAbs,yearFmt),month=pad(date.getMonth()+1),day=pad(date.getDate());return[year,month,day].join("-")}},{key:"_openedChanged",value:function _openedChanged(opened){if(opened&&!this._overlayInitialized){this._initOverlay()}if(this._overlayInitialized){this.$.overlay.opened=opened}if(opened){this._updateAlignmentAndPosition()}}},{key:"_selectedDateChanged",value:function _selectedDateChanged(selectedDate,formatDate){if(selectedDate===void 0||formatDate===void 0){return}if(this.__userInputOccurred){this.__dispatchChange=!0}var inputValue=selectedDate&&formatDate(DatePickerHelper._extractDateParts(selectedDate)),value=this._formatISO(selectedDate);this._inputValue=selectedDate?inputValue:"";if(value!==this.value){this.validate();this.value=value}this.__userInputOccurred=!1;this.__dispatchChange=!1;this._ignoreFocusedDateChange=!0;this._focusedDate=selectedDate;this._ignoreFocusedDateChange=!1}},{key:"_focusedDateChanged",value:function _focusedDateChanged(focusedDate,formatDate){if(focusedDate===void 0||formatDate===void 0){return}this.__userInputOccurred=!0;if(!this._ignoreFocusedDateChange&&!this._noInput){this._inputValue=focusedDate?formatDate(DatePickerHelper._extractDateParts(focusedDate)):""}}},{key:"_updateHasValue",value:function _updateHasValue(value){if(value){this.setAttribute("has-value","")}else{this.removeAttribute("has-value")}}},{key:"__getOverlayTheme",value:function __getOverlayTheme(theme,overlayInitialized){if(overlayInitialized){return theme}}},{key:"_handleDateChange",value:function _handleDateChange(property,value,oldValue){if(!value){this[property]="";return}var date=this._parseDate(value);if(!date){this.value=oldValue;return}if(!DatePickerHelper._dateEquals(this[property],date)){this[property]=date;this.value&&this.validate()}}},{key:"_valueChanged",value:function _valueChanged(value,oldValue){if(this.__dispatchChange){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}this._handleDateChange("_selectedDate",value,oldValue)}},{key:"_minChanged",value:function _minChanged(value,oldValue){this._handleDateChange("_minDate",value,oldValue)}},{key:"_maxChanged",value:function _maxChanged(value,oldValue){this._handleDateChange("_maxDate",value,oldValue)}},{key:"_updateAlignmentAndPosition",value:function _updateAlignmentAndPosition(){if(!this._overlayInitialized){return}if(!this._fullscreen){var inputRect=this._inputElement.getBoundingClientRect(),bottomAlign=inputRect.top>window.innerHeight/2,rightAlign=inputRect.left+this.clientWidth/2>window.innerWidth/2;if(rightAlign){var viewportWidth=Math.min(window.innerWidth,document.documentElement.clientWidth);this.$.overlay.setAttribute("right-aligned","");this.$.overlay.style.removeProperty("left");this.$.overlay.style.right=viewportWidth-inputRect.right+"px"}else{this.$.overlay.removeAttribute("right-aligned");this.$.overlay.style.removeProperty("right");this.$.overlay.style.left=inputRect.left+"px"}if(bottomAlign){var viewportHeight=Math.min(window.innerHeight,document.documentElement.clientHeight);this.$.overlay.setAttribute("bottom-aligned","");this.$.overlay.style.removeProperty("top");this.$.overlay.style.bottom=viewportHeight-inputRect.top+"px"}else{this.$.overlay.removeAttribute("bottom-aligned");this.$.overlay.style.removeProperty("bottom");this.$.overlay.style.top=inputRect.bottom+"px"}}this.$.overlay.setAttribute("dir",getComputedStyle(this._inputElement).getPropertyValue("direction"));this._overlayContent._repositionYearScroller()}},{key:"_fullscreenChanged",value:function _fullscreenChanged(){if(this._overlayInitialized&&this.$.overlay.opened){this._updateAlignmentAndPosition()}}},{key:"_onOverlayOpened",value:function _onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");var parsedInitialPosition=this._parseDate(this.initialPosition),initialPosition=this._selectedDate||this._overlayContent.initialPosition||parsedInitialPosition||new Date;if(parsedInitialPosition||DatePickerHelper._dateAllowed(initialPosition,this._minDate,this._maxDate)){this._overlayContent.initialPosition=initialPosition}else{this._overlayContent.initialPosition=DatePickerHelper._getClosestDate(initialPosition,[this._minDate,this._maxDate])}this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition);// Have a default focused date
this._ignoreFocusedDateChange=!0;this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition;this._ignoreFocusedDateChange=!1;window.addEventListener("scroll",this._boundOnScroll,!0);this.addEventListener("iron-resize",this._boundUpdateAlignmentAndPosition);if(this._webkitOverflowScroll){this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)}if(this._focusOverlayOnOpen){this._overlayContent.focus();this._focusOverlayOnOpen=!1}else{this._focus()}if(this._noInput&&this.focusElement){this.focusElement.blur()}this.updateStyles();this._ignoreAnnounce=!1}// A hack needed for iOS to prevent dropdown from being clipped in an
// ancestor container with -webkit-overflow-scrolling: touch;
},{key:"_preventWebkitOverflowScrollingTouch",value:function _preventWebkitOverflowScrollingTouch(element){var result=[];while(element){if("touch"===window.getComputedStyle(element).webkitOverflowScrolling){var oldInlineValue=element.style.webkitOverflowScrolling;element.style.webkitOverflowScrolling="auto";result.push({element:element,oldInlineValue:oldInlineValue})}element=element.parentElement}return result}},{key:"_onOverlayClosed",value:function _onOverlayClosed(){this._ignoreAnnounce=!0;window.removeEventListener("scroll",this._boundOnScroll,!0);this.removeEventListener("iron-resize",this._boundUpdateAlignmentAndPosition);if(this._touchPrevented){this._touchPrevented.forEach(function(prevented){return prevented.element.style.webkitOverflowScrolling=prevented.oldInlineValue});this._touchPrevented=[]}this.updateStyles();// Select the parsed input or focused date
this._ignoreFocusedDateChange=!0;if(this.i18n.parseDate){var inputValue=this._inputValue||"",dateObject=this.i18n.parseDate(inputValue),parsedDate=dateObject&&this._parseDate("".concat(dateObject.year,"-").concat(dateObject.month+1,"-").concat(dateObject.day));if(this._isValidDate(parsedDate)){this._selectedDate=parsedDate}else{this._selectedDate=null;this._inputValue=inputValue}}else if(this._focusedDate){this._selectedDate=this._focusedDate}this._ignoreFocusedDateChange=!1;if(this._nativeInput&&this._nativeInput.selectionStart){this._nativeInput.selectionStart=this._nativeInput.selectionEnd}// No need to revalidate the value after `_selectedDateChanged`
// Needed in case the value was not changed: open and close dropdown.
this.value||this.validate()}/**
     * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
     *
     * @param {string} value Value to validate. Optional, defaults to user's input value.
     * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
     */},{key:"validate",value:function validate(){// Note (Yuriy): Workaround `this._inputValue` is used in order
// to avoid breaking change on custom `checkValidity`.
// Can be removed with next major.
return!(this.invalid=!this.checkValidity(this._inputValue))}/**
     * Returns true if the current input value satisfies all constraints (if any)
     *
     * Override the `checkValidity` method for custom validations.
     *
     * @param {string} value Value to validate. Optional, defaults to the selected date.
     * @return {boolean} True if the value is valid
     */},{key:"checkValidity",value:function checkValidity(){var inputValid=!this._inputValue||this._selectedDate&&this._inputValue===this.i18n.formatDate(DatePickerHelper._extractDateParts(this._selectedDate)),minMaxValid=!this._selectedDate||DatePickerHelper._dateAllowed(this._selectedDate,this._minDate,this._maxDate),inputValidity=!0;if(this._inputElement){if(this._inputElement.checkValidity){// vaadin native input elements have the checkValidity method
this._inputElement.__forceCheckValidity=!0;inputValidity=this._inputElement.checkValidity();this._inputElement.__forceCheckValidity=!1}else if(this._inputElement.validate){// iron-form-elements have the validate API
inputValidity=this._inputElement.validate()}}return inputValid&&minMaxValid&&inputValidity}},{key:"_onScroll",value:function _onScroll(e){if(e.target===window||!this._overlayContent.contains(e.target)){this._updateAlignmentAndPosition()}}},{key:"_focus",value:function _focus(){if(this._noInput){this._overlayInitialized&&this._overlayContent.focus()}else{this._inputElement.focus()}}},{key:"_focusAndSelect",value:function _focusAndSelect(){this._focus();this._setSelectionRange(0,this._inputValue.length)}},{key:"_setSelectionRange",value:function _setSelectionRange(a,b){if(this._nativeInput&&this._nativeInput.setSelectionRange){this._nativeInput.setSelectionRange(a,b)}}/**
     * Keyboard Navigation
     */},{key:"_eventKey",value:function _eventKey(e){for(var keys=["down","up","enter","esc","tab"],i=0,k;i<keys.length;i++){k=keys[i];if(_cureMe.IronA11yKeysBehavior.keyboardEventMatchesKeys(e,k)){return k}}}},{key:"_isValidDate",value:function _isValidDate(d){return d&&!isNaN(d.getTime())}},{key:"_onKeydown",value:function _onKeydown(e){if(this._noInput){// The input element cannot be readonly as it would conflict with
// the required attribute. Both are not allowed on an input element.
// Therefore we prevent default on most keydown events.
var allowedKeys=[9// tab
];if(-1===allowedKeys.indexOf(e.keyCode)){e.preventDefault()}}switch(this._eventKey(e)){case"down":case"up":// prevent scrolling the page with arrows
e.preventDefault();if(this.opened){this._overlayContent.focus();this._overlayContent._onKeydown(e)}else{this._focusOverlayOnOpen=!0;this.open()}break;case"enter":{var dateObject=this.i18n.parseDate(this._inputValue),parsedDate=dateObject&&this._parseDate(dateObject.year+"-"+(dateObject.month+1)+"-"+dateObject.day);if(this._overlayInitialized&&this._overlayContent.focusedDate&&this._isValidDate(parsedDate)){this._selectedDate=this._overlayContent.focusedDate}this.close();break}case"esc":this._focusedDate=this._selectedDate;this._close();break;case"tab":if(this.opened){e.preventDefault();// Clear the selection range (remains visible on IE)
this._setSelectionRange(0,0);if(e.shiftKey){this._overlayContent.focusCancel()}else{this._overlayContent.focus();this._overlayContent.revealDate(this._focusedDate)}}break;}}},{key:"_onUserInput",value:function _onUserInput(e){if(!this.opened&&this._inputElement.value){this.open()}this._userInputValueChanged()}},{key:"_userInputValueChanged",value:function _userInputValueChanged(value){if(this.opened&&this._inputValue){var dateObject=this.i18n.parseDate&&this.i18n.parseDate(this._inputValue),parsedDate=dateObject&&this._parseDate("".concat(dateObject.year,"-").concat(dateObject.month+1,"-").concat(dateObject.day));if(this._isValidDate(parsedDate)){this._ignoreFocusedDateChange=!0;if(!DatePickerHelper._dateEquals(parsedDate,this._focusedDate)){this._focusedDate=parsedDate}this._ignoreFocusedDateChange=!1}}}},{key:"_announceFocusedDate",value:function _announceFocusedDate(_focusedDate,opened,_ignoreAnnounce){if(opened&&!_ignoreAnnounce){this._overlayContent.announceFocusedDate()}}},{key:"_inputElement",get:function get(){return this._input()}},{key:"_nativeInput",get:function get(){if(this._inputElement){// vaadin-text-field's input is focusElement
// iron-input's input is inputElement
return this._inputElement.focusElement?this._inputElement.focusElement:this._inputElement.inputElement?this._inputElement.inputElement:window.unwrap?window.unwrap(this._inputElement):this._inputElement}}},{key:"_overlayContent",get:function get(){return this.$.overlay.content.querySelector("#overlay-content")}/**
     * Fired when the user commits a value change.
     *
     * @event change
     */}],[{key:"properties",get:function get(){return{/**
       * The current selected date.
       */_selectedDate:{type:Date},_focusedDate:Date,/**
       * The value for this element.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */value:{type:String,observer:"_valueChanged",notify:!0,value:""},/**
       * Set to true to mark the input as required.
       */required:{type:Boolean,value:!1},/**
       * The name of this element.
       */name:{type:String},/**
       * Date which should be visible when there is no value selected.
       *
       * The same date formats as for the `value` property are supported.
       */initialPosition:String,/**
       * The label for this element.
       */label:String,/**
       * Set true to open the date selector overlay.
       */opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},/**
       * Set true to display ISO-8601 week numbers in the calendar. Notice that
       * displaying week numbers is only supported when `i18n.firstDayOfWeek`
       * is 1 (Monday).
       */showWeekNumbers:{type:Boolean},_fullscreen:{value:!1,observer:"_fullscreenChanged"},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},// An array of ancestor elements whose -webkit-overflow-scrolling is forced from value
// 'touch' to value 'auto' in order to prevent them from clipping the dropdown. iOS only.
_touchPrevented:Array,/**
       * The object used to localize this component.
       * To change the default localization, replace the entire
       * _i18n_ object or just the property you want to modify.
       *
       * The object has the following JSON structure and default values:
           {
            // An array with the full names of months starting
            // with January.
            monthNames: [
              'January', 'February', 'March', 'April', 'May',
              'June', 'July', 'August', 'September',
              'October', 'November', 'December'
            ],
             // An array of weekday names starting with Sunday. Used
            // in screen reader announcements.
            weekdays: [
              'Sunday', 'Monday', 'Tuesday', 'Wednesday',
              'Thursday', 'Friday', 'Saturday'
            ],
             // An array of short weekday names starting with Sunday.
            // Displayed in the calendar.
            weekdaysShort: [
              'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
            ],
             // An integer indicating the first day of the week
            // (0 = Sunday, 1 = Monday, etc.).
            firstDayOfWeek: 0,
             // Used in screen reader announcements along with week
            // numbers, if they are displayed.
            week: 'Week',
             // Translation of the Calendar icon button title.
            calendar: 'Calendar',
             // Translation of the Clear icon button title.
            clear: 'Clear',
             // Translation of the Today shortcut button text.
            today: 'Today',
             // Translation of the Cancel button text.
            cancel: 'Cancel',
             // A function to format given `Object` as
            // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
            // Note: The argument month is 0-based. This means that January = 0 and December = 11.
            formatDate: d => {
              // returns a string representation of the given
              // object in 'MM/DD/YYYY' -format
            },
             // A function to parse the given text to an `Object` in the format `{ day: ..., month: ..., year: ... }`.
            // Must properly parse (at least) text formatted by `formatDate`.
            // Setting the property to null will disable keyboard input feature.
            // Note: The argument month is 0-based. This means that January = 0 and December = 11.
            parseDate: text => {
              // Parses a string in 'MM/DD/YY', 'MM/DD' or 'DD' -format to
              // an `Object` in the format `{ day: ..., month: ..., year: ... }`.
            }
             // A function to format given `monthName` and
            // `fullYear` integer as calendar title string.
            formatTitle: (monthName, fullYear) => {
              return monthName + ' ' + fullYear;
            }
          }
        *
       * @default {English/US}
       */i18n:{type:Object,value:function value(){return{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",clear:"Clear",today:"Today",cancel:"Cancel",formatDate:function formatDate(d){var yearStr=(d.year+"").replace(/\d+/,function(y){return"0000".substr(y.length)+y});return[d.month+1,d.day,yearStr].join("/")},parseDate:function parseDate(text){var parts=text.split("/"),today=new Date,date,month=today.getMonth(),year=today.getFullYear();if(3===parts.length){year=parseInt(parts[2]);if(3>parts[2].length&&0<=year){year+=50>year?2e3:1900}month=parseInt(parts[0])-1;date=parseInt(parts[1])}else if(2===parts.length){month=parseInt(parts[0])-1;date=parseInt(parts[1])}else if(1===parts.length){date=parseInt(parts[0])}if(date!==void 0){return{day:date,month:month,year:year}}},formatTitle:function formatTitle(monthName,fullYear){return monthName+" "+fullYear}}}},/**
       * The earliest date that can be selected. All earlier dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */min:{type:String,observer:"_minChanged"},/**
       * The latest date that can be selected. All later dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */max:{type:String,observer:"_maxChanged"},/**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */_minDate:{type:Date,// null does not work here because minimizer passes undefined to overlay (#351)
value:""},/**
       * The latest date that can be selected. All later dates will be disabled.
       */_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(_fullscreen, _ios, i18n, i18n.*)"},_ios:{type:Boolean,value:navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_ignoreAnnounce:{value:!0},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}},{key:"observers",get:function get(){return["_updateHasValue(value)","_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)"]}}]);return VaadinDatePickerMixin}((0,_cureMe.mixinBehaviors)([_cureMe.IronResizableBehavior],subclass)))};_exports.DatePickerMixin=DatePickerMixin;var vaadinDatePickerMixin={DatePickerMixin:DatePickerMixin};_exports.$vaadinDatePickerMixin=vaadinDatePickerMixin;var MonthCalendarElement=/*#__PURE__*/function(_ThemableMixin3){babelHelpers.inherits(MonthCalendarElement,_ThemableMixin3);function MonthCalendarElement(){babelHelpers.classCallCheck(this,MonthCalendarElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MonthCalendarElement).apply(this,arguments))}babelHelpers.createClass(MonthCalendarElement,[{key:"_dateEquals",value:function _dateEquals(date1,date2){return DatePickerHelper._dateEquals(date1,date2)}},{key:"_dateAllowed",value:function _dateAllowed(date,min,max){return DatePickerHelper._dateAllowed(date,min,max)}/* Returns true if all the dates in the month are out of the allowed range */},{key:"_isDisabled",value:function _isDisabled(month,minDate,maxDate){// First day of the month
var firstDate=new Date(0,0);firstDate.setFullYear(month.getFullYear());firstDate.setMonth(month.getMonth());firstDate.setDate(1);// Last day of the month
var lastDate=new Date(0,0);lastDate.setFullYear(month.getFullYear());lastDate.setMonth(month.getMonth()+1);lastDate.setDate(0);if(minDate&&maxDate&&minDate.getMonth()===maxDate.getMonth()&&minDate.getMonth()===month.getMonth()&&0<=maxDate.getDate()-minDate.getDate()){return!1}return!this._dateAllowed(firstDate,minDate,maxDate)&&!this._dateAllowed(lastDate,minDate,maxDate)}},{key:"_getTitle",value:function _getTitle(month,monthNames){if(month===void 0||monthNames===void 0){return}return this.i18n.formatTitle(monthNames[month.getMonth()],month.getFullYear())}},{key:"_onMonthGridTouchStart",value:function _onMonthGridTouchStart(){var _this35=this;this._notTapping=!1;setTimeout(function(){return _this35._notTapping=!0},300)}},{key:"_dateAdd",value:function _dateAdd(date,delta){date.setDate(date.getDate()+delta)}},{key:"_applyFirstDayOfWeek",value:function _applyFirstDayOfWeek(weekDayNames,firstDayOfWeek){if(weekDayNames===void 0||firstDayOfWeek===void 0){return}return weekDayNames.slice(firstDayOfWeek).concat(weekDayNames.slice(0,firstDayOfWeek))}},{key:"_getWeekDayNames",value:function _getWeekDayNames(weekDayNames,weekDayNamesShort,showWeekNumbers,firstDayOfWeek){if(weekDayNames===void 0||weekDayNamesShort===void 0||showWeekNumbers===void 0||firstDayOfWeek===void 0){return}weekDayNames=this._applyFirstDayOfWeek(weekDayNames,firstDayOfWeek);weekDayNamesShort=this._applyFirstDayOfWeek(weekDayNamesShort,firstDayOfWeek);weekDayNames=weekDayNames.map(function(day,index){return{weekDay:day,weekDayShort:weekDayNamesShort[index]}});return weekDayNames}},{key:"_getDate",value:function _getDate(date){return date?date.getDate():""}},{key:"_showWeekNumbersChanged",value:function _showWeekNumbersChanged(showWeekNumbers,firstDayOfWeek){if(showWeekNumbers&&1===firstDayOfWeek){this.setAttribute("week-numbers","")}else{this.removeAttribute("week-numbers")}}},{key:"_showWeekSeparator",value:function _showWeekSeparator(showWeekNumbers,firstDayOfWeek){// Currently only supported for locales that start the week on Monday.
return showWeekNumbers&&1===firstDayOfWeek}},{key:"_isToday",value:function _isToday(date){return this._dateEquals(new Date,date)}},{key:"_getDays",value:function _getDays(month,firstDayOfWeek){if(month===void 0||firstDayOfWeek===void 0){return}// First day of the month (at midnight).
var date=new Date(0,0);date.setFullYear(month.getFullYear());date.setMonth(month.getMonth());date.setDate(1);// Rewind to first day of the week.
while(date.getDay()!==firstDayOfWeek){this._dateAdd(date,-1)}var days=[],startMonth=date.getMonth(),targetMonth=month.getMonth();while(date.getMonth()===targetMonth||date.getMonth()===startMonth){days.push(date.getMonth()===targetMonth?new Date(date.getTime()):null);// Advance to next day.
this._dateAdd(date,1)}return days}},{key:"_getWeekNumber",value:function _getWeekNumber(date,days){if(date===void 0||days===void 0){return}if(!date){// Get the first non-null date from the days array.
date=days.reduce(function(acc,d){return!acc&&d?d:acc})}return DatePickerHelper._getISOWeekNumber(date)}},{key:"_getWeekNumbers",value:function _getWeekNumbers(dates){var _this36=this;return dates.map(function(date){return _this36._getWeekNumber(date,dates)}).filter(function(week,index,arr){return arr.indexOf(week)===index})}},{key:"_handleTap",value:function _handleTap(e){if(!this.ignoreTaps&&!this._notTapping&&e.target.date&&!e.target.hasAttribute("disabled")){this.selectedDate=e.target.date;this.dispatchEvent(new CustomEvent("date-tap",{bubbles:!0,composed:!0}))}}},{key:"_preventDefault",value:function _preventDefault(e){e.preventDefault()}},{key:"_getRole",value:function _getRole(date){return date?"button":"presentation"}},{key:"_getAriaLabel",value:function _getAriaLabel(date){if(!date){return""}var ariaLabel=this._getDate(date)+" "+this.i18n.monthNames[date.getMonth()]+" "+date.getFullYear()+", "+this.i18n.weekdays[date.getDay()];if(this._isToday(date)){ariaLabel+=", "+this.i18n.today}return ariaLabel}},{key:"_getAriaDisabled",value:function _getAriaDisabled(date,min,max){if(date===void 0||min===void 0||max===void 0){return}return this._dateAllowed(date,min,max)?"false":"true"}}],[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject14_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-month-calendar"}},{key:"properties",get:function get(){return{/**
       * A `Date` object defining the month to be displayed. Only year and
       * month properties are actually used.
       */month:{type:Date,value:new Date},/**
       * A `Date` object for the currently selected date.
       */selectedDate:{type:Date,notify:!0},/**
       * A `Date` object for the currently focused date.
       */focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},/**
       * Flag stating whether taps on the component should be ignored.
       */ignoreTaps:Boolean,_notTapping:Boolean,/**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */minDate:{type:Date,value:null},/**
       * The latest date that can be selected. All later dates will be disabled.
       */maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}},{key:"observers",get:function get(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)"]}}]);return MonthCalendarElement}(ThemableMixin((0,_cureMe.GestureEventListeners)(_cureMe.PolymerElement)));customElements.define(MonthCalendarElement.is,MonthCalendarElement);var InfiniteScrollerElement=/*#__PURE__*/function(_PolymerElement2){babelHelpers.inherits(InfiniteScrollerElement,_PolymerElement2);function InfiniteScrollerElement(){babelHelpers.classCallCheck(this,InfiniteScrollerElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(InfiniteScrollerElement).apply(this,arguments))}babelHelpers.createClass(InfiniteScrollerElement,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(InfiniteScrollerElement.prototype),"ready",this).call(this);this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer"));this.$.fullHeight.style.height=2*this._initialScroll+"px";var tpl=this.querySelector("template");this._TemplateClass=(0,_cureMe.templatize)(tpl,this,{forwardHostProp:function forwardHostProp(prop,value){if("index"!==prop){this._buffers.forEach(function(buffer){[].forEach.call(buffer.children,function(insertionPoint){insertionPoint._itemWrapper.instance[prop]=value})})}}});// Firefox interprets elements with overflow:auto as focusable
// https://bugzilla.mozilla.org/show_bug.cgi?id=1069739
var isFirefox=-1<navigator.userAgent.toLowerCase().indexOf("firefox");if(isFirefox){this.$.scroller.tabIndex=-1}}},{key:"_activated",value:function _activated(active){if(active&&!this._initialized){this._createPool();this._initialized=!0}}},{key:"_finishInit",value:function _finishInit(){var _this37=this;if(!this._initDone){// Once the first set of items start fading in, stamp the rest
this._buffers.forEach(function(buffer){[].forEach.call(buffer.children,function(insertionPoint){return _this37._ensureStampedInstance(insertionPoint._itemWrapper)})},this);if(!this._buffers[0].translateY){this._reset()}this._initDone=!0}}},{key:"_translateBuffer",value:function _translateBuffer(up){var index=up?1:0;this._buffers[index].translateY=this._buffers[index?0:1].translateY+this._bufferHeight*(index?-1:1);this._buffers[index].style.transform="translate3d(0, "+this._buffers[index].translateY+"px, 0)";this._buffers[index].updated=!1;this._buffers.reverse()}},{key:"_scroll",value:function _scroll(){var _this38=this;if(this._scrollDisabled){return}var scrollTop=this.$.scroller.scrollTop;if(scrollTop<this._bufferHeight||scrollTop>2*this._initialScroll-this._bufferHeight){// Scrolled near the end/beginning of the scrollable area -> reset.
this._initialIndex=~~this.position;this._reset()}// Check if we scrolled enough to translate the buffer positions.
var bufferOffset=this.root.querySelector(".buffer").offsetTop,upperThresholdReached=scrollTop>this._buffers[1].translateY+this.itemHeight+bufferOffset,lowerThresholdReached=scrollTop<this._buffers[0].translateY+this.itemHeight+bufferOffset;if(upperThresholdReached||lowerThresholdReached){this._translateBuffer(lowerThresholdReached);this._updateClones()}if(!this._preventScrollEvent){this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0}));this._mayHaveMomentum=!0}this._preventScrollEvent=!1;this._debouncerScrollFinish=_cureMe.Debouncer.debounce(this._debouncerScrollFinish,_cureMe.timeOut.after(200),function(){var scrollerRect=_this38.$.scroller.getBoundingClientRect();if(!_this38._isVisible(_this38._buffers[0],scrollerRect)&&!_this38._isVisible(_this38._buffers[1],scrollerRect)){_this38.position=_this38.position}})}/**
     * Current scroller position as index. Can be a fractional number.
     *
     * @type {Number}
     */},{key:"_reset",value:function _reset(){var _this39=this;this._scrollDisabled=!0;this.$.scroller.scrollTop=this._initialScroll;this._buffers[0].translateY=this._initialScroll-this._bufferHeight;this._buffers[1].translateY=this._initialScroll;this._buffers.forEach(function(buffer){buffer.style.transform="translate3d(0, "+buffer.translateY+"px, 0)"});this._buffers[0].updated=this._buffers[1].updated=!1;this._updateClones(!0);this._debouncerUpdateClones=_cureMe.Debouncer.debounce(this._debouncerUpdateClones,_cureMe.timeOut.after(200),function(){_this39._buffers[0].updated=_this39._buffers[1].updated=!1;_this39._updateClones()});this._scrollDisabled=!1}},{key:"_createPool",value:function _createPool(){var _this40=this,container=this.getBoundingClientRect();this._buffers.forEach(function(buffer){for(var _loop=function _loop(){var itemWrapper=document.createElement("div");itemWrapper.style.height=_this40.itemHeight+"px";itemWrapper.instance={};var contentId=InfiniteScrollerElement._contentIndex=InfiniteScrollerElement._contentIndex+1||0,slotName="vaadin-infinite-scroller-item-content-"+contentId,insertionPoint=document.createElement("slot");insertionPoint.setAttribute("name",slotName);insertionPoint._itemWrapper=itemWrapper;buffer.appendChild(insertionPoint);itemWrapper.setAttribute("slot",slotName);_this40.appendChild(itemWrapper);// This is needed by IE
(0,_cureMe.flush)();setTimeout(function(){// Only stamp the visible instances first
if(_this40._isVisible(itemWrapper,container)){_this40._ensureStampedInstance(itemWrapper)}},1);// Wait for first reset
},i=0;i<_this40.bufferSize;i++){_loop()}},this);setTimeout(function(){(0,_cureMe.afterNextRender)(_this40,_this40._finishInit.bind(_this40))},1)}},{key:"_ensureStampedInstance",value:function _ensureStampedInstance(itemWrapper){if(itemWrapper.firstElementChild){return}var tmpInstance=itemWrapper.instance;itemWrapper.instance=new this._TemplateClass({});itemWrapper.appendChild(itemWrapper.instance.root);Object.keys(tmpInstance).forEach(function(prop){itemWrapper.instance.set(prop,tmpInstance[prop])})}},{key:"_updateClones",value:function _updateClones(viewPortOnly){var _this41=this;this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var scrollerRect=viewPortOnly?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach(function(buffer,bufferIndex){if(!buffer.updated){var firstIndex=_this41._firstIndex+_this41.bufferSize*bufferIndex;[].forEach.call(buffer.children,function(insertionPoint,index){var itemWrapper=insertionPoint._itemWrapper;if(!viewPortOnly||_this41._isVisible(itemWrapper,scrollerRect)){itemWrapper.instance.index=firstIndex+index}});buffer.updated=!0}},this)}},{key:"_isVisible",value:function _isVisible(element,container){var rect=element.getBoundingClientRect();return rect.bottom>container.top&&rect.top<container.bottom}},{key:"position",set:function set(index){var _this42=this;this._preventScrollEvent=!0;if(index>this._firstIndex&&index<this._firstIndex+2*this.bufferSize){this.$.scroller.scrollTop=this.itemHeight*(index-this._firstIndex)+this._buffers[0].translateY}else{this._initialIndex=~~index;this._reset();this._scrollDisabled=!0;this.$.scroller.scrollTop+=index%1*this.itemHeight;this._scrollDisabled=!1}if(this._mayHaveMomentum){// Stop the possible iOS Safari momentum with -webkit-overflow-scrolling: auto;
this.$.scroller.classList.add("notouchscroll");this._mayHaveMomentum=!1;setTimeout(function(){// Restore -webkit-overflow-scrolling: touch; after a small delay.
_this42.$.scroller.classList.remove("notouchscroll")},10)}}/**
     * @private
     */,get:function get(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}},{key:"itemHeight",get:function get(){if(!this._itemHeightVal){if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)){this.updateStyles()}var itemHeight=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-infinite-scroller-item-height"):getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),tmpStyleProp="background-position";// Use background-position temp inline style for unit conversion
this.$.fullHeight.style.setProperty(tmpStyleProp,itemHeight);var itemHeightPx=getComputedStyle(this.$.fullHeight).getPropertyValue(tmpStyleProp);this.$.fullHeight.style.removeProperty(tmpStyleProp);this._itemHeightVal=parseFloat(itemHeightPx)}return this._itemHeightVal}},{key:"_bufferHeight",get:function get(){return this.itemHeight*this.bufferSize}}],[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject15_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-infinite-scroller"}},{key:"properties",get:function get(){return{/**
       * Count of individual items in each buffer.
       * The scroller has 2 buffers altogether so bufferSize of 20
       * will result in 40 buffered DOM items in total.
       * Changing after initialization not supported.
       */bufferSize:{type:Number,value:20},/**
       * The amount of initial scroll top. Needed in order for the
       * user to be able to scroll backwards.
       */_initialScroll:{value:5e5},/**
       * The index/position mapped at _initialScroll point.
       */_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}}]);return InfiniteScrollerElement}(_cureMe.PolymerElement);customElements.define(InfiniteScrollerElement.is,InfiniteScrollerElement);var $_documentContainer$d=document.createElement("template");$_documentContainer$d.innerHTML="<dom-module id=\"vaadin-date-picker-overlay-styles\" theme-for=\"vaadin-date-picker-overlay\">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([right-aligned][dir=\"rtl\"]) {\n        align-items: flex-start;\n      }\n\n      [part=\"overlay\"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~=\"content\"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$d.content);var DatePickerOverlayContentElement=/*#__PURE__*/function(_ThemableMixin4){babelHelpers.inherits(DatePickerOverlayContentElement,_ThemableMixin4);function DatePickerOverlayContentElement(){babelHelpers.classCallCheck(this,DatePickerOverlayContentElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DatePickerOverlayContentElement).apply(this,arguments))}babelHelpers.createClass(DatePickerOverlayContentElement,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(DatePickerOverlayContentElement.prototype),"ready",this).call(this);this.setAttribute("tabindex",0);this.addEventListener("keydown",this._onKeydown.bind(this));(0,_cureMe.addListener)(this,"tap",this._stopPropagation);this.addEventListener("focus",this._onOverlayFocus.bind(this));this.addEventListener("blur",this._onOverlayBlur.bind(this))}/**
     * Fired when the scroller reaches the target scrolling position.
     * @event scroll-animation-finished
     * @param {Number} detail.position new position
     * @param {Number} detail.oldPosition old position
     */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DatePickerOverlayContentElement.prototype),"connectedCallback",this).call(this);this._closeYearScroller();this._toggleAnimateClass(!0);(0,_cureMe.setTouchAction)(this.$.scrollers,"pan-y");_cureMe.IronA11yAnnouncer.requestAvailability()}},{key:"announceFocusedDate",value:function announceFocusedDate(){var focusedDate=this._currentlyFocusedDate(),announce=[];if(DatePickerHelper._dateEquals(focusedDate,new Date)){announce.push(this.i18n.today)}announce=announce.concat([this.i18n.weekdays[focusedDate.getDay()],focusedDate.getDate(),this.i18n.monthNames[focusedDate.getMonth()],focusedDate.getFullYear()]);if(this.showWeekNumbers&&1===this.i18n.firstDayOfWeek){announce.push(this.i18n.week);announce.push(DatePickerHelper._getISOWeekNumber(focusedDate))}this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:announce.join(" ")}}));return}/**
     * Focuses the cancel button
     */},{key:"focusCancel",value:function focusCancel(){this.$.cancelButton.focus()}/**
     * Scrolls the list to the given Date.
     */},{key:"scrollToDate",value:function scrollToDate(date,animate){this._scrollToPosition(this._differenceInMonths(date,this._originDate),animate)}},{key:"_focusedDateChanged",value:function _focusedDateChanged(focusedDate){this.revealDate(focusedDate)}},{key:"_isCurrentYear",value:function _isCurrentYear(yearsFromNow){return 0===yearsFromNow}},{key:"_isSelectedYear",value:function _isSelectedYear(yearsFromNow,selectedDate){if(selectedDate){return selectedDate.getFullYear()===this._originDate.getFullYear()+yearsFromNow}}/**
     * Scrolls the month and year scrollers enough to reveal the given date.
     */},{key:"revealDate",value:function revealDate(date){if(date){var diff=this._differenceInMonths(date,this._originDate),scrolledAboveViewport=this.$.monthScroller.position>diff,visibleItems=this.$.monthScroller.clientHeight/this.$.monthScroller.itemHeight,scrolledBelowViewport=this.$.monthScroller.position+visibleItems-1<diff;if(scrolledAboveViewport){this._scrollToPosition(diff,!0)}else if(scrolledBelowViewport){this._scrollToPosition(diff-visibleItems+1,!0)}}}},{key:"_onOverlayFocus",value:function _onOverlayFocus(){this._focused=!0}},{key:"_onOverlayBlur",value:function _onOverlayBlur(){this._focused=!1}},{key:"_initialPositionChanged",value:function _initialPositionChanged(initialPosition){this.scrollToDate(initialPosition)}},{key:"_repositionYearScroller",value:function _repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position);this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}},{key:"_repositionMonthScroller",value:function _repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth();this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}},{key:"_onMonthScroll",value:function _onMonthScroll(){this._repositionYearScroller();this._doIgnoreTaps()}},{key:"_onYearScroll",value:function _onYearScroll(){this._repositionMonthScroller();this._doIgnoreTaps()}},{key:"_onYearScrollTouchStart",value:function _onYearScrollTouchStart(){var _this43=this;this._notTapping=!1;setTimeout(function(){return _this43._notTapping=!0},300);this._repositionMonthScroller()}},{key:"_onMonthScrollTouchStart",value:function _onMonthScrollTouchStart(){this._repositionYearScroller()}},{key:"_doIgnoreTaps",value:function _doIgnoreTaps(){var _this44=this;this._ignoreTaps=!0;this._debouncer=_cureMe.Debouncer.debounce(this._debouncer,_cureMe.timeOut.after(300),function(){return _this44._ignoreTaps=!1})}},{key:"_formatDisplayed",value:function _formatDisplayed(date,formatDate,label){if(date){return formatDate(DatePickerHelper._extractDateParts(date))}else{return label}}},{key:"_onTodayTap",value:function _onTodayTap(){var today=new Date;if(.001>Math.abs(this.$.monthScroller.position-this._differenceInMonths(today,this._originDate))){// Select today only if the month scroller is positioned approximately
// at the beginning of the current month
this.selectedDate=today;this._close()}else{this._scrollToCurrentMonth()}}},{key:"_scrollToCurrentMonth",value:function _scrollToCurrentMonth(){if(this.focusedDate){this.focusedDate=new Date}this.scrollToDate(new Date,!0)}},{key:"_showClear",value:function _showClear(selectedDate){return!!selectedDate}},{key:"_onYearTap",value:function _onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){var scrollDelta=e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2),yearDelta=scrollDelta/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*yearDelta,!0)}}},{key:"_scrollToPosition",value:function _scrollToPosition(targetPosition,animate){var _this45=this;if(this._targetPosition!==void 0){this._targetPosition=targetPosition;return}if(!animate){this.$.monthScroller.position=targetPosition;this._targetPosition=void 0;this._repositionYearScroller();return}this._targetPosition=targetPosition;// http://gizma.com/easing/
var easingFunction=function easingFunction(t,b,c,d){t/=d/2;if(1>t){return c/2*t*t+b}t--;return-c/2*(t*(t-2)-1)+b},duration=animate?300:0,start=0,initialPosition=this.$.monthScroller.position,smoothScroll=function smoothScroll(timestamp){start=start||timestamp;var currentTime=timestamp-start;if(currentTime<duration){var currentPos=easingFunction(currentTime,initialPosition,_this45._targetPosition-initialPosition,duration);_this45.$.monthScroller.position=currentPos;window.requestAnimationFrame(smoothScroll)}else{_this45.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:_this45._targetPosition,oldPosition:initialPosition}}));_this45.$.monthScroller.position=_this45._targetPosition;_this45._targetPosition=void 0}setTimeout(_this45._repositionYearScroller.bind(_this45),1)};// Start the animation.
window.requestAnimationFrame(smoothScroll)}},{key:"_limit",value:function _limit(value,range){return Math.min(range.max,Math.max(range.min,value))}},{key:"_handleTrack",value:function _handleTrack(e){// Check if horizontal movement threshold (dx) not exceeded or
// scrolling fast vertically (ddy).
if(10>Math.abs(e.detail.dx)||10<Math.abs(e.detail.ddy)){return}// If we're flinging quickly -> start animating already.
if(Math.abs(e.detail.ddx)>this._yearScrollerWidth/3){this._toggleAnimateClass(!0)}var newTranslateX=this._translateX+e.detail.ddx;this._translateX=this._limit(newTranslateX,{min:0,max:this._yearScrollerWidth})}},{key:"_track",value:function _track(e){if(this._desktopMode){// No need to track for swipe gestures on desktop.
return}switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0);if(this._translateX>=this._yearScrollerWidth/2){this._closeYearScroller()}else{this._openYearScroller()}break;}}},{key:"_toggleAnimateClass",value:function _toggleAnimateClass(enable){if(enable){this.classList.add("animate")}else{this.classList.remove("animate")}}},{key:"_toggleYearScroller",value:function _toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}},{key:"_openYearScroller",value:function _openYearScroller(){this._translateX=0;this.setAttribute("years-visible","")}},{key:"_closeYearScroller",value:function _closeYearScroller(){this.removeAttribute("years-visible");this._translateX=this._yearScrollerWidth}},{key:"_isYearScrollerVisible",value:function _isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}},{key:"_translateXChanged",value:function _translateXChanged(x){if(!this._desktopMode){this.$.monthScroller.style.transform="translateX("+(x-this._yearScrollerWidth)+"px)";this.$.yearScroller.style.transform="translateX("+x+"px)"}}},{key:"_yearAfterXYears",value:function _yearAfterXYears(index){var result=new Date(this._originDate);result.setFullYear(parseInt(index)+this._originDate.getFullYear());return result.getFullYear()}},{key:"_yearAfterXMonths",value:function _yearAfterXMonths(months){return this._dateAfterXMonths(months).getFullYear()}},{key:"_dateAfterXMonths",value:function _dateAfterXMonths(months){var result=new Date(this._originDate);result.setDate(1);result.setMonth(parseInt(months)+this._originDate.getMonth());return result}},{key:"_differenceInMonths",value:function _differenceInMonths(date1,date2){var months=12*(date1.getFullYear()-date2.getFullYear());return months-date2.getMonth()+date1.getMonth()}},{key:"_differenceInYears",value:function _differenceInYears(date1,date2){return this._differenceInMonths(date1,date2)/12}},{key:"_clear",value:function _clear(){this.selectedDate=""}},{key:"_close",value:function _close(){var overlayContent=this.getRootNode().host,overlay=overlayContent?overlayContent.getRootNode().host:null;if(overlay){overlay.opened=!1}this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}},{key:"_cancel",value:function _cancel(){this.focusedDate=this.selectedDate;this._close()}},{key:"_preventDefault",value:function _preventDefault(e){e.preventDefault()}/**
     * Keyboard Navigation
     */},{key:"_eventKey",value:function _eventKey(e){for(var keys=["down","up","right","left","enter","space","home","end","pageup","pagedown","tab","esc"],i=0,k;i<keys.length;i++){k=keys[i];if(_cureMe.IronA11yKeysBehavior.keyboardEventMatchesKeys(e,k)){return k}}}},{key:"_onKeydown",value:function _onKeydown(e){var _this46=this,focus=this._currentlyFocusedDate(),isToday=0<=e.composedPath().indexOf(this.$.todayButton),isCancel=0<=e.composedPath().indexOf(this.$.cancelButton),isScroller=!isToday&&!isCancel,eventKey=this._eventKey(e);if("tab"===eventKey){// We handle tabs here and don't want to bubble up.
e.stopPropagation();var isFullscreen=this.hasAttribute("fullscreen"),isShift=e.shiftKey;if(isFullscreen){e.preventDefault()}else if(isShift&&isScroller||!isShift&&isCancel){// Return focus back to the input field
e.preventDefault();this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}else if(isShift&&isToday){// Browser returns focus back to the scrollable area. We need to set
// the focused flag, and move the scroll to focused date.
this._focused=!0;setTimeout(function(){return _this46.revealDate(_this46.focusedDate)},1)}else{// Browser moves the focus out of the scroller, hence focused flag must
// set to false.
this._focused=!1}}else if(eventKey){e.preventDefault();e.stopPropagation();switch(eventKey){case"down":this._moveFocusByDays(7);this.focus();break;case"up":this._moveFocusByDays(-7);this.focus();break;case"right":if(isScroller){this._moveFocusByDays(1)}break;case"left":if(isScroller){this._moveFocusByDays(-1)}break;case"enter":if(isScroller||isCancel){this._close()}else if(isToday){this._onTodayTap()}break;case"space":if(isCancel){this._close()}else if(isToday){this._onTodayTap()}else{var focusedDate=this.focusedDate;if(DatePickerHelper._dateEquals(focusedDate,this.selectedDate)){this.selectedDate="";this.focusedDate=focusedDate}else{this.selectedDate=focusedDate}}break;case"home":this._moveFocusInsideMonth(focus,"minDate");break;case"end":this._moveFocusInsideMonth(focus,"maxDate");break;case"pagedown":this._moveFocusByMonths(e.shiftKey?12:1);break;case"pageup":this._moveFocusByMonths(e.shiftKey?-12:-1);break;case"esc":this._cancel();break;}}}},{key:"_currentlyFocusedDate",value:function _currentlyFocusedDate(){return this.focusedDate||this.selectedDate||this.initialPosition||new Date}},{key:"_focusDate",value:function _focusDate(dateToFocus){this.focusedDate=dateToFocus;this._focusedMonthDate=dateToFocus.getDate()}},{key:"_focusClosestDate",value:function _focusClosestDate(focus){this._focusDate(DatePickerHelper._getClosestDate(focus,[this.minDate,this.maxDate]))}},{key:"_moveFocusByDays",value:function _moveFocusByDays(days){var focus=this._currentlyFocusedDate(),dateToFocus=new Date(0,0);dateToFocus.setFullYear(focus.getFullYear());dateToFocus.setMonth(focus.getMonth());dateToFocus.setDate(focus.getDate()+days);if(this._dateAllowed(dateToFocus,this.minDate,this.maxDate)){this._focusDate(dateToFocus)}else{if(this._dateAllowed(focus,this.minDate,this.maxDate)){// Move to min or max date
if(0<days){// down or right
this._focusDate(this.maxDate)}else{// up or left
this._focusDate(this.minDate)}}else{// Move to closest allowed date
this._focusClosestDate(focus)}}}},{key:"_moveFocusByMonths",value:function _moveFocusByMonths(months){var focus=this._currentlyFocusedDate(),dateToFocus=new Date(0,0);dateToFocus.setFullYear(focus.getFullYear());dateToFocus.setMonth(focus.getMonth()+months);var targetMonth=dateToFocus.getMonth();dateToFocus.setDate(this._focusedMonthDate||(this._focusedMonthDate=focus.getDate()));if(dateToFocus.getMonth()!==targetMonth){dateToFocus.setDate(0)}if(this._dateAllowed(dateToFocus,this.minDate,this.maxDate)){this.focusedDate=dateToFocus}else{if(this._dateAllowed(focus,this.minDate,this.maxDate)){// Move to min or max date
if(0<months){// pagedown
this._focusDate(this.maxDate)}else{// pageup
this._focusDate(this.minDate)}}else{// Move to closest allowed date
this._focusClosestDate(focus)}}}},{key:"_moveFocusInsideMonth",value:function _moveFocusInsideMonth(focusedDate,property){var dateToFocus=new Date(0,0);dateToFocus.setFullYear(focusedDate.getFullYear());if("minDate"===property){dateToFocus.setMonth(focusedDate.getMonth());dateToFocus.setDate(1)}else{dateToFocus.setMonth(focusedDate.getMonth()+1);dateToFocus.setDate(0)}if(this._dateAllowed(dateToFocus,this.minDate,this.maxDate)){this._focusDate(dateToFocus)}else{if(this._dateAllowed(focusedDate,this.minDate,this.maxDate)){// Move to minDate or maxDate
this._focusDate(this[property])}else{// Move to closest allowed date
this._focusClosestDate(focusedDate)}}}},{key:"_dateAllowed",value:function _dateAllowed(date,min,max){return(!min||date>=min)&&(!max||date<=max)}},{key:"_isTodayAllowed",value:function _isTodayAllowed(min,max){var today=new Date,todayMidnight=new Date(0,0);todayMidnight.setFullYear(today.getFullYear());todayMidnight.setMonth(today.getMonth());todayMidnight.setDate(today.getDate());return this._dateAllowed(todayMidnight,min,max)}},{key:"_stopPropagation",value:function _stopPropagation(e){e.stopPropagation()}}],[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject16_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-date-picker-overlay-content"}},{key:"properties",get:function get(){return{/**
       * The value for this element.
       */selectedDate:{type:Date,notify:!0},/**
       * Date value which is focused using keyboard.
       */focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,/**
       * Date which should be visible when there is no value selected.
       */initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,/**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */minDate:Date,/**
       * The latest date that can be selected. All later dates will be disabled.
       */maxDate:Date,_focused:Boolean,/**
       * Input label
       */label:String}}}]);return DatePickerOverlayContentElement}(ThemableMixin(ThemePropertyMixin((0,_cureMe.GestureEventListeners)(_cureMe.PolymerElement))));customElements.define(DatePickerOverlayContentElement.is,DatePickerOverlayContentElement);var DatePickerOverlayElement=/*#__PURE__*/function(_DisableUpgradeMixin2){babelHelpers.inherits(DatePickerOverlayElement,_DisableUpgradeMixin2);function DatePickerOverlayElement(){babelHelpers.classCallCheck(this,DatePickerOverlayElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DatePickerOverlayElement).apply(this,arguments))}babelHelpers.createClass(DatePickerOverlayElement,null,[{key:"is",get:function get(){return"vaadin-date-picker-overlay"}}]);return DatePickerOverlayElement}(DisableUpgradeMixin(OverlayElement));customElements.define(DatePickerOverlayElement.is,DatePickerOverlayElement);var $_documentContainer$e=document.createElement("template");$_documentContainer$e.innerHTML="<dom-module id=\"vaadin-text-field-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: \"\\2003\";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part=\"label\"]:empty {\n        display: none;\n      }\n\n      [part=\"input-field\"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part=\"input-field\"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part=\"input-field\"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part=\"input-field\"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part=\"value\"]::-ms-clear,\n      [part=\"input-field\"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part=\"clear-button\"] {\n        cursor: default;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: \"\u2715\";\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$e.content);var HOST_PROPS={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},PROP_TYPE={DEFAULT:"default",ACCESSIBLE:"accessible"},TextFieldMixin=function TextFieldMixin(subclass){return(/*#__PURE__*/function(_ControlStateMixin){babelHelpers.inherits(VaadinTextFieldMixin,_ControlStateMixin);function VaadinTextFieldMixin(){babelHelpers.classCallCheck(this,VaadinTextFieldMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinTextFieldMixin).apply(this,arguments))}babelHelpers.createClass(VaadinTextFieldMixin,[{key:"_createConstraintsObserver",value:function _createConstraintsObserver(){// This complex observer needs to be added dynamically here (instead of defining it above in the `get observers()`)
// so that it runs after complex observers of inheriting classes. Otherwise e.g. `_stepOrMinChanged()` observer of
// vaadin-number-field would run after this and the `min` and `step` properties would not yet be propagated to
// the `inputElement` when this runs.
this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}},{key:"_onInput",value:function _onInput(e){var _this47=this;if(this.__preventInput){e.stopImmediatePropagation();this.__preventInput=!1;return}if(this.preventInvalidInput){var input=this.inputElement;if(0<input.value.length&&!this.checkValidity()){input.value=this.value||"";// add input-prevented attribute for 200ms
this.setAttribute("input-prevented","");this._inputDebouncer=_cureMe.Debouncer.debounce(this._inputDebouncer,_cureMe.timeOut.after(200),function(){_this47.removeAttribute("input-prevented")});return}}if(!e.__fromClearButton){this.__userInput=!0}this.value=e.target.value}// NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
// of the clear button instead of setting display property for it depending on state.
},{key:"_stateChanged",value:function _stateChanged(disabled,readonly,clearButtonVisible,hasValue){if(!disabled&&!readonly&&clearButtonVisible&&hasValue){this.$.clearButton.removeAttribute("hidden")}else{this.$.clearButton.setAttribute("hidden",!0)}}},{key:"_onChange",value:function _onChange(e){if(this._valueClearing){return}// In the Shadow DOM, the `change` event is not leaked into the
// ancestor tree, so we must do this manually.
var changeEvent=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(changeEvent)}},{key:"_valueChanged",value:function _valueChanged(newVal,oldVal){// setting initial value to empty string, skip validation
if(""===newVal&&oldVal===void 0){return}if(""!==newVal&&null!=newVal){this.hasValue=!0}else{this.hasValue=!1}if(this.__userInput){this.__userInput=!1;return}else if(newVal!==void 0){this.inputElement.value=newVal}else{this.value=this.inputElement.value=""}if(this.invalid){this.validate()}}},{key:"_labelChanged",value:function _labelChanged(label){if(""!==label&&null!=label){this.setAttribute("has-label","")}else{this.removeAttribute("has-label")}}},{key:"_onSlotChange",value:function _onSlotChange(){var _this48=this,slotted=this.querySelector("".concat(this._slottedTagName,"[slot=\"").concat(this._slottedTagName,"\"]"));if(this.value){this.inputElement.value=this.value;this.validate()}if(slotted&&!this._slottedInput){this._validateSlottedValue(slotted);this._addInputListeners(slotted);this._addIEListeners(slotted);this._slottedInput=slotted}else if(!slotted&&this._slottedInput){this._removeInputListeners(this._slottedInput);this._removeIEListeners(this._slottedInput);this._slottedInput=void 0}Object.keys(PROP_TYPE).map(function(key){return PROP_TYPE[key]}).forEach(function(type){return _this48._propagateHostAttributes(HOST_PROPS[type].map(function(attr){return _this48[attr]}),type)})}},{key:"_hostPropsChanged",value:function _hostPropsChanged(){for(var _len=arguments.length,attributesValues=Array(_len),_key=0;_key<_len;_key++){attributesValues[_key]=arguments[_key]}this._propagateHostAttributes(attributesValues,PROP_TYPE.DEFAULT)}},{key:"_hostAccessiblePropsChanged",value:function _hostAccessiblePropsChanged(){for(var _len2=arguments.length,attributesValues=Array(_len2),_key2=0;_key2<_len2;_key2++){attributesValues[_key2]=arguments[_key2]}this._propagateHostAttributes(attributesValues,PROP_TYPE.ACCESSIBLE)}},{key:"_validateSlottedValue",value:function _validateSlottedValue(slotted){if(slotted.value!==this.value){console.warn("Please define value on the vaadin-text-field component!");slotted.value=""}}},{key:"_propagateHostAttributes",value:function _propagateHostAttributes(attributesValues,type){var _this49=this,input=this.inputElement,attributeNames=HOST_PROPS[type];if("accessible"===type){attributeNames.forEach(function(attr,index){_this49._setOrToggleAttribute(attr,attributesValues[index],input);_this49._setOrToggleAttribute("aria-".concat(attr),attributesValues[index],input)})}else{attributeNames.forEach(function(attr,index){_this49._setOrToggleAttribute(attr,attributesValues[index],input)})}}},{key:"_setOrToggleAttribute",value:function _setOrToggleAttribute(name,value,node){if(!name||!node){return}if(value){node.setAttribute(name,"boolean"===typeof value?"":value)}else{node.removeAttribute(name)}}},{key:"_constraintsChanged",value:function _constraintsChanged(required,minlength,maxlength,pattern){if(!this.invalid){return}if(!required&&!minlength&&!maxlength&&!pattern){this.invalid=!1}else{this.validate()}}/**
     * Returns true if the current input value satisfies all constraints (if any)
     * @returns {boolean}
     */},{key:"checkValidity",value:function checkValidity(){// Note (Yuriy): `__forceCheckValidity` is used in containing components (i.e. `vaadin-date-picker`) in order
// to force the checkValidity instead of returning the previous invalid state.
if(this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity){return this.inputElement.checkValidity()}else{return!this.invalid}}},{key:"_addInputListeners",value:function _addInputListeners(node){node.addEventListener("input",this._boundOnInput);node.addEventListener("change",this._boundOnChange);node.addEventListener("blur",this._boundOnBlur);node.addEventListener("focus",this._boundOnFocus);node.addEventListener("paste",this._boundOnPaste);node.addEventListener("drop",this._boundOnDrop);node.addEventListener("beforeinput",this._boundOnBeforeInput)}},{key:"_removeInputListeners",value:function _removeInputListeners(node){node.removeEventListener("input",this._boundOnInput);node.removeEventListener("change",this._boundOnChange);node.removeEventListener("blur",this._boundOnBlur);node.removeEventListener("focus",this._boundOnFocus);node.removeEventListener("paste",this._boundOnPaste);node.removeEventListener("drop",this._boundOnDrop);node.removeEventListener("beforeinput",this._boundOnBeforeInput)}},{key:"ready",value:function ready(){var _this50=this;babelHelpers.get(babelHelpers.getPrototypeOf(VaadinTextFieldMixin.prototype),"ready",this).call(this);this._createConstraintsObserver();this._boundOnInput=this._onInput.bind(this);this._boundOnChange=this._onChange.bind(this);this._boundOnBlur=this._onBlur.bind(this);this._boundOnFocus=this._onFocus.bind(this);this._boundOnPaste=this._onPaste.bind(this);this._boundOnDrop=this._onDrop.bind(this);this._boundOnBeforeInput=this._onBeforeInput.bind(this);var defaultInput=this.shadowRoot.querySelector("[part=\"value\"]");this._slottedInput=this.querySelector("".concat(this._slottedTagName,"[slot=\"").concat(this._slottedTagName,"\"]"));this._addInputListeners(defaultInput);this._addIEListeners(defaultInput);if(this._slottedInput){this._addIEListeners(this._slottedInput);this._addInputListeners(this._slottedInput)}this.shadowRoot.querySelector("[name=\"input\"], [name=\"textarea\"]").addEventListener("slotchange",this._onSlotChange.bind(this));if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)){this.updateStyles()}this.$.clearButton.addEventListener("mousedown",function(){return _this50._valueClearing=!0});this.$.clearButton.addEventListener("mouseleave",function(){return _this50._valueClearing=!1});this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this));this.addEventListener("keydown",this._onKeyDown.bind(this));var uniqueId=TextFieldMixin._uniqueId=1+TextFieldMixin._uniqueId||0;this._errorId="".concat(this.constructor.is,"-error-").concat(uniqueId);this._labelId="".concat(this.constructor.is,"-label-").concat(uniqueId);this._inputId="".concat(this.constructor.is,"-input-").concat(uniqueId);// Lumo theme defines a max-height transition for the "error-message"
// part on invalid state change.
this.shadowRoot.querySelector("[part=\"error-message\"]").addEventListener("transitionend",function(){_this50.__observeOffsetHeight()})}/**
     * Returns true if `value` is valid.
     * `<iron-form>` uses this to check the validity for all its elements.
     *
     * @return {boolean} True if the value is valid.
     */},{key:"validate",value:function validate(){return!(this.invalid=!this.checkValidity())}},{key:"clear",value:function clear(){this.value=""}},{key:"_onBlur",value:function _onBlur(){this.validate()}},{key:"_onFocus",value:function _onFocus(){var _this51=this;if(this.autoselect){this.inputElement.select();// iOS 9 workaround: https://stackoverflow.com/a/7436574
setTimeout(function(){try{_this51.inputElement.setSelectionRange(0,9999)}catch(e){// The workaround may cause errors on different input types.
// Needs to be suppressed. See https://github.com/vaadin/flow/issues/6070
}})}}},{key:"_onClearButtonClick",value:function _onClearButtonClick(e){e.preventDefault();// NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.
this.inputElement.focus();this.clear();this._valueClearing=!1;if(navigator.userAgent.match(/Trident/)){// Disable IE input" event prevention here, we want the input event from
// below to propagate normally.
this.__preventInput=!1}var inputEvent=new Event("input",{bubbles:!0,composed:!0});inputEvent.__fromClearButton=!0;var changeEvent=new Event("change",{bubbles:!this._slottedInput});changeEvent.__fromClearButton=!0;this.inputElement.dispatchEvent(inputEvent);this.inputElement.dispatchEvent(changeEvent)}},{key:"_onKeyDown",value:function _onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){var dispatchChange=!!this.value;this.clear();dispatchChange&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}if(this._enabledCharPattern&&!this.__shouldAcceptKey(e)){e.preventDefault()}}},{key:"__shouldAcceptKey",value:function __shouldAcceptKey(event){return event.metaKey||event.ctrlKey||!event.key// allow typing anything if event.key is not supported
||1!==event.key.length// allow "Backspace", "ArrowLeft" etc.
||this.__enabledCharRegExp.test(event.key)}},{key:"_onPaste",value:function _onPaste(e){if(this._enabledCharPattern){var pastedText=(e.clipboardData||window.clipboardData).getData("text");if(!this.__enabledTextRegExp.test(pastedText)){e.preventDefault()}}}},{key:"_onDrop",value:function _onDrop(e){if(this._enabledCharPattern){var draggedText=e.dataTransfer.getData("text");if(!this.__enabledTextRegExp.test(draggedText)){e.preventDefault()}}}},{key:"_onBeforeInput",value:function _onBeforeInput(e){// The `beforeinput` event covers all the cases for `_enabledCharPattern`: keyboard, pasting and dropping,
// but it is still experimental technology so we can't rely on it. It's used here just as an additional check,
// because it seems to be the only way to detect and prevent specific keys on mobile devices. See issue #429.
if(this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)){e.preventDefault()}}},{key:"__enabledCharPatternChanged",value:function __enabledCharPatternChanged(_enabledCharPattern){this.__enabledCharRegExp=_enabledCharPattern&&new RegExp("^"+_enabledCharPattern+"$");this.__enabledTextRegExp=_enabledCharPattern&&new RegExp("^"+_enabledCharPattern+"*$")}},{key:"_addIEListeners",value:function _addIEListeners(node){var _this52=this;/* istanbul ignore if */if(navigator.userAgent.match(/Trident/)){// IE11 dispatches `input` event in following cases:
// - focus or blur, when placeholder attribute is set
// - placeholder attribute value changed
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
this._shouldPreventInput=function(){_this52.__preventInput=!0;requestAnimationFrame(function(){_this52.__preventInput=!1})};node.addEventListener("focusin",this._shouldPreventInput);node.addEventListener("focusout",this._shouldPreventInput);this._createPropertyObserver("placeholder",this._shouldPreventInput)}}},{key:"_removeIEListeners",value:function _removeIEListeners(node){/* istanbul ignore if */if(navigator.userAgent.match(/Trident/)){node.removeEventListener("focusin",this._shouldPreventInput);node.removeEventListener("focusout",this._shouldPreventInput)}}},{key:"_getActiveErrorId",value:function _getActiveErrorId(invalid,errorMessage,errorId){this._setOrToggleAttribute("aria-describedby",errorMessage&&invalid?errorId:void 0,this.focusElement)}},{key:"_getActiveLabelId",value:function _getActiveLabelId(label,_labelId,_inputId){var ids=_inputId;if(label){ids="".concat(_labelId," ").concat(_inputId)}this.focusElement.setAttribute("aria-labelledby",ids)}},{key:"_getErrorMessageAriaHidden",value:function _getErrorMessageAriaHidden(invalid,errorMessage,errorId){return(!(errorMessage&&invalid?errorId:void 0)).toString()}},{key:"_dispatchIronResizeEventIfNeeded",value:function _dispatchIronResizeEventIfNeeded(sizePropertyName,value){var previousSizePropertyName="__previous"+sizePropertyName;if(this[previousSizePropertyName]!==void 0&&this[previousSizePropertyName]!==value){this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0}))}this[previousSizePropertyName]=value}},{key:"__observeOffsetHeight",value:function __observeOffsetHeight(){this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}/**
     * @protected
     */},{key:"attributeChangedCallback",value:function attributeChangedCallback(prop,oldVal,newVal){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinTextFieldMixin.prototype),"attributeChangedCallback",this).call(this,prop,oldVal,newVal);// Needed until Edge has CSS Custom Properties (present in Edge Preview)
/* istanbul ignore if */if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)&&/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)){this.updateStyles()}// Safari has an issue with repainting shadow root element styles when a host attribute changes.
// Need this workaround (toggle any inline css property on and off) until the issue gets fixed.
var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);/* istanbul ignore if */if(isSafari&&this.root){var WEBKIT_PROPERTY="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(function(el){el.style[WEBKIT_PROPERTY]="visible";el.style[WEBKIT_PROPERTY]=""})}}/**
     * Fired when the user commits a value change.
     *
     * @event change
     */ /**
         * Fired when the value is changed by the user: on every typing keystroke,
         * and the value is cleared using the clear button.
         *
         * @event input
         */ /**
             * Fired when the size of the element changes.
             *
             * @event iron-resize
             */},{key:"focusElement",get:function get(){if(!this.shadowRoot){return}var slotted=this.querySelector("".concat(this._slottedTagName,"[slot=\"").concat(this._slottedTagName,"\"]"));if(slotted){return slotted}return this.shadowRoot.querySelector("[part=\"value\"]")}/**
     * @private
     */},{key:"inputElement",get:function get(){return this.focusElement}},{key:"_slottedTagName",get:function get(){return"input"}}],[{key:"properties",get:function get(){return{/**
       * Whether the value of the control can be automatically completed by the browser.
       * List of available options at:
       * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
       */autocomplete:{type:String},/**
       * This is a property supported by Safari that is used to control whether
       * autocorrection should be enabled when the user is entering/editing the text.
       * Possible values are:
       * on: Enable autocorrection.
       * off: Disable autocorrection.
       */autocorrect:{type:String},/**
       * This is a property supported by Safari and Chrome that is used to control whether
       * autocapitalization should be enabled when the user is entering/editing the text.
       * Possible values are:
       * characters: Characters capitalization.
       * words: Words capitalization.
       * sentences: Sentences capitalization.
       * none: No capitalization.
       */autocapitalize:{type:String},/**
       * Specify that the value should be automatically selected when the field gains focus.
       */autoselect:{type:Boolean,value:!1},/**
       * Set to true to display the clear icon which clears the input.
       */clearButtonVisible:{type:Boolean,value:!1},/**
       * Error to show when the input value is invalid.
       */errorMessage:{type:String,value:""},/**
       * Object with translated strings used for localization. Has
       * the following structure and default values:
       *
       * ```
       * {
       *   // Translation of the clear icon button accessible label
       *   clear: 'Clear'
       * }
       * ```
       */i18n:{type:Object,value:function value(){return{clear:"Clear"}}},/**
       * String used for the label element.
       */label:{type:String,value:"",observer:"_labelChanged"},/**
       * Maximum number of characters (in Unicode code points) that the user can enter.
       */maxlength:{type:Number},/**
       * Minimum number of characters (in Unicode code points) that the user can enter.
       */minlength:{type:Number},/**
       * The name of the control, which is submitted with the form data.
       */name:{type:String},/**
       * A hint to the user of what can be entered in the control.
       */placeholder:{type:String},/**
       * This attribute indicates that the user cannot modify the value of the control.
       */readonly:{type:Boolean,reflectToAttribute:!0},/**
       * Specifies that the user must fill in a value.
       */required:{type:Boolean,reflectToAttribute:!0},/**
       * The initial value of the control.
       * It can be used for two-way data binding.
       */value:{type:String,value:"",observer:"_valueChanged",notify:!0},/**
       * This property is set to true when the control value is invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},/**
       * Specifies that the text field has value.
       */hasValue:{type:Boolean,reflectToAttribute:!0},/**
       * When set to true, user is prevented from typing a value that
       * conflicts with the given `pattern`.
       */preventInvalidInput:{type:Boolean},/**
       * A pattern matched against individual characters the user inputs.
       * When set, the field will prevent:
       * - `keyDown` events if the entered key doesn't match `/^_enabledCharPattern$/`
       * - `paste` events if the pasted text doesn't match `/^_enabledCharPattern*$/`
       * - `drop` events if the dropped text doesn't match `/^_enabledCharPattern*$/`
       *
       * For example, to enable entering only numbers and minus signs,
       * `_enabledCharPattern = "[\\d-]"`
       */_enabledCharPattern:String,_labelId:String,_errorId:String,_inputId:String}}},{key:"observers",get:function get(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+HOST_PROPS.default.join(", ")+")","_hostAccessiblePropsChanged("+HOST_PROPS.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label)","__enabledCharPatternChanged(_enabledCharPattern)"]}}]);return VaadinTextFieldMixin}(ControlStateMixin(subclass)))};_exports.TextFieldMixin=TextFieldMixin;var vaadinTextFieldMixin={TextFieldMixin:TextFieldMixin};_exports.$vaadinTextFieldMixin=vaadinTextFieldMixin;var TextFieldElement=/*#__PURE__*/function(_ElementMixin2){babelHelpers.inherits(TextFieldElement,_ElementMixin2);function TextFieldElement(){babelHelpers.classCallCheck(this,TextFieldElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TextFieldElement).apply(this,arguments))}babelHelpers.createClass(TextFieldElement,null,[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject17_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-text-field"}},{key:"version",get:function get(){return"2.5.4"}},{key:"properties",get:function get(){return{/**
       * Identifies a list of pre-defined options to suggest to the user.
       * The value must be the id of a <datalist> element in the same document.
       */list:{type:String},/**
       * A regular expression that the value is checked against.
       * The pattern must match the entire value, not just some subset.
       */pattern:{type:String},/**
       * The text usually displayed in a tooltip popup when the mouse is over the field.
       */title:{type:String}}}}]);return TextFieldElement}(ElementMixin(TextFieldMixin(ThemableMixin(_cureMe.PolymerElement))));_exports.TextFieldElement=TextFieldElement;customElements.define(TextFieldElement.is,TextFieldElement);var vaadinTextField={TextFieldElement:TextFieldElement};_exports.$vaadinTextField=vaadinTextField;var DatePickerElement=/*#__PURE__*/function(_ElementMixin3){babelHelpers.inherits(DatePickerElement,_ElementMixin3);function DatePickerElement(){babelHelpers.classCallCheck(this,DatePickerElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DatePickerElement).apply(this,arguments))}babelHelpers.createClass(DatePickerElement,[{key:"ready",value:function ready(){var _this53=this;babelHelpers.get(babelHelpers.getPrototypeOf(DatePickerElement.prototype),"ready",this).call(this);// In order to have synchronized invalid property, we need to use the same validate logic.
(0,_cureMe.afterNextRender)(this,function(){return _this53._inputElement.validate=function(){}});// FIXME(platosha): dispatch `input` event on
// <vaadin-text-field> clear button
// https://github.com/vaadin/vaadin-text-field/issues/347
this._inputElement.addEventListener("change",function(){if(""===_this53._inputElement.value){_this53.__dispatchChange=!0;_this53.value="";_this53.validate();_this53.__dispatchChange=!1}})}},{key:"_onVaadinOverlayClose",value:function _onVaadinOverlayClose(e){if(this._openedWithFocusRing&&this.hasAttribute("focused")){this.focusElement.setAttribute("focus-ring","")}else if(!this.hasAttribute("focused")){this.focusElement.blur()}if(e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)){e.preventDefault()}}},{key:"_toggle",value:function _toggle(e){e.stopPropagation();this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}},{key:"_input",value:function _input(){return this.$.input}},{key:"_getAriaExpanded",value:function _getAriaExpanded(opened){return(!!opened).toString()}/**
     * Focussable element used by vaadin-control-state-mixin
     */},{key:"_setClearButtonLabel",value:function _setClearButtonLabel(i18nClear){// FIXME(platosha): expose i18n API in <vaadin-text-field>
// https://github.com/vaadin/vaadin-text-field/issues/348
this._inputElement.shadowRoot.querySelector("[part=\"clear-button\"]").setAttribute("aria-label",i18nClear)}},{key:"_inputValue",set:function set(value){this._inputElement.value=value},get:function get(){return this._inputElement.value}},{key:"focusElement",get:function get(){return this._input()||this}}],[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject18_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-date-picker"}},{key:"version",get:function get(){return"4.0.7"}},{key:"properties",get:function get(){return{/**
       * Set to true to display the clear icon which clears the input.
       */clearButtonVisible:{type:Boolean,value:!1},/**
       * Set to true to disable this element.
       */disabled:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * The error message to display when the input is invalid.
       */errorMessage:String,/**
       * A placeholder string in addition to the label. If this is set, the label will always float.
       */placeholder:String,/**
       * Set to true to make this element read-only.
       */readonly:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * This property is set to true when the control value invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_userInputValue:String}}},{key:"observers",get:function get(){return["_userInputValueChanged(_userInputValue)","_setClearButtonLabel(i18n.clear)"]}}]);return DatePickerElement}(ElementMixin(ControlStateMixin(ThemableMixin(ThemePropertyMixin(DatePickerMixin((0,_cureMe.GestureEventListeners)(_cureMe.PolymerElement)))))));_exports.DatePickerElement=DatePickerElement;customElements.define(DatePickerElement.is,DatePickerElement);var vaadinDatePicker={DatePickerElement:DatePickerElement};_exports.$vaadinDatePicker=vaadinDatePicker;var $_documentContainer$f=(0,_cureMe.html)(_templateObject19_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$f.content);var $_documentContainer$g=(0,_cureMe.html)(_templateObject20_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$g.content);var $_documentContainer$h=document.createElement("template");$_documentContainer$h.innerHTML="<dom-module id=\"lumo-field-button\">\n  <template>\n    <style>\n      [part$=\"button\"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$=\"button\"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$=\"button\"],\n      :host([readonly]) [part$=\"button\"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$=\"button\"]::before {\n        font-family: \"lumo-icons\";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$h.content);var $_documentContainer$i=document.createElement("template");$_documentContainer$i.innerHTML="<dom-module id=\"lumo-required-field\">\n  <template>\n    <style>\n      [part=\"label\"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part=\"label\"] {\n        padding-right: 1em;\n      }\n\n      [part=\"label\"]::after {\n        content: var(--lumo-required-field-indicator, \"\u2022\");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part=\"label\"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part=\"label\"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part=\"error-message\"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn\u2019t reserve space when there\u2019s no error message */\n      [part=\"error-message\"]:not(:empty)::before,\n      [part=\"error-message\"]:not(:empty)::after {\n        content: \"\";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part=\"error-message\"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir=\"rtl\"]) [part=\"label\"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir=\"rtl\"]) [part=\"label\"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir=\"rtl\"]) [part=\"label\"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir=\"rtl\"]) [part=\"error-message\"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$i.content);var $_documentContainer$j=(0,_cureMe.html)(_templateObject21_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$j.content);var $_documentContainer$k=(0,_cureMe.html)(_templateObject22_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$k.content);var $_documentContainer$l=(0,_cureMe.html)(_templateObject23_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$l.content);var ListMixin=function ListMixin(superClass){return(/*#__PURE__*/function(_superClass7){babelHelpers.inherits(VaadinListMixin,_superClass7);function VaadinListMixin(){babelHelpers.classCallCheck(this,VaadinListMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinListMixin).apply(this,arguments))}babelHelpers.createClass(VaadinListMixin,[{key:"ready",value:function ready(){var _this54=this;babelHelpers.get(babelHelpers.getPrototypeOf(VaadinListMixin.prototype),"ready",this).call(this);this.addEventListener("keydown",function(e){return _this54._onKeydown(e)});this.addEventListener("click",function(e){return _this54._onClick(e)});this._observer=new _cureMe.FlattenedNodesObserver(this,function(info){_this54._setItems(_this54._filterItems(Array.from(_this54.children)))})}},{key:"_enhanceItems",value:function _enhanceItems(items,orientation,selected,disabled){if(!disabled){if(items){this.setAttribute("aria-orientation",orientation||"vertical");this.items.forEach(function(item){orientation?item.setAttribute("orientation",orientation):item.removeAttribute("orientation");item.updateStyles()});this._setFocusable(selected);var itemToSelect=items[selected];items.forEach(function(item){return item.selected=item===itemToSelect});if(itemToSelect&&!itemToSelect.disabled){this._scrollToItem(selected)}}}}},{key:"_filterItems",value:function _filterItems(array){return array.filter(function(e){return e._hasVaadinItemMixin})}},{key:"_onClick",value:function _onClick(event){if(event.metaKey||event.shiftKey||event.ctrlKey||event.defaultPrevented){return}var item=this._filterItems(event.composedPath())[0],idx;if(item&&!item.disabled&&0<=(idx=this.items.indexOf(item))){this.selected=idx}}},{key:"_searchKey",value:function _searchKey(currentIdx,key){var _this55=this;this._searchReset=_cureMe.Debouncer.debounce(this._searchReset,_cureMe.timeOut.after(500),function(){return _this55._searchBuf=""});this._searchBuf+=key.toLowerCase();var increment=1,condition=function condition(item){return!item.disabled&&0===item.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(_this55._searchBuf)};if(!this.items.some(function(item){return 0===item.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(_this55._searchBuf)})){this._searchBuf=key.toLowerCase()}var idx=1===this._searchBuf.length?currentIdx+1:currentIdx;return this._getAvailableIndex(idx,increment,condition)}},{key:"_onKeydown",value:function _onKeydown(event){if(event.metaKey||event.ctrlKey){return}// IE names for arrows do not include the Arrow prefix
var key=event.key.replace(/^Arrow/,""),currentIdx=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(key)&&1===key.length){var _idx=this._searchKey(currentIdx,key);if(0<=_idx){this._focus(_idx)}return}var condition=function condition(item){return!item.disabled},idx,increment;if(this._vertical&&"Up"===key||!this._vertical&&"Left"===key){increment=-1;idx=currentIdx-1}else if(this._vertical&&"Down"===key||!this._vertical&&"Right"===key){increment=1;idx=currentIdx+1}else if("Home"===key){increment=1;idx=0}else if("End"===key){increment=-1;idx=this.items.length-1}idx=this._getAvailableIndex(idx,increment,condition);if(0<=idx){this._focus(idx);event.preventDefault()}}},{key:"_getAvailableIndex",value:function _getAvailableIndex(idx,increment,condition){for(var totalItems=this.items.length,i=0;"number"==typeof idx&&i<totalItems;i++,idx+=increment||1){if(0>idx){idx=totalItems-1}else if(idx>=totalItems){idx=0}var item=this.items[idx];if(condition(item)){return idx}}return-1}},{key:"_setFocusable",value:function _setFocusable(idx){idx=this._getAvailableIndex(idx,1,function(item){return!item.disabled});var item=this.items[idx]||this.items[0];this.items.forEach(function(e){return e.tabIndex=e===item?0:-1})}},{key:"_focus",value:function _focus(idx){var item=this.items[idx];this.items.forEach(function(e){return e.focused=e===item});this._setFocusable(idx);this._scrollToItem(idx);item.focus()}},{key:"focus",value:function focus(){// In initialisation (e.g vaadin-select) observer might not been run yet.
this._observer&&this._observer.flush();var firstItem=this.querySelector("[tabindex=\"0\"]")||(this.items?this.items[0]:null);firstItem&&firstItem.focus()}/* @protected */},{key:"_scrollToItem",// Returning scroller element of the component
// Scroll the container to have the next item by the edge of the viewport
value:function _scrollToItem(idx){var item=this.items[idx];if(!item){return}var props=this._vertical?["top","bottom"]:["left","right"],scrollerRect=this._scrollerElement.getBoundingClientRect(),nextItemRect=(this.items[idx+1]||item).getBoundingClientRect(),prevItemRect=(this.items[idx-1]||item).getBoundingClientRect(),scrollDistance=0;if(nextItemRect[props[1]]>=scrollerRect[props[1]]){scrollDistance=nextItemRect[props[1]]-scrollerRect[props[1]]}else if(prevItemRect[props[0]]<=scrollerRect[props[0]]){scrollDistance=prevItemRect[props[0]]-scrollerRect[props[0]]}this._scroll(scrollDistance)}/* @protected */},{key:"_scroll",value:function _scroll(pixels){this._scrollerElement["scroll"+(this._vertical?"Top":"Left")]+=pixels}/**
     * Fired when the selection is changed.
     * Not fired when used in `multiple` selection mode.
     *
     * @event selected-changed
     * @param {Object} detail
     * @param {Object} detail.value the index of the item selected in the items array.
     */},{key:"focused",get:function get(){return this.getRootNode().activeElement}},{key:"_scrollerElement",get:function get(){}},{key:"_vertical",get:function get(){return"horizontal"!==this.orientation}}],[{key:"properties",get:function get(){return{/**
       * Used for mixin detection because `instanceof` does not work with mixins.
       */_hasVaadinListMixin:{value:!0},/**
       * The index of the item selected in the items array.
       * Note: Not updated when used in `multiple` selection mode.
       */selected:{type:Number,reflectToAttribute:!0,notify:!0},/**
       * Define how items are disposed in the dom.
       * Possible values are: `horizontal|vertical`.
       * It also changes navigation keys from left/right to up/down.
       */orientation:{type:String,reflectToAttribute:!0,value:""},/**
       * The list of items from which a selection can be made.
       * It is populated from the elements passed to the light DOM,
       * and updated dynamically when adding or removing items.
       *
       * The item elements must implement `Vaadin.ItemMixin`.
       *
       * Note: unlike `<vaadin-combo-box>`, this property is read-only,
       * so if you want to provide items by iterating array of data,
       * you have to use `dom-repeat` and place it to the light DOM.
       */items:{type:Array,readOnly:!0,notify:!0},/**
       * The search buffer for the keyboard selection feature.
       */_searchBuf:{type:String,value:""}}}},{key:"observers",get:function get(){return["_enhanceItems(items, orientation, selected, disabled)"]}}]);return VaadinListMixin}(superClass))};_exports.ListMixin=ListMixin;var vaadinListMixin={ListMixin:ListMixin};_exports.$vaadinListMixin=vaadinListMixin;var MultiSelectListMixin=function MultiSelectListMixin(superClass){return(/*#__PURE__*/function(_ListMixin){babelHelpers.inherits(VaadinMultiSelectListMixin,_ListMixin);function VaadinMultiSelectListMixin(){babelHelpers.classCallCheck(this,VaadinMultiSelectListMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinMultiSelectListMixin).apply(this,arguments))}babelHelpers.createClass(VaadinMultiSelectListMixin,[{key:"ready",value:function ready(){var _this56=this;// Should be attached before click listener in list-mixin
this.addEventListener("click",function(e){return _this56._onMultipleClick(e)});babelHelpers.get(babelHelpers.getPrototypeOf(VaadinMultiSelectListMixin.prototype),"ready",this).call(this)}},{key:"_enhanceMultipleItems",value:function _enhanceMultipleItems(items,multiple,selected,selectedValues){if(!items||!multiple){return}if(selectedValues){var selectedItems=selectedValues.map(function(selectedId){return items[selectedId]});items.forEach(function(item){return item.selected=-1!==selectedItems.indexOf(item)})}var lastSelectedItem=this.selectedValues.slice(-1)[0];if(lastSelectedItem&&!lastSelectedItem.disabled){this._scrollToItem(lastSelectedItem)}}},{key:"_onMultipleClick",value:function _onMultipleClick(event){var item=this._filterItems(event.composedPath())[0],idx=item&&!item.disabled?this.items.indexOf(item):-1;if(0>idx||!this.multiple){return}event.preventDefault();if(-1!==this.selectedValues.indexOf(idx)){this.selectedValues=this.selectedValues.filter(function(v){return v!==idx})}else{this.selectedValues=this.selectedValues.concat(idx)}}},{key:"_multipleChanged",value:function _multipleChanged(value,oldValue){// Changing from multiple to single selection, clear selection.
if(!value&&oldValue){this.selectedValues=[];this.items.forEach(function(item){return item.selected=!1})}// Changing from single to multiple selection, add selected to selectedValues.
if(value&&!oldValue&&this.selected!==void 0){this.push("selectedValues",this.selected);this.selected=void 0}}/**
     * Fired when the selection is changed.
     * Not fired in single selection mode.
     *
     * @event selected-values-changed
     * @param {Object} detail
     * @param {Object} detail.value the array of indexes of the items selected in the items array.
     */}],[{key:"properties",get:function get(){return{/**
       * Specifies that multiple options can be selected at once.
       */multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},/**
       * Array of indexes of the items selected in the items array
       * Note: Not updated when used in single selection mode.
       */selectedValues:{type:Array,notify:!0,value:function value(){return[]}}}}},{key:"observers",get:function get(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}}]);return VaadinMultiSelectListMixin}(ListMixin(superClass)))};_exports.MultiSelectListMixin=MultiSelectListMixin;var vaadinMultiSelectListMixin={MultiSelectListMixin:MultiSelectListMixin};_exports.$vaadinMultiSelectListMixin=vaadinMultiSelectListMixin;var ListBoxElement=/*#__PURE__*/function(_ElementMixin4){babelHelpers.inherits(ListBoxElement,_ElementMixin4);babelHelpers.createClass(ListBoxElement,null,[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject24_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-list-box"}},{key:"version",get:function get(){return"1.2.0"}},{key:"properties",get:function get(){return{// We don't need to define this property since super default is vertical,
// but we don't want it to be modified, or be shown in the API docs.
/** @private */orientation:{readOnly:!0}}}}]);function ListBoxElement(){var _this57;babelHelpers.classCallCheck(this,ListBoxElement);_this57=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ListBoxElement).call(this));/** @protected */_this57.focused;return _this57}babelHelpers.createClass(ListBoxElement,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(ListBoxElement.prototype),"ready",this).call(this);this.setAttribute("role","list");setTimeout(this._checkImport.bind(this),2e3)}},{key:"_checkImport",value:function _checkImport(){var item=this.querySelector("vaadin-item");if(item&&!babelHelpers.instanceof(item,_cureMe.PolymerElement)){console.warn("Make sure you have imported the vaadin-item element.")}}},{key:"_scrollerElement",get:function get(){return this.shadowRoot.querySelector("[part=\"items\"]")}}]);return ListBoxElement}(ElementMixin(MultiSelectListMixin(ThemableMixin(_cureMe.PolymerElement))));_exports.ListBoxElement=ListBoxElement;customElements.define(ListBoxElement.is,ListBoxElement);var vaadinListBox={ListBoxElement:ListBoxElement};_exports.$vaadinListBox=vaadinListBox;var $_documentContainer$m=(0,_cureMe.html)(_templateObject25_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$m.content);var $_documentContainer$n=document.createElement("template");$_documentContainer$n.innerHTML="<dom-module id=\"vaadin-select-overlay-styles\" theme-for=\"vaadin-select-overlay\">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$n.content);/**
                                                          * The overlay element.
                                                          *
                                                          * ### Styling
                                                          *
                                                          * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
                                                          * for `<vaadin-select-overlay>` parts.
                                                          *
                                                          * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
                                                          *
                                                          * @memberof Vaadin
                                                          */var SelectOverlayElement=/*#__PURE__*/function(_OverlayElement2){babelHelpers.inherits(SelectOverlayElement,_OverlayElement2);function SelectOverlayElement(){babelHelpers.classCallCheck(this,SelectOverlayElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SelectOverlayElement).apply(this,arguments))}babelHelpers.createClass(SelectOverlayElement,null,[{key:"is",get:function get(){return"vaadin-select-overlay"}}]);return SelectOverlayElement}(OverlayElement);customElements.define(SelectOverlayElement.is,SelectOverlayElement);var memoizedTemplate,SelectTextFieldElement=/*#__PURE__*/function(_TextFieldElement){babelHelpers.inherits(SelectTextFieldElement,_TextFieldElement);function SelectTextFieldElement(){babelHelpers.classCallCheck(this,SelectTextFieldElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SelectTextFieldElement).apply(this,arguments))}babelHelpers.createClass(SelectTextFieldElement,[{key:"focusElement",get:function get(){return this.shadowRoot.querySelector("[part=input-field]")}},{key:"inputElement",get:function get(){return this.shadowRoot.querySelector("input")}}],[{key:"is",get:function get(){return"vaadin-select-text-field"}},{key:"template",get:function get(){// Check if text-field is using slotted input
if(babelHelpers.get(babelHelpers.getPrototypeOf(SelectTextFieldElement),"template",this).content.querySelector("slot[name=\"input\"]")){return babelHelpers.get(babelHelpers.getPrototypeOf(SelectTextFieldElement),"template",this)}if(!memoizedTemplate){// Clone the superclass template
memoizedTemplate=babelHelpers.get(babelHelpers.getPrototypeOf(SelectTextFieldElement),"template",this).cloneNode(!0);// Create a slot for the value element
var slot=document.createElement("slot");slot.setAttribute("name","value");// Insert the slot before the text-field
var input=memoizedTemplate.content.querySelector("input");input.parentElement.replaceChild(slot,input);slot.appendChild(input)}return memoizedTemplate}}]);return SelectTextFieldElement}(TextFieldElement);/**
                        * The text-field element.
                        *
                        * ### Styling
                        *
                        * See [`<vaadin-text-field>` documentation](https://github.com/vaadin/vaadin-text-field/blob/master/src/vaadin-text-field.html)
                        * for `<vaadin-select-text-field>` parts and available slots (prefix, suffix etc.)
                        *
                        * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
                        *
                        * @memberof Vaadin
                        */customElements.define(SelectTextFieldElement.is,SelectTextFieldElement);var $_documentContainer$o=document.createElement("template");$_documentContainer$o.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: \"vaadin-select-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASEAAsAAAAABDgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKmNtYXAAAAFoAAAAVAAAAFQXVtKHZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHwAAAB8CohkJ2hlYWQAAAJAAAAANgAAADYOavgEaGhlYQAAAngAAAAkAAAAJAarA8ZobXR4AAACnAAAABQAAAAUCAABP2xvY2EAAAKwAAAADAAAAAwAKABSbWF4cAAAArwAAAAgAAAAIAAHABduYW1lAAAC3AAAAYYAAAGGmUoJ+3Bvc3QAAARkAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkA//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQE/AUAC6QIVABQAAAEwFx4BFxYxMDc+ATc2MTAjKgEjIgE/ISJPIiEhIk8iIUNCoEJDAhUhIk8iISEiTyIhAAEAAAABAABvL5bdXw889QALBAAAAAAA1jHaeQAAAADWMdp5AAAAAALpAhUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAukAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAABAABPwAAAAAACgAUAB4APgABAAAABQAVAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>";document.head.appendChild($_documentContainer$o.content);/**
                                                          *
                                                          * `<vaadin-select>` is a Web Component for selecting values from a list of items. The content of the
                                                          * the select can be populated in two ways: imperatively by using renderer callback function and
                                                          * declaratively by using Polymer's Templates.
                                                          *
                                                          * ### Rendering
                                                          *
                                                          * By default, the select uses the content provided by using the renderer callback function.
                                                          *
                                                          * The renderer function provides `root`, `select` arguments.
                                                          * Generate DOM content, append it to the `root` element and control the state
                                                          * of the host element by accessing `select`.
                                                          *
                                                          * ```html
                                                          * <vaadin-select id="select"></vaadin-select>
                                                          * ```
                                                          * ```js
                                                          * const select = document.querySelector('#select');
                                                          * select.renderer = function(root, select) {
                                                          *   const listBox = document.createElement('vaadin-list-box');
                                                          *   // append 3 <vaadin-item> elements
                                                          *   ['Jose', 'Manolo', 'Pedro'].forEach(function(name) {
                                                          *     const item = document.createElement('vaadin-item');
                                                          *     item.textContent = name;
                                                          *     listBox.appendChild(item);
                                                          *   });
                                                          *
                                                          *   // update the content
                                                          *   root.appendChild(listBox);
                                                          * };
                                                          * ```
                                                          *
                                                          * Renderer is called on initialization of new select and on its opening.
                                                          * DOM generated during the renderer call can be reused
                                                          * in the next renderer call and will be provided with the `root` argument.
                                                          * On first call it will be empty.
                                                          *
                                                          * ### Polymer Templates
                                                          *
                                                          * Alternatively, the content can be provided with Polymer's Template.
                                                          * Select finds the first child template and uses that in case renderer callback function
                                                          * is not provided. You can also set a custom template using the `template` property.
                                                          *
                                                          * ```
                                                          * <vaadin-select>
                                                          *   <template>
                                                          *     <vaadin-list-box>
                                                          *       <vaadin-item label="foo">Foo</vaadin-item>
                                                          *       <vaadin-item>Bar</vaadin-item>
                                                          *       <vaadin-item>Baz</vaadin-item>
                                                          *     </vaadin-list-box>
                                                          *   </template>
                                                          * </vaadin-select>
                                                          * ```
                                                          *
                                                          * Hint: By setting the `label` property of inner vaadin-items you will
                                                          * be able to change the visual representation of the selected value in the input part.
                                                          *
                                                          * ### Styling
                                                          *
                                                          * The following shadow DOM parts are available for styling:
                                                          *
                                                          * Part name | Description
                                                          * ----------------|----------------
                                                          * `toggle-button` | The toggle button
                                                          *
                                                          * The following state attributes are available for styling:
                                                          *
                                                          * Attribute    | Description | Part name
                                                          * -------------|-------------|------------
                                                          * `opened` | Set when the select is open | :host
                                                          * `invalid` | Set when the element is invalid | :host
                                                          * `focused` | Set when the element is focused | :host
                                                          * `focus-ring` | Set when the element is keyboard focused | :host
                                                          * `readonly` | Set when the select is read only | :host
                                                          *
                                                          * `<vaadin-select>` element sets these custom CSS properties:
                                                          *
                                                          * Property name | Description | Theme for element
                                                          * --- | --- | ---
                                                          * `--vaadin-select-text-field-width` | Width of the select text field | `vaadin-select-overlay`
                                                          *
                                                          * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
                                                          *
                                                          * In addition to `<vaadin-select>` itself, the following internal
                                                          * components are themable:
                                                          *
                                                          * - `<vaadin-select-text-field>`
                                                          * - `<vaadin-select-overlay>`
                                                          *
                                                          * Note: the `theme` attribute value set on `<vaadin-select>` is
                                                          * propagated to the internal themable components listed above.
                                                          *
                                                          * @memberof Vaadin
                                                          * @mixes Vaadin.ElementMixin
                                                          * @mixes Vaadin.ControlStateMixin
                                                          * @mixes Vaadin.ThemableMixin
                                                          * @mixes Vaadin.ThemePropertyMixin
                                                          * @demo demo/index.html
                                                          */var SelectElement=/*#__PURE__*/function(_ElementMixin5){babelHelpers.inherits(SelectElement,_ElementMixin5);babelHelpers.createClass(SelectElement,null,[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject26_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-select"}},{key:"version",get:function get(){return"2.1.7"}},{key:"properties",get:function get(){return{/**
       * Set when the select is open
       */opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},/**
       * Custom function for rendering the content of the `<vaadin-select>`.
       * Receives two arguments:
       *
       * - `root` The `<vaadin-select-overlay>` internal container
       *   DOM element. Append your content to it.
       * - `select` The reference to the `<vaadin-select>` element.
       */renderer:Function,/**
       * The error message to display when the select value is invalid
       */errorMessage:{type:String,value:""},/**
       * String used for the label element.
       */label:{type:String},/**
       * It stores the the `value` property of the selected item, providing the
       * value for iron-form.
       * When there’s an item selected, it's the value of that item, otherwise
       * it's an empty string.
       * On change or initialization, the component finds the item which matches the
       * value and displays it.
       * If no value is provided to the component, it selects the first item without
       * value or empty value.
       * Hint: If you do not want to select any item by default, you can either set all
       * the values of inner vaadin-items, or set the vaadin-select value to
       * an inexistent value in the items list.
       */value:{type:String,value:"",notify:!0,observer:"_valueChanged"},/**
       * The current required state of the select. True if required.
       */required:{type:Boolean,reflectToAttribute:!0,observer:"_requiredChanged"},/**
       * Set to true if the value is invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},/**
       * The name of this element.
       */name:{type:String,reflectToAttribute:!0},/**
       * A hint to the user of what can be entered in the control.
       * The placeholder will be displayed in the case that there
       * is no item selected, or the selected item has an empty
       * string label, or the selected item has no label and it's
       * DOM content is empty.
       */placeholder:{type:String},/**
       * When present, it specifies that the element is read-only.
       */readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputElement:Object,_toggleElement:Object,_items:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object}}},{key:"observers",get:function get(){return["_updateSelectedItem(value, _items)","_updateAriaExpanded(opened, _toggleElement, _inputElement)","_templateOrRendererChanged(_contentTemplate, renderer, _overlayElement)"]}/** @private */}]);function SelectElement(){var _this58;babelHelpers.classCallCheck(this,SelectElement);_this58=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SelectElement).call(this));_this58._boundSetPosition=_this58._setPosition.bind(babelHelpers.assertThisInitialized(_this58));return _this58}/** @private */babelHelpers.createClass(SelectElement,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SelectElement.prototype),"connectedCallback",this).call(this);this.addEventListener("iron-resize",this._boundSetPosition)}},{key:"ready",value:function ready(){var _this59=this;babelHelpers.get(babelHelpers.getPrototypeOf(SelectElement.prototype),"ready",this).call(this);this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay");this._valueElement=this.shadowRoot.querySelector("[part=\"value\"]");this._toggleElement=this.shadowRoot.querySelector("[part=\"toggle-button\"]");this._nativeInput=this.focusElement.shadowRoot.querySelector("input");this._nativeInput.setAttribute("aria-hidden",!0);this._nativeInput.setAttribute("tabindex",-1);this._nativeInput.style.pointerEvents="none";this.focusElement.addEventListener("click",function(e){return _this59.opened=!_this59.readonly});this.focusElement.addEventListener("keydown",function(e){return _this59._onKeyDown(e)});this._observer=new _cureMe.FlattenedNodesObserver(this,function(info){return _this59._setTemplateFromNodes(info.addedNodes)});this._observer.flush()}},{key:"_setTemplateFromNodes",value:function _setTemplateFromNodes(nodes){var template=Array.from(nodes).filter(function(node){return node.localName&&"template"===node.localName})[0]||this._contentTemplate;this._overlayElement.template=this._contentTemplate=template;this._setForwardHostProps()}},{key:"_setForwardHostProps",value:function _setForwardHostProps(){var _this60=this;if(this._overlayElement.content){var origForwardHostProp=this._overlayElement._instance&&this._overlayElement._instance.forwardHostProp;if(this._overlayElement._instance){this._overlayElement._instance.forwardHostProp=function(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3]}origForwardHostProp.apply(_this60._overlayElement._instance,args);setTimeout(function(){_this60._updateValueSlot()})};this._assignMenuElement()}}}/**
     * Manually invoke existing renderer.
     */},{key:"render",value:function render(){this._overlayElement.render();if(this._menuElement&&this._menuElement.items){this._updateSelectedItem(this.value,this._menuElement.items)}}},{key:"_removeNewRendererOrTemplate",value:function _removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this._contentTemplate=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}},{key:"_templateOrRendererChanged",value:function _templateOrRendererChanged(template,renderer,overlay){if(!overlay){return}if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for select content")}this._oldTemplate=template;this._oldRenderer=renderer;if(renderer){overlay.setProperties({owner:this,renderer:renderer});this.render();if(overlay.content.firstChild){this._assignMenuElement()}}}},{key:"_assignMenuElement",value:function _assignMenuElement(){var _this61=this;this._menuElement=Array.from(this._overlayElement.content.children).filter(function(element){return"style"!==element.localName})[0];if(this._menuElement){this._menuElement.addEventListener("items-changed",function(e){_this61._items=_this61._menuElement.items;_this61._items.forEach(function(item){return item.setAttribute("role","option")})});this._menuElement.addEventListener("selected-changed",function(e){return _this61._updateValueSlot()});this._menuElement.addEventListener("keydown",function(e){return _this61._onKeyDownInside(e)});this._menuElement.addEventListener("click",function(e){_this61.__userInteraction=!0;_this61.opened=!1},!0);this._menuElement.setAttribute("role","listbox")}}/** @protected */},{key:"disconnectedCallback",/** @private */value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SelectElement.prototype),"disconnectedCallback",this).call(this);this.removeEventListener("iron-resize",this._boundSetPosition);// Making sure the select is closed and removed from DOM after detaching the select.
this.opened=!1}/** @private */},{key:"notifyResize",value:function notifyResize(){babelHelpers.get(babelHelpers.getPrototypeOf(SelectElement.prototype),"notifyResize",this).call(this);if(this.positionTarget&&this.opened){this._setPosition();// Schedule another position update (to cover virtual keyboard opening for example)
requestAnimationFrame(this._setPosition.bind(this))}}},{key:"_requiredChanged",value:function _requiredChanged(required){this.setAttribute("aria-required",required)}},{key:"_valueChanged",value:function _valueChanged(value,oldValue){if(""===value){this.focusElement.removeAttribute("has-value")}else{this.focusElement.setAttribute("has-value","")}// Skip validation for the initial empty string value
if(""===value&&oldValue===void 0){return}this.validate()}},{key:"_onKeyDown",value:function _onKeyDown(e){if(!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key)){e.preventDefault();this.opened=!0}else if(/[a-zA-Z0-9]/.test(e.key)&&1===e.key.length){var selected=this._menuElement.selected,currentIdx=selected!==void 0?selected:-1,newIdx=this._menuElement._searchKey(currentIdx,e.key);if(0<=newIdx){this.__userInteraction=!0;this._updateSelectedItem(this._items[newIdx].value,this._items)}}}}},{key:"_onKeyDownInside",value:function _onKeyDownInside(e){if(/^(Tab)$/.test(e.key)){this.opened=!1}}},{key:"_openedChanged",value:function _openedChanged(opened,wasOpened){if(opened){if(!this._overlayElement||!this._menuElement||!this._toggleElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement.hasAttribute("focus-ring");this._menuElement.focus();this._setPosition();window.addEventListener("scroll",this._boundSetPosition,!0)}else if(wasOpened){if(this._phone){this._setFocused(!1)}else{this.focusElement.focus();if(this._openedWithFocusRing){this.focusElement.setAttribute("focus-ring","")}}this.validate();window.removeEventListener("scroll",this._boundSetPosition,!0)}}},{key:"_hasContent",value:function _hasContent(selected){if(!selected){return!1}return!!(selected.hasAttribute("label")?selected.getAttribute("label"):selected.textContent.trim()||selected.children.length)}},{key:"_attachSelectedItem",value:function _attachSelectedItem(selected){if(!selected){return}var labelItem;if(selected.hasAttribute("label")){labelItem=document.createElement("vaadin-item");labelItem.textContent=selected.getAttribute("label")}else{labelItem=selected.cloneNode(!0)}// store reference to the original item
labelItem._sourceItem=selected;labelItem.removeAttribute("tabindex");labelItem.removeAttribute("role");this._valueElement.appendChild(labelItem);labelItem.selected=!0}},{key:"_updateAriaExpanded",value:function _updateAriaExpanded(opened,toggleElement,inputElement){toggleElement&&toggleElement.setAttribute("aria-expanded",opened);if(inputElement&&inputElement.focusElement){inputElement.focusElement.setAttribute("aria-expanded",opened)}}},{key:"_updateValueSlot",value:function _updateValueSlot(){this.opened=!1;this._valueElement.innerHTML="";var selected=this._items[this._menuElement.selected],hasContent=this._hasContent(selected),slotName=this._inputElement.shadowRoot.querySelector("slot[name=\"input\"]")?"input":"value";// Toggle visibility of _valueElement vs fallback input with placeholder
this._valueElement.slot=hasContent?slotName:"";// Ensure the slot distribution to apply correct style scope for cloned item
if(hasContent&&window.ShadyDOM){window.ShadyDOM.flush()}this._attachSelectedItem(selected);if(!this._valueChanging&&selected){this._selectedChanging=!0;this.value=selected.value||"";if(this.__userInteraction){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}));this.__userInteraction=!1}delete this._selectedChanging}}},{key:"_updateSelectedItem",value:function _updateSelectedItem(value,items){if(items){this._menuElement.selected=items.reduce(function(prev,item,idx){return prev===void 0&&item.value===value?idx:prev},void 0);if(!this._selectedChanging){this._valueChanging=!0;this._updateValueSlot();delete this._valueChanging}}}/** @override */},{key:"_setFocused",value:function _setFocused(focused){// Keep `focused` state when opening the overlay for styling purpose.
babelHelpers.get(babelHelpers.getPrototypeOf(SelectElement.prototype),"_setFocused",this).call(this,this.opened||focused);this.focusElement._setFocused(this.hasAttribute("focused"));this.hasAttribute("focused")||this.validate()}},{key:"_setPosition",value:function _setPosition(){var inputRect=this._inputElement.shadowRoot.querySelector("[part~=\"input-field\"]").getBoundingClientRect(),viewportHeight=Math.min(window.innerHeight,document.documentElement.clientHeight),bottomAlign=inputRect.top>(viewportHeight-inputRect.height)/2;this._overlayElement.style.left=inputRect.left+"px";if(bottomAlign){this._overlayElement.setAttribute("bottom-aligned","");this._overlayElement.style.removeProperty("top");this._overlayElement.style.bottom=viewportHeight-inputRect.bottom+"px"}else{this._overlayElement.removeAttribute("bottom-aligned");this._overlayElement.style.removeProperty("bottom");this._overlayElement.style.top=inputRect.top+"px"}this._overlayElement.updateStyles({"--vaadin-select-text-field-width":inputRect.width+"px"})}/**
     * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
     *
     * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
     */},{key:"validate",value:function validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}/**
     * Fired when the user commits a value change.
     *
     * @event change
     */},{key:"focusElement",get:function get(){return this._inputElement||(this._inputElement=this.shadowRoot.querySelector("vaadin-select-text-field"))}}]);return SelectElement}(ElementMixin(ControlStateMixin(ThemableMixin(ThemePropertyMixin((0,_cureMe.mixinBehaviors)(_cureMe.IronResizableBehavior,_cureMe.PolymerElement))))));_exports.SelectElement=SelectElement;customElements.define(SelectElement.is,SelectElement);var vaadinSelect={SelectElement:SelectElement};_exports.$vaadinSelect=vaadinSelect;var $_documentContainer$p=(0,_cureMe.html)(_templateObject27_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$p.content);var TimePickerTextFieldElement=/*#__PURE__*/function(_TextFieldElement2){babelHelpers.inherits(TimePickerTextFieldElement,_TextFieldElement2);function TimePickerTextFieldElement(){babelHelpers.classCallCheck(this,TimePickerTextFieldElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TimePickerTextFieldElement).apply(this,arguments))}babelHelpers.createClass(TimePickerTextFieldElement,null,[{key:"is",get:function get(){return"vaadin-time-picker-text-field"}}]);return TimePickerTextFieldElement}(TextFieldElement);customElements.define(TimePickerTextFieldElement.is,TimePickerTextFieldElement);var TimePickerElement=/*#__PURE__*/function(_ElementMixin6){babelHelpers.inherits(TimePickerElement,_ElementMixin6);function TimePickerElement(){babelHelpers.classCallCheck(this,TimePickerElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TimePickerElement).apply(this,arguments))}babelHelpers.createClass(TimePickerElement,[{key:"ready",value:function ready(){var _this62=this;babelHelpers.get(babelHelpers.getPrototypeOf(TimePickerElement.prototype),"ready",this).call(this);// In order to have synchronized invalid property, we need to use the same validate logic.
this.__inputElement.validate=function(){};// Not using declarative because we receive an event before text-element shadow is ready,
// thus querySelector in textField.focusElement raises an undefined exception on validate
this.__dropdownElement.addEventListener("value-changed",function(e){return _this62.__onInputChange(e)});this.__inputElement.addEventListener("keydown",this.__onKeyDown.bind(this));this.__dropdownElement.addEventListener("change",function(e){// `vaadin-combo-box-light` forwards 'change' event from text-field.
// So we need to filter out in order to avoid duplicates.
if(e.composedPath()[0]!==_this62.__inputElement){_this62.__dispatchChange()}})}},{key:"__validDayDivisor",value:function __validDayDivisor(step){// valid if undefined, or exact divides a day, or has millisecond resolution
return!step||0===3600*24%step||1>step&&0===1e3*(step%1)%1}},{key:"__onKeyDown",value:function __onKeyDown(e){if(this.readonly||this.disabled||this.__dropdownItems.length){return}var stepResolution=this.__validDayDivisor(this.step)&&this.step||60;if(_cureMe.IronA11yKeysBehavior.keyboardEventMatchesKeys(e,"down")){this.__onArrowPressWithStep(-stepResolution)}else if(_cureMe.IronA11yKeysBehavior.keyboardEventMatchesKeys(e,"up")){this.__onArrowPressWithStep(stepResolution)}}},{key:"__onArrowPressWithStep",value:function __onArrowPressWithStep(step){var objWithStep=this.__addStep(this.__getMsec(this.__memoValue),step,!0);this.__memoValue=objWithStep;this.__inputElement.value=this.i18n.formatTime(this.__validateTime(objWithStep));this.__dispatchChange()}},{key:"__dispatchChange",value:function __dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}/**
     * Returning milliseconds from Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
     */},{key:"__getMsec",value:function __getMsec(obj){var result=1e3*(60*(60*(obj&&obj.hours||0)));result+=1e3*(60*(obj&&obj.minutes||0));result+=1e3*(obj&&obj.seconds||0);result+=obj&&parseInt(obj.milliseconds)||0;return result}/**
     * Returning seconds from Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
     */},{key:"__getSec",value:function __getSec(obj){var result=60*(60*(obj&&obj.hours||0));result+=60*(obj&&obj.minutes||0);result+=obj&&obj.seconds||0;result+=obj&&obj.milliseconds/1e3||0;return result}/**
     * Returning Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
     * from the result of adding step value in milliseconds to the milliseconds amount.
     * With `precision` parameter rounding the value to the closest step valid interval.
     */},{key:"__addStep",value:function __addStep(msec,step,precision){// If the time is `00:00` and step changes value downwards, it should be considered as `24:00`
if(0===msec&&0>step){msec=1e3*(60*(60*24))}var stepMsec=1e3*step,diffToNext=msec%stepMsec;if(0>stepMsec&&diffToNext&&precision){msec-=diffToNext}else if(0<stepMsec&&diffToNext&&precision){msec-=diffToNext-stepMsec}else{msec+=stepMsec}var hh=Math.floor(msec/1e3/60/60);msec-=60*(60*(1e3*hh));var mm=Math.floor(msec/1e3/60);msec-=60*(1e3*mm);var ss=Math.floor(msec/1e3);msec-=1e3*ss;return{hours:24>hh?hh:0,minutes:mm,seconds:ss,milliseconds:msec}}},{key:"__updateDropdownItems",value:function __updateDropdownItems(i8n,min,max,step){var minTimeObj=this.__validateTime(this.__parseISO(min)),minSec=this.__getSec(minTimeObj),maxTimeObj=this.__validateTime(this.__parseISO(max)),maxSec=this.__getSec(maxTimeObj);this.__adjustValue(minSec,maxSec,minTimeObj,maxTimeObj);this.__dropdownItems=this.__generateDropdownList(minSec,maxSec,step);if(step!==this.__oldStep){this.__oldStep=step;var parsedObj=this.__validateTime(this.__parseISO(this.value));this.__updateValue(parsedObj)}if(this.value){this.__dropdownElement.value=this.i18n.formatTime(this.i18n.parseTime(this.value))}}},{key:"__generateDropdownList",value:function __generateDropdownList(minSec,maxSec,step){if(step<60*15||!this.__validDayDivisor(step)){return[]}var generatedList=[];// Default step in overlay items is 1 hour
step=step||3600;var time=-step+minSec;while(time+step>=minSec&&time+step<=maxSec){var timeObj=this.__validateTime(this.__addStep(1e3*time,step));time+=step;var formatted=this.i18n.formatTime(timeObj);generatedList.push({label:formatted,value:formatted})}return generatedList}},{key:"__adjustValue",value:function __adjustValue(minSec,maxSec,minTimeObj,maxTimeObj){// Do not change the value if it is empty
if(!this.__memoValue){return}var valSec=this.__getSec(this.__memoValue);if(valSec<minSec){this.__updateValue(minTimeObj)}else if(valSec>maxSec){this.__updateValue(maxTimeObj)}}},{key:"__valueChanged",value:function __valueChanged(value,oldValue){var parsedObj=this.__memoValue=this.__parseISO(value),newValue=this.__formatISO(parsedObj)||"";if(""!==this.value&&null!==this.value&&!parsedObj){this.value=oldValue}else if(this.value!==newValue){this.value=newValue}else{this.__updateInputValue(parsedObj)}}},{key:"__onInputChange",value:function __onInputChange(e){var parsedObj=this.i18n.parseTime(this.__dropdownElement.value),newValue=this.i18n.formatTime(parsedObj)||"";if(parsedObj){if(this.__dropdownElement.value!==newValue){this.__dropdownElement.value=newValue}else{this.__updateValue(parsedObj)}}else{this.value=""}this.validate()}},{key:"__updateValue",value:function __updateValue(obj){var timeString=this.__formatISO(this.__validateTime(obj))||"";this.value=timeString}},{key:"__updateInputValue",value:function __updateInputValue(obj){var timeString=this.i18n.formatTime(this.__validateTime(obj))||"";this.__dropdownElement.value=timeString}},{key:"__validateTime",value:function __validateTime(timeObject){if(timeObject){timeObject.hours=parseInt(timeObject.hours);timeObject.minutes=parseInt(timeObject.minutes||0);timeObject.seconds=3>this.__stepSegment?void 0:parseInt(timeObject.seconds||0);timeObject.milliseconds=4>this.__stepSegment?void 0:parseInt(timeObject.milliseconds||0)}return timeObject}},{key:"__formatISO",value:function __formatISO(time){// The default i18n formatter implementation is ISO 8601 compliant
return TimePickerElement.properties.i18n.value().formatTime(time)}},{key:"__parseISO",value:function __parseISO(text){// The default i18n parser implementation is ISO 8601 compliant
return TimePickerElement.properties.i18n.value().parseTime(text)}},{key:"_getInputElement",value:function _getInputElement(){return this.shadowRoot.querySelector("vaadin-time-picker-text-field")}},{key:"validate",/**
     * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
     *
     * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
     */value:function validate(){return!(this.invalid=!this.checkValidity())}},{key:"_timeAllowed",value:function _timeAllowed(time){var parsedMin=this.i18n.parseTime(this.min),parsedMax=this.i18n.parseTime(this.max);return(!this.__getMsec(parsedMin)||this.__getMsec(time)>=this.__getMsec(parsedMin))&&(!this.__getMsec(parsedMax)||this.__getMsec(time)<=this.__getMsec(parsedMax))}/**
     * Returns true if the current input value satisfies all constraints (if any)
     *
     * You can override the `checkValidity` method for custom validations.
     */},{key:"checkValidity",value:function checkValidity(){return this.__inputElement.focusElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this.__dropdownElement.value||this.i18n.parseTime(this.__dropdownElement.value))}},{key:"__stepSegment",get:function get(){if(0===this.step%3600){// Accept hours
return 1}else if(0===this.step%60||!this.step){// Accept minutes
return 2}else if(0===this.step%1){// Accept seconds
return 3}else if(1>this.step){// Accept milliseconds
return 4}}},{key:"__inputElement",get:function get(){return this.__memoInput||(this.__memoInput=this._getInputElement())}},{key:"__dropdownElement",get:function get(){return this.__memoDropdown||(this.__memoDropdown=this.shadowRoot.querySelector("vaadin-combo-box-light"))}/**
     * Focusable element used by vaadin-control-state-mixin
     */},{key:"focusElement",get:function get(){return this.__inputElement}}],[{key:"template",get:function get(){return(0,_cureMe.html)(_templateObject28_941725104e2611ea968e0b510ccc7207())}},{key:"is",get:function get(){return"vaadin-time-picker"}},{key:"version",get:function get(){return"2.0.5"}},{key:"properties",get:function get(){return{/**
       * The name of this element.
       */name:{type:String},/**
       * The time value for this element.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm` (default)
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       */value:{type:String,observer:"__valueChanged",notify:!0,value:""},/**
       * The label for this element.
       */label:{type:String,reflectToAttribute:!0},/**
       * Set to true to mark the input as required.
       */required:{type:Boolean,value:!1},/**
       * Set to true to disable this input.
       */disabled:{type:Boolean,value:!1},/**
       * Set to true to prevent the user from entering invalid input.
       */preventInvalidInput:{type:Boolean},/**
       * A pattern to validate the `input` with.
       */pattern:{type:String},/**
       * The error message to display when the input is invalid.
       */errorMessage:{type:String},/**
       * A placeholder string in addition to the label.
       */placeholder:{type:String,value:""},/**
       * Set to true to prevent user picking a date or typing in the input.
       */readonly:{type:Boolean,value:!1},/**
       * Set to true if the value is invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},/**
       * Minimum time allowed.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm`
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       */min:{type:String,value:"00:00:00.000"},/**
       * Maximum time allowed.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm`
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       */max:{type:String,value:"23:59:59.999"},/**
       * Specifies the number of valid intervals in a day used for
       * configuring the items displayed in the selection box.
       *
       * It also configures the precision of the value string. By default
       * the component formats values as `hh:mm` but setting a step value
       * lower than one minute or one second, format resolution changes to
       * `hh:mm:ss` and `hh:mm:ss.fff` respectively.
       *
       * Unit must be set in seconds, and for correctly configuring intervals
       * in the dropdown, it need to evenly divide a day.
       *
       * Note: it is possible to define step that is dividing an hour in inexact
       * fragments (i.e. 5760 seconds which equals 1 hour 36 minutes), but it is
       * not recommended to use it for better UX experience.
       */step:{type:Number},/**
       * Set to true to display the clear icon which clears the input.
       */clearButtonVisible:{type:Boolean,value:!1},__dropdownItems:{type:Array},/**
       * The object used to localize this component.
       * To change the default localization, replace the entire
       * _i18n_ object or just the property you want to modify.
       *
       * The object has the following JSON structure:
           {
            // A function to format given `Object` as
            // time string. Object is in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
            formatTime: (time) => {
              // returns a string representation of the given
              // object in `hh` / 'hh:mm' / 'hh:mm:ss' / 'hh:mm:ss.fff' - formats
            },
             // A function to parse the given text to an `Object` in the format
            // `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`.
            // Must properly parse (at least) text
            // formatted by `formatTime`.
            parseTime: text => {
              // Parses a string in object/string that can be formatted by`formatTime`.
            }
             // Translation of the time selector icon button title.
            selector: 'Time selector',
             // Translation of the time selector clear button title.
            clear: 'Clear'
          }
        */i18n:{type:Object,value:function value(){return{formatTime:function formatTime(time){if(!time){return}var pad=function pad(){var num=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,fmt=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"00";return(fmt+num).substr((fmt+num).length-fmt.length)},timeString="".concat(pad(time.hours),":").concat(pad(time.minutes));// Always display hour and minute
// Adding second and millisecond depends on resolution
time.seconds!==void 0&&(timeString+=":".concat(pad(time.seconds)));time.milliseconds!==void 0&&(timeString+=".".concat(pad(time.milliseconds,"000")));return timeString},parseTime:function parseTime(text){// Parsing with RegExp to ensure correct format
var MATCH_HOURS="(\\d|[0-1]\\d|2[0-3])",MATCH_MINUTES="(\\d|[0-5]\\d)",MATCH_SECONDS=MATCH_MINUTES,MATCH_MILLISECONDS="(\\d{1,3})",re=new RegExp("^".concat(MATCH_HOURS,"(?::").concat(MATCH_MINUTES,"(?::").concat(MATCH_SECONDS,"(?:\\.").concat(MATCH_MILLISECONDS,")?)?)?$")),parts=re.exec(text);if(parts){// Allows setting the milliseconds with hundreds and tens precision
if(parts[4]){while(3>parts[4].length){parts[4]+="0"}}return{hours:parts[1],minutes:parts[2],seconds:parts[3],milliseconds:parts[4]}}},selector:"Time selector",clear:"Clear"}}}}}},{key:"observers",get:function get(){return["__updateDropdownItems(i18n.*, min, max, step)"]}}]);return TimePickerElement}(ElementMixin(ControlStateMixin(ThemableMixin(ThemePropertyMixin(_cureMe.PolymerElement)))));_exports.TimePickerElement=TimePickerElement;customElements.define(TimePickerElement.is,TimePickerElement);var vaadinTimePicker={TimePickerElement:TimePickerElement};_exports.$vaadinTimePicker=vaadinTimePicker;var $_documentContainer$q=(0,_cureMe.html)(_templateObject29_941725104e2611ea968e0b510ccc7207());document.head.appendChild($_documentContainer$q.content);var AddSlot=/*#__PURE__*/function(_PolymerElement3){babelHelpers.inherits(AddSlot,_PolymerElement3);function AddSlot(){babelHelpers.classCallCheck(this,AddSlot);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(AddSlot).apply(this,arguments))}babelHelpers.createClass(AddSlot,[{key:"ready",/**
     * listening customEvents sent from child elements
     */value:function ready(){var _this63=this;babelHelpers.get(babelHelpers.getPrototypeOf(AddSlot.prototype),"ready",this).call(this);this.addEventListener("ajax-response",function(e){return _this63._addSlots(e)})}/**
     * getting the values of the entries for the booking of slots
     */},{key:"_onClick",value:function _onClick(){var availableFromDate=this.$.fromDate.value,availableToDate=this.$.toDate.value,availableFrom=this.$.fromTime.value,availableTo=this.$.toTime.value,location=this.$.location.value;if(""==availableFromDate||""==availableToDate||""==availableFrom||""==availableTo||""==location){this.message="Field must not be null";this.$.modal.open()}else{var postObj={availableFromDate:availableFromDate,availableToDate:availableToDate,availableFrom:availableFrom,availableTo:availableTo,location:location};this.$.ajax._makeAjaxCall("post","".concat(baseUrl,"/cureme/slots/doctors/").concat(sessionStorage.getItem("doctorId")),postObj,"ajaxResponse")}}/**
     * showing message if slots are added sucessfully
     */},{key:"_addSlots",value:function _addSlots(){this.message="Slot Added Successfully";this.$.modal.open()}/**
     * reseting the form
     */},{key:"_handleOk",value:function _handleOk(){this.$.form.reset()}},{key:"_handleBack",value:function _handleBack(){this.set("route.path","./doctor-dashboard")}}],[{key:"template",get:function get(){return(0,_cureMe.html$1)(_templateObject30_941725104e2611ea968e0b510ccc7207())}},{key:"properties",get:function get(){return{locationList:{type:Array,value:["bangalore","Electronic city","Delhi","Bannerghatta"]},message:String}}}]);return AddSlot}(_cureMe.PolymerElement);window.customElements.define("add-slot",AddSlot)});