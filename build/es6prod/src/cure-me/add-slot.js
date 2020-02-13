define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js","../../node_modules/@vaadin/vaadin-time-picker/vaadin-time-picker.js","../../node_modules/@vaadin/vaadin-select/vaadin-select.js","../../node_modules/@polymer/paper-input/paper-input.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/paper-toast/paper-toast.js","../../node_modules/@polymer/iron-form/iron-form.js","../../node_modules/@polymer/paper-dialog/paper-dialog.js","./shared/api/ajax-call.js","../../node_modules/@polymer/app-route/app-location.js"],function(_polymerElement,_vaadinDatePicker,_vaadinTimePicker,_vaadinSelect,_paperInput,_paperButton,_paperToast,_ironForm,_paperDialog,_ajaxCall,_appLocation){"use strict";/**
 * @customElement
 * @polymer
 */class AddSlot extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
    <style>
    :host {
      display: block;
      background: linear-gradient(to right, #c9d6ff, #e2e2e2);
      overflow-y:hidden;
    }
    #form{
        display:flex;
        flex-direction:column;
          border:2px solid black;
          border-radius:5px;
          padding:20px;
          margin: 10px auto;
          width:500px;
          background:white;
      }
      #addSlot{
          background-color:blue;
          border-radius:5px;
          color:white;
          margin-top:10px;
      }
      h1{
          color:blue;
          text-align:center;
      } 
      paper-button
      {
        background:white;
      }
    </style>
    <app-location route={{route}}></app-location>
    <div id="back">
    <paper-button on-click="_handleBack" raised>Back </paper-button>
    </div>
    <ajax-call id="ajax"></ajax-call>
    <iron-form id="form">
    <h1>Add Slot</h1>
    <vaadin-date-picker id="fromDate" label="From " placeholder="Choose Date">
  </vaadin-date-picker>
  <vaadin-date-picker id="toDate" label="To " placeholder="Choose Date">
  </vaadin-date-picker>
  <vaadin-time-picker id="fromTime" label="From" placeholder="Choose Time"></vaadin-time-picker>
  <vaadin-time-picker id="toTime" label="To" placeholder="Choose Time"></vaadin-time-picker>
  <vaadin-select id="location" placeholder="Select" label="Location" >
    <template>
      <vaadin-list-box >
      <template is="dom-repeat" placeholder="Select" items={{locationList}}>
         <vaadin-item>{{item}}</vaadin-item>
      </template>        
      </vaadin-list-box>
    </template>
  </vaadin-select>
  <paper-button id="addSlot" label="Add Slot" on-click="_onClick" raised>Add Slot</paper-button>
  </iron-form>
  <paper-dialog id="modal">
  <h3> {{message}}</h3>
  <div class="buttons">
  <paper-button dialog-dismiss on-click="_handleOk">ok</paper-button>
</paper-dialog>
<paper-toast text={{message}} id="toast"></paper-toast>`}static get properties(){return{locationList:{type:Array,value:["bangalore","Electronic city","Delhi","Bannerghatta"]},message:String}}/**
   * listening customEvents sent from child elements
   */ready(){super.ready();this.addEventListener("ajax-response",e=>this._addSlots(e))}/**
   * getting the values of the entries for the booking of slots
   */_onClick(){const availableFromDate=this.$.fromDate.value,availableToDate=this.$.toDate.value,availableFrom=this.$.fromTime.value,availableTo=this.$.toTime.value,location=this.$.location.value;if(""==availableFromDate||""==availableToDate||""==availableFrom||""==availableTo||""==location){this.message="Field must not be null";this.$.modal.open()}else{const postObj={availableFromDate,availableToDate,availableFrom,availableTo,location};this.$.ajax._makeAjaxCall("post",`${baseUrl}/cureme/slots/doctors/${sessionStorage.getItem("doctorId")}`,postObj,"ajaxResponse")}}/**
   * showing message if slots are added sucessfully
   */_addSlots(){this.message="Slot Added Successfully";this.$.modal.open()}/**
 * reseting the form
 */_handleOk(){this.$.form.reset()}_handleBack(){this.set("route.path","./doctor-dashboard")}}window.customElements.define("add-slot",AddSlot)});