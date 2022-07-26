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
  mounted(){
    fetch('https://sodasstereo.000webhostapp.com/api/todos.php')
    .then(response => response.json())
    .then(response => {
      this.items = response;
      localStorage.setItem('prueba', JSON.stringify(this.items));
      console.log(this.items);
    })
  }
}
</script>
