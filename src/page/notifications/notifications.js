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
    notificationOrders () {
        let allOrders = [...this.orders];
        allOrders = allOrders.filter((item) => {
            return !item.processed
        })
      return allOrders;
    }
  }
};
