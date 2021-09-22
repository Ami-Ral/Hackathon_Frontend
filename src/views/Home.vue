
<template>
  <div>
    <div class="">
      <header id="header-default"  >
        <Header :bgcolor="bgcolor"/>
      </header>
      <div class="" id="container">
        <div class="container">
          <div class="inner-container">
              <h2>Agriculture pour la vie <br>Produits et techniques</h2>
              <p>Concours afass hackathon</p>
              <div class="d-flex decouvre" @click="testConnection()" >
                <a href="#decouvrir" class="btn-get-started scrollto"><i class="fas fa-long-arrow-alt-down"></i></a>
              </div>
          </div>
        </div>
      </div>
      <div class="connaissance">
        <div class="row  align-items-center row-cols-1  pt-5" id="decouvrir">
          <div class="col col-lg-5 col-12 my-lg-10 bgskills">
            <div class="row align-items-center pt-4">
                <div class="col col-lg-6  my-lg-10 pl-4">
                  <div class="container2">
                    <div class="min-card ml-4">
                        <i class="fas fa-truck-pickup"></i>
                    </div>
                    <div>
                      <h6 class="mt-2">
                        Outils
                      </h6>
                      <p>
                        Des outils innovantes et de dernières génération
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col col-lg-6  my-lg-10">
                  <div class="container2">
                    <div class="min-card ml-4">
                        <i class="fas fa-truck-pickup"></i>
                    </div>
                    <div>
                      <h6 class="mt-2">
                        Technologie
                      </h6>
                      <p>
                        La tech qui s'introduit dans l'univers de l'agriculture
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="row align-items-center pt-2">
                <div class="col col-lg-6  my-lg-10">
                  <div class="container2">
                    <div class="min-card ml-4">
                        <i class="fas fa-truck-pickup"></i>
                    </div>
                    <div>
                      <h6 class="mt-2">
                        Techniques
                      </h6>
                      <p>
                        Des techniques agricoles intelligentes face au climat
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col col-lg-6 my-lg-10">
                   <div class="container2">
                    <div class="min-card ml-4">
                        <i class="fas fa-truck-pickup"></i>
                    </div>
                    <div>
                      <h6 class="mt-2">
                        Rendement
                      </h6>
                      <p>
                        Des activités plus rentables
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="col col-lg-7 text-justify my-lg-10 ">
            <div class="row align-items-center pt-3 ml-2">
              <div class="col col-lg-12 text-justify connresponive">
                <h2>Connaissance</h2>
              </div>
              </div>
              <div class="row align-items-center pt-1">
                <div class="col col-lg-12 text-center my-lg-10">
                  <span class="under2"></span>
                </div>
              </div>
              <div class="row justify-content-md-center pt-3">
                <div class="col col-lg-12 techtextresponsive">
                  <p >La sécurité alimentaire et le changement climatique peuvent être abordés ensemble en transformant l'agriculture et en adoptant des pratiques "intelligentes face au climat". Les agriculteurs sont les plus menacés par le changement climatique, mais ils jouent aussi un rôle majeur dans la lutte contre celui-ci.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="technique">
        <div class="container">
        <div class="row align-items-center pt-5">
          <div class="col col-lg-12 text-center my-lg-10">
           <h2>TECHNIQUES</h2>
          </div>
        </div>
        <div class="row align-items-center pt-1">
          <div class="col col-lg-12 text-center my-lg-10">
           <span class="under"></span>
          </div>
        </div>
        <div class="row justify-content-md-center pt-4">
          <div class="col col-lg-9">
            <p>Les techniques agricoles intelligentes face au climat peuvent augmenter la productivité agricole et les revenus, rendre les communautés rurales plus résilientes au changement climatique et, si possible, atténuer le changement climatique.</p>
          </div>
        </div>
        <div class="row row-cols-lg-3 row-cols-1 row-cols-md-1 row-cols-sm-1 ml-lg-6  justify-content-lg-center lg-content justify-content-center">
          <div class="col col-lg-3 col-sm-12 col-md-12 col-12 mr-4">
            <div class="card Bgimage zoom responsiveimage" style="width: 16rem;height:20rem" :style="backgroundStyles('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEV8Nk-vQ7Qmy-RnJf5UvZdQvj5QgJFyOGg&usqp=CAU')">
              <div class="card-body mt">
                <h4 class="card-title">Agri Tech 1</h4>
                <h6 class="card-subtitle mb-2">2 pots / kg</h6>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-12 col-sm-12 col-lg-3 mr-4">
             <div class="card Bgimage zoom  responsiveimage" style="width: 16rem;height:20rem" :style="backgroundStyles('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3ILHANpQ0TESoSWTNSSjDk-FpmeKFQRpOA&usqp=CAU')" >
              <div class="card-body mt" >
                <h4 class="card-title">Agri Tech 2</h4>
                <h6 class="card-subtitle mb-2 ">2 pots / kg</h6>
              </div>
            </div>
          </div>
          <div class="col col-md-12 col-lg-3 col-12">
             <div class="card Bgimage zoom  responsiveimage" style="width: 16rem;height:20rem" :style="backgroundStyles('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTAOIEEHEtOktOxxQm6k--2riGBT35pRKkQ&usqp=CAU')">
              <div class="card-body mt">
                <h4 class="card-title">Agri Tech 3</h4>
                <h6 class="card-subtitle mb-2 ">2 pots / kg</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="galery">
        <div class="container">
          <div class="row align-items-center pt-5">
            <div class="col col-lg-12 text-center my-lg-10">
            <h2>GALLERIE</h2>
            </div>
          </div>
          <div class="row align-items-center pt-1">
            <div class="col col-lg-12 text-center my-lg-10">
            <span class="under"></span>
            </div>
          </div>
          <div class="row row-cols-lg-2 row-cols-md-2 row-cols-1 row-cols-sm-1 mt-5 justify-content-lg-center">
            <div class="col-12 col-sm-12 col-md-5 col-lg-5 mr-4" style="height:18rem !important">
              <img width="100%" height="100%" class="zoom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEV8Nk-vQ7Qmy-RnJf5UvZdQvj5QgJFyOGg&usqp=CAU"  alt="...">
            </div>
            <div class=" col-12 col-sm-12 col-md-7 col-lg-5 mr-4 mt-lg-0 mt-md-0 mt-4">
              <div class="row row-cols-lg-2 mt-0 justify-content-lg-center">
                <div class="col col-lg-6 text-center"  style="height:132px !important">
                    <img width="100%" height="100%" class="zoom"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEV8Nk-vQ7Qmy-RnJf5UvZdQvj5QgJFyOGg&usqp=CAU"  alt="...">
                </div>
                <div class="col col-lg-6 text-center">
                    <img width="100%" height="100%" class="zoom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEV8Nk-vQ7Qmy-RnJf5UvZdQvj5QgJFyOGg&usqp=CAU"  alt="...">
                </div>
              </div>
              <div class="row row-cols-lg-2 mt-4 justify-content-lg-center">
                <div class="col col-lg-6 text-center " style="height:132px !important" >
                    <img width="100%" height="100%"  class="zoom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEV8Nk-vQ7Qmy-RnJf5UvZdQvj5QgJFyOGg&usqp=CAU"  alt="...">
                </div>
                <div class="col col-lg-6 text-center">
                    <img width="100%" height="100%" class="zoom"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEV8Nk-vQ7Qmy-RnJf5UvZdQvj5QgJFyOGg&usqp=CAU"  alt="...">
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      <transition name="fade">
        <div class="up" v-if="showup">
          <a href="#header-default"><i class="fas fa-long-arrow-alt-up"></i></a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header"
  import AOS from 'aos'
  import Admin from '../service/Admin'

  export default {
    name: 'Home',
    components: {
      Header

    },
    computed: {

    },
    mounted() {
      AOS.init()
      window.addEventListener('scroll', this.handleResize);
      this.handleResize()
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleResize);
    },
    data:function() {
      return{
        text:"",
        scrolly: 0,
        bgcolor:"",
        showup:false
      }
   },
  methods: {
   
    backgroundStyles(image) {
				return {
					'background-image': `url(${image})`,
				}
      },
    handleResize(){
      this.scrolly=window.scrollY
      if(this.scrolly>510){
        this.showup = true
      }else{
        this.showup = false
      }
      if(this.scrolly>0){
        this.bgcolor ='rgb(37, 141, 84)'
      }else{
        this.bgcolor ='linear-gradient(to bottom, rgb(0, 0, 0,1), rgb(0, 0, 0,0.1))'
      }
    },
    testConnection(){
      Admin.test()
        .then((res)=>console.log(res.data))
        .catch((error)=>console.log(error))
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#header-default{
  overflow: hidden;
}
a{
  text-decoration: none;
}

#container {
  width: 100%;
  height: 100vh;
  background: url("../assets/images/bg.jpg") top center;
  background-size: cover;
  position: relative;
  padding: 0;
}



