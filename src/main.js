import Vue from "vue";

Vue.config.productionTip = false;

new Vue({
  el: "#vue-app",
  data: {
    name: "Shaun",
    job: "Ninja",
    website: "http://www.netninja.co.uk"
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    }
  }
});
