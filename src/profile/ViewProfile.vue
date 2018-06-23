<template lang="pug">
  section#profile
    .profile(v-if="profile")
      h2 {{ profile.alias }} wall
      .comments
        ul
          li(v-for="comment in comments")
            p {{ comment.from }}
            p {{ comment.content }}
        form(@submit.prevent="addComment")
          label(for="comment") Add a comment
          input(type="text" name="comment" v-model="newComment")
          p(v-if="feedback")
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
  name: 'ViewProfile',
  data() {
    return {
      user: null,
      profile: null,
      newComment: null,
      comments: [],
      feedback: null
    }
  },
  created() {
    // get current user
    db.collection('users').where('user_id', '==', firebase.auth().currentUser.uid).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        this.user = doc.data()
        this.user.id = doc.id
      })
    })
    .catch(error => { console.log(error) })
    // profile data
    db.collection('users').doc(this.$route.params.id).get()
    .then(user => {
      this.profile = user.data()
    })
    .catch(error => { console.log(errors) })
    // comments
    db.collection('comments').where('to', '==', this.$route.params.id).onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == 'added') {
          this.comments.push({
            from: change.doc.data().from,
            content: change.doc.data().content
          })
        }
      })
    })
  },
  methods: {
    addComment() {
      if (this.newComment) {
        this.feedback = null
        db.collection('comments').add({
          to: this.$route.params.id,
          from: this.user.id,
          content: this.newComment,
          time: Date.now()
        })
        .then(() => {
          this.newComment = null
        })
      } else {
        this.feedback = 'You must enter a comment to add it'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
