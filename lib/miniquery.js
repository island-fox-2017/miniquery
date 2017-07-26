/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 var SweetSelector = {
   select : function(element) {
     let el = document.querySelectorAll(element)
     return el
   }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 var DOM = {
   hide: function(element){
     let elmnt = SweetSelector.select(element);
     elmnt.forEach(el => {
       el.style.display = 'none'
     })
   },
   show: function(element){
     let elmnt = SweetSelector.select(element);
     elmnt.forEach(el => {
       el.style.display = "block"
     })
   },
   removeClass: function(element, attr){
     let elmnt = SweetSelector.select(element)
     elmnt.forEach(el => {
       el.classList.remove(attr)
     })
   },
   addClass: function(element, attr) {
     let elmnt = SweetSelector.select(element)
     elmnt.forEach(el => {
       el.classList.add(attr)
     })
   }
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
var EventDispatcher = {
  on: function(element, event, callback){
    let elmnt = SweetSelector.select(element)
    elmnt.forEach(el => {
      el.addEventListener(event, callback)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
