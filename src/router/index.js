import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../components/view/Dashboard';
import Employee from '../components/view/Employee';
import Livestock from '../components/view/Livestock';
import Warehouse from '../components/view/Warehouse';
import Faq from '../components/view/Faq';

Vue.use(Router)

export default new Router({
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