define(["exports","./cure-me.js","./shared/api/ajax-call.js"],function(_exports,_cureMe,_ajaxCall){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0/* ignoreName */ /* skipSlots */});_exports.usageStatistics$1=_exports.usageStatistics=_exports.runIfDevelopmentMode=_exports.TimePickerElement=_exports.ThemePropertyMixin=_exports.ThemableMixin=_exports.TextFieldMixin=_exports.TextFieldElement=_exports.SelectElement=_exports.OverlayElement=_exports.MultiSelectListMixin=_exports.Lumo=_exports.ListMixin=_exports.ListBoxElement=_exports.ItemMixin=_exports.ItemElement=_exports.FocusablesHelper=_exports.ElementMixin=_exports.DisableUpgradeMixin=_exports.DirMixin=_exports.DatePickerMixin=_exports.DatePickerHelper=_exports.DatePickerElement=_exports.ControlStateMixin=_exports.ComboBoxPlaceholder=_exports.ComboBoxMixin=_exports.ComboBoxLightElement=_exports.ComboBoxDataProviderMixin=_exports.ButtonElement=_exports.$version=_exports.$vaadinUsageStatisticsCollect=_exports.$vaadinUsageStatistics=_exports.$vaadinTimePicker=_exports.$vaadinThemePropertyMixin=_exports.$vaadinThemableMixin=_exports.$vaadinTextFieldMixin=_exports.$vaadinTextField=_exports.$vaadinSelect=_exports.$vaadinOverlay=_exports.$vaadinMultiSelectListMixin=_exports.$vaadinListMixin=_exports.$vaadinListBox=_exports.$vaadinItemMixin=_exports.$vaadinItem=_exports.$vaadinFocusablesHelper=_exports.$vaadinElementMixin=_exports.$vaadinDirMixin=_exports.$vaadinDevelopmentModeDetector=_exports.$vaadinDatePickerMixin=_exports.$vaadinDatePickerHelper=_exports.$vaadinDatePicker=_exports.$vaadinControlStateMixin=_exports.$vaadinComboBoxPlaceholder=_exports.$vaadinComboBoxMixin=_exports.$vaadinComboBoxLight=_exports.$vaadinComboBoxDataProviderMixin=_exports.$vaadinButton=_exports.$disableUpgradeMixin=void 0;var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),IOS_TOUCH_SCROLLING=IOS&&8<=IOS[1],DEFAULT_PHYSICAL_COUNT=3,HIDDEN_Y="-10000px",SECRET_TABINDEX=-100;/**
                            
                            `iron-list` displays a virtual, 'infinite' list. The template inside
                            the iron-list element represents the DOM to create for each list item.
                            The `items` property specifies an array of list item data.
                            
                            For performance reasons, not every item in the list is rendered at once;
                            instead a small subset of actual template elements *(enough to fill the
                            viewport)* are rendered and reused as the user scrolls. As such, it is important
                            that all state of the list template is bound to the model driving it, since the
                            view may be reused with a new model at any time. Particularly, any state that
                            may change as the result of a user interaction with the list item must be bound
                            to the model to avoid view state inconsistency.
                            
                            ### Sizing iron-list
                            
                            `iron-list` must either be explicitly sized, or delegate scrolling to an
                            explicitly sized parent. By "explicitly sized", we mean it either has an
                            explicit CSS `height` property set via a class or inline style, or else is sized
                            by other layout means (e.g. the `flex` or `fit` classes).
                            
                            #### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)
                            
                            ```html
                            <template is="x-list">
                              <style>
                                :host {
                                  display: block;
                                  height: 100vh;
                                  display: flex;
                                  flex-direction: column;
                                }
                            
                                iron-list {
                                  flex: 1 1 auto;
                                }
                              </style>
                              <app-toolbar>App name</app-toolbar>
                              <iron-list items="[[items]]">
                                <template>
                                  <div>
                                    ...
                                  </div>
                                </template>
                              </iron-list>
                            </template>
                            ```
                            #### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
                            ```html
                            <template is="x-list">
                              <style>
                                :host {
                                  display: block;
                                }
                            
                                iron-list {
                                  height: 100vh; /* don't use % values unless the parent element is sized.
                            *\/
                                }
                              </style>
                              <iron-list items="[[items]]">
                                <template>
                                  <div>
                                    ...
                                  </div>
                                </template>
                              </iron-list>
                            </template>
                            ```
                            #### Main document scrolling -
                            [jsbin](https://jsbin.com/wevirow/edit?html,output)
                            ```html
                            <head>
                              <style>
                                body {
                                  height: 100vh;
                                  margin: 0;
                                  display: flex;
                                  flex-direction: column;
                                }
                            
                                app-toolbar {
                                  position: fixed;
                                  top: 0;
                                  left: 0;
                                  right: 0;
                                }
                            
                                iron-list {
                                  /* add padding since the app-toolbar is fixed at the top *\/
                                  padding-top: 64px;
                                }
                              </style>
                            </head>
                            <body>
                              <app-toolbar>App name</app-toolbar>
                              <iron-list scroll-target="document">
                                <template>
                                  <div>
                                    ...
                                  </div>
                                </template>
                              </iron-list>
                            </body>
                            ```
                            
                            `iron-list` must be given a `<template>` which contains exactly one element. In
                            the examples above we used a `<div>`, but you can provide any element (including
                            custom elements).
                            
                            ### Template model
                            
                            List item templates should bind to template models of the following structure:
                            
                            ```js
                            {
                              index: 0,        // index in the item array
                              selected: false, // true if the current item is selected
                              tabIndex: -1,    // a dynamically generated tabIndex for focus management
                              item: {}         // user data corresponding to items[index]
                            }
                            ```
                            
                            Alternatively, you can change the property name used as data index by changing
                            the `indexAs` property. The `as` property defines the name of the variable to
                            add to the binding scope for the array.
                            
                            For example, given the following `data` array:
                            
                            ##### data.json
                            
                            ```js
                            [
                              {"name": "Bob"},
                              {"name": "Tim"},
                              {"name": "Mike"}
                            ]
                            ```
                            
                            The following code would render the list (note the name property is bound from
                            the model object provided to the template scope):
                            
                            ```html
                            <iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
                            <iron-list items="[[data]]" as="item">
                              <template>
                                <div>
                                  Name: [[item.name]]
                                </div>
                              </template>
                            </iron-list>
                            ```
                            
                            ### Grid layout
                            
                            `iron-list` supports a grid layout in addition to linear layout by setting
                            the `grid` attribute.  In this case, the list template item must have both fixed
                            width and height (e.g. via CSS). Based on this, the number of items
                            per row are determined automatically based on the size of the list viewport.
                            
                            ### Accessibility
                            
                            `iron-list` automatically manages the focus state for the items. It also
                            provides a `tabIndex` property within the template scope that can be used for
                            keyboard navigation. For example, users can press the up and down keys to move
                            to previous and next items in the list:
                            
                            ```html
                            <iron-list items="[[data]]" as="item">
                              <template>
                                <div tabindex$="[[tabIndex]]">
                                  Name: [[item.name]]
                                </div>
                              </template>
                            </iron-list>
                            ```
                            
                            ### Styling
                            
                            You can use the `--iron-list-items-container` mixin to style the container of
                            items:
                            
                            ```css
                            iron-list {
                             --iron-list-items-container: {
                                margin: auto;
                              };
                            }
                            ```
                            
                            ### Resizing
                            
                            `iron-list` lays out the items when it receives a notification via the
                            `iron-resize` event. This event is fired by any element that implements
                            `IronResizableBehavior`.
                            
                            By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
                            trigger this event automatically. If you hide the list manually (e.g. you use
                            `display: none`) you might want to implement `IronResizableBehavior` or fire
                            this event manually right after the list became visible again. For example:
                            
                            ```js
                            document.querySelector('iron-list').fire('iron-resize');
                            ```
                            
                            ### When should `<iron-list>` be used?
                            
                            `iron-list` should be used when a page has significantly more DOM nodes than the
                            ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
                            at a time. This is why we refer to it as a `virtual` list. In this case, a
                            `dom-repeat` will still create 500 nodes which could slow down the web app, but
                            `iron-list` will only create 20.
                            
                            However, having an `iron-list` does not mean that you can load all the data at
                            once. Say you have a million records in the database, you want to split the data
                            into pages so you can bring in a page at the time. The page could contain 500
                            items, and iron-list will only render 20.
                            
                            @element iron-list
                            @demo demo/index.html
                            
                            */(0,_cureMe.Polymer)({/** @override */_template:_cureMe.html`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{/**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */items:{type:Array},/**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */as:{type:String,value:"item"},/**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */indexAs:{type:String,value:"index"},/**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */selectedAs:{type:String,value:"selected"},/**
     * When true, the list is rendered as a grid. Grid items must have
     * fixed width and height set via CSS. e.g.
     *
     * ```html
     * <iron-list grid>
     *   <template>
     *      <div style="width: 100px; height: 100px;"> 100x100 </div>
     *   </template>
     * </iron-list>
     * ```
     */grid:{type:Boolean,value:/* ignoreName */!1/* skipSlots */ /* skipSlots */,reflectToAttribute:!0,observer:"_gridChanged"},/**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */selectionEnabled:{type:Boolean,value:!1},/**
     * When `multiSelection` is false, this is the currently selected item, or
     * `null` if no item is selected.
     */selectedItem:{type:Object,notify:!0},/**
     * When `multiSelection` is true, this is an array that contains the
     * selected items.
     */selectedItems:{type:Object,notify:!0},/**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */multiSelection:{type:Boolean,value:!1},/**
     * The offset top from the scrolling element to the iron-list element.
     * This value can be computed using the position returned by
     * `getBoundingClientRect()` although it's preferred to use a constant value
     * when possible.
     *
     * This property is useful when an external scrolling element is used and
     * there's some offset between the scrolling element and the list. For
     * example: a header is placed above the list.
     */scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[_cureMe.Templatizer,_cureMe.IronResizableBehavior,_cureMe.IronScrollTargetBehavior,_cureMe.OptionalMutableDataBehavior],/**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */_ratio:.5,/**
   * The padding-top value for the list.
   */_scrollerPaddingTop:0,/**
   * This value is a cached value of `scrollTop` from the last `scroll` event.
   */_scrollPosition:0,/**
   * The sum of the heights of all the tiles in the DOM.
   */_physicalSize:0,/**
   * The average `offsetHeight` of the tiles observed till now.
   */_physicalAverage:0,/**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */_physicalAverageCount:0,/**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */_physicalTop:0,/**
   * The number of items in the list.
   */_virtualCount:0,/**
   * The estimated scroll height based on `_physicalAverage`
   */_estScrollHeight:0,/**
   * The scroll height of the dom node
   */_scrollHeight:0,/**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */_viewportHeight:0,/**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */_viewportWidth:0,/**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!HTMLElement>}
   */_physicalItems:null,/**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */_physicalSizes:null,/**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */_firstVisibleIndexVal:null,/**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */_lastVisibleIndexVal:null,/**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */_maxPages:2,/**
   * The currently focused physical item.
   */_focusedItem:null,/**
   * The virtual index of the focused item.
   */_focusedVirtualIndex:-1,/**
   * The physical index of the focused item.
   */_focusedPhysicalIndex:-1,/**
   * The the item that is focused if it is moved offscreen.
   * @private {?HTMLElement}
   */_offscreenFocusedItem:null,/**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   * @type {?HTMLElement}
   */_focusBackfillItem:null,/**
   * The maximum items per row
   */_itemsPerRow:1,/**
   * The width of each grid item
   */_itemWidth:0,/**
   * The height of the row in grid layout.
   */_rowHeight:0,/**
   * The cost of stamping a template in ms.
   */_templateCost:0,/**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */_parentModel:!0,/**
   * The bottom of the physical content.
   */get _physicalBottom(){return this._physicalTop+this._physicalSize},/**
   * The bottom of the scroll.
   */get _scrollBottom(){return this._scrollPosition+this._viewportHeight},/**
   * The n-th item rendered in the last physical item.
   */get _virtualEnd(){return this._virtualStart+this._physicalCount-1},/**
   * The height of the physical content that isn't on the screen.
   */get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},/**
   * The parent node for the _userTemplate.
   */get _itemsParent(){return(0,_cureMe.dom)((0,_cureMe.dom)(this._userTemplate).parentNode)},/**
   * The maximum scroll top value.
   */get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},/**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},/**
   * The k-th tile that is at the top of the scrolling list.
   */set _physicalStart(val){val=val%this._physicalCount;if(0>val){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},/**
   * The k-th tile that is at the bottom of the scrolling list.
   */get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},/**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},/**
   * True if the current list is visible.
   */get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},/**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(null==idx){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems(function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}// Handle a partially rendered final row in grid mode
if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}})||0;this._firstVisibleIndexVal=idx}return idx},/**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(null==idx){if(this.grid){idx=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems(function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)})}this._lastVisibleIndexVal=idx}return idx},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},/** @override */ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},/** @override */attached:function(){this._debounce("_render",this._render,_cureMe.animationFrame);// `iron-resize` is fired when the list is attached if the event is added
// before attached causing unnecessary work.
this.listen(this,"iron-resize","_resizeHandler");this.listen(this,"keydown","_keydownHandler")},/** @override */detached:function(){this.unlisten(this,"iron-resize","_resizeHandler");this.unlisten(this,"keydown","_keydownHandler")},/**
   * Set the overflow property if this element has its own scrolling region
   */_setOverflow:function(scrollTarget){this.style.webkitOverflowScrolling=scrollTarget===this?"touch":"";this.style.overflowY=scrollTarget===this?"auto":"";// Clear cache.
this._lastVisibleIndexVal=null;this._firstVisibleIndexVal=null;this._debounce("_render",this._render,_cureMe.animationFrame)},/**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */updateViewportBoundaries:function(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=!!("rtl"===styles.direction);this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},/**
   * Recycles the physical items when needed.
   */_scrollHandler:function(){var scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),delta=scrollTop-this._scrollPosition,isScrollingDown=0<=delta;// Track the current scroll position.
this._scrollPosition=scrollTop;// Clear indexes for first and last visible indexes.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;// Random access.
if(Math.abs(delta)>this._physicalSize&&0<this._physicalSize){delta=delta-this._scrollOffset;var idxAdjustment=Math.round(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;// Estimate new physical offset based on the virtual start index.
// adjusts the physical start position to stay in sync with the clamped
// virtual start index. It's critical not to let this value be
// more than the scroll position however, since that would result in
// the physical items not covering the viewport, and leading to
// _increasePoolIfNeeded to run away creating items to try to fill it.
this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition);this._update()}else if(0<this._physicalCount){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),_cureMe.microTask)}},/**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */_getReusables:function(fromTop){var ith,lastIth,offsetContent,physicalItemHeight,idxs=[],protectedOffsetContent=this._hiddenContentSize*this._ratio,virtualStart=this._virtualStart,virtualEnd=this._virtualEnd,physicalCount=this._physicalCount,top=this._physicalTop+this._scrollOffset,bottom=this._physicalBottom+this._scrollOffset,scrollTop=this._scrollPosition,scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;lastIth=this._physicalEnd;offsetContent=scrollTop-top}else{ith=this._physicalEnd;lastIth=this._physicalStart;offsetContent=bottom-scrollBottom}while(!0){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){// Check that index is within the valid range.
if(virtualEnd+idxs.length+1>=this._virtualCount){break}// Check that the index is not visible.
if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{// Check that index is within the valid range.
if(0>=virtualStart-idxs.length){break}// Check that the index is not visible.
if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=0===ith?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},/**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */_update:function(itemSet,movingUp){if(itemSet&&0===itemSet.length||0===this._physicalCount){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);// Adjust offset after measuring.
if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},/**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param {number} size Size of the pool
   */_createPool:function(size){this._ensureTemplatized();var i,inst,physicalItems=Array(size);for(i=0;i<size;i++){inst=this.stamp(null);// TODO(blasten):
// First element child is item; Safari doesn't support children[0]
// on a doc fragment. Test this to see if it still matters.
physicalItems[i]=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}return physicalItems},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},/**
   * Increases the pool size.
   */_increasePoolIfNeeded:function(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);if(this.grid){var correction=nextPhysicalCount%this._itemsPerRow;if(correction&&nextPhysicalCount-correction<=this._physicalCount){nextPhysicalCount+=this._itemsPerRow}nextPhysicalCount-=correction}var delta=nextPhysicalCount-this._physicalCount,nextIncrease=Math.round(.5*this._physicalCount);if(0>delta){return}if(0<delta){var ts=window.performance.now();// Concat arrays in place.
[].push.apply(this._physicalItems,this._createPool(delta));// Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
// support it.
for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;// Update the physical start if it needs to preserve the model of the
// focused item. In this situation, the focused item is currently rendered
// and its model would have changed after increasing the pool if the
// physical start remained unchanged.
if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=Math.round(.5*this._physicalCount)}// The upper bounds is not fixed when dealing with a grid that doesn't
// fill it's last row with the exact number of items per row.
if(this._virtualEnd>=this._virtualCount-1||0===nextIncrease){// Do nothing.
}else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),_cureMe.microTask)}else if(this._physicalSize<this._optPhysicalSize){// Yield and increase the pool during idle time until the physical size is
// optimal.
this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,nextIncrease)),_cureMe.idlePeriod)}},/**
   * Renders the a new list.
   */_render:function(){if(!this.isAttached||!this._isVisible){return}if(0!==this._physicalCount){var reusables=this._getReusables(!0);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(0<this._virtualCount){// Initial render
this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},/**
   * Templetizes the user template.
   */_ensureTemplatized:function(){if(this.ctor){return}this._userTemplate=/** @type {!HTMLTemplateElement} */this.queryEffectiveChildren("template");if(!this._userTemplate){console.warn("iron-list requires a template to be provided in light-dom")}var instanceProps={__key__:!0};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.selectedAs]=!0;instanceProps.tabIndex=!0;this._instanceProps=instanceProps;this.templatize(this._userTemplate,this.mutableData)},_gridChanged:function(newGrid,oldGrid){if("undefined"===typeof oldGrid)return;this.notifyResize();(0,_cureMe.flush)();newGrid&&this._updateGridMetrics()},/**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */_itemsChanged:function(change){if("items"===change.path){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,_cureMe.animationFrame)}else if("items.splices"===change.path){this._adjustVirtualIndex(change.value.indexSplices);this._virtualCount=this.items?this.items.length:0;// Only blur if at least one item is added or removed.
var itemAddedOrRemoved=change.value.indexSplices.some(function(splice){return 0<splice.addedCount||0<splice.removed.length});if(itemAddedOrRemoved){// Only blur activeElement if it is a descendant of the list (#505,
// #507).
var activeElement=this._getActiveElement();if(this.contains(activeElement)){activeElement.blur()}}// Render only if the affected index is rendered.
var affectedIndexRendered=change.value.indexSplices.some(function(splice){return splice.index+splice.addedCount>=this._virtualStart&&splice.index<=this._virtualEnd},this);if(!this._isClientFull()||affectedIndexRendered){this._debounce("_render",this._render,_cureMe.animationFrame)}}else if("items.length"!==change.path){this._forwardItemPath(change.path,change.value)}},_forwardItemPath:function(path,value){path=path.slice(6);// 'items.'.length == 6
var dot=path.indexOf(".");if(-1===dot){dot=path.length}var isIndexRendered,pidx,inst,offscreenInstance=this.modelForElement(this._offscreenFocusedItem),vidx=parseInt(path.substring(0,dot),10);isIndexRendered=this._isIndexRendered(vidx);if(isIndexRendered){pidx=this._getPhysicalIndex(vidx);inst=this.modelForElement(this._physicalItems[pidx])}else if(offscreenInstance){inst=offscreenInstance}if(!inst||inst[this.indexAs]!==vidx){return}path=path.substring(dot+1);path=this.as+(path?"."+path:"");inst._setPendingPropertyOrPath(path,value,!1,!0);inst._flushProperties&&inst._flushProperties();// TODO(blasten): V1 doesn't do this and it's a bug
if(isIndexRendered){this._updateMetrics([pidx]);this._positionItems();this._updateScrollerSize()}},/**
   * @param {!Array<!Object>} splices
   */_adjustVirtualIndex:function(splices){splices.forEach(function(splice){// deselect removed items
splice.removed.forEach(this._removeItem,this);// We only need to care about changes happening above the current position
if(splice.index<this._virtualStart){var delta=Math.max(splice.addedCount-splice.removed.length,splice.index-this._virtualStart);this._virtualStart=this._virtualStart+delta;if(0<=this._focusedVirtualIndex){this._focusedVirtualIndex=this._focusedVirtualIndex+delta}}},this)},_removeItem:function(item){this.$.selector.deselect(item);// remove the current focused item
if(this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===item){this._removeFocusedItem()}},/**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */_iterateItems:function(fn,itemSet){var pidx,vidx,rtn,i;if(2===arguments.length&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}},/**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */_computeVidx:function(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},/**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */_assignModels:function(itemSet){this._iterateItems(function(pidx,vidx){var el=this._physicalItems[pidx],item=this.items&&this.items[vidx];if(null!=item){var inst=this.modelForElement(el);inst.__key__=null;this._forwardProperty(inst,this.as,item);this._forwardProperty(inst,this.selectedAs,this.$.selector.isSelected(item));this._forwardProperty(inst,this.indexAs,vidx);this._forwardProperty(inst,"tabIndex",this._focusedVirtualIndex===vidx?0:-1);this._physicalIndexForKey[inst.__key__]=pidx;inst._flushProperties&&inst._flushProperties(!0);el.removeAttribute("hidden")}else{el.setAttribute("hidden","")}},itemSet)},/**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */_updateMetrics:function(itemSet){// Make sure we distributed all the physical items
// so we can measure them.
(0,_cureMe.flush)();var newPhysicalSize=0,oldPhysicalSize=0,prevAvgCount=this._physicalAverageCount,prevPhysicalAvg=this._physicalAverage;this._iterateItems(function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0},itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=1===this._itemsPerRow?oldPhysicalSize:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}// Update the average if it measured something.
if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},_updateGridMetrics:function(){this._itemWidth=0<this._physicalCount?this._physicalItems[0].getBoundingClientRect().width:200;this._rowHeight=0<this._physicalCount?this._physicalItems[0].offsetHeight:200;this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},/**
   * Updates the position of the physical items.
   */_positionItems:function(){this._adjustScrollPosition();var y=this._physicalTop;if(this.grid){var totalItemWidth=this._itemsPerRow*this._itemWidth,rowOffset=(this._viewportWidth-totalItemWidth)/2;this._iterateItems(function(pidx,vidx){var modulus=vidx%this._itemsPerRow,x=Math.floor(modulus*this._itemWidth+rowOffset);if(this._isRTL){x=-1*x}this.translate3d(x+"px",y+"px",0,this._physicalItems[pidx]);if(this._shouldRenderNextRow(vidx)){y+=this._rowHeight}})}else{const order=[];this._iterateItems(function(pidx,vidx){const item=this._physicalItems[pidx];this.translate3d(0,y+"px",0,item);y+=this._physicalSizes[pidx];const itemId=item.id;if(itemId){order.push(itemId)}});if(order.length){this.setAttribute("aria-owns",order.join(" "))}}},_getPhysicalSizeIncrement:function(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},/**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */_shouldRenderNextRow:function(vidx){return vidx%this._itemsPerRow===this._itemsPerRow-1},/**
   * Adjusts the scroll position when it was overestimated.
   */_adjustScrollPosition:function(){var deltaHeight=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);// Note: the delta can be positive or negative.
if(0!==deltaHeight){this._physicalTop=this._physicalTop-deltaHeight;// This may be called outside of a scrollHandler, so use last cached position
var scrollTop=this._scrollPosition;// juking scroll position during interial scrolling on iOS is no bueno
if(!IOS_TOUCH_SCROLLING&&0<scrollTop){this._resetScrollPosition(scrollTop-deltaHeight)}}},/**
   * Sets the position of the scroll.
   */_resetScrollPosition:function(pos){if(this.scrollTarget&&0<=pos){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},/**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */_updateScrollerSize:function(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||0===this._scrollHeight;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;// Amortize height adjustment, so it won't trigger large repaints too often.
if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},/**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToItem
   * @param {(Object)} item The item to be scrolled to
   */scrollToItem:function(item){return this.scrollToIndex(this.items.indexOf(item))},/**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */scrollToIndex:function(idx){if("number"!==typeof idx||0>idx||idx>this.items.length-1){return}(0,_cureMe.flush)();// Items should have been rendered prior scrolling to an index.
if(0===this._physicalCount){return}idx=this._clamp(idx,0,this._virtualCount-1);// Update the virtual start only when needed.
if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-2*this._itemsPerRow:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();// Estimate new physical offset.
this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart,currentVirtualItem=this._virtualStart,targetOffsetTop=0,hiddenContentSize=this._hiddenContentSize;// scroll to the item as much as we can.
while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(!0);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},/**
   * Reset the physical average and the average count.
   */_resetAverage:function(){this._physicalAverage=0;this._physicalAverageCount=0},/**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */_resizeHandler:function(){this._debounce("_render",function(){// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(this._isVisible){this.updateViewportBoundaries();// Reinstall the scroll event listener.
this.toggleScrollListener(!0);this._resetAverage();this._render()}else{// Uninstall the scroll event listener.
this.toggleScrollListener(!1)}},_cureMe.animationFrame)},/**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item instance.
   */selectItem:function(item){return this.selectIndex(this.items.indexOf(item))},/**
   * Selects the item at the given index in the items array.
   *
   * @method selectIndex
   * @param {number} index The index of the item in the items array.
   */selectIndex:function(index){if(0>index||index>=this._virtualCount){return}if(!this.multiSelection&&this.selectedItem){this.clearSelection()}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);if(model){model[this.selectedAs]=!0}this.updateSizeForIndex(index)}this.$.selector.selectIndex(index)},/**
   * Deselects the given item.
   *
   * @method deselect
   * @param {Object} item The item instance.
   */deselectItem:function(item){return this.deselectIndex(this.items.indexOf(item))},/**
   * Deselects the item at the given index in the items array.
   *
   * @method deselectIndex
   * @param {number} index The index of the item in the items array.
   */deselectIndex:function(index){if(0>index||index>=this._virtualCount){return}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);model[this.selectedAs]=!1;this.updateSizeForIndex(index)}this.$.selector.deselectIndex(index)},/**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @method toggleSelectionForItem
   * @param {Object} item The item object.
   */toggleSelectionForItem:function(item){return this.toggleSelectionForIndex(this.items.indexOf(item))},/**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @method toggleSelectionForIndex
   * @param {number} index The index of the item in the items array.
   */toggleSelectionForIndex:function(index){var isSelected=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(index):this.$.selector.isSelected(this.items[index]);isSelected?this.deselectIndex(index):this.selectIndex(index)},/**
   * Clears the current selection in the list.
   *
   * @method clearSelection
   */clearSelection:function(){this._iterateItems(function(pidx,vidx){this.modelForElement(this._physicalItems[pidx])[this.selectedAs]=!1});this.$.selector.clearSelection()},/**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */_selectionEnabledChanged:function(selectionEnabled){var handler=selectionEnabled?this.listen:this.unlisten;handler.call(this,this,"tap","_selectionHandler")},/**
   * Select an item from an event object.
   */_selectionHandler:function(e){var model=this.modelForElement(e.target);if(!model){return}var modelTabIndex,activeElTabIndex,target=(0,_cureMe.dom)(e).path[0],activeEl=this._getActiveElement(),physicalItem=this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];// Safari does not focus certain form controls via mouse
// https://bugs.webkit.org/show_bug.cgi?id=118043
if("input"===target.localName||"button"===target.localName||"select"===target.localName){return}// Set a temporary tabindex
modelTabIndex=model.tabIndex;model.tabIndex=SECRET_TABINDEX;activeElTabIndex=activeEl?activeEl.tabIndex:-1;model.tabIndex=modelTabIndex;// Only select the item if the tap wasn't on a focusable child
// or the element bound to `tabIndex`
if(activeEl&&physicalItem!==activeEl&&physicalItem.contains(activeEl)&&activeElTabIndex!==SECRET_TABINDEX){return}this.toggleSelectionForItem(model[this.as])},_multiSelectionChanged:function(multiSelection){this.clearSelection();this.$.selector.multi=multiSelection},/**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */updateSizeForItem:function(item){return this.updateSizeForIndex(this.items.indexOf(item))},/**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */updateSizeForIndex:function(index){if(!this._isIndexRendered(index)){return null}this._updateMetrics([this._getPhysicalIndex(index)]);this._positionItems();return null},/**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */_manageFocus:function(){var fidx=this._focusedVirtualIndex;if(0<=fidx&&fidx<this._virtualCount){// if it's a valid index, check if that index is rendered
// in a physical item.
if(this._isIndexRendered(fidx)){this._restoreFocusedItem()}else{this._createFocusBackfillItem()}}else if(0<this._virtualCount&&0<this._physicalCount){// otherwise, assign the initial focused index.
this._focusedPhysicalIndex=this._physicalStart;this._focusedVirtualIndex=this._virtualStart;this._focusedItem=this._physicalItems[this._physicalStart]}},/**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */_convertIndexToCompleteRow:function(idx){// when grid == false _itemPerRow can be unset.
this._itemsPerRow=this._itemsPerRow||1;return this.grid?Math.ceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_isIndexVisible:function(idx){return idx>=this.firstVisibleIndex&&idx<=this.lastVisibleIndex},_getPhysicalIndex:function(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},focusItem:function(idx){this._focusPhysicalItem(idx)},_focusPhysicalItem:function(idx){if(0>idx||idx>=this._virtualCount){return}this._restoreFocusedItem();// scroll to index to make sure it's rendered
if(!this._isIndexRendered(idx)){this.scrollToIndex(idx)}var physicalItem=this._physicalItems[this._getPhysicalIndex(idx)],model=this.modelForElement(physicalItem),focusable;// set a secret tab index
model.tabIndex=SECRET_TABINDEX;// check if focusable element is the physical item
if(physicalItem.tabIndex===SECRET_TABINDEX){focusable=physicalItem}// search for the element which tabindex is bound to the secret tab index
if(!focusable){focusable=(0,_cureMe.dom)(physicalItem).querySelector("[tabindex=\""+SECRET_TABINDEX+"\"]")}// restore the tab index
model.tabIndex=0;// focus the focusable element
this._focusedVirtualIndex=idx;focusable&&focusable.focus()},_removeFocusedItem:function(){if(this._offscreenFocusedItem){this._itemsParent.removeChild(this._offscreenFocusedItem)}this._offscreenFocusedItem=null;this._focusBackfillItem=null;this._focusedItem=null;this._focusedVirtualIndex=-1;this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var fpidx=this._focusedPhysicalIndex;if(this._offscreenFocusedItem||0>this._focusedVirtualIndex){return}if(!this._focusBackfillItem){// Create a physical item.
var inst=this.stamp(null);this._focusBackfillItem=/** @type {!HTMLElement} */inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}// Set the offcreen focused physical item.
this._offscreenFocusedItem=this._physicalItems[fpidx];this.modelForElement(this._offscreenFocusedItem).tabIndex=0;this._physicalItems[fpidx]=this._focusBackfillItem;this._focusedPhysicalIndex=fpidx;// Hide the focused physical.
this.translate3d(0,HIDDEN_Y,0,this._offscreenFocusedItem)},_restoreFocusedItem:function(){if(!this._offscreenFocusedItem||0>this._focusedVirtualIndex){return}// Assign models to the focused index.
this._assignModels();// Get the new physical index for the focused index.
var fpidx=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),onScreenItem=this._physicalItems[fpidx];if(!onScreenItem){return}var onScreenInstance=this.modelForElement(onScreenItem),offScreenInstance=this.modelForElement(this._offscreenFocusedItem);// Restores the physical item only when it has the same model
// as the offscreen one. Use key for comparison since users can set
// a new item via set('items.idx').
if(onScreenInstance[this.as]===offScreenInstance[this.as]){// Flip the focus backfill.
this._focusBackfillItem=onScreenItem;onScreenInstance.tabIndex=-1;// Restore the focused physical item.
this._physicalItems[fpidx]=this._offscreenFocusedItem;// Hide the physical item that backfills.
this.translate3d(0,HIDDEN_Y,0,this._focusBackfillItem)}else{this._removeFocusedItem();this._focusBackfillItem=null}this._offscreenFocusedItem=null},_didFocus:function(e){var targetModel=this.modelForElement(e.target),focusedModel=this.modelForElement(this._focusedItem),hasOffscreenFocusedItem=null!==this._offscreenFocusedItem,fidx=this._focusedVirtualIndex;if(!targetModel){return}if(focusedModel===targetModel){// If the user focused the same item, then bring it into view if it's not
// visible.
if(!this._isIndexVisible(fidx)){this.scrollToIndex(fidx)}}else{this._restoreFocusedItem();// Restore tabIndex for the currently focused item.
if(focusedModel){focusedModel.tabIndex=-1}// Set the tabIndex for the next focused item.
targetModel.tabIndex=0;fidx=targetModel[this.indexAs];this._focusedVirtualIndex=fidx;this._focusedPhysicalIndex=this._getPhysicalIndex(fidx);this._focusedItem=this._physicalItems[this._focusedPhysicalIndex];if(hasOffscreenFocusedItem&&!this._offscreenFocusedItem){this._update()}}},_keydownHandler:function(e){switch(e.keyCode){case/* ARROW_DOWN */40:if(this._focusedVirtualIndex<this._virtualCount-1)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case/* ARROW_RIGHT */39:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case/* ARROW_UP */38:if(0<this._focusedVirtualIndex)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case/* ARROW_LEFT */37:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case/* ENTER */13:this._focusPhysicalItem(this._focusedVirtualIndex);if(this.selectionEnabled)this._selectionHandler(e);break;}},_clamp:function(v,min,max){return Math.min(max,Math.max(min,v))},_debounce:function(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=_cureMe.Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));(0,_cureMe.enqueueDebouncer)(this._debouncers[name])},_forwardProperty:function(inst,name,value){inst._setPendingProperty(name,value)},/* Templatizer bindings for v2 */_forwardHostPropV2:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).forwardHostProp(prop,value)}},this)},_notifyInstancePropV2:function(inst,prop,value){if((0,_cureMe.matches)(this.as,prop)){var idx=inst[this.indexAs];if(prop==this.as){this.items[idx]=value}this.notifyPath((0,_cureMe.translate)(this.as,"items."+idx,prop),value)}},/* Templatizer bindings for v1 */_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(inst,path,value){if(0===path.indexOf(this.as+".")){this.notifyPath("items."+inst.__key__+"."+path.slice(this.as.length+1),value)}},_forwardParentPath:function(path,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).notifyPath(path,value)}},this)},_forwardParentProp:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item)[prop]=value}},this)},/* Gets the activeElement of the shadow root/host that contains the list. */_getActiveElement:function(){var itemsHost=this._itemsParent.node.domHost;return(0,_cureMe.dom)(itemsHost?itemsHost.root:document).activeElement}});const DISABLED_ATTR="disable-upgrade",DisableUpgradeMixin=(0,_cureMe.dedupingMixin)(base=>{/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends {HTMLElement}
   * @private
   */const superClass=(0,_cureMe.ElementMixin)(base);/**
                                              * @polymer
                                              * @mixinClass
                                              * @implements {Polymer_DisableUpgradeMixin}
                                              */class DisableUpgradeClass extends superClass{/**
     * @suppress {missingProperties} go/missingfnprops
     */static get observedAttributes(){return super.observedAttributes.concat(DISABLED_ATTR)}/**
       * @override
       * @param {string} name Attribute name.
       * @param {?string} old The previous value for the attribute.
       * @param {?string} value The new value for the attribute.
       * @param {?string} namespace The XML namespace for the attribute.
       * @return {void}
       */attributeChangedCallback(name,old,value,namespace){if(name==DISABLED_ATTR){if(!this.__dataEnabled&&null==value&&this.isConnected){super.connectedCallback()}}else{super.attributeChangedCallback(name,old,value,/** @type {null|string} */namespace)}}/*
        NOTE: cannot gate on attribute because this is called before
        attributes are delivered. Therefore, we stub this out and
        call `super._initializeProperties()` manually.
      */ /** @override */_initializeProperties(){}// prevent user code in connected from running
/** @override */connectedCallback(){if(this.__dataEnabled||!this.hasAttribute(DISABLED_ATTR)){super.connectedCallback()}}// prevent element from turning on properties
/** @override */_enableProperties(){if(!this.hasAttribute(DISABLED_ATTR)){if(!this.__dataEnabled){super._initializeProperties()}super._enableProperties()}}// only go if "enabled"
/** @override */disconnectedCallback(){if(this.__dataEnabled){super.disconnectedCallback()}}}return DisableUpgradeClass});/**
                                          * Element class mixin that allows the element to boot up in a non-enabled
                                          * state when the `disable-upgrade` attribute is present. This mixin is
                                          * designed to be used with element classes like PolymerElement that perform
                                          * initial startup work when they are first connected. When the
                                          * `disable-upgrade` attribute is removed, if the element is connected, it
                                          * boots up and "enables" as it otherwise would; if it is not connected, the
                                          * element boots up when it is next connected.
                                          *
                                          * Using `disable-upgrade` with PolymerElement prevents any data propagation
                                          * to the element, any element DOM from stamping, or any work done in
                                          * connected/disconnctedCallback from occuring, but it does not prevent work
                                          * done in the element constructor.
                                          *
                                          * Note, this mixin must be applied on top of any element class that
                                          * itself implements a `connectedCallback` so that it can control the work
                                          * done in `connectedCallback`. For example,
                                          *
                                          *     MyClass = DisableUpgradeMixin(class extends BaseClass {...});
                                          *
                                          * @mixinFunction
                                          * @polymer
                                          * @appliesMixin ElementMixin
                                          * @template T
                                          * @param {function(new:T)} superClass Class to apply mixin to.
                                          * @return {function(new:T)} superClass with mixin applied.
                                          */_exports.DisableUpgradeMixin=DisableUpgradeMixin;var disableUpgradeMixin={DisableUpgradeMixin:DisableUpgradeMixin};/**
    * @polymerMixin
    */_exports.$disableUpgradeMixin=disableUpgradeMixin;const ThemePropertyMixin=superClass=>class VaadinThemePropertyMixin extends superClass{static get properties(){return{/**
       * Helper property with theme attribute value facilitating propagation
       * in shadow DOM.
       *
       * Enables the component implementation to propagate the `theme`
       * attribute value to the subcomponents in Shadow DOM by binding
       * the subcomponent’s "theme" attribute to the `theme` property of
       * the host.
       *
       * **NOTE:** Extending the mixin only provides the property for binding,
       * and does not make the propagation alone.
       *
       * See [Theme Attribute and Subcomponents](https://github.com/vaadin/vaadin-themable-mixin/wiki/5.-Theme-Attribute-and-Subcomponents).
       * page for more information.
       *
       * @protected
       */theme:{type:String,readOnly:!0}}}/** @protected */attributeChangedCallback(name,oldValue,newValue){super.attributeChangedCallback(name,oldValue,newValue);if("theme"===name){this._setTheme(newValue)}}};_exports.ThemePropertyMixin=ThemePropertyMixin;var vaadinThemePropertyMixin={ThemePropertyMixin:ThemePropertyMixin};_exports.$vaadinThemePropertyMixin=vaadinThemePropertyMixin;const ThemableMixin=superClass=>class VaadinThemableMixin extends ThemePropertyMixin(superClass){/** @protected */static finalize(){super.finalize();const template=this.prototype._template,hasOwnTemplate=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,inheritedTemplate=Object.getPrototypeOf(this.prototype)._template;if(inheritedTemplate&&!hasOwnTemplate){// The element doesn't define its own template -> include the theme modules from the inherited template
Array.from(inheritedTemplate.content.querySelectorAll("style[include]")).forEach(s=>{this._includeStyle(s.getAttribute("include"),template)})}this._includeMatchingThemes(template)}/** @protected */static _includeMatchingThemes(template){const domModule=_cureMe.DomModule,modules=domModule.prototype.modules;let hasThemes=!1;const defaultModuleName=this.is+"-default-theme";Object.keys(modules).sort((moduleNameA,moduleNameB)=>{const vaadinA=0===moduleNameA.indexOf("vaadin-"),vaadinB=0===moduleNameB.indexOf("vaadin-"),vaadinThemePrefixes=["lumo-","material-"],vaadinThemeA=0<vaadinThemePrefixes.filter(prefix=>0===moduleNameA.indexOf(prefix)).length,vaadinThemeB=0<vaadinThemePrefixes.filter(prefix=>0===moduleNameB.indexOf(prefix)).length;if(vaadinA!==vaadinB){// Include vaadin core styles first
return vaadinA?-1:1}else if(vaadinThemeA!==vaadinThemeB){// Include vaadin theme styles after that
return vaadinThemeA?-1:1}else{// Lastly include custom styles so they override all vaadin styles
return 0}}).forEach(moduleName=>{if(moduleName!==defaultModuleName){const themeFor=modules[moduleName].getAttribute("theme-for");if(themeFor){themeFor.split(" ").forEach(themeForToken=>{if(new RegExp("^"+themeForToken.split("*").join(".*")+"$").test(this.is)){hasThemes=!0;this._includeStyle(moduleName,template)}})}}});if(!hasThemes&&modules[defaultModuleName]){// No theme modules found, include the default module if it exists
this._includeStyle(defaultModuleName,template)}}/** @private */static _includeStyle(moduleName,template){if(template&&!template.content.querySelector(`style[include="${moduleName}"]`)){const styleEl=document.createElement("style");styleEl.setAttribute("include",moduleName);template.content.appendChild(styleEl)}}};_exports.ThemableMixin=ThemableMixin;var vaadinThemableMixin={ThemableMixin:ThemableMixin};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * A private mixin to avoid problems with dynamic properties and Polymer Analyzer.
       * No need to expose these properties in the API docs.
       * @polymerMixin
       */_exports.$vaadinThemableMixin=vaadinThemableMixin;const TabIndexMixin=superClass=>class VaadinTabIndexMixin extends superClass{static get properties(){var properties={/**
       * Internal property needed to listen to `tabindex` attribute changes.
       *
       * For changing the tabindex of this component use the native `tabIndex` property.
       * @private
       */tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};if(window.ShadyDOM){// ShadyDOM browsers need the `tabIndex` in order to notify when the user changes it programmatically.
properties.tabIndex=properties.tabindex}return properties}},ControlStateMixin=superClass=>class VaadinControlStateMixin extends TabIndexMixin(superClass){static get properties(){return{/**
       * Specify that this control should have input focus when the page loads.
       */autofocus:{type:Boolean},/**
       * Stores the previous value of tabindex attribute of the disabled element
       */_previousTabIndex:{type:Number},/**
       * If true, the user cannot interact with this element.
       */disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{if(e.composedPath()[0]===this){this._focus(e)}else if(-1!==e.composedPath().indexOf(this.focusElement)&&!this.disabled){this._setFocused(!0)}});this.addEventListener("focusout",e=>this._setFocused(!1));// In super.ready() other 'focusin' and 'focusout' listeners might be
// added, so we call it after our own ones to ensure they execute first.
// Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
// input field on iOS after “Done” is pressed.
super.ready();// This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
// where focusout event does not go out of shady DOM because composed property in the event is not true
const ensureEventComposed=e=>{if(!e.composed){e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))}};this.shadowRoot.addEventListener("focusin",ensureEventComposed);this.shadowRoot.addEventListener("focusout",ensureEventComposed);this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode){if(e.shiftKey){// Flag is checked in _focus event handler.
this._isShiftTabbing=!0;HTMLElement.prototype.focus.apply(this);this._setFocused(!1);// Event handling in IE is asynchronous and the flag is removed asynchronously as well
setTimeout(()=>this._isShiftTabbing=!1,0)}else{// Workaround for FF63-65 bug that causes the focus to get lost when
// blurring a slotted component with focusable shadow root content
// https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
// TODO: Remove when safe
const firefox=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(firefox&&63<=parseFloat(firefox[1])&&66>parseFloat(firefox[1])&&this.parentNode&&this.nextSibling){const fakeTarget=document.createElement("input");fakeTarget.style.position="absolute";fakeTarget.style.opacity=0;fakeTarget.tabIndex=this.tabIndex;this.parentNode.insertBefore(fakeTarget,this.nextSibling);fakeTarget.focus();fakeTarget.addEventListener("focusout",()=>this.parentNode.removeChild(fakeTarget))}}}});if(this.autofocus&&!this.focused&&!this.disabled){window.requestAnimationFrame(()=>{this._focus();this._setFocused(!0);this.setAttribute("focus-ring","")})}this._boundKeydownListener=this._bodyKeydownListener.bind(this);this._boundKeyupListener=this._bodyKeyupListener.bind(this)}/**
     * @protected
     */connectedCallback(){super.connectedCallback();document.body.addEventListener("keydown",this._boundKeydownListener,!0);document.body.addEventListener("keyup",this._boundKeyupListener,!0)}/**
     * @protected
     */disconnectedCallback(){super.disconnectedCallback();document.body.removeEventListener("keydown",this._boundKeydownListener,!0);document.body.removeEventListener("keyup",this._boundKeyupListener,!0);// in non-Chrome browsers, blur does not fire on the element when it is disconnected.
// reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.
if(this.hasAttribute("focused")){this._setFocused(!1)}}_setFocused(focused){if(focused){this.setAttribute("focused","")}else{this.removeAttribute("focused")}// focus-ring is true when the element was focused from the keyboard.
// Focus Ring [A11ycasts]: https://youtu.be/ilj2P5-5CjI
if(focused&&this._tabPressed){this.setAttribute("focus-ring","")}else{this.removeAttribute("focus-ring")}}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}/**
     * Any element extending this mixin is required to implement this getter.
     * It returns the actual focusable element in the component.
     */get focusElement(){window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`);return this}_focus(e){if(this._isShiftTabbing){return}this.focusElement.focus();this._setFocused(!0)}/**
     * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
     * @private
     */focus(){if(!this.focusElement||this.disabled){return}this.focusElement.focus();this._setFocused(!0)}/**
     * Native bluring in the host element does nothing because it does not have the focus.
     * In chrome it works, but not in FF.
     * @private
     */blur(){this.focusElement.blur();this._setFocused(!1)}_disabledChanged(disabled){this.focusElement.disabled=disabled;if(disabled){this.blur();this._previousTabIndex=this.tabindex;this.tabindex=-1;this.setAttribute("aria-disabled","true")}else{if("undefined"!==typeof this._previousTabIndex){this.tabindex=this._previousTabIndex}this.removeAttribute("aria-disabled")}}_tabindexChanged(tabindex){if(tabindex!==void 0){this.focusElement.tabIndex=tabindex}if(this.disabled&&this.tabindex){// If tabindex attribute was changed while checkbox was disabled
if(-1!==this.tabindex){this._previousTabIndex=this.tabindex}this.tabindex=tabindex=void 0}if(window.ShadyDOM){this.setProperties({tabIndex:tabindex,tabindex:tabindex})}}/**
     * @protected
     */click(){if(!this.disabled){super.click()}}};/**
    * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
    * implementation fails in the shadow dom, so we have this for vaadin elements.
    * @polymerMixin
    */_exports.ControlStateMixin=ControlStateMixin;var vaadinControlStateMixin={ControlStateMixin:ControlStateMixin};/**
    * Array of Vaadin custom element classes that have been subscribed to the dir changes.
    */_exports.$vaadinControlStateMixin=vaadinControlStateMixin;const directionSubscribers=[],directionUpdater=function(){const documentDir=getDocumentDir();directionSubscribers.forEach(element=>{alignDirs(element,documentDir)})},directionObserver=new MutationObserver(directionUpdater);directionObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const alignDirs=function(element,documentDir){if(documentDir){element.setAttribute("dir",documentDir)}else{element.removeAttribute("dir")}},getDocumentDir=function(){return document.documentElement.getAttribute("dir")},DirMixin=superClass=>class VaadinDirMixin extends superClass{static get properties(){return{/**
       * @protected
       */dir:{type:String,readOnly:!0}}}connectedCallback(){super.connectedCallback();if(!this.hasAttribute("dir")){this.__subscribe();alignDirs(this,getDocumentDir())}}/** @protected */attributeChangedCallback(name,oldValue,newValue){super.attributeChangedCallback(name,oldValue,newValue);if("dir"!==name){return}// New value equals to the document direction and the element is not subscribed to the changes
const newValueEqlDocDir=newValue===getDocumentDir()&&-1===directionSubscribers.indexOf(this),newValueEmptied=!newValue&&oldValue&&-1===directionSubscribers.indexOf(this),newDiffValue=newValue!==getDocumentDir()&&oldValue===getDocumentDir();// Value was emptied and the element is not subscribed to the changes
if(newValueEqlDocDir||newValueEmptied){this.__subscribe();alignDirs(this,getDocumentDir())}else if(newDiffValue){this.__subscribe(!1)}}disconnectedCallback(){super.disconnectedCallback();this.__subscribe(!1)}__subscribe(push=!0){if(push){-1===directionSubscribers.indexOf(this)&&directionSubscribers.push(this)}else{-1<directionSubscribers.indexOf(this)&&directionSubscribers.splice(directionSubscribers.indexOf(this),1)}}};_exports.DirMixin=DirMixin;var vaadinDirMixin={DirMixin:DirMixin};_exports.$vaadinDirMixin=vaadinDirMixin;const DEV_MODE_CODE_REGEXP=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,FlowClients=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function isMinified(){function test(){/** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/return!0}return uncommentAndRun(test)}function isDevelopmentMode(){try{if(isForcedDevelopmentMode()){return!0}if(!isLocalhost()){return!1}if(FlowClients){return!isFlowProductionMode()}return!isMinified()}catch(e){// Some error in this code, assume production so no further actions will be taken
return!1}}function isForcedDevelopmentMode(){return localStorage.getItem("vaadin.developmentmode.force")}function isLocalhost(){return 0<=["localhost","127.0.0.1"].indexOf(window.location.hostname)}function isFlowProductionMode(){if(FlowClients){const productionModeApps=Object.keys(FlowClients).map(key=>FlowClients[key]).filter(client=>client.productionMode);if(0<productionModeApps.length){return!0}}return!1}function uncommentAndRun(callback,args){if("function"!==typeof callback){return}const match=DEV_MODE_CODE_REGEXP.exec(callback.toString());if(match){try{// requires CSP: script-src 'unsafe-eval'
callback=new Function(match[1])}catch(e){// eat the exception
console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}}return callback(args)}// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window.Vaadin=window.Vaadin||{};/**
                                            * Inspects the source code of the given `callback` function for
                                            * specially-marked _commented_ code. If such commented code is found in the
                                            * callback source, uncomments and runs that code instead of the callback
                                            * itself. Otherwise runs the callback as is.
                                            *
                                            * The optional arguments are passed into the callback / uncommented code,
                                            * the result is returned.
                                            *
                                            * See the `isMinified()` function source code in this file for an example.
                                            *
                                            */const runIfDevelopmentMode=function(callback,args){if(window.Vaadin.developmentMode){return uncommentAndRun(callback,args)}};_exports.runIfDevelopmentMode=runIfDevelopmentMode;if(window.Vaadin.developmentMode===void 0){window.Vaadin.developmentMode=isDevelopmentMode()}var vaadinDevelopmentModeDetector={runIfDevelopmentMode:runIfDevelopmentMode};_exports.$vaadinDevelopmentModeDetector=vaadinDevelopmentModeDetector;function maybeGatherAndSendStats(){/** vaadin-dev-mode:start
                                    (function () {
                                    'use strict';
                                    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                                    return typeof obj;
                                    } : function (obj) {
                                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                    };
                                    var classCallCheck = function (instance, Constructor) {
                                    if (!(instance instanceof Constructor)) {
                                      throw new TypeError("Cannot call a class as a function");
                                    }
                                    };
                                    var createClass = function () {
                                    function defineProperties(target, props) {
                                      for (var i = 0; i < props.length; i++) {
                                        var descriptor = props[i];
                                        descriptor.enumerable = descriptor.enumerable || false;
                                        descriptor.configurable = true;
                                        if ("value" in descriptor) descriptor.writable = true;
                                        Object.defineProperty(target, descriptor.key, descriptor);
                                      }
                                    }
                                     return function (Constructor, protoProps, staticProps) {
                                      if (protoProps) defineProperties(Constructor.prototype, protoProps);
                                      if (staticProps) defineProperties(Constructor, staticProps);
                                      return Constructor;
                                    };
                                    }();
                                    var getPolymerVersion = function getPolymerVersion() {
                                    return window.Polymer && window.Polymer.version;
                                    };
                                    var StatisticsGatherer = function () {
                                    function StatisticsGatherer(logger) {
                                      classCallCheck(this, StatisticsGatherer);
                                       this.now = new Date().getTime();
                                      this.logger = logger;
                                    }
                                     createClass(StatisticsGatherer, [{
                                      key: 'frameworkVersionDetectors',
                                      value: function frameworkVersionDetectors() {
                                        return {
                                          'Flow': function Flow() {
                                            if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
                                              var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
                                                return window.Vaadin.Flow.clients[key];
                                              }).filter(function (client) {
                                                return client.getVersionInfo;
                                              }).map(function (client) {
                                                return client.getVersionInfo().flow;
                                              });
                                              if (flowVersions.length > 0) {
                                                return flowVersions[0];
                                              }
                                            }
                                          },
                                          'Vaadin Framework': function VaadinFramework() {
                                            if (window.vaadin && window.vaadin.clients) {
                                              var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
                                                return client.getVersionInfo;
                                              }).map(function (client) {
                                                return client.getVersionInfo().vaadinVersion;
                                              });
                                              if (frameworkVersions.length > 0) {
                                                return frameworkVersions[0];
                                              }
                                            }
                                          },
                                          'AngularJs': function AngularJs() {
                                            if (window.angular && window.angular.version && window.angular.version) {
                                              return window.angular.version.full;
                                            }
                                          },
                                          'Angular': function Angular() {
                                            if (window.ng) {
                                              var tags = document.querySelectorAll("[ng-version]");
                                              if (tags.length > 0) {
                                                return tags[0].getAttribute("ng-version");
                                              }
                                              return "Unknown";
                                            }
                                          },
                                          'Backbone.js': function BackboneJs() {
                                            if (window.Backbone) {
                                              return window.Backbone.VERSION;
                                            }
                                          },
                                          'React': function React() {
                                            var reactSelector = '[data-reactroot], [data-reactid]';
                                            if (!!document.querySelector(reactSelector)) {
                                              // React does not publish the version by default
                                              return "unknown";
                                            }
                                          },
                                          'Ember': function Ember() {
                                            if (window.Em && window.Em.VERSION) {
                                              return window.Em.VERSION;
                                            } else if (window.Ember && window.Ember.VERSION) {
                                              return window.Ember.VERSION;
                                            }
                                          },
                                          'jQuery': function (_jQuery) {
                                            function jQuery() {
                                              return _jQuery.apply(this, arguments);
                                            }
                                             jQuery.toString = function () {
                                              return _jQuery.toString();
                                            };
                                             return jQuery;
                                          }(function () {
                                            if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
                                              return jQuery.prototype.jquery;
                                            }
                                          }),
                                          'Polymer': function Polymer() {
                                            var version = getPolymerVersion();
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'LitElement': function LitElement() {
                                            var version = window.litElementVersions && window.litElementVersions[0];
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'LitHtml': function LitHtml() {
                                            var version = window.litHtmlVersions && window.litHtmlVersions[0];
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'Vue.js': function VueJs() {
                                            if (window.Vue) {
                                              return window.Vue.version;
                                            }
                                          }
                                        };
                                      }
                                    }, {
                                      key: 'getUsedVaadinElements',
                                      value: function getUsedVaadinElements(elements) {
                                        var version = getPolymerVersion();
                                        var elementClasses = void 0;
                                        // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
                                        // Check all locations calling the method getEntries() in
                                        // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
                                        // Currently it is only used by BootstrapHandler.
                                        if (version && version.indexOf('2') === 0) {
                                          // Polymer 2: components classes are stored in window.Vaadin
                                          elementClasses = Object.keys(window.Vaadin).map(function (c) {
                                            return window.Vaadin[c];
                                          }).filter(function (c) {
                                            return c.is;
                                          });
                                        } else {
                                          // Polymer 3: components classes are stored in window.Vaadin.registrations
                                          elementClasses = window.Vaadin.registrations || [];
                                        }
                                        elementClasses.forEach(function (klass) {
                                          var version = klass.version ? klass.version : "0.0.0";
                                          elements[klass.is] = { version: version };
                                        });
                                      }
                                    }, {
                                      key: 'getUsedVaadinThemes',
                                      value: function getUsedVaadinThemes(themes) {
                                        ['Lumo', 'Material'].forEach(function (themeName) {
                                          var theme;
                                          var version = getPolymerVersion();
                                          if (version && version.indexOf('2') === 0) {
                                            // Polymer 2: themes are stored in window.Vaadin
                                            theme = window.Vaadin[themeName];
                                          } else {
                                            // Polymer 3: themes are stored in custom element registry
                                            theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
                                          }
                                          if (theme && theme.version) {
                                            themes[themeName] = { version: theme.version };
                                          }
                                        });
                                      }
                                    }, {
                                      key: 'getFrameworks',
                                      value: function getFrameworks(frameworks) {
                                        var detectors = this.frameworkVersionDetectors();
                                        Object.keys(detectors).forEach(function (framework) {
                                          var detector = detectors[framework];
                                          try {
                                            var version = detector();
                                            if (version) {
                                              frameworks[framework] = { version: version };
                                            }
                                          } catch (e) {}
                                        });
                                      }
                                    }, {
                                      key: 'gather',
                                      value: function gather(storage) {
                                        var storedStats = storage.read();
                                        var gatheredStats = {};
                                        var types = ["elements", "frameworks", "themes"];
                                         types.forEach(function (type) {
                                          gatheredStats[type] = {};
                                          if (!storedStats[type]) {
                                            storedStats[type] = {};
                                          }
                                        });
                                         var previousStats = JSON.stringify(storedStats);
                                         this.getUsedVaadinElements(gatheredStats.elements);
                                        this.getFrameworks(gatheredStats.frameworks);
                                        this.getUsedVaadinThemes(gatheredStats.themes);
                                         var now = this.now;
                                        types.forEach(function (type) {
                                          var keys = Object.keys(gatheredStats[type]);
                                          keys.forEach(function (key) {
                                            if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
                                              storedStats[type][key] = { firstUsed: now };
                                            }
                                            // Discards any previously logged version number
                                            storedStats[type][key].version = gatheredStats[type][key].version;
                                            storedStats[type][key].lastUsed = now;
                                          });
                                        });
                                         var newStats = JSON.stringify(storedStats);
                                        storage.write(newStats);
                                        if (newStats != previousStats && Object.keys(storedStats).length > 0) {
                                          this.logger.debug("New stats: " + newStats);
                                        }
                                      }
                                    }]);
                                    return StatisticsGatherer;
                                    }();
                                    var StatisticsStorage = function () {
                                    function StatisticsStorage(key) {
                                      classCallCheck(this, StatisticsStorage);
                                       this.key = key;
                                    }
                                     createClass(StatisticsStorage, [{
                                      key: 'read',
                                      value: function read() {
                                        var localStorageStatsString = localStorage.getItem(this.key);
                                        try {
                                          return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
                                        } catch (e) {
                                          return {};
                                        }
                                      }
                                    }, {
                                      key: 'write',
                                      value: function write(data) {
                                        localStorage.setItem(this.key, data);
                                      }
                                    }, {
                                      key: 'clear',
                                      value: function clear() {
                                        localStorage.removeItem(this.key);
                                      }
                                    }, {
                                      key: 'isEmpty',
                                      value: function isEmpty() {
                                        var storedStats = this.read();
                                        var empty = true;
                                        Object.keys(storedStats).forEach(function (key) {
                                          if (Object.keys(storedStats[key]).length > 0) {
                                            empty = false;
                                          }
                                        });
                                         return empty;
                                      }
                                    }]);
                                    return StatisticsStorage;
                                    }();
                                    var StatisticsSender = function () {
                                    function StatisticsSender(url, logger) {
                                      classCallCheck(this, StatisticsSender);
                                       this.url = url;
                                      this.logger = logger;
                                    }
                                     createClass(StatisticsSender, [{
                                      key: 'send',
                                      value: function send(data, errorHandler) {
                                        var logger = this.logger;
                                         if (navigator.onLine === false) {
                                          logger.debug("Offline, can't send");
                                          errorHandler();
                                          return;
                                        }
                                        logger.debug("Sending data to " + this.url);
                                         var req = new XMLHttpRequest();
                                        req.withCredentials = true;
                                        req.addEventListener("load", function () {
                                          // Stats sent, nothing more to do
                                          logger.debug("Response: " + req.responseText);
                                        });
                                        req.addEventListener("error", function () {
                                          logger.debug("Send failed");
                                          errorHandler();
                                        });
                                        req.addEventListener("abort", function () {
                                          logger.debug("Send aborted");
                                          errorHandler();
                                        });
                                        req.open("POST", this.url);
                                        req.setRequestHeader("Content-Type", "application/json");
                                        req.send(data);
                                      }
                                    }]);
                                    return StatisticsSender;
                                    }();
                                    var StatisticsLogger = function () {
                                    function StatisticsLogger(id) {
                                      classCallCheck(this, StatisticsLogger);
                                       this.id = id;
                                    }
                                     createClass(StatisticsLogger, [{
                                      key: '_isDebug',
                                      value: function _isDebug() {
                                        return localStorage.getItem("vaadin." + this.id + ".debug");
                                      }
                                    }, {
                                      key: 'debug',
                                      value: function debug(msg) {
                                        if (this._isDebug()) {
                                          console.info(this.id + ": " + msg);
                                        }
                                      }
                                    }]);
                                    return StatisticsLogger;
                                    }();
                                    var UsageStatistics = function () {
                                    function UsageStatistics() {
                                      classCallCheck(this, UsageStatistics);
                                       this.now = new Date();
                                      this.timeNow = this.now.getTime();
                                      this.gatherDelay = 10; // Delay between loading this file and gathering stats
                                      this.initialDelay = 24 * 60 * 60;
                                       this.logger = new StatisticsLogger("statistics");
                                      this.storage = new StatisticsStorage("vaadin.statistics.basket");
                                      this.gatherer = new StatisticsGatherer(this.logger);
                                      this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
                                    }
                                     createClass(UsageStatistics, [{
                                      key: 'maybeGatherAndSend',
                                      value: function maybeGatherAndSend() {
                                        var _this = this;
                                         if (localStorage.getItem(UsageStatistics.optOutKey)) {
                                          return;
                                        }
                                        this.gatherer.gather(this.storage);
                                        setTimeout(function () {
                                          _this.maybeSend();
                                        }, this.gatherDelay * 1000);
                                      }
                                    }, {
                                      key: 'lottery',
                                      value: function lottery() {
                                        return true;
                                      }
                                    }, {
                                      key: 'currentMonth',
                                      value: function currentMonth() {
                                        return this.now.getYear() * 12 + this.now.getMonth();
                                      }
                                    }, {
                                      key: 'maybeSend',
                                      value: function maybeSend() {
                                        var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
                                        var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
                                         if (!firstUse) {
                                          // Use a grace period to avoid interfering with tests, incognito mode etc
                                          firstUse = this.timeNow;
                                          localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
                                        }
                                         if (this.timeNow < firstUse + this.initialDelay * 1000) {
                                          this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
                                          return;
                                        }
                                        if (this.currentMonth() <= monthProcessed) {
                                          this.logger.debug("This month has already been processed");
                                          return;
                                        }
                                        localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
                                        // Use random sampling
                                        if (this.lottery()) {
                                          this.logger.debug("Congratulations, we have a winner!");
                                        } else {
                                          this.logger.debug("Sorry, no stats from you this time");
                                          return;
                                        }
                                         this.send();
                                      }
                                    }, {
                                      key: 'send',
                                      value: function send() {
                                        // Ensure we have the latest data
                                        this.gatherer.gather(this.storage);
                                         // Read, send and clean up
                                        var data = this.storage.read();
                                        data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
                                        data["usageStatisticsVersion"] = UsageStatistics.version;
                                        var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
                                        var self = this;
                                        this.sender.send(info + JSON.stringify(data), function () {
                                          // Revert the 'month processed' flag
                                          localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
                                        });
                                      }
                                    }], [{
                                      key: 'version',
                                      get: function get$1() {
                                        return '2.1.0';
                                      }
                                    }, {
                                      key: 'firstUseKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.firstuse';
                                      }
                                    }, {
                                      key: 'monthProcessedKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.monthProcessed';
                                      }
                                    }, {
                                      key: 'optOutKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.optout';
                                      }
                                    }]);
                                    return UsageStatistics;
                                    }();
                                    try {
                                    window.Vaadin = window.Vaadin || {};
                                    window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
                                    window.Vaadin.usageStatsChecker.maybeGatherAndSend();
                                    } catch (e) {
                                    // Intentionally ignored as this is not a problem in the app being developed
                                    }
                                    }());
                                     vaadin-dev-mode:end **/}const usageStatistics=function(){if("function"===typeof runIfDevelopmentMode){return runIfDevelopmentMode(maybeGatherAndSendStats)}};_exports.usageStatistics$1=_exports.usageStatistics=usageStatistics;var vaadinUsageStatisticsCollect={usageStatistics:usageStatistics};_exports.$vaadinUsageStatisticsCollect=vaadinUsageStatisticsCollect;var vaadinUsageStatistics={usageStatistics:usageStatistics};_exports.$vaadinUsageStatistics=vaadinUsageStatistics;if(!window.Vaadin){window.Vaadin={}}/**
   * Array of Vaadin custom element classes that have been finalized.
   */window.Vaadin.registrations=window.Vaadin.registrations||[];// Use the hack to prevent polymer-modulizer from converting to exports
window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){if(usageStatistics){usageStatistics()}};let statsJob;const registered=new Set,ElementMixin=superClass=>class VaadinElementMixin extends DirMixin(superClass){/** @protected */static finalize(){super.finalize();const{is}=this;// Registers a class prototype for telemetry purposes.
if(is&&!registered.has(is)){window.Vaadin.registrations.push(this);registered.add(is);if(window.Vaadin.developmentModeCallback){statsJob=_cureMe.Debouncer.debounce(statsJob,_cureMe.idlePeriod,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()});(0,_cureMe.enqueueDebouncer)(statsJob)}}}constructor(){super();if(null===document.doctype){console.warn("Vaadin components require the \"standards mode\" declaration. Please add <!DOCTYPE html> to the HTML document.")}}};/**
                               * @polymerMixin
                               */_exports.ElementMixin=ElementMixin;var vaadinElementMixin={ElementMixin:ElementMixin};_exports.$vaadinElementMixin=vaadinElementMixin;class ButtonElement extends ElementMixin(ControlStateMixin(ThemableMixin((0,_cureMe.GestureEventListeners)(_cureMe.PolymerElement)))){static get template(){return _cureMe.html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.2.2"}ready(){super.ready();// Leaving default role in the native button, makes navigation announcement
// being different when using focus navigation (tab) versus using normal
// navigation (arrows). The first way announces the label on a button
// since the focus is moved programmatically, and the second on a group.
this.setAttribute("role","button");this.$.button.setAttribute("role","presentation");this._addActiveListeners();// Fix for https://github.com/vaadin/vaadin-button-flow/issues/120
window.ShadyDOM&&window.ShadyDOM.flush()}/**
     * @protected
     */disconnectedCallback(){super.disconnectedCallback();// `active` state is preserved when the element is disconnected between keydown and keyup events.
// reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.
if(this.hasAttribute("active")){this.removeAttribute("active")}}_addActiveListeners(){(0,_cureMe.addListener)(this,"down",()=>!this.disabled&&this.setAttribute("active",""));(0,_cureMe.addListener)(this,"up",()=>this.removeAttribute("active"));this.addEventListener("keydown",e=>!this.disabled&&0<=[13,32].indexOf(e.keyCode)&&this.setAttribute("active",""));this.addEventListener("keyup",()=>this.removeAttribute("active"));this.addEventListener("blur",()=>this.removeAttribute("active"))}/**
     * @protected
     */get focusElement(){return this.$.button}}_exports.ButtonElement=ButtonElement;customElements.define(ButtonElement.is,ButtonElement);var vaadinButton={ButtonElement:ButtonElement};_exports.$vaadinButton=vaadinButton;class Lumo extends HTMLElement{static get version(){return"1.6.0"}}_exports.Lumo=Lumo;customElements.define("vaadin-lumo-styles",Lumo);var version={Lumo:Lumo};_exports.$version=version;const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<custom-style>
  <style>
    html {
      /* Base (background) */
      --lumo-base-color: #FFF;

      /* Tint */
      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
      --lumo-tint: #FFF;

      /* Shade */
      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);
      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);
      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);
      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
      --lumo-shade: hsl(214, 35%, 15%);

      /* Contrast */
      --lumo-contrast-5pct: var(--lumo-shade-5pct);
      --lumo-contrast-10pct: var(--lumo-shade-10pct);
      --lumo-contrast-20pct: var(--lumo-shade-20pct);
      --lumo-contrast-30pct: var(--lumo-shade-30pct);
      --lumo-contrast-40pct: var(--lumo-shade-40pct);
      --lumo-contrast-50pct: var(--lumo-shade-50pct);
      --lumo-contrast-60pct: var(--lumo-shade-60pct);
      --lumo-contrast-70pct: var(--lumo-shade-70pct);
      --lumo-contrast-80pct: var(--lumo-shade-80pct);
      --lumo-contrast-90pct: var(--lumo-shade-90pct);
      --lumo-contrast: var(--lumo-shade);

      /* Text */
      --lumo-header-text-color: var(--lumo-contrast);
      --lumo-body-text-color: var(--lumo-contrast-90pct);
      --lumo-secondary-text-color: var(--lumo-contrast-70pct);
      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
      --lumo-disabled-text-color: var(--lumo-contrast-30pct);

      /* Primary */
      --lumo-primary-color: hsl(214, 90%, 52%);
      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);
      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);
      --lumo-primary-text-color: var(--lumo-primary-color);
      --lumo-primary-contrast-color: #FFF;

      /* Error */
      --lumo-error-color: hsl(3, 100%, 61%);
      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);
      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);
      --lumo-error-text-color: hsl(3, 92%, 53%);
      --lumo-error-contrast-color: #FFF;

      /* Success */
      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */
      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);
      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);
      --lumo-success-text-color: hsl(145, 100%, 32%);
      --lumo-success-contrast-color: #FFF;
    }
  </style>
