<template>
  <nav class="navbar fixed-top navbar-expand-lg bg-fade-up navbar-light align-items-center" id="bgcolor" :style="{ background:bgcolor,transition:'all 1s'}">
    <div class="container-fluid">
        <a class="navbar-brand navbar-left" href="#">Hackathon</a>
        <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" collapse navbar-collapse align-items-center">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-center navbar-nav-scroll " style="bs-scroll-height: 100px;">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Techniques</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">carte</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">plantes</a>
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
        <div class="collapse navcollaspse" id="navbarSupportedContent">
            <ul class="navbar-nav2">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Techniques</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">carte</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">plantes</a>
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
          default:()=>'linear-gradient(to bottom, rgb(0, 0, 0,1), rgb(0, 0, 0,0.1))'
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
.navbar-nav.navbar-center li a{
    text-transform: uppercase;
    font-size: 14px  !important;
    font-style: italic;
    color: rgb(219, 219, 219,0.5);
}
.navbar-nav.navbar-center li a:hover{
    color: rgb(219, 219, 219)
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
    margin-left: 10px;
    color: rgb(219, 219, 219) !important
}
.active{
    color:white !important
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
    top:50px;
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
}
@media only screen and (max-width: 479px) {
     .navbar-nav2{
        list-style: none;
        display: flex;
        padding-left: 10% !important;
        flex-direction: row
    }
}
</style>
