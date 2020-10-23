import orderssListMock from "@/mock/orders-list.json";
import OrdersList from "@/components/orders-list.vue"

export default {
    components: {
        OrdersList
    },
  name: "Homepage",
  data() {
    return {
      orders: orderssListMock,
    };
  },
};
