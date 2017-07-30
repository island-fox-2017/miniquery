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
var AjaxWrapper = {
  request: function(options){
    let req = new XMLHttpRequest()
    console.log(req);
    req.addEventListener('load', options.success)
    req.addEventListener('error', options.fail)
    req.open(options.type, "http://127.0.0.1:8080")
    req.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
var miniquery = function(elmnt){
  return {
    hide: function() {
      DOM.hide(elmnt)
    },
    show: function() {
      DOM.show(elmnt)
    }
  }
}
var $ = miniquery
