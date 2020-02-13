define(["require","../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/app-route/app-route.js","../../node_modules/@polymer/app-route/app-location.js","../../node_modules/@polymer/iron-pages/iron-pages.js","../../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js","../../node_modules/@polymer/app-layout/app-header/app-header.js","../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","../../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js","../../node_modules/@polymer/app-layout/app-drawer/app-drawer.js","../../node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js","../../node_modules/@polymer/iron-media-query/iron-media-query.js","../../node_modules/@polymer/paper-item/paper-item.js","../../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js","../../node_modules/@polymer/paper-listbox/paper-listbox.js","../../node_modules/@polymer/iron-selector/iron-selector.js","../../node_modules/@polymer/iron-icon/iron-icon.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/paper-icon-button/paper-icon-button.js","../../node_modules/@polymer/iron-icons/iron-icons.js","../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js","../../node_modules/@polymer/polymer/lib/utils/settings.js","../../node_modules/@polymer/font-roboto/roboto.js"],function(_require,_polymerElement,_appRoute,_appLocation,_ironPages,_appDrawerLayout,_appHeader,_appToolbar,_appHeaderLayout,_appDrawer,_waterfall,_ironMediaQuery,_paperItem,_ironFlexLayout,_paperListbox,_ironSelector,_ironIcon,_paperButton,_paperIconButton,_ironIcons,_domRepeat,_settings,_roboto){"use strict";_require=babelHelpers.interopRequireWildcard(_require);/**
 * @customElement
 * @polymer
 */(0,_settings.setRootPath)(MyAppGlobals.rootPath);class CureMe extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
    <style>
    :host {
      display: block;
      margin:0;
      padding:0;
      font-family:"roboto"
    }
    .tabs-bar {
      background-image: linear-gradient(to right, #1488cc, #2b32b2);;
      width:100%;
      height: auto;
      text-align:center;
      margin-top:10px;
  }

  ul {
      display: inline-flex;
      list-style: none;
      align-items: flex-start;
      
  }
  ul li 
  {
      width:120px;
  }
  ul li a:visited
  {
    color:white;
  }
  ul li a
  {
    color:white;
    text-decoration:none;
  }
  .link
  {
    text-decoration:none;
    color:black;
  }
  .link:visited
  {
    color:black;
  }
  [hidden] {
    display: none !important;
  }
  .heading-title
  {
    color:white;
  }
  .heading
  {
    display:flex;
    background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
    font-size:24px;
    justify-content:space-between;
  }
  #logout
  {
    color:white;
    height:30px;
    font-size:1rem;
  }
  h1
  {
    color:white;
  }
  </style>
        <app-location id="location" route="{{route}}" url-space-regex="^[[rootPath]]" use-hash-as-path></app-location>
        <app-route route="{{route}}" data="{{routeData}}" pattern="[[rootPath]]:page" tail="{{subRoute}}"></app-route>
        <app-drawer-layout force-narrow>
          <app-drawer id="drawer" slot="drawer">
            <app-toolbar>Menu</app-toolbar>
            <!-- Nav on mobile: side nav menu -->
            <paper-listbox selected="[[page]]" attr-for-selected="name">
              <template is="dom-repeat" items="{{items}}">
              <a href="[[rootPath]]{{item.route}}" class="link">
                <paper-item name$="{{item.route}}">{{item.label}}</paper-item>
                </a>
              </template>
            </paper-listbox>
          </app-drawer>
          <app-header-layout has-scrolling-region>
            <app-header class="main-header" slot="header">
              <app-toolbar class="heading">
                <paper-icon-button class="menu-button" icon="menu" drawer-toggle hidden$="{{wideLayout}}">
                </paper-icon-button>
                <span class="heading-title">Cure Me</span>
                <paper-button raised id="logout" hidden$={{!login}} on-click="_logOut">Log Out</paper-button>
                </app-toolbar>
              <iron-pages selected="[[page]]" attr-for-selected="name" role="main" fallback-selection="error404">
                <add-slot id="add-slot" name="add-slot"></add-slot>
                <book-slot id="book-slot" name="book-slot" doctor-name={{doctorName}}></book-slot>
                <doctor-login name="doctor-login"></doctor-login>
                <doctor-dashboard name="doctor-dashboard"></doctor-dashboard>
                <landing-page name="landing-page"></landing-page>
                <patient-home name="patient-home"></patient-home>
                <error-view name="error404"></error-view>
              </iron-pages> 
            </app-header>
          </app-header-layout>
        </app-drawer-layout>
        <iron-media-query query="min-width: 600px" query-matches="{{wideLayout}}"></iron-media-query>
            `}static get properties(){return{page:{type:String,observer:"_pageChanged"},wideLayout:{type:Boolean,value:/* ignoreName */ /* ignoreName */!1/* skipSlots */ /* skipSlots */,observer:"onLayoutChange"},login:{type:Boolean,value:!1}}}ready(){super.ready();this.addEventListener("refresh-name",e=>this._refreshName(e))}_refreshName(event){this.doctorName=event.detail.item}/**
  *simple observer which is triggered when page property is changed
  *@param {String} newPage value of changed page 
  **/_pageChanged(newPage){//Depending upon the changed page it lazy-imports the url
switch(newPage){case"add-slot":new Promise((res,rej)=>_require.default(["./add-slot.js"],res,rej));break;case"book-slot":new Promise((res,rej)=>_require.default(["./book-slot.js"],res,rej));break;case"doctor-login":new Promise((res,rej)=>_require.default(["./doctor-login.js"],res,rej));break;case"doctor-dashboard":new Promise((res,rej)=>_require.default(["./doctor-dashboard.js"],res,rej));break;case"landing-page":new Promise((res,rej)=>_require.default(["./landing-page.js"],res,rej));break;case"patient-home":new Promise((res,rej)=>_require.default(["./patient-home.js"],res,rej));break;default:new Promise((res,rej)=>_require.default(["./error-page.js"],res,rej));break;}}/** Hence complex triggers is required to define to observe changes on first time page load.
    **/static get observers(){return["_routerChanged(routeData.page)"]}/**
     * @author: Abhinav
     *@param {String} page Value of new page
    **/_routerChanged(page){this.page=page||"landing-page"}/**
   *onLayoutChange() is a simple observer which is triggered when wideLayout Property is changed.
   It closes the drawer if the layout is wider than 600px
   *@param {Boolean} wide tells that layout is wide or not? it's a value in true or false
  **/onLayoutChange(wide){var drawer=this.$.drawer;if(wide&&drawer.opened){drawer.opened=!1}}}window.customElements.define("cure-me",CureMe)});