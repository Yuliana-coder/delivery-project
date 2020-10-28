import Popup from "@/components/popup-order/popup-order.vue";
export default {
    components: {
        Popup,
      },
  name: "OrdersList",
  data() {
    return {
        showOrder: {},
        isShowPopup: false,
    }  
  },
  props: {
    orders: Array,
  },
  methods: {
    serShowOrder(order) {
      this.showOrder = order;
      this.isShowPopup = true;
    },
    setIsShow(value) {
        this.isShowPopup =  value;
    }
  },
  computed: {
    getShowOrder(){
        return this.showOrder;
    }
},
};
