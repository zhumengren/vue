import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// Vue.use()是用来使用插件的，就是传入插件，作用可以自动阻止多次注册相同的插件，
// 它需要在你调用new Vue()之前完成
Vue.use(Router);
// router插件，作用是匹配路由，重定向，懒加载，滚动行为，导航守卫等
// 它会自动识别index.vue文件，不能是其他文件
// 具体看https://router.vuejs.org/zh/
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/1.1",
      name: "Vue三大核心概念(属性、事件、插槽)",
      component: () => import("./views/1.1")
    },
    {
      path: "/1.2",
      name: "双向绑定和单向数据流不冲突",
      component: () => import("./views/1.2")
    },
    {
      path: "/1.3",
      name: "虚拟Dom",
      component: () => import("./views/1.3")
    },
    {
      path: "/1.4",
      name: "如何触发组件的更新",
      component: () => import("./views/1.4")
    },
    {
      path: "/1.5",
      name: "合理应用计算属性和侦听器",
      component: () => import("./views/1.5")
    },
    {
      path: "/1.6",
      name: "生命周期的应用场景和函数式组件",
      component: () => import("./views/1.6")
    },
    {
      path: "/1.7",
      name: "指令的本质",
      component: () => import("./views/1.7")
    },
    {
      path: "/1.8",
      name: "provie/inject",
      component: () => import("./views/1.8")
    },
    {
      path: "/1.9",
      name: "如何优雅的获取跨层级组件(拒绝递归)",
      component: () => import("./views/1.9")
    },
    {
      path: "/1.10",
      name: "template 和 JSX 对比及其他们的本质",
      component: () => import("./views/1.10")
    },
    {
      path: "/1.11",
      name: "习题解答",
      component: () => import("./views/1.11")
    }
  ]
});
