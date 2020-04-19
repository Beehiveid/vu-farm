import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import FaqView from './components/view/Faq';

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes:[{
    path:"/"
  },{
    path:"/faq",
    component:FaqView
  }
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
