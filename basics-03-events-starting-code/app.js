const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
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
    onSubmit(event) {
      alert("submitted");
    },
    onConfirmed() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
