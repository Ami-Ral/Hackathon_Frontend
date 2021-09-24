<template>
    <router-link style="text-decoration:none;color:white" class="card" :to="{name:'DetailTechnique',params:{technique:split(title)}}">
        <img :src="src" alt="" class="card-image">
        <div class="under-image"></div>
        <div class="detail">
            <h4><router-link :to="{name:'DetailTechnique',params:{technique:split(title)}}" style="text-decoration:none;color:white">{{title}}</router-link></h4>
            <h6>{{detail}}</h6>
        </div>
    </router-link>
</template>
<script>
export default {
    name:"Card",
    props:{
        src:{
            type:String,
            default:()=>""
        },
        title:{
            type:String,
            default:()=>""
        },
        detail:{
            type:String,
            default:()=>""
        },
        /*nameUrl:{
            type:String,
            default:()=>""
        }*/
        /*paramsName:{
            type:String,
            default:()=>""
        }*/
    },
    methods:{
        split(url){
            var newUrl="";
            if(url){
                newUrl= url.split(' ').join('_');
            }
            return newUrl
        }
    }
}
</script>

<style>
.card{
    width: 100%;
    height: 100%;
    border: none;
    padding: 0px;
    transform: scale(1);
    transition: transform 0.3s
}
.card-image{
    margin: 0px;
    width: 100%;
    height: 100%;
    border: none;
}
.under-image{
    position:absolute;
    background-image: linear-gradient(to bottom, transparent, rgb(0,0,0,0.9));
    width: 100%;
    border: none;
    height: 100%;
    top:0;
    left: 0; 
}
.detail{
    position:absolute;
    padding: 10px;
    top:20vh;
    left: 3vh;
}
.card h4{
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
}
.card h6{
    font-size: 13px;
    margin-left: 5px;
    margin-top: 5px;
    font-style: italic;
    color: rgb(165, 165, 165)
}
.card:hover{
    transform: scale(1.03);
    transition: all 0.3s
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .detail{
        position:absolute;
        padding: 10px;
        top:10vh;
        left: 3vh;
    }
}
@media only screen and (min-width: 767px) and (max-width: 991px) {
 .detail{
        position:absolute;
        padding: 10px;
        top:25vh;
        left: 3vh;
    }
}
@media only screen and (max-width: 767px) {
  .detail{
        position:absolute;
        padding: 10px;
        top:20vh;
        left: 3vh;
    }
}

@media only screen and (max-width: 479px) {
    .detail{
        position:absolute;
        padding: 10px;
        top:18vh;
        left: 3vh;
    }
}
</style>
