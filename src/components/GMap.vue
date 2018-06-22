<template lang="pug">
  section#map
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'GMap',
  data() {
    return {

    }
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52, lng: 21 },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false
      })
    }
  },
  mounted() {
    this.renderMap()
    console.log(firebase.auth().currentUser)
  }
}
</script>

<style lang="stylus" scoped>
  section#map
    width 100%
    height 100%
    position absolute 
    top 0
    left 0
    margin 0
    padding 0
    z-index -1
</style>
