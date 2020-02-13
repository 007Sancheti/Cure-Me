define(["../../node_modules/@polymer/polymer/polymer-element.js","./shared/api/ajax-call.js","../../node_modules/@polymer/paper-card/paper-card.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/paper-dialog/paper-dialog.js","../../node_modules/@polymer/paper-input/paper-input.js","../../node_modules/@polymer/paper-toast/paper-toast.js","../../node_modules/@polymer/app-route/app-location.js"],function(_polymerElement,_ajaxCall,_paperCard,_paperButton,_paperDialog,_paperInput,_paperToast,_appLocation){"use strict";/**
 * @customElement
 * @polymer
 */class BookSlot extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
      :host {
        display: block;
        background: linear-gradient(to right, #c9d6ff, #e2e2e2);
        overflow-y:hidden;
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
        #back
        {
          background:white;
          color:black;
          width:100px;
          margin-top:10px;
        }
        [hidden] {
          display: none !important;
        }    
      </style>
      <paper-button on-click="_handleBack" id="back" raised>Back</paper-button>
      <h2>You are Booking appointment for {{doctorName}}</h2>
      <app-location route="{{route}}"></app-location>
      <ajax-call id="ajax"></ajax-call>
      <template is="dom-repeat" items={{slotDetails}}>
        <p class="slotDate">Slot Date: {{item.slotDate}}</p>
      <template is="dom-repeat" items={{item.slots}} as="slot">
      <paper-card heading="{{slot.slotTime}}" image="" elevation="1" animated-shadow="false">
        <div class="card-content">
        <p>{{slot.availableStatus}}</p>
        </div>
        <div class="card-actions"> 
        <template is="dom-if" if="{{_checkAvailability(slot.availableStatus)}}">
        <paper-button on-click="_handleBook" data-set$={{item.slotDate}} raised>Book Slot</paper-button> 
        </template>
        </div>
      </paper-card>
      </template>
      </template>
      <paper-dialog id="modal">
      <iron-form id="form" hidden$={{hide}}>
      <form>
         <h3 id="slotSelected"></h3>
          <paper-input id="mobileNo" type="text" maxlength="10" allowed-pattern=[0-9] label="Enter Mobile Number" required
              error-message="Mobile Number is required">Mobile Number</paper-input>
          <paper-input label="Enter Email ID" id="mail" required error-message="Email ID is required">Email ID</paper-input>
          <paper-input label="Disease" id="disease"></paper-input>
      </form>
  </iron-form>
  <div class="buttons" hidden$={{hide}}>
  <paper-button id="cancel" dialog-dismiss>Cancel</paper-button>
    <paper-button on-click="_handleSubmit">OK</paper-button>
  </div>
  <div hidden$={{!hide}}>
<h2>{{message}}</h2>
<paper-button on-click="_handleRoute" raised>Ok</paper-button>
</div>
      </paper-dialog>
      <paper-toast id="toast" text={{message}}></paper-toast>
    `}static get properties(){return{prop1:{type:String,value:"book-slot"},doctorName:{type:String,value:""},slotDetails:{type:Array,value:[{slotDate:"02-09-19",slots:[{slotId:424,slotTime:"10:30 to 11:00",availableStatus:"available"},{slotId:424,slotTime:"10:30 to 11:00",availableStatus:"available"}]},{slotDate:"02-09-19",slots:[{slotId:424,slotTime:"10:30 to 11:00",availableStatus:"available"}]}]},slotTime:{type:String,value:""},slotDate:{type:String,value:""},slotId:{type:Number,value:0},doctorId:{type:Number,value:0},hide:{type:Boolean,value:/* ignoreName */ /* ignoreName */!1/* skipSlots */ /* skipSlots */}}}ready(){super.ready();let doctorDetails=JSON.parse(sessionStorage.getItem("selectedDoctor")),{doctorName,doctorId}=doctorDetails;this.doctorName=doctorName;this.doctorId=doctorId;this.addEventListener("ajax-response",e=>this._slotsList(e));this.addEventListener("book-slot",e=>this._confirmationMessage(e));this.$.ajax._makeAjaxCall("get",`${baseUrl}/cureme/slots/doctors/${doctorId}/availableslots`,null,"ajaxResponse")}_checkAvailability(slot){if("AVAILABLE"==slot){return!0/* skipSlots */}}_handleBack(){this.set("route.path","./patient-home")}_confirmationMessage(event){this.hide=!0;console.log(event.detail.data.message);this.message=event.detail.data.message;// this.$.toast.open();
}_handleRoute(){this.$.modal.close();this.set("route.path","/patient-home")}_slotsList(event){this.slotDetails=event.detail.data.availableDates}_handleBook(event){let details=event.model.slot;this.slotTime=details.slotTime;this.$.slotSelected.innerHTML=this.slotTime;this.$.modal.open();this.slotDate=event.target.dataset.set;this.slotId=details.slotId}_handleSubmit(){let mobileNumber=this.$.mobileNo.value,emailId=this.$.mail.value,disease=this.$.disease.value,postObj={disease,doctorId:this.doctorId,emailId,mobileNumber,slotDate:this.slotDate,slotId:this.slotId,slotTime:this.slotTime};console.log(postObj);this.$.ajax._makeAjaxCall("post",`${baseUrl}/cureme/users/bookslot`,postObj,"bookSlot")}}window.customElements.define("book-slot",BookSlot)});