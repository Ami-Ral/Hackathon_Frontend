<template>
    <div>
        <transition name="fade">
            <div v-if="!overlay">
                <header id="scrollId2"  >
                    <Header :bgcolor="bgcolor" :active4="active4" :fontWeight4="fontWeight4"/>
                </header>
                <BarRecherche/>
                <List :items="backItems" :nameList="nameList"/>
                <Footer :showup="showup" :scrollId="scrollId" :rechercheId="rechercheId"/>
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
    created(){
      this.setTimeout(() => {
          this.overlay = false
      })
    },
    mounted() {
      window.addEventListener('scroll', this.handleResize);
      this.handleResize()
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleResize);
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        nameList:'Listes des plantes',
        active4:'white',
        rechercheId:'#scrollId2',
        fontWeight4:'bolder',
        showup:false,
        backItems:[
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Plante 1',
                detail:'rendement 1'
            },
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Plante 2',
                detail:'rendement 2'
            },
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Plante 3',
                detail:'rendement 3'
            },
             {
                 src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Plante 4',
                detail:'rendement 4'
             },
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Plante 5',
                detail:'rendement 5'
            },
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Plante 6',
                detail:'rendement 6'
            },
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Plante 7',
                detail:'rendement 7'
            },
            {
                 src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Plante 8',
                detail:'rendement 8'
            }
        ],
        scrollId:"#scrollId2",
        scrolly: 0,
        overlay:true,
        timeout: null,
      }
   },
    methods: {
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

