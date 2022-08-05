<template>
    <div id="contenedor">
        <div class="container form py-4 fs-5 row m-auto justify-content-center">
        <div class="col-12 col-md-6">
            <h1 class="text-light">Registro</h1>
            <div v-if="hayErrores" class="classerror">
            <ul>
                <li v-for="(x, index) in errores" :key="index">{{x}}</li>
            </ul>
            </div>
        </div>
        <form action="#" class="col-12 col-md-6" @submit.prevent="registro" novalidate>
            <div class="mb-3">
				<label for="nombre" class="form-label text-light">Nombre:</label>
				<input type="text" v-model.trim="nombre" class="form-control" id="nombre" placeholder="Nombre">
			</div>
			<div class="mb-3">
				<label for="apellido" class="form-label text-light">Apellido:</label>
				<input type="text" v-model.trim="apellido" class="form-control" id="apellido" placeholder="Apellido">
			</div>
			<div class="mb-3">
				<label for="email" class="form-label text-light">E-mail:</label>
				<input type="email" v-model.trim="email" class="form-control" id="email" placeholder="tu@email.com">
			</div>
            <div class="mb-3">
				<label for="password" class="form-label text-light">Contraseña:</label>
				<input type="password" v-model.trim="password" class="form-control" id="password">
			</div>
            
            <button type="submit" value="iniciar-sesion" class="btn btn-dark">Registrate</button>
            <p class="mt-3">¿Ya tenés una cuenta?<a class="a-registro" @click="redireccion()">Haz click aquí para iniciar sesion</a></p>
        </form>
    </div>
    </div>    
</template>

<script>
export default ({
    name: 'RegistroComponentes',
    data() {
        return {
            arrayUsuarios: [],
            id: 0,
            nombre:null,
            apellido:null,
            email:null,
            password: null,
            errores: [],
        }
    },
    computed: {
        hayErrores: function(){
            return this.errores.length; 
        },
        existeMail: function(){
            return this.arrayUsuarios.filter(usuario => usuario.email === this.email);
        }
    },
    methods: {
        registroExitoso:function(){
            let divContenedor = document.querySelector('#contenedor');

            let divRegistro = document.createElement('div');
            divRegistro.style.cssText = 'width: 80%;height: 75px; background-color:green; margin:auto; display:flex; justify-content: center; align-items:center; border-radius:15px; margin-bottom:1rem;';
            divRegistro.className = 'animate__animated animate__fadeInDown'

            let pRegistro = document.createElement('p');
            pRegistro.innerHTML = 'Te registraste exitosamente, ahora puedes navegar iniciar sesión.'
            pRegistro.className = 'text-light h5';

            divContenedor.prepend(divRegistro);
            divRegistro.append(pRegistro);

            setTimeout(function(){
                divRegistro.className = 'animate__animated animate__fadeOutUp';
            },4000);

            setTimeout(function(){
                divRegistro.remove();
            },5000);
        },
        sumarId:function(){
			this.id++;
			return this.id;
		},
        redireccion:function () {
            this.$router.push("/iniciarSesion")
        },

        registro:function(){
            this.errores = [];
            if(!this.nombre){
                this.errores.push('Debes ingresar un nombre');
            }
            if(!this.apellido){
                this.errores.push('Debes ingresar un apellido');
            }
            if(!this.email){
                this.errores.push('Debes ingresar un email');
            }
            if(!this.password){
                this.errores.push('Debes ingresar una contraseña');
            }

            if(this.errores.length == 0){
                this.sumarId();
                let objUsuarios = {
                    id: this.id,
                    nombre: this.nombre,
                    apellido: this.apellido,
                    email: this.email,
                    password: this.password,
                    sesionEstado: false,
                }


                if(!localStorage.usuarios){
                    this.arrayUsuarios = [];
                } else {
                    this.arrayUsuarios = JSON.parse(localStorage.getItem("usuarios"));
                    if(this.existeMail.length == 1){
                        console.log('el email existe, ERROR');
                        this.errores.push('El email ya está registrado, prueba con otro.')
                    } else {
                        console.log('el email no existe, REGISTRARSE');
                        //Notificación de registro exitoso
                        this.registroExitoso();
                        this.arrayUsuarios.push(objUsuarios);
                        localStorage.setItem("usuarios",JSON.stringify(this.arrayUsuarios));
                    }
                }

                //Reseteo de Inputs
                this.nombre = null;
                this.apellido = null;
                this.email = null;
                this.password = null;
            }
        }
    },
    mounted:function() {
        localStorage.setItem("usuarios",JSON.stringify(this.arrayUsuarios));
    }
})
</script>


<style>

.classerror{
  background:#ef5350;
  border-radius: 5px;
}
.classerror ul li{
  list-style-type: none;
}
</style>
