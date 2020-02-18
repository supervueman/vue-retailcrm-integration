<template>
  <SectionBlock>
    <Container :columns="3">
      <Card v-for="product in products" :key="product.id">
        <div class="card--media">
          <img :src="product.imageUrl" />
        </div>
        <div class="card--content">
          <h3>{{product.name}}</h3>
          <h3>{{product.maxPrice}} руб.</h3>
        </div>
        <div class="card--actions">
          <Btn class="card--btn" @click="addToCart(product)">Add to cart</Btn>
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

    addToCart(item) {
      console.log(item);
      this.$store.dispatch("addToCart", item);
    }
  }
};
</script>
