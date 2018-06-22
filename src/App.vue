<template lang="pug">
  #app
    Navbar
    router-view
</template>

<script>
import Navbar from '@/layout/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
