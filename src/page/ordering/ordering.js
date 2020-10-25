export default {
  name: "Orderning",
  data() {
    return {
      customer: null,
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
        if(this.$route.params.id) {
      this.$store.dispatch("getCustomer", this.$route.params.id).then(() => {
        this.customer = this.$store.state.currentCustomer;
        console.log(this.customer);
      });
    }
    },
  },
};
