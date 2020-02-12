import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import './shared/api/ajax-call.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
/**
* @customElement
* @polymer
*/
class PatientHome extends PolymerElement {
  static get template() {
    return html`
<style>
  :host {
    display: block;
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
</style>
<h2>Hello [[prop1]]!</h2>
<ajax-call id="ajax"></ajax-call>
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
<template is="dom-repeat" items={{doctorsList}}>
<div>
<iron-icon icon="menu"></iron-icon>{{item.doctorName}}
</div>
</template>
</div>
</div>
`;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'patient-home'
      },
      items: {
        type: Array,
        value: ['bangalore','Electronic city', 'Delhi', 'Bannerghatta']
      },
      hide: {
        type: Boolean,
        value: false
      },
      doctorsList:{
        type:Array,
        value:[{
          doctorName:"Dr.Abhinav"
        }]
      }
    };
  }
  ready()
  {
    super.ready();
    this.addEventListener('ajax-response',e=> this._doctorsList(e))
    this.hide=true;
  }
  /**
   * _filterLocation() filters the page on the basis of location 
   * @param {String} val location value
   */
  _filterLocation(val) {
    this.hide=false;
    return function (location) {
      console.log(location)
      if (!val) return false;
      if (!location) return false;
      return (location && ~location.indexOf(val));
    };
  }
  /**
   * select() enters the selected location into input
   * @param {*} event 
   */
  select(event) {
    console.log(event.model.item)
    this.$.field.value = event.model.item
    this.hide = true;
  }
  _handleSearch()
  {
    const search= this.$.search.value;
    const location=this.$.field.value;
    this.$.ajax._makeAjaxCall('get',`${baseUrl}/cureme/users?location=${location}&searchkey=${search}`,null,'ajaxResponse')
  }
  _doctorsList(event)
  {
    console.log(event.detail.data)
    this.doctorsList=event.detail.data;
    console.log(this.doctorsList)
  }
}

window.customElements.define('patient-home', PatientHome);