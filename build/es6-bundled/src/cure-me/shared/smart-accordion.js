define(["../cure-me.js"],function(_cureMe){"use strict";(0,_cureMe.Polymer)({_template:_cureMe.html`
    <style>
      :host {
        display: block;
        transition-duration: var(--iron-collapse-transition-duration, 300ms);
        /* Safari 10 needs this property prefixed to correctly apply the custom property */
        -webkit-transition-duration: var(--iron-collapse-transition-duration, 300ms);
        overflow: visible;
      }

      :host(.iron-collapse-closed) {
        display: none;
      }

      :host(:not(.iron-collapse-opened)) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`,is:"iron-collapse",behaviors:[_cureMe.IronResizableBehavior],properties:{/**
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
   */toggle:function(){this.opened=!this.opened},show:function(){this.opened=!0},hide:function(){this.opened=!1},/**
   * Updates the size of the element.
   * @param {string} size The new value for `maxWidth`/`maxHeight` as css property value, usually `auto` or `0px`.
   * @param {boolean=} animated if `true` updates the size with an animation, otherwise without.
   */updateSize:function(size,animated){// Consider 'auto' as '', to take full size.
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
   */enableTransition:function(enabled){_cureMe.Base._warn("`enableTransition()` is deprecated, use `noAnimation` instead.");this.noAnimation=!enabled},_updateTransition:function(enabled){this.style.transitionDuration=enabled&&!this.noAnimation?"":"0s"},_horizontalChanged:function(){this.style.transitionProperty=this._dimensionMaxCss;var otherDimension="maxWidth"===this._dimensionMax?"maxHeight":"maxWidth";this.style[otherDimension]="";this.updateSize(this.opened?"auto":"0px",!1)},_openedChanged:function(){this.setAttribute("aria-hidden",!this.opened);this._setTransitioning(!0);this.toggleClass("iron-collapse-closed",!1);this.toggleClass("iron-collapse-opened",!1);this.updateSize(this.opened?"auto":"0px",!0);// Focus the current collapse.
if(this.opened){this.focus()}},_transitionEnd:function(){this.style[this._dimensionMax]=this._desiredSize;this.toggleClass("iron-collapse-closed",!this.opened);this.toggleClass("iron-collapse-opened",this.opened);this._updateTransition(!1);this.notifyResize();this._setTransitioning(!1)},_onTransitionEnd:function(event){if((0,_cureMe.dom)(event).rootTarget===this){this._transitionEnd()}},_calcSize:function(){return this.getBoundingClientRect()[this.dimension]+"px"}});class SmartAccordion extends _cureMe.PolymerElement{static get template(){return _cureMe.html$1`
    <style>
    :host {
      display: block;
    }
    ::slotted([slot="summary"])
            {
                display:inline;
            }
            .accordion {
                background-image: linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);;
                cursor: pointer;
                padding: 18px;
                width: 100%;
                border: none;
                text-align: left;
                outline: none;
                font-size: 15px;
                margin-top:10px;
            }
            a{
                list-style-type: disc;
                text-decoration: none;
                color:black;
            }
            a:visited{
                color:black;
            }
            .active::after {
                transform: rotate(90deg);
                transition: 0.3s ease-out;
            }
            iron-collapse {
                transition: 0.3s ease;
            }
            .accordion::after {
                transition: 0.4s ease-out;
                font-weight: bold;
                float: right;
                margin-left: 5px;
                content: ">";
            }
  </style>
  <button class="accordion" on-click="_collapse"><slot name="summary"></slot></button>
  <iron-collapse opened="[[opened]]">
      <slot></slot>
  </iron-collapse>
    `}static get properties(){return{opened:Boolean}}/**
     * changing the value for the opened variable whenever the accordian button is clicked
     */_collapse(){let acc=this.shadowRoot.querySelector(".accordion");acc.classList.toggle("active");this.opened=!this.opened}}window.customElements.define("smart-accordion",SmartAccordion)});