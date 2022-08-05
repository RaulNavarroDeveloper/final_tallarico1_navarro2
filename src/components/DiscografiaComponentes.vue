<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container m-auto">

        <div class="col" v-for="(x, index) in this.discos" :key="x.id_discos">
            <div class="card h-100">
                <img :src="getImgUrl(x.imagen)" height="300" width="150" class="card-img-top img-fluid">

                <div class="card-body">
                    <h5 class="card-title">{{x.disco_nombre}}</h5>
                    <p class="card-text">Lanzamiento: {{x.anio}}</p>
                    <p class="card-text">{{x.resumen}}</p>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="'#collapseOne_' + index" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Canciones
                                </button>
                            </h2>
                            <div :id="'collapseOne_' + index" class="accordion-collapse collapse show"
                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <ul class="ul-discografia" v-for="(tema, index) in discosycanciones" :key="index">
                                    <li v-if="tema.discos_fk == x.id_discos">{{tema.titulo}}</li>
                                </ul>
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
        name: 'DiscografiaComponentes',
        data: function () {
            return {
                discos: [],
                discosycanciones: [],
                canciones: [],
            }
        },
        computed:{
            coincidirDiscosyCanciones:function (){
                return this.discosycanciones.filter(info => info.id_discos === info.discos_fk);

            },
        },
        methods: {
            getImgUrl: function (path) {
                return require('@/assets/imagenes/' + path);
            },
        },
        mounted:function (){
            // FETCH  a discos
            fetch('https://sodasstereo.000webhostapp.com/api/discos.php')
            .then(response => response.json())
            .then(response => {
            this.discos = response;
            localStorage.setItem('discos', JSON.stringify(this.discos));
            console.log(this.discos);
            })

            // FETCH a canciones
            fetch('https://sodasstereo.000webhostapp.com/api/discosycanciones.php')
            .then(response => response.json())
            .then(response => {
            this.discosycanciones = response;
            localStorage.setItem('discosycanciones', JSON.stringify(this.discosycanciones));
            console.log(this.discosycanciones);
            })

            console.log(this.coincidirDiscosyCanciones);
        }

    }
</script>