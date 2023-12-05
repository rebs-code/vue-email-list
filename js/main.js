"use strict";

//create vue instance

const { createApp } = Vue;

createApp({
  data() {
    return {
      emailAPI: "https://flynn.boolean.careers/exercises/api/random/mail",
      emails: [],
    };
  },
  methods: {
    getEmail() {
      const emailPromise = [];
      for (let i = 0; i < 10; i++) {
        emailPromise.push(
          axios.get(this.emailAPI).then((resp) => {
            if (emailPromise.includes(resp.data.response)) {
              i--;
            } else return resp.data.response;
          })
        );
      }
      Promise.all(emailPromise).then((results) => {
        this.emails = results;
      });
    },
  },
}).mount("#app");
