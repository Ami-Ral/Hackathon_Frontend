<template>
    <div>
        <transition name="fade">
            <div v-if="!overlay">
                <header id="scrollId3">
                    <Header :bgcolor="bgcolor" :active4="active4" :fontWeight4="fontWeight4"/>
                </header>
                <BarRecherche/>
                <List :items="AllPlante2" :nameList="nameList" :NameRoute="NameRoute"/>
                <Footer :showup="showup" :scrollId="scrollId" :rechercheId="rechercheId" :items="AllTechnique2"/>
            </div>
        </transition>
        <div class="d-flex justify-content-center overlay"  v-if="overlay">
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import Header from "../components/Header"
import Footer from "../components/Footer"
import List from "../components/List"
import BarRecherche from "../components/BarRecherche"


export default {
    name:'Plantes',
     components: {
       Header,
       Footer,
       List,
       BarRecherche
    },
     data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        nameList:'Listes des plantes',
        active4:'white!important',
        fontWeight4:'bolder',
        scrollId:"#scrollId3",
        scrolly: 0,
        showup:false,
        rechercheId:'#scrollId3',
        overlay:true,
        timeout: null,
        AllPlante2:[],
        AllTechnique2:[],
        nbr_list:5,
        nbr_list2:5,
        NameRoute:3,
      }
   },
    computed: {
      ...mapGetters('Plante',['AllPlante']),
      ...mapGetters('Technique',['AllTechnique']),
      ...mapGetters('Langage',['getLangage'])
    },
    created(){
      this.getAll()
      this.getAll2()
      this.setTimeout(() => {
          this.overlay = false
          this.initialValue(this.AllPlante)
          this.initialValue2(this.AllTechnique)
      })
    },
    mounted() {
      window.addEventListener('scroll', this.handleResize);
      this.handleResize()
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleResize);
    },
    methods: {
        ...mapActions('Plante',['getAllPlante']),
        ...mapActions('Technique',['getAllTechnique']),
        handleResize(){
            this.scrolly=window.scrollY
            if(this.scrolly>110){
                this.showup = true
            }else{
                this.showup = false
            }
        },
        clearTimeout() {
			if (this.timeout) {
				clearTimeout(this.timeout)
				this.timeout = null
				}
			},
		setTimeout(callback) {
			this.clearTimeout()
			this.timeout = setTimeout(() => {
				this.clearTimeout()
				callback()
			}, 1000)
        },
        getAll(){
            var langage = this.getLangage
            var nbr_list = this.nbr_list
            let Plante = this.getAllPlante({langage,nbr_list})
            return Plante
        },
        getAll2(){
            var langage = this.getLangage
            var nbr_list = this.nbr_list2
            let techniques = this.getAllTechnique({langage,nbr_list})
            return techniques
        },
        initialValue2(table){
           this.AllTechnique2 = table
        },
        initialValue(table){
           this.AllPlante2 = table
        }
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}
@media only screen and (min-width: 767px) and (max-width: 991px) {
}
@media only screen and (max-width: 767px) {
}
@media only screen and (max-width: 479px) {
}
</style>

