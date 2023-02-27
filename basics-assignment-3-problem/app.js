const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    add(num) {
      this.value += num;
    },
  },
  computed: {
    result() {
      if (this.value < 37) {
        return "Not there yet";
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    value() {
      that = this;
      setTimeout(() => {
        that.value = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
