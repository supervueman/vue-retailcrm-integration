<template>
  <div class="page">
    <header class="toolbar">
      <input
        type="text"
        class="input"
        name="order_number"
        placeholder="Order number"
        v-model="order.externalId"
      />
      <button class="btn" @click="createOrder">CREATE ORDER</button>
    </header>

    <SectionBlock>
      <Container>
        <Card v-for="product in products" :key="product.id">
          <div class="card--media">
            <img :src="product.imageUrl" alt />
          </div>
          <div class="card--content">
            <h3>{{product.name}}</h3>
            <h3>{{product.maxPrice}} руб.</h3>
          </div>
          <div class="card--actions">
            <Btn class="card--btn">Add to cart</Btn>
          </div>
          <!-- <pre>{{ product }}</pre> -->
        </Card>
      </Container>
    </SectionBlock>
  </div>
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

  data: () => ({
    order: {
      externalId: "",
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
    products() {
      return this.$store.getters.getProducts;
    }
  },

  async mounted() {
    await this.fetchProducts();
  },

  methods: {
    async fetchProducts() {
      await this.$store.dispatch("fetchProducts");
    },

    async createOrder() {
      await this.$store.dispatch("createOrder", this.order);
    }
  }
};
</script>

<style lang="sass">
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
