import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

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
      </style>
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
}

window.customElements.define('doctor-dashboard', DoctorDashboard);
