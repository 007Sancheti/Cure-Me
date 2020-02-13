define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/paper-input/paper-input.js","../../node_modules/@polymer/paper-toast/paper-toast.js","../../node_modules/@polymer/iron-form/iron-form.js","./shared/api/ajax-call.js","../../node_modules/@polymer/app-route/app-location.js","../../node_modules/@polymer/iron-a11y-keys/iron-a11y-keys.js"],function(_polymerElement,_paperButton,_paperInput,_paperToast,_ironForm,_ajaxCall,_appLocation,_ironA11yKeys){"use strict";/**
 * @customElement
 * @polymer
 */class DoctorLogin extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
      :host {
        display: block;
        background: linear-gradient(to right, #c9d6ff, #e2e2e2);
        overflow-y:hidden;
        height:87vh;
      }
      input[type=text] {
        height: 45px;
        width: 45px;
        font-size: 25px;
        text-align: center;
        border: 1px solid #000000;
    }
      #login
      {
        background: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
        width:50%;
        margin:70px auto;
        padding:15px;
        box-shadow:0px 0px 5px 5px;
      }
        span{
          display:flex;
          margin-top: 10px;
          justify-content: center;
        }
      </style>
      <app-location route={{route}}></app-location>
      <!-- <iron-a11y-keys id="keys" keys="enter" target="{{target}}" on-keys-pressed="_sendOtp"></iron-a11y-keys> -->
      <paper-toast text={{message}} id="toast"></paper-toast>
      <ajax-call id="ajax"></ajax-call>
      <iron-form id="login">
      <form>
      <paper-input id="mobileNumber" required allowed-pattern=[0-9] minlength="10" maxlength="10" label="Enter Mobile Number"></paper-input>
     <div id="otp" hidden$=[[!visible]]>
      <input id="codeBox1" type="text" pattern="[0-9]" maxlength="1" on-keyup="onKeyUpEvent" on-focus="onFocusEvent"/>
      <input id="codeBox2" type="text" pattern="[0-9]" maxlength="1" on-keyup="onKeyUpEvent" on-focus="onFocusEvent"/>
      <input id="codeBox3" type="text" pattern="[0-9]" maxlength="1" on-keyup="onKeyUpEvent" on-focus="onFocusEvent"/>
      <input id="codeBox4" type="text" pattern="[0-9]" maxlength="1" on-keyup="onKeyUpEvent" on-focus="onFocusEvent"/>
      <input id="codeBox5" type="text" pattern="[0-9]" maxlength="1" on-keyup="onKeyUpEvent" on-focus="onFocusEvent"/>    
      </div>
      <span><paper-button on-click="_sendOtp" raised id="requestOtp" hidden$=[[visible]]>Request Otp</paper-button></span>
      <span><paper-button on-click="_sendOtp" raised id="resendOtp" hidden$=[[!visible]]>Resend Otp</paper-button>
      <paper-button on-click="_handleSubmit" raised id="submit" hidden$=[[!visible]]>Submit</paper-button>
      </span>
      </form>
      </iron-form>
    `}static get properties(){return{message:{type:String,value:""},visible:{type:String,value:/* ignoreName */ /* ignoreName */!1/* skipSlots */ /* skipSlots */},otp:{type:String,value:""}}}/**
   * listening customEvents sent from child elements
   */ready(){super.ready();this.addEventListener("ajax-response",e=>this._loginStatus(e))}/**
   * 
   * @param {mouseEvent} event on SignIn click event is fired
   * validate if mobile No. has 10 digits or not
   * get the user details from the database
   */_sendOtp(){const mobileNumber=this.$.mobileNumber.value;if(10==mobileNumber.length){this.visible=!0/* skipSlots */;let postObj={mobileNumber:parseInt(mobileNumber)};this.$.ajax._makeAjaxCall("post",`${baseUrl}/cureme/users`,postObj,"")}else{this.message="enter valid mobile no.";this.$.toast.open()}}/**
   * 
   * @param {*} event 
   * handles the response sent by the database
   * transfer the user on the base of role as customer or staff to respective page
   */_loginStatus(event){const data=event.detail.data;this.message=`${data.message}`;this.$.toast.open();if(data.role="DOCTOR"){sessionStorage.setItem("userId",data.userId);sessionStorage.setItem("doctorId",data.doctorId);this.set("route.path","./doctor-dashboard")}}_handleSubmit(){const mobileNumber=this.$.mobileNumber.value;for(let i=1,input;5>=i;i++){input=this.getCodeBoxElement(i).value;this.otp+=input}let postObj={mobileNumber:parseInt(mobileNumber),otp:parseInt(this.otp)};console.log(postObj);this.$.ajax._makeAjaxCall("post",`http://10.117.189.28:9090/cureme/otp`,postObj,"ajaxResponse")}getCodeBoxElement(index){return this.shadowRoot.getElementById("codeBox"+index)}onKeyUpEvent(event){let id=event.target.id,index=parseInt(id.substr(7,8));const eventCode=event.which||event.keyCode;if(1===this.getCodeBoxElement(index).value.length){if(5!==index){this.getCodeBoxElement(index+1).focus()}else{this.getCodeBoxElement(index).blur()}}if(8===eventCode&&1!==index){this.getCodeBoxElement(index-1).focus()}}onFocusEvent(event){let id=event.target.id,index=id.substr(7,8);for(let item=1;item<index;item++){const currentElement=this.getCodeBoxElement(item);if(!currentElement.value){currentElement.focus();break}}}}window.customElements.define("doctor-login",DoctorLogin)});