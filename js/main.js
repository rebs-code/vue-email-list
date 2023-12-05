"use strict";

//create vue instance

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
}).mount("#app");
