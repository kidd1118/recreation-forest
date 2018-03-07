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
    $.ajax({
      method: "GET",
      url: apiName,
      data: {id: getUrlVars()['id']},
      crossDomain: true
    }).done(function( data ) {
      if (data && data.status == 'success'){
        apiData = data;
      }
    }),
    //$.getJSON(hostName + apiName, {id: getUrlVars()['id']}, function(data) {
    //  if (data && data.status == 'success'){
    //    apiData = data;
    //  }
    //}),
    $.getJSON(rootPath + '/locales/zh-tw.json', function(data) {
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
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$(document).ready(function(){

  $('#loading').hide();
});