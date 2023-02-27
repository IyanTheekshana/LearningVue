const app = Vue.createApp({
  data() {
    return {
      name: "Iyan",
      age: 24,
      favoriteNumber: Math.floor(Math.random()),
      imgUrl:
        "https://cdn.pixabay.com/photo/2023/01/22/13/46/swans-7736415_960_720.jpg",
    };
  },
  methods: {
    ageAfterFiveYears() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
