define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/polymer/lib/elements/dom-repeat.js","./shared/api/ajax-call.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/iron-icons/iron-icons.js","../../node_modules/@polymer/iron-icon/iron-icon.js","../../node_modules/@polymer/app-route/app-location.js"],function(_polymerElement,_domRepeat,_ajaxCall,_paperButton,_ironIcons,_ironIcon,_appLocation){"use strict";/**
* @customElement
* @polymer
*/class PatientHome extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
<style>
  :host {
    display: block;
    background: linear-gradient(to right, #c9d6ff, #e2e2e2);
    overflow-y:hidden;
  }

  #search {
    width:60%;
    height: 30px;
    padding: 10px;
    font-size: 1.3rem;
  }

  [hidden] {
    display: none !important;
  }

  #field {
    padding: 10px;
    width: 200px;
    margin: 0px auto;
    height: 30px;
    font-size: 1.3rem;
  }

  #search-container {
    display: grid;
    margin-top:10px;
    grid-template-columns: 300px auto;
    grid-template-areas: 'g1 g2''g3 g3';
  }

  #grid1 {
    grid-area: g1;
  }

  #grid2 {
    grid-area: g2;
  }
  #grid3 {
    grid-area: g3;
  }
  #location-name {
    width:200px;
    padding: 10px;
    border: 1px solid gray;
    text-align: initial;
    cursor: pointer;
  }
  ul
  {
    display:flex;
    list-style:none;
    align-items: center;
    background:lightgreen;
    height:40px;
    margin-top:10px;
    cursor: pointer;
    justify-content:space-between;
  }
  li
  {
    width:100px;
  }
  iron-icon
  {
    transform:translate(0px,-2px);
  }
   #Heading
   {
     background:#03a9f4;
   }
</style>
<ajax-call id="ajax"></ajax-call>
<app-location route="{{route}}"></app-location>
<div id="search-container">
  <div id="grid1">
<input id="field" placeholder="Location" value="{{filterVal::input}}" />
  <template is="dom-repeat" items="[[items]]" filter="{{_filterLocation(filterVal)}}">
    <div id="location-name" on-click="select" hidden$={{hide}}>{{item}}</div>
  </template>
</div>
<div id="grid2">
<input type="text" id="search" placeholder="Search Doctors or By Speciality" />
<paper-button raised on-click="_handleSearch">Search</paper-button>
</div>
<div id="grid3">
<ul id="Heading">
      <li>Doctor Id</li>
      <li>Doctor Name</li>
      <li>Qualification</li>
      <li>Experience</li>
      <li>Specialization</li>
      <li>Disease Cured</li>
      <li>Rating</li>
      <li>Location</li>
</ul>
<template is="dom-repeat" items={{doctorsList}}>
<ul on-click="_handleView">
<li>{{item.doctorId}}</li>
<li>{{item.doctorName}}</li>
<li>{{item.qualification}}</li>
<li>{{item.experience}}</li>
<li>{{item.specialization}}</li>
<li>{{item.diseaseCure}}</li>
<li>{{item.rating}}<iron-icon icon="star"></iron-icon></li>
<li>{{item.location}}</li>
</ul>
</template>
</div>
</div>
`}static get properties(){return{items:{type:Array,value:["Bangalore","Electronic city","Delhi","Bannerghatta","Bareilly","Denmark","Australia"]},hide:{type:Boolean,value:/* ignoreName */ /* ignoreName */!1/* skipSlots */ /* skipSlots */},doctorsList:{type:Array,value:[]}}}ready(){super.ready();this.addEventListener("ajax-response",e=>this._doctorsList(e));this.hide=!0/* skipSlots */}/**
   * _filterLocation() filters the page on the basis of location 
   * @param {String} val location value
   */_filterLocation(val){this.hide=!1;return function(location){console.log(location);if(!val)return!1;if(!location)return!1;return location&&~location.indexOf(val)}}/**
   * select() enters the selected location into input
   * @param {*} event 
   */select(event){console.log(event.model.item);this.$.field.value=event.model.item;this.hide=!0}_handleSearch(){const search=this.$.search.value,location=this.$.field.value;this.$.ajax._makeAjaxCall("get",`${baseUrl}/cureme/users?location=${location}&searchkey=${search}`,null,"ajaxResponse")}_doctorsList(event){console.log(event.detail.data);this.doctorsList=event.detail.data;console.log(this.doctorsList)}_handleView(event){console.log(event.model.item);let obj=event.model.item;sessionStorage.setItem("selectedDoctor",JSON.stringify(obj));this.dispatchEvent(new CustomEvent("refresh-name",{detail:{item:obj.doctorName},composed:!0,bubbles:!0}));this.set("route.path","./book-slot")}}window.customElements.define("patient-home",PatientHome)});