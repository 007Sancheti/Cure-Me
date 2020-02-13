define(["../../node_modules/@polymer/polymer/polymer-element.js","./shared/api/ajax-call.js","../../node_modules/@polymer/app-route/app-location.js"],function(_polymerElement,_ajaxCall,_appLocation){"use strict";/**
 * @customElement
 * @polymer
 */class DoctorDashboard extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          display: block;
          background: linear-gradient(to right, #c9d6ff, #e2e2e2);
          overflow-y:hidden;
        }
        paper-button
        {
          background:white;
        }
        #add
        {
          margin-top:10px;
          margin-right:20px;
          display:flex;
          justify-content:flex-end;
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
                     background-color:lightgreen;
                   }
                   #slotTable{
                     margin-top:10px
                   }
      </style>
      <div id="add">
      <paper-button on-click="_handleAdd" raised>Add Slot</paper-button>
      <paper-button on-click="_handleLogout" raised>logout</paper-button>
      </div>
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
    `}static get properties(){return{patientDetails:{type:Array,value:[{slotTime:"1234567",slotDate:"1234567",disease:"1234567",mobileNumber:"1234567",emailId:"1234567"},{slotTime:"1234567",slotDate:"1234567",disease:"1234567",mobileNumber:"1234567",emailId:"1234567"},{slotTime:"1234567",slotDate:"1234567",disease:"1234567",mobileNumber:"1234567",emailId:"1234567"}]}}}/**
   * listening customEvents sent from child elements
   */ready(){super.ready();this.addEventListener("ajax-response",e=>this._patientDetails(e))}_handleAdd(){//this.set('route.path','./add-slot')
window.history.pushState({},null,"#/add-slot");window.dispatchEvent(new CustomEvent("location-changed"))}_handleLogout(){sessionStorage.clear();//this.set('route.path','./landing-page')
window.history.pushState({},null,"#/landing-page");window.dispatchEvent(new CustomEvent("location-changed"))}/** 
   * call the API to fetch the data to render it on the screen
   */connectedCallback(){super.connectedCallback();console.log(sessionStorage.getItem("doctorId"));this.$.ajax._makeAjaxCall("get",`${baseUrl}/cureme/slots/doctors/${sessionStorage.getItem("doctorId")}`,null,"ajaxResponse")}//populating data in dom repeat for account details
_patientDetails(event){this.patientDetails=event.detail.data.slots}}window.customElements.define("doctor-dashboard",DoctorDashboard)});