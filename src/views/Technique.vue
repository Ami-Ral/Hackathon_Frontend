<template>
    <div>
        <transition name="fade">
            <div v-if="!overlay">
                <header id="scrollId3"  >
                <Header :bgcolor="bgcolor" :active2="active2" :fontWeight2="fontWeight2"/>
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
    name:'Technique',
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
        nameList:'Listes des techniques',
        active2:'white',
        fontWeight2:'bolder',
        backItems:[
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Technique 1',
                detail:'rendement 1'
            },
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Technique 2',
                detail:'rendement 2'
            },
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Technique 3',
                detail:'rendement 3'
            },
             {
                 src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Technique 4',
                detail:'rendement 4'
             },
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Technique 5',
                detail:'rendement 5'
            },
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Technique 6',
                detail:'rendement 6'
            },
            {
                src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Technique 7',
                detail:'rendement 7'
            },
            {
                 src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                title:'Technique 8',
                detail:'rendement 8'
            }
        ],
        scrollId:"#scrollId3",
        scrolly: 0,
        showup:false,
        rechercheId:'#scrollId3',
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

