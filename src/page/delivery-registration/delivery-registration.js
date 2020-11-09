export default {
  name: "DeliveryRegistration",
  data() {
    return {
      order: null,
      deliverySelector: "",
      isSelectorConfirm: false,
      isShowDeliveryCard: false,
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
      this.$router.push({ path: "/" });
    },
    printDeliveryList() {
      var prtContent = document.getElementById("delivery__print");
      var WinPrint = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
      WinPrint.document.write('');
      WinPrint.document.write(prtContent.innerHTML);
      WinPrint.document.write('');
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
    },
  },
};
