<template>
  <header class="toolbar">
    <Link to="/">Main</Link>
    <Link to="/orders">Orders</Link>
    <Link to="/cart">Cart</Link>
  </header>
</template>

<script>
import Link from "@/components/Link";

export default {
  name: "Toolbar",

  components: {
    Link
  }
};
</script>

<style lang="sass">
.toolbar
	display: flex
	align-items: center
	width: 100%
	height: 50px
	padding: 0 20px
</style>
