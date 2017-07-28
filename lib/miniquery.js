/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 var SweetSelector = {
  select: function (el) {
    return document.querySelectorAll(el);
  }
};


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
var DOM = {
  hide: function(el) {
    chosenEl = SweetSelector.select(el);
    for(let i=0; i<chosenEl.length; i++) {
      chosenEl[i].style.visibility = "hidden";
    }
  },
  show: function(el) {
    chosenEl = SweetSelector.select(el);
    for(let i=0; i<chosenEl.length; i++) {
      chosenEl[i].style.visibility = "visible";
    }
  },
  addClass: function(el, addEl) {
    chosenEl = document.getElementsByClassName(el.slice(1));
    for(let i=0; i<chosenEl.length; i++) {
      chosenEl[i].classList.add(addEl)
    }
  },
  removeClass: function(el, removedEl) {
    chosenEl = document.getElementsByClassName(el.slice(1));
    for(let i=0; i<chosenEl.length; i++) {
      chosenEl[i].classList.remove(removedEl)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

var EventDispatcher = {
  on: function(el, event, callback) {
    let chosenEl = SweetSelector.select(el);
    for(let i=0; i<chosenEl.length; i++) {
      chosenEl[i].addEventListener(event, callback);
    }
  },
  trigger: function(el, event) {
    event = new Event(event);
    let chosenEl = SweetSelector.select(el);
    for(let i=0; i<chosenEl.length; i++) {
      chosenEl[i].dispatchEvent(event);
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

var AjaxWrapper = {
  request: function(obj) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("error", obj.fail);
    oReq.addEventListener("load", obj.success);
    oReq.open(obj.type, obj.url);
    oReq.send();
  }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

var miniquery = function (el ="") {
  var chosenEl = document.querySelectorAll(el);
  return {
    hide: function() {
      for(let i=0; i<chosenEl.length; i++) {
        chosenEl[i].style.visibility = "hidden";
      }
    },
    show: function() {
      for(let i=0; i<chosenEl.length; i++) {
        chosenEl[i].style.visibility = "visible";
      }
    },
    addClass: function(added) {
      for(let i=0; i<chosenEl.length; i++) {
        chosenEl[i].classList.add(added);
      }
    },
    removeClass: function(removed) {
      for(let i=0; i<chosenEl.length; i++) {
        chosenEl[i].classList.remove(removed)
      }
    },
    on: function(event, callback) {
      for(let i=0; i<chosenEl.length; i++) {
        chosenEl[i].addEventListener(event, callback);
      }
    },
    trigger: function(event) {
      event= new Event(event);
      for (let i=0; i<chosenEl.length; i++) {
        chosenEl[i].dispatchEvent(event);
      }
    }
  }
}

miniquery.ajax = function(obj) {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("error", obj.fail);
  oReq.addEventListener("load", obj.success);
  oReq.open(obj.type, obj.url);
  oReq.send();
}

var $ = miniquery;
