<template>
    <div class="footer">
        <div class="container pt-1 px-0">
           <div class="row row-cols-lg-1  justify-content-lg-center">
              <div class="col col-lg-12 text-justify my-lg-10 pl-4 mt-0">
                <div class="row align-items-center pt-0">
                  <div class="col-12  col-sm-6 col-md-3 col-lg-3 text-justify mt-0 px-lg-5 px-3">
                    <img src="../assets/images/logo-lg.png"  alt="" width="70px" height="70px" class="mx-3">
                    <p class="mt-2" style="font-size:12px;font-weight:bolder">TANIMBOLY</p>
                  </div>
                  <div class="col-9 px-0 col-sm-6 col-md-3 col-lg-3 text-justify pt-0">
                    <p class="px-3 pt-5 my-2 my-md-2 my-sm-4 my-lg-3">Techniques</p>
                    <ul class="text-justify my-3">
                      <li v-for="(item,index) in items" :key="index">
                        <router-link :to="{name:'DetailTechnique',params:{id:item.id_technique}}" v-if="item.nom_fr==undefined || item.nom_fr=='null' ? false:true" style="text-decoration:none;color:rgb(110, 110, 110)">{{item.nom_fr}}</router-link>
                        <router-link :to="{name:'DetailTechnique',params:{id:item.id_technique}}" v-else style="text-decoration:none;color:rgb(110, 110, 110)">{{item.nom_mg}}</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-12 px-0 col-sm-6 col-md-3 col-lg-3 text-justify">
                    <p class="px-3">Liens</p>
                    <ul>
                      <li><a href="#">A propos de nous</a></li>
                      <li><a :href="rechercheId">Rechercher</a></li>
                    </ul>
                  </div>
                  <div class="col-12 px-0 col-sm-6 col-md-3 col-lg-3 text-justify">
                    <p class="px-3 pt-0 pt-md-5 pt-sm-5 pt-lg-5">Nous contacter</p>
                    <ul>
                      <li><a href="#" >+261346668165</a></li>
                      <li><a href="#" >support@tanimboly.com</a></li>
                      <li><a href="#" >support@facebook.com</a></li>
                      <li><a href="#" >support@instagram.com</a></li>
                    </ul>
                  </div>
                </div>    
              </div> 
            </div> 
            <div class="row row-cols-lg-1  justify-content-lg-center text-center">
              <div class="col-12 col-lg-12 col-md-12 mt-5">
                <p class="p3  text-center">Copyright © 2021 Tanimboly. Tout droits réserves.</p>
              </div> 
            </div> 
        </div> 
        <transition name="fade">
          <div class="up" v-if="showup">
            <a :href="scrollId"><i class="fas fa-long-arrow-alt-up"></i></a>
          </div>
      </transition>
      </div>
</template>
<script>
export default {
    name:'Footer',
    props:{
      items:{
        type:Array,
        default:()=>[]
      },
      showup:{
        type:Boolean,
        default:()=>false
      },
      scrollId:{
        type:String,
        default:()=>'#'
      },
      rechercheId:{
        type:String,
        default:()=>'#'
      }
    }
}
</script>

<style>
/* footer*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.up{
   text-align: center;
   display: block;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: rgb(37, 141, 84);
   position: fixed;
   top:90%;
   left: 95%;
}
.up i{
  font-size:30px ;
  text-align: center;
  margin-left: 0px;
  margin-top: 5px;
  color: rgb(243, 243, 243)
}
.footer{
  width: 100%;
  padding-left: 15px!important;
  background-size: cover;
  background-color: rgb(0, 0, 0);
  position: relative;
  padding: 0;
}
.footer ul{
  list-style: none;
}
.footer p{
  color: white;
  margin-left: 16px
}
.footer li{
  color: rgb(110, 110, 110)
}
.footer li:hover{
   text-decoration: underline
}
.footer .p3{
  font-size: 13px
}
.footer a{
  text-decoration: none;
  color: rgb(110, 110, 110);
}
@media only screen and (min-width: 1200px) {
 
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {

   .up{
   top:90%;
   left: 92%;
  }
}
@media only screen and (min-width: 767px) and (max-width: 991px) {
  .up{
   top:88%;
   left: 90%;
  }
}
@media only screen and (max-width: 769px) {
 
  .up{
   top:90% !important;;
   left: 87%;
  }
  
}
@media only screen and (max-width: 479px) {
  
  .up{

   top:90%;
   left: 85%;
  }

}
</style>
