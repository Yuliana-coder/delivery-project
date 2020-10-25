import Vue from "vue";
import Vuex from "vuex";
import ordersMock from "@/mock/orders-list.json";
import customersMock from "@/mock/customers.json";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  getters: {
    /**необработанный заказы */
    notificationOrders() {
      let allOrders = [...store.state.orders];
      allOrders = allOrders.filter((item) => {
        return !item.processed;
      });
      return allOrders;
    },
  },
  actions: {
    getData() {
      store.commit("setOrdersData", ordersMock);
      store.commit("setCustomersData", customersMock);
    },
    getCustomer(state, payload) {
      let customers = [...store.state.customers];
      let current = customers.find((item) => {
        return item.id == parseInt(payload);
      });
      store.commit("setCurrentCustomer", current);
    },
  },
  state: {
    orders: null,
    customers: null,
    currentCustomer: null,
  },
  mutations: {
    setOrdersData(state, data) {
      state.orders = data;
    },
    setCustomersData(state, data) {
      state.customers = data;
    },
    setCurrentCustomer(state, data) {
        state.currentCustomer = data;
    },
  },
});

export default store;
