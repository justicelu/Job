import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 导入基础样式
import "@/assets/css/base.css";

// import the axios or other that the axios you already configed
import axios from "./api/request";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// router contrl
import "./permission";

// let at .vue can use this.$http to use axios
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
