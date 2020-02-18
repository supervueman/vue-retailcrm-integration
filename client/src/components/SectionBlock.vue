<template>
  <section class="section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Section"
};
</script>

<style lang="sass">
.section
	width: 100%
	padding: 100px 0
</style>
