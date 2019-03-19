// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import router from './router'
import VueRouter from 'vue-router';
import App from './App'
import ElementUI from 'element-ui';
import Index from './components/index/index';
import Table from './components/table/table';
import Form from './components/form/form';
import Ue from './components/editor/ue';
import Mock from './mock/mock'
Mock.mockData();
Vue.config.productionTip = false
Vue.use(VueRouter);// 安装路由功能,并import
Vue.use(VueRouter);
/* eslint-disable no-new */
/*vue-router如何定义嵌套路由 */
let routes = [
  {
    path: '/',
    component: App,
    children: [
      {path: '', component: Index, name: 'index', class: 'fa-line-chart'},
      {path: '/table', component: Table, name: 'table', class: 'fa-table'},
      {path: '/form', component: Form, name: 'form', class: 'fa-newspaper-o'},
      {path: '/editor', component: Ue, name: 'editor', class: 'fa-plug'}
    ]
  }
];
/* router 实例化*/
let router = new VueRouter({
  // 'mode': 'history', 去掉URL的#号，需要配置服务器http://router.vuejs.org/zh-cn/essentials/history-mode.html
  'linkActiveClass': 'active',
  routes
});
/*去掉el，重新挂载 */
let app = new Vue({
  router
}).$mount('#app');
export default app;
