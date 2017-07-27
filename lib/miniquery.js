/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
var SweetSelector = {
  select : function(data){
    // if(data[0] == '#'){
    //   return document.getElementById(data.slice(1,data.length))
    // }else if (data[0] == '.'){
    //   return document.getElementsByClassName(data.slice(1,data.length))
    // }else {
    //   return document.getElementsByTagName(data)[
    // }
    return document.querySelectorAll(data)

  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 var DOM = {
   hide : (data) =>{
     SweetSelector.select(data).forEach( hideData =>{
       hideData.style.color = "grey"
     })
   },
   show : (data) =>{
     SweetSelector.select(data).forEach( hideData =>{
       hideData.style.display = 'block'
     })

   },
   addClass : (klass ,newKlass) =>{
     SweetSelector.select(klass).forEach( hideData =>{
       hideData.className += newKlass
     })

   },
   removeClass :(klass ,newKlass) =>{
     SweetSelector.select(klass).forEach( hideData =>{
       hideData.classList.remove(newKlass)
     })

   }

 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 var EventDispatcher = {
   on : (klass,newKlass,callback)=>{
     SweetSelector.select(klass).forEach(event =>{
       event.addEventListener(newKlass,callback)
     })
   }
 }

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
var AjaxWrapper = {
  request :(object)=>{

    ajax = new XMLHttpRequest();
    ajax.addEventListener("load",object.success)
    ajax.open(object.type,object.url)
    ajax.send();

  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
var miniquery = (data)=>{
  let task = SweetSelector.select(data)
  task.hide = ()=>{ DOM.hide(data)}
  task.show = ()=>{DOM.show(data)}
  task.addClass= (newKlass)=>{DOM.addClass(data,newKlass)}
  task.removeClass = (newKlass)=>(DOM.removeClass(data,newKlass))
  task.on = (newKlass,callback)=>{EventDispatcher.on(data,newKlass,callback)}
  return task
}

var $ = miniquery
