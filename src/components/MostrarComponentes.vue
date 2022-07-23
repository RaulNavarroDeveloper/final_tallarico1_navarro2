<template>
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
                        <input type="checkbox"
                        :id="index"
                        @change="favoritear"
                        :checked="isChecked"
                        >
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
			}
	},
    mounted:function(){
		this.ver_comentario();
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
    },
	methods:{
    ver_comentario:function() {	
        if(localStorage.dato){
            this.local=JSON.parse(localStorage.getItem("dato"));	
        } else{
            this.sin_datos = "Aún no hay comentarios... Te invitamos a que completes el formulario";
        }
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
	}
}
</script>