<template>
  <nav  class="navbar fixed-top shadow navbar-expand-lg bg-fade-up navbar-light align-items-center px-0" id="bgcolor" :style="{ background:bgcolor,transition:'all 0.5s'}">
    <div class="container-fluid px-0" id="header-default">
        <router-link class="navbar-brand navbar-left mt-4" to="/">
            <img src="../assets/images/logo-sm.png" alt="" width="34px" height="35px" class="mx-3">
            <p style="font-size:11px;font-weight:bold" class="mx-0">TANIMBOLY</p>
        </router-link>
        <button class="navbar-toggler bg-white botton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse align-items-center px-">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-center navbar-nav-scroll " style="bs-scroll-height: 100px;">
                <li class="nav-item px-0">
                    <router-link class="nav-link" :style="{color:active1,fontWeight:fontWeight1}" aria-current="page" to="/">Accueil</router-link>
                </li>
                <li class="nav-item px-0">
                    <router-link to="/techniques" :style="{color:active2,fontWeight:fontWeight2}" class="nav-link" >Techniques</router-link>
                </li>
                <li class="nav-item px-0">
                    <router-link to="/climat" :style="{color:active5,fontWeight:fontWeight5}" class="nav-link" >Climat</router-link>
                </li>
                <li class="nav-item px-0">
                    <router-link class="nav-link" :style="{color:active3,fontWeight:fontWeight3}" to="/carte">carte</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link"  :style="{color:active4,fontWeight:fontWeight4}"  to="/plantes">plantes</router-link>
                </li>
            </ul>
             <ul class="navbar-nav me-auto mb-0 mb-lg-0 navbar-right">
                <li class="nav-item">
                    <i class="fab fa-facebook-f"></i>
                </li>
                <li class="nav-item">
                    <i class="fab fa-twitter"></i>
                </li>
                <li class="nav-item">
                    <i class="fab fa-instagram"></i>
                </li>
            </ul>
        </div>
        <div class="collapse navcollaspse pr-4" id="navbarSupportedContent">
            <ul class="navbar-nav2 px-0" >
                <li class="nav-item">
                     <router-link class="nav-link" :style="{color:active1,fontWeight:fontWeight1}" aria-current="page" to="/">Accueil</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/techniques" :style="{color:active2,fontWeight:fontWeight2}" class="nav-link" >Techniques</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/climat" :style="{color:active5,fontWeight:fontWeight5}" class="nav-link" >Climat</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :style="{color:active3,fontWeight:fontWeight3}" to="/carte">carte</router-link>
                </li>
                <li class="nav-item mr-5">
                    <router-link class="nav-link "  :style="{color:active4,fontWeight:fontWeight4}"  to="/plantes">plantes</router-link>
                </li>
            </ul>
            <ul class="navbar-nav3">
                <li class="nav-item">
                    <i class="fab fa-facebook-f"></i>
                </li>
                <li class="nav-item">
                    <i class="fab fa-twitter"></i>
                </li>
                <li class="nav-item">
                    <i class="fab fa-instagram"></i>
                </li>
            </ul>
            
            
        </div>
       
    </div>
    </nav>

</template>

<script>

  export default {
    name: 'Header',
    props:{
      bgcolor:{
          type:String,
          default:()=>'transparent'
      },
      active1:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
      active2:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
       active3:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
       active4:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
     active5:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
      fontWeight1:{
          type:String,
          default:()=>''
      },
      fontWeight2:{
          type:String,
          default:()=>''
      },
       fontWeight3:{
          type:String,
          default:()=>''
      },
       fontWeight4:{
          type:String,
          default:()=>''
      },
      fontWeight5:{
          type:String,
          default:()=>''
      }
    },
    components: {
    },
    data:function() {
      return{
     
      }
   },
   
  methods: {
     
    }
  }
</script>

<style scoped>
#bgcolor{
    box-shadow: rgb(0, 0, 0,0.9);

}
.navbar{
    height: 55px !important;
}
.navbar-nav.navbar-center li a{
    text-transform: uppercase;
    font-size: 14px  !important;
    font-style: italic;
}