</custom-style><dom-module id="lumo-color">
  <template>
    <style>
      [theme~="dark"] {
        /* Base (background) */
        --lumo-base-color: hsl(214, 35%, 21%);

        /* Tint */
        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);
        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);
        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
        --lumo-tint: hsl(214, 100%, 98%);

        /* Shade */
        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
        --lumo-shade: hsl(214, 33%, 13%);

        /* Contrast */
        --lumo-contrast-5pct: var(--lumo-tint-5pct);
        --lumo-contrast-10pct: var(--lumo-tint-10pct);
        --lumo-contrast-20pct: var(--lumo-tint-20pct);
        --lumo-contrast-30pct: var(--lumo-tint-30pct);
        --lumo-contrast-40pct: var(--lumo-tint-40pct);
        --lumo-contrast-50pct: var(--lumo-tint-50pct);
        --lumo-contrast-60pct: var(--lumo-tint-60pct);
        --lumo-contrast-70pct: var(--lumo-tint-70pct);
        --lumo-contrast-80pct: var(--lumo-tint-80pct);
        --lumo-contrast-90pct: var(--lumo-tint-90pct);
        --lumo-contrast: var(--lumo-tint);

        /* Text */
        --lumo-header-text-color: var(--lumo-contrast);
        --lumo-body-text-color: var(--lumo-contrast-90pct);
        --lumo-secondary-text-color: var(--lumo-contrast-70pct);
        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
        --lumo-disabled-text-color: var(--lumo-contrast-30pct);

        /* Primary */
        --lumo-primary-color: hsl(214, 86%, 55%);
        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);
        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);
        --lumo-primary-text-color: hsl(214, 100%, 70%);
        --lumo-primary-contrast-color: #FFF;

        /* Error */
        --lumo-error-color: hsl(3, 90%, 63%);
        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);
        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);
        --lumo-error-text-color: hsl(3, 100%, 67%);

        /* Success */
        --lumo-success-color: hsl(145, 65%, 42%);
        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);
        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);
        --lumo-success-text-color: hsl(145, 85%, 47%);
      }

      html {
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
      }

      [theme~="dark"] {
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--lumo-header-text-color);
      }

      a {
        color: var(--lumo-primary-text-color);
      }

      blockquote {
        color: var(--lumo-secondary-text-color);
      }

      code,
      pre {
        background-color: var(--lumo-contrast-10pct);
        border-radius: var(--lumo-border-radius-m);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-color-legacy">
  <template>
    <style include="lumo-color">
      :host {
        color: var(--lumo-body-text-color) !important;
        background-color: var(--lumo-base-color) !important;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content);/* Only needed for IE11 when you want to use the dark palette inside the light palette */ /*
                                                                                                                                                    FIXME(polymer-modulizer): the above comments were extracted
                                                                                                                                                    from HTML and may be out of place here. Review them and
                                                                                                                                                    then delete this comment!
                                                                                                                                                  */;const $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML=`<custom-style>
  <style>
    html {
      --lumo-size-xs: 1.625rem;
      --lumo-size-s: 1.875rem;
      --lumo-size-m: 2.25rem;
      --lumo-size-l: 2.75rem;
      --lumo-size-xl: 3.5rem;

      /* Icons */
      --lumo-icon-size-s: 1.25em;
      --lumo-icon-size-m: 1.5em;
      --lumo-icon-size-l: 2.25em;
      /* For backwards compatibility */
      --lumo-icon-size: var(--lumo-icon-size-m);
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$1.content);const $_documentContainer$2=document.createElement("template");$_documentContainer$2.innerHTML=`<custom-style>
  <style>
    html {
      /* Square */
      --lumo-space-xs: 0.25rem;
      --lumo-space-s: 0.5rem;
      --lumo-space-m: 1rem;
      --lumo-space-l: 1.5rem;
      --lumo-space-xl: 2.5rem;

      /* Wide */
      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

      /* Tall */
      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$2.content);const $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML=`<custom-style>
  <style>
    html {
      /* Border radius */
      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
      --lumo-border-radius: 0.25em; /* Deprecated */

      /* Shadow */
      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

      /* Clickable element cursor */
      --lumo-clickable-cursor: default;
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$3.content);const $_documentContainer$4=document.createElement("template");$_documentContainer$4.innerHTML=`<custom-style>
  <style>
    html {
      /* Font families */
      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

      /* Font sizes */
      --lumo-font-size-xxs: .75rem;
      --lumo-font-size-xs: .8125rem;
      --lumo-font-size-s: .875rem;
      --lumo-font-size-m: 1rem;
      --lumo-font-size-l: 1.125rem;
      --lumo-font-size-xl: 1.375rem;
      --lumo-font-size-xxl: 1.75rem;
      --lumo-font-size-xxxl: 2.5rem;

      /* Line heights */
      --lumo-line-height-xs: 1.25;
      --lumo-line-height-s: 1.375;
      --lumo-line-height-m: 1.625;
    }

  </style>
</custom-style><dom-module id="lumo-typography">
  <template>
    <style>
      html {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      small,
      [theme~="font-size-s"] {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
      }

      [theme~="font-size-xs"] {
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 600;
        line-height: var(--lumo-line-height-xs);
        margin-top: 1.25em;
      }

      h1 {
        font-size: var(--lumo-font-size-xxxl);
        margin-bottom: 0.75em;
      }

      h2 {
        font-size: var(--lumo-font-size-xxl);
        margin-bottom: 0.5em;
      }

      h3 {
        font-size: var(--lumo-font-size-xl);
        margin-bottom: 0.5em;
      }

      h4 {
        font-size: var(--lumo-font-size-l);
        margin-bottom: 0.5em;
      }

      h5 {
        font-size: var(--lumo-font-size-m);
        margin-bottom: 0.25em;
      }

      h6 {
        font-size: var(--lumo-font-size-xs);
        margin-bottom: 0;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }

      p,
      blockquote {
        margin-top: 0.5em;
        margin-bottom: 0.75em;
      }

      a {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      hr {
        display: block;
        align-self: stretch;
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
        background-color: var(--lumo-contrast-10pct);
      }

      blockquote {
        border-left: 2px solid var(--lumo-contrast-30pct);
      }

      b,
      strong {
        font-weight: 600;
      }

      /* RTL specific styles */

      blockquote[dir="rtl"] {
        border-left: none;
        border-right: 2px solid var(--lumo-contrast-30pct);
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$4.content);const $_documentContainer$5=_cureMe.html`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$5.content);/**
                                                          @license
                                                          Copyright (c) 2018 Vaadin Ltd.
                                                          This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
                                                          */ /*
                                                              * Placeholder object class representing items being loaded.
                                                              *
                                                              * @private
                                                              */const ComboBoxPlaceholder=class ComboBoxPlaceholder{toString(){return""}};_exports.ComboBoxPlaceholder=ComboBoxPlaceholder;var vaadinComboBoxPlaceholder={ComboBoxPlaceholder:ComboBoxPlaceholder};_exports.$vaadinComboBoxPlaceholder=vaadinComboBoxPlaceholder;const ComboBoxDataProviderMixin=superClass=>class DataProviderMixin extends superClass{static get properties(){return{/**
       * Number of items fetched at a time from the dataprovider.
       */pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},/**
       * Total number of items.
       */size:{type:Number,observer:"_sizeChanged"},/**
       * Function that provides items lazily. Receives arguments `params`, `callback`
       *
       * `params.page` Requested page index
       *
       * `params.pageSize` Current page size
       *
       * `params.filter` Currently applied filter
       *
       * `callback(items, size)` Callback function with arguments:
       *   - `items` Current page of items
       *   - `size` Total number of items.
       */dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>{return{}}},__placeHolder:{value:new ComboBoxPlaceholder}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(dataProvider,opened,value){// Can't depend on filter in this obsever as we don't want
// to clear the filter whenever it's set
if(dataProvider&&this.filter){this.size=void 0;this._pendingRequests={};this.filter="";this.clearCache()}}ready(){super.ready();this.clearCache();this.$.overlay.addEventListener("index-requested",e=>{const index=e.detail.index;if(index!==void 0){const page=this._getPageForIndex(index);if(this._shouldLoadPage(page)){this._loadPage(page)}}})}_dataProviderFilterChanged(){if(this.dataProvider&&this.opened){this.size=void 0;this._pendingRequests={};this.clearCache()}}_ensureFirstPage(opened){if(opened&&this._shouldLoadPage(0)){this._loadPage(0)}}_shouldLoadPage(page){if(!this.filteredItems||this._forceNextRequest){this._forceNextRequest=!1;return!0}const loadedItem=this.filteredItems[page*this.pageSize];if(loadedItem!==void 0){return loadedItem instanceof ComboBoxPlaceholder}else{return this.size===void 0}}_loadPage(page){// make sure same page isn't requested multiple times.
if(!this._pendingRequests[page]&&this.dataProvider){this.loading=!0;const params={page,pageSize:this.pageSize,filter:this.filter},callback=(items,size)=>{if(this._pendingRequests[page]===callback){if(!this.filteredItems){const filteredItems=[];filteredItems.splice(params.page*params.pageSize,items.length,...items);this.filteredItems=filteredItems}else{this.splice("filteredItems",params.page*params.pageSize,items.length,...items)}// Update selectedItem from filteredItems if value is set
if(this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value){this._selectItemForValue(this.value)}this.size=size;delete this._pendingRequests[page];if(0===Object.keys(this._pendingRequests).length){this.loading=!1}if(0===page&&this.__repositionOverlayDebouncer&&items.length>(this.__maxRenderedItems||0)){setTimeout(()=>this.__repositionOverlayDebouncer.flush());this.__maxRenderedItems=items.length}}};this._pendingRequests[page]=callback;this.dataProvider(params,callback)}}_getPageForIndex(index){return Math.floor(index/this.pageSize)}/**
     * Clears the cached pages and reloads data from dataprovider when needed.
     */clearCache(){if(!this.dataProvider){return}this._pendingRequests={};const filteredItems=[];for(let i=0;i<(this.size||0);i++){filteredItems.push(this.__placeHolder)}this.filteredItems=filteredItems;if(this.opened){this._loadPage(0)}else{this._forceNextRequest=!0}}_sizeChanged(size=0){const filteredItems=(this.filteredItems||[]).slice(0,size);for(let i=0;i<size;i++){filteredItems[i]=filteredItems[i]!==void 0?filteredItems[i]:this.__placeHolder}this.filteredItems=filteredItems}_pageSizeChanged(pageSize,oldPageSize){if(Math.floor(pageSize)!==pageSize||1>pageSize){this.pageSize=oldPageSize;throw new Error("`pageSize` value must be an integer > 0")}this.clearCache()}_dataProviderChanged(dataProvider,oldDataProvider){this._ensureItemsOrDataProvider(()=>{this.dataProvider=oldDataProvider})}_ensureItemsOrDataProvider(restoreOldValueCallback){if(this.items!==void 0&&this.dataProvider!==void 0){restoreOldValueCallback();throw new Error("Using `items` and `dataProvider` together is not supported")}else if(this.dataProvider&&!this.filteredItems){this.filteredItems=[]}}_warnDataProviderValue(dataProvider,value){if(dataProvider&&""!==value&&(this.selectedItem===void 0||null===this.selectedItem)){const valueIndex=this._indexOfValue(value,this.filteredItems);if(0>valueIndex||!this._getItemLabel(this.filteredItems[valueIndex])){/* eslint-disable no-console */console.warn("Warning: unable to determine the label for the provided `value`. "+"Nothing to display in the text field. This usually happens when "+"setting an initial `value` before any items are returned from "+"the `dataProvider` callback. Consider setting `selectedItem` "+"instead of `value`");/* eslint-enable no-console */}}}};_exports.ComboBoxDataProviderMixin=ComboBoxDataProviderMixin;var vaadinComboBoxDataProviderMixin={ComboBoxDataProviderMixin:ComboBoxDataProviderMixin};_exports.$vaadinComboBoxDataProviderMixin=vaadinComboBoxDataProviderMixin;class ComboBoxItemElement extends ThemableMixin(_cureMe.PolymerElement){static get template(){return _cureMe.html`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`}static get is(){return"vaadin-combo-box-item"}static get properties(){return{/**
       * The index of the item
       */index:Number,/**
       * The item to render
       * @type {(String|Object)}
       */item:Object,/**
       * The text label corresponding to the item
       */label:String,/**
       * True when item is selected
       */selected:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * True when item is focused
       */focused:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * The template instance corresponding to the item
       */_itemTemplateInstance:Object,/**
       * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
       */renderer:Function,/**
       * Saved instance of a custom renderer function.
       */_oldRenderer:Function}}static get observers(){return["_rendererOrItemChanged(renderer, index, item.*)","_updateLabel(label, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"index\", index, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"item\", item, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"selected\", selected, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"focused\", focused, _itemTemplateInstance)"]}connectedCallback(){super.connectedCallback();if(!this._itemTemplateInstance){// 2.0 has __dataHost. Might want to consider assigning combobox reference directly to item.
const overlay=this.getRootNode().host.getRootNode().host,dropdown=overlay.__dataHost,comboBoxOverlay=dropdown.getRootNode().host;this._comboBox=comboBoxOverlay.getRootNode().host;this._comboBox._ensureTemplatized();if(this._comboBox._TemplateClass){this._itemTemplateInstance=new this._comboBox._TemplateClass({});this.$.content.textContent="";this.$.content.appendChild(this._itemTemplateInstance.root)}}}_render(){if(!this.renderer){return}const model={index:this.index,item:this.item};this.renderer(this.$.content,this._comboBox,model)}_rendererOrItemChanged(renderer,index,item){if(item===void 0||index===void 0){return}if(this._oldRenderer!==renderer){this.$.content.innerHTML=""}if(renderer){this._oldRenderer=renderer;this._render()}}_updateLabel(label,_itemTemplateInstance){if(_itemTemplateInstance===void 0&&this.$.content&&!this.renderer){// Only set label to textContent no template
this.$.content.textContent=label}}_updateTemplateInstanceVariable(variable,value,_itemTemplateInstance){if(variable===void 0||value===void 0||_itemTemplateInstance===void 0){return}_itemTemplateInstance[variable]=value}}customElements.define(ComboBoxItemElement.is,ComboBoxItemElement);const p=Element.prototype,matches=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,FocusablesHelper={/**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the children,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */getTabbableNodes:function(node){const result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);// If there is at least one element with tabindex > 0, we need to sort
// the final array by tabindex.
if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result},/**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */isFocusable:function(element){// From http://stackoverflow.com/a/1600194/4228703:
// There isn't a definite list, it's up to the browser. The only
// standard we have is DOM Level 2 HTML
// https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
// only elements that have a focus() method are HTMLInputElement,
// HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
// notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
// tests with tabbables in different browsers
// http://allyjs.io/data-tables/focusable.html
// Elements that cannot be focused if they have [disabled] attribute.
if(matches.call(element,"input, select, textarea, button, object")){return matches.call(element,":not([disabled])")}// Elements that can be focused even if they have [disabled] attribute.
return matches.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")},/**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */isTabbable:function(element){return this.isFocusable(element)&&matches.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)},/**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */_normalizedTabIndex:function(element){if(this.isFocusable(element)){const tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1},/**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result` if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */_collectTabbableNodes:function(node,result){// If not an element or not visible, no need to explore children.
if(node.nodeType!==Node.ELEMENT_NODE||!this._isVisible(node)){return!1}const element=/** @type {!HTMLElement} */node,tabIndex=this._normalizedTabIndex(element);let needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}// In ShadowDOM v1, tab order is affected by the order of distribution.
// E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
// in ShadowDOM v0 tab order is not affected by the distribution order,
// in fact getTabbableNodes(#root) returns [#B, #A].
//  <div id="root">
//   <!-- shadow -->
//     <slot name="a">
//     <slot name="b">
//   <!-- /shadow -->
//   <input id="A" slot="a">
//   <input id="B" slot="b" tabindex="1">
//  </div>
let children;if("slot"===element.localName){children=element.assignedNodes({flatten:!0})}else{// Use shadow root if possible, will check for distributed nodes.
children=(element.shadowRoot||element).children}if(children){for(let i=0;i<children.length;i++){// Ensure method is always invoked to collect tabbable children.
needsSort=this._collectTabbableNodes(children[i],result)||needsSort}}return needsSort},/**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */_isVisible:function(element){// Check inline style first to save a re-flow. If looks good, check also
// computed style.
let style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1},/**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */_sortByTabIndex:function(tabbables){// Implement a merge sort as Array.prototype.sort does a non-stable sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const len=tabbables.length;if(2>len){return tabbables}const pivot=Math.ceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)},/**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */_mergeSortByTabIndex:function(left,right){const result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)},/**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */_hasLowerTabOrder:function(a,b){// Normalize tabIndexes
// e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
const ati=Math.max(a.tabIndex,0),bti=Math.max(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}};_exports.FocusablesHelper=FocusablesHelper;var vaadinFocusablesHelper={FocusablesHelper:FocusablesHelper};_exports.$vaadinFocusablesHelper=vaadinFocusablesHelper;let overlayContentCounter=0;const overlayContentCache={},createOverlayContent=cssText=>{const is=overlayContentCache[cssText]||processOverlayStyles(cssText);return document.createElement(is)},processOverlayStyles=cssText=>{overlayContentCounter++;const is=`vaadin-overlay-content-${overlayContentCounter}`,styledTemplate=document.createElement("template"),style=document.createElement("style");style.textContent=":host { display: block; }"+cssText;styledTemplate.content.appendChild(style);if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(styledTemplate,is)}// NOTE(platosha): Have to use an awkward IIFE returning class here
// to prevent this class from showing up in analysis.json & API docs.
/** @private */const klass=(()=>class extends HTMLElement{static get is(){return is}constructor(){super();if(!this.shadowRoot){this.attachShadow({mode:"open"});this.shadowRoot.appendChild(document.importNode(styledTemplate.content,!0))}}connectedCallback(){if(window.ShadyCSS){window.ShadyCSS.styleElement(this)}}})();customElements.define(klass.is,klass);overlayContentCache[cssText]=is;return is};/**
    *
    * `<vaadin-overlay>` is a Web Component for creating overlays. The content of the overlay
    * can be populated in two ways: imperatively by using renderer callback function and
    * declaratively by using Polymer's Templates.
    *
    * ### Rendering
    *
    * By default, the overlay uses the content provided by using the renderer callback function.
    *
    * The renderer function provides `root`, `owner`, `model` arguments when applicable.
    * Generate DOM content by using `model` object properties if needed, append it to the `root`
    * element and control the state of the host element by accessing `owner`. Before generating new
    * content, users are able to check if there is already content in `root` for reusing it.
    *
    * ```html
    * <vaadin-overlay id="overlay"></vaadin-overlay>
    * ```
    * ```js
    * const overlay = document.querySelector('#overlay');
    * overlay.renderer = function(root) {
    *  root.textContent = "Overlay content";
    * };
    * ```
    *
    * Renderer is called on the opening of the overlay and each time the related model is updated.
    * DOM generated during the renderer call can be reused
    * in the next renderer call and will be provided with the `root` argument.
    * On first call it will be empty.
    *
    * **NOTE:** when the renderer property is defined, the `<template>` content is not used.
    *
    * ### Templating
    *
    * Alternatively, the content can be provided with Polymer Template.
    * Overlay finds the first child template and uses that in case renderer callback function
    * is not provided. You can also set a custom template using the `template` property.
    *
    * After the content from the template is stamped, the `content` property
    * points to the content container.
    *
    * The overlay provides `forwardHostProp` when calling
    * `Polymer.Templatize.templatize` for the template, so that the bindings
    * from the parent scope propagate to the content.  You can also pass
    * custom `instanceProps` object using the `instanceProps` property.
    *
    * ```html
    * <vaadin-overlay>
    *   <template>Overlay content</template>
    * </vaadin-overlay>
    * ```
    *
    * **NOTE:** when using `instanceProps`: because of the Polymer limitation,
    * every template can only be templatized once, so it is important
    * to set `instanceProps` before the `template` is assigned to the overlay.
    *
    * ### Styling
    *
    * To style the overlay content, use styles in the parent scope:
    *
    * - If the overlay is used in a component, then the component styles
    *   apply the overlay content.
    * - If the overlay is used in the global DOM scope, then global styles
    *   apply to the overlay content.
    *
    * See examples for styling the overlay content in the live demos.
    *
    * The following Shadow DOM parts are available for styling the overlay component itself:
    *
    * Part name  | Description
    * -----------|---------------------------------------------------------|
    * `backdrop` | Backdrop of the overlay
    * `overlay`  | Container for position/sizing/alignment of the content
    * `content`  | Content of the overlay
    *
    * The following state attributes are available for styling:
    *
    * Attribute | Description | Part
    * ---|---|---
    * `opening` | Applied just after the overlay is attached to the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
    * `closing` | Applied just before the overlay is detached from the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
    *
    * The following custom CSS properties are available for styling:
    *
    * Custom CSS property | Description | Default value
    * ---|---|---
    * `--vaadin-overlay-viewport-bottom` | Bottom offset of the visible viewport area | `0` or detected offset
    *
    * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
    *
    * @memberof Vaadin
    * @mixes Vaadin.ThemableMixin
    * @demo demo/index.html
    */class OverlayElement extends ThemableMixin(DirMixin(_cureMe.PolymerElement)){static get template(){return _cureMe.html`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},/**
       * Owner element passed with renderer function
       */owner:Element,/**
       * Custom function for rendering the content of the overlay.
       * Receives three arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `owner` The host element of the renderer function.
       * - `model` The object with the properties related with rendering.
       */renderer:Function,/**
       * The template of the overlay content.
       */template:{type:Object,notify:!0},/**
       * Optional argument for `Polymer.Templatize.templatize`.
       */instanceProps:{type:Object},/**
       * References the content container after the template is stamped.
       */content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Object with properties that is passed to `renderer` function
       */model:Object,/**
       * When true the overlay won't disable the main content, showing
       * it doesn’t change the functionality of the user interface.
       */modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},/**
       * When set to true, the overlay is hidden. This also closes the overlay
       * immediately in case there is a closing animation in progress.
       */hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},/**
       * When true move focus to the first focusable element in the overlay,
       * or to the overlay if there are no focusable elements.
       */focusTrap:{type:Boolean,value:!1},/**
       * Set to true to enable restoring of focus when overlay is closed.
       */restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super();this._boundMouseDownListener=this._mouseDownListener.bind(this);this._boundMouseUpListener=this._mouseUpListener.bind(this);this._boundOutsideClickListener=this._outsideClickListener.bind(this);this._boundKeydownListener=this._keydownListener.bind(this);this._observer=new _cureMe.FlattenedNodesObserver(this,info=>{this._setTemplateFromNodes(info.addedNodes)});// Listener for preventing closing of the paper-dialog and all components extending `iron-overlay-behavior`.
this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this);if(/iPad|iPhone|iPod/.test(navigator.userAgent)){this._boundIosResizeListener=()=>this._detectIosNavbar()}}ready(){super.ready();this._observer.flush();// Need to add dummy click listeners to this and the backdrop or else
// the document click event listener (_outsideClickListener) may never
// get invoked on iOS Safari (reproducible in <vaadin-dialog>
// and <vaadin-context-menu>).
this.addEventListener("click",()=>{});this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened){return}const innerHeight=window.innerHeight,innerWidth=window.innerWidth,landscape=innerWidth>innerHeight,clientHeight=document.documentElement.clientHeight;if(landscape&&clientHeight>innerHeight){this.style.setProperty("--vaadin-overlay-viewport-bottom",clientHeight-innerHeight+"px")}else{this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}}_setTemplateFromNodes(nodes){this.template=nodes.filter(node=>node.localName&&"template"===node.localName)[0]||this.template}/**
     * @event vaadin-overlay-close
     * fired before the `vaadin-overlay` will be closed. If canceled the closing of the overlay is canceled as well.
     */close(sourceEvent){var evt=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:sourceEvent}});this.dispatchEvent(evt);if(!evt.defaultPrevented){this.opened=!1}}connectedCallback(){super.connectedCallback();if(this._boundIosResizeListener){this._detectIosNavbar();window.addEventListener("resize",this._boundIosResizeListener)}}disconnectedCallback(){super.disconnectedCallback();this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(event){event.preventDefault()}_mouseDownListener(event){this._mouseDownInside=0<=event.composedPath().indexOf(this.$.overlay)}_mouseUpListener(event){this._mouseUpInside=0<=event.composedPath().indexOf(this.$.overlay)}/**
     * We need to listen on 'click' / 'tap' event and capture it and close the overlay before
     * propagating the event to the listener in the button. Otherwise, if the clicked button would call
     * open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
     *
     * @event vaadin-overlay-outside-click
     * fired before the `vaadin-overlay` will be closed on outside click. If canceled the closing of the overlay is canceled as well.
     */_outsideClickListener(event){if(-1!==event.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1;this._mouseUpInside=!1;return}if(!this._last){return}const evt=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event)}}/**
     * @event vaadin-overlay-escape-press
     * fired before the `vaadin-overlay` will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
     */_keydownListener(event){if(!this._last){return}// TAB
if("Tab"===event.key&&this.focusTrap&&!event.defaultPrevented){// if only tab key is pressed, cycle forward, else cycle backwards.
this._cycleTab(event.shiftKey?-1:1);event.preventDefault();// ESC
}else if("Escape"===event.key||"Esc"===event.key){const evt=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event)}}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}/**
     * @event vaadin-overlay-open
     * fired after the `vaadin-overlay` is opened.
     */_openedChanged(opened,wasOpened){if(!this._instance){this._ensureTemplatized()}if(opened){// Store focused node.
this.__restoreFocusNode=this._getActiveElement();this._animatedOpening();(0,_cureMe.afterNextRender)(this,()=>{if(this.focusTrap&&!this.contains(document._activeElement||document.activeElement)){this._cycleTab(0,0)}const evt=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(evt)});if(!this.modeless){this._addGlobalListeners()}}else if(wasOpened){this._animatedClosing();if(!this.modeless){this._removeGlobalListeners()}}}_hiddenChanged(hidden){if(hidden&&this.hasAttribute("closing")){this._flushAnimation("closing")}}_shouldAnimate(){const name=getComputedStyle(this).getPropertyValue("animation-name"),hidden="none"===getComputedStyle(this).getPropertyValue("display");return!hidden&&name&&"none"!=name}_enqueueAnimation(type,callback){const handler=`__${type}Handler`,listener=()=>{callback();this.removeEventListener("animationend",listener);delete this[handler]};this[handler]=listener;this.addEventListener("animationend",listener)}_flushAnimation(type){const handler=`__${type}Handler`;if("function"===typeof this[handler]){this[handler]()}}_animatedOpening(){if(this.parentNode===document.body&&this.hasAttribute("closing")){this._flushAnimation("closing")}this._attachOverlay();this.setAttribute("opening","");const finishOpening=()=>{this.removeAttribute("opening");document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener);if(!this.modeless){this._enterModalState()}};if(this._shouldAnimate()){this._enqueueAnimation("opening",finishOpening)}else{finishOpening()}}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder");this.parentNode.insertBefore(this._placeholder,this);document.body.appendChild(this);this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")){this._flushAnimation("opening")}if(this._placeholder){this.setAttribute("closing","");const finishClosing=()=>{this.shadowRoot.querySelector("[part=\"overlay\"]").style.removeProperty("pointer-events");this._exitModalState();document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener);this._detachOverlay();this.removeAttribute("closing");if(this.restoreFocusOnClose&&this.__restoreFocusNode){// If the activeElement is `<body>` or inside the overlay,
// we are allowed to restore the focus. In all the other
// cases focus might have been moved elsewhere by another
// component or by the user interaction (e.g. click on a
// button outside the overlay).
const activeElement=this._getActiveElement();if(activeElement===document.body||this._deepContains(activeElement)){this.__restoreFocusNode.focus()}this.__restoreFocusNode=null}};if(this._shouldAnimate()){this._enqueueAnimation("closing",finishClosing)}else{finishClosing()}}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder);this._placeholder.parentNode.removeChild(this._placeholder)}/**
     * Returns all attached overlays in visual stacking order.
     */static get __attachedInstances(){return Array.from(document.body.children).filter(el=>el instanceof OverlayElement).sort((a,b)=>a.__zIndex-b.__zIndex||0)}/**
     * returns true if this is the last one in the opened overlays stack
     */get _last(){return this===OverlayElement.__attachedInstances.pop()}_modelessChanged(modeless){if(!modeless){if(this.opened){this._addGlobalListeners();this._enterModalState()}}else{this._removeGlobalListeners();this._exitModalState()}}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener);document.addEventListener("mouseup",this._boundMouseUpListener);// Firefox leaks click to document on contextmenu even if prevented
// https://bugzilla.mozilla.org/show_bug.cgi?id=990614
document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0);document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){if("none"!==document.body.style.pointerEvents){// Set body pointer-events to 'none' to disable mouse interactions with
// other document nodes.
this._previousDocumentPointerEvents=document.body.style.pointerEvents;document.body.style.pointerEvents="none"}// Disable pointer events in other attached overlays
OverlayElement.__attachedInstances.forEach(el=>{if(el!==this&&!el.hasAttribute("opening")&&!el.hasAttribute("closing")){el.shadowRoot.querySelector("[part=\"overlay\"]").style.pointerEvents="none"}})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener);document.removeEventListener("mouseup",this._boundMouseUpListener);document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0);document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){if(this._previousDocumentPointerEvents!==void 0){// Restore body pointer-events
document.body.style.pointerEvents=this._previousDocumentPointerEvents;delete this._previousDocumentPointerEvents}// Restore pointer events in the previous overlay(s)
const instances=OverlayElement.__attachedInstances;let el;// Use instances.pop() to ensure the reverse order
while(el=instances.pop()){if(el===this){// Skip the current instance
continue}el.shadowRoot.querySelector("[part=\"overlay\"]").style.removeProperty("pointer-events");if(!el.modeless){// Stop after the last modal
break}}}_removeOldContent(){if(!this.content||!this._contentNodes){return}this._observer.disconnect();this._contentNodes.forEach(node=>{if(node.parentNode===this.content){this.content.removeChild(node)}});if(this._originalContentPart){// Restore the original <div part="content">
this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content);this.$.content=this._originalContentPart;this._originalContentPart=void 0}this._observer.connect();this._contentNodes=void 0;this.content=void 0}_stampOverlayTemplate(template,instanceProps){this._removeOldContent();if(!template._Templatizer){template._Templatizer=(0,_cureMe.templatize)(template,this,{instanceProps:instanceProps,forwardHostProp:function(prop,value){if(this._instance){this._instance.forwardHostProp(prop,value)}}})}this._instance=new template._Templatizer({});this._contentNodes=Array.from(this._instance.root.childNodes);const templateRoot=template._templateRoot||(template._templateRoot=template.getRootNode()),_isScoped=templateRoot!==document;if(_isScoped){const isShady=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;if(!this.$.content.shadowRoot){this.$.content.attachShadow({mode:"open"})}let scopeCssText=Array.from(templateRoot.querySelectorAll("style")).reduce((result,style)=>result+style.textContent,"");if(isShady){// NOTE(platosha): ShadyCSS removes <style>’s from templates, so
// we have to use these protected APIs to get their contents back
const styleInfo=window.ShadyCSS.ScopingShim._styleInfoForNode(templateRoot.host);if(styleInfo){scopeCssText+=styleInfo._getStyleRules().parsedCssText;scopeCssText+="}"}}// The overlay root’s :host styles should not apply inside the overlay
scopeCssText=scopeCssText.replace(/:host/g,":host-nomatch");if(scopeCssText){if(isShady){// ShadyDOM: replace the <div part="content"> with a generated
// styled custom element
const contentPart=createOverlayContent(scopeCssText);contentPart.id="content";contentPart.setAttribute("part","content");this.$.content.parentNode.replaceChild(contentPart,this.$.content);// NOTE(platosha): carry the style scope of the content part
contentPart.className=this.$.content.className;this._originalContentPart=this.$.content;this.$.content=contentPart}else{// Shadow DOM: append a style to the content shadowRoot
const style=document.createElement("style");style.textContent=scopeCssText;this.$.content.shadowRoot.appendChild(style);this._contentNodes.unshift(style)}}this.$.content.shadowRoot.appendChild(this._instance.root);this.content=this.$.content.shadowRoot}else{this.appendChild(this._instance.root);this.content=this}}_removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this.template=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}/**
     * Manually invoke existing renderer.
     */render(){if(this.renderer){this.renderer.call(this.owner,this.content,this.owner,this.model)}}_templateOrRendererChanged(template,renderer,owner,model,instanceProps,opened){if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for overlay content")}const ownerOrModelChanged=this._oldOwner!==owner||this._oldModel!==model;this._oldModel=model;this._oldOwner=owner;const templateOrInstancePropsChanged=this._oldInstanceProps!==instanceProps||this._oldTemplate!==template;this._oldInstanceProps=instanceProps;this._oldTemplate=template;const rendererChanged=this._oldRenderer!==renderer;this._oldRenderer=renderer;const openedChanged=this._oldOpened!==opened;this._oldOpened=opened;if(template&&templateOrInstancePropsChanged){this._stampOverlayTemplate(template,instanceProps)}else if(renderer&&(rendererChanged||openedChanged||ownerOrModelChanged)){this.content=this;if(rendererChanged){while(this.content.firstChild){this.content.removeChild(this.content.firstChild)}}if(opened){this.render()}}}_isFocused(element){return element&&element.getRootNode().activeElement===element}_focusedIndex(elements){elements=elements||this._getFocusableElements();return elements.indexOf(elements.filter(this._isFocused).pop())}_cycleTab(increment,index){const focusableElements=this._getFocusableElements();if(index===void 0){index=this._focusedIndex(focusableElements)}index+=increment;// rollover to first item
if(index>=focusableElements.length){index=0;// go to last item
}else if(0>index){index=focusableElements.length-1}focusableElements[index].focus()}_getFocusableElements(){// collect all focusable elements
return FocusablesHelper.getTabbableNodes(this.$.overlay)}_getActiveElement(){let active=document._activeElement||document.activeElement;// document.activeElement can be null
// https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
// In IE 11, it can also be an object when operating in iframes
// or document.documentElement (when overlay closed on outside click).
// In these cases, default it to document.body.
if(!active||active===document.documentElement||!1===active instanceof Element){active=document.body}while(active.shadowRoot&&active.shadowRoot.activeElement){active=active.shadowRoot.activeElement}return active}_deepContains(node){if(this.contains(node)){return!0}let n=node;const doc=node.ownerDocument;// walk from node to `this` or `document`
while(n&&n!==doc&&n!==this){n=n.parentNode||n.host}return n===this}/**
     * Brings the overlay as visually the frontmost one
     */bringToFront(){let zIndex="";const frontmost=OverlayElement.__attachedInstances.filter(o=>o!==this).pop();if(frontmost){const frontmostZIndex=frontmost.__zIndex;zIndex=frontmostZIndex+1}this.style.zIndex=zIndex;this.__zIndex=zIndex||parseFloat(getComputedStyle(this).zIndex)}}_exports.OverlayElement=OverlayElement;customElements.define(OverlayElement.is,OverlayElement);var vaadinOverlay={OverlayElement:OverlayElement};_exports.$vaadinOverlay=vaadinOverlay;class ComboBoxOverlayElement extends OverlayElement{static get is(){return"vaadin-combo-box-overlay"}ready(){super.ready();const loader=document.createElement("div");loader.setAttribute("part","loader");const content=this.shadowRoot.querySelector("[part~=\"content\"]");content.parentNode.insertBefore(loader,content)}}customElements.define(ComboBoxOverlayElement.is,ComboBoxOverlayElement);/**
                                                                           * Element for internal use only.
                                                                           *
                                                                           * @memberof Vaadin
                                                                           * @private
                                                                           */class ComboBoxDropdownElement extends DisableUpgradeMixin((0,_cureMe.mixinBehaviors)(_cureMe.IronResizableBehavior,_cureMe.PolymerElement)){static get template(){return _cureMe.html`
    <style>
      :host {
        display: block;
      }

      :host > #overlay {
        display: none;
      }
    </style>
    <vaadin-combo-box-overlay id="overlay" hidden\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\$="[[theme]]">
      <slot></slot>
    </vaadin-combo-box-overlay>
`}static get is(){return"vaadin-combo-box-dropdown"}static get properties(){return{opened:{type:Boolean,observer:"_openedChanged"},template:{type:Object,notify:!0},/**
       * The element to position/align the dropdown by.
       */positionTarget:{type:Object},/**
       * If `true`, overlay is aligned above the `positionTarget`
       */alignedAbove:{type:Boolean,value:!1},/**
       * Used to propagate the `theme` attribute from the host element.
       */theme:String}}constructor(){super();this._boundSetPosition=this._setPosition.bind(this);this._boundOutsideClickListener=this._outsideClickListener.bind(this)}connectedCallback(){super.connectedCallback();this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready();// Preventing the default modal behaviour of the overlay on input clicking
this.$.overlay.addEventListener("vaadin-overlay-outside-click",e=>{e.preventDefault()})}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener("iron-resize",this._boundSetPosition);// Making sure the overlay is closed and removed from DOM after detaching the dropdown.
this.opened=!1}notifyResize(){super.notifyResize();if(this.positionTarget&&this.opened){this._setPosition();// Schedule another position update (to cover virtual keyboard opening for example)
requestAnimationFrame(this._setPosition.bind(this))}}/**
     * Fired after the `vaadin-combo-box-dropdown` opens.
     *
     * @event vaadin-combo-box-dropdown-opened
     */ /**
         * Fired after the `vaadin-combo-box-dropdown` closes.
         *
         * @event vaadin-combo-box-dropdown-closed
         */_openedChanged(opened,oldValue){if(!!opened===!!oldValue){return}if(opened){this.$.overlay.style.position=this._isPositionFixed(this.positionTarget)?"fixed":"absolute";this._setPosition();window.addEventListener("scroll",this._boundSetPosition,!0);document.addEventListener("click",this._boundOutsideClickListener,!0);this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))}else{window.removeEventListener("scroll",this._boundSetPosition,!0);document.removeEventListener("click",this._boundOutsideClickListener,!0);this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))}}// We need to listen on 'click' event and capture it and close the overlay before
// propagating the event to the listener in the button. Otherwise, if the clicked button would call
// open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
_outsideClickListener(event){const eventPath=event.composedPath();if(0>eventPath.indexOf(this.positionTarget)&&0>eventPath.indexOf(this.$.overlay)){this.opened=!1}}_isPositionFixed(element){const offsetParent=this._getOffsetParent(element);return"fixed"===window.getComputedStyle(element).position||offsetParent&&this._isPositionFixed(offsetParent)}_getOffsetParent(element){if(element.assignedSlot){return element.assignedSlot.parentElement}else if(element.parentElement){return element.offsetParent}const parent=element.parentNode;if(parent&&11===parent.nodeType&&parent.host){return parent.host;// parent is #shadowRoot
}}_verticalOffset(overlayRect,targetRect){return this.alignedAbove?-overlayRect.height:targetRect.height}_shouldAlignAbove(targetRect){const spaceBelow=(window.innerHeight-targetRect.bottom-Math.min(document.body.scrollTop,0))/window.innerHeight;return .3>spaceBelow}_setPosition(e){if(this.hidden){return}if(e&&e.target){const target=e.target===document?document.body:e.target,parent=this.$.overlay.parentElement;if(!(target.contains(this.$.overlay)||target.contains(this.positionTarget))||parent!==document.body){return}}const targetRect=this.positionTarget.getBoundingClientRect();this.alignedAbove=this._shouldAlignAbove(targetRect);const overlayRect=this.$.overlay.getBoundingClientRect();this._translateX=targetRect.left-overlayRect.left+(this._translateX||0);this._translateY=targetRect.top-overlayRect.top+(this._translateY||0)+this._verticalOffset(overlayRect,targetRect);const _devicePixelRatio=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*_devicePixelRatio)/_devicePixelRatio;this._translateY=Math.round(this._translateY*_devicePixelRatio)/_devicePixelRatio;this.$.overlay.style.transform=`translate3d(${this._translateX}px, ${this._translateY}px, 0)`;this.$.overlay.style.width=this.positionTarget.clientWidth+"px";this.$.overlay.style.justifyContent=this.alignedAbove?"flex-end":"flex-start";// TODO: fire only when position actually changes changes
this.dispatchEvent(new CustomEvent("position-changed"))}}customElements.define(ComboBoxDropdownElement.is,ComboBoxDropdownElement);const TOUCH_DEVICE=(()=>{try{document.createEvent("TouchEvent");return!0}catch(e){return!1}})();/**
       * Element for internal use only.
       *
       * @memberof Vaadin
       * @private
       */class ComboBoxDropdownWrapperElement extends class extends _cureMe.PolymerElement{}{static get template(){return _cureMe.html`
    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">
      <template>
        <style>
          #scroller {
            overflow: auto;

            /* Fixes item background from getting on top of scrollbars on Safari */
            transform: translate3d(0, 0, 0);

            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
            -webkit-overflow-scrolling: touch;

            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
            box-shadow: 0 0 0 white;
          }
        </style>
        <div id="scroller" on-click="_stopPropagation">
          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
            <template>
              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\$="[[_getAriaRole(index)]]" aria-selected\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\$="[[theme]]">
              </vaadin-combo-box-item>
            </template>
          </iron-list>
        </div>
      </template>
    </vaadin-combo-box-dropdown>
`}static get is(){return"vaadin-combo-box-dropdown-wrapper"}static get properties(){return{/**
       * True if the device supports touch events.
       */touchDevice:{type:Boolean,value:TOUCH_DEVICE},opened:Boolean,/**
       * The element to position/align the dropdown by.
       */positionTarget:{type:Object},/**
       * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
       */renderer:Function,/**
       * `true` when new items are being loaded.
       */loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_setOverlayHeight"},/**
       * Used to propagate the `theme` attribute from the host element.
       */theme:String,_selectedItem:{type:Object},_items:{type:Object},_focusedIndex:{type:Number,value:-1,observer:"_focusedIndexChanged"},_focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_selector:Object,_itemIdPath:String}}static get observers(){return["_selectorChanged(_selector)","_loadingChanged(loading)","_openedChanged(opened, _items, loading)"]}_fireTouchAction(sourceEvent){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:sourceEvent}}))}_getItems(opened,items){return opened?items:[]}_openedChanged(opened,items,loading){if(this.$.dropdown.hasAttribute("disable-upgrade")){if(!opened){return}else{this._initDropdown()}}// Do not attach if no items
// Do not dettach if opened but user types an invalid search
this.$.dropdown.opened=!!(opened&&(loading||this.$.dropdown.opened||items&&items.length))}_initDropdown(){this.$.dropdown.removeAttribute("disable-upgrade");this._templateChanged();this._loadingChanged(this.loading);this.$.dropdown.$.overlay.addEventListener("touchend",e=>this._fireTouchAction(e));this.$.dropdown.$.overlay.addEventListener("touchmove",e=>this._fireTouchAction(e));// Prevent blurring the input when clicking inside the overlay.
this.$.dropdown.$.overlay.addEventListener("mousedown",e=>e.preventDefault());// IE11: when scrolling with mouse, the focus goes to the scroller.
// This causes the overlay closing due to defocusing the input field.
// Prevent focusing the scroller by setting `unselectable="on"`.
if(/Trident/.test(navigator.userAgent)){this._scroller.setAttribute("unselectable","on")}}_templateChanged(e){if(this.$.dropdown.hasAttribute("disable-upgrade")){return}this._selector=this.$.dropdown.$.overlay.content.querySelector("#selector");this._scroller=this.$.dropdown.$.overlay.content.querySelector("#scroller")}_loadingChanged(loading){if(this.$.dropdown.hasAttribute("disable-upgrade")){return}if(loading){this.$.dropdown.$.overlay.setAttribute("loading","")}else{this.$.dropdown.$.overlay.removeAttribute("loading")}}_selectorChanged(selector){this._patchWheelOverScrolling()}_setOverlayHeight(){if(!this.opened||!this.positionTarget||!this._selector){return}const targetRect=this.positionTarget.getBoundingClientRect();this._scroller.style.maxHeight=(window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-max-height"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-max-height"))||"65vh";const maxHeight=this._maxOverlayHeight(targetRect);// overlay max height is restrained by the #scroller max height which is set to 65vh in CSS.
this.$.dropdown.$.overlay.style.maxHeight=maxHeight;// we need to set height for iron-list to make its `firstVisibleIndex` work correctly.
this._selector.style.maxHeight=maxHeight;this.updateViewportBoundaries()}_maxOverlayHeight(targetRect){const margin=8,minHeight=116;// Height of two items in combo-box
if(this.$.dropdown.alignedAbove){return Math.max(targetRect.top-margin+Math.min(document.body.scrollTop,0),minHeight)+"px"}else{return Math.max(document.documentElement.clientHeight-targetRect.bottom-margin,minHeight)+"px"}}_getFocusedItem(focusedIndex){if(0<=focusedIndex){return this._items[focusedIndex]}}_isItemSelected(item,selectedItem,itemIdPath){if(item instanceof ComboBoxPlaceholder){return!1}else if(itemIdPath&&item!==void 0&&selectedItem!==void 0){return this.get(itemIdPath,item)===this.get(itemIdPath,selectedItem)}else{return item===selectedItem}}_onItemClick(e){if(e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.stopPropagation){this._stopPropagation(e.detail.sourceEvent)}this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.model.item}}))}/**
     * Gets the index of the item with the provided label.
     * @return {Number}
     */indexOfLabel(label){if(this._items&&label){for(let i=0;i<this._items.length;i++){if(this.getItemLabel(this._items[i]).toString().toLowerCase()===label.toString().toLowerCase()){return i}}}return-1}/**
     * If dataProvider is used, dispatch a request for the item’s index if
     * the item is a placeholder object.
     *
     * @return {Number}
     */__requestItemByIndex(item,index){if(item instanceof ComboBoxPlaceholder&&index!==void 0){this.dispatchEvent(new CustomEvent("index-requested",{detail:{index}}))}return index}/**
     * Gets the label string for the item based on the `_itemLabelPath`.
     * @return {String}
     */getItemLabel(item,itemLabelPath){itemLabelPath=itemLabelPath||this._itemLabelPath;let label=item&&itemLabelPath?this.get(itemLabelPath,item):void 0;if(label===void 0||null===label){label=item?item.toString():""}return label}_isItemFocused(focusedIndex,itemIndex){return focusedIndex==itemIndex}_getAriaSelected(focusedIndex,itemIndex){return this._isItemFocused(focusedIndex,itemIndex).toString()}_getAriaRole(itemIndex){return itemIndex!==void 0?"option":!1}_focusedIndexChanged(index){if(0<=index){this._scrollIntoView(index)}}_scrollIntoView(index){if(!(this.opened&&0<=index)){return}const visibleItemsCount=this._visibleItemsCount();if(visibleItemsCount===void 0){// Scroller is not visible. Moving is unnecessary.
return}let targetIndex=index;if(index>this._selector.lastVisibleIndex-1){// Index is below the bottom, scrolling down. Make the item appear at the bottom.
// First scroll to target (will be at the top of the scroller) to make sure it's rendered.
this._selector.scrollToIndex(index);// Then calculate the index for the following scroll (to get the target to bottom of the scroller).
targetIndex=index-visibleItemsCount+1}else if(index>this._selector.firstVisibleIndex){// The item is already visible, scrolling is unnecessary per se. But we need to trigger iron-list to set
// the correct scrollTop on the scrollTarget. Scrolling to firstVisibleIndex.
targetIndex=this._selector.firstVisibleIndex}this._selector.scrollToIndex(Math.max(0,targetIndex));// Sometimes the item is partly below the bottom edge, detect and adjust.
const pidx=this._selector._getPhysicalIndex(index),physicalItem=this._selector._physicalItems[pidx];if(!physicalItem){return}const physicalItemRect=physicalItem.getBoundingClientRect(),scrollerRect=this._scroller.getBoundingClientRect(),scrollTopAdjust=physicalItemRect.bottom-scrollerRect.bottom+this._viewportTotalPaddingBottom;if(0<scrollTopAdjust){this._scroller.scrollTop+=scrollTopAdjust}}ensureItemsRendered(){this._selector._render()}adjustScrollPosition(){if(this.opened&&this._items){this._scrollIntoView(this._focusedIndex)}}/**
     * We want to prevent the kinetic scrolling energy from being transferred from the overlay contents over to the parent.
     * Further improvement ideas: after the contents have been scrolled to the top or bottom and scrolling has stopped, it could allow
     * scrolling the parent similarly to touch scrolling.
     */_patchWheelOverScrolling(){const selector=this._selector;selector.addEventListener("wheel",e=>{const scroller=selector._scroller||selector.scrollTarget,scrolledToTop=0===scroller.scrollTop,scrolledToBottom=1>=scroller.scrollHeight-scroller.scrollTop-scroller.clientHeight;if(scrolledToTop&&0>e.deltaY){e.preventDefault()}else if(scrolledToBottom&&0<e.deltaY){e.preventDefault()}})}updateViewportBoundaries(){this._cachedViewportTotalPaddingBottom=void 0;this._selector.updateViewportBoundaries()}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const itemsStyle=window.getComputedStyle(this._selector.$.items);this._cachedViewportTotalPaddingBottom=[itemsStyle.paddingBottom,itemsStyle.borderBottomWidth].map(v=>{return parseInt(v,10)}).reduce((sum,v)=>{return sum+v})}return this._cachedViewportTotalPaddingBottom}_visibleItemsCount(){if(!this._selector){return}// Ensure items are rendered
this._selector.flushDebouncer("_debounceTemplate");// Ensure items are positioned
this._selector.scrollToIndex(this._selector.firstVisibleIndex);// Ensure viewport boundaries are up-to-date
this.updateViewportBoundaries();return this._selector.lastVisibleIndex-this._selector.firstVisibleIndex+1}_selectItem(item){item="number"===typeof item?this._items[item]:item;if(this._selector.selectedItem!==item){this._selector.selectItem(item)}}_preventDefault(e){if(e.cancelable){e.preventDefault()}}_stopPropagation(e){e.stopPropagation()}_hidden(itemsChange){return!this.loading&&(!this._items||!this._items.length)}}customElements.define(ComboBoxDropdownWrapperElement.is,ComboBoxDropdownWrapperElement);const ComboBoxMixin=subclass=>class VaadinComboBoxMixinElement extends subclass{static get properties(){return{/**
       * True if the dropdown is open, false otherwise.
       */opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},/**
       * Set to true to disable this element.
       */disabled:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * When present, it specifies that the element field is read-only.
       */readonly:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Custom function for rendering the content of every item.
       * Receives three arguments:
       *
       * - `root` The `<vaadin-combo-box-item>` internal container DOM element.
       * - `comboBox` The reference to the `<vaadin-combo-box>` element.
       * - `model` The object with the properties related with the rendered
       *   item, contains:
       *   - `model.index` The index of the rendered item.
       *   - `model.item` The item.
       */renderer:Function,/**
       * A full set of items to filter the visible options from.
       * The items can be of either `String` or `Object` type.
       */items:{type:Array,observer:"_itemsChanged"},/**
       * If `true`, the user can input a value that is not present in the items list.
       * `value` property will be set to the input value in this case.
       * Also, when `value` is set programmatically, the input value will be set
       * to reflect that value.
       */allowCustomValue:{type:Boolean,value:!1},/**
       * A subset of items, filtered based on the user input. Filtered items
       * can be assigned directly to omit the internal filtering functionality.
       * The items can be of either `String` or `Object` type.
       */filteredItems:{type:Array},/**
       * The `String` value for the selected item of the combo box. Provides
       * the value for `iron-form`.
       *
       * When there’s no item selected, the value is an empty string.
       *
       * Use `selectedItem` property to get the raw selected item from
       * the `items` array.
       */value:{type:String,observer:"_valueChanged",notify:!0,value:""},/**
       * Used to detect user value changes and fire `change` events.
       */_lastCommittedValue:String,/*
       * When set to `true`, "loading" attribute is added to host and the overlay element.
       */loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,value:-1},/**
       * Filtering string the user has typed into the input field.
       */filter:{type:String,value:"",notify:!0},/**
       * The selected item from the `items` array.
       */selectedItem:{type:Object,notify:!0},/**
       * Path for label of the item. If `items` is an array of objects, the
       * `itemLabelPath` is used to fetch the displayed string label for each
       * item.
       *
       * The item label is also used for matching items when processing user
       * input, i.e., for filtering and selecting items.
       *
       * When using item templates, the property is still needed because it is used
       * for filtering, and for displaying the selected item value in the input box.
       */itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},/**
       * Path for the value of the item. If `items` is an array of objects, the
       * `itemValuePath:` is used to fetch the string value for the selected
       * item.
       *
       * The item value is used in the `value` property of the combo box,
       * to provide the form value.
       */itemValuePath:{type:String,value:"value"},/**
       * Path for the id of the item. If `items` is an array of objects,
       * the `itemIdPath` is used to compare and identify the same item
       * in `selectedItem` and `filteredItems` (items given by the
       * `dataProvider` callback).
       */itemIdPath:String,/**
       * The name of this element.
       */name:{type:String},/**
       * Set to true if the value is invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_toggleElement:Object,_clearElement:Object,_inputElementValue:String,_closeOnBlurIsPrevented:Boolean,_previousDocumentPointerEvents:String,_itemTemplate:Object}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_templateOrRendererChanged(_itemTemplate, renderer)","_loadingChanged(loading)","_selectedItemChanged(selectedItem, itemLabelPath)","_toggleElementChanged(_toggleElement)"]}constructor(){super();this._boundOnFocusout=this._onFocusout.bind(this);this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this);this._boundClose=this.close.bind(this);this._boundOnOpened=this._onOpened.bind(this);this._boundOnKeyDown=this._onKeyDown.bind(this);this._boundOnClick=this._onClick.bind(this);this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this);this._boundOnTouchend=this._onTouchend.bind(this)}ready(){super.ready();this.addEventListener("focusout",this._boundOnFocusout);this._lastCommittedValue=this.value;_cureMe.IronA11yAnnouncer.requestAvailability();// 2.0 does not support 'overlay.selection-changed' syntax in listeners
this.$.overlay.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged);this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose);this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened);this.addEventListener("keydown",this._boundOnKeyDown);this.addEventListener("click",this._boundOnClick);this.$.overlay.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction);this.addEventListener("touchend",this._boundOnTouchend);this._observer=new _cureMe.FlattenedNodesObserver(this,info=>{this._setTemplateFromNodes(info.addedNodes)})}/**
     * Manually invoke existing renderer.
     */render(){if(this.$.overlay._selector){this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item").forEach(item=>item._render())}}_setTemplateFromNodes(nodes){this._itemTemplate=nodes.filter(node=>node.localName&&"template"===node.localName)[0]||this._itemTemplate}_removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this._itemTemplate=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}_templateOrRendererChanged(template,renderer){if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for combo box items")}this._oldTemplate=template;this._oldRenderer=renderer}/**
     * Opens the dropdown list.
     */open(){// Prevent _open() being called when input is disabled or read-only
if(!this.disabled&&!this.readonly){this.opened=!0}}/**
     * Closes the dropdown list.
     */close(){this.opened=!1}_openedChanged(value,old){// Prevent _close() being called when opened is set to its default value (false).
if(old===void 0){return}if(this.opened){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");// For touch devices, we don't want to popup virtual keyboard unless input is explicitly focused by the user.
if(!this.hasAttribute("focused")&&!this.$.overlay.touchDevice){this.focus()}}else{this._onClosed();if(this._openedWithFocusRing&&this.hasAttribute("focused")){this.focusElement.setAttribute("focus-ring","")}}}_onOverlayTouchAction(event){// On touch devices, blur the input on touch start inside the overlay, in order to hide
// the virtual keyboard. But don't close the overlay on this blur.
this._closeOnBlurIsPrevented=!0;this.inputElement.blur();this._closeOnBlurIsPrevented=!1}_onClick(e){this._closeOnBlurIsPrevented=!0;const path=e.composedPath(),isClearElement=-1!==path.indexOf(this._clearElement)||"clear-button"===path[0].getAttribute("part");if(isClearElement){this._clear();this.focus()}else if(-1!==path.indexOf(this.inputElement)){if(-1<path.indexOf(this._toggleElement)&&this.opened){this.close()}else{this.open()}}this._closeOnBlurIsPrevented=!1}/**
     * Keyboard navigation
     */_onKeyDown(e){if(this._isEventKey(e,"down")){this._closeOnBlurIsPrevented=!0;this._onArrowDown();this._closeOnBlurIsPrevented=!1;// prevent caret from moving
e.preventDefault()}else if(this._isEventKey(e,"up")){this._closeOnBlurIsPrevented=!0;this._onArrowUp();this._closeOnBlurIsPrevented=!1;// prevent caret from moving
e.preventDefault()}else if(this._isEventKey(e,"enter")){this._onEnter(e)}else if(this._isEventKey(e,"esc")){this._onEscape(e)}}_isEventKey(e,k){return _cureMe.IronA11yKeysBehavior.keyboardEventMatchesKeys(e,k)}_getItemLabel(item){return this.$.overlay.getItemLabel(item)}_getItemValue(item){let value=item&&this.itemValuePath?this.get(this.itemValuePath,item):void 0;if(value===void 0){value=item?item.toString():""}return value}_onArrowDown(){if(this.opened){if(this.$.overlay._items){this._focusedIndex=Math.min(this.$.overlay._items.length-1,this._focusedIndex+1);this._prefillFocusedItemLabel()}}else{this.open()}}_onArrowUp(){if(this.opened){if(-1<this._focusedIndex){this._focusedIndex=Math.max(0,this._focusedIndex-1)}else{if(this.$.overlay._items){this._focusedIndex=this.$.overlay._items.length-1}}this._prefillFocusedItemLabel()}else{this.open()}}_prefillFocusedItemLabel(){if(-1<this._focusedIndex){// Reset the input value asyncronously to prevent partial value changes
// announce. Makes OSX VoiceOver to announce the complete value instead.
this._inputElementValue="";// 1ms delay needed for OSX VoiceOver to realise input value was reset
setTimeout(()=>{this._inputElementValue=this._getItemLabel(this.$.overlay._focusedItem);this._markAllSelectionRange()},1)}}_setSelectionRange(start,end){// vaadin-text-field does not implement setSelectionRange, hence we need the native input
const input=this._nativeInput||this.inputElement;// Setting selection range focuses and/or moves the caret in some browsers,
// and there's no need to modify the selection range if the input isn't focused anyway.
// This affects Safari. When the overlay is open, and then hiting tab, browser should focus
// the next focusable element instead of the combo-box itself.
// Checking the focused property here is enough instead of checking the activeElement.
if(this.hasAttribute("focused")&&input&&input.setSelectionRange){try{input.setSelectionRange(start,end)}catch(ignore){// IE11 randomly fails when running tests in Sauce.
}}}_markAllSelectionRange(){if(this._inputElementValue!==void 0){this._setSelectionRange(0,this._inputElementValue.length)}}_clearSelectionRange(){if(this._inputElementValue!==void 0){const pos=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(pos,pos)}}_onEnter(e){// should close on enter when custom values are allowed, input field is cleared, or when an existing
// item is focused with keyboard.
if(this.opened&&(this.allowCustomValue||""===this._inputElementValue||-1<this._focusedIndex)){this.close();// Do not submit the surrounding form.
e.preventDefault();// Do not trigger global listeners
e.stopPropagation()}}_onEscape(e){if(this.opened){this._stopPropagation(e);if(-1<this._focusedIndex){this._focusedIndex=-1;this._revertInputValue()}else{this.cancel()}}}_toggleElementChanged(toggleElement){if(toggleElement){// Don't blur the input on toggle mousedown
toggleElement.addEventListener("mousedown",e=>e.preventDefault());// Unfocus previously focused element if focus is not inside combo box (on touch devices)
toggleElement.addEventListener("click",e=>{if(this.$.overlay.touchDevice&&!this.hasAttribute("focused")){document.activeElement.blur()}})}}/**
     * Clears the current value.
     */_clear(){this.selectedItem=null;if(this.allowCustomValue){this.value=""}this._detectAndDispatchChange()}/**
     * Reverts back to original value.
     */cancel(){this._revertInputValueToValue();// In the next _detectAndDispatchChange() call, the change detection should not pass
this._lastCommittedValue=this.value;this.close()}_onOpened(){// Pre P2 iron-list used a debouncer to render. Now that we synchronously render items,
// we need to flush the DOM to make sure it doesn't get flushed in the middle of _render call
// because that will cause problems to say the least.
(0,_cureMe.flush)();// With iron-list v1.3.9, calling `notifyResize()` no longer renders
// the items synchronously. It is required to have the items rendered
// before we update the overlay and the list positions and sizes.
this.$.overlay.ensureItemsRendered();this.$.overlay._selector.toggleScrollListener(!0);// Ensure metrics are up-to-date
this.$.overlay.updateViewportBoundaries();// Force iron-list to create reusable nodes. Otherwise it will only start
// doing that in scroll listener, which is especially slow in Edge.
this.$.overlay._selector._increasePoolIfNeeded();setTimeout(()=>this._resizeDropdown(),1);// Defer scroll position adjustment to prevent freeze in Edge
window.requestAnimationFrame(()=>this.$.overlay.adjustScrollPosition());// _detectAndDispatchChange() should not consider value changes done before opening
this._lastCommittedValue=this.value}_onClosed(){// Happens when the overlay is closed by clicking outside
if(this.opened){this.close()}if(this.$.overlay._items&&-1<this._focusedIndex){const focusedItem=this.$.overlay._items[this._focusedIndex];if(this.selectedItem!==focusedItem){this.selectedItem=focusedItem}// make sure input field is updated in case value doesn't change (i.e. FOO -> foo)
this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||this._inputElementValue===void 0){this.selectedItem=null;if(this.allowCustomValue){this.value=""}}else{if(this.allowCustomValue// to prevent a repetitive input value being saved after pressing ESC and Tab.
&&!(this.filteredItems&&this.filteredItems.filter(item=>this._getItemLabel(item)===this._inputElementValue).length)){const e=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(e);if(!e.defaultPrevented){const customValue=this._inputElementValue;this._selectItemForValue(customValue);this.value=customValue}}else{this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}}this._detectAndDispatchChange();this._clearSelectionRange();if(!this.dataProvider){this.filter=""}}get _propertyForValue(){return"value"}/**
     *  Filtering and items handling
     */_inputValueChanged(e){// Handle only input events from our inputElement.
if(-1!==e.composedPath().indexOf(this.inputElement)){this._inputElementValue=this.inputElement[this._propertyForValue];this._filterFromInput(e)}}_filterFromInput(e){if(!this.opened&&!e.__fromClearButton){this.open()}if(this.filter===this._inputElementValue){// Filter and input value might get out of sync, while keyboard navigating for example.
// Afterwards, input value might be changed to the same value as used in filtering.
// In situation like these, we need to make sure all the filter changes handlers are run.
this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath)}else{this.filter=this._inputElementValue}}_itemLabelPathChanged(itemLabelPath,oldItemLabelPath){if("string"!==typeof itemLabelPath){console.error("You should set itemLabelPath to a valid string")}}_filterChanged(filter,itemValuePath,itemLabelPath){if(filter===void 0){return}if(this.items){this.filteredItems=this._filterItems(this.items,filter)}else{// With certain use cases (e. g., external filtering), `items` are
// undefined. Filtering is unnecessary per se, but the filteredItems
// observer should still be invoked to update focused item.
this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},itemValuePath,itemLabelPath)}}_loadingChanged(loading){if(loading){this._focusedIndex=-1}}_revertInputValue(){if(""!==this.filter){this._inputElementValue=this.filter}else{this._revertInputValueToValue()}this._clearSelectionRange()}_revertInputValueToValue(){if(this.allowCustomValue&&!this.selectedItem){this._inputElementValue=this.value}else{this._inputElementValue=this._getItemLabel(this.selectedItem)}}_resizeDropdown(){this.$.overlay.$.dropdown.notifyResize()}_updateHasValue(hasValue){if(hasValue){this.setAttribute("has-value","")}else{this.removeAttribute("has-value")}}_selectedItemChanged(selectedItem,itemLabelPath){if(null===selectedItem||selectedItem===void 0){if(this.filteredItems){if(!this.allowCustomValue){this.value=""}this._updateHasValue(""!==this.value);this._inputElementValue=this.value}}else{const value=this._getItemValue(selectedItem);if(this.value!==value){this.value=value;if(this.value!==value){// The value was changed to something else in value-changed listener,
// so prevent from resetting it to the previous value.
return}}this._updateHasValue(!0);this._inputElementValue=this._getItemLabel(selectedItem);// Could not be defined in 1.x because ready is called after all prop-setters
if(this.inputElement){this.inputElement[this._propertyForValue]=this._inputElementValue}}this.$.overlay._selectedItem=selectedItem;if(this.filteredItems&&this.$.overlay._items){this._focusedIndex=this.filteredItems.indexOf(selectedItem)}}_valueChanged(value,oldVal){if(""===value&&oldVal===void 0){// initializing, no need to do anything (#554)
return}if(this._isValidValue(value)){let item;if(this._getItemValue(this.selectedItem)!==value){this._selectItemForValue(value)}else{item=this.selectedItem}if(!item&&this.allowCustomValue){this._inputElementValue=value}this._updateHasValue(""!==this.value)}else{this.selectedItem=null}// In the next _detectAndDispatchChange() call, the change detection should pass
this._lastCommittedValue=void 0}_detectAndDispatchChange(){if(this.value!==this._lastCommittedValue){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}));this._lastCommittedValue=this.value}}_itemsChanged(items,oldItems){this._ensureItemsOrDataProvider(()=>{this.items=oldItems})}_itemsOrPathsChanged(e,itemValuePath,itemLabelPath){if(e.value===void 0){return}if("items"===e.path||"items.splices"===e.path){this.filteredItems=this.items?this.items.slice(0):this.items;const valueIndex=this._indexOfValue(this.value,this.items);this._focusedIndex=valueIndex;const item=-1<valueIndex&&this.items[valueIndex];if(item){this.selectedItem=item}}}_filteredItemsChanged(e,itemValuePath,itemLabelPath){if(e.value===void 0){return}if("filteredItems"===e.path||"filteredItems.splices"===e.path){this._setOverlayItems(this.filteredItems);this._focusedIndex=this.opened?this.$.overlay.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems);if(this.opened){this._repositionOverlay()}}}_filterItems(arr,filter){if(!arr){return arr}return arr.filter(item=>{filter=filter?filter.toString().toLowerCase():"";// Check if item contains input value.
return-1<this._getItemLabel(item).toString().toLowerCase().indexOf(filter)})}_selectItemForValue(value){const valueIndex=this._indexOfValue(value,this.filteredItems),previouslySelectedItem=this.selectedItem;this.selectedItem=0<=valueIndex?this.filteredItems[valueIndex]:this.dataProvider&&this.selectedItem===void 0?void 0:null;if(null===this.selectedItem&&null===previouslySelectedItem){this._selectedItemChanged(this.selectedItem)}}_setOverlayItems(items){this.$.overlay.set("_items",items)}_repositionOverlay(){// async needed to reposition correctly after filtering
// (especially when aligned on top of input)
this.__repositionOverlayDebouncer=_cureMe.Debouncer.debounce(this.__repositionOverlayDebouncer,// Long debounce: sizing updates invoke multiple styling rounds,
// which is very slow in Edge
_cureMe.timeOut.after(500),()=>{const selector=this.$.overlay._selector;if(!selector._isClientFull()){// Due to the mismatch of the Y position of the item rendered
// at the top of the scrolling list with some specific scroll
// position values (2324, 3486, 6972, 60972, 95757 etc.)
// iron-list loops the increasing of the pool and adds
// too many items to the DOM.
// Adjusting scroll position to equal the current scrollTop value
// to avoid looping.
selector._resetScrollPosition(selector._physicalTop)}this._resizeDropdown();this.$.overlay.updateViewportBoundaries();this.$.overlay.ensureItemsRendered();selector.notifyResize();(0,_cureMe.flush)()})}_indexOfValue(value,items){if(items&&this._isValidValue(value)){for(let i=0;i<items.length;i++){if(this._getItemValue(items[i])===value){return i}}}return-1}/**
     * Checks if the value is supported as an item value in this control.
     *
     * @return {boolean}
     */_isValidValue(value){return value!==void 0&&null!==value}_overlaySelectedItemChanged(e){// stop this private event from leaking outside.
e.stopPropagation();if(e.detail.item instanceof ComboBoxPlaceholder){// Placeholder items should not be selectable.
return}if(this.opened){this._focusedIndex=this.filteredItems.indexOf(e.detail.item);this.close()}else if(this.selectedItem!==e.detail.item){this.selectedItem=e.detail.item;this._detectAndDispatchChange()}}_onFocusout(event){// Fixes the problem with `focusout` happening when clicking on the scroll bar on Edge
const dropdown=this.$.overlay.$.dropdown;if(dropdown&&dropdown.$&&event.relatedTarget===dropdown.$.overlay){event.composedPath()[0].focus();return}if(!this._closeOnBlurIsPrevented){this.close()}}_onTouchend(event){if(!this._clearElement||event.composedPath()[0]!==this._clearElement){return}event.preventDefault();this._clear()}/**
     * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
     *
     * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
     */validate(){return!(this.invalid=!this.checkValidity())}/**
     * Returns true if the current input value satisfies all constraints (if any)
     *
     * You can override the `checkValidity` method for custom validations.
     */checkValidity(){if(this.inputElement.validate){return this.inputElement.validate()}}get _instanceProps(){return{item:!0,index:!0,selected:!0,focused:!0}}_ensureTemplatized(){if(!this._TemplateClass){const tpl=this._itemTemplate||this._getRootTemplate();if(tpl){this._TemplateClass=(0,_cureMe.templatize)(tpl,this,{instanceProps:this._instanceProps,forwardHostProp:function(prop,value){const items=this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item");Array.prototype.forEach.call(items,item=>{if(item._itemTemplateInstance){item._itemTemplateInstance.set(prop,value);item._itemTemplateInstance.notifyPath(prop,value,!0)}})}})}}}_getRootTemplate(){return Array.prototype.filter.call(this.children,elem=>"TEMPLATE"===elem.tagName)[0]}_preventInputBlur(){if(this._toggleElement){this._toggleElement.addEventListener("click",this._preventDefault)}if(this._clearElement){this._clearElement.addEventListener("click",this._preventDefault)}}_restoreInputBlur(){if(this._toggleElement){this._toggleElement.removeEventListener("click",this._preventDefault)}if(this._clearElement){this._clearElement.removeEventListener("click",this._preventDefault)}}_preventDefault(e){e.preventDefault()}_stopPropagation(e){e.stopPropagation()}/**
     * Fired when the value changes.
     *
     * @event value-changed
     * @param {Object} detail
     *  @param {String} detail.value the combobox value
     */ /**
         * Fired when selected item changes.
         *
         * @event selected-item-changed
         * @param {Object} detail
         *  @param {Object|String} detail.value the selected item. Type is the same as the type of `items`.
         */ /**
             * Fired when the user sets a custom value.
             * @event custom-value-set
             * @param {String} detail the custom value
             */ /**
                 * Fired when value changes.
                 * To comply with https://developer.mozilla.org/en-US/docs/Web/Events/change
                 * @event change
                 */};_exports.ComboBoxMixin=ComboBoxMixin;var vaadinComboBoxMixin={ComboBoxMixin:ComboBoxMixin};_exports.$vaadinComboBoxMixin=vaadinComboBoxMixin;class ComboBoxLightElement extends ThemePropertyMixin(ThemableMixin(ComboBoxDataProviderMixin(ComboBoxMixin(_cureMe.PolymerElement)))){static get template(){return _cureMe.html`
    <style>
      :host([opened]) {
        pointer-events: auto;
      }
    </style>

    <slot></slot>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" position-target="[[inputElement]]" renderer="[[renderer]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}static get is(){return"vaadin-combo-box-light"}static get properties(){return{/**
       * Name of the two-way data-bindable property representing the
       * value of the custom input field.
       */attrForValue:{type:String,value:"value"},inputElement:{type:Element,readOnly:!0}}}constructor(){super();this._boundInputValueChanged=this._inputValueChanged.bind(this);this.__boundInputValueCommitted=this.__inputValueCommitted.bind(this)}ready(){super.ready();this._toggleElement=this.querySelector(".toggle-button");this._clearElement=this.querySelector(".clear-button");if(this._clearElement){this._clearElement.addEventListener("mousedown",e=>{e.preventDefault();// Prevent native focus changes
// _focusableElement is needed for paper-input
(this.inputElement._focusableElement||this.inputElement).focus()})}}get focused(){return this.getRootNode().activeElement===this.inputElement}connectedCallback(){super.connectedCallback();const cssSelector="vaadin-text-field,iron-input,paper-input,.paper-input-input,.input";this._setInputElement(this.querySelector(cssSelector));this._revertInputValue();this.inputElement.addEventListener("input",this._boundInputValueChanged);this.inputElement.addEventListener("change",this.__boundInputValueCommitted);this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback();this.inputElement.removeEventListener("input",this._boundInputValueChanged);this.inputElement.removeEventListener("change",this.__boundInputValueCommitted);this._restoreInputBlur()}__inputValueCommitted(e){// Detect if the input was cleared (by clicking the clear button on a vaadin-text-field)
// and propagate the value change to combo box value immediately.
if(e.__fromClearButton){this._clear()}}get _propertyForValue(){return(0,_cureMe.dashToCamelCase)(this.attrForValue)}get _inputElementValue(){return this.inputElement&&this.inputElement[this._propertyForValue]}set _inputElementValue(value){if(this.inputElement){this.inputElement[this._propertyForValue]=value}}}_exports.ComboBoxLightElement=ComboBoxLightElement;customElements.define(ComboBoxLightElement.is,ComboBoxLightElement);var vaadinComboBoxLight={ComboBoxLightElement:ComboBoxLightElement};_exports.$vaadinComboBoxLight=vaadinComboBoxLight;const $_documentContainer$6=document.createElement("template");$_documentContainer$6.innerHTML=`<dom-module id="lumo-overlay">
  <template>
    <style>
      :host {
        top: var(--lumo-space-m);
        right: var(--lumo-space-m);
        bottom: var(--lumo-space-m);
        left: var(--lumo-space-m);
        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
        /* stylelint-disable-next-line */
        outline: 0px solid transparent;
      }

      [part="overlay"] {
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        border-radius: var(--lumo-border-radius-m);
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
        color: var(--lumo-body-text-color);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 400;
        line-height: var(--lumo-line-height-m);
        letter-spacing: 0;
        text-transform: none;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      [part="content"] {
        padding: var(--lumo-space-xs);
      }

      [part="backdrop"] {
        background-color: var(--lumo-shade-20pct);
        animation: 0.2s lumo-overlay-backdrop-enter both;
        will-change: opacity;
      }

      @keyframes lumo-overlay-backdrop-enter {
        0% {
          opacity: 0;
        }
      }

      :host([closing]) [part="backdrop"] {
        animation: 0.2s lumo-overlay-backdrop-exit both;
      }

      @keyframes lumo-overlay-backdrop-exit {
        100% {
          opacity: 0;
        }
      }

      @keyframes lumo-overlay-dummy-animation {
        0% { opacity: 1; }
        100% { opacity: 1; }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$6.content);const $_documentContainer$7=_cureMe.html`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$7.content);const $_documentContainer$8=document.createElement("template");$_documentContainer$8.innerHTML=`<dom-module id="lumo-menu-overlay-core">
  <template>
    <style>
      :host([opening]),
      :host([closing]) {
        animation: 0.14s lumo-overlay-dummy-animation;
      }

      [part="overlay"] {
        will-change: opacity, transform;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.1s lumo-menu-overlay-enter ease-out both;
      }

      @keyframes lumo-menu-overlay-enter {
        0% {
          opacity: 0;
          transform: translateY(-4px);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s lumo-menu-overlay-exit both;
      }

      @keyframes lumo-menu-overlay-exit {
        100% {
          opacity: 0;
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-menu-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      /* Small viewport (bottom sheet) styles */
      /* Use direct media queries instead of the state attributes (\`[phone]\` and \`[fullscreen]\`) provided by the elements */
      @media (max-width: 420px), (max-height: 420px) {
        :host {
          top: 0 !important;
          right: 0 !important;
          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
          left: 0 !important;
          align-items: stretch !important;
          justify-content: flex-end !important;
        }

        [part="overlay"] {
          max-height: 50vh;
          width: 100vw;
          border-radius: 0;
          box-shadow: var(--lumo-box-shadow-xl);
        }

        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
        [part="content"] {
          padding: 30px var(--lumo-space-m);
          max-height: inherit;
          box-sizing: border-box;
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
        }

        [part="backdrop"] {
          display: block;
        }

        /* Animations */

        :host([opening]) [part="overlay"] {
          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;
        }

        :host([closing]),
        :host([closing]) [part="backdrop"] {
          animation-delay: 0.14s;
        }

        :host([closing]) [part="overlay"] {
          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;
        }
      }

      @keyframes lumo-mobile-menu-overlay-enter {
        0% {
          transform: translateY(150%);
        }
      }

      @keyframes lumo-mobile-menu-overlay-exit {
        100% {
          transform: translateY(150%);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$8.content);/* Split as a separate module because combo box can only use the "fullscreen" styles */ /*
                                                                                                                                                  FIXME(polymer-modulizer): the above comments were extracted
                                                                                                                                                  from HTML and may be out of place here. Review them and
                                                                                                                                                  then delete this comment!
                                                                                                                                                  */;const $_documentContainer$9=_cureMe.html`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      [part="content"] {
        padding: 0;
      }

      :host {
        /* TODO: using a legacy mixin (unsupported) */
        --iron-list-items-container: {
          border-width: var(--lumo-space-xs);
          border-style: solid;
          border-color: transparent;
        };
      }

      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */
      :host([opened]) {
        --iron-list-items-container_-_border-width: var(--lumo-space-xs);
        --iron-list-items-container_-_border-style: solid;
        --iron-list-items-container_-_border-color: transparent;
      }

      /* Loading state */

      /* When items are empty, the sinner needs some room */
      :host(:not([closing])) [part~="content"] {
        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
      }

      [part~="overlay"] {
        position: relative;
      }

      :host([loading]) [part~="loader"] {
        box-sizing: border-box;
        width: var(--lumo-icon-size-s);
        height: var(--lumo-icon-size-s);
        position: absolute;
        z-index: 1;
        left: var(--lumo-space-s);
        right: var(--lumo-space-s);
        top: var(--lumo-space-s);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: 0;
        border: 2px solid transparent;
        border-color:
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color)
          var(--lumo-primary-color);
        border-radius: calc(0.5 * var(--lumo-icon-size-s));
        opacity: 0;
        animation:
          1s linear infinite lumo-combo-box-loader-rotate,
          .3s .1s lumo-combo-box-loader-fade-in both;
        pointer-events: none;
      }

      @keyframes lumo-combo-box-loader-fade-in {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes lumo-combo-box-loader-rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$9.content);const $_documentContainer$a=document.createElement("template");$_documentContainer$a.innerHTML=`<custom-style>
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$a.content);/* NOTICE: Generated with 'gulp icons' */ /*
                                                                                                    FIXME(polymer-modulizer): the above comments were extracted
                                                                                                    from HTML and may be out of place here. Review them and
                                                                                                    then delete this comment!
                                                                                                    */;const $_documentContainer$b=_cureMe.html`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$b.content);/**
                                                          @license
                                                          Copyright (c) 2017 Vaadin Ltd.
                                                          This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
                                                          */ /**
                                                              * A mixin providing `focused`, `focus-ring`, `active`, `disabled` and `selected`.
                                                              *
                                                              * `focused`, `active` and `focus-ring` are set as only as attributes.
                                                              * @polymerMixin
                                                              */const ItemMixin=superClass=>class VaadinItemMixin extends superClass{static get properties(){return{/**
       * Used for mixin detection because `instanceof` does not work with mixins.
       * e.g. in VaadinListMixin it filters items by using the
       * `element._hasVaadinItemMixin` condition.
       */_hasVaadinItemMixin:{value:!0},/**
       * If true, the user cannot interact with this element.
       */disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},/**
       * If true, the item is in selected state.
       */selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(value){this._value=value}ready(){super.ready();const attrValue=this.getAttribute("value");if(null!==attrValue){this.value=attrValue}this.addEventListener("focus",e=>this._setFocused(!0),!0);this.addEventListener("blur",e=>this._setFocused(!1),!0);this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const mouseUpListener=()=>{this._setActive(this._mousedown=!1);document.removeEventListener("mouseup",mouseUpListener)};document.addEventListener("mouseup",mouseUpListener)});this.addEventListener("keydown",e=>this._onKeydown(e));this.addEventListener("keyup",e=>this._onKeyup(e))}/**
     * @protected
     */disconnectedCallback(){super.disconnectedCallback();// in Firefox and Safari, blur does not fire on the element when it is removed,
// especially between keydown and keyup events, being active at the same time.
// reproducible in `<vaadin-select>` when closing overlay on select.
if(this.hasAttribute("active")){this._setFocused(!1)}}_selectedChanged(selected){this.setAttribute("aria-selected",selected)}_disabledChanged(disabled){if(disabled){this.selected=!1;this.setAttribute("aria-disabled","true");this.blur()}else{this.removeAttribute("aria-disabled")}}_setFocused(focused){if(focused){this.setAttribute("focused","");if(!this._mousedown){this.setAttribute("focus-ring","")}}else{this.removeAttribute("focused");this.removeAttribute("focus-ring");this._setActive(!1)}}_setActive(active){if(active){this.setAttribute("active","")}else{this.removeAttribute("active")}}_onKeydown(event){if(/^( |SpaceBar|Enter)$/.test(event.key)&&!event.defaultPrevented){event.preventDefault();this._setActive(!0)}}_onKeyup(event){if(this.hasAttribute("active")){this._setActive(!1);this.click()}}};_exports.ItemMixin=ItemMixin;var vaadinItemMixin={ItemMixin:ItemMixin};_exports.$vaadinItemMixin=vaadinItemMixin;class ItemElement extends ItemMixin(ThemableMixin(_cureMe.PolymerElement)){static get template(){return _cureMe.html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.1.1"}constructor(){super();/**
              * Submittable string value. The default value is the trimmed text content of the element.
              * @type {string}
              */this.value}}_exports.ItemElement=ItemElement;customElements.define(ItemElement.is,ItemElement);var vaadinItem={ItemElement:ItemElement};_exports.$vaadinItem=vaadinItem;const $_documentContainer$c=_cureMe.html`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
  <template>
    <style include="lumo-item">
      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */

      :host {
        cursor: default;
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        transition: background-color 100ms;
        border-radius: var(--lumo-border-radius);
        overflow: hidden;
        --_lumo-item-selected-icon-display: block;
      }

      /* ShadyCSS workaround (show the selected item checkmark) */
      :host::before {
        display: block;
      }

      :host(:hover) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([focused]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        :host(:hover) {
          background-color: transparent;
        }

        :host([focused]:not([disabled])) {
          box-shadow: none;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$c.content);/**
                                                          @license
                                                          Copyright (c) 2017 Vaadin Ltd.
                                                          This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
                                                          */const DatePickerHelper=class VaadinDatePickerHelper{/**
   * Get ISO 8601 week number for the given date.
   *
   * @param {Date} Date object
   * @return {Number} Week number
   */static _getISOWeekNumber(date){// Ported from Vaadin Framework method com.vaadin.client.DateTimeService.getISOWeekNumber(date)
var dayOfWeek=date.getDay();// 0 == sunday
// ISO 8601 use weeks that start on monday so we use
// mon=1,tue=2,...sun=7;
if(0===dayOfWeek){dayOfWeek=7}// Find nearest thursday (defines the week in ISO 8601). The week number
// for the nearest thursday is the same as for the target date.
var nearestThursdayDiff=4-dayOfWeek,nearestThursday=new Date(date.getTime()+1e3*(3600*(24*nearestThursdayDiff))),firstOfJanuary=new Date(0,0);// 4 is thursday
firstOfJanuary.setFullYear(nearestThursday.getFullYear());var timeDiff=nearestThursday.getTime()-firstOfJanuary.getTime(),daysSinceFirstOfJanuary=Math.round(timeDiff/(1e3*(3600*24)));// Rounding the result, as the division doesn't result in an integer
// when the given date is inside daylight saving time period.
return Math.floor(daysSinceFirstOfJanuary/7+1)}/**
     * Check if two dates are equal.
     *
     * @param {Date} date1
     * @param {Date} date2
     * @return {Boolean} True if the given date objects refer to the same date
     */static _dateEquals(date1,date2){return date1 instanceof Date&&date2 instanceof Date&&date1.getFullYear()===date2.getFullYear()&&date1.getMonth()===date2.getMonth()&&date1.getDate()===date2.getDate()}/**
     * Check if the given date is in the range of allowed dates.
     *
     * @param {Date} date The date to check
     * @param {Date} min Range start
     * @param {Date} max Range end
     * @return {Boolean} True if the date is in the range
     */static _dateAllowed(date,min,max){return(!min||date>=min)&&(!max||date<=max)}/**
     * Get closest date from array of dates.
     *
     * @param {Date} date The date to compare dates with
     * @param {Array} dates Array of date objects
     * @return {Date} Closest date
     */static _getClosestDate(date,dates){return dates.filter(date=>date!==void 0).reduce((closestDate,candidate)=>{if(!candidate){return closestDate}if(!closestDate){return candidate}var candidateDiff=Math.abs(date.getTime()-candidate.getTime()),closestDateDiff=Math.abs(closestDate.getTime()-date.getTime());return candidateDiff<closestDateDiff?candidate:closestDate})}/**
     * Extracts the basic component parts of a date (day, month and year)
     * to the expected format.
     */static _extractDateParts(date){return{day:date.getDate(),month:date.getMonth(),year:date.getFullYear()}}};_exports.DatePickerHelper=DatePickerHelper;var vaadinDatePickerHelper={DatePickerHelper:DatePickerHelper};_exports.$vaadinDatePickerHelper=vaadinDatePickerHelper;const DatePickerMixin=subclass=>class VaadinDatePickerMixin extends(0,_cureMe.mixinBehaviors)([_cureMe.IronResizableBehavior],subclass){static get properties(){return{/**
       * The current selected date.
       */_selectedDate:{type:Date},_focusedDate:Date,/**
       * The value for this element.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */value:{type:String,observer:"_valueChanged",notify:!0,value:""},/**
       * Set to true to mark the input as required.
       */required:{type:Boolean,value:!1},/**
       * The name of this element.
       */name:{type:String},/**
       * Date which should be visible when there is no value selected.
       *
       * The same date formats as for the `value` property are supported.
       */initialPosition:String,/**
       * The label for this element.
       */label:String,/**
       * Set true to open the date selector overlay.
       */opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},/**
       * Set true to display ISO-8601 week numbers in the calendar. Notice that
       * displaying week numbers is only supported when `i18n.firstDayOfWeek`
       * is 1 (Monday).
       */showWeekNumbers:{type:Boolean},_fullscreen:{value:!1,observer:"_fullscreenChanged"},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},// An array of ancestor elements whose -webkit-overflow-scrolling is forced from value
// 'touch' to value 'auto' in order to prevent them from clipping the dropdown. iOS only.
_touchPrevented:Array,/**
       * The object used to localize this component.
       * To change the default localization, replace the entire
       * _i18n_ object or just the property you want to modify.
       *
       * The object has the following JSON structure and default values:
           {
            // An array with the full names of months starting
            // with January.
            monthNames: [
              'January', 'February', 'March', 'April', 'May',
              'June', 'July', 'August', 'September',
              'October', 'November', 'December'
            ],
             // An array of weekday names starting with Sunday. Used
            // in screen reader announcements.
            weekdays: [
              'Sunday', 'Monday', 'Tuesday', 'Wednesday',
              'Thursday', 'Friday', 'Saturday'
            ],
             // An array of short weekday names starting with Sunday.
            // Displayed in the calendar.
            weekdaysShort: [
              'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
            ],
             // An integer indicating the first day of the week
            // (0 = Sunday, 1 = Monday, etc.).
            firstDayOfWeek: 0,
             // Used in screen reader announcements along with week
            // numbers, if they are displayed.
            week: 'Week',
             // Translation of the Calendar icon button title.
            calendar: 'Calendar',
             // Translation of the Clear icon button title.
            clear: 'Clear',
             // Translation of the Today shortcut button text.
            today: 'Today',
             // Translation of the Cancel button text.
            cancel: 'Cancel',
             // A function to format given `Object` as
            // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
            // Note: The argument month is 0-based. This means that January = 0 and December = 11.
            formatDate: d => {
              // returns a string representation of the given
              // object in 'MM/DD/YYYY' -format
            },
             // A function to parse the given text to an `Object` in the format `{ day: ..., month: ..., year: ... }`.
            // Must properly parse (at least) text formatted by `formatDate`.
            // Setting the property to null will disable keyboard input feature.
            // Note: The argument month is 0-based. This means that January = 0 and December = 11.
            parseDate: text => {
              // Parses a string in 'MM/DD/YY', 'MM/DD' or 'DD' -format to
              // an `Object` in the format `{ day: ..., month: ..., year: ... }`.
            }
             // A function to format given `monthName` and
            // `fullYear` integer as calendar title string.
            formatTitle: (monthName, fullYear) => {
              return monthName + ' ' + fullYear;
            }
          }
        *
       * @default {English/US}
       */i18n:{type:Object,value:()=>{return{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",clear:"Clear",today:"Today",cancel:"Cancel",formatDate:d=>{const yearStr=(d.year+"").replace(/\d+/,y=>"0000".substr(y.length)+y);return[d.month+1,d.day,yearStr].join("/")},parseDate:text=>{const parts=text.split("/"),today=new Date;let date,month=today.getMonth(),year=today.getFullYear();if(3===parts.length){year=parseInt(parts[2]);if(3>parts[2].length&&0<=year){year+=50>year?2e3:1900}month=parseInt(parts[0])-1;date=parseInt(parts[1])}else if(2===parts.length){month=parseInt(parts[0])-1;date=parseInt(parts[1])}else if(1===parts.length){date=parseInt(parts[0])}if(date!==void 0){return{day:date,month,year}}},formatTitle:(monthName,fullYear)=>{return monthName+" "+fullYear}}}},/**
       * The earliest date that can be selected. All earlier dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */min:{type:String,observer:"_minChanged"},/**
       * The latest date that can be selected. All later dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {String}
       */max:{type:String,observer:"_maxChanged"},/**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */_minDate:{type:Date,// null does not work here because minimizer passes undefined to overlay (#351)
value:""},/**
       * The latest date that can be selected. All later dates will be disabled.
       */_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(_fullscreen, _ios, i18n, i18n.*)"},_ios:{type:Boolean,value:navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_ignoreAnnounce:{value:!0},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_updateHasValue(value)","_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)"]}ready(){super.ready();this._boundOnScroll=this._onScroll.bind(this);this._boundFocus=this._focus.bind(this);this._boundUpdateAlignmentAndPosition=this._updateAlignmentAndPosition.bind(this);const isClearButton=e=>{const path=e.composedPath(),inputIndex=path.indexOf(this._inputElement);return 1===path.slice(0,inputIndex).filter(el=>el.getAttribute&&"clear-button"===el.getAttribute("part")).length};(0,_cureMe.addListener)(this,"tap",e=>{// FIXME(platosha): use preventDefault in the text field clear button,
// then the following composedPath check could be simplified down
// to `if (!e.defaultPrevented)`.
// https://github.com/vaadin/vaadin-text-field/issues/352
if(!isClearButton(e)){this.open()}});this.addEventListener("touchend",e=>{if(!isClearButton(e)){e.preventDefault()}});this.addEventListener("keydown",this._onKeydown.bind(this));this.addEventListener("input",this._onUserInput.bind(this));this.addEventListener("focus",e=>this._noInput&&e.target.blur());this.addEventListener("blur",e=>!this.opened&&this.validate())}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade");this._overlayInitialized=!0;this.$.overlay.addEventListener("opened-changed",e=>this.opened=e.detail.value);this._overlayContent.addEventListener("close",this._close.bind(this));this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this));this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._boundFocus);// Keep focus attribute in focusElement for styling
this._overlayContent.addEventListener("focus",()=>this.focusElement._setFocused(!0));this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}/**
     * @protected
     */disconnectedCallback(){super.disconnectedCallback();if(this._overlayInitialized){this.$.overlay.removeEventListener("vaadin-overlay-escape-press",this._boundFocus)}this.opened=!1}/**
     * Opens the dropdown.
     */open(){if(!this.disabled&&!this.readonly){this.opened=!0}}_close(e){if(e){e.stopPropagation()}this._focus();this.close()}/**
     * Closes the dropdown.
     */close(){if(this._overlayInitialized){this.$.overlay.close()}}get _inputElement(){return this._input()}get _nativeInput(){if(this._inputElement){// vaadin-text-field's input is focusElement
// iron-input's input is inputElement
return this._inputElement.focusElement?this._inputElement.focusElement:this._inputElement.inputElement?this._inputElement.inputElement:window.unwrap?window.unwrap(this._inputElement):this._inputElement}}_parseDate(str){// Parsing with RegExp to ensure correct format
var parts=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(str);if(!parts){return}var date=new Date(0,0);// Wrong date (1900-01-01), but with midnight in local time
date.setFullYear(parseInt(parts[1],10));date.setMonth(parseInt(parts[2],10)-1);date.setDate(parseInt(parts[3],10));return date}_isNoInput(fullscreen,ios,i18n){return!this._inputElement||fullscreen||ios||!i18n.parseDate}_formatISO(date){if(!(date instanceof Date)){return""}const pad=(num,fmt="00")=>(fmt+num).substr((fmt+num).length-fmt.length);let yearSign="",yearFmt="0000",yearAbs=date.getFullYear();if(0>yearAbs){yearAbs=-yearAbs;yearSign="-";yearFmt="000000"}else if(1e4<=date.getFullYear()){yearSign="+";yearFmt="000000"}const year=yearSign+pad(yearAbs,yearFmt),month=pad(date.getMonth()+1),day=pad(date.getDate());return[year,month,day].join("-")}_openedChanged(opened){if(opened&&!this._overlayInitialized){this._initOverlay()}if(this._overlayInitialized){this.$.overlay.opened=opened}if(opened){this._updateAlignmentAndPosition()}}_selectedDateChanged(selectedDate,formatDate){if(selectedDate===void 0||formatDate===void 0){return}if(this.__userInputOccurred){this.__dispatchChange=!0}const inputValue=selectedDate&&formatDate(DatePickerHelper._extractDateParts(selectedDate)),value=this._formatISO(selectedDate);this._inputValue=selectedDate?inputValue:"";if(value!==this.value){this.validate();this.value=value}this.__userInputOccurred=!1;this.__dispatchChange=!1;this._ignoreFocusedDateChange=!0;this._focusedDate=selectedDate;this._ignoreFocusedDateChange=!1}_focusedDateChanged(focusedDate,formatDate){if(focusedDate===void 0||formatDate===void 0){return}this.__userInputOccurred=!0;if(!this._ignoreFocusedDateChange&&!this._noInput){this._inputValue=focusedDate?formatDate(DatePickerHelper._extractDateParts(focusedDate)):""}}_updateHasValue(value){if(value){this.setAttribute("has-value","")}else{this.removeAttribute("has-value")}}__getOverlayTheme(theme,overlayInitialized){if(overlayInitialized){return theme}}_handleDateChange(property,value,oldValue){if(!value){this[property]="";return}var date=this._parseDate(value);if(!date){this.value=oldValue;return}if(!DatePickerHelper._dateEquals(this[property],date)){this[property]=date;this.value&&this.validate()}}_valueChanged(value,oldValue){if(this.__dispatchChange){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}this._handleDateChange("_selectedDate",value,oldValue)}_minChanged(value,oldValue){this._handleDateChange("_minDate",value,oldValue)}_maxChanged(value,oldValue){this._handleDateChange("_maxDate",value,oldValue)}_updateAlignmentAndPosition(){if(!this._overlayInitialized){return}if(!this._fullscreen){const inputRect=this._inputElement.getBoundingClientRect(),bottomAlign=inputRect.top>window.innerHeight/2,rightAlign=inputRect.left+this.clientWidth/2>window.innerWidth/2;if(rightAlign){const viewportWidth=Math.min(window.innerWidth,document.documentElement.clientWidth);this.$.overlay.setAttribute("right-aligned","");this.$.overlay.style.removeProperty("left");this.$.overlay.style.right=viewportWidth-inputRect.right+"px"}else{this.$.overlay.removeAttribute("right-aligned");this.$.overlay.style.removeProperty("right");this.$.overlay.style.left=inputRect.left+"px"}if(bottomAlign){const viewportHeight=Math.min(window.innerHeight,document.documentElement.clientHeight);this.$.overlay.setAttribute("bottom-aligned","");this.$.overlay.style.removeProperty("top");this.$.overlay.style.bottom=viewportHeight-inputRect.top+"px"}else{this.$.overlay.removeAttribute("bottom-aligned");this.$.overlay.style.removeProperty("bottom");this.$.overlay.style.top=inputRect.bottom+"px"}}this.$.overlay.setAttribute("dir",getComputedStyle(this._inputElement).getPropertyValue("direction"));this._overlayContent._repositionYearScroller()}_fullscreenChanged(){if(this._overlayInitialized&&this.$.overlay.opened){this._updateAlignmentAndPosition()}}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");var parsedInitialPosition=this._parseDate(this.initialPosition),initialPosition=this._selectedDate||this._overlayContent.initialPosition||parsedInitialPosition||new Date;if(parsedInitialPosition||DatePickerHelper._dateAllowed(initialPosition,this._minDate,this._maxDate)){this._overlayContent.initialPosition=initialPosition}else{this._overlayContent.initialPosition=DatePickerHelper._getClosestDate(initialPosition,[this._minDate,this._maxDate])}this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition);// Have a default focused date
this._ignoreFocusedDateChange=!0;this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition;this._ignoreFocusedDateChange=!1;window.addEventListener("scroll",this._boundOnScroll,!0);this.addEventListener("iron-resize",this._boundUpdateAlignmentAndPosition);if(this._webkitOverflowScroll){this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)}if(this._focusOverlayOnOpen){this._overlayContent.focus();this._focusOverlayOnOpen=!1}else{this._focus()}if(this._noInput&&this.focusElement){this.focusElement.blur()}this.updateStyles();this._ignoreAnnounce=!1}// A hack needed for iOS to prevent dropdown from being clipped in an
// ancestor container with -webkit-overflow-scrolling: touch;
_preventWebkitOverflowScrollingTouch(element){var result=[];while(element){if("touch"===window.getComputedStyle(element).webkitOverflowScrolling){var oldInlineValue=element.style.webkitOverflowScrolling;element.style.webkitOverflowScrolling="auto";result.push({element:element,oldInlineValue:oldInlineValue})}element=element.parentElement}return result}_onOverlayClosed(){this._ignoreAnnounce=!0;window.removeEventListener("scroll",this._boundOnScroll,!0);this.removeEventListener("iron-resize",this._boundUpdateAlignmentAndPosition);if(this._touchPrevented){this._touchPrevented.forEach(prevented=>prevented.element.style.webkitOverflowScrolling=prevented.oldInlineValue);this._touchPrevented=[]}this.updateStyles();// Select the parsed input or focused date
this._ignoreFocusedDateChange=!0;if(this.i18n.parseDate){var inputValue=this._inputValue||"";const dateObject=this.i18n.parseDate(inputValue),parsedDate=dateObject&&this._parseDate(`${dateObject.year}-${dateObject.month+1}-${dateObject.day}`);if(this._isValidDate(parsedDate)){this._selectedDate=parsedDate}else{this._selectedDate=null;this._inputValue=inputValue}}else if(this._focusedDate){this._selectedDate=this._focusedDate}this._ignoreFocusedDateChange=!1;if(this._nativeInput&&this._nativeInput.selectionStart){this._nativeInput.selectionStart=this._nativeInput.selectionEnd}// No need to revalidate the value after `_selectedDateChanged`
// Needed in case the value was not changed: open and close dropdown.
this.value||this.validate()}/**
     * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
     *
     * @param {string} value Value to validate. Optional, defaults to user's input value.
     * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
     */validate(){// Note (Yuriy): Workaround `this._inputValue` is used in order
// to avoid breaking change on custom `checkValidity`.
// Can be removed with next major.
return!(this.invalid=!this.checkValidity(this._inputValue))}/**
     * Returns true if the current input value satisfies all constraints (if any)
     *
     * Override the `checkValidity` method for custom validations.
     *
     * @param {string} value Value to validate. Optional, defaults to the selected date.
     * @return {boolean} True if the value is valid
     */checkValidity(){const inputValid=!this._inputValue||this._selectedDate&&this._inputValue===this.i18n.formatDate(DatePickerHelper._extractDateParts(this._selectedDate)),minMaxValid=!this._selectedDate||DatePickerHelper._dateAllowed(this._selectedDate,this._minDate,this._maxDate);let inputValidity=!0;if(this._inputElement){if(this._inputElement.checkValidity){// vaadin native input elements have the checkValidity method
this._inputElement.__forceCheckValidity=!0;inputValidity=this._inputElement.checkValidity();this._inputElement.__forceCheckValidity=!1}else if(this._inputElement.validate){// iron-form-elements have the validate API
inputValidity=this._inputElement.validate()}}return inputValid&&minMaxValid&&inputValidity}_onScroll(e){if(e.target===window||!this._overlayContent.contains(e.target)){this._updateAlignmentAndPosition()}}_focus(){if(this._noInput){this._overlayInitialized&&this._overlayContent.focus()}else{this._inputElement.focus()}}_focusAndSelect(){this._focus();this._setSelectionRange(0,this._inputValue.length)}_setSelectionRange(a,b){if(this._nativeInput&&this._nativeInput.setSelectionRange){this._nativeInput.setSelectionRange(a,b)}}/**
     * Keyboard Navigation
     */_eventKey(e){for(var keys=["down","up","enter","esc","tab"],i=0,k;i<keys.length;i++){k=keys[i];if(_cureMe.IronA11yKeysBehavior.keyboardEventMatchesKeys(e,k)){return k}}}_isValidDate(d){return d&&!isNaN(d.getTime())}_onKeydown(e){if(this._noInput){// The input element cannot be readonly as it would conflict with
// the required attribute. Both are not allowed on an input element.
// Therefore we prevent default on most keydown events.
var allowedKeys=[9// tab
];if(-1===allowedKeys.indexOf(e.keyCode)){e.preventDefault()}}switch(this._eventKey(e)){case"down":case"up":// prevent scrolling the page with arrows
e.preventDefault();if(this.opened){this._overlayContent.focus();this._overlayContent._onKeydown(e)}else{this._focusOverlayOnOpen=!0;this.open()}break;case"enter":{const dateObject=this.i18n.parseDate(this._inputValue),parsedDate=dateObject&&this._parseDate(dateObject.year+"-"+(dateObject.month+1)+"-"+dateObject.day);if(this._overlayInitialized&&this._overlayContent.focusedDate&&this._isValidDate(parsedDate)){this._selectedDate=this._overlayContent.focusedDate}this.close();break}case"esc":this._focusedDate=this._selectedDate;this._close();break;case"tab":if(this.opened){e.preventDefault();// Clear the selection range (remains visible on IE)
this._setSelectionRange(0,0);if(e.shiftKey){this._overlayContent.focusCancel()}else{this._overlayContent.focus();this._overlayContent.revealDate(this._focusedDate)}}break;}}_onUserInput(e){if(!this.opened&&this._inputElement.value){this.open()}this._userInputValueChanged()}_userInputValueChanged(value){if(this.opened&&this._inputValue){const dateObject=this.i18n.parseDate&&this.i18n.parseDate(this._inputValue),parsedDate=dateObject&&this._parseDate(`${dateObject.year}-${dateObject.month+1}-${dateObject.day}`);if(this._isValidDate(parsedDate)){this._ignoreFocusedDateChange=!0;if(!DatePickerHelper._dateEquals(parsedDate,this._focusedDate)){this._focusedDate=parsedDate}this._ignoreFocusedDateChange=!1}}}_announceFocusedDate(_focusedDate,opened,_ignoreAnnounce){if(opened&&!_ignoreAnnounce){this._overlayContent.announceFocusedDate()}}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}/**
     * Fired when the user commits a value change.
     *
     * @event change
     */};_exports.DatePickerMixin=DatePickerMixin;var vaadinDatePickerMixin={DatePickerMixin:DatePickerMixin};_exports.$vaadinDatePickerMixin=vaadinDatePickerMixin;class MonthCalendarElement extends ThemableMixin((0,_cureMe.GestureEventListeners)(_cureMe.PolymerElement)){static get template(){return _cureMe.html`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`}static get is(){return"vaadin-month-calendar"}static get properties(){return{/**
       * A `Date` object defining the month to be displayed. Only year and
       * month properties are actually used.
       */month:{type:Date,value:new Date},/**
       * A `Date` object for the currently selected date.
       */selectedDate:{type:Date,notify:!0},/**
       * A `Date` object for the currently focused date.
       */focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},/**
       * Flag stating whether taps on the component should be ignored.
       */ignoreTaps:Boolean,_notTapping:Boolean,/**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */minDate:{type:Date,value:null},/**
       * The latest date that can be selected. All later dates will be disabled.
       */maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)"]}_dateEquals(date1,date2){return DatePickerHelper._dateEquals(date1,date2)}_dateAllowed(date,min,max){return DatePickerHelper._dateAllowed(date,min,max)}/* Returns true if all the dates in the month are out of the allowed range */_isDisabled(month,minDate,maxDate){// First day of the month
var firstDate=new Date(0,0);firstDate.setFullYear(month.getFullYear());firstDate.setMonth(month.getMonth());firstDate.setDate(1);// Last day of the month
var lastDate=new Date(0,0);lastDate.setFullYear(month.getFullYear());lastDate.setMonth(month.getMonth()+1);lastDate.setDate(0);if(minDate&&maxDate&&minDate.getMonth()===maxDate.getMonth()&&minDate.getMonth()===month.getMonth()&&0<=maxDate.getDate()-minDate.getDate()){return!1}return!this._dateAllowed(firstDate,minDate,maxDate)&&!this._dateAllowed(lastDate,minDate,maxDate)}_getTitle(month,monthNames){if(month===void 0||monthNames===void 0){return}return this.i18n.formatTitle(monthNames[month.getMonth()],month.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1;setTimeout(()=>this._notTapping=!0,300)}_dateAdd(date,delta){date.setDate(date.getDate()+delta)}_applyFirstDayOfWeek(weekDayNames,firstDayOfWeek){if(weekDayNames===void 0||firstDayOfWeek===void 0){return}return weekDayNames.slice(firstDayOfWeek).concat(weekDayNames.slice(0,firstDayOfWeek))}_getWeekDayNames(weekDayNames,weekDayNamesShort,showWeekNumbers,firstDayOfWeek){if(weekDayNames===void 0||weekDayNamesShort===void 0||showWeekNumbers===void 0||firstDayOfWeek===void 0){return}weekDayNames=this._applyFirstDayOfWeek(weekDayNames,firstDayOfWeek);weekDayNamesShort=this._applyFirstDayOfWeek(weekDayNamesShort,firstDayOfWeek);weekDayNames=weekDayNames.map((day,index)=>{return{weekDay:day,weekDayShort:weekDayNamesShort[index]}});return weekDayNames}_getDate(date){return date?date.getDate():""}_showWeekNumbersChanged(showWeekNumbers,firstDayOfWeek){if(showWeekNumbers&&1===firstDayOfWeek){this.setAttribute("week-numbers","")}else{this.removeAttribute("week-numbers")}}_showWeekSeparator(showWeekNumbers,firstDayOfWeek){// Currently only supported for locales that start the week on Monday.
return showWeekNumbers&&1===firstDayOfWeek}_isToday(date){return this._dateEquals(new Date,date)}_getDays(month,firstDayOfWeek){if(month===void 0||firstDayOfWeek===void 0){return}// First day of the month (at midnight).
var date=new Date(0,0);date.setFullYear(month.getFullYear());date.setMonth(month.getMonth());date.setDate(1);// Rewind to first day of the week.
while(date.getDay()!==firstDayOfWeek){this._dateAdd(date,-1)}var days=[],startMonth=date.getMonth(),targetMonth=month.getMonth();while(date.getMonth()===targetMonth||date.getMonth()===startMonth){days.push(date.getMonth()===targetMonth?new Date(date.getTime()):null);// Advance to next day.
this._dateAdd(date,1)}return days}_getWeekNumber(date,days){if(date===void 0||days===void 0){return}if(!date){// Get the first non-null date from the days array.
date=days.reduce((acc,d)=>{return!acc&&d?d:acc})}return DatePickerHelper._getISOWeekNumber(date)}_getWeekNumbers(dates){return dates.map(date=>this._getWeekNumber(date,dates)).filter((week,index,arr)=>arr.indexOf(week)===index)}_handleTap(e){if(!this.ignoreTaps&&!this._notTapping&&e.target.date&&!e.target.hasAttribute("disabled")){this.selectedDate=e.target.date;this.dispatchEvent(new CustomEvent("date-tap",{bubbles:!0,composed:!0}))}}_preventDefault(e){e.preventDefault()}_getRole(date){return date?"button":"presentation"}_getAriaLabel(date){if(!date){return""}var ariaLabel=this._getDate(date)+" "+this.i18n.monthNames[date.getMonth()]+" "+date.getFullYear()+", "+this.i18n.weekdays[date.getDay()];if(this._isToday(date)){ariaLabel+=", "+this.i18n.today}return ariaLabel}_getAriaDisabled(date,min,max){if(date===void 0||min===void 0||max===void 0){return}return this._dateAllowed(date,min,max)?"false":"true"}}customElements.define(MonthCalendarElement.is,MonthCalendarElement);class InfiniteScrollerElement extends _cureMe.PolymerElement{static get template(){return _cureMe.html`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{/**
       * Count of individual items in each buffer.
       * The scroller has 2 buffers altogether so bufferSize of 20
       * will result in 40 buffered DOM items in total.
       * Changing after initialization not supported.
       */bufferSize:{type:Number,value:20},/**
       * The amount of initial scroll top. Needed in order for the
       * user to be able to scroll backwards.
       */_initialScroll:{value:5e5},/**
       * The index/position mapped at _initialScroll point.
       */_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready();this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer"));this.$.fullHeight.style.height=2*this._initialScroll+"px";var tpl=this.querySelector("template");this._TemplateClass=(0,_cureMe.templatize)(tpl,this,{forwardHostProp:function(prop,value){if("index"!==prop){this._buffers.forEach(buffer=>{[].forEach.call(buffer.children,insertionPoint=>{insertionPoint._itemWrapper.instance[prop]=value})})}}});// Firefox interprets elements with overflow:auto as focusable
// https://bugzilla.mozilla.org/show_bug.cgi?id=1069739
var isFirefox=-1<navigator.userAgent.toLowerCase().indexOf("firefox");if(isFirefox){this.$.scroller.tabIndex=-1}}_activated(active){if(active&&!this._initialized){this._createPool();this._initialized=!0}}_finishInit(){if(!this._initDone){// Once the first set of items start fading in, stamp the rest
this._buffers.forEach(buffer=>{[].forEach.call(buffer.children,insertionPoint=>this._ensureStampedInstance(insertionPoint._itemWrapper))},this);if(!this._buffers[0].translateY){this._reset()}this._initDone=!0}}_translateBuffer(up){var index=up?1:0;this._buffers[index].translateY=this._buffers[index?0:1].translateY+this._bufferHeight*(index?-1:1);this._buffers[index].style.transform="translate3d(0, "+this._buffers[index].translateY+"px, 0)";this._buffers[index].updated=!1;this._buffers.reverse()}_scroll(){if(this._scrollDisabled){return}var scrollTop=this.$.scroller.scrollTop;if(scrollTop<this._bufferHeight||scrollTop>2*this._initialScroll-this._bufferHeight){// Scrolled near the end/beginning of the scrollable area -> reset.
this._initialIndex=~~this.position;this._reset()}// Check if we scrolled enough to translate the buffer positions.
var bufferOffset=this.root.querySelector(".buffer").offsetTop,upperThresholdReached=scrollTop>this._buffers[1].translateY+this.itemHeight+bufferOffset,lowerThresholdReached=scrollTop<this._buffers[0].translateY+this.itemHeight+bufferOffset;if(upperThresholdReached||lowerThresholdReached){this._translateBuffer(lowerThresholdReached);this._updateClones()}if(!this._preventScrollEvent){this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0}));this._mayHaveMomentum=!0}this._preventScrollEvent=!1;this._debouncerScrollFinish=_cureMe.Debouncer.debounce(this._debouncerScrollFinish,_cureMe.timeOut.after(200),()=>{var scrollerRect=this.$.scroller.getBoundingClientRect();if(!this._isVisible(this._buffers[0],scrollerRect)&&!this._isVisible(this._buffers[1],scrollerRect)){this.position=this.position}})}/**
     * Current scroller position as index. Can be a fractional number.
     *
     * @type {Number}
     */set position(index){this._preventScrollEvent=!0;if(index>this._firstIndex&&index<this._firstIndex+2*this.bufferSize){this.$.scroller.scrollTop=this.itemHeight*(index-this._firstIndex)+this._buffers[0].translateY}else{this._initialIndex=~~index;this._reset();this._scrollDisabled=!0;this.$.scroller.scrollTop+=index%1*this.itemHeight;this._scrollDisabled=!1}if(this._mayHaveMomentum){// Stop the possible iOS Safari momentum with -webkit-overflow-scrolling: auto;
this.$.scroller.classList.add("notouchscroll");this._mayHaveMomentum=!1;setTimeout(()=>{// Restore -webkit-overflow-scrolling: touch; after a small delay.
this.$.scroller.classList.remove("notouchscroll")},10)}}/**
     * @private
     */get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}get itemHeight(){if(!this._itemHeightVal){if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)){this.updateStyles()}const itemHeight=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-infinite-scroller-item-height"):getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),tmpStyleProp="background-position";// Use background-position temp inline style for unit conversion
