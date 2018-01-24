// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;


(function(win,doc){
  //浏览器缩放时触发的事件
  win.onresize=function(){
    changeFontSize();
  };
  changeFontSize();
  function changeFontSize(){
    var oFontSize=doc.documentElement.clientWidth/(320/20);
    doc.documentElement.style.fontSize=oFontSize+'px';
  }
})(window,document);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
