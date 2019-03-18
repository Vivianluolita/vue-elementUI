###项目搭建
1. 先安装webpack vue 
```
vue init webpack Vue-Project

```
2. header组件负责头  左侧组件  右侧组件（右侧包含分页等  考虑vue路由）
3. 编写App.vue 去掉`id = App`
4. 渲染index.html `<view-router></view-router>`
5. 当没有el实例时候，需要手动挂载$mount,重写main.js
```
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
Vue.use(VueRouter);// 安装路由功能
let routes = [
  {
    path: '/',
    name: 'index',
    component: App,
    children: [
      {path: '/goods', component: goods},
      {path: '/ratings', component: ratings},
      {path: '/seller', component: seller}
    ]
  }
];
let router = new VueRouter({
  'linkActiveClass': 'active',
  routes
});
let app = new Vue({
  router
}).$mount('#app');
export default app;

```
- [vue-router如何定义嵌套路由](https://www.kancloud.cn/hanxuming/vue-iq/733853)
- [router-link组件及其属性](https://www.kancloud.cn/hanxuming/vue-iq/738708)
-[keep-alive 动态组件缓存](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)
6. element-ui
```
npm install --save element-ui
main.js  
```

7. `git remote add origin git@github.com:Vivianluolita/vue-elementUI.git
git push -u origin master`