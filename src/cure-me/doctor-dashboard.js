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
      </style>
      <app-location route={{route}}></app-location>
      <ajax-call id="ajax"></ajax-call>
      <table>
      <th>Time</th>
      <th>Date</th>
      <th>Disease</th>
      <th>mobileNumbert</th>
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
        value: []
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
     this.$.ajax._makeAjaxCall('get',`http://10.117.189.245:9090/forxtransfer/customers/${sessionStorage.getItem('userId')}/transactions?month=9&year=2019`,null,'ajaxResponse')  
  }
  //populating data in dom repeat for account details
  _patientDetails(event){  
    this.patientDetails=event.detail.data
}
}

window.customElements.define('doctor-dashboard', DoctorDashboard);
