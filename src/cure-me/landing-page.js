import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
/**
 * @customElement
 * @polymer
 */
class LoginPage extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .form
        {
          background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
          width:400px;
          height:250px;
          margin:70px auto;
          padding:15px;
          box-shadow:0px 0px 2px 3px;
        }
      </style>
      <app-location route={{route}}></app-location>
      <form class="form">
      <h2>I AM </h2>
      <paper-button on-click="_handleDoctor" raised id="doctor">Doctor</paper-button>
      <paper-button on-click="_handlePatient" raised id="patient">Patient</paper-button>
      </form>
    `;
  }
  static get properties() {
    return {
     
    };
  }
  _handleDoctor(){
    this.set('route.path','./doctor-login')
  }
  _handlePatient(){
    this.set('route.path','./patient-home')
  }
}

window.customElements.define('landing-page', LoginPage);
