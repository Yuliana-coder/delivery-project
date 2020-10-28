export default {
  name: "Orderning",
  data() {
    return {
      customer: null,
      isGoConfirm: false,
      isGoReject: false,
      isOtherReason: false,
      isReject: false,
      currentSelect: "Нет данных о заказчике",
      isTreatment: false,
      orderId: null,
    };
  },
  beforeMount() {
    this.getCustomer();
    this.orderId = this.$route.params.id;
    console.log(this.customer);
  },
  methods: {
    goToBack() {
      this.$router.go(-1);
    },
    getCustomer() {
      if (this.$route.params.id) {
        this.$store.dispatch("getCustomer", this.$route.params.id).then(() => {
          this.customer = this.$store.state.currentCustomer;
          console.log(this.customer);
        });
      }
    },
    cancelNotification() {
      let orders = [...JSON.parse(localStorage.getItem("orders"))];
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].orderId === parseInt(this.orderId)) {
          orders[i].rejected = true;
          orders[i].processed = true;
          orders[i].reasonForRejection = this.currentSelect;
          console.log(orders[i]);
          break;
        }
      }
      localStorage.setItem("orders", JSON.stringify(orders));
      this.isGoReject = true;
    },
    checkSelect(event) {
      if (event.target.value === "Другая причина:") {
        this.isOtherReason = true;
      } else {
        this.isOtherReason = false;
      }
    },
    sendOrder() {
      let orders = [...JSON.parse(localStorage.getItem("orders"))];
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].orderId === parseInt(this.orderId)) {
          orders[i].processed = true;
          console.log(orders[i]);
          break;
        }
      }
      localStorage.setItem("orders", JSON.stringify(orders));
      this.isTreatment = true;
      setTimeout(() => {
        this.$router.push({ path: "delivery/" + this.customer.id });
      }, 5000);
    },
  },
};
