import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/iron-form/iron-form.js';
import './shared/API/ajax-call.js';
import '@polymer/app-route/app-location.js';
/**
 * @customElement
 * @polymer
 */
class DoctorDashboard extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .form
        {
          background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
          width:40%;
          margin:70px auto;
          padding:15px;
          box-shadow:0px 0px 5px 5px;
        }
      </style>
      <app-location route={{route}}></app-location>
      <form class="form">
     <h2>I am a</h2>
      <paper-button on-click="_handleClick" raised id="doctorLogin">Doctor</paper-button>
      <paper-button on-click="_handleClick" raised id="patientHome">Patient</paper-button>
      </form>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'doctor-dashboard'
      }
    };
  }
  _handleClick(){

  }
}

window.customElements.define('doctor-dashboard', DoctorDashboard);
