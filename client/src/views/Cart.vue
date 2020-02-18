<template>
  <SectionBlock>
    <Container :columns="3">
      <Card v-for="(item, i) in cart" :key="i">
        <div class="card--media">
          <img :src="item.imageUrl" />
        </div>
        <div class="card--content">
          <h3>Name: {{item.name}}</h3>
          <h3>Price: {{item.maxPrice}} руб.</h3>
          <h3>Quantity: {{item.quantity}} шт.</h3>
          <h3>Summ: {{item.maxPrice * item.quantity}} руб.</h3>
        </div>
      </Card>
    </Container>
    <Container>
      <div>
        <Btn @click="createOrder">CREATE ORDER</Btn>
      </div>
    </Container>
  </SectionBlock>
</template>

<script>
import SectionBlock from "@/components/SectionBlock";
import Container from "@/components/Container";
import Btn from "@/components/Btn";
import Card from "@/components/Card";

export default {
  name: "Cart",

  components: {
    SectionBlock,
    Container,
    Btn,
    Card
  },

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
    cart() {
      return this.$store.getters.getCart;
    }
  },

  methods: {
    async createOrder() {
      const items = this.cart.map(el => {
        return {
          quantity: el.quantity,
          offer: {
            externalId: el.id
          }
        };
      });

      await this.$store.dispatch("createOrder", { ...this.order, items });
    }
  }
};
</script>
