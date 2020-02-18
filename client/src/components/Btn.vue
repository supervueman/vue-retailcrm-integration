<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Btn"
};
</script>

<style lang="sass">
.btn
  padding: 10px 20px
  border: 1px solid
  outline: none
  cursor: pointer
  margin-right: 20px
  &:hover
    background-color: #000
    color: #fff
</style>
