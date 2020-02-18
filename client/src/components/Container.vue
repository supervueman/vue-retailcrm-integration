<template>
  <div class="container" :style="{'grid-template-columns': `repeat(${columns}, 1fr)`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",

  props: {
    columns: {
      type: Number,
      default: 1
    }
  }
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
