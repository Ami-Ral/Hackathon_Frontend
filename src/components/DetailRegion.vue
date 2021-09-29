<template>
    <div class="mg-map" :style="bg_style">
        <div class="row" style="height: 100%;">
            <div class="col-md-5" style="height: 100%; position: relative;">
                <div id="desccc">
                    <div class="desccc-item">
                        <img src="../assets/images/shovel.png" alt="Tanimboly" />
                        <div>
                            <span><b>Type de Sol</b></span>
                            <span class="desccc-item-value">
                                {{ details['type_sol_'+getLangage] }}
                            </span>
                        </div>
                    </div>
                    <div class="desccc-item">
                        <img src="../assets/images/ground.png" alt="Tanimboly" />
                        <div>
                            <span><b>Structure du sol</b></span>
                            <span class="desccc-item-value">
                                {{ details['structure_sol_'+getLangage] }}
                            </span>
                        </div>
                    </div>
                    <div class="desccc-item">
                        <img src="../assets/images/soil.png" alt="Tanimboly" />
                        <div>
                            <span><b>Texture du sol</b></span>
                            <span class="desccc-item-value">
                                {{ details['texture_sol_'+getLangage] }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="map-site">
                    <svg id="svg_map" v-if="details" baseprofile="tiny" fill="#7c7c7c" height="100%" width="100%" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" version="1.2" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
                        <path class="component" v-bind:d="details ? details.path : ''" v-bind:id="details ? details.id_region : ''" v-bind:name="details ? details.nom : ''">
                            <title>{{ details.nom }}</title>
                        </path>
                    </svg>
                </div>
            </div> 
            <div class="col-md-7" style="height: 100%;">
                <div class="details">
                    <div v-if="details" class="card-region">
                        <div class="card" style="width: 22rem; border-radius: 0px;background-color: transparent;">
                          <img src="https://www.artnews.com/wp-content/uploads/2021/03/AdobeStock_263911828.jpeg" class="card-img-top" alt="...">
                          <div class="card-body text-white" style="background-color: #0007;">
                                <h5 class="card-title">{{ details.nom }}</h5>
                                <p class="card-text">{{ details['description_'+getLangage] }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>
<script>
import langue from '../service/Multilangue.js'
import MapService from '../service/Map.js'
import { mapGetters} from 'vuex'

export default {
    name:'List',
    data:function() {
        return{
            techniques : [],
            plantes : [],
            climat : [],
            details: null,
            bg_style: "background-image: linear-gradient(to right, #00000070, #111), url(https://www.journaldutrek.com/images/madagascar/paysage-mada-foret-isalo.jpg)",
            viewBox : "0 0 1000 1985",
            update_path : false
        }
    },
    computed: {
      ...mapGetters('Langage',['getLangage'])
    },
    beforeMount(){
        const self = this;
        let tmp = window.location.pathname.split('/');
        const id = tmp[tmp.length - 1];
        const d = MapService.get(id, this.getLangage);
        d.then(res => {
            self.details = res.data.region[0];
            self.plantes = res.data.plantes;
            self.climat = res.data.climats;
            self.techniques = res.data.techniques;
        })
    },
    updated(){
        if(!this.update_path) this.changeZoom();
    },
    methods:{
        showDetail(id){
            this.$router.push("region/"+ id);
        },
        changeZoom(){
            this.update_path = true;
            const svg = document.getElementById("svg_map");
            const svg_bound =  svg.getBoundingClientRect();
            const mgmap = document.getElementsByClassName("map-site")[0];
            const svg_size = {
                width : mgmap.offsetWidth,
                height : mgmap.offsetHeight,
            };
            const target = document.querySelector("svg path");
            const bound = target.getBoundingClientRect();
            console.log(bound);
            let y = Math.round(bound.y - svg_bound.y)* 1985 / svg_size.height;
            let x = (Math.round(bound.x - svg_bound.x) * 1000 / (svg_size.width / 0.2));
            let width = (Math.round(bound.width) * 5000 / svg_size.width);
            let height = Math.round(bound.height) * 1985 / svg_size.height;
            let vb = "0" + " " + y + " " + "1000" + " " + height;
            this.viewBox = vb;  
        }
    },
}
</script>

<style scoped>
.mg-map{
    overflow: hidden;
    z-index: 1;
    position: fixed;
    width : 100%;
	height: calc(100vh);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.map-site{
    position: relative;
    margin-top: 64px;
    height: calc(100% - 64px);
}

.details{
    margin-top: 64px;
    padding: 1rem;
}

.card-region img{
    filter: brightness(0.8);
}

.card-region{
    position: absolute;
    bottom: 5rem;
    right: 8rem;
}

.card-text{
    font-size: .9rem;
}

#desccc{
    display: flex;
    position: absolute;
    top: 64px;
    color: white;
    width: 100%;
    justify-content: center;
}

.desccc-item{
    padding: 1rem;
    margin-right: 1rem;
    text-align: center;
    font-size: .9em;
}

.desccc-item img{
    width: 54px;
    height: 54px;
    margin-bottom: 1rem;
    object-fit: contain;
}

.desccc-item span{
    display: block;
}

.desccc-item b{
    text-transform: uppercase;
}

path{
	cursor: pointer;
    fill:#103a307a;
    stroke:#fff8;
    stroke-width: 3px;
    pointer-events:all;
    transition: all .4s;
}

</style>
