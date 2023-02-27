const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the couuse and learn Vue",
      courseObj: {
        name: "Iyan",
      },
      vueLink: "https://vuejs.org/guide/quick-start.html",
    };
  },

  methods: {
    outPutGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Master Vue!";
      }
    },
  },
});

app.mount("#user-goal");
