const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue",
      courseGoalB: "Master the course and learn Vue",
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
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
