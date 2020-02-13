define(["../../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class ErrorPage extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
        }
      </style>
      Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
    `}}window.customElements.define("error-page",ErrorPage)});