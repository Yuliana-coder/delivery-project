export default {
  name: "Notifications",
  data() {
    return {
      orders: null,
    };
  },
  beforeMount() {
    this.orders = [...JSON.parse(localStorage.getItem("orders"))];
  },
  computed: {
    getNotifications() {
      let orders = [...JSON.parse(localStorage.getItem("orders"))];
      return orders.filter((item) => {
        return !item.processed && !item.rejected;
      });
    },
  },
  methods: {
    goToOrdering(id) {
      this.$router.push({ path: "notifications/" + id });
    },
  },
};
