import OrdersList from "@/components/orders-list/orders-list.vue";

export default {
  components: {
    OrdersList,
  },
  name: "Homepage",
  data() {
    return {
      orders: Array,
    };
  },
  beforeMount() {
    this.orders = [...JSON.parse(localStorage.getItem("orders"))];
  },
};
