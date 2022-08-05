<template>
  <div class="home">
    <HomeComponentes/>
  </div>
</template>

<script>

import HomeComponentes from '@/components/HomeComponentes.vue'

export default {
  name: 'HomeView',
  components: {
    HomeComponentes
  },
  data(){
    return {
      items: [],
    }
  },
}
</script>
