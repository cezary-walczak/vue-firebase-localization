<template lang="pug">
  section#navbar
    nav
      router-link(v-if="!user" :to="{ name: 'Signup' }") Signup
      router-link(v-if="!user" :to="{ name: 'Login' }") Login
      a(v-if="user") {{user.email}}
      a(v-if="user" @click="logout") Logout
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data() {
    return {
      user: null
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.push({ name: 'Login' })
      })
      .catch(error => { console.log(error) })
    }
  },
  created() {
    // checking user state
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
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
