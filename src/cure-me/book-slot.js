import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared/api/ajax-call.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-input/paper-input.js';
/**
 * @customElement
 * @polymer
 */
class BookSlot extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
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
      </style>
      <h2>You are Booking appointment for {{doctorName}}</h2>
      <ajax-call id="ajax"></ajax-call>
      <template is="dom-repeat" items={{slotDetails}}>
        <p class="slotDate">Slot Date: {{item.slotDate}}</p>
      <template is="dom-repeat" items={{item.slots}} as="slot">
      <paper-card heading="{{slot.slotTime}}" image="" elevation="1" animated-shadow="false">
        <div class="card-content">
        <p>status {{slot.availableStatus}}</p>
        </div>
        <div class="card-actions"> 
        <paper-button on-click="_handleBook" raised>Book Slot</paper-button> 
        </div>
      </paper-card>
      </template>
      </template>
      <paper-dialog id="modal">
      <iron-form id="form">
      <form>
          <paper-input type="number" id="mobileNo" label="Enter Mobile Number" required
              error-message="Mobile Number is required">Mobile Number</paper-input>
          <paper-input label="Enter Email ID" id="mail" required error-message="Email ID is required">Email ID</paper-input>
      </form>
  </iron-form>
  <div class="buttons">
  <paper-button id="cancel" dialog-dismiss>Cancel</paper-button>
    <paper-button on-click="_handleSubmit">OK</paper-button>
  </div>
      </paper-dialog>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'book-slot'
      },
      doctorName: {
        type: String,
        value: ''
      },
      slotDetails: {
        type: Array,
        value: [
          {
            slotDate: "02-09-19",
            slots: [
              {
                slotId:424,
                slotTime: "10:30 to 11:00",
                availableStatus:"available"
              },
              {
                slotId:424,
                slotTime: "10:30 to 11:00",
                availableStatus:"available"
              }],
          },
          {
            slotDate: "02-09-19",
            slots: [
              {
                slotId:424,
                slotTime: "10:30 to 11:00",
                availableStatus:"available"
              }],
          }
        ]
      }
    };
  }
  ready() {
    super.ready();
    let doctorDetails = JSON.parse(sessionStorage.getItem('selectedDoctor'));
    let { doctorName, doctorId } = doctorDetails;
    this.doctorName = doctorName;
    this.$.ajax._makeAjaxCall('get', `${baseUrl}/cureme/doctors/${doctorId}/addSlot`, null, 'ajaxResponse')
  }
  _handleBook(event)
  {
    this.$.modal.open();
console.log(event)
  }
  _handleSubmit()
  {
    let mobileNumber=this.$.mobileNo.value
    let emailId=this.$.mail.value;
  }
}

window.customElements.define('book-slot', BookSlot);
