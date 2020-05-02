import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:0
      },
      mutations:{
        add(state){
          state.count++;
        },
        substract(state){
          state.count--;
        }
      },
      actions:{
        add(context){
          context.commit("add");
        },
        substract(context){
          context.commit("substract");
        }
      },
      getters:{
        
      }
})