.inner-container{
  text-align: center;
  padding-top: 20%;

}
.inner-container h2{
 font-weight: bolder;
 word-spacing: 0px;
 font-style:italic;
 color: white !important
}
.inner-container p{
 font-style:italic;
 color: rgba(248, 248, 248, 0.7);
 font-size: 10px;
}
.decouvre{
   text-align: center;
   margin-left: 47%;
   display: block;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: green;
   margin-top: 40px;
}
.up{
   text-align: center;
   display: block;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: green;
   position: fixed;
   top:90%;
   left: 95%;
}

.decouvre a,.up a{
  font-size:30px ;
  text-align: center;
  margin-left: 0px;
  margin-top: 5px;
  color: rgb(243, 243, 243)
}
.decouvre a{
  margin-left: 17px;
}
.technique{
  width: 100%;
  height: 85vh;
  background-size: cover;
  background-color: rgb(15, 15, 17);
  position: relative;
  padding: 0;

}
.galery{
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-color: rgb(15, 15, 17);
  position: relative;
  padding: 0;

}
.connaissance{
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-color: rgb(15, 15, 17);
  position: relative;
  padding: 0;
}
.technique p,.techniqueh2,.connaissance p,.connaissance h2,h2{
  color:white
}
.technique p{
  font-size: 13px
}
.connaissance p{
  font-size: 13px;
}
.under{
  display: block;
  height: 4px;
  text-align: center;
  width: 50px;
  margin-left: 48%;
  background-color:white
}
.under2{
  display: block;
  height: 4px;
  text-align: center;
  width: 50px;
  margin-left: 0%;
  background-color:white
}

