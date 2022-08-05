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
				id: 1,
				titulo: "Soda Stereo",
				anio: 1984,
				resumen: "Soda Stereo es el nombre del álbum debut de estudio homónimo grabado por el banda argentina de rock Soda Stereo. La producción de este álbum debut estuvo a cargo de Federico Moura, vocalista y líder de Virus.",
				imagen: "album-soda-stereo.jpg",
				alt: "Imgaen Álbum Soda Stereo",
				giramvv: false,
				canciones: [
					"Por Qué No Puedo Ser Del Jet Set?",
					"Sobredosis de T.V.",
					"Te Hacen Falta Vitaminas",
					"Trátame Suavemente",
					"Dietético",
					"Tele-Ka",
					"Ni Un Segundo",
					"Un Misil En Mi Placard",
					"El tiempo Es Dinero",
					"Afrodisíacos",
					"Mi Novia Tiene Bíceps",
					]
				},
				{
				id: 2,
				titulo: "Nada Personal",
				anio: 1985,
				resumen: "Nada Personal es el nombre del segundo álbum de estudio de la banda, y fue editado en Argentina el 21 de noviembre de 1985. Fue reeditado en CD por primera vez en 1991. Nada Personal fue un rotundo éxito a nivel internacional: en varios países latinoamericanos la placa fue disco de platino y oro.",
				imagen: "album-nada-personal.jpg",
				alt: "Imgaen Álbum Nada Personal",
				giramvv: false,
				canciones: [
					"Nada Personal",
					"Si No Fuera Por",
					"Cuando Pase El Temblor",
					"Danza Rota",
					"El Cuerpo Del Delito",
					"Juegos De Seducción",
					"Estoy Azulado",
					"Observándonos",
					"Imágenes Retro",
					"Ecos",
					]
				},
				{
				id: 3,
				titulo: "Signos",
				anio: 1986,
				resumen: "Signos es el nombre del tercer álbum de estudio de Soda Stereo, grabado y editado en 1986. Es considerado por la mayoría de los críticos como el segundo mejor álbum de la banda, después de Canción Animal, de 1990.",
				imagen: "album-signos.jpg",
				alt: "Imagen Album Signos",
				giramvv: false,
				canciones: [
					"Sin Sobresaltos",
					"El Rito",
					"Prófugos",
					"No existes",
					"Persiana americana",
					"En camino",
					"Signos",
					"Final Caja Negra"
					]
				},
				{
				id: 4,
				titulo: "Ruido Blanco",
				anio: 1987,
				resumen: "Ruido Blanco es el primer álbum en vivo del grupo argentino Soda Stereo grabado en Argentina, Perú, Chile, México y Venezuela; y editado en 1987. Producido por Soda Stereo, Ruido Blanco fue hecho en una época en la que la banda estaba explotando a nivel latinoamericano.",
				imagen: "album-ruido-blanco.jpg",
				alt: "Imagen Album Ruido Blanco",
				giramvv: false,
				canciones: [
					"Signos",
					"Juegos De Seducción",
					"Persiana Americana",
					"Sobredosis De T.V.",
					"Estoy Azulado",
					"Final Caja Negra",
					"Cuando Pase El Temblor",
					"Vita-Set",
					"Prófugos",
					]
				},
				{
				id: 5,
				titulo: "Doble Vida",
				anio: 1988,
				resumen: "Doble Vida es el cuarto álbum de estudio del grupo de rock argentino Soda Stereo, grabado y editado en 1988. Producido por Carlos Alomar, este fue el segundo de los únicos 2 álbumes de Soda Stereo producidos por alguien fuera de la banda.",
				imagen: "album-doble-vida.jpg",
				alt: "Imagen Album Doble Vida",
				giramvv: false,
				canciones: [
					"Pic Nic En El 4° B",
					"En La Ciudad De La Furia",
					"Lo Que Sangra",
					"En El Borde",
					"Languis",
					"Día Común",
					"Corazón Delator",
					"El Ritmo De Tus Ojos",
					"Terapia De Amor Intensiva",
					]
				},
				{
				id: 6,
				titulo: "Languis",
				anio: 1989,
				resumen: "Languis es el primer y único EP/maxi-simple del grupo Soda Stereo, grabado y editado en 1989. A mediados de ese año, Soda Stereo grabó una nueva versión de Languis (canción incluida en el álbum Doble Vida) y un tema nuevo llamado Mundo de Quimeras, los que fueron editados en este maxi-simple.",
				imagen: "album-languis.jpg",
				alt: "Imagen Album Languis",
				giramvv: false,
				canciones: [
					"Mundo De Quimeras",
					"Languis",
					"En El Borde",
					"Lo Que Sangra",
					]
				},
				{
				id: 7,
				titulo: "Cancion Animal",
				anio: 1990,
				resumen: "Canción animal es el quinto álbum de estudio de la banda de rock argentina Soda Stereo, publicado el 7 de agosto de 1990. Fue grabado entre junio y julio de 1990 en Criteria Recording Studios de Miami, Florida; con la producción de Gustavo Cerati y Zeta Bosio. Canción animal es considerado como el mejor álbum de la banda en toda su carrera.",
				imagen: "album-cancion-animal.jpg",
				alt: "Imagen Album Cancion Animal",
				giramvv: false,
				canciones: [
					"En El Séptimo Día",
					"Un Millón De Años Luz",
					"Cancion Animal",
					"1990",
					"Sueles Dejarme Solo",
					"De Música Ligera",
					"Hombre Al Agua",
					"Entre Caníbales",
					"Té Para 3",
					"Cae El Sol",
					]
				},
				{
				id: 8,
				titulo: "Rex Mix",
				anio: 1991,
				resumen: "Rex Mix es el segundo EP de la banda argentina Soda Stereo. Al batir récord de 14 funciones agotadas en el teatro Gran Rex de la Ciudad de Buenos Aires, surge de estos shows Rex Mix, con las mejores versiones en vivo de esas funciones, remixes y un tema nuevo: «No necesito verte ».",
				imagen: "album-rex-mix.jpg",
				alt: "Imagen Album Rex Mix",
				giramvv: false,
				canciones: [
					"Hombre Al Agua",
					"No Existes",
					"En Camino - Viva La Patria Mix",
					"No Necesito Verte (Para Saberlo)",
					"No Necesito Verte (Para Saberlo)-Krupa Mix",
					"En Camino - Veranek Mix",
					"No Necesito Verte (Para Saberlo)-Candombe Mix",
					]
				},
				{
				id: 9,
				titulo: "Dynamo",
				anio: 1992,
				resumen: "Dynamo es el sexto álbum de estudio de la banda de rock argentina Soda Stereo. Fue grabado y mezclado en el Estudio Supersónico, en Buenos Aires durante el año 1992. Es considerado por muchos como uno de los mejores álbumes de estudio de la banda.",
				imagen: "album-dynamo.jpg",
				alt: "Imagen Album Dynamo",
				giramvv: false,
				canciones: [
					"Secuencia Inicial",
					"Toma La Ruta",
					"En Remolinos",
					"Primavera 0",
					"Camaleón",
					"Luna Roja",
					"Sweet Sahumerio",
					"Ameba",
					"Nuestra Fe",
					"Claroscuro",
					"Fue",
					"Texturas",
					]
				},
				{
				id: 10,
				titulo: "Zona De Promesas",
				anio: 1993,
				resumen: "Zona de Promesas es un compilado de la banda, conformado por remixes de algunas de las canciones más representativas del grupo y un tema nuevo, «Zona de Promesas», el cual fue descartado del álbum 'Dynamo', lanzado un año antes de este lanzamiento.",
				imagen: "album-zona-de-promesas.jpg",
				alt: "Imagen Album Zona de Promesas",
				giramvv: false,
				canciones: [
					"Zona de Promesas",
					"Primavera 0 (Bonzo Mix)",
					"En La Ciudad de la Furia (Dance Mix)",
					"Nada Personal (Remix)",
					"Luna Roja (Soul Mix)",
					"Cuando Pase el Temblor (Dance Mix)",
					"Mundo de Quimeras",
					"No Necesito Verte (Para Saberlo)[Krupa Mix]",
					"Sobredosis de TV (Remix)",
					"Lo Que Sangra (La Cúpula) [Remix]",
					]
				},
				{
				id: 11,
				titulo: "Sueño Stereo",
				anio: 1995,
				resumen: "Sueño Stereo es el séptimo y último álbum de estudio de la banda, lanzado al mercado el 29 de junio de 1995. Este disco tiene canciones destacadas tales como «Disco eterno», «Paseando por Roma», «Ella usó mi cabeza como un revólver» y una de sus canciones más conocidas «Zoom».",
				imagen: "album-sueño-stereo.jpg",
				alt: "Imagen Album Sueño Stereo",
				giramvv: false,
				canciones: [
					"Ella Usí Mi Cabeza Como Un Revólver",
					"Disco Eterno",
					"Zoom",
					"Ojo De La Tormenta",
					"Efecto Doppler",
					"Paseando Por Roma",
					"Pasos",
					"Angel Eléctrico",
					"Crema De Estrellas",
					"Planta",
					"X Playo",
					"Moire",
					]
				},
				{
				id: 12,
				titulo: "Comfort Y Musica Para Volar",
				anio: 1996,
				resumen: "Comfort y música para volar es un álbum de la banda lanzado el 25 de septiembre de 1996. En su primera edición, el álbum contiene siete canciones grabadas en vivo y otras cuatro en estudio. Considerado como uno de los discos más emblemáticos de Soda Stereo, las canciones en vivo en el álbum fueron grabadas en los estudios Post Edge de MTV en Miami, Estados Unidos.",
				imagen: "album-mtv-unplugged.jpg",
				alt: "Imagen Album Comfort Y Musica Para Volar",
				giramvv: false,
				canciones: [
					"En la Ciudad de la Furia - MTV Unplugged",
					"Un Misil En Mi Placard - MTV Unplugged",
					"Pasos - MTV Unplugged",
					"Entre Canibales - MTV Unplugged",
					"Te Para 3 - MTV Unplugged",
					"Angel Electrico - MTV Unplugged",
					"Ella Uso Mi Cabeza Como Un Revolver - MTV Unplugged",
					"Sonoman (Banda De Sonido)",
					"Planeador",
					"Coral",
					"Superstar",
					]
				},
				{
				id: 13,
				titulo: "El Último Concierto A",
				anio: 1997,
				resumen: "El Último Concierto es un álbum en vivo doble grabado por Soda Stereo, editado a fines de 1997 y que recopila en su mayoría parte de su gira El Último Concierto. Se editaron tanto dos álbumes para CD y un DVD. La versión en CD de este álbum consta de dos discos (vendidos por separado).",
				imagen: "album-el-ultimo-concierto-a.jpg",
				alt: "Imagen Album El Último Concierto A",
				giramvv: false,
				canciones: [
					"En La Ciudad De La Furia",
					"El Rito",
					"Hombre Al Agua",
					"En El Séptimo Día",
					"Cancion Animal",
					"Trátame Suavemente",
					"Paseando Por Roma",
					"Lo Que Sangra (La Cúpula)",
					"Zoom",
					"Signos",
					"Ella Usó Mi Cabeza Como Un Revólver",
					]
				},
				{
				id: 14,
				titulo: "El Último Concierto B",
				anio: 1997,
				resumen: "El Último Concierto es un álbum en vivo doble grabado por Soda Stereo, editado a fines de 1997 y que recopila en su mayoría parte de su gira El Último Concierto. Se editaron tanto dos álbumes para CD y un DVD. La versión en CD de este álbum consta de dos discos (vendidos por separado).",
				imagen: "album-el-ultimo-concierto-b.jpg",
				alt: "Imagen Album El Último Concierto B",
				giramvv: false,
				canciones: [
					"Disco Eterno",
					"Planeador",
					"Luna Roja",
					"Té Para Tres",
					"Cuando Pase El Temblor",
					"Claroscuro",
					"Persiana Americana",
					"Un Millón de Años Luz",
					"Primavera 0",
					"Cae El Sol",
					"De Música Ligera",
					]
				},
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
				{
				id: 17,
				titulo: "Sép7imo Dia",
				anio: 2017,
				resumen: "SÉP7IMO DÍA es un álbum de remixes de canciones de Soda Stereo, utilizado como banda sonora en los shows en tributo a la banda organizados por Cirque Du Soleil. Fue publicado el 10 de marzo de 2017. La producción corrió a cargo de Zeta Bosio, Charly Alberti más Adrián Taverna.",
				imagen: "album-sep7imo-dia.jpg",
				alt: "Imagen Album Sép7imo Dia",
				giramvv: false,
				canciones: [
					"En el Séptimo Día (SEP7IMO DIA)",
					"Cael el Sol / Planta (SEP7IMO DIA)",
					"Picnic en el 4to B / Te Hacen Falta Vitaminas / Mi Novia Tiene Bíceps (SEP7IMO DIA)",
					"Ella Usó, Un Misil (SEP7IMO DIA)",
					"Prófugos (SEP7IMO DIA)",
					"En Remolinos (SEP7IMO DIA)",
					"Planeador (SEP7IMO DIA)",
					"Persiana Americana (SEP7IMO DIA)",
					"Signos (SEP7IMO DIA)",
					"Un Millón de Años Luz (SEP7IMO DIA)",
					"Intro Luna Roja (SEP7IMO DIA)",
					"Luna Roja (SEP7IMO DIA)",
					"Crema de Estrellas (SEP7IMO DIA)",
					"Cuando Pase el Temblor (SEP7IMO DIA)",
					"Hombre al Agua (SEP7IMO DIA)",
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