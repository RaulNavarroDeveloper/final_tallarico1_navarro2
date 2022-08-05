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
                            <!-- <input type="checkbox" -->
                            <!-- :id="index"
                            @change="favoritear"
                            :checked="isChecked"
                            > -->
                        <div class="row px-3">
                            <!-- <p class="col-5"><i class="fa-solid fa-thumbs-up"></i> Me Gusta</p>
                            <p class="col-5"><i class="fa-solid fa-thumbs-down"></i> No Me Gusta</p> -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- <input type="checkbox" 
            :value="pelicula" 
            :id="id"
            @change="favoritear" 
            :checked="isChecked" 
                /> -->
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
    update:function(){
        let x = document.querySelector('.y');
        console.log(x);
    },
    computed: {
        isChecked: function(){ 
            let localFavoritos = localStorage.getItem( 'favorito' );
            console.log(localFavoritos);
            if(localFavoritos){
                localFavoritos = JSON.parse( localFavoritos );
                console.log(localFavoritos);
            }else{
                localFavoritos = [];
            }
            console.log(this.id);
            console.log(this.id in localFavoritos);
            
            return this.id in localFavoritos
            // return this.id in localFavoritos;
            // console.log(this.id);
            //Devolverá qué pelicula tiene que mantener en su checkbox true o false para que persista el icono de favorito, si no se pierde el estado del checkbox

            // for(let x of this.arrayId){
            //     console.log(x in localFavoritos);
            //     return x in localFavoritos;
            // }
            // console.log(this.id)
        },
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
        // console.log(this.traerComentarioSesion);
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
        modal.style.cssText = 'width: 50%; height: 450px; margin: auto; background-color: gray; z-index:1; position: fixed; top: 20%; right: 25%; border-radius: 20px;';
        let h2Modal = document.createElement('h2');
        h2Modal.style.cssText = 'text-align: center; margin-top: 0.5rem;'
        h2Modal.innerHTML = 'Editar Comentario';

        let btnCerrar = document.createElement('a');
        // btnCerrar.className = 'cerrar';
        btnCerrar.href = 'javascript:void(0)';
        btnCerrar.innerHTML = 'X';
        btnCerrar.addEventListener('click', () => {
        document.querySelector('.modal-editar').remove();
        return false;
    });
        let divComentario = document.createElement('div');
        divComentario.className = 'd-flex flex-column ms-3 mt-3' 

        let labelComentario = document.createElement('label');
        labelComentario.for = "comentario";
        labelComentario.innerHTML = "Editar Comentario:";

        let textareaComentario = document.createElement('textarea');
        textareaComentario.style.cssText = 'border-radius: 10px; width: 90%; margin: auto; margin-top: 0.5rem;'
        textareaComentario.id = "comentario";
        textareaComentario.innerHTML = comentarioEditar.comentario;

        let divBoton = document.createElement('div');
        divBoton.className = 'd-flex justify-content-center mt-5'

        let aBoton = document.createElement('a');
        aBoton.className = ' btn btn-warning';
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
        modal.append(h2Modal, btnCerrar, divComentario, divBoton);
        divComentario.append(labelComentario, textareaComentario);
        divBoton.append(aBoton)
        
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
    favoritear( e ){ //guarda en localStorage como favorito....
        //console.log( this.id, this.pelicula, this.caratula );

        // el this de Vue tiene una propiedad llamada _props que es un array con todos los properties + getter/setter de esas propiedades 
        // console.log(e.target.id);
        let estado = e.target.checked;
        this.estado = estado;
        let obj = this.local[e.target.id];
        obj.id = e.target.id;
        this.id = e.target.id;
        if(estado == true){
            this.agregarFavorito(obj);
        } else{
            this.quitarFavorito(e.target.id);
        }

        // console.log(this.id);
        // console.log(this.isChecked);
    },
    agregarFavorito(datos){ //para agregar al localStorage
		// console.log( 'agregando ' , datos );			
        let localStorageFav = localStorage.getItem( 'favorito');

        if(!localStorageFav){
            localStorageFav = []; 
        }else{
            localStorageFav = JSON.parse(localStorageFav); 
        }

        localStorageFav[datos.id] = datos; 
        // console.log(peliculasLocalStorage);
            // console.log(localStorageFav[datos.id] = datos)

        localStorageFav = JSON.stringify(localStorageFav);
        localStorage.setItem('favorito', localStorageFav);
        this.arrayId.push(datos.id);
        console.log(this.arrayId);
    },
    quitarFavorito(quitar){ //para quitar del localStorage
        console.log( 'quitando ' + quitar );


        
        let localStorageFav = localStorage.getItem('favorito'); 				
        localStorageFav = JSON.parse(localStorageFav); 
        
        if(quitar in localStorageFav){
            delete localStorageFav[quitar]; 
        }

        let localStorageStringify = JSON.stringify(localStorageFav); 
        localStorage.setItem( 'favorito', localStorageStringify);
            this.arrayId.splice(quitar, 1);
            console.log(this.arrayId);
    },
    getImgUrl: function (path) {
            return require('@/assets/imagenes/' + path);
    }
	},
}
</script>