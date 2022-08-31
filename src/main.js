import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/css/general.css";
import ArgonDashboard from "./argon-dashboard";

import filters from './helpers/filters'
import decimal from './directives/decimal'
import { tooltip } from './directives/tooltip'

const appInstance = createApp(App);
appInstance.config.globalProperties.$filters = filters
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.use(store);
appInstance.directive('decimal', decimal)
appInstance.directive('tooltip', tooltip)
appInstance.mount("#app");