<template>
  <div id="app">
    <Toolbar />
    <router-view />
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar";

export default {
  components: {
    Toolbar
  }
};
</script>

<style lang="sass">
*
  box-sizing: border-box
html
  font-family: sans-serif
  overflow-x: hidden
  width: 100%
body
  margin: 0
  overflow-x: hidden
  width: 100%
h3
  margin: 0 0 20px 0
  &:last-child
    margin: 0
</style>
