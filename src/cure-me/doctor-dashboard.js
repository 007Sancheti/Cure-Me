import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './shared/api/ajax-call.js';
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
        
        table
        {
          border-collapse: collapse;
            width: 100%;
        }
            th, td {
                      padding: 10px; 
                   }
                   tr
                   {
                     font-weight: bolder;
                   }
                   tr:nth-child(even) 
                   {
                     background-color: #f2f2f2;
                   }
                   th
                   {
                     color:white;
                     font-weight: bolder;
                     text-align: left;
                     background-color:gray;
                   }
                   #slotTable{
                     margin-top:10px
                   }
      </style>
      <app-location route={{route}}></app-location>
      <ajax-call id="ajax"></ajax-call>
      <table id="slotTable">
      <th>Time</th>
      <th>Date(YYYY-MM-DD)</th>
      <th>Disease</th>
      <th>Mobile No</th>
      <th>Email</th>
<tbody>
  <template is="dom-repeat" items={{patientDetails}}>
      <tr>
          <td>{{item.slotTime}}</td>
          <td>{{item.slotDate}}</td>
          <td>{{item.disease}}</td>
          <td>{{item.mobileNumber}}</td>
          <td>{{item.emailId}}</td>
      </tr>
  </template>
</tbody>
</table>
    `;
  }

  static get properties() {
    return {
      patientDetails: {
        type: Array,
        value: [{slotTime:'1234567',slotDate:'1234567',disease:'1234567',mobileNumber:'1234567',emailId:'1234567'},{slotTime:'1234567',slotDate:'1234567',disease:'1234567',mobileNumber:'1234567',emailId:'1234567'},{slotTime:'1234567',slotDate:'1234567',disease:'1234567',mobileNumber:'1234567',emailId:'1234567'}
        ]
      }
    };
  }
    /**
   * listening customEvents sent from child elements
   */
  ready()
  {
    super.ready();
    this.addEventListener('ajax-response', (e) => this._patientDetails(e))
  }
  /** 
   * call the API to fetch the data to render it on the screen
   */
  connectedCallback()
  {  super.connectedCallback();
     this.$.ajax._makeAjaxCall('get',`http://10.117.189.176:9090/cureme/slots/doctors/1`,null,'ajaxResponse')  
  }
  //populating data in dom repeat for account details
  _patientDetails(event){  
    this.patientDetails=event.detail.data.slots;
}
}

window.customElements.define('doctor-dashboard', DoctorDashboard);
