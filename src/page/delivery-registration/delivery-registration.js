export default {
  name: "DeliveryRegistration",
  data() {
    return {
      order: null,
      deliverySelector: "",
      isSelectorConfirm: false,
      isShowDeliveryCard: false
    };
  },
  beforeMount() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      if (this.$route.params.id) {
        this.$store.dispatch("getOrder", this.$route.params.id).then(() => {
          this.order = this.$store.state.currentOrder;
        });
      }
    },
    goToHomepage() {
      this.$router.push({ path: '/' })
    }
  },
};
