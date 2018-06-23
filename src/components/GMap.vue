<template lang="pug">
  section#map
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'GMap',
  data() {
    return {
      lat: 52,
      lng: 21
    }
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false
      })
    }
  },
  mounted() {
    // get user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( // takes callback for success and failure and object for options
      pos => {
        this.lat = pos.coords.latitude
        this.lng = pos.coords.longitude
        this.renderMap()
      },
      error => {
        console.log(error)
        this.renderMap()
      },
      {
        maximumAge: 60000,
        timeout: 3000
      })
    } else {
      // position center by default value
      this.renderMap()
    }
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
