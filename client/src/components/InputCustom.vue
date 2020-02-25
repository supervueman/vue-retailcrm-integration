<template>
  <input
    type="text"
    @input="$emit('input', $event.target.value)"
    :value="value"
    class="input"
    :placeholder="placeholder"
    :name="name"
  />
</template>

<script>
export default {
  name: "Input",

  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="sass">
	.input
		padding: 10px 10px
		border: 1px solid
		outline: none
		margin-right: 20px
</style>
