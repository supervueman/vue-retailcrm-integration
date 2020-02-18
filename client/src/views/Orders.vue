<template>
  <SectionBlock>
    <Container>
      <Card v-for="order in orders" :key="order.id">
        <div class="card--content">
          <h3>Order number: {{ order.number }}</h3>
          <h3>Summ: {{ order.summ }}</h3>
          <h3>Delivery cost: {{ order.delivery.cost }}</h3>
          <h3>Products list:</h3>
          <div class="card--item" v-for="item in order.items" :key="item.id">
            <h4>Name: {{item.offer.displayName}}</h4>
            <h4>Price: {{item.initialPrice}} руб.</h4>
            <h4>Quantity: {{item.quantity}} {{item.offer.unit.sym}}</h4>
          </div>
        </div>
      </Card>
    </Container>
  </SectionBlock>
</template>

<script>
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionBlock from "@/components/SectionBlock";
import Btn from "@/components/Btn";

export default {
  name: "Home",

  components: {
    Container,
    Card,
    SectionBlock,
    Btn
  },

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
    }
  }
};
</script>
