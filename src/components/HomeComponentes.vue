<template>
  <div class="fondo">
    <h1 class="pt-2">"GRACIAS TOTALES"</h1>
    <p class="fs-4 text-blanco">Te invitamos a conocer más sobre la banda que logró conquistar a millones de personas</p>
  </div>
</template>

<script>
export default {
  name: 'HomeComponentes',
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
      localStorage.setItem('dato', JSON.stringify(this.items));
      console.log(this.items);
    })
  }
}
</script>