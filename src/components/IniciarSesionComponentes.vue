<template>
    <div id="contenedor">
        <div class="container form py-4 fs-5 row m-auto justify-content-center">
            <div id="inicio-sesion-exitoso"></div>
            <div class="col-12 col-md-6">
                <h1 class="text-light">Iniciar Sesion</h1>
                <div v-if="hayErrores" class="classerror">
                <ul>
                    <li v-for="(x, index) in errores" :key="index">{{x}}</li>
                </ul>
                </div>
            </div>
            <form action="#" class="col-12 col-md-6" @submit.prevent="iniciarSesion" novalidate>
                <div class="mb-3">
                    <label for="email" class="form-label text-light">E-mail:</label>
                    <input type="email" v-model.trim="email" class="form-control" id="email" placeholder="tu@email.com">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label text-light">Contraseña:</label>
                    <input type="password" v-model.trim="password" class="form-control" id="password">
                </div>
                <button type="submit" value="iniciar-sesion" class="btn btn-dark">Iniciar Sesión</button>
                <p class="mt-3">¿Aún no tienes una cuenta?<a class="a-registro" @click="redireccion()">Haz click aquí para registrarte</a></p>
            </form>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'IniciarSesionComponentes',
    data() {
        return {
            arrayUsuarios: [],
            email:"",
            password: "",
            errores: [],
        }
    },
    computed: {
        hayErrores: function(){
            return this.errores.length; 
        },
        comprobarEmail:function(){
            return this.arrayUsuarios.filter(usuario => usuario.email === this.email);
        },
        posicionUsuarioEmail:function(){
            return this.arrayUsuarios.map(usuario => usuario.email).indexOf(this.email);
        },
    },
    methods: {
        iniciarSesionExitoso:function (){
            console.log(this.posicionUsuarioEmail);
            let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios"));
            arrayUsuarios[this.posicionUsuarioEmail].sesionEstado = true;
            localStorage.setItem("usuarios",JSON.stringify(arrayUsuarios));
            
            this.comprobarEmail[0].sesionEstado = true;
            console.log(this.comprobarEmail[0].sesionEstado);

            let divContenedor = document.querySelector('#contenedor');

            let divIniciarSesion = document.createElement('div');
            divIniciarSesion.style.cssText = 'width: 80%;height: 75px; background-color:green; margin:auto; display:flex; justify-content: center; align-items:center; border-radius:15px; margin-bottom:1rem;';
            divIniciarSesion.className = 'animate__animated animate__fadeInDown'

            let pIniciarSesion = document.createElement('p');
            pIniciarSesion.innerHTML = 'Iniciaste sesión exitosamente, ahora navegas desde: ' + this.email;
            pIniciarSesion.className = 'text-light h5 text-center';

            divContenedor.prepend(divIniciarSesion);
            divIniciarSesion.append(pIniciarSesion);

            setTimeout(function(){
                divIniciarSesion.className = 'animate__animated animate__fadeOutUp';
            },4000);

            setTimeout(function(){
                divIniciarSesion.remove();
            },5000);

            setTimeout(function(){
                location.reload();
            },2500);
        },
        redireccion:function () {
            this.$router.push("/registro")
        },
        guardarEstadoSesion: function () {
        },
        iniciarSesion:function(){
            this.errores = [];
            if(!this.email){
                this.errores.push('Debes ingresar un email');
            }
            if(!this.password){
                this.errores.push('Debes ingresar una contraseña');
            }

            if(this.errores.length == 0){
                if(localStorage.usuarios){
                    this.arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'));
                    if(this.comprobarEmail.length == 1){
                        if(this.comprobarEmail[0].email === this.email && this.comprobarEmail[0].password === this.password){
                            this.iniciarSesionExitoso();
                        } else {
                            this.errores.push('Las credenciales ingresadas no coinciden');
                        }
                    } else {
                        console.log('el mail no existe, evitamos error');
                        this.errores.push('El mail que ingresó no está registrado');
                    }
                } else {
                    this.errores.push('El mail que ingresó no está registrado');
                }
            }
        }
    },
})
</script>


<style>
    .a-registro{
        cursor: pointer;
        transition:0.6s;
    }
    .a-registro:hover{
        color:black;
        transition: 0.6s;
    }

    .classerror ul li{
        list-style-type: none;
    }
</style>
