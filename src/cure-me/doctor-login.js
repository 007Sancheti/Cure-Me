import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/iron-form/iron-form.js';
import './shared/api/ajax-call.js';
import '@polymer/app-route/app-location.js';
/**
 * @customElement
 * @polymer
 */
class DoctorLogin extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        display: block;
      }
      input[type=number] {
        height: 45px;
        width: 45px;
        font-size: 25px;
        text-align: center;
        border: 1px solid #000000;
    }
      #login
      {
        background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
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
      <paper-toast text={{message}} id="toast"></paper-toast>
      <ajax-call id="ajax"></ajax-call>
      <iron-form id="login">
      <form>
      <paper-input id="mobileNumber" required allowed-pattern=[0-9] minlength="10" maxlength="10" label="Enter Mobile Number"></paper-input>
     <div id="otp" hidden$=[[!visible]]>
      <input id="codeBox1" type="number" maxlength="1" on-keyup="onKeyUpEvent" on-focus="onFocusEvent"/>
      <input id="codeBox2" type="number" maxlength="1" on-keyup="onKeyUpEvent" on-focus="onFocusEvent"/>
      <input id="codeBox3" type="number" maxlength="1" on-keyup="onKeyUpEvent" on-focus="onFocusEvent"/>
      <input id="codeBox4" type="number" maxlength="1" on-keyup="onKeyUpEvent" on-focus="onFocusEvent"/>
      <input id="codeBox5" type="number" maxlength="1" on-keyup="onKeyUpEvent" on-focus="onFocusEvent"/>    
      </div>
      <span><paper-button on-click="_sendOtp" raised id="requestOtp" hidden$=[[visible]]>Request Otp</paper-button></span>
      <span><paper-button on-click="_sendOtp" raised id="requestOtp" hidden$=[[!visible]]>Resend Otp</paper-button>
      <paper-button on-click="_handleSubmit" raised id="submit" hidden$=[[!visible]]>Submit</paper-button>
      </span>
      </form>
      </iron-form>
    `;
  }
  static get properties() {
    return {
      message:{
        type:String,
        value:''
      },
      visible:{
        type:String,
        value:false
      },
      otp:{
        type:String,
        value:''
      },
    };
  }
  /**
   * listening customEvents sent from child elements
   */
  ready()
  {
    super.ready();
    this.addEventListener('ajax-response', (e) => this._loginStatus(e))
  }
  /**
   * 
   * @param {mouseEvent} event on SignIn click event is fired
   * validate if mobile No. has 10 digits or not
   * get the user details from the database
   */
  _sendOtp(){
  const mobileNumber= this.$.mobileNumber.value;
   if(mobileNumber.length==10){
    this.visible=true;
    let postObj={mobileNumber:parseInt(mobileNumber)}
     this.$.ajax._makeAjaxCall('post',`http://10.117.189.28:9090/cureme/users`,postObj,'')  
    }
    else{
      this.message='enter valid mobile no.';
      this.$.toast.open();
    }
  } 
  /**
   * 
   * @param {*} event 
   * handles the response sent by the database
   * transfer the user on the base of role as customer or staff to respective page
   */
  _loginStatus(event)
  {
      const data=event.detail.data;
      this.message=`${data.message}`
      this.$.toast.open();
      if(data.role='Doctor'){
      sessionStorage.setItem('userId',data.userId);
      sessionStorage.setItem('doctorId',data.doctorId);
      this.set('route.path','./doctor-dashboard')
}
  }
_handleSubmit(){
  const mobileNumber= this.$.mobileNumber.value;
  for(let i=1;i<=5;i++)
  {
    let input=this.getCodeBoxElement(i).value;
     this.otp+=input;
  }
  let postObj={mobileNumber:parseInt(mobileNumber),otp:parseInt(this.otp)}
  console.log(postObj)
  this.$.ajax._makeAjaxCall('post',`http://10.117.189.28:9090/cureme/otp`,postObj,'ajaxResponse')  
}
getCodeBoxElement(index) {
  return this.shadowRoot.getElementById('codeBox' + index);
}
 onKeyUpEvent(event) {
   let id=event.target.id
   let index=parseInt(id.substr(7,8))
  const eventCode = event.which || event.keyCode;
  if (this.getCodeBoxElement(index).value.length === 1) {
    if (index !== 5) {
      this.getCodeBoxElement(index+1).focus();
    } else {
      this.getCodeBoxElement(index).blur();

    }
  }
  if (eventCode === 8 && index !== 1) {
    this.getCodeBoxElement(index - 1).focus();
  }
}
 onFocusEvent(event) {
  let id=event.target.id
  let index=id.substr(7,8)
  for (let item = 1; item < index; item++) {
    const currentElement = this.getCodeBoxElement(item);
    if (!currentElement.value) {
        currentElement.focus();
        break;
    }
  }
}

}

window.customElements.define('doctor-login', DoctorLogin);
