import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex)


export default new Vuex.Store({
  state,
  // actions,
  mutations,
  //vuex的getter的实例,在home/components/Header.vue实验
  getters: {
    doubleCity(state) {
      return state.city + " " + state.city;
    }
  },
})
