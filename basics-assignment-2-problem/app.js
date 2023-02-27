const app = Vue.createApp({
  data() {
    return {
      textOne: "",
      textTwo: "",
    };
  },
  methods: {
    onAlert() {
      alert("Hi this is an alert");
    },

    onText(event) {
      this.textOne = event.target.value;
    },
    onTextTwo(event) {
      this.textTwo = event.target.value;
    },
  },
});

app.mount("#assignment");
