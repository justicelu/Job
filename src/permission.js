import Vue from "vue";
import router from "./router";
import store from "./store";

import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

let token = localStorage.getItem("token");
router.beforeEach((to, from, next) => {
    NProgress.start(); // start progress bar
    // 之后在这里判断token并进行路由跳转
    console.log(to);
    if (Object.is(to.name, "login")) {
        console.log("直接前往登录页,放行");

        document.title = to.meta.title;
        next();
        return;
    }

    if (token) {
        console.log("有token,跳转成功", token);
        document.title = to.meta.title;
        next();
    } else {
        console.log("没有token");
        if (to.path == "/login") {
            //如果是登录页面路径，就直接next()
            next();
        } else {
            //不然就跳转到登录；
            next("/login");
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done(); // finish progress bar
});
