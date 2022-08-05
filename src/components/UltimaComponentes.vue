<template>
    <div  class="row row-cols-1 row-cols-lg-1 row-cols-xl-3 container m-auto">
        <div class="col text-blanco">
            <h1 style="font-size:3rem;">Gira Me Veras Volver - 2007</h1>
          <p>Gira Me Verás Volver es el último álbum grabado en vivo por Soda Stereo, que reúne los mejores temas tocados por la banda en su gira de reencuentro Me Verás Volver por casi toda América durante el último trimestre de 2007.</p>
          <p>La gira Me Verás Volver comenzó en Argentina el 19 de octubre y terminó el 21 de diciembre de 2007, también en Argentina, en el River Plate. Tiene la particularidad de tener un estilo más rockero que otras giras en todas sus canciones.</p>
          <p>También, una edición de 2 DVD fue lanzada el 6 de octubre de 2008, incluyendo un DVD extras con canciones no incluidas en la edición de CD.</p>
          <p>Grabado y mezclado por Eduardo Bergallo. Estudio de Mezcla: Revolver (Buenos Aires, Argentina).</p>
        </div>
		
        <div class="col" v-for="(x, index) in Infogira" :key="x.id">
          <div class="card h-100">
            <img :src="getImgUrl(x.imagen)" :alt="x.alt" height="300" width="150" class="card-img-top img-fluid">
            <div class="card-body">
              <h5 class="card-title fs-3 fw-bold">{{x.titulo}}</h5>
              <iframe style="border-radius:12px" :src=x.musica width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
              <p class="card-text">Lanzamiento: {{x.anio}}</p>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseOne_' + index" aria-expanded="true" aria-controls="collapseOne">
                          Canciones 
                       </button>
                  </h2>
                  <div :id="'collapseOne_' + index" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <ul class="ul-discografia">
                      <li v-for="(tema, index) in x.canciones" :key="index">{{tema}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="mt-5 text-blanco">Fechas de la gira</h2>
        <table class="table text-blanco">
          <thead>
              <tr>
              
              <th scope="col">Fecha</th>
              <th scope="col">Escenario</th>
              <th scope="col">Ciudad</th>
              <th scope="col">País</th>
              </tr>
          </thead>
          <tbody>
  
              <tr>
                  <td>19 de octubre</td>
                  <td>Estadio River Plate</td>
                  <td>Buenos Aires</td>
                  <td>Argentina</td>
              </tr>
              <tr>
                  <td>20 de octubre</td>
                  <td>Estadio River Plate</td>
                  <td>Buenos Aires</td>
                  <td>Argentina</td>
              </tr>
              <tr>
                  <td>21 de octubre</td>
                  <td>Estadio River Plate</td>
                  <td>Buenos Aires</td>
                  <td>Argentina</td>
              </tr>
              <tr>
                  <td>24 de octubre</td>
                  <td>Estadio Nacional de Chile</td>
                  <td>Santiago</td>
                  <td>Chile</td>
              </tr>
              <tr>
                  <td>27 de octubre</td>
                  <td>Estadio Modelo Alberto Spencer</td>
                  <td>Guayaquil</td>
                  <td>Ecuador</td>
              </tr>
              <tr>
                  <td>31 de octubre</td>
                  <td>Estadio Nacional de Chile</td>
                  <td>Santiago</td>
                  <td>Chile</td>
              </tr>
              <tr>
                  <td>31 de octubre</td>
                  <td>Estadio Nacional de Chile</td>
                  <td>Santiago</td>
                  <td>Chile</td>
              </tr>
              <tr>
                  <td>2 de noviembre</td>
                  <td>Estadio River Plate</td>
                  <td>Buenos Aires</td>
                  <td>Argentina</td>
              </tr>
              <tr>
                  <td>3 de noviembre</td>
                  <td>Estadio River Plate</td>
                  <td>Buenos Aires</td>
                  <td>Argentina</td>
              </tr>
              <tr>
                  <td>9 de noviembre</td>
                  <td>Estadio Universitario</td>
                  <td>Monterrey</td>
                  <td>México</td>
              </tr>
              <tr>
                  <td>13 de noviembre</td>
                  <td>Estadio Tres de Marzo</td>
                  <td>Guadalajara</td>
                  <td>México</td>
              </tr>
              <tr>
                  <td>15 de noviembre</td>
                  <td>Foro Sol</td>
                  <td>Méxio D.F.</td>
                  <td>México</td>
              </tr>
              <tr>
                  <td>16 de noviembre</td>
                  <td>Foro Sol</td>
                  <td>Méxio D.F.</td>
                  <td>México</td>
              </tr>
              <tr>
                  <td>21 de noviembre</td>
                  <td>Home Depot Center</td>
                  <td>Los Ángeles.</td>
                  <td>Estados Unidos</td>
              </tr>
              <tr>
                  <td>24 de noviembre</td>
                  <td>Parque Metropolitano Simón Bolívar</td>
                  <td>Bogotá.</td>
                  <td>Colombia</td>
              </tr>
              <tr>
                  <td>27 de noviembre</td>
                  <td>Estadio Nacional</td>
                  <td>Panamá</td>
                  <td>Panamá</td>
              </tr>
              <tr>
                  <td>29 de noviembre</td>
                  <td>Hipódromo La Rinconada</td>
                  <td>Caracas</td>
                  <td>Venezuela</td>
              </tr>
              <tr>
                  <td>4 de diciembre</td>
                  <td>American Airlines Arena</td>
                  <td>Miami</td>
                  <td>Estados Unidos</td>
              </tr>
              <tr>
                  <td>5 de diciembre</td>
                  <td>American Airlines Arena</td>
                  <td>Miami</td>
                  <td>Estados Unidos</td>
              </tr>
              <tr>
                  <td>8 de diciembre</td>
                  <td>Estadio Nacional</td>
                  <td>Lima</td>
                  <td>Perú</td>
              </tr>
              <tr>
                  <td>9 de diciembre</td>
                  <td>Estadio Nacional</td>
                  <td>Lima</td>
                  <td>Perú</td>
              </tr>
              <tr>
                  <td>15 de diciembre</td>
                  <td>Estadio Chateau Carreras</td>
                  <td>Córdoba</td>
                  <td>Argentina</td>
              </tr>
              <tr>
                  <td>21 de diciembre</td>
                  <td>Estadio River Plate</td>
                  <td>Buenos Aires</td>
                  <td>Argentina</td>
              </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
    export default {
      name: 'UltimaComponentes',
      data:function(){
			return {
				discos: [
				{
				id: 15,
				titulo: "Gira Me Verás Volver 1",
				anio: 2008,
				resumen: "Gira Me Verás Volver es el último álbum grabado en vivo por Soda Stereo, que reúne los mejores temas tocados por la banda en su gira de reencuentro Me Verás Volver por casi toda América durante el último trimestre de 2007.",
				imagen: "album-gira-me-veras-volver-1.jpg",
				alt: "Imagen Album Gira Me Verás Volver 1",
				giramvv: true,
				musica: "https://open.spotify.com/embed/album/4Sy7VzDS4j1MLIYF85grsZ?utm_source=generator",
				canciones: [
					"Juegos De Seducción - Me Veras Volver Gira 2007",
					"Tele-Ka - Me Veras Volver Gira 2007",
					"Imágenes Retro - Me Veras Volver Gira 2007",
					"Texturas - Me Veras Volver Gira 2007",
					"Hombre Al Agua - Me Veras Volver Gira 2007",
					"En La Ciudad De La Furia - Me Veras Volver Gira 2007",
					"Picnic En El 4° B - Me Veras Volver Gira 2007",
					"Zoom - Me Veras Volver Gira 2007",
					"Cuando Pase El Temblor - Me Veras Volver Gira 2007",
					"Final Caja Negra - Me Veras Volver Gira 2007",
					"Corazón Delator - Me Veras Volver Gira 2007",
					"Signos - Me Veras Volver Gira 2007",
					"Sobredosis de T.V. - Me Veras Volver Gira 2007",
					"Danza Rota - Me Veras Volver Gira 2007",
					]
				},
				{
				id: 16,
				titulo: "Gira Me Verás Volver 2",
				anio: 2008,
				resumen: "Gira Me Verás Volver es el último álbum grabado en vivo por Soda Stereo, que reúne los mejores temas tocados por la banda en su gira de reencuentro Me Verás Volver por casi toda América durante el último trimestre de 2007.",
				imagen: "album-gira-me-veras-volver-2.jpg",
				alt: "Imagen Album Gira Me Verás Volver 2",
				giramvv: true,
				musica: "https://open.spotify.com/embed/album/1cwZmK0zXorTlALtgOajeC?utm_source=generator",
				canciones: [
					"Persiana Americana - Me Veras Volver Gira 2007",
					"Fue - Me Veras Volver Gira 2007",
					"En Remolinos - Me Veras Volver Gira 2007",
					"Primavera 0 - Me Veras Volver Gira 2007",
					"No Existes - Me Veras Volver Gira 2007",
					"Sueles Dejarme Solo - Me Veras Volver Gira 2007",
					"En El Séptimo Dia - Me Veras Volver Gira 2007",
					"Un Millón De Años Luz - Me Veras Volver Gira 2007",
					"De Música Ligera - Me Veras Volver Gira 2007",
					"Zona De Promesas - Me Veras Volver Gira 2007",
					"Cae El Sol - Me Veras Volver Gira 2007",
					"Pófugos - Me Veras Volver Gira 2007",
					"Nada Personal - Me Veras Volver Gira 2007",
					"Te Hacen Falta Vitaminas - Me Veras Volver Gira 2007",
					]
				},
			],
		}
	},

	computed: {
	Infogira: function () {
	return this.discos.filter(i => i.giramvv === true);
	}
	},
	
    methods: {
            getImgUrl: function (path) {
                return require('@/assets/imagenes/' + path);
            },
        }
    }
</script>