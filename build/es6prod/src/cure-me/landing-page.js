define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/app-route/app-location.js"],function(_polymerElement,_paperButton,_appLocation){"use strict";/**
 * @customElement
 * @polymer
 */class LoginPage extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          display: block;
          background: linear-gradient(to right, #c9d6ff, #e2e2e2);
          overflow-y:hidden;
          height:87vh;
        }
        .form
        {
          background: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
          width:400px;
          height:250px;
          margin:70px auto;
          padding:15px;
          box-shadow:0px 0px 2px 3px; 
          text-align:center;
          
        }
        paper-button{
          width:70%;
          margin-top:10px;
        }

      </style>
      <app-location route={{route}}></app-location>
      <form class="form">
      <h2>I AM </h2>
      <paper-button on-click="_handleDoctor" raised id="doctor">Doctor</paper-button>
      <paper-button on-click="_handlePatient" raised id="patient">Patient</paper-button>
      </form>
    `}static get properties(){return{}}_handleDoctor(){//this.set('route.path','/doctor-login')
window.history.pushState({},null,"#/doctor-login");window.dispatchEvent(new CustomEvent("location-changed"))}_handlePatient(){// this.set('route.path','/patient-home')
window.history.pushState({},null,"#/patient-home");window.dispatchEvent(new CustomEvent("location-changed"))}}window.customElements.define("landing-page",LoginPage)});