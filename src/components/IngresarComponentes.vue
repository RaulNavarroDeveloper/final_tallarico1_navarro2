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
  data:function(){
		return {
			comentario:null,
			selected:[],
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