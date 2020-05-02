import Vue from "vue";
import Vuex from "vuex";

import employee from "./modules/employee";
import livestock from "./modules/livestock";
import warehouse from "./modules/warehouse";
import system from "./modules/system";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        system,
        employee,
        livestock,
        warehouse,
    },
});
