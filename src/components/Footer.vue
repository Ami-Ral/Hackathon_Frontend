<template>
    <div class="footer">
        <div class="container">
           <div class="row row-cols-lg-1  justify-content-lg-center text-center">
              <div class="col col-lg-12 text-justify my-lg-10 pl-4 mt-4">
                <div class="row align-items-center pt-4">
                  <div class="col-3  col-md-3 col-lg-3 text-justify mt-0 logofoot">
                    <img src="../assets/images/logo-lg.png"  alt="" width="70px" height="70px" style="margin-top:-50px;margin-left:10px">
                    <p class="mt-2" style="font-size:12px;font-weight:bolder">TANIMBOLY</p>
                  </div>
                  <div class="col-9  col-md-3 col-lg-3 text-justify contacterresponsive contacterresponsive2">
                    <p>Techniques</p>
                    <ul>
                      <li><router-link to="/detailTechnique" style="text-decoration:none;color:rgb(110, 110, 110)">Technique 01</router-link></li>
                      <li><router-link to="/detailTechnique" style="text-decoration:none;color:rgb(110, 110, 110)">Technique 02</router-link></li>
                      <li><router-link to="/detailTechnique" style="text-decoration:none;color:rgb(110, 110, 110)">Technique 03</router-link></li>
                      <li><router-link to="/detailTechnique" style="text-decoration:none;color:rgb(110, 110, 110)">Technique 04</router-link></li>
                      <li><router-link to="/detailTechnique" style="text-decoration:none;color:rgb(110, 110, 110)">Technique 05</router-link></li>
                    </ul>
                  </div>
                  <div class="col-6  col-md-3 col-lg-3 lienresponsive" style="margin-top:-60px">
                    <p style="margin-left: -20px" class="lienp">Liens</p>
                    <ul class="">
                      <li><a href="#" style="margin-left:30px" class="apropos">A propos de nous</a></li>
                      <li><a :href="rechercheId" style="margin-left:-10px" class="ct3">Rechercher</a></li>
                    </ul>
                  </div>
                  <div class="col-6  col-md-3 col-lg-3 contacterresponsive ct2">
                    <p class="Pconctact">Nous contacter</p>
                    <ul>
                      <li>+261346668165</li>
                      <li><a href="#" class="support">support@tanimboly.com</a></li>
                      <li><a href="#" class="support">support@facebook.com</a></li>
                      <li><a href="#" class="support">support@instagram.com</a></li>
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
.Pconctact{
  margin-left:30px !important
}
.support{
  margin-left:55px
}
@media only screen and (min-width: 1200px) {
 
   .logofoot{
    padding-left: 50px !important;
    margin-left: -70px
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {

  .support{
    margin-left:32px!important
  }
  .logofoot{
    padding-left: 50px !important;
    margin-left: -70px
  }
   .up{
   top:90%;
   left: 92%;
  }
}
@media only screen and (min-width: 767px) and (max-width: 991px) {

  .support{
    margin-left:10px!important
  }
  .logofoot{
    padding-left: 50px !important;
    margin-left: -70px
  }
  .ct2{
    margin-top: -30px !important
  }
  .apropos{
    margin-left: -10px !important
  }
  .ct3{
    margin-left: -50px !important
  }
  .lienp{
    margin-left: -65px !important
  }
  .up{
   top:88%;
   left: 90%;
  }
}
@media only screen and (max-width: 769px) {
 
  .contacterresponsive2{
    padding-left: 20px !important
  }
  .ct2{
    margin-left: -50px !important
  }
  .logofoot{
    padding-left: 90px !important
  }
  .up{
   top:90% !important;;
   left: 87%;
  }
  
}
@media only screen and (max-width: 479px) {
  
  .lienresponsive{
   
    margin-left: -40px !important
  }
  .lienp{
    padding-top: 17px
  }
  .p3{
    margin-left: 0px !important;
  }
  .apropos{
    margin-left: 29px !important
  }
  .support{
    margin-left:17px!important
  }
  .contacterresponsive{
    margin-left: -15px !important
  }
  .logofoot{
    padding-left: 0px !important
  }
  .up{

   top:90%;
   left: 85%;
  }

}
</style>
