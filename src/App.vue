
<template>
  <div id="app">
    <header class="container-fluid bg-dark">
      <nav class="navbar navbar-expand-lg navbar-light bg-light container navbar-dark bg-dark fs-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
              <img v-bind:src="require('./assets/imagenes/logo-sodastereo.png')" alt="logo Soda Stereo" width="30" height="50" 
            class="d-inline-block align-text-center w-auto">
            Soda Stereo          
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/integrantes">Integrantes</router-link></li>
                <li><router-link to="/discografia">Discografia</router-link></li>
                <li><router-link to="/ultima">Última Gira</router-link></li>
                <li><router-link to="/ingresar" >Formulario</router-link></li>
                <li><router-link to="/mostrar">Comentarios</router-link></li>
                <li v-if="this.posicionUsuarioSesion === -1"><router-link to="/iniciarSesion">Iniciar Sesión</router-link></li>
                <li v-if="this.posicionUsuarioSesion != -1"><button class="btn btn-primary btn-nav" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-user"></i></button></li>
              </ul>
            </div>
        </div>
      </nav>
    </header>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Cuenta <i class="fa-solid fa-user"></i></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
       <ul v-if="posicionUsuarioSesion != -1" class="ul-cuenta">
        <li>Nombre: {{this.traerUsuarioSesion[0].nombre}}</li>
        <li>Apellido: {{this.traerUsuarioSesion[0].apellido}}</li>
        <li>Email: {{this.traerUsuarioSesion[0].email}}</li>
       </ul>
       <a v-if="this.posicionUsuarioSesion != -1" class="btn btn-danger" href="#" @click="cerrarSesion()">Cerrar Sesión</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default ({
  name: 'App',
  data(){
    return {
      arrayUsuarios: [],
    }
  },
  computed: {
    traerUsuarioSesion: function (){
        return this.arrayUsuarios.filter(usuario => usuario.sesionEstado === true);
    },
    posicionUsuarioSesion:function(){
      return this.arrayUsuarios.map(usuario => usuario.sesionEstado).indexOf(true);
    }
    },
    methods: {
      cerrarSesion: function () {
        this.arrayUsuarios[this.posicionUsuarioSesion].sesionEstado = false;
        localStorage.setItem("usuarios",JSON.stringify(this.arrayUsuarios));
      }
    },
  mounted:function(){
    if(localStorage.usuarios){
      this.arrayUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    console.log(this.arrayUsuarios, this.posicionUsuarioSesion);
  }
})
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  font-family: 'Helvetica';
}

body {
  background-color: #212529;
}

.fondo {
  background-image: url(assets/imagenes/soda-fondo.jpg);
  position: scroll;
  background-size: cover;
  height: 90vh;
  background-position: center;
  text-align: center;
  color: #ffcc00;
}

.fondo h1{
  font-size: 4rem;
  font-weight: 1000;
}

.fondo p{
  font-size: 2rem;
}

.navbar {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
}

.navbar li {
  margin-bottom: 15px;
}

.navbar-brand:hover > img{
  transform: rotate(-360deg);
  transition: 1s;
}

.form {
  background:#ffcc00;
  text-shadow: 2px 3px 5px grey;
  color:white;
  border-radius: 10px;
}

a {
  padding:10px;
  text-decoration: none; 
  color: white
}

a:hover {
  color: #ffcc00;
}

.router-link-exact-active{
  color:white;
  border-bottom: 1px solid #ffcc00;
}

.usuario {
  border-radius: 20px;
}

.divAvatar1 {
  background-image: url(assets/imagenes/avatar.jpg);
  background-size: cover;
  border-radius: 50px;
  width: 65px;
  height: 65px;
  margin: 15px;
}

.text-blanco{
  color: white;
}

.classerror{
  background:#ef5350;
  border-radius: 5px;
}
.enviado{
  border:solid 1px green; 
  background:#43a047;
  border-radius:5px;color:white; 
  padding-left: 10px;
}

.ul-discografia li{
  list-style: none;
}

.ul-discografia:nth-child(1){
  margin-top: 10px;
}

.btn-nav{
  background-color:#ffcc00;
}

.btn-nav:hover{
    background-color:#ffcc00;
    opacity: 0.8;
    transition: 0.6s;
}

.fa-trash{
  margin-left: 15px;
  transition: 0.5s;
}

.fa-trash:hover{
    color:red;
    opacity: 0.8;
    transition: 0.3s;
}

.fa-pen-to-square:hover{
  color:#ffcc00;
  opacity: 0.8;
  transition: 0.3s;
}

.fa-circle-xmark:hover{
  color: red;
  transition: 0,5s;
}
</style>