this.$.fullHeight.style.setProperty(tmpStyleProp,itemHeight);const itemHeightPx=getComputedStyle(this.$.fullHeight).getPropertyValue(tmpStyleProp);this.$.fullHeight.style.removeProperty(tmpStyleProp);this._itemHeightVal=parseFloat(itemHeightPx)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0;this.$.scroller.scrollTop=this._initialScroll;this._buffers[0].translateY=this._initialScroll-this._bufferHeight;this._buffers[1].translateY=this._initialScroll;this._buffers.forEach(buffer=>{buffer.style.transform="translate3d(0, "+buffer.translateY+"px, 0)"});this._buffers[0].updated=this._buffers[1].updated=!1;this._updateClones(!0);this._debouncerUpdateClones=_cureMe.Debouncer.debounce(this._debouncerUpdateClones,_cureMe.timeOut.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1;this._updateClones()});this._scrollDisabled=!1}_createPool(){var container=this.getBoundingClientRect();this._buffers.forEach(buffer=>{for(var i=0;i<this.bufferSize;i++){const itemWrapper=document.createElement("div");itemWrapper.style.height=this.itemHeight+"px";itemWrapper.instance={};const contentId=InfiniteScrollerElement._contentIndex=InfiniteScrollerElement._contentIndex+1||0,slotName="vaadin-infinite-scroller-item-content-"+contentId,insertionPoint=document.createElement("slot");insertionPoint.setAttribute("name",slotName);insertionPoint._itemWrapper=itemWrapper;buffer.appendChild(insertionPoint);itemWrapper.setAttribute("slot",slotName);this.appendChild(itemWrapper);// This is needed by IE
(0,_cureMe.flush)();setTimeout(()=>{// Only stamp the visible instances first
if(this._isVisible(itemWrapper,container)){this._ensureStampedInstance(itemWrapper)}},1);// Wait for first reset
}},this);setTimeout(()=>{(0,_cureMe.afterNextRender)(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(itemWrapper){if(itemWrapper.firstElementChild){return}var tmpInstance=itemWrapper.instance;itemWrapper.instance=new this._TemplateClass({});itemWrapper.appendChild(itemWrapper.instance.root);Object.keys(tmpInstance).forEach(prop=>{itemWrapper.instance.set(prop,tmpInstance[prop])})}_updateClones(viewPortOnly){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var scrollerRect=viewPortOnly?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((buffer,bufferIndex)=>{if(!buffer.updated){var firstIndex=this._firstIndex+this.bufferSize*bufferIndex;[].forEach.call(buffer.children,(insertionPoint,index)=>{const itemWrapper=insertionPoint._itemWrapper;if(!viewPortOnly||this._isVisible(itemWrapper,scrollerRect)){itemWrapper.instance.index=firstIndex+index}});buffer.updated=!0}},this)}_isVisible(element,container){var rect=element.getBoundingClientRect();return rect.bottom>container.top&&rect.top<container.bottom}}customElements.define(InfiniteScrollerElement.is,InfiniteScrollerElement);const $_documentContainer$d=document.createElement("template");$_documentContainer$d.innerHTML=`<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">
  <template>
    <style>
      :host {
        align-items: flex-start;
        justify-content: flex-start;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      :host([right-aligned]) {
        align-items: flex-end;
      }

      :host([right-aligned][dir="rtl"]) {
        align-items: flex-start;
      }

      [part="overlay"] {
        display: flex;
        flex: auto;
      }

      [part~="content"] {
        flex: auto;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$d.content);class DatePickerOverlayContentElement extends ThemableMixin(ThemePropertyMixin((0,_cureMe.GestureEventListeners)(_cureMe.PolymerElement))){static get template(){return _cureMe.html`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{/**
       * The value for this element.
       */selectedDate:{type:Date,notify:!0},/**
       * Date value which is focused using keyboard.
       */focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,/**
       * Date which should be visible when there is no value selected.
       */initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,/**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */minDate:Date,/**
       * The latest date that can be selected. All later dates will be disabled.
       */maxDate:Date,_focused:Boolean,/**
       * Input label
       */label:String}}ready(){super.ready();this.setAttribute("tabindex",0);this.addEventListener("keydown",this._onKeydown.bind(this));(0,_cureMe.addListener)(this,"tap",this._stopPropagation);this.addEventListener("focus",this._onOverlayFocus.bind(this));this.addEventListener("blur",this._onOverlayBlur.bind(this))}/**
     * Fired when the scroller reaches the target scrolling position.
     * @event scroll-animation-finished
     * @param {Number} detail.position new position
     * @param {Number} detail.oldPosition old position
     */connectedCallback(){super.connectedCallback();this._closeYearScroller();this._toggleAnimateClass(!0);(0,_cureMe.setTouchAction)(this.$.scrollers,"pan-y");_cureMe.IronA11yAnnouncer.requestAvailability()}announceFocusedDate(){var focusedDate=this._currentlyFocusedDate(),announce=[];if(DatePickerHelper._dateEquals(focusedDate,new Date)){announce.push(this.i18n.today)}announce=announce.concat([this.i18n.weekdays[focusedDate.getDay()],focusedDate.getDate(),this.i18n.monthNames[focusedDate.getMonth()],focusedDate.getFullYear()]);if(this.showWeekNumbers&&1===this.i18n.firstDayOfWeek){announce.push(this.i18n.week);announce.push(DatePickerHelper._getISOWeekNumber(focusedDate))}this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:announce.join(" ")}}));return}/**
     * Focuses the cancel button
     */focusCancel(){this.$.cancelButton.focus()}/**
     * Scrolls the list to the given Date.
     */scrollToDate(date,animate){this._scrollToPosition(this._differenceInMonths(date,this._originDate),animate)}_focusedDateChanged(focusedDate){this.revealDate(focusedDate)}_isCurrentYear(yearsFromNow){return 0===yearsFromNow}_isSelectedYear(yearsFromNow,selectedDate){if(selectedDate){return selectedDate.getFullYear()===this._originDate.getFullYear()+yearsFromNow}}/**
     * Scrolls the month and year scrollers enough to reveal the given date.
     */revealDate(date){if(date){var diff=this._differenceInMonths(date,this._originDate),scrolledAboveViewport=this.$.monthScroller.position>diff,visibleItems=this.$.monthScroller.clientHeight/this.$.monthScroller.itemHeight,scrolledBelowViewport=this.$.monthScroller.position+visibleItems-1<diff;if(scrolledAboveViewport){this._scrollToPosition(diff,!0)}else if(scrolledBelowViewport){this._scrollToPosition(diff-visibleItems+1,!0)}}}_onOverlayFocus(){this._focused=!0}_onOverlayBlur(){this._focused=!1}_initialPositionChanged(initialPosition){this.scrollToDate(initialPosition)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position);this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth();this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller();this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller();this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1;setTimeout(()=>this._notTapping=!0,300);this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0;this._debouncer=_cureMe.Debouncer.debounce(this._debouncer,_cureMe.timeOut.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(date,formatDate,label){if(date){return formatDate(DatePickerHelper._extractDateParts(date))}else{return label}}_onTodayTap(){var today=new Date;if(.001>Math.abs(this.$.monthScroller.position-this._differenceInMonths(today,this._originDate))){// Select today only if the month scroller is positioned approximately
// at the beginning of the current month
this.selectedDate=today;this._close()}else{this._scrollToCurrentMonth()}}_scrollToCurrentMonth(){if(this.focusedDate){this.focusedDate=new Date}this.scrollToDate(new Date,!0)}_showClear(selectedDate){return!!selectedDate}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){var scrollDelta=e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2),yearDelta=scrollDelta/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*yearDelta,!0)}}_scrollToPosition(targetPosition,animate){if(this._targetPosition!==void 0){this._targetPosition=targetPosition;return}if(!animate){this.$.monthScroller.position=targetPosition;this._targetPosition=void 0;this._repositionYearScroller();return}this._targetPosition=targetPosition;// http://gizma.com/easing/
var easingFunction=(t,b,c,d)=>{t/=d/2;if(1>t){return c/2*t*t+b}t--;return-c/2*(t*(t-2)-1)+b},duration=animate?300:0,start=0,initialPosition=this.$.monthScroller.position,smoothScroll=timestamp=>{start=start||timestamp;var currentTime=timestamp-start;if(currentTime<duration){var currentPos=easingFunction(currentTime,initialPosition,this._targetPosition-initialPosition,duration);this.$.monthScroller.position=currentPos;window.requestAnimationFrame(smoothScroll)}else{this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:initialPosition}}));this.$.monthScroller.position=this._targetPosition;this._targetPosition=void 0}setTimeout(this._repositionYearScroller.bind(this),1)};// Start the animation.
window.requestAnimationFrame(smoothScroll)}_limit(value,range){return Math.min(range.max,Math.max(range.min,value))}_handleTrack(e){// Check if horizontal movement threshold (dx) not exceeded or
// scrolling fast vertically (ddy).
if(10>Math.abs(e.detail.dx)||10<Math.abs(e.detail.ddy)){return}// If we're flinging quickly -> start animating already.
if(Math.abs(e.detail.ddx)>this._yearScrollerWidth/3){this._toggleAnimateClass(!0)}var newTranslateX=this._translateX+e.detail.ddx;this._translateX=this._limit(newTranslateX,{min:0,max:this._yearScrollerWidth})}_track(e){if(this._desktopMode){// No need to track for swipe gestures on desktop.
return}switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0);if(this._translateX>=this._yearScrollerWidth/2){this._closeYearScroller()}else{this._openYearScroller()}break;}}_toggleAnimateClass(enable){if(enable){this.classList.add("animate")}else{this.classList.remove("animate")}}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0;this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible");this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(x){if(!this._desktopMode){this.$.monthScroller.style.transform="translateX("+(x-this._yearScrollerWidth)+"px)";this.$.yearScroller.style.transform="translateX("+x+"px)"}}_yearAfterXYears(index){var result=new Date(this._originDate);result.setFullYear(parseInt(index)+this._originDate.getFullYear());return result.getFullYear()}_yearAfterXMonths(months){return this._dateAfterXMonths(months).getFullYear()}_dateAfterXMonths(months){var result=new Date(this._originDate);result.setDate(1);result.setMonth(parseInt(months)+this._originDate.getMonth());return result}_differenceInMonths(date1,date2){var months=12*(date1.getFullYear()-date2.getFullYear());return months-date2.getMonth()+date1.getMonth()}_differenceInYears(date1,date2){return this._differenceInMonths(date1,date2)/12}_clear(){this.selectedDate=""}_close(){const overlayContent=this.getRootNode().host,overlay=overlayContent?overlayContent.getRootNode().host:null;if(overlay){overlay.opened=!1}this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate;this._close()}_preventDefault(e){e.preventDefault()}/**
     * Keyboard Navigation
     */_eventKey(e){for(var keys=["down","up","right","left","enter","space","home","end","pageup","pagedown","tab","esc"],i=0,k;i<keys.length;i++){k=keys[i];if(_cureMe.IronA11yKeysBehavior.keyboardEventMatchesKeys(e,k)){return k}}}_onKeydown(e){var focus=this._currentlyFocusedDate();// Cannot use (today/cancel).focused flag because vaadin-text-field removes it
// previously in the keydown event.
const isToday=0<=e.composedPath().indexOf(this.$.todayButton),isCancel=0<=e.composedPath().indexOf(this.$.cancelButton),isScroller=!isToday&&!isCancel;var eventKey=this._eventKey(e);if("tab"===eventKey){// We handle tabs here and don't want to bubble up.
e.stopPropagation();const isFullscreen=this.hasAttribute("fullscreen"),isShift=e.shiftKey;if(isFullscreen){e.preventDefault()}else if(isShift&&isScroller||!isShift&&isCancel){// Return focus back to the input field
e.preventDefault();this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}else if(isShift&&isToday){// Browser returns focus back to the scrollable area. We need to set
// the focused flag, and move the scroll to focused date.
this._focused=!0;setTimeout(()=>this.revealDate(this.focusedDate),1)}else{// Browser moves the focus out of the scroller, hence focused flag must
// set to false.
this._focused=!1}}else if(eventKey){e.preventDefault();e.stopPropagation();switch(eventKey){case"down":this._moveFocusByDays(7);this.focus();break;case"up":this._moveFocusByDays(-7);this.focus();break;case"right":if(isScroller){this._moveFocusByDays(1)}break;case"left":if(isScroller){this._moveFocusByDays(-1)}break;case"enter":if(isScroller||isCancel){this._close()}else if(isToday){this._onTodayTap()}break;case"space":if(isCancel){this._close()}else if(isToday){this._onTodayTap()}else{var focusedDate=this.focusedDate;if(DatePickerHelper._dateEquals(focusedDate,this.selectedDate)){this.selectedDate="";this.focusedDate=focusedDate}else{this.selectedDate=focusedDate}}break;case"home":this._moveFocusInsideMonth(focus,"minDate");break;case"end":this._moveFocusInsideMonth(focus,"maxDate");break;case"pagedown":this._moveFocusByMonths(e.shiftKey?12:1);break;case"pageup":this._moveFocusByMonths(e.shiftKey?-12:-1);break;case"esc":this._cancel();break;}}}_currentlyFocusedDate(){return this.focusedDate||this.selectedDate||this.initialPosition||new Date}_focusDate(dateToFocus){this.focusedDate=dateToFocus;this._focusedMonthDate=dateToFocus.getDate()}_focusClosestDate(focus){this._focusDate(DatePickerHelper._getClosestDate(focus,[this.minDate,this.maxDate]))}_moveFocusByDays(days){var focus=this._currentlyFocusedDate(),dateToFocus=new Date(0,0);dateToFocus.setFullYear(focus.getFullYear());dateToFocus.setMonth(focus.getMonth());dateToFocus.setDate(focus.getDate()+days);if(this._dateAllowed(dateToFocus,this.minDate,this.maxDate)){this._focusDate(dateToFocus)}else{if(this._dateAllowed(focus,this.minDate,this.maxDate)){// Move to min or max date
if(0<days){// down or right
this._focusDate(this.maxDate)}else{// up or left
this._focusDate(this.minDate)}}else{// Move to closest allowed date
this._focusClosestDate(focus)}}}_moveFocusByMonths(months){var focus=this._currentlyFocusedDate(),dateToFocus=new Date(0,0);dateToFocus.setFullYear(focus.getFullYear());dateToFocus.setMonth(focus.getMonth()+months);var targetMonth=dateToFocus.getMonth();dateToFocus.setDate(this._focusedMonthDate||(this._focusedMonthDate=focus.getDate()));if(dateToFocus.getMonth()!==targetMonth){dateToFocus.setDate(0)}if(this._dateAllowed(dateToFocus,this.minDate,this.maxDate)){this.focusedDate=dateToFocus}else{if(this._dateAllowed(focus,this.minDate,this.maxDate)){// Move to min or max date
if(0<months){// pagedown
this._focusDate(this.maxDate)}else{// pageup
this._focusDate(this.minDate)}}else{// Move to closest allowed date
this._focusClosestDate(focus)}}}_moveFocusInsideMonth(focusedDate,property){var dateToFocus=new Date(0,0);dateToFocus.setFullYear(focusedDate.getFullYear());if("minDate"===property){dateToFocus.setMonth(focusedDate.getMonth());dateToFocus.setDate(1)}else{dateToFocus.setMonth(focusedDate.getMonth()+1);dateToFocus.setDate(0)}if(this._dateAllowed(dateToFocus,this.minDate,this.maxDate)){this._focusDate(dateToFocus)}else{if(this._dateAllowed(focusedDate,this.minDate,this.maxDate)){// Move to minDate or maxDate
this._focusDate(this[property])}else{// Move to closest allowed date
this._focusClosestDate(focusedDate)}}}_dateAllowed(date,min,max){return(!min||date>=min)&&(!max||date<=max)}_isTodayAllowed(min,max){var today=new Date,todayMidnight=new Date(0,0);todayMidnight.setFullYear(today.getFullYear());todayMidnight.setMonth(today.getMonth());todayMidnight.setDate(today.getDate());return this._dateAllowed(todayMidnight,min,max)}_stopPropagation(e){e.stopPropagation()}}customElements.define(DatePickerOverlayContentElement.is,DatePickerOverlayContentElement);class DatePickerOverlayElement extends DisableUpgradeMixin(OverlayElement){static get is(){return"vaadin-date-picker-overlay"}}customElements.define(DatePickerOverlayElement.is,DatePickerOverlayElement);const $_documentContainer$e=document.createElement("template");$_documentContainer$e.innerHTML=`<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$e.content);const HOST_PROPS={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},PROP_TYPE={DEFAULT:"default",ACCESSIBLE:"accessible"},TextFieldMixin=subclass=>class VaadinTextFieldMixin extends ControlStateMixin(subclass){static get properties(){return{/**
       * Whether the value of the control can be automatically completed by the browser.
       * List of available options at:
       * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
       */autocomplete:{type:String},/**
       * This is a property supported by Safari that is used to control whether
       * autocorrection should be enabled when the user is entering/editing the text.
       * Possible values are:
       * on: Enable autocorrection.
       * off: Disable autocorrection.
       */autocorrect:{type:String},/**
       * This is a property supported by Safari and Chrome that is used to control whether
       * autocapitalization should be enabled when the user is entering/editing the text.
       * Possible values are:
       * characters: Characters capitalization.
       * words: Words capitalization.
       * sentences: Sentences capitalization.
       * none: No capitalization.
       */autocapitalize:{type:String},/**
       * Specify that the value should be automatically selected when the field gains focus.
       */autoselect:{type:Boolean,value:!1},/**
       * Set to true to display the clear icon which clears the input.
       */clearButtonVisible:{type:Boolean,value:!1},/**
       * Error to show when the input value is invalid.
       */errorMessage:{type:String,value:""},/**
       * Object with translated strings used for localization. Has
       * the following structure and default values:
       *
       * ```
       * {
       *   // Translation of the clear icon button accessible label
       *   clear: 'Clear'
       * }
       * ```
       */i18n:{type:Object,value:()=>{return{clear:"Clear"}}},/**
       * String used for the label element.
       */label:{type:String,value:"",observer:"_labelChanged"},/**
       * Maximum number of characters (in Unicode code points) that the user can enter.
       */maxlength:{type:Number},/**
       * Minimum number of characters (in Unicode code points) that the user can enter.
       */minlength:{type:Number},/**
       * The name of the control, which is submitted with the form data.
       */name:{type:String},/**
       * A hint to the user of what can be entered in the control.
       */placeholder:{type:String},/**
       * This attribute indicates that the user cannot modify the value of the control.
       */readonly:{type:Boolean,reflectToAttribute:!0},/**
       * Specifies that the user must fill in a value.
       */required:{type:Boolean,reflectToAttribute:!0},/**
       * The initial value of the control.
       * It can be used for two-way data binding.
       */value:{type:String,value:"",observer:"_valueChanged",notify:!0},/**
       * This property is set to true when the control value is invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},/**
       * Specifies that the text field has value.
       */hasValue:{type:Boolean,reflectToAttribute:!0},/**
       * When set to true, user is prevented from typing a value that
       * conflicts with the given `pattern`.
       */preventInvalidInput:{type:Boolean},/**
       * A pattern matched against individual characters the user inputs.
       * When set, the field will prevent:
       * - `keyDown` events if the entered key doesn't match `/^_enabledCharPattern$/`
       * - `paste` events if the pasted text doesn't match `/^_enabledCharPattern*$/`
       * - `drop` events if the dropped text doesn't match `/^_enabledCharPattern*$/`
       *
       * For example, to enable entering only numbers and minus signs,
       * `_enabledCharPattern = "[\\d-]"`
       */_enabledCharPattern:String,_labelId:String,_errorId:String,_inputId:String}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+HOST_PROPS.default.join(", ")+")","_hostAccessiblePropsChanged("+HOST_PROPS.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(!this.shadowRoot){return}const slotted=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);if(slotted){return slotted}return this.shadowRoot.querySelector("[part=\"value\"]")}/**
     * @private
     */get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){// This complex observer needs to be added dynamically here (instead of defining it above in the `get observers()`)
// so that it runs after complex observers of inheriting classes. Otherwise e.g. `_stepOrMinChanged()` observer of
// vaadin-number-field would run after this and the `min` and `step` properties would not yet be propagated to
// the `inputElement` when this runs.
this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.__preventInput){e.stopImmediatePropagation();this.__preventInput=!1;return}if(this.preventInvalidInput){const input=this.inputElement;if(0<input.value.length&&!this.checkValidity()){input.value=this.value||"";// add input-prevented attribute for 200ms
this.setAttribute("input-prevented","");this._inputDebouncer=_cureMe.Debouncer.debounce(this._inputDebouncer,_cureMe.timeOut.after(200),()=>{this.removeAttribute("input-prevented")});return}}if(!e.__fromClearButton){this.__userInput=!0}this.value=e.target.value}// NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
// of the clear button instead of setting display property for it depending on state.
_stateChanged(disabled,readonly,clearButtonVisible,hasValue){if(!disabled&&!readonly&&clearButtonVisible&&hasValue){this.$.clearButton.removeAttribute("hidden")}else{this.$.clearButton.setAttribute("hidden",!0)}}_onChange(e){if(this._valueClearing){return}// In the Shadow DOM, the `change` event is not leaked into the
// ancestor tree, so we must do this manually.
const changeEvent=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(changeEvent)}_valueChanged(newVal,oldVal){// setting initial value to empty string, skip validation
if(""===newVal&&oldVal===void 0){return}if(""!==newVal&&null!=newVal){this.hasValue=!0}else{this.hasValue=!1}if(this.__userInput){this.__userInput=!1;return}else if(newVal!==void 0){this.inputElement.value=newVal}else{this.value=this.inputElement.value=""}if(this.invalid){this.validate()}}_labelChanged(label){if(""!==label&&null!=label){this.setAttribute("has-label","")}else{this.removeAttribute("has-label")}}_onSlotChange(){const slotted=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);if(this.value){this.inputElement.value=this.value;this.validate()}if(slotted&&!this._slottedInput){this._validateSlottedValue(slotted);this._addInputListeners(slotted);this._addIEListeners(slotted);this._slottedInput=slotted}else if(!slotted&&this._slottedInput){this._removeInputListeners(this._slottedInput);this._removeIEListeners(this._slottedInput);this._slottedInput=void 0}Object.keys(PROP_TYPE).map(key=>PROP_TYPE[key]).forEach(type=>this._propagateHostAttributes(HOST_PROPS[type].map(attr=>this[attr]),type))}_hostPropsChanged(...attributesValues){this._propagateHostAttributes(attributesValues,PROP_TYPE.DEFAULT)}_hostAccessiblePropsChanged(...attributesValues){this._propagateHostAttributes(attributesValues,PROP_TYPE.ACCESSIBLE)}_validateSlottedValue(slotted){if(slotted.value!==this.value){console.warn("Please define value on the vaadin-text-field component!");slotted.value=""}}_propagateHostAttributes(attributesValues,type){const input=this.inputElement,attributeNames=HOST_PROPS[type];if("accessible"===type){attributeNames.forEach((attr,index)=>{this._setOrToggleAttribute(attr,attributesValues[index],input);this._setOrToggleAttribute(`aria-${attr}`,attributesValues[index],input)})}else{attributeNames.forEach((attr,index)=>{this._setOrToggleAttribute(attr,attributesValues[index],input)})}}_setOrToggleAttribute(name,value,node){if(!name||!node){return}if(value){node.setAttribute(name,"boolean"===typeof value?"":value)}else{node.removeAttribute(name)}}_constraintsChanged(required,minlength,maxlength,pattern){if(!this.invalid){return}if(!required&&!minlength&&!maxlength&&!pattern){this.invalid=!1}else{this.validate()}}/**
     * Returns true if the current input value satisfies all constraints (if any)
     * @returns {boolean}
     */checkValidity(){// Note (Yuriy): `__forceCheckValidity` is used in containing components (i.e. `vaadin-date-picker`) in order
// to force the checkValidity instead of returning the previous invalid state.
if(this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity){return this.inputElement.checkValidity()}else{return!this.invalid}}_addInputListeners(node){node.addEventListener("input",this._boundOnInput);node.addEventListener("change",this._boundOnChange);node.addEventListener("blur",this._boundOnBlur);node.addEventListener("focus",this._boundOnFocus);node.addEventListener("paste",this._boundOnPaste);node.addEventListener("drop",this._boundOnDrop);node.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(node){node.removeEventListener("input",this._boundOnInput);node.removeEventListener("change",this._boundOnChange);node.removeEventListener("blur",this._boundOnBlur);node.removeEventListener("focus",this._boundOnFocus);node.removeEventListener("paste",this._boundOnPaste);node.removeEventListener("drop",this._boundOnDrop);node.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready();this._createConstraintsObserver();this._boundOnInput=this._onInput.bind(this);this._boundOnChange=this._onChange.bind(this);this._boundOnBlur=this._onBlur.bind(this);this._boundOnFocus=this._onFocus.bind(this);this._boundOnPaste=this._onPaste.bind(this);this._boundOnDrop=this._onDrop.bind(this);this._boundOnBeforeInput=this._onBeforeInput.bind(this);const defaultInput=this.shadowRoot.querySelector("[part=\"value\"]");this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this._addInputListeners(defaultInput);this._addIEListeners(defaultInput);if(this._slottedInput){this._addIEListeners(this._slottedInput);this._addInputListeners(this._slottedInput)}this.shadowRoot.querySelector("[name=\"input\"], [name=\"textarea\"]").addEventListener("slotchange",this._onSlotChange.bind(this));if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)){this.updateStyles()}this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0);this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1);this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this));this.addEventListener("keydown",this._onKeyDown.bind(this));var uniqueId=TextFieldMixin._uniqueId=1+TextFieldMixin._uniqueId||0;this._errorId=`${this.constructor.is}-error-${uniqueId}`;this._labelId=`${this.constructor.is}-label-${uniqueId}`;this._inputId=`${this.constructor.is}-input-${uniqueId}`;// Lumo theme defines a max-height transition for the "error-message"
// part on invalid state change.
this.shadowRoot.querySelector("[part=\"error-message\"]").addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}/**
     * Returns true if `value` is valid.
     * `<iron-form>` uses this to check the validity for all its elements.
     *
     * @return {boolean} True if the value is valid.
     */validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){if(this.autoselect){this.inputElement.select();// iOS 9 workaround: https://stackoverflow.com/a/7436574
setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){// The workaround may cause errors on different input types.
// Needs to be suppressed. See https://github.com/vaadin/flow/issues/6070
}})}}_onClearButtonClick(e){e.preventDefault();// NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.
this.inputElement.focus();this.clear();this._valueClearing=!1;if(navigator.userAgent.match(/Trident/)){// Disable IE input" event prevention here, we want the input event from
// below to propagate normally.
this.__preventInput=!1}const inputEvent=new Event("input",{bubbles:!0,composed:!0});inputEvent.__fromClearButton=!0;const changeEvent=new Event("change",{bubbles:!this._slottedInput});changeEvent.__fromClearButton=!0;this.inputElement.dispatchEvent(inputEvent);this.inputElement.dispatchEvent(changeEvent)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){const dispatchChange=!!this.value;this.clear();dispatchChange&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}if(this._enabledCharPattern&&!this.__shouldAcceptKey(e)){e.preventDefault()}}__shouldAcceptKey(event){return event.metaKey||event.ctrlKey||!event.key// allow typing anything if event.key is not supported
||1!==event.key.length// allow "Backspace", "ArrowLeft" etc.
||this.__enabledCharRegExp.test(event.key)}_onPaste(e){if(this._enabledCharPattern){const pastedText=(e.clipboardData||window.clipboardData).getData("text");if(!this.__enabledTextRegExp.test(pastedText)){e.preventDefault()}}}_onDrop(e){if(this._enabledCharPattern){const draggedText=e.dataTransfer.getData("text");if(!this.__enabledTextRegExp.test(draggedText)){e.preventDefault()}}}_onBeforeInput(e){// The `beforeinput` event covers all the cases for `_enabledCharPattern`: keyboard, pasting and dropping,
// but it is still experimental technology so we can't rely on it. It's used here just as an additional check,
// because it seems to be the only way to detect and prevent specific keys on mobile devices. See issue #429.
if(this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)){e.preventDefault()}}__enabledCharPatternChanged(_enabledCharPattern){this.__enabledCharRegExp=_enabledCharPattern&&new RegExp("^"+_enabledCharPattern+"$");this.__enabledTextRegExp=_enabledCharPattern&&new RegExp("^"+_enabledCharPattern+"*$")}_addIEListeners(node){/* istanbul ignore if */if(navigator.userAgent.match(/Trident/)){// IE11 dispatches `input` event in following cases:
// - focus or blur, when placeholder attribute is set
// - placeholder attribute value changed
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
this._shouldPreventInput=()=>{this.__preventInput=!0;requestAnimationFrame(()=>{this.__preventInput=!1})};node.addEventListener("focusin",this._shouldPreventInput);node.addEventListener("focusout",this._shouldPreventInput);this._createPropertyObserver("placeholder",this._shouldPreventInput)}}_removeIEListeners(node){/* istanbul ignore if */if(navigator.userAgent.match(/Trident/)){node.removeEventListener("focusin",this._shouldPreventInput);node.removeEventListener("focusout",this._shouldPreventInput)}}_getActiveErrorId(invalid,errorMessage,errorId){this._setOrToggleAttribute("aria-describedby",errorMessage&&invalid?errorId:void 0,this.focusElement)}_getActiveLabelId(label,_labelId,_inputId){let ids=_inputId;if(label){ids=`${_labelId} ${_inputId}`}this.focusElement.setAttribute("aria-labelledby",ids)}_getErrorMessageAriaHidden(invalid,errorMessage,errorId){return(!(errorMessage&&invalid?errorId:void 0)).toString()}_dispatchIronResizeEventIfNeeded(sizePropertyName,value){const previousSizePropertyName="__previous"+sizePropertyName;if(this[previousSizePropertyName]!==void 0&&this[previousSizePropertyName]!==value){this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0}))}this[previousSizePropertyName]=value}__observeOffsetHeight(){this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}/**
     * @protected
     */attributeChangedCallback(prop,oldVal,newVal){super.attributeChangedCallback(prop,oldVal,newVal);// Needed until Edge has CSS Custom Properties (present in Edge Preview)
/* istanbul ignore if */if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)&&/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)){this.updateStyles()}// Safari has an issue with repainting shadow root element styles when a host attribute changes.
// Need this workaround (toggle any inline css property on and off) until the issue gets fixed.
const isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);/* istanbul ignore if */if(isSafari&&this.root){const WEBKIT_PROPERTY="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(el=>{el.style[WEBKIT_PROPERTY]="visible";el.style[WEBKIT_PROPERTY]=""})}}/**
     * Fired when the user commits a value change.
     *
     * @event change
     */ /**
         * Fired when the value is changed by the user: on every typing keystroke,
         * and the value is cleared using the clear button.
         *
         * @event input
         */ /**
             * Fired when the size of the element changes.
             *
             * @event iron-resize
             */};_exports.TextFieldMixin=TextFieldMixin;var vaadinTextFieldMixin={TextFieldMixin:TextFieldMixin};_exports.$vaadinTextFieldMixin=vaadinTextFieldMixin;class TextFieldElement extends ElementMixin(TextFieldMixin(ThemableMixin(_cureMe.PolymerElement))){static get template(){return _cureMe.html`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.5.4"}static get properties(){return{/**
       * Identifies a list of pre-defined options to suggest to the user.
       * The value must be the id of a <datalist> element in the same document.
       */list:{type:String},/**
       * A regular expression that the value is checked against.
       * The pattern must match the entire value, not just some subset.
       */pattern:{type:String},/**
       * The text usually displayed in a tooltip popup when the mouse is over the field.
       */title:{type:String}}}}_exports.TextFieldElement=TextFieldElement;customElements.define(TextFieldElement.is,TextFieldElement);var vaadinTextField={TextFieldElement:TextFieldElement};_exports.$vaadinTextField=vaadinTextField;class DatePickerElement extends ElementMixin(ControlStateMixin(ThemableMixin(ThemePropertyMixin(DatePickerMixin((0,_cureMe.GestureEventListeners)(_cureMe.PolymerElement)))))){static get template(){return _cureMe.html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>


    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" clear-button-visible="[[clearButtonVisible]]" aria-label\$="[[label]]" part="text-field" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`}static get is(){return"vaadin-date-picker"}static get version(){return"4.0.7"}static get properties(){return{/**
       * Set to true to display the clear icon which clears the input.
       */clearButtonVisible:{type:Boolean,value:!1},/**
       * Set to true to disable this element.
       */disabled:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * The error message to display when the input is invalid.
       */errorMessage:String,/**
       * A placeholder string in addition to the label. If this is set, the label will always float.
       */placeholder:String,/**
       * Set to true to make this element read-only.
       */readonly:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * This property is set to true when the control value invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_userInputValue:String}}static get observers(){return["_userInputValueChanged(_userInputValue)","_setClearButtonLabel(i18n.clear)"]}ready(){super.ready();// In order to have synchronized invalid property, we need to use the same validate logic.
(0,_cureMe.afterNextRender)(this,()=>this._inputElement.validate=()=>{});// FIXME(platosha): dispatch `input` event on
// <vaadin-text-field> clear button
// https://github.com/vaadin/vaadin-text-field/issues/347
this._inputElement.addEventListener("change",()=>{if(""===this._inputElement.value){this.__dispatchChange=!0;this.value="";this.validate();this.__dispatchChange=!1}})}_onVaadinOverlayClose(e){if(this._openedWithFocusRing&&this.hasAttribute("focused")){this.focusElement.setAttribute("focus-ring","")}else if(!this.hasAttribute("focused")){this.focusElement.blur()}if(e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)){e.preventDefault()}}_toggle(e){e.stopPropagation();this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_input(){return this.$.input}set _inputValue(value){this._inputElement.value=value}get _inputValue(){return this._inputElement.value}_getAriaExpanded(opened){return(!!opened).toString()}/**
     * Focussable element used by vaadin-control-state-mixin
     */get focusElement(){return this._input()||this}_setClearButtonLabel(i18nClear){// FIXME(platosha): expose i18n API in <vaadin-text-field>
// https://github.com/vaadin/vaadin-text-field/issues/348
this._inputElement.shadowRoot.querySelector("[part=\"clear-button\"]").setAttribute("aria-label",i18nClear)}}_exports.DatePickerElement=DatePickerElement;customElements.define(DatePickerElement.is,DatePickerElement);var vaadinDatePicker={DatePickerElement:DatePickerElement};_exports.$vaadinDatePicker=vaadinDatePicker;const $_documentContainer$f=_cureMe.html`<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        position: relative;
        background-color: transparent;
        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
        background-size: 57px 100%;
        background-position: top right;
        background-repeat: no-repeat;
        cursor: default;
      }

      /* Month scroller */

      [part="months"] {
        /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
        --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
        --vaadin-infinite-scroller-buffer-offset: 20%;
        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        position: relative;
        margin-right: 57px;
      }

      /* Year scroller */

      [part="years"] {
        /* TODO get rid of fixed magic number */
        --vaadin-infinite-scroller-buffer-width: 97px;
        width: 57px;
        height: auto;
        top: 0;
        bottom: 0;
        font-size: var(--lumo-font-size-s);
        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      }

      [part="year-number"],
      [part="year-separator"] {
        opacity: 0.5;
        transition: 0.2s opacity;
      }

      [part="years"]:hover [part="year-number"],
      [part="years"]:hover [part="year-separator"] {
        opacity: 1;
      }

      /* TODO unsupported selector */
      #scrollers {
        position: static;
        display: block;
      }

      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
      #scrollers[desktop] [part="months"] {
        right: auto;
      }

      /* Year scroller position indicator */
      [part="years"]::before {
        border: none;
        width: 1em;
        height: 1em;
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        transform: translate(-75%, -50%) rotate(45deg);
        border-top-right-radius: calc(var(--lumo-border-radius) / 2);
        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
        z-index: 1;
      }

      [part="year-number"],
      [part="year-separator"] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        transform: translateY(-50%);
      }

      [part="years"] [part="year-separator"]::after {
        color: var(--lumo-disabled-text-color);
        content: "•";
      }

      /* Current year */

      [part="years"] [part="year-number"][current] {
        color: var(--lumo-primary-text-color);
      }

      /* Toolbar (footer) */

      [part="toolbar"] {
        padding: var(--lumo-space-s);
        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
        border-bottom-left-radius: var(--lumo-border-radius);
        margin-right: 57px;
      }

      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
        [part="toolbar"] {
          box-shadow: none;
        }
      }

      /* Today and Cancel buttons */

      /* TODO: Would be great if I could apply the "tertiary" theme from here instead of copying those styles */
      [part="toolbar"] [part\$="button"] {
        background-color: transparent;
        margin: 0;
        min-width: 0;
        padding: 0 0.75em;
      }

      /* Narrow viewport mode (fullscreen) */

      :host([fullscreen]) [part="toolbar"] {
        order: -1;
        background-color: var(--lumo-base-color);
      }

      :host([fullscreen]) [part="overlay-header"] {
        order: -2;
        height: var(--lumo-size-m);
        padding: var(--lumo-space-s);
        position: absolute;
        left: 0;
        right: 0;
        justify-content: center;
      }

      :host([fullscreen]) [part="toggle-button"],
      :host([fullscreen]) [part="clear-button"],
      [part="overlay-header"] [part="label"] {
        display: none;
      }

      /* Very narrow screen (year scroller initially hidden) */

      [part="years-toggle-button"] {
        position: relative;
        right: auto;
        display: flex;
        align-items: center;
        height: var(--lumo-size-s);
        padding: 0 0.5em;
        border-radius: var(--lumo-border-radius);
        z-index: 3;
        color: var(--lumo-primary-text-color);
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([years-visible]) [part="years-toggle-button"] {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      [part="years-toggle-button"]::before {
        content: none;
      }

      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
      @media screen and (max-width: 374px) {
        :host {
          background-image: none;
        }

        [part="years"] {
          background-color: var(--lumo-shade-5pct);
        }

        [part="toolbar"],
        [part="months"] {
          margin-right: 0;
        }

        /* TODO make date-picker adapt to the width of the years part */
        [part="years"] {
          --vaadin-infinite-scroller-buffer-width: 90px;
          width: 50px;
        }

        :host([years-visible]) [part="months"] {
          padding-left: 50px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$f.content);const $_documentContainer$g=_cureMe.html`<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="lumo-menu-overlay">
      [part="overlay"] {
        /*
        Width:
            date cell widths
          + month calendar side padding
          + year scroller width
        */
        width:
          calc(
              var(--lumo-size-m) * 7
            + var(--lumo-space-xs) * 2
            + 57px
          );
        height: 100%;
        max-height: calc(var(--lumo-size-m) * 14);
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      [part="overlay"] {
        flex-direction: column;
      }

      [part="content"] {
        padding: 0;
        height: 100%;
        overflow: hidden;
        -webkit-mask-image: none;
        mask-image: none;
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay"] {
          width: 100vw;
          height: 70vh;
          max-height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$g.content);const $_documentContainer$h=document.createElement("template");$_documentContainer$h.innerHTML=`<dom-module id="lumo-field-button">
  <template>
    <style>
      [part\$="button"] {
        flex: none;
        width: 1em;
        height: 1em;
        line-height: 1;
        font-size: var(--lumo-icon-size-m);
        text-align: center;
        color: var(--lumo-contrast-60pct);
        transition: 0.2s color;
        cursor: var(--lumo-clickable-cursor);
      }

      :host(:not([readonly])) [part\$="button"]:hover {
        color: var(--lumo-contrast-90pct);
      }

      :host([disabled]) [part\$="button"],
      :host([readonly]) [part\$="button"] {
        color: var(--lumo-contrast-20pct);
      }

      [part\$="button"]::before {
        font-family: "lumo-icons";
        display: block;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$h.content);const $_documentContainer$i=document.createElement("template");$_documentContainer$i.innerHTML=`<dom-module id="lumo-required-field">
  <template>
    <style>
      [part="label"] {
        align-self: flex-start;
        color: var(--lumo-secondary-text-color);
        font-weight: 500;
        font-size: var(--lumo-font-size-s);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
        line-height: 1;
        padding-bottom: 0.5em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        max-width: 100%;
        box-sizing: border-box;
      }

      :host([has-label])::before {
        margin-top: calc(var(--lumo-font-size-s) * 1.5);
      }

      :host([has-label]) {
        padding-top: var(--lumo-space-m);
      }

      :host([required]) [part="label"] {
        padding-right: 1em;
      }

      [part="label"]::after {
        content: var(--lumo-required-field-indicator, "•");
        transition: opacity 0.2s;
        opacity: 0;
        color: var(--lumo-primary-text-color);
        position: absolute;
        right: 0;
        width: 1em;
        text-align: center;
      }

      :host([required]:not([has-value])) [part="label"]::after {
        opacity: 1;
      }

      :host([invalid]) [part="label"]::after {
        color: var(--lumo-error-text-color);
      }

      [part="error-message"] {
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        color: var(--lumo-error-text-color);
        will-change: max-height;
        transition: 0.4s max-height;
        max-height: 5em;
      }

      /* Margin that doesn’t reserve space when there’s no error message */
      [part="error-message"]:not(:empty)::before,
      [part="error-message"]:not(:empty)::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host(:not([invalid])) [part="error-message"] {
        max-height: 0;
        overflow: hidden;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="label"] {
        margin-left: 0;
        margin-right: calc(var(--lumo-border-radius-m) / 4);
      }

      :host([required][dir="rtl"]) [part="label"] {
        padding-left: 1em;
        padding-right: 0;
      }

      :host([dir="rtl"]) [part="label"]::after {
        right: auto;
        left: 0;
      }

      :host([dir="rtl"]) [part="error-message"] {
        margin-left: 0;
        margin-right: calc(var(--lumo-border-radius-m) / 4);
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$i.content);const $_documentContainer$j=_cureMe.html`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      :host([focused]) [part="input-field"] ::slotted(input),
      :host([focused]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$j.content);const $_documentContainer$k=_cureMe.html`<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-calendar);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay-content"] {
          height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$k.content);const $_documentContainer$l=_cureMe.html`<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        font-size: var(--lumo-font-size-m);
        color: var(--lumo-body-text-color);
        text-align: center;
        padding: 0 var(--lumo-space-xs);
      }

      /* Month header */

      [part="month-header"] {
        color: var(--lumo-header-text-color);
        font-size: var(--lumo-font-size-l);
        line-height: 1;
        font-weight: 500;
        margin-bottom: var(--lumo-space-m);
      }

      /* Week days and numbers */

      [part="weekdays"],
      [part="weekday"],
      [part="week-numbers"] {
        font-size: var(--lumo-font-size-xs);
        line-height: 1;
        color: var(--lumo-tertiary-text-color);
      }

      [part="weekdays"] {
        margin-bottom: var(--lumo-space-s);
      }

      /* TODO should have part="week-number" for the cell in weekdays-container */
      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: var(--lumo-size-xs);
      }

      /* Date and week number cells */

      [part="date"],
      [part="week-number"] {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--lumo-size-m);
        position: relative;
      }

      [part="date"] {
        transition: color 0.1s;
      }

      /* Today date */

      [part="date"][today] {
        color: var(--lumo-primary-text-color);
      }

      /* Focused date */

      [part="date"]::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 2em;
        min-height: 2em;
        width: 80%;
        height: 80%;
        max-height: 100%;
        max-width: 100%;
        border-radius: var(--lumo-border-radius);
      }

      [part="date"][focused]::before {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      :host(:not([focused])) [part="date"][focused]::before {
        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
      }

      @keyframes vaadin-date-picker-month-calendar-focus-date {
        50% {
          box-shadow: 0 0 0 2px transparent;
        }
      }

      /* TODO should not rely on the role attribute */
      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {
        background-color: var(--lumo-primary-color-10pct);
      }

      [part="date"][selected] {
        color: var(--lumo-primary-contrast-color);
      }

      [part="date"][selected]::before {
        background-color: var(--lumo-primary-color);
      }

      [part="date"][disabled] {
        color: var(--lumo-disabled-text-color);
      }

      @media (pointer: coarse) {
        [part="date"]:hover:not([selected])::before,
        [part="date"][focused]:not([selected])::before {
          display: none;
        }

        [part="date"][role="button"]:not([disabled]):active::before {
          display: block;
        }

        [part="date"][selected]::before {
          box-shadow: none;
        }
      }

      /* Disabled */

      :host([disabled]) * {
        color: var(--lumo-disabled-text-color) !important;
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$l.content);const ListMixin=superClass=>class VaadinListMixin extends superClass{static get properties(){return{/**
       * Used for mixin detection because `instanceof` does not work with mixins.
       */_hasVaadinListMixin:{value:!0},/**
       * The index of the item selected in the items array.
       * Note: Not updated when used in `multiple` selection mode.
       */selected:{type:Number,reflectToAttribute:!0,notify:!0},/**
       * Define how items are disposed in the dom.
       * Possible values are: `horizontal|vertical`.
       * It also changes navigation keys from left/right to up/down.
       */orientation:{type:String,reflectToAttribute:!0,value:""},/**
       * The list of items from which a selection can be made.
       * It is populated from the elements passed to the light DOM,
       * and updated dynamically when adding or removing items.
       *
       * The item elements must implement `Vaadin.ItemMixin`.
       *
       * Note: unlike `<vaadin-combo-box>`, this property is read-only,
       * so if you want to provide items by iterating array of data,
       * you have to use `dom-repeat` and place it to the light DOM.
       */items:{type:Array,readOnly:!0,notify:!0},/**
       * The search buffer for the keyboard selection feature.
       */_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready();this.addEventListener("keydown",e=>this._onKeydown(e));this.addEventListener("click",e=>this._onClick(e));this._observer=new _cureMe.FlattenedNodesObserver(this,info=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(items,orientation,selected,disabled){if(!disabled){if(items){this.setAttribute("aria-orientation",orientation||"vertical");this.items.forEach(item=>{orientation?item.setAttribute("orientation",orientation):item.removeAttribute("orientation");item.updateStyles()});this._setFocusable(selected);const itemToSelect=items[selected];items.forEach(item=>item.selected=item===itemToSelect);if(itemToSelect&&!itemToSelect.disabled){this._scrollToItem(selected)}}}}get focused(){return this.getRootNode().activeElement}_filterItems(array){return array.filter(e=>e._hasVaadinItemMixin)}_onClick(event){if(event.metaKey||event.shiftKey||event.ctrlKey||event.defaultPrevented){return}const item=this._filterItems(event.composedPath())[0];let idx;if(item&&!item.disabled&&0<=(idx=this.items.indexOf(item))){this.selected=idx}}_searchKey(currentIdx,key){this._searchReset=_cureMe.Debouncer.debounce(this._searchReset,_cureMe.timeOut.after(500),()=>this._searchBuf="");this._searchBuf+=key.toLowerCase();const increment=1,condition=item=>!item.disabled&&0===item.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf);if(!this.items.some(item=>0===item.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))){this._searchBuf=key.toLowerCase()}const idx=1===this._searchBuf.length?currentIdx+1:currentIdx;return this._getAvailableIndex(idx,increment,condition)}_onKeydown(event){if(event.metaKey||event.ctrlKey){return}// IE names for arrows do not include the Arrow prefix
const key=event.key.replace(/^Arrow/,""),currentIdx=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(key)&&1===key.length){const idx=this._searchKey(currentIdx,key);if(0<=idx){this._focus(idx)}return}const condition=item=>!item.disabled;let idx,increment;if(this._vertical&&"Up"===key||!this._vertical&&"Left"===key){increment=-1;idx=currentIdx-1}else if(this._vertical&&"Down"===key||!this._vertical&&"Right"===key){increment=1;idx=currentIdx+1}else if("Home"===key){increment=1;idx=0}else if("End"===key){increment=-1;idx=this.items.length-1}idx=this._getAvailableIndex(idx,increment,condition);if(0<=idx){this._focus(idx);event.preventDefault()}}_getAvailableIndex(idx,increment,condition){const totalItems=this.items.length;for(let i=0;"number"==typeof idx&&i<totalItems;i++,idx+=increment||1){if(0>idx){idx=totalItems-1}else if(idx>=totalItems){idx=0}const item=this.items[idx];if(condition(item)){return idx}}return-1}_setFocusable(idx){idx=this._getAvailableIndex(idx,1,item=>!item.disabled);const item=this.items[idx]||this.items[0];this.items.forEach(e=>e.tabIndex=e===item?0:-1)}_focus(idx){const item=this.items[idx];this.items.forEach(e=>e.focused=e===item);this._setFocusable(idx);this._scrollToItem(idx);item.focus()}focus(){// In initialisation (e.g vaadin-select) observer might not been run yet.
this._observer&&this._observer.flush();const firstItem=this.querySelector("[tabindex=\"0\"]")||(this.items?this.items[0]:null);firstItem&&firstItem.focus()}/* @protected */get _scrollerElement(){}// Returning scroller element of the component
// Scroll the container to have the next item by the edge of the viewport
_scrollToItem(idx){const item=this.items[idx];if(!item){return}const props=this._vertical?["top","bottom"]:["left","right"],scrollerRect=this._scrollerElement.getBoundingClientRect(),nextItemRect=(this.items[idx+1]||item).getBoundingClientRect(),prevItemRect=(this.items[idx-1]||item).getBoundingClientRect();let scrollDistance=0;if(nextItemRect[props[1]]>=scrollerRect[props[1]]){scrollDistance=nextItemRect[props[1]]-scrollerRect[props[1]]}else if(prevItemRect[props[0]]<=scrollerRect[props[0]]){scrollDistance=prevItemRect[props[0]]-scrollerRect[props[0]]}this._scroll(scrollDistance)}/* @protected */get _vertical(){return"horizontal"!==this.orientation}_scroll(pixels){this._scrollerElement["scroll"+(this._vertical?"Top":"Left")]+=pixels}/**
     * Fired when the selection is changed.
     * Not fired when used in `multiple` selection mode.
     *
     * @event selected-changed
     * @param {Object} detail
     * @param {Object} detail.value the index of the item selected in the items array.
     */};_exports.ListMixin=ListMixin;var vaadinListMixin={ListMixin:ListMixin};_exports.$vaadinListMixin=vaadinListMixin;const MultiSelectListMixin=superClass=>class VaadinMultiSelectListMixin extends ListMixin(superClass){static get properties(){return{/**
       * Specifies that multiple options can be selected at once.
       */multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},/**
       * Array of indexes of the items selected in the items array
       * Note: Not updated when used in single selection mode.
       */selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return[`_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)`]}ready(){// Should be attached before click listener in list-mixin
this.addEventListener("click",e=>this._onMultipleClick(e));super.ready()}_enhanceMultipleItems(items,multiple,selected,selectedValues){if(!items||!multiple){return}if(selectedValues){const selectedItems=selectedValues.map(selectedId=>items[selectedId]);items.forEach(item=>item.selected=-1!==selectedItems.indexOf(item))}const lastSelectedItem=this.selectedValues.slice(-1)[0];if(lastSelectedItem&&!lastSelectedItem.disabled){this._scrollToItem(lastSelectedItem)}}_onMultipleClick(event){const item=this._filterItems(event.composedPath())[0],idx=item&&!item.disabled?this.items.indexOf(item):-1;if(0>idx||!this.multiple){return}event.preventDefault();if(-1!==this.selectedValues.indexOf(idx)){this.selectedValues=this.selectedValues.filter(v=>v!==idx)}else{this.selectedValues=this.selectedValues.concat(idx)}}_multipleChanged(value,oldValue){// Changing from multiple to single selection, clear selection.
if(!value&&oldValue){this.selectedValues=[];this.items.forEach(item=>item.selected=!1)}// Changing from single to multiple selection, add selected to selectedValues.
if(value&&!oldValue&&this.selected!==void 0){this.push("selectedValues",this.selected);this.selected=void 0}}/**
     * Fired when the selection is changed.
     * Not fired in single selection mode.
     *
     * @event selected-values-changed
     * @param {Object} detail
     * @param {Object} detail.value the array of indexes of the items selected in the items array.
     */};_exports.MultiSelectListMixin=MultiSelectListMixin;var vaadinMultiSelectListMixin={MultiSelectListMixin:MultiSelectListMixin};_exports.$vaadinMultiSelectListMixin=vaadinMultiSelectListMixin;class ListBoxElement extends ElementMixin(MultiSelectListMixin(ThemableMixin(_cureMe.PolymerElement))){static get template(){return _cureMe.html`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-list-box"}static get version(){return"1.2.0"}static get properties(){return{// We don't need to define this property since super default is vertical,
