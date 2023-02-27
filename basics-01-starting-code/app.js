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
});

app.mount("#user-goal");
