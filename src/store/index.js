import Vue from "vue";
import Vuex from "vuex";
import ordersMock from "@/mock/orders-list.json";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  getters: {},
  actions: {
    getData() {
      store.commit("setData", ordersMock);
    },
  },
  state: {
    orders: null,
  },
  mutations: {
    setData(state, data) {
      state.orders = data;
    },
  },
});

export default store;
