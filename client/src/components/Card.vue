<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style lang="sass">
	.card
		border: 1px solid #000
		width: 100%
		display: flex
		flex-direction: column
		justify-content: space-between
		&--media
			width: 100%
			height: 300px
			overflow: hidden
			img
				width: 100%
		&--content
			width: 100%
			padding: 10px 20px
		&--actions
			width: 100%
			.card--btn
				width: 100%
				border: none
				border-top: 1px solid #000
				margin: 0
</style>
