<template lang="pug">
  section#signup
    form(@submit.prevent="signup")
      h2 Signup
      div
        label(for="email") email 
        input(type="email" name="email" v-model="email")
      div
        label(for="password") password 
        input(type="password" name="password" v-model="password")
      div
        label(for="alias") alias 
        input(type="text" name="alias" v-model="alias")
      div
        button Signup
        p(v-if="feedback") {{feedback}}
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import slugify from 'slugify'

export default {
  name: 'Signup',
  data () {
    return {
      email: null,
      password: null,
      alias: null,
      slug: null,
      feedback: null
    }
  },
  methods: {
    signup() {
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        // check if user alias is unique
        db.collection('users').doc(this.slug).get()
        .then(doc => {
          if(doc.exists) {
            this.feedback = 'This alias already exist'
          } else {
            // create user
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .catch(error => { 
              console.log(error)
              this.feedback = error.message
            })
            this.feedback = 'This alias is free to use'
          }
        })
        .catch(error => { console.log(error) } )
      } else {
        this.feedback = 'You must enter all fields'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  section#signup
    form
      h2
        font-weight lighter
      div
        margin 10px
</style>
