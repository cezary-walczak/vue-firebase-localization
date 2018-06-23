<template lang="pug">
  section#profile
    .profile(v-if="profile")
      h2 {{ profile.alias }} wall
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'ViewProfile',
  data() {
    return {
      profile: null
    }
  },
  created() {
    db.collection('users').doc(this.$route.params.id).get()
    .then(user => {
      this.profile = user.data()
    })
    .catch(error => { console.log(errors) })
  }
}
</script>

<style lang="stylus" scoped>

</style>
