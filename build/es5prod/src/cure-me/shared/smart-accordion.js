define(["../cure-me.js"],function(_cureMe){"use strict";function _templateObject2_98be17e04e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n    :host {\n      display: block;\n    }\n    ::slotted([slot=\"summary\"])\n            {\n                display:inline;\n            }\n            .accordion {\n                background-image: linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);;\n                cursor: pointer;\n                padding: 18px;\n                width: 100%;\n                border: none;\n                text-align: left;\n                outline: none;\n                font-size: 15px;\n                margin-top:10px;\n            }\n            a{\n                list-style-type: disc;\n                text-decoration: none;\n                color:black;\n            }\n            a:visited{\n                color:black;\n            }\n            .active::after {\n                transform: rotate(90deg);\n                transition: 0.3s ease-out;\n            }\n            iron-collapse {\n                transition: 0.3s ease;\n            }\n            .accordion::after {\n                transition: 0.4s ease-out;\n                font-weight: bold;\n                float: right;\n                margin-left: 5px;\n                content: \">\";\n            }\n  </style>\n  <button class=\"accordion\" on-click=\"_collapse\"><slot name=\"summary\"></slot></button>\n  <iron-collapse opened=\"[[opened]]\">\n      <slot></slot>\n  </iron-collapse>\n    "]);_templateObject2_98be17e04e2611ea968e0b510ccc7207=function _templateObject2_98be17e04e2611ea968e0b510ccc7207(){return data};return data}function _templateObject_98be17e04e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        transition-duration: var(--iron-collapse-transition-duration, 300ms);\n        /* Safari 10 needs this property prefixed to correctly apply the custom property */\n        -webkit-transition-duration: var(--iron-collapse-transition-duration, 300ms);\n        overflow: visible;\n      }\n\n      :host(.iron-collapse-closed) {\n        display: none;\n      }\n\n      :host(:not(.iron-collapse-opened)) {\n        overflow: hidden;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject_98be17e04e2611ea968e0b510ccc7207=function _templateObject_98be17e04e2611ea968e0b510ccc7207(){return data};return data}(0,_cureMe.Polymer)({_template:(0,_cureMe.html)(_templateObject_98be17e04e2611ea968e0b510ccc7207()),is:"iron-collapse",behaviors:[_cureMe.IronResizableBehavior],properties:{/**
     * If true, the orientation is horizontal; otherwise is vertical.
     *
     * @attribute horizontal
     */horizontal:{type:Boolean,value:/* ignoreName */ /* ignoreName */ /* ignoreName */ /* ignoreName */!1/* skipSlots */ /* skipSlots */ /* skipSlots */ /* skipSlots */,observer:"_horizontalChanged"},/**
     * Set opened to true to show the collapse element and to false to hide it.
     *
     * @attribute opened
     */opened:{type:Boolean,value:!1,notify:!0/* skipSlots */ /* skipSlots */,observer:"_openedChanged"},/**
     * When true, the element is transitioning its opened state. When false,
     * the element has finished opening/closing.
     *
     * @attribute transitioning
     */transitioning:{type:Boolean,notify:!0,readOnly:!0},/**
     * Set noAnimation to true to disable animations.
     *
     * @attribute noAnimation
     */noAnimation:{type:Boolean},/**
     * Stores the desired size of the collapse body.
     * @private
     */_desiredSize:{type:String,value:""}},get dimension(){return this.horizontal?"width":"height"},/**
   * `maxWidth` or `maxHeight`.
   * @private
   */get _dimensionMax(){return this.horizontal?"maxWidth":"maxHeight"},/**
   * `max-width` or `max-height`.
   * @private
   */get _dimensionMaxCss(){return this.horizontal?"max-width":"max-height"},hostAttributes:{role:"group","aria-hidden":"true"},listeners:{transitionend:"_onTransitionEnd"},/**
   * Toggle the opened state.
   *
   * @method toggle
   */toggle:function toggle(){this.opened=!this.opened},show:function show(){this.opened=!0},hide:function hide(){this.opened=!1},/**
   * Updates the size of the element.
   * @param {string} size The new value for `maxWidth`/`maxHeight` as css property value, usually `auto` or `0px`.
   * @param {boolean=} animated if `true` updates the size with an animation, otherwise without.
   */updateSize:function updateSize(size,animated){// Consider 'auto' as '', to take full size.
size="auto"===size?"":size;var willAnimate=animated&&!this.noAnimation&&this.isAttached&&this._desiredSize!==size;this._desiredSize=size;this._updateTransition(!1);// If we can animate, must do some prep work.
if(willAnimate){// Animation will start at the current size.
var startSize=this._calcSize();// For `auto` we must calculate what is the final size for the animation.
// After the transition is done, _transitionEnd will set the size back to
// `auto`.
if(""===size){this.style[this._dimensionMax]="";size=this._calcSize()}// Go to startSize without animation.
this.style[this._dimensionMax]=startSize;// Force layout to ensure transition will go. Set scrollTop to itself
// so that compilers won't remove it.
this.scrollTop=this.scrollTop;// Enable animation.
this._updateTransition(!0);// If final size is the same as startSize it will not animate.
willAnimate=size!==startSize}// Set the final size.
this.style[this._dimensionMax]=size;// If it won't animate, call transitionEnd to set correct classes.
if(!willAnimate){this._transitionEnd()}},/**
   * enableTransition() is deprecated, but left over so it doesn't break
   * existing code. Please use `noAnimation` property instead.
   *
   * @method enableTransition
   * @deprecated since version 1.0.4
   */enableTransition:function enableTransition(enabled){_cureMe.Base._warn("`enableTransition()` is deprecated, use `noAnimation` instead.");this.noAnimation=!enabled},_updateTransition:function _updateTransition(enabled){this.style.transitionDuration=enabled&&!this.noAnimation?"":"0s"},_horizontalChanged:function _horizontalChanged(){this.style.transitionProperty=this._dimensionMaxCss;var otherDimension="maxWidth"===this._dimensionMax?"maxHeight":"maxWidth";this.style[otherDimension]="";this.updateSize(this.opened?"auto":"0px",!1)},_openedChanged:function _openedChanged(){this.setAttribute("aria-hidden",!this.opened);this._setTransitioning(!0);this.toggleClass("iron-collapse-closed",!1);this.toggleClass("iron-collapse-opened",!1);this.updateSize(this.opened?"auto":"0px",!0);// Focus the current collapse.
if(this.opened){this.focus()}},_transitionEnd:function _transitionEnd(){this.style[this._dimensionMax]=this._desiredSize;this.toggleClass("iron-collapse-closed",!this.opened);this.toggleClass("iron-collapse-opened",this.opened);this._updateTransition(!1);this.notifyResize();this._setTransitioning(!1)},_onTransitionEnd:function _onTransitionEnd(event){if((0,_cureMe.dom)(event).rootTarget===this){this._transitionEnd()}},_calcSize:function _calcSize(){return this.getBoundingClientRect()[this.dimension]+"px"}});var SmartAccordion=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(SmartAccordion,_PolymerElement);function SmartAccordion(){babelHelpers.classCallCheck(this,SmartAccordion);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SmartAccordion).apply(this,arguments))}babelHelpers.createClass(SmartAccordion,[{key:"_collapse",/**
     * changing the value for the opened variable whenever the accordian button is clicked
     */value:function _collapse(){var acc=this.shadowRoot.querySelector(".accordion");acc.classList.toggle("active");this.opened=!this.opened}}],[{key:"template",get:function get(){return(0,_cureMe.html$1)(_templateObject2_98be17e04e2611ea968e0b510ccc7207())}},{key:"properties",get:function get(){return{opened:Boolean}}}]);return SmartAccordion}(_cureMe.PolymerElement);window.customElements.define("smart-accordion",SmartAccordion)});