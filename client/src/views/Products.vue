<template>
  <div class="page">
    <header class="toolbar">
      <button class="btn" @click="createOrder">CREATE ORDER</button>
    </header>

    <section class="section">
      <div class="order-card" v-for="order in orders" :key="order.id">
        <div class="order-card-inner">
          <h3>Order number: {{ order.number }}</h3>
          <h3>Summ: {{ order.summ }}</h3>
          <h3>Delivery cost: {{ order.delivery.cost }}</h3>
          <pre>{{ order.items }}</pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    order: {
      firstName: "Rinat",
      items: [
        {
          quantity: 2,
          offer: {
            externalId: "26"
          }
        }
      ]
    }
  }),

  computed: {
    orders() {
      return this.$store.getters.getOrders;
    }
  },

  async mounted() {
    await this.fetchOrders();
  },

  methods: {
    async fetchOrders() {
      await this.$store.dispatch("fetchOrders");
    },

    async createOrder() {
      await this.$store.dispatch("createOrder", this.order);
    }
  }
};
</script>