.navbar-nav.navbar-center li .nav-link:hover{
    color: rgb(255, 255, 255)!important
}
 .navbar-right i{
    font-size: 20px;
    cursor: pointer;
    color: rgb(219, 219, 219)
}
.navbar-right li{
    margin-left: 15px;
    color: #888  !important
}
.navbar-right i:hover,.navbar-left:hover{
    color: rgb(255, 255, 255)
}
.navbar-left{
    margin-left: 20px !important;
    color: rgb(219, 219, 219) !important
}
.active{
    color:white !important;
    font-weight: bold
}
.navcollaspse{
    height: 80px !important;
    padding-top: 10px;

}

@media (min-width: 1200px) {

    .navbar-nav.navbar-center {
        position: absolute;
        left: 50%;
        transform: translatex(-50%);
    }
    .navbar-nav.navbar-center li {
      margin-left: 10px
    }
    .navbar-left{
        margin-left: 10px
    }
    .navbar-right {
        margin-left: 90% !important
    }
    .navcollaspse{
        display: none
    }
}
.navcollaspse{
    position: absolute;
    width: 100%;
    height: 100px;
    left: 0px;
    background-color: rgb(37, 141, 84);
    top:60px;
}
.navbar-nav2{
    list-style: none;
    display: flex;
    flex-direction: row
}
.navbar-nav3{
    list-style: none;
    align-items: center;
    display: flex;
    padding-left: 29%;
    flex-direction: row
}
.navbar-nav3 i{
    font-size: 30px !important;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 40px;
    color: rgb(199, 199, 199)
}
.navbar-nav3 i:hover{
    color: white
}
.navbar-nav2 a{
    text-decoration: none !important;
    color: rgb(199, 199, 199)
}
.navbar-nav2 a:hover{
    color: white
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
     .navbar-nav.navbar-center {
        position: absolute;
        left: 50%;
        transform: translatex(-50%);
    }
    .navcollaspse{
        display: none
    }
    .navbar-right {
        margin-left: 90% !important
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
     .navbar-nav2{
        list-style: none;
        display: flex;
        padding-left: 27% !important;
        flex-direction: row
    }
    .navbar-nav3{
        list-style: none;
        align-items: center;
        display: flex;
        padding-left: 40% !important;
        flex-direction: row
    }
     .botton{
        margin-top: -39px !important;
        margin-right: 10px;
    }
    .navbar-left{
        margin-top: -18px !important
    }
    .navcollaspse{
        top:55px;
    }
    .navbar-nav3{
         margin-top: -20px
     }
    .navbar-nav3 i{
        font-size: 20px!important;
    }
    .navbar-nav2{
        margin-left: -30px!important
    }
}
@media only screen and (max-width: 767px) {
    .navbar-nav2{
        list-style: none;
        display: flex;
        padding-left: 20% !important;
        flex-direction: row
    }
    .navbar-nav3{
        list-style: none;
        align-items: center;
        display: flex;
        padding-left: 35% !important;
        flex-direction: row
    }
    .botton{
        margin-top: -39px !important;
        margin-right: 10px;
    }
    .navbar-left{
        margin-top: -18px !important
    }
    .navcollaspse{
        top:55px;
    }
    .navbar-nav3{
         margin-top: -20px
     }
    .navbar-nav3 i{
        font-size: 20px!important;
    }
    .navbar-nav2{
        margin-left: -45px!important
    }
}
@media only screen and (max-width: 479px) {
    .botton{
        margin-top: -39px !important;
        margin-right: 10px;
    }
    .navbar-left{
        margin-top: -18px !important
    }
     .navbar-nav2{
        list-style: none;
        display: flex;
        padding-left: 10% !important;
        flex-direction: row
    }
    .navcollaspse{
        top:55px;
    }
     .navbar-nav3{
         margin-top: -20px
     }
    .navbar-nav3 i{
        font-size: 20px!important;
    }
    .navbar-nav2{
        margin-left: -30px!important
    }
}
</style>
