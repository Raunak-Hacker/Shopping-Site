const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: true,
      tickA: false,
      tickB: true,
      dPrice: 999,
      price: 899,
    };
  },
  computed: {
    boxAclass() {
      return { sel: this.boxA };
    },
    boxBclass() {
      return { sel: this.boxB };
    },
    tickAclass() {
      return { show: this.tickA };
    },
    tickBclass() {
      return { show: this.tickB };
    },
  },
  watch: {
    boxB (value) {
      if (value == true) {
        console.log("hello");
        this.price = 899;
        this.dPrice = 999;
      };
    },
    boxA (value) {
        if (value == true) {
        console.log("hello");
        this.price = 595;
        this.dPrice = 795;
    }
  },
},
  methods: {
    boxSelected(box) {
      if (box === "A" && this.boxA == false) {
        this.boxA = !this.boxA;
        this.boxB = false;
        this.tickA = true;
        this.tickB = false;
      } else if (box === "B" && this.boxB == false) {
        this.boxB = !this.boxB;
        this.boxA = false;
        this.tickA = false;
        this.tickB = true;
      }
    },
  },
});
app.mount("#whole");
