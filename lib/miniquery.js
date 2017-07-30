/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

 let SweetSelector = {
   select: function (el) {
     return document.querySelectorAll(el)
   }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
let DOM = {
  hide: function(el) {
    let elements = document.querySelectorAll(el);
    elements.forEach(e => {
      e.style.display = "none";
    })
  },

  show: function(el) {
    let elements = document.querySelectorAll(el);
    elements.forEach(e => {
      e.style.display = "";
    })
  },

  removeClass: function(el, prop) {
    let elements = document.querySelectorAll(el);
    elements.forEach(e => {
      e.classList.remove(prop)
    })
  },

  addClass: function(el, prop) {
    let elements = document.querySelectorAll(el);
    elements.forEach(e => {
      e.classList.add(prop)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
let EventDispatcher = {
  on: function(el, event, cb) {
    elements = document.querySelectorAll(el);
    elements.forEach(element => {
      element.addEventListener(event, function(e) {
        cb();
      })
    })
  }
}



/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
let AjaxWrapper = {
  request: function(obj) {

    var request = new XMLHttpRequest();
    request.open(obj.type, obj.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = request.responseText;
        obj.success(resp)
      } else {
        // We reached our target server, but it returned an error
        var resp = request.responseText;
        obj.success("...but "+ resp)
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      obj.fail();
    };

    request.send();

  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
 let miniquery = function(el) {
   return {
     hide: function() {
       DOM.hide(el);
     },
     show: function() {
       DOM.show(el);
     }
   }
 }

 let $ = miniquery;
