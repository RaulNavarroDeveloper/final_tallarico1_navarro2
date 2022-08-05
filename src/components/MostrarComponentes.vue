<template>
    <div id="contenedor">
        <div class="container row m-auto align-items-center">
            <h1 class="text-blanco mt-5 fs-2">{{sin_datos}}</h1>
            <div class="card mb-3 usuario m-auto" style="max-width: 540px;" v-for="(item, index) in local" :key="index">
                <div class="row g-0">
                    <div class="col-md-4 divAvatar1"></div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title fs-4">{{item.nombre}} {{item.apellido}}</h5>
                            <p>{{index}}</p>
                            <p class="card-text text-muted">{{item.email}}</p>
                            <p class="card-text">{{item.comentario}}</p>
                            <p class="card-text" v-for="(x, index) in item.selected" :key="index"><span class="fw-bold">Disco recomendado:</span> {{x}}</p>
                        </div>
                        <div v-if="traerUsuarioSesion.length != 0">
                            <div class="d-flex justify-content-end pb-3" v-if="traerUsuarioSesion[0].email == item.email">
                                <a :id="index"  @click="actualizarComentario($event)" href="#" class="btn"><i :id="index" class="fa-solid fa-pen-to-square fs-5"></i></a>
                                <a :id="index" href="#" class="btn" @click="borrarComentario($event)"><i :id="index" class="fa-solid fa-trash fs-5"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'MostrarComponentes',
  data:function(){
			return {
				local:[],
				sin_datos: "",
                id: 0,
                arrayId: [],
                estado: false,
                arrayUsuarios: [],
			}
	},
    mounted:function(){
		this.ver_comentario();
    if(localStorage.usuarios){
        this.arrayUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
		console.log(this.posicionUsuarioSesion, this.traerUsuarioSesion);
        console.log(this.local);
	},
    computed: {
        traerUsuarioSesion: function (){
            return this.arrayUsuarios.filter(usuario => usuario.sesionEstado === true);
        },
        posicionUsuarioSesion:function(){
            return this.arrayUsuarios.map(usuario => usuario.sesionEstado).indexOf(true);
        },
    },
	methods:{
    ver_comentario:function() {	
        if(localStorage.dato){
            this.local=JSON.parse(localStorage.getItem("dato"));	
        } else{
            this.sin_datos = "Aún no hay comentarios... Te invitamos a que completes el formulario";
        }
	},
    borrarComentario:function(event) {
        let idBtn = event.target.id;
        if (confirm('Estas seguro que quieres eliminar este comentario?')) {
            this.local.splice(idBtn, 1);
            let length = this.local.length; 
            localStorage.setItem('dato', JSON.stringify(this.local));
            if(length == 0){
                localStorage.removeItem('dato');
                this.ver_comentario();
            }
        }
    },
    actualizarComentario: function(event) {
        let idBtn = event.target.id;
        let comentarioEditar = this.local[idBtn];
        console.log(comentarioEditar)
        //Modal para cambiar datos del comentario
        let modal = document.createElement('div');
        modal.className = 'modal-editar';
        let divHeader = document.createElement('div');
        divHeader.className = 'd-flex justify-content-between'
        modal.style.cssText = 'width: 50%; height: 450px; margin: auto; background-color: #ffcc00; z-index:1; position: fixed; top: 20%; right: 25%; border-radius: 20px;';
        let h2Modal = document.createElement('h2');
        h2Modal.style.cssText = 'text-align: center; margin-top: 0.5rem;'
        h2Modal.innerHTML = 'Editar Comentario';
        h2Modal.className = 'ms-5 mt-3'

        let btnCerrar = document.createElement('a');
        btnCerrar.href = 'javascript:void(0)';
        btnCerrar.className = 'me-5 mt-3';
        btnCerrar.addEventListener('click', () => {
        document.querySelector('.modal-editar').remove();
        return false;
        });
        let logoCerrar = document.createElement('i');
        logoCerrar.className = 'fa-regular fa-circle-xmark fs-3';

        let divComentario = document.createElement('div');
        divComentario.className = 'd-flex flex-column ms-3 mt-3' 

        let labelComentario = document.createElement('label');
        labelComentario.for = "comentario";
        labelComentario.innerHTML = "Escribe aquí tu nuevo comentario:";

        let textareaComentario = document.createElement('textarea');
        textareaComentario.style.cssText = 'border-radius: 10px; width: 90%; margin: auto; margin-top: 0.5rem;'
        textareaComentario.id = "comentario";
        textareaComentario.innerHTML = comentarioEditar.comentario;

        let divBoton = document.createElement('div');
        divBoton.className = 'mt-5 m-auto w-50';

        let aBoton = document.createElement('a');
        aBoton.className = ' btn btn-dark d-flex justify-content-center';
        aBoton.innerHTML = 'Guardar Cambios';
        aBoton.addEventListener('click', (e) => {
            console.log(e, textareaComentario.value);
        //Parseo
        let comentariosActuales = JSON.parse(localStorage.getItem('dato'));
        //Modifico
        comentarioEditar.comentario = textareaComentario.value;
        comentariosActuales[idBtn] = comentarioEditar;
        //Seteo
        localStorage.setItem('dato', JSON.stringify(comentariosActuales));
        document.querySelector('.modal-editar').remove();
        this.guardadoExitoso();
        })

        document.body.append(modal);
        modal.append(divHeader, divComentario, divBoton);
        divHeader.append(h2Modal, btnCerrar);
        btnCerrar.append(logoCerrar);
        divComentario.append(labelComentario, textareaComentario);
        divBoton.append(aBoton);
    },
    guardadoExitoso: function () {
        let divContenedor = document.querySelector('#contenedor');

        let divIniciarSesion = document.createElement('div');
        divIniciarSesion.style.cssText = 'width: 80%;height: 75px; background-color:green; margin:auto; display:flex; justify-content: center; align-items:center; border-radius:15px; margin-bottom:1rem;';
        divIniciarSesion.className = 'animate__animated animate__fadeInDown'

        let pIniciarSesion = document.createElement('p');
        pIniciarSesion.innerHTML = 'Tu comentario se editó de manera exitosa';
        pIniciarSesion.className = 'text-light h5 text-center';

        divContenedor.prepend(divIniciarSesion);
        divIniciarSesion.append(pIniciarSesion);

        setTimeout(function(){
            divIniciarSesion.className = 'animate__animated animate__fadeOutUp';
        },4000);

        setTimeout(function(){
            divIniciarSesion.remove();
        },5000);
    },
    getImgUrl: function (path) {
            return require('@/assets/imagenes/' + path);
    }
	},
}
</script>