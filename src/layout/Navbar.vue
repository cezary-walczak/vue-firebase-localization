<template lang="pug">
  section#navbar
    nav
      router-link(:to="{ name: 'Signup' }") Signup
      router-link(:to="{ name: '' }") Login
      a(@click="logout") Logout
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data() {
    return {

    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.push({ name: 'Signup' })
      })
      .catch(error => { console.log(error) })
    }
  }
}
</script>

<style lang="stylus" scoped>
  section#navbar
    nav
      a
        margin 20px
        padding 20px
        background #fff
</style>
