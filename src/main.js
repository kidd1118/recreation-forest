// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store'

Vue.use(ElementUI)

Vue.config.productionTip = false;

/* eslint-disable no-new */

var lang, apiData;

$.when(
    $.getJSON('fakeData/API_RT_001.json', function(data) {
      if (data && data.status == 'success'){
        apiData = data;
      }
    }),
    $.getJSON('locales/zh-tw.json', function(data) {
      if (data){
        lang = data;
      }
    })
).then(function() {
  
  if (apiData && lang) {

    //store.replaceState(result.data);
    Object.assign(store.state, apiData.data);
    store.state.lang = lang;
    
    new Vue({
      store: store,
      el: '#app',
      components: { App },
      template: '<App/>',
    });
  }
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a.js-anchor").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });
  $('a.js-anchor').keydown(function(event){
    if(event.keyCode == 13){
      $(this).click();   
    }
  });

  $('#loading').hide();
});