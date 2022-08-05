<template>
    <section>
        <div class="row row-cols-1 row-cols-lg-3 g-4 container-fluid">
            <div class="col" v-for="x in integrantes" :key="x.id">
                <div class="card">
                <img :src="getImgUrl(x.imagen)" alt="">
                <div class="card-body">
                    <h5 class="card-title fw-bold">{{x.nombre}}</h5>
                    <p class="card-text">{{x.resumen}}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Nacimiento: {{x.nacimiento}}</li>
                    <li class="list-group-item">Rol: {{x.rol}}</li>
                    <li class="list-group-item">Discografica: {{x.discografica}}</li>
                </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'IntegrantesComponentes',
  data:function(){
			return {
				integrantes: [
				{
                    id: 1,
                    nombre: 'Gustavo Cerati',
                    rol: "Cantante / Guitarrista",
                    distinciones: "Latin Grammy Award for Best Rock Solo Vocal Album (2006) Premio Grammy Latino por Mejor Canción de Rock (2006, 2007 y 2010) Premio Grammy Latino por Mejor álbum de rock (2010)",
                    nacimiento: 1959,
                    resumen:"Gustavo Adrián Cerati fue un músico, cantautor y productor discográfico argentino que obtuvo reconocimiento internacional por haber sido el líder, vocalista, compositor y guitarrista de la banda de rock Soda Stereo.",
                    imagen: "cerati.jpg",
                    alt: "imagen Gustavo Cerati",
                    discografica: "Sony Music/Sony BMG"
				},
				{
                    id: 2,
                    nombre: 'Zeta Bosio',
                    rol: "Bajo, guitarra, voz, teclado, sintetizador, sampler, armónica",
                    distinciones: "Latin Grammy Award for Best Rock Solo Vocal Album (2006) Premio Grammy Latino por Mejor Canción de Rock (2006, 2007 y 2010) Premio Grammy Latino por Mejor álbum de rock (2010)",
                    nacimiento: 1958,
                    resumen:"Héctor Pedro Juan Bosio, más conocido como Zeta Bosio, es un músico de rock, productor discográfico y DJ argentino.",
                    imagen: "zeta-bosio.jpg",
                    alt: "imagen Zeta Bosio",
                    discografica: "Sony Music"
				},
				{
                    id: 3,
                    nombre: 'Charly Alberti',
                    rol: "Batería y Percusión",
                    distinciones: "Latin Grammy Award for Best Rock Solo Vocal Album (2006) Premio Grammy Latino por Mejor Canción de Rock (2006, 2007 y 2010) Premio Grammy Latino por Mejor álbum de rock (2010)",
                    nacimiento: 1963,
                    resumen:"Carlos Alberto Ficicchia, más conocido como Charly Alberti, es un músico de rock argentino, hijo del baterista de jazz y música caribeña Tito Alberti y hermano del músico Andres Alberti. Fue baterista de la banda de rock Soda Stereo y es líder y baterista del grupo musical Mole.",
                    imagen: "charly-alberti.jpg",
                    alt: "Imagen Charly Alberti",
                    discografica: "Sony Music"
				}
			],

		}
	},

    methods: {
          getImgUrl: function (path) { 
            return require('@/assets/imagenes/' + path);
          }
    }
}
</script>