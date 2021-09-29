<template>
    <div>
        <transition name="fade">
            <div v-if="!overlay">
                <header id="header-default"  >
<<<<<<< HEAD
                    <Header :bgcolor="bgcolor" :active3="active" :fontWeight3="fontWeight3"/>
                </header>
                <div class="content-fluid" style="height: 100vh;">
                	<Details />
                </div>
                <div style="position: relative; z-index: 2;">
                    <List :items="AllPlante2" nameList="Plantes" :NameRoute="NameRoute"/>
                    <Footer :showup="showup" :scrollId="scrollId" :rechercheId="rechercheId" :items="AllTechnique2"/>
                </div>
=======
                    <Header :bgcolor="bgcolor" :active2="active2" :fontWeight2="fontWeight2"/>
                </header>
>>>>>>> daf567e8cb4235936cfdc80c5f715df36a688719
            </div>
        </transition>
        <div class="d-flex justify-content-center overlay"  v-if="overlay">
            <div class="spinner-border text-success" role="status">
<<<<<<< HEAD
=======
               
>>>>>>> daf567e8cb4235936cfdc80c5f715df36a688719
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/Header"
<<<<<<< HEAD
import Footer from "../components/Footer"
import List from "../components/List"
import Details from "../components/DetailRegion"
import { mapGetters, mapActions } from 'vuex'

export default {
    name:'DetailRegion',
    components: {
      Header,
      Details,
      Footer,
      List,
    },
     data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        nameList:'Boheny',
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
=======

export default {
    name:'DetailRegion',
     components: {
      Header
    },
    created(){
      this.setTimeout(() => {
          this.overlay = false
      })
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
         active2:'white!important',
        fontWeight2:'bolder',
        overlay:true,
        timeout: null,
      }
   },
    methods:{
>>>>>>> daf567e8cb4235936cfdc80c5f715df36a688719
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
<<<<<<< HEAD
        handleResize(){
            this.scrolly=window.scrollY
            if(this.scrolly>110){
                this.showup = true
            }else{
                this.showup = false
            }
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
.content-fluid{
    background: linear-gradient(331deg, #222222, #0f322a);
    display: flex;
}

=======
   }
}
</script>
<style scoped>
>>>>>>> daf567e8cb4235936cfdc80c5f715df36a688719
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
<<<<<<< HEAD
</style>

=======
</style>
>>>>>>> daf567e8cb4235936cfdc80c5f715df36a688719
