define(["./cure-me.js","./shared/api/ajax-call.js"],function(_cureMe,_ajaxCall){"use strict";(0,_cureMe.Polymer)({_template:_cureMe.html`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{/**
     * The URL of an image.
     */src:{type:String,value:""},/**
     * A short text alternative for the image.
     */alt:{type:String,value:null},/**
     * CORS enabled images support:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
     */crossorigin:{type:String,value:null},/**
     * When true, the image is prevented from loading and any placeholder is
     * shown.  This may be useful when a binding to the src property is known to
     * be invalid, to prevent 404 requests.
     */preventLoad:{type:Boolean,value:/* ignoreName */ /* ignoreName */!1/* skipSlots */ /* skipSlots */},/**
     * Sets a sizing option for the image.  Valid values are `contain` (full
     * aspect ratio of the image is contained within the element and
     * letterboxed) or `cover` (image is cropped in order to fully cover the
     * bounds of the element), or `null` (default: image takes natural size).
     */sizing:{type:String,value:null,reflectToAttribute:!0/* skipSlots */},/**
     * When a sizing option is used (`cover` or `contain`), this determines
     * how the image is aligned within the element bounds.
     */position:{type:String,value:"center"},/**
     * When `true`, any change to the `src` property will cause the
     * `placeholder` image to be shown until the new image has loaded.
     */preload:{type:Boolean,value:!1},/**
     * This image will be used as a background/placeholder until the src image
     * has loaded.  Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */placeholder:{type:String,value:null,observer:"_placeholderChanged"},/**
     * When `preload` is true, setting `fade` to true will cause the image to
     * fade into place.
     */fade:{type:Boolean,value:!1},/**
     * Read-only value that is true when the image is loaded.
     */loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Read-only value that tracks the loading state of the image when the
     * `preload` option is used.
     */loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Read-only value that indicates that the last set `src` failed to load.
     */error:{notify:!0,readOnly:!0,type:Boolean,value:!1},/**
     * Can be used to set the width of image (e.g. via binding); size may also
     * be set via CSS.
     */width:{observer:"_widthChanged",type:Number,value:null},/**
     * Can be used to set the height of image (e.g. via binding); size may also
     * be set via CSS.
     *
     * @attribute height
     * @type number
     * @default null
     */height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this._setLoading(!1);this._setLoaded(!0);this._setError(!1)},_imgOnError:function(){if(this.$.img.src!==this._resolveSrc(this.src)){return}this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";this._setLoading(!1);this._setLoaded(!1);this._setError(!0)},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){if(null!==this.alt){return this.alt}// Polymer.ResolveUrl.resolveUrl will resolve '' relative to a URL x to
// that URL x, but '' is the default for src.
if(""===this.src){return""}// NOTE: Use of `URL` was removed here because IE11 doesn't support
// constructing it. If this ends up being problematic, we should
// consider reverting and adding the URL polyfill as a dev dependency.
var resolved=this._resolveSrc(this.src);// Remove query parts, get file name.
return resolved.replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(src,preventLoad){var newResolvedSrc=this._resolveSrc(src);if(newResolvedSrc===this._resolvedSrc){return}this._resolvedSrc="";this.$.img.removeAttribute("src");this.$.sizedImgDiv.style.backgroundImage="";if(""===src||preventLoad){this._setLoading(!1);this._setLoaded(!1);this._setError(!1)}else{this._resolvedSrc=newResolvedSrc;this.$.img.src=this._resolvedSrc;this.$.sizedImgDiv.style.backgroundImage="url(\""+this._resolvedSrc+"\")";this._setLoading(!0);this._setLoaded(!1);this._setError(!1)}},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?"url(\""+this.placeholder+"\")":""},_transformChanged:function(){var sizedImgDivStyle=this.$.sizedImgDiv.style,placeholderStyle=this.$.placeholder.style;sizedImgDivStyle.backgroundSize=placeholderStyle.backgroundSize=this.sizing;sizedImgDivStyle.backgroundPosition=placeholderStyle.backgroundPosition=this.sizing?this.position:"";sizedImgDivStyle.backgroundRepeat=placeholderStyle.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(testSrc){var resolved=(0,_cureMe.resolveUrl)(testSrc,this.$.baseURIAnchor.href);// NOTE: Use of `URL` was removed here because IE11 doesn't support
// constructing it. If this ends up being problematic, we should
// consider reverting and adding the URL polyfill as a dev dependency.
if(2<=resolved.length&&"/"===resolved[0]&&"/"!==resolved[1]){// In IE location.origin might not work
// https://connect.microsoft.com/IE/feedback/details/1763802/location-origin-is-undefined-in-ie-11-on-windows-10-but-works-on-windows-7
resolved=(location.origin||location.protocol+"//"+location.host)+resolved}return resolved}});(0,_cureMe.Polymer)({_template:_cureMe.html`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{/**
     * The title of the card.
     */heading:{type:String,value:"",observer:"_headingChanged"},/**
     * The url of the title image of the card.
     */image:{type:String,value:""},/**
     * The text alternative of the card's title image.
     */alt:{type:String},/**
     * When `true`, any change to the image url property will cause the
     * `placeholder` image to be shown until the image is fully rendered.
     */preloadImage:{type:Boolean,value:!1},/**
     * When `preloadImage` is true, setting `fadeImage` to true will cause the
     * image to fade into place.
     */fadeImage:{type:Boolean,value:!1},/**
     * This image will be used as a background/placeholder until the src image
     * has loaded. Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */placeholderImage:{type:String,value:null},/**
     * The z-depth of the card, from 0-5.
     */elevation:{type:Number,value:1,reflectToAttribute:!0},/**
     * Set this to true to animate the card shadow when setting a new
     * `z` value.
     */animatedShadow:{type:Boolean,value:!1},/**
     * Read-only property used to pass down the `animatedShadow` value to
     * the underlying paper-material style (since they have different names).
     */animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},/**
   * Format function for aria-hidden. Use the ! operator results in the
   * empty string when given a falsy value.
   */_isHidden:function(image){return image?"false":"true"},_headingChanged:function(heading){var currentHeading=this.getAttribute("heading"),currentLabel=this.getAttribute("aria-label");if("string"!==typeof currentLabel||currentLabel===currentHeading){this.setAttribute("aria-label",heading)}},_computeHeadingClass:function(image){return image?" over-image":""},_computeAnimated:function(animatedShadow){return animatedShadow}});class BookSlot extends _cureMe.PolymerElement{static get template(){return _cureMe.html$1`
      <style>
      :host {
        display: block;
        background: linear-gradient(to right, #c9d6ff, #e2e2e2);
        overflow-y:hidden;
      }
        paper-button
        {
          width:100%;
          background:green;
          color:white;
        }
        .slotDate
        {
          background:lightseagreen;
          padding:10px;
        }
        #modal
        {
          padding:0px 10px;
        }
        #cancel
        {
          background:red;
        }
        #back
        {
          background:white;
          color:black;
          width:100px;
          margin-top:10px;
        }
        [hidden] {
          display: none !important;
        }    
      </style>
      <paper-button on-click="_handleBack" id="back" raised>Back</paper-button>
      <h2>You are Booking appointment for {{doctorName}}</h2>
      <app-location route="{{route}}"></app-location>
      <ajax-call id="ajax"></ajax-call>
      <template is="dom-repeat" items={{slotDetails}}>
        <p class="slotDate">Slot Date: {{item.slotDate}}</p>
      <template is="dom-repeat" items={{item.slots}} as="slot">
      <paper-card heading="{{slot.slotTime}}" image="" elevation="1" animated-shadow="false">
        <div class="card-content">
        <p>{{slot.availableStatus}}</p>
        </div>
        <div class="card-actions"> 
        <template is="dom-if" if="{{_checkAvailability(slot.availableStatus)}}">
        <paper-button on-click="_handleBook" data-set$={{item.slotDate}} raised>Book Slot</paper-button> 
        </template>
        </div>
      </paper-card>
      </template>
      </template>
      <paper-dialog id="modal">
      <iron-form id="form" hidden$={{hide}}>
      <form>
         <h3 id="slotSelected"></h3>
          <paper-input id="mobileNo" type="text" maxlength="10" allowed-pattern=[0-9] label="Enter Mobile Number" required
              error-message="Mobile Number is required">Mobile Number</paper-input>
          <paper-input label="Enter Email ID" id="mail" required error-message="Email ID is required">Email ID</paper-input>
          <paper-input label="Disease" id="disease"></paper-input>
      </form>
  </iron-form>
  <div class="buttons" hidden$={{hide}}>
  <paper-button id="cancel" dialog-dismiss>Cancel</paper-button>
    <paper-button on-click="_handleSubmit">OK</paper-button>
  </div>
  <div hidden$={{!hide}}>
<h2>{{message}}</h2>
<paper-button on-click="_handleRoute" raised>Ok</paper-button>
</div>
      </paper-dialog>
      <paper-toast id="toast" text={{message}}></paper-toast>
    `}static get properties(){return{prop1:{type:String,value:"book-slot"},doctorName:{type:String,value:""},slotDetails:{type:Array,value:[{slotDate:"02-09-19",slots:[{slotId:424,slotTime:"10:30 to 11:00",availableStatus:"available"},{slotId:424,slotTime:"10:30 to 11:00",availableStatus:"available"}]},{slotDate:"02-09-19",slots:[{slotId:424,slotTime:"10:30 to 11:00",availableStatus:"available"}]}]},slotTime:{type:String,value:""},slotDate:{type:String,value:""},slotId:{type:Number,value:0},doctorId:{type:Number,value:0},hide:{type:Boolean,value:!1}}}ready(){super.ready();let doctorDetails=JSON.parse(sessionStorage.getItem("selectedDoctor")),{doctorName,doctorId}=doctorDetails;this.doctorName=doctorName;this.doctorId=doctorId;this.addEventListener("ajax-response",e=>this._slotsList(e));this.addEventListener("book-slot",e=>this._confirmationMessage(e));this.$.ajax._makeAjaxCall("get",`${baseUrl}/cureme/slots/doctors/${doctorId}/availableslots`,null,"ajaxResponse")}_checkAvailability(slot){if("AVAILABLE"==slot){return!0}}_handleBack(){this.set("route.path","./patient-home")}_confirmationMessage(event){this.hide=!0;console.log(event.detail.data.message);this.message=event.detail.data.message;// this.$.toast.open();
}_handleRoute(){this.$.modal.close();this.set("route.path","/patient-home")}_slotsList(event){this.slotDetails=event.detail.data.availableDates}_handleBook(event){let details=event.model.slot;this.slotTime=details.slotTime;this.$.slotSelected.innerHTML=this.slotTime;this.$.modal.open();this.slotDate=event.target.dataset.set;this.slotId=details.slotId}_handleSubmit(){let mobileNumber=this.$.mobileNo.value,emailId=this.$.mail.value,disease=this.$.disease.value,postObj={disease,doctorId:this.doctorId,emailId,mobileNumber,slotDate:this.slotDate,slotId:this.slotId,slotTime:this.slotTime};console.log(postObj);this.$.ajax._makeAjaxCall("post",`${baseUrl}/cureme/users/bookslot`,postObj,"bookSlot")}}window.customElements.define("book-slot",BookSlot)});