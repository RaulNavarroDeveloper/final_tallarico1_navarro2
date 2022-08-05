<template>
    <div class="container form py-4 fs-5 row m-auto justify-content-center">
		<div class="col-12 col-md-6">
			<h1>Dejanos un Comentario!</h1>
			<p class="pt-4">Completá el formulario para dejarnos un comentario en nuestra página</p>
			<p>Podés también marcar cual es tu Disco preferido de Soda Stereo para recomendarlo en la parte de comentario</p>
			<div class="pt-3" v-if="enviado === true">
				<div v-if="hayErrores" class="classerror">
				<ul>
						<li style="list-style: none;" v-for="(x,index) in errores" :key="index">{{x}}</li>
				</ul>
				</div>
				<div v-else class="enviado">
						<span>Enviado con éxito</span>
				</div>
			</div>
		</div>
		<form class="col-12 col-md-6" v-on:submit.prevent="comentar" novalidate>
			<!-- <div class="mb-3">
				<label for="nombre" class="form-label">Nombre:</label>
				<input type="text" v-model.trim="nombre" class="form-control" id="nombre" placeholder="Nombre">
			</div>
			<div class="mb-3">
				<label for="apellido" class="form-label">Apellido:</label>
				<input type="text" v-model.trim="apellido" class="form-control" id="apellido" placeholder="Apellido">
			</div>
			<div class="mb-3">
				<label for="email" class="form-label">E-mail:</label>
				<input type="email" v-model.trim="email" class="form-control" id="email" placeholder="tu@email.com">
			</div> -->
			<div class="mb-3">
				<label>Álbum favorito</label>
				<select v-model="selected" multiple class="form-select">
					<option v-for="(item,index) in arrayDiscos" :key="index">{{item.disco_nombre}}</option>
				</select>
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label">Dejanos un comentario!</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="comentario"></textarea>
			</div>
			
			<button type="submit" value="Comentar" class="btn btn-dark">Comentar</button>
		</form>
	</div>
</template>
<script>

export default {
  name: 'IngresarComponentes',
//   props: {
// 	usuarioSesion: Array,
// 	usuarioPosicion: Number,
//   },
  data:function(){
		return {
			// id:0,
			// nombre:null,
			// apellido:null,
			comentario:null,
			selected:[],
			// email:null,
			arr: [],
			errores:[],
			enviado: false,
			arrayUsuarios: [],
			arrayDiscos: [],
		}
	},

	computed : {
	hayErrores: function(){
		return this.errores.length; 
	},
	traerUsuarioSesion: function (){
		return this.arrayUsuarios.filter(usuario => usuario.sesionEstado === true);
	},
	posicionUsuarioSesion:function(){
		return this.arrayUsuarios.map(usuario => usuario.sesionEstado).indexOf(true);
	}
	},
	
    methods:{
		// sumarId:function(){
		// 	if(this.errores.length == 0){
		// 		this.id++;
		// 	}
		// 	return this.id;
		// },
	comentar:function() {
		this.enviado = true;
		this.errores = [];

		if (!this.comentario) {
			this.errores.push('Debe completar el comentario');
		}
		if(this.posicionUsuarioSesion == -1){
			this.errores.push('Debes iniciar sesión para poder publicar un comentario');
		}
		if (this.errores.length == 0) {
			this.nuevoObj = {
				// id: this.id,
				nombre: this.traerUsuarioSesion[0].nombre,
				apellido: this.traerUsuarioSesion[0].apellido,
				comentario: this.comentario,
				email: this.traerUsuarioSesion[0].email,
				selected: this.selected
			}

            if(!localStorage.dato){
                this.arr=[]
            }else{
                this.arr=JSON.parse(localStorage.getItem("dato"))
            }
            this.arr.push(this.nuevoObj);
            localStorage.setItem("dato",JSON.stringify(this.arr))
			this.comentario = null;
			this.selected = [];
		}
		// console.log(this.id);
		// Object.assign(this.$data, this.$options.data);
	},
    getImgUrl: function (path) {
            return require('@/assets/imagenes/' + path);
    }
    },
	mounted:function(){
		if(localStorage.usuarios){
			this.arrayUsuarios = JSON.parse(localStorage.getItem("usuarios"));
		}
		console.log(this.posicionUsuarioSesion, this.traerUsuarioSesion);

		// FETCH  a discos
		fetch('https://sodasstereo.000webhostapp.com/api/discos.php')
		.then(response => response.json())
		.then(response => {
		this.arrayDiscos = response;
	})
	},
}
</script>