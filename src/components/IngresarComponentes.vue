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
				<label for="exampleInput1" class="form-label">Nombre:</label>
				<input type="text" v-model.trim="nombre" class="form-control" id="exampleInput1" placeholder="Nombre">
			</div>
			<div class="mb-3">
				<label for="exampleInput2" class="form-label">Apellido:</label>
				<input type="text" v-model.trim="apellido" class="form-control" id="exampleInput2" placeholder="Apellido">
			</div>
			<div class="mb-3">
				<label for="exampleInput3" class="form-label">E-mail:</label>
				<input type="email" v-model.trim="email" class="form-control" id="exampleInput3" placeholder="tu@email.com">
			</div>
			<div class="mb-3">
				<label>Álbum favorito</label>
				<select v-model="selected" multiple class="form-select">
					<option>Soda Stereo</option>
					<option>Nada Personal</option>
					<option>Signos</option>
					<option>Ruido Blanco</option>
					<option>Doble Vida</option>
					<option>Languis</option>
					<option>Cancion Animal</option>
					<option>Rex Mix</option>
					<option>Dynamo</option>
					<option>Zona De Promesas</option>
					<option>Sueño Stereo</option>
					<option>Comfort Y Musica Para Volar</option>
					<option>El Último Concierto A</option>
					<option>El Último Concierto B</option>
					<option>Gira Me Verás Volver 1</option>
					<option>Gira Me Verás Volver 2</option>
					<option>Sep7imo Dia</option>
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
			// id:0,
			nombre:null,
			apellido:null,
			comentario:null,
			selected:[],
			email:null,
			arr: [],
			errores:[],
			enviado: false,
		}
	},

	computed : {
		hayErrores: function(){
			return this.errores.length; 
		},
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

		if (!this.nombre) {
			this.errores.push('Tiene que ingresar un nombre.');
		}
		if (!this.apellido) {
			this.errores.push('Tiene que ingresar un apellido.');
		}
		if (!this.comentario) {
			this.errores.push('Debe completar el comentario');
		}
		if (!this.email) {
			this.errores.push('Debe igesar un email.');
		}

		if (this.errores.length == 0) {
			this.nuevoObj = {
				// id: this.id,
				nombre: this.nombre,
				apellido: this.apellido,
				comentario: this.comentario,
				email: this.email,
				selected: this.selected
			}

            if(!localStorage.dato){
                this.arr=[]
            }else{
                this.arr=JSON.parse(localStorage.getItem("dato"))
            }
            this.arr.push(this.nuevoObj)
            localStorage.setItem("dato",JSON.stringify(this.arr))
			this.nombre = null;
			this.apellido = null;
			this.comentario = null;
			this.selected = [];
			this.email = null;
		}
		// console.log(this.id);
		// Object.assign(this.$data, this.$options.data);
	},
    getImgUrl: function (path) {
            return require('@/assets/imagenes/' + path);
    }
    },
	mounted:function(){
		// console.log(this.traerId);
		// console.log(this.arrayIds);
	},
}
</script>