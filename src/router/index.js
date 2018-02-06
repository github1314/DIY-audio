import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve=>{require(['@/components/index'],resolve)},
      children:[
        {
          path:'my',
          component:resolve=>{require(['@/components/contentBar/my/my'],resolve)}
        },
        {
          path:'find',
          component:resolve=>{require(['@/components/contentBar/find/find'],resolve)}
        }
      ]
    }
]
});