// but we don't want it to be modified, or be shown in the API docs.
/** @private */orientation:{readOnly:!0}}}constructor(){super();/** @protected */this.focused}ready(){super.ready();this.setAttribute("role","list");setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector("[part=\"items\"]")}_checkImport(){var item=this.querySelector("vaadin-item");if(item&&!(item instanceof _cureMe.PolymerElement)){console.warn(`Make sure you have imported the vaadin-item element.`)}}}_exports.ListBoxElement=ListBoxElement;customElements.define(ListBoxElement.is,ListBoxElement);var vaadinListBox={ListBoxElement:ListBoxElement};_exports.$vaadinListBox=vaadinListBox;const $_documentContainer$m=_cureMe.html`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
      }

      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */
      [part="items"] {
        display: flex;
        flex-direction: column;
      }

      [part="items"] ::slotted(*) {
        flex: none;
      }

      /* Normal item */

      [part="items"] ::slotted(vaadin-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(vaadin-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(vaadin-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      [part="items"] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
          background-color: transparent;
        }

        [part="items"] ::slotted([focus-ring]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* Easily add section dividers */

      [part="items"] ::slotted(hr) {
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$m.content);const $_documentContainer$n=document.createElement("template");$_documentContainer$n.innerHTML=`<dom-module id="vaadin-select-overlay-styles" theme-for="vaadin-select-overlay">
  <template>
    <style>
      :host {
        align-items: flex-start;
        justify-content: flex-start;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$n.content);/**
                                                          * The overlay element.
                                                          *
                                                          * ### Styling
                                                          *
                                                          * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
                                                          * for `<vaadin-select-overlay>` parts.
                                                          *
                                                          * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
                                                          *
                                                          * @memberof Vaadin
                                                          */class SelectOverlayElement extends OverlayElement{static get is(){return"vaadin-select-overlay"}}customElements.define(SelectOverlayElement.is,SelectOverlayElement);let memoizedTemplate;/**
                        * The text-field element.
                        *
                        * ### Styling
                        *
                        * See [`<vaadin-text-field>` documentation](https://github.com/vaadin/vaadin-text-field/blob/master/src/vaadin-text-field.html)
                        * for `<vaadin-select-text-field>` parts and available slots (prefix, suffix etc.)
                        *
                        * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
                        *
                        * @memberof Vaadin
                        */class SelectTextFieldElement extends TextFieldElement{static get is(){return"vaadin-select-text-field"}static get template(){// Check if text-field is using slotted input
if(super.template.content.querySelector("slot[name=\"input\"]")){return super.template}if(!memoizedTemplate){// Clone the superclass template
memoizedTemplate=super.template.cloneNode(!0);// Create a slot for the value element
const slot=document.createElement("slot");slot.setAttribute("name","value");// Insert the slot before the text-field
const input=memoizedTemplate.content.querySelector("input");input.parentElement.replaceChild(slot,input);slot.appendChild(input)}return memoizedTemplate}get focusElement(){return this.shadowRoot.querySelector("[part=input-field]")}get inputElement(){return this.shadowRoot.querySelector("input")}}customElements.define(SelectTextFieldElement.is,SelectTextFieldElement);const $_documentContainer$o=document.createElement("template");$_documentContainer$o.innerHTML=`<custom-style>
  <style>
    @font-face {
      font-family: "vaadin-select-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASEAAsAAAAABDgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGKmNtYXAAAAFoAAAAVAAAAFQXVtKHZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAHwAAAB8CohkJ2hlYWQAAAJAAAAANgAAADYOavgEaGhlYQAAAngAAAAkAAAAJAarA8ZobXR4AAACnAAAABQAAAAUCAABP2xvY2EAAAKwAAAADAAAAAwAKABSbWF4cAAAArwAAAAgAAAAIAAHABduYW1lAAAC3AAAAYYAAAGGmUoJ+3Bvc3QAAARkAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QADwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkA//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQE/AUAC6QIVABQAAAEwFx4BFxYxMDc+ATc2MTAjKgEjIgE/ISJPIiEhIk8iIUNCoEJDAhUhIk8iISEiTyIhAAEAAAABAABvL5bdXw889QALBAAAAAAA1jHaeQAAAADWMdp5AAAAAALpAhUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAukAAQAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAABAABPwAAAAAACgAUAB4APgABAAAABQAVAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$o.content);/**
                                                          *
                                                          * `<vaadin-select>` is a Web Component for selecting values from a list of items. The content of the
                                                          * the select can be populated in two ways: imperatively by using renderer callback function and
                                                          * declaratively by using Polymer's Templates.
                                                          *
                                                          * ### Rendering
                                                          *
                                                          * By default, the select uses the content provided by using the renderer callback function.
                                                          *
                                                          * The renderer function provides `root`, `select` arguments.
                                                          * Generate DOM content, append it to the `root` element and control the state
                                                          * of the host element by accessing `select`.
                                                          *
                                                          * ```html
                                                          * <vaadin-select id="select"></vaadin-select>
                                                          * ```
                                                          * ```js
                                                          * const select = document.querySelector('#select');
                                                          * select.renderer = function(root, select) {
                                                          *   const listBox = document.createElement('vaadin-list-box');
                                                          *   // append 3 <vaadin-item> elements
                                                          *   ['Jose', 'Manolo', 'Pedro'].forEach(function(name) {
                                                          *     const item = document.createElement('vaadin-item');
                                                          *     item.textContent = name;
                                                          *     listBox.appendChild(item);
                                                          *   });
                                                          *
                                                          *   // update the content
                                                          *   root.appendChild(listBox);
                                                          * };
                                                          * ```
                                                          *
                                                          * Renderer is called on initialization of new select and on its opening.
                                                          * DOM generated during the renderer call can be reused
                                                          * in the next renderer call and will be provided with the `root` argument.
                                                          * On first call it will be empty.
                                                          *
                                                          * ### Polymer Templates
                                                          *
                                                          * Alternatively, the content can be provided with Polymer's Template.
                                                          * Select finds the first child template and uses that in case renderer callback function
                                                          * is not provided. You can also set a custom template using the `template` property.
                                                          *
                                                          * ```
                                                          * <vaadin-select>
                                                          *   <template>
                                                          *     <vaadin-list-box>
                                                          *       <vaadin-item label="foo">Foo</vaadin-item>
                                                          *       <vaadin-item>Bar</vaadin-item>
                                                          *       <vaadin-item>Baz</vaadin-item>
                                                          *     </vaadin-list-box>
                                                          *   </template>
                                                          * </vaadin-select>
                                                          * ```
                                                          *
                                                          * Hint: By setting the `label` property of inner vaadin-items you will
                                                          * be able to change the visual representation of the selected value in the input part.
                                                          *
                                                          * ### Styling
                                                          *
                                                          * The following shadow DOM parts are available for styling:
                                                          *
                                                          * Part name | Description
                                                          * ----------------|----------------
                                                          * `toggle-button` | The toggle button
                                                          *
                                                          * The following state attributes are available for styling:
                                                          *
                                                          * Attribute    | Description | Part name
                                                          * -------------|-------------|------------
                                                          * `opened` | Set when the select is open | :host
                                                          * `invalid` | Set when the element is invalid | :host
                                                          * `focused` | Set when the element is focused | :host
                                                          * `focus-ring` | Set when the element is keyboard focused | :host
                                                          * `readonly` | Set when the select is read only | :host
                                                          *
                                                          * `<vaadin-select>` element sets these custom CSS properties:
                                                          *
                                                          * Property name | Description | Theme for element
                                                          * --- | --- | ---
                                                          * `--vaadin-select-text-field-width` | Width of the select text field | `vaadin-select-overlay`
                                                          *
                                                          * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
                                                          *
                                                          * In addition to `<vaadin-select>` itself, the following internal
                                                          * components are themable:
                                                          *
                                                          * - `<vaadin-select-text-field>`
                                                          * - `<vaadin-select-overlay>`
                                                          *
                                                          * Note: the `theme` attribute value set on `<vaadin-select>` is
                                                          * propagated to the internal themable components listed above.
                                                          *
                                                          * @memberof Vaadin
                                                          * @mixes Vaadin.ElementMixin
                                                          * @mixes Vaadin.ControlStateMixin
                                                          * @mixes Vaadin.ThemableMixin
                                                          * @mixes Vaadin.ThemePropertyMixin
                                                          * @demo demo/index.html
                                                          */class SelectElement extends ElementMixin(ControlStateMixin(ThemableMixin(ThemePropertyMixin((0,_cureMe.mixinBehaviors)(_cureMe.IronResizableBehavior,_cureMe.PolymerElement))))){static get template(){return _cureMe.html`
    <style>
      :host {
        display: inline-block;
      }

      vaadin-select-text-field {
        width: 100%;
        min-width: 0;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="toggle-button"] {
        font-family: "vaadin-select-icons";
      }

      [part="toggle-button"]::before {
        content: "\\e900";
      }
    </style>

    <vaadin-select-text-field placeholder="[[placeholder]]" label="[[label]]" required="[[required]]" invalid="[[invalid]]" error-message="[[errorMessage]]" readonly\$="[[readonly]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="value"></div>
      <div part="toggle-button" slot="suffix" role="button" aria-haspopup="listbox" aria-label="Toggle"></div>
    </vaadin-select-text-field>
    <vaadin-select-overlay opened="{{opened}}" with-backdrop="[[_phone]]" phone\$="[[_phone]]" theme\$="[[theme]]"></vaadin-select-overlay>

    <iron-media-query query="[[_phoneMediaQuery]]" query-matches="{{_phone}}"></iron-media-query>
