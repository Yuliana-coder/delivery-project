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
    };
  },
  beforeMount() {
    this.getCustomer();
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
      this.isGoReject = true;
    },
    checkSelect(event) {
      if (event.target.value === "Другая причина:") {
        this.isOtherReason = true;
      } else {
        this.isOtherReason = false;
      }
    },
  },
};
