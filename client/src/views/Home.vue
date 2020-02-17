<template>
  <div class="page">
    <button class="btn" @click="fetchOrders">FETCH ORDERS</button>
    <section class="section">
      <div class="order-card" v-for="order in orders" :key="order.id">
        <div class="order-card-inner">
          <h3>Order number: {{order.number}}</h3>
          <h3>Summ: {{order.summ}}</h3>
          <h3>Delivery cost: {{order.delivery.cost}}</h3>
        </div>
      </div>
    </section>
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

<style lang="sass">
  *
    box-sizing: border-box
  body
    margin: 0
  .page
    padding: 20px
  .btn
    padding: 10px 20px
    border: 1px solid
    outline: none
  .section
    display: flex
    flex-wrap: wrap
    padding: 80px 50px
  .order-card
    width: 33.333%
    padding: 10px
    &-inner
      border: 1px solid
      padding: 20px
  h3
    margin: 0 0 20px 0
    &:last-child
      margin: 0
</style>
