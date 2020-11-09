import Popup from "@/components/popup-order/popup-order.vue";
export default {
  components: {
    Popup,
  },
  name: "OrdersList",
  data() {
    return {
      showOrder: {},
      // isShowPopup: false,
    };
  },
  props: {
    orders: Array,
  },
  methods: {
    setShowOrder(order) {
      this.showOrder = order;
      // this.isShowPopup = true;
      this.$store.commit("setNotificationOpen", false);
      this.$store.commit("setOrderOpen", true);
    },
    setIsShow(value) {
      this.$store.commit("setOrderOpen", value);
      // this.isShowPopup = value;
    },
  },
  computed: {
    getShowOrder() {
      return this.showOrder;
    },
    isShowPopup: function() {
      return this.$store.state.isOrderOpen;
    },
  },
};
