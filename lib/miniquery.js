/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

let SweetSelector = {
  select : (param) => {
    let elements = document.querySelectorAll(param)
    return elements
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

let DOM = {
  hide : function(param){
    let hideDom = SweetSelector.select(param)
    hideDom.forEach(hideDoc => {
      hideDoc.style.display = "none";
    })
  },
  
  show : function(param) {
    let showDom = SweetSelector.select(param)
    showDom.forEach(showDoc => {
      showDoc.style.display = "block"
    })
  },
  
  removeClass : function(param, property){
    let removeDom = SweetSelector.select(param)
    removeDom.forEach(removeDoc => {
      removeDoc.classList.remove(property)
    })
  },
  
  addClass : function(param, property){
    let addDom = SweetSelector.select(param)
    addDom.forEach(addDoc => {
      addDoc.classList.add(property)
    })
  } 
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


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