`}static get is(){return"vaadin-select"}static get version(){return"2.1.7"}static get properties(){return{/**
       * Set when the select is open
       */opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},/**
       * Custom function for rendering the content of the `<vaadin-select>`.
       * Receives two arguments:
       *
       * - `root` The `<vaadin-select-overlay>` internal container
       *   DOM element. Append your content to it.
       * - `select` The reference to the `<vaadin-select>` element.
       */renderer:Function,/**
       * The error message to display when the select value is invalid
       */errorMessage:{type:String,value:""},/**
       * String used for the label element.
       */label:{type:String},/**
       * It stores the the `value` property of the selected item, providing the
       * value for iron-form.
       * When there’s an item selected, it's the value of that item, otherwise
       * it's an empty string.
       * On change or initialization, the component finds the item which matches the
       * value and displays it.
       * If no value is provided to the component, it selects the first item without
       * value or empty value.
       * Hint: If you do not want to select any item by default, you can either set all
       * the values of inner vaadin-items, or set the vaadin-select value to
       * an inexistent value in the items list.
       */value:{type:String,value:"",notify:!0,observer:"_valueChanged"},/**
       * The current required state of the select. True if required.
       */required:{type:Boolean,reflectToAttribute:!0,observer:"_requiredChanged"},/**
       * Set to true if the value is invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},/**
       * The name of this element.
       */name:{type:String,reflectToAttribute:!0},/**
       * A hint to the user of what can be entered in the control.
       * The placeholder will be displayed in the case that there
       * is no item selected, or the selected item has an empty
       * string label, or the selected item has no label and it's
       * DOM content is empty.
       */placeholder:{type:String},/**
       * When present, it specifies that the element is read-only.
       */readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputElement:Object,_toggleElement:Object,_items:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_updateSelectedItem(value, _items)","_updateAriaExpanded(opened, _toggleElement, _inputElement)","_templateOrRendererChanged(_contentTemplate, renderer, _overlayElement)"]}/** @private */constructor(){super();this._boundSetPosition=this._setPosition.bind(this)}/** @private */connectedCallback(){super.connectedCallback();this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready();this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay");this._valueElement=this.shadowRoot.querySelector("[part=\"value\"]");this._toggleElement=this.shadowRoot.querySelector("[part=\"toggle-button\"]");this._nativeInput=this.focusElement.shadowRoot.querySelector("input");this._nativeInput.setAttribute("aria-hidden",!0);this._nativeInput.setAttribute("tabindex",-1);this._nativeInput.style.pointerEvents="none";this.focusElement.addEventListener("click",e=>this.opened=!this.readonly);this.focusElement.addEventListener("keydown",e=>this._onKeyDown(e));this._observer=new _cureMe.FlattenedNodesObserver(this,info=>this._setTemplateFromNodes(info.addedNodes));this._observer.flush()}_setTemplateFromNodes(nodes){const template=Array.from(nodes).filter(node=>node.localName&&"template"===node.localName)[0]||this._contentTemplate;this._overlayElement.template=this._contentTemplate=template;this._setForwardHostProps()}_setForwardHostProps(){if(this._overlayElement.content){const origForwardHostProp=this._overlayElement._instance&&this._overlayElement._instance.forwardHostProp;if(this._overlayElement._instance){this._overlayElement._instance.forwardHostProp=(...args)=>{origForwardHostProp.apply(this._overlayElement._instance,args);setTimeout(()=>{this._updateValueSlot()})};this._assignMenuElement()}}}/**
     * Manually invoke existing renderer.
     */render(){this._overlayElement.render();if(this._menuElement&&this._menuElement.items){this._updateSelectedItem(this.value,this._menuElement.items)}}_removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this._contentTemplate=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}_templateOrRendererChanged(template,renderer,overlay){if(!overlay){return}if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for select content")}this._oldTemplate=template;this._oldRenderer=renderer;if(renderer){overlay.setProperties({owner:this,renderer:renderer});this.render();if(overlay.content.firstChild){this._assignMenuElement()}}}_assignMenuElement(){this._menuElement=Array.from(this._overlayElement.content.children).filter(element=>"style"!==element.localName)[0];if(this._menuElement){this._menuElement.addEventListener("items-changed",e=>{this._items=this._menuElement.items;this._items.forEach(item=>item.setAttribute("role","option"))});this._menuElement.addEventListener("selected-changed",e=>this._updateValueSlot());this._menuElement.addEventListener("keydown",e=>this._onKeyDownInside(e));this._menuElement.addEventListener("click",e=>{this.__userInteraction=!0;this.opened=!1},!0);this._menuElement.setAttribute("role","listbox")}}/** @protected */get focusElement(){return this._inputElement||(this._inputElement=this.shadowRoot.querySelector("vaadin-select-text-field"))}/** @private */disconnectedCallback(){super.disconnectedCallback();this.removeEventListener("iron-resize",this._boundSetPosition);// Making sure the select is closed and removed from DOM after detaching the select.
this.opened=!1}/** @private */notifyResize(){super.notifyResize();if(this.positionTarget&&this.opened){this._setPosition();// Schedule another position update (to cover virtual keyboard opening for example)
requestAnimationFrame(this._setPosition.bind(this))}}_requiredChanged(required){this.setAttribute("aria-required",required)}_valueChanged(value,oldValue){if(""===value){this.focusElement.removeAttribute("has-value")}else{this.focusElement.setAttribute("has-value","")}// Skip validation for the initial empty string value
if(""===value&&oldValue===void 0){return}this.validate()}_onKeyDown(e){if(!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(e.key)){e.preventDefault();this.opened=!0}else if(/[a-zA-Z0-9]/.test(e.key)&&1===e.key.length){const selected=this._menuElement.selected,currentIdx=selected!==void 0?selected:-1,newIdx=this._menuElement._searchKey(currentIdx,e.key);if(0<=newIdx){this.__userInteraction=!0;this._updateSelectedItem(this._items[newIdx].value,this._items)}}}}_onKeyDownInside(e){if(/^(Tab)$/.test(e.key)){this.opened=!1}}_openedChanged(opened,wasOpened){if(opened){if(!this._overlayElement||!this._menuElement||!this._toggleElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement.hasAttribute("focus-ring");this._menuElement.focus();this._setPosition();window.addEventListener("scroll",this._boundSetPosition,!0)}else if(wasOpened){if(this._phone){this._setFocused(!1)}else{this.focusElement.focus();if(this._openedWithFocusRing){this.focusElement.setAttribute("focus-ring","")}}this.validate();window.removeEventListener("scroll",this._boundSetPosition,!0)}}_hasContent(selected){if(!selected){return!1}return!!(selected.hasAttribute("label")?selected.getAttribute("label"):selected.textContent.trim()||selected.children.length)}_attachSelectedItem(selected){if(!selected){return}let labelItem;if(selected.hasAttribute("label")){labelItem=document.createElement("vaadin-item");labelItem.textContent=selected.getAttribute("label")}else{labelItem=selected.cloneNode(!0)}// store reference to the original item
labelItem._sourceItem=selected;labelItem.removeAttribute("tabindex");labelItem.removeAttribute("role");this._valueElement.appendChild(labelItem);labelItem.selected=!0}_updateAriaExpanded(opened,toggleElement,inputElement){toggleElement&&toggleElement.setAttribute("aria-expanded",opened);if(inputElement&&inputElement.focusElement){inputElement.focusElement.setAttribute("aria-expanded",opened)}}_updateValueSlot(){this.opened=!1;this._valueElement.innerHTML="";const selected=this._items[this._menuElement.selected],hasContent=this._hasContent(selected),slotName=this._inputElement.shadowRoot.querySelector("slot[name=\"input\"]")?"input":"value";// Toggle visibility of _valueElement vs fallback input with placeholder
this._valueElement.slot=hasContent?slotName:"";// Ensure the slot distribution to apply correct style scope for cloned item
if(hasContent&&window.ShadyDOM){window.ShadyDOM.flush()}this._attachSelectedItem(selected);if(!this._valueChanging&&selected){this._selectedChanging=!0;this.value=selected.value||"";if(this.__userInteraction){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}));this.__userInteraction=!1}delete this._selectedChanging}}_updateSelectedItem(value,items){if(items){this._menuElement.selected=items.reduce((prev,item,idx)=>{return prev===void 0&&item.value===value?idx:prev},void 0);if(!this._selectedChanging){this._valueChanging=!0;this._updateValueSlot();delete this._valueChanging}}}/** @override */_setFocused(focused){// Keep `focused` state when opening the overlay for styling purpose.
super._setFocused(this.opened||focused);this.focusElement._setFocused(this.hasAttribute("focused"));this.hasAttribute("focused")||this.validate()}_setPosition(){const inputRect=this._inputElement.shadowRoot.querySelector("[part~=\"input-field\"]").getBoundingClientRect(),viewportHeight=Math.min(window.innerHeight,document.documentElement.clientHeight),bottomAlign=inputRect.top>(viewportHeight-inputRect.height)/2;this._overlayElement.style.left=inputRect.left+"px";if(bottomAlign){this._overlayElement.setAttribute("bottom-aligned","");this._overlayElement.style.removeProperty("top");this._overlayElement.style.bottom=viewportHeight-inputRect.bottom+"px"}else{this._overlayElement.removeAttribute("bottom-aligned");this._overlayElement.style.removeProperty("bottom");this._overlayElement.style.top=inputRect.top+"px"}this._overlayElement.updateStyles({"--vaadin-select-text-field-width":inputRect.width+"px"})}/**
     * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
     *
     * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
     */validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}/**
     * Fired when the user commits a value change.
     *
     * @event change
     */}_exports.SelectElement=SelectElement;customElements.define(SelectElement.is,SelectElement);var vaadinSelect={SelectElement:SelectElement};_exports.$vaadinSelect=vaadinSelect;const $_documentContainer$p=_cureMe.html`<dom-module id="lumo-select" theme-for="vaadin-select">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [selected] {
        padding-left: 0;
        padding-right: 0;
        flex: auto;
      }

      :host([theme~="small"]) [selected] {
        padding: 0;
        min-height: var(--lumo-size-s);
      }

      :host([theme~="align-right"]) [selected] {
        text-align: right;
      }

      :host([theme~="align-center"]) [selected] {
        text-align: center;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }

      /* Highlight the toggle button when hovering over the entire component */
      :host(:hover:not([readonly]):not([disabled])) [part="toggle-button"] {
        color: var(--lumo-contrast-80pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-text-field" theme-for="vaadin-select-text-field">
  <template>
    <style>
      :host([theme~="align-center"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) ::slotted([part~="value"]) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }

      [part="input-field"] {
        cursor: default;
      }

      [part="input-field"] ::slotted([part="value"]) {
        display: flex;
      }

      /* ShadyCSS limitation workaround */
      [part="input-field"] ::slotted([part="value"]) [selected]::before {
        display: none;
      }

      [part="input-field"]:focus {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-select-overlay" theme-for="vaadin-select-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host {
        --_lumo-item-selected-icon-display: block;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      [part~="overlay"] {
        min-width: var(--vaadin-select-text-field-width);
      }

      /* Small viewport adjustment */
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

      :host([theme~="align-right"]) {
        text-align: right;
      }

      :host([theme~="align-center"]) {
        text-align: center;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$p.content);class TimePickerTextFieldElement extends TextFieldElement{static get is(){return"vaadin-time-picker-text-field"}}customElements.define(TimePickerTextFieldElement.is,TimePickerTextFieldElement);class TimePickerElement extends ElementMixin(ControlStateMixin(ThemableMixin(ThemePropertyMixin(_cureMe.PolymerElement)))){static get template(){return _cureMe.html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part~="toggle-button"] {
        cursor: pointer;
      }

      .input {
        width: 100%;
        min-width: 0;
      }
    </style>
    <vaadin-combo-box-light allow-custom-value="" item-label-path="value" filtered-items="[[__dropdownItems]]" disabled="[[disabled]]" readonly="[[readonly]]" theme\$="[[theme]]">
      <template>
        [[item.label]]
      </template>
      <vaadin-time-picker-text-field class="input" name="[[name]]" invalid="[[invalid]]" autocomplete="off" label="[[label]]" required="[[required]]" disabled="[[disabled]]" prevent-invalid-input="[[preventInvalidInput]]" pattern="[[pattern]]" error-message="[[errorMessage]]" autofocus="[[autofocus]]" placeholder="[[placeholder]]" readonly="[[readonly]]" role="application" aria-live="assertive" min\$="[[min]]" max\$="[[max]]" aria-label\$="[[label]]" clear-button-visible="[[clearButtonVisible]]" i18n="[[i18n]]" theme\$="[[theme]]">
        <span slot="suffix" part="toggle-button" role="button" aria-label\$="[[i18n.selector]]"></span>
      </vaadin-time-picker-text-field>
    </vaadin-combo-box-light>
`}static get is(){return"vaadin-time-picker"}static get version(){return"2.0.5"}static get properties(){return{/**
       * The name of this element.
       */name:{type:String},/**
       * The time value for this element.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm` (default)
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       */value:{type:String,observer:"__valueChanged",notify:!0,value:""},/**
       * The label for this element.
       */label:{type:String,reflectToAttribute:!0},/**
       * Set to true to mark the input as required.
       */required:{type:Boolean,value:!1},/**
       * Set to true to disable this input.
       */disabled:{type:Boolean,value:!1},/**
       * Set to true to prevent the user from entering invalid input.
       */preventInvalidInput:{type:Boolean},/**
       * A pattern to validate the `input` with.
       */pattern:{type:String},/**
       * The error message to display when the input is invalid.
       */errorMessage:{type:String},/**
       * A placeholder string in addition to the label.
       */placeholder:{type:String,value:""},/**
       * Set to true to prevent user picking a date or typing in the input.
       */readonly:{type:Boolean,value:!1},/**
       * Set to true if the value is invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},/**
       * Minimum time allowed.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm`
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       */min:{type:String,value:"00:00:00.000"},/**
       * Maximum time allowed.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm`
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       */max:{type:String,value:"23:59:59.999"},/**
       * Specifies the number of valid intervals in a day used for
       * configuring the items displayed in the selection box.
       *
       * It also configures the precision of the value string. By default
       * the component formats values as `hh:mm` but setting a step value
       * lower than one minute or one second, format resolution changes to
       * `hh:mm:ss` and `hh:mm:ss.fff` respectively.
       *
       * Unit must be set in seconds, and for correctly configuring intervals
       * in the dropdown, it need to evenly divide a day.
       *
       * Note: it is possible to define step that is dividing an hour in inexact
       * fragments (i.e. 5760 seconds which equals 1 hour 36 minutes), but it is
       * not recommended to use it for better UX experience.
       */step:{type:Number},/**
       * Set to true to display the clear icon which clears the input.
       */clearButtonVisible:{type:Boolean,value:!1},__dropdownItems:{type:Array},/**
       * The object used to localize this component.
       * To change the default localization, replace the entire
       * _i18n_ object or just the property you want to modify.
       *
       * The object has the following JSON structure:
           {
            // A function to format given `Object` as
            // time string. Object is in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
            formatTime: (time) => {
              // returns a string representation of the given
              // object in `hh` / 'hh:mm' / 'hh:mm:ss' / 'hh:mm:ss.fff' - formats
            },
             // A function to parse the given text to an `Object` in the format
            // `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`.
            // Must properly parse (at least) text
            // formatted by `formatTime`.
            parseTime: text => {
              // Parses a string in object/string that can be formatted by`formatTime`.
            }
             // Translation of the time selector icon button title.
            selector: 'Time selector',
             // Translation of the time selector clear button title.
            clear: 'Clear'
          }
        */i18n:{type:Object,value:()=>{return{formatTime:time=>{if(!time){return}const pad=(num=0,fmt="00")=>(fmt+num).substr((fmt+num).length-fmt.length);// Always display hour and minute
let timeString=`${pad(time.hours)}:${pad(time.minutes)}`;// Adding second and millisecond depends on resolution
time.seconds!==void 0&&(timeString+=`:${pad(time.seconds)}`);time.milliseconds!==void 0&&(timeString+=`.${pad(time.milliseconds,"000")}`);return timeString},parseTime:text=>{// Parsing with RegExp to ensure correct format
const MATCH_HOURS="(\\d|[0-1]\\d|2[0-3])",MATCH_MINUTES="(\\d|[0-5]\\d)",MATCH_SECONDS=MATCH_MINUTES,MATCH_MILLISECONDS="(\\d{1,3})",re=new RegExp(`^${MATCH_HOURS}(?::${MATCH_MINUTES}(?::${MATCH_SECONDS}(?:\\.${MATCH_MILLISECONDS})?)?)?$`),parts=re.exec(text);if(parts){// Allows setting the milliseconds with hundreds and tens precision
if(parts[4]){while(3>parts[4].length){parts[4]+="0"}}return{hours:parts[1],minutes:parts[2],seconds:parts[3],milliseconds:parts[4]}}},selector:"Time selector",clear:"Clear"}}}}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}ready(){super.ready();// In order to have synchronized invalid property, we need to use the same validate logic.
this.__inputElement.validate=()=>{};// Not using declarative because we receive an event before text-element shadow is ready,
// thus querySelector in textField.focusElement raises an undefined exception on validate
this.__dropdownElement.addEventListener("value-changed",e=>this.__onInputChange(e));this.__inputElement.addEventListener("keydown",this.__onKeyDown.bind(this));this.__dropdownElement.addEventListener("change",e=>{// `vaadin-combo-box-light` forwards 'change' event from text-field.
// So we need to filter out in order to avoid duplicates.
if(e.composedPath()[0]!==this.__inputElement){this.__dispatchChange()}})}__validDayDivisor(step){// valid if undefined, or exact divides a day, or has millisecond resolution
return!step||0===3600*24%step||1>step&&0===1e3*(step%1)%1}__onKeyDown(e){if(this.readonly||this.disabled||this.__dropdownItems.length){return}const stepResolution=this.__validDayDivisor(this.step)&&this.step||60;if(_cureMe.IronA11yKeysBehavior.keyboardEventMatchesKeys(e,"down")){this.__onArrowPressWithStep(-stepResolution)}else if(_cureMe.IronA11yKeysBehavior.keyboardEventMatchesKeys(e,"up")){this.__onArrowPressWithStep(stepResolution)}}__onArrowPressWithStep(step){const objWithStep=this.__addStep(this.__getMsec(this.__memoValue),step,!0);this.__memoValue=objWithStep;this.__inputElement.value=this.i18n.formatTime(this.__validateTime(objWithStep));this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}/**
     * Returning milliseconds from Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
     */__getMsec(obj){let result=1e3*(60*(60*(obj&&obj.hours||0)));result+=1e3*(60*(obj&&obj.minutes||0));result+=1e3*(obj&&obj.seconds||0);result+=obj&&parseInt(obj.milliseconds)||0;return result}/**
     * Returning seconds from Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
     */__getSec(obj){let result=60*(60*(obj&&obj.hours||0));result+=60*(obj&&obj.minutes||0);result+=obj&&obj.seconds||0;result+=obj&&obj.milliseconds/1e3||0;return result}/**
     * Returning Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
     * from the result of adding step value in milliseconds to the milliseconds amount.
     * With `precision` parameter rounding the value to the closest step valid interval.
     */__addStep(msec,step,precision){// If the time is `00:00` and step changes value downwards, it should be considered as `24:00`
if(0===msec&&0>step){msec=1e3*(60*(60*24))}const stepMsec=1e3*step,diffToNext=msec%stepMsec;if(0>stepMsec&&diffToNext&&precision){msec-=diffToNext}else if(0<stepMsec&&diffToNext&&precision){msec-=diffToNext-stepMsec}else{msec+=stepMsec}var hh=Math.floor(msec/1e3/60/60);msec-=60*(60*(1e3*hh));var mm=Math.floor(msec/1e3/60);msec-=60*(1e3*mm);var ss=Math.floor(msec/1e3);msec-=1e3*ss;return{hours:24>hh?hh:0,minutes:mm,seconds:ss,milliseconds:msec}}__updateDropdownItems(i8n,min,max,step){const minTimeObj=this.__validateTime(this.__parseISO(min)),minSec=this.__getSec(minTimeObj),maxTimeObj=this.__validateTime(this.__parseISO(max)),maxSec=this.__getSec(maxTimeObj);this.__adjustValue(minSec,maxSec,minTimeObj,maxTimeObj);this.__dropdownItems=this.__generateDropdownList(minSec,maxSec,step);if(step!==this.__oldStep){this.__oldStep=step;const parsedObj=this.__validateTime(this.__parseISO(this.value));this.__updateValue(parsedObj)}if(this.value){this.__dropdownElement.value=this.i18n.formatTime(this.i18n.parseTime(this.value))}}__generateDropdownList(minSec,maxSec,step){if(step<60*15||!this.__validDayDivisor(step)){return[]}const generatedList=[];// Default step in overlay items is 1 hour
step=step||3600;let time=-step+minSec;while(time+step>=minSec&&time+step<=maxSec){const timeObj=this.__validateTime(this.__addStep(1e3*time,step));time+=step;const formatted=this.i18n.formatTime(timeObj);generatedList.push({label:formatted,value:formatted})}return generatedList}__adjustValue(minSec,maxSec,minTimeObj,maxTimeObj){// Do not change the value if it is empty
if(!this.__memoValue){return}const valSec=this.__getSec(this.__memoValue);if(valSec<minSec){this.__updateValue(minTimeObj)}else if(valSec>maxSec){this.__updateValue(maxTimeObj)}}__valueChanged(value,oldValue){const parsedObj=this.__memoValue=this.__parseISO(value),newValue=this.__formatISO(parsedObj)||"";if(""!==this.value&&null!==this.value&&!parsedObj){this.value=oldValue}else if(this.value!==newValue){this.value=newValue}else{this.__updateInputValue(parsedObj)}}__onInputChange(e){const parsedObj=this.i18n.parseTime(this.__dropdownElement.value),newValue=this.i18n.formatTime(parsedObj)||"";if(parsedObj){if(this.__dropdownElement.value!==newValue){this.__dropdownElement.value=newValue}else{this.__updateValue(parsedObj)}}else{this.value=""}this.validate()}__updateValue(obj){const timeString=this.__formatISO(this.__validateTime(obj))||"";this.value=timeString}__updateInputValue(obj){const timeString=this.i18n.formatTime(this.__validateTime(obj))||"";this.__dropdownElement.value=timeString}__validateTime(timeObject){if(timeObject){timeObject.hours=parseInt(timeObject.hours);timeObject.minutes=parseInt(timeObject.minutes||0);timeObject.seconds=3>this.__stepSegment?void 0:parseInt(timeObject.seconds||0);timeObject.milliseconds=4>this.__stepSegment?void 0:parseInt(timeObject.milliseconds||0)}return timeObject}get __stepSegment(){if(0===this.step%3600){// Accept hours
return 1}else if(0===this.step%60||!this.step){// Accept minutes
return 2}else if(0===this.step%1){// Accept seconds
return 3}else if(1>this.step){// Accept milliseconds
return 4}}__formatISO(time){// The default i18n formatter implementation is ISO 8601 compliant
return TimePickerElement.properties.i18n.value().formatTime(time)}__parseISO(text){// The default i18n parser implementation is ISO 8601 compliant
return TimePickerElement.properties.i18n.value().parseTime(text)}_getInputElement(){return this.shadowRoot.querySelector("vaadin-time-picker-text-field")}get __inputElement(){return this.__memoInput||(this.__memoInput=this._getInputElement())}get __dropdownElement(){return this.__memoDropdown||(this.__memoDropdown=this.shadowRoot.querySelector("vaadin-combo-box-light"))}/**
     * Focusable element used by vaadin-control-state-mixin
     */get focusElement(){return this.__inputElement}/**
     * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
     *
     * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
     */validate(){return!(this.invalid=!this.checkValidity())}_timeAllowed(time){const parsedMin=this.i18n.parseTime(this.min),parsedMax=this.i18n.parseTime(this.max);return(!this.__getMsec(parsedMin)||this.__getMsec(time)>=this.__getMsec(parsedMin))&&(!this.__getMsec(parsedMax)||this.__getMsec(time)<=this.__getMsec(parsedMax))}/**
     * Returns true if the current input value satisfies all constraints (if any)
     *
     * You can override the `checkValidity` method for custom validations.
     */checkValidity(){return this.__inputElement.focusElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this.__dropdownElement.value||this.i18n.parseTime(this.__dropdownElement.value))}}_exports.TimePickerElement=TimePickerElement;customElements.define(TimePickerElement.is,TimePickerElement);var vaadinTimePicker={TimePickerElement:TimePickerElement};_exports.$vaadinTimePicker=vaadinTimePicker;const $_documentContainer$q=_cureMe.html`<dom-module id="lumo-time-picker" theme-for="vaadin-time-picker">
  <template>
    <style include="lumo-field-button">
      [part~="toggle-button"]::before {
        content: var(--lumo-icons-clock);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$q.content);class AddSlot extends _cureMe.PolymerElement{static get template(){return _cureMe.html$1`
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