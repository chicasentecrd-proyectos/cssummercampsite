import Vue from 'vue'
import App from './App'
import './index.css'
import Router from "vue-router";
import Home from "./components/Home"
import Studentp from "./components/Studentp";



Vue.use(Router);


const routes = [
  {
    path: "/", component: Home
  },
  {
    path: "/student", component: Studentp
  }
];

const router = new Router({
  routes
});


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
