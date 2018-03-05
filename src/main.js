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

  $('#loading').hide();
});