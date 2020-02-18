<template>
  <router-link :to="to" class="link">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "Link",

  props: {
    to: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style lang="sass">
  .link
    text-transform: uppercase
    color: #000
    margin-right: 20px
    text-decoration: none
</style>
