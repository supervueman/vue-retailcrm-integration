<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container"
};
</script>

<style lang="sass">
	.container
		width: 1200px
		display: grid
		grid-gap: 20px
		grid-template-columns: repeat(3, 33%)
		margin:
			left: auto
			right: auto
</style>
