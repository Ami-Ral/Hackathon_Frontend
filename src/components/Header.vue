<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light align-items-center" id="bgcolor">
    <div class="container-fluid">
        <a class="navbar-brand navbar-left" href="#">Hackathon</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-center ">
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
        </div>
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
    </nav>

</template>

<script>

  export default {
    name: 'Header',
    props:{
      
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
    background: linear-gradient(to bottom, rgb(0, 0, 0,1), rgb(0, 0, 0,0.1));
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
        margin-right: 2% !important
    }
}




</style>
