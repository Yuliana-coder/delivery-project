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
      // store.commit("setOrdersData", ordersMock);
      store.commit("setCustomersData", customersMock);
      if (!localStorage.getItem("orders")) {
        console.log(ordersMock);
        localStorage.setItem("orders", JSON.stringify(ordersMock));
      }
      store.commit("setOrdersData", JSON.parse(localStorage.getItem("orders")));
    },
    getCustomer(state, payload) {
      let customers = [...store.state.customers];
      let current = customers.find((item) => {
        return item.id == parseInt(payload);
      });
      store.commit("setCurrentCustomer", current);
    },
    getOrder(state, payload) {
      // let orders = [...store.state.orders];
      let orders = JSON.parse(localStorage.getItem("orders"));
      let current = orders.find((item) => {
        return item.clientId == parseInt(payload);
      });
      store.commit("setCurrentOrder", current);
    },
  },
  state: {
    orders: null,
    customers: null,
    currentCustomer: null,
    currentOrder: null,
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
    setCurrentOrder(state, data) {
      state.currentOrder = data;
    },
  },
});

export default store;