.mt{
  margin-top: 90%
}

.Bgimage{
  background-size: cover;
  background-color: rgb(0, 0, 0,0.5) !important;
  background-repeat: no-repeat
}

.card-body h4{
  color:white
}
.card-body h6{
  color:rgb(233, 233, 233)
}
.zoom{
  transform: scale(1);
  transition: all 0.3s
}
.zoom:hover{
  transform: scale(1.05);
  transition: all 0.3s
}
.bgskills{
  background: linear-gradient(to right, rgba(255,0,0,0), rgb(37, 141, 84));
  height: 45vh;
  padding-left: 60px;
  border-radius: 30px
}
.bgskills p{
  font-size: 11px;
  color: rgb(222, 225, 228)
}
.bgskills h6{
   font-size: 13px;
  color: white
}
.bgskills i{
  font-size: 30px !important;
  margin: 10px 0px 0px 0px;
  margin-left: 5px;
  color: green;
  transition: all 0.3s;
  
}

.min-card{
  height: 50px;
  width: 50px;
  background-color: rgb(233, 233, 233);
  border-radius: 10px;
}
.min-card:hover i{
  transform: scale(1.1);
}
@media (max-width: 992px) {
  #header-default {
    padding: 12px 0;
  }
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .inner-container{
    text-align: center;
    padding-top: 25%;

  }
  .up{
   top:90%;
   left: 92%;
  }
}
@media only screen and (min-width: 767px) and (max-width: 991px) {
  #container {
    margin-top: -20px
  }
  .inner-container{
    text-align: center;
    padding-top: 40%;

  }
  .connaissance{
     height: 80vh;
  }
  .connresponive{
    text-align: center;
  }
  .under2,.under{
    margin-left: 45%
  }
  .connaissance p{
    margin-left: 30px
  }
  .technique{
    height: 190vh;
  }
  .responsiveimage{
    width: 65% !important;
    margin-bottom: 40px;
    margin-left: 15%
  }
  .galery{
    height: 80vh;
  }
  .up{
   top:90%;
   left: 90%;
  }
}
@media only screen and (max-width: 767px) {
  #container {
    margin-top: -20px
  }
  .inner-container{
    text-align: center;
    padding-top: 50%;

  }
  .connaissance{
     height: 80vh;
  }
  .connresponive{
    text-align: center;
  }
  .under2,.under{
    margin-left: 45%
  }
  .connaissance p{
    margin-left: 10px
  }
  .technique{
    height: 190vh;
  }
  .responsiveimage{
    width: 80% !important;
    margin-bottom: 40px;
    margin-left: 10%
  }
  .mt{
    margin-top: 50%
  }
  .galery{
    height: 130vh;
  }
  .up{
   top:90%;
   left: 85%;
  }
}
@media only screen and (max-width: 479px) {
  #container {
    margin-top: -20px
  }
  .inner-container{
    text-align: center;
    padding-top: 60%;

  }
  .connaissance{
     height: 80vh;
  }
  .connresponive{
    text-align: center;
  }
  .under2,.under{
    margin-left: 45%
  }
  .connaissance p{
    margin-left: 10px
  }
  .technique{
    height: 175vh;
  }
  .responsiveimage{
    width: 80% !important;
    margin-bottom: 40px
  }
  .mt{
    margin-top: 50%
  }
  .galery{
    height: 100vh;
  }
  .up{

   top:90%;
   left: 85%;
}

}
</style>