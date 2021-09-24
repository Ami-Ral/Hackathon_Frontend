<template>
    <div class="listTechnique">
            <div class="container-fluid px-3">
                <div class="row align-items-center pt-5 px-4 mb-4">
                    <div class="col col-lg-12">
                        <h3>{{nameList}}</h3>
                        <span class="under-title"></span>
                    </div>
                </div>
               <div class="row row-cols-lg-4 row-cols-1 row-cols-md-2 row-cols-sm-2 ml-lg-6 pt-2 mx-4 mx-md-0 mx-lg-0 mx-sm-0">
                    <div class="col col-lg-3  col-sm-6 col-md-6 col-10  mt-lg-3 mt-4 mx-4 mx-lg-0 mx-md-0 mx-sm-0" v-for="(item,index) in items" :key="index">
                        <Card :src="item.src" :title="item.title" :detail="item.detail"/>
                    </div>
                </div>
                <div class="row row-cols-lg-1 row-cols-1 row-cols-md-1 row-cols-sm-1 ml-lg-6 justify-content-lg-center text-center justify-content-center">
                    <div class="col-12 col-lg-3 col-sm-12 col-md-12 col-12 mr-4">
                        <button type="button" class="btn btn-success mx-4 mt-5" @click="afficherPlus()">Afficher plus</button>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import Card from "./Card.vue"
export default {
    name:'List',
     components: {
       Card,
    },
    props:{
        items:{
            type:Array,
            default:()=>[]
        },
        nameList:{
            type:String,
            default:()=>""
        }
    },
    data:function() {
        return{
             backItems2:[
                {
                    src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                    title:'Technique 10',
                    detail:'rendement 10'
                },
                {
                    src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                    title:'Technique 20',
                    detail:'rendement 20'
                },
                {
                    src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                    title:'Technique 30',
                    detail:'rendement 30'
                },
                {
                    src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                    title:'Technique 40',
                    detail:'rendement 40'
                },
                {
                    src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                    title:'Technique 50',
                    detail:'rendement 50'
                },
                {
                    src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                    title:'Technique 60',
                    detail:'rendement 60'
                },
                {
                    src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                    title:'Technique 70',
                    detail:'rendement 70'
                },
                {
                    src:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/9/d/b/9db0e9a29d_50038038_tracteur-openfield-jenny222-flickr-cc-by-nc-nd-20.jpg',
                    title:'Technique 80',
                    detail:'rendement 80'
                }
            ]
        }
    },
    methods:{
        afficherPlus(){
            var _vm = this
            setTimeout(function() {
                _vm.items = _vm.items.concat(_vm.backItems2); 
            },100)
        }
    }
}
</script>

<style>
.listTechnique{
  width: 100%;
  background: rgb(15, 15, 17) top center;
  padding-bottom: 10vh !important; 
  background-size: cover;
  position: relative;
  padding: 0;
}
h3{
    color: whitesmoke
}

.under-title{
    display: block;
    width: 12vh;
    height: 2px;
    background-color: whitesmoke
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
