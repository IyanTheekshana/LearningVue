const app = Vue.createApp({
  data() {
    return {
      name: "",
      lastName: "",
      confirmedName: "",
      nameTwo: "",
      counter: 0,
      fullname: "",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    onText(event) {
      this.name = event.target.value;
    },
    onTextTwo(event, lastName) {
      // this.nameTwo = event.target.value + " " + lastName;
      this.nameTwo = event.target.value;
    },
    onSubmit(event) {
      alert("submitted");
    },
    onConfirmed() {
      this.confirmedName = this.name;
    },
    onResetInput() {
      this.name = "";
    },
    outputFullname() {
      console.log("Running again");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Theekshana";
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value === "") {
    //     return "";
    //   }
    //   this.fullname = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   if (value === "") {
    //     return "";
    //   }
    //   this.fullname = this.name + " " + value;
    // },
  },
  computed: {
    fullName() {
      if (this.name === "" && this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
});

app.mount("#events");
