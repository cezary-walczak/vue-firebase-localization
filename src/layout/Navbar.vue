<template lang="pug">
  section#navbar
    nav
      router-link(:to="{ name: '' }") Signup
      router-link(:to="{ name: '' }") Login
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  section#navbar
    nav
      a
        margin 10px
</style>
