// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import router from './router'
import VueRouter from 'vue-router';
import App from './App'
import ElementUI from 'element-ui';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
Vue.config.productionTip = false
Vue.use(VueRouter);// 安装路由功能,并import
/* eslint-disable no-new */
/*去掉el，重新挂载 */
// new Vue({1
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

/*vue-router如何定义嵌套路由 */
let routes = {
  path:'/',
  name:'index',
  components:App,
  children:[
    {path:'/goods',components:goods},
    {path:'/ratings',components:ratings},
  ]
};
/* router 实例化*/
let router = new VueRouter({
  'linkActiveClass':'active',
  routes
});
let app = new Vue({
  router
}).$mount('#app')
export default app;
