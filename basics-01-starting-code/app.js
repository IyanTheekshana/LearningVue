const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the couuse and learn Vue",
      courseObj: {
        name: "Iyan",
      },
    };
  },
});

app.mount("#user-goal");
