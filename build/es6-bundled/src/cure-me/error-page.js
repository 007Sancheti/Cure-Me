define(["./cure-me.js"],function(_cureMe){"use strict";class ErrorPage extends _cureMe.PolymerElement{static get template(){return _cureMe.html$1`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
        }
      </style>
      Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
    `}}window.customElements.define("error-page",ErrorPage)});