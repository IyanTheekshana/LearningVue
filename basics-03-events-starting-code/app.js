const app = Vue.createApp({
  data() {
    return {
      name: "",
      nameTwo: "",
      counter: 0,
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce() {
      this.counter -= num;
    },
    onText(event) {
      this.name = event.target.value;
    },
    onTextTwo(event, lastName) {
      this.nameTwo = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
