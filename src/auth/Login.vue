<template lang="pug">
  section#login
    form(@submit.prevent="login")
      h2 Login
      div
        label(for="email") email 
        input(type="email" name="email" v-model="email")
      div
        label(for="password") password 
        input(type="password" name="password" v-model="password")
      // div
      //   label(for="alias") alias 
      //   input(type="text" name="alias" v-model="alias")
      div
        button Login
        p(v-if="feedback") {{feedback}}
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    }
  },
  methods: {
    login() {
      if(this.email && this.password) {
        // log user in
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          this.$router.push({ name: 'GMap' })
        })
        .catch(error => {
          this.feedback = error.message
        })
        this.feedback = null
      } else {
        this.feedback = 'Please fill in both fields'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  section#login
    form
      h2
        font-weight lighter
      div
        margin 10px
</style>
