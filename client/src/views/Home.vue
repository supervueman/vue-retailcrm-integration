<template>
  <div class="home">
    <div>{{orders}}</div>
    <button @click="fetchOrders">Click</button>
  </div>
</template>

<script>
export default {
  name: "Home",

  computed: {
    orders() {
      return this.$store.getters.getOrders;
    }
  },

  methods: {
    async fetchOrders() {
      await this.$store.dispatch("fetchOrders");
    }
  }
};
</script>
