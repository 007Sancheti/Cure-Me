define(["./cure-me.js","./shared/api/ajax-call.js"],function(_cureMe,_ajaxCall){"use strict";function _templateObject_98b00e204e2611ea968e0b510ccc7207(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n      :host {\n        display: block;\n        background: linear-gradient(to right, #c9d6ff, #e2e2e2);\n        overflow-y:hidden;\n        height:87vh;\n      }\n      input[type=text] {\n        height: 45px;\n        width: 45px;\n        font-size: 25px;\n        text-align: center;\n        border: 1px solid #000000;\n    }\n      #login\n      {\n        background: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);\n        width:50%;\n        margin:70px auto;\n        padding:15px;\n        box-shadow:0px 0px 5px 5px;\n      }\n        span{\n          display:flex;\n          margin-top: 10px;\n          justify-content: center;\n        }\n      </style>\n      <app-location route={{route}}></app-location>\n      <!-- <iron-a11y-keys id=\"keys\" keys=\"enter\" target=\"{{target}}\" on-keys-pressed=\"_sendOtp\"></iron-a11y-keys> -->\n      <paper-toast text={{message}} id=\"toast\"></paper-toast>\n      <ajax-call id=\"ajax\"></ajax-call>\n      <iron-form id=\"login\">\n      <form>\n      <paper-input id=\"mobileNumber\" required allowed-pattern=[0-9] minlength=\"10\" maxlength=\"10\" label=\"Enter Mobile Number\"></paper-input>\n     <div id=\"otp\" hidden$=[[!visible]]>\n      <input id=\"codeBox1\" type=\"text\" pattern=\"[0-9]\" maxlength=\"1\" on-keyup=\"onKeyUpEvent\" on-focus=\"onFocusEvent\"/>\n      <input id=\"codeBox2\" type=\"text\" pattern=\"[0-9]\" maxlength=\"1\" on-keyup=\"onKeyUpEvent\" on-focus=\"onFocusEvent\"/>\n      <input id=\"codeBox3\" type=\"text\" pattern=\"[0-9]\" maxlength=\"1\" on-keyup=\"onKeyUpEvent\" on-focus=\"onFocusEvent\"/>\n      <input id=\"codeBox4\" type=\"text\" pattern=\"[0-9]\" maxlength=\"1\" on-keyup=\"onKeyUpEvent\" on-focus=\"onFocusEvent\"/>\n      <input id=\"codeBox5\" type=\"text\" pattern=\"[0-9]\" maxlength=\"1\" on-keyup=\"onKeyUpEvent\" on-focus=\"onFocusEvent\"/>    \n      </div>\n      <span><paper-button on-click=\"_sendOtp\" raised id=\"requestOtp\" hidden$=[[visible]]>Request Otp</paper-button></span>\n      <span><paper-button on-click=\"_sendOtp\" raised id=\"resendOtp\" hidden$=[[!visible]]>Resend Otp</paper-button>\n      <paper-button on-click=\"_handleSubmit\" raised id=\"submit\" hidden$=[[!visible]]>Submit</paper-button>\n      </span>\n      </form>\n      </iron-form>\n    "]);_templateObject_98b00e204e2611ea968e0b510ccc7207=function _templateObject_98b00e204e2611ea968e0b510ccc7207(){return data};return data}(0,_cureMe.Polymer)({is:"iron-a11y-keys",behaviors:[_cureMe.IronA11yKeysBehavior],properties:{/** @type {?Node} */target:{type:Object,observer:"_targetChanged"},/**
     * Space delimited list of keys where each key follows the format:
     * `[MODIFIER+]*KEY[:EVENT]`.
     * e.g. `keys="space ctrl+shift+tab enter:keyup"`.
     * More detail can be found in the "Grammar" section of the documentation
     */keys:{type:String,reflectToAttribute:!0/* ignoreName */ /* skipSlots */ /* ignoreName */ /* skipSlots */,observer:"_keysChanged"}},attached:function attached(){if(!this.target){this.target=this.parentNode}},_targetChanged:function _targetChanged(target){this.keyEventTarget=target},_keysChanged:function _keysChanged(){this.removeOwnKeyBindings();this.addOwnKeyBinding(this.keys,"_fireKeysPressed")},_fireKeysPressed:function _fireKeysPressed(event){this.fire("keys-pressed",event.detail,{})}});var DoctorLogin=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(DoctorLogin,_PolymerElement);function DoctorLogin(){babelHelpers.classCallCheck(this,DoctorLogin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DoctorLogin).apply(this,arguments))}babelHelpers.createClass(DoctorLogin,[{key:"ready",/**
     * listening customEvents sent from child elements
     */value:function ready(){var _this=this;babelHelpers.get(babelHelpers.getPrototypeOf(DoctorLogin.prototype),"ready",this).call(this);this.addEventListener("ajax-response",function(e){return _this._loginStatus(e)})}/**
     * 
     * @param {mouseEvent} event on SignIn click event is fired
     * validate if mobile No. has 10 digits or not
     * get the user details from the database
     */},{key:"_sendOtp",value:function _sendOtp(){var mobileNumber=this.$.mobileNumber.value;if(10==mobileNumber.length){this.visible=!0;var postObj={mobileNumber:parseInt(mobileNumber)};this.$.ajax._makeAjaxCall("post","".concat(baseUrl,"/cureme/users"),postObj,"")}else{this.message="enter valid mobile no.";this.$.toast.open()}}/**
     * 
     * @param {*} event 
     * handles the response sent by the database
     * transfer the user on the base of role as customer or staff to respective page
     */},{key:"_loginStatus",value:function _loginStatus(event){var data=event.detail.data;this.message="".concat(data.message);this.$.toast.open();if(data.role="DOCTOR"){sessionStorage.setItem("userId",data.userId);sessionStorage.setItem("doctorId",data.doctorId);this.set("route.path","./doctor-dashboard")}}},{key:"_handleSubmit",value:function _handleSubmit(){for(var mobileNumber=this.$.mobileNumber.value,i=1,input;5>=i;i++){input=this.getCodeBoxElement(i).value;this.otp+=input}var postObj={mobileNumber:parseInt(mobileNumber),otp:parseInt(this.otp)};console.log(postObj);this.$.ajax._makeAjaxCall("post","http://10.117.189.28:9090/cureme/otp",postObj,"ajaxResponse")}},{key:"getCodeBoxElement",value:function getCodeBoxElement(index){return this.shadowRoot.getElementById("codeBox"+index)}},{key:"onKeyUpEvent",value:function onKeyUpEvent(event){var id=event.target.id,index=parseInt(id.substr(7,8)),eventCode=event.which||event.keyCode;if(1===this.getCodeBoxElement(index).value.length){if(5!==index){this.getCodeBoxElement(index+1).focus()}else{this.getCodeBoxElement(index).blur()}}if(8===eventCode&&1!==index){this.getCodeBoxElement(index-1).focus()}}},{key:"onFocusEvent",value:function onFocusEvent(event){for(var id=event.target.id,index=id.substr(7,8),item=1,currentElement;item<index;item++){currentElement=this.getCodeBoxElement(item);if(!currentElement.value){currentElement.focus();break}}}}],[{key:"template",get:function get(){return(0,_cureMe.html$1)(_templateObject_98b00e204e2611ea968e0b510ccc7207())}},{key:"properties",get:function get(){return{message:{type:String,value:""},visible:{type:String,value:/* ignoreName */ /* ignoreName */!1/* skipSlots */ /* skipSlots */ /* skipSlots */ /* skipSlots */},otp:{type:String,value:""}}}}]);return DoctorLogin}(_cureMe.PolymerElement);window.customElements.define("doctor-login",DoctorLogin)});