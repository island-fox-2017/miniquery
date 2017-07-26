/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 var SweetSelector = {
   select: function(value) {
     var el = document.querySelectorAll(value);
     return el
   }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 var DOM = {
   hide: function(value) {
     var elements = document.querySelectorAll(value);
     elements.forEach( el => {
       el.style.visibility = "hidden";
     }) 
   },
   show: function(value) {
     var elements = SweetSelector.select(value)
     elements.forEach( el => {
       el.style.visibility = "visible";
     })
   },
   
   removeClass: function(value, cls) {
     var elements = SweetSelector.select(value)
     elements.forEach( el => {
       el.classList.remove(cls)
     })
   },
   
   addClass: function(value, cls) {
     var elements = SweetSelector.select(value)
     elements.forEach( el => {
       el.classList.add(cls)
     })
   }
   
 }
 
  
  

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
 var EventDispatcher = {
   on: function(value, events, callback){
     var targets = SweetSelector.select(value);
     targets.forEach( tg => {
       tg.addEventListener(events, function(){
         callback()
       })
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
