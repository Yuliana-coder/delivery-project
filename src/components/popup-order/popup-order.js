export default {
  name: "Popup",
  props: {
    order: Object,
  },
  methods: {
    closePopup() {
      this.$emit("closePopup", false);
    },
  },
};
