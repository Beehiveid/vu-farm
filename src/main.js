import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import Dashboard from './components/view/Dashboard';
import Employee from './components/view/Employee';
import Livestock from './components/view/Livestock';
import Warehouse from './components/view/Warehouse';
import Faq from './components/view/Faq';

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes:[{
    path:"/",
    component:Dashboard
  },{
    path:"/employee",
    component:Employee
  },{
    path:"/livestock",
    component:Livestock
  },{
    path:"/warehouse",
    component:Warehouse
  },{
    path:"/faq",
    component:Faq
  }]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
