import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [
      {
        title: "Developer",
        name: "Nanda",
      },
      {
        title: "Developer",
        name: "Isti Paleman",
      },
    ],
    livestocks: [
      {
        name: "cow-0001",
        type: "Cow",
      },
      {
        name: "chicken-0001",
        type: "Chicken",
      },
    ],
    warehouses: [],
  },
  mutations: {},
  actions: {},
  getters: {},
});
