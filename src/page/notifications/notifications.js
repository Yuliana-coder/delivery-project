export default {
  name: "Notifications",
  data() {
    return {
      orders: null,
    };
  },
  beforeMount() {
    this.orders = this.$store.state.orders;
    console.log(this.orders);
  },
  computed: {
    getNotifications() {
        return this.$store.getters.notificationOrders;
    }
  },
  methods: {
    goToOrdering(id) {
      this.$router.push({ path: "notifications/" + id });
    },
  },
};
