<template>
  <div class="home">
    <DiscografiaComponentes/>
  </div>
</template>

<script>

import DiscografiaComponentes from '@/components/DiscografiaComponentes.vue'

export default {
  name: 'DiscografiaView',
  components: {
    DiscografiaComponentes
  },
  data(){
    return {
      discos: []
    }
  },
}
</script>