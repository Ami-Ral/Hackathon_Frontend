
<template>
  <div>
    <div class="">
      <header id="header-default"  >
        <Header/>
      </header>
      <div class="" id="container">
        <div class="container">
          <div class="inner-container" data-aos="zoom-in" data-aos-delay="300">
              <h2>Agriculture pour la vie <br>Produits et techniques</h2>
              <p>Concours afass hackathon</p>
              <div class="d-flex decouvre">
                <a href="#decouvrir" class="btn-get-started scrollto"><i class="fas fa-long-arrow-alt-down"></i></a>
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
            <p>Use these cards when you want to display content with an image, such as a blog post or product. They’re built with CSS grid to enable the 3-column layout. When you select the “Cards Grid Container,” you’ll see a red icon on the top right. Click the icon to edit the number of columns, the column gap, and more!</p>
          </div>
        </div>
        <div class="row row-cols-lg-3 justify-content-lg-center">
          <div class="col col-lg-3 mr-4">
            <div class="card Bgimage" style="width: 16rem;height:20rem" :style="backgroundStyles('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEV8Nk-vQ7Qmy-RnJf5UvZdQvj5QgJFyOGg&usqp=CAU')">
              <div class="card-body mt">
                <h4 class="card-title">Agri Tech 1</h4>
                <h6 class="card-subtitle mb-2">2 pots / kg</h6>
              </div>
            </div>
          </div>
          <div class="col-md-auto col-lg-3 mr-4">
             <div class="card Bgimage" style="width: 16rem;height:20rem" :style="backgroundStyles('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3ILHANpQ0TESoSWTNSSjDk-FpmeKFQRpOA&usqp=CAU')" >
              <div class="card-body mt" >
                <h4 class="card-title">Agri Tech 2</h4>
                <h6 class="card-subtitle mb-2 ">2 pots / kg</h6>
              </div>
            </div>
          </div>
          <div class="col col-lg-3">
             <div class="card Bgimage" style="width: 16rem;height:20rem" :style="backgroundStyles('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTAOIEEHEtOktOxxQm6k--2riGBT35pRKkQ&usqp=CAU')">
              <div class="card-body mt">
                <h4 class="card-title">Agri Tech 3</h4>
                <h6 class="card-subtitle mb-2 ">2 pots / kg</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header"
  import AOS from 'aos'

  export default {
    name: 'Home',
    components: {
      Header

    },
    computed: {
    },
    created(){
      
    },
    mounted(){
       AOS.init()
    },
    destroyed() {
     
    },
    data:function() {
      return{
        
      }
   },
  methods: {
   
    backgroundStyles(image) {
				return {
					'background-image': `url(${image})`,
				}
			},
  }
}
</script>
<style >
#header-default{
  overflow: hidden;
}


#container {
  width: 100%;
  height: 100vh;
  background: url("../assets/images/bg.jpg") top center;
  background-size: cover;
  position: relative;
  padding: 0;
}


#container:before {
  content: "";
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.inner-container{
  text-align: center;
  padding-top: 20%;

}
.inner-container h2{
 font-weight: bolder;
 word-spacing: 0px;
 font-style:italic;
 color: rgb(243, 243, 243)
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
.decouvre a{
  font-size:30px ;
  text-align: center;
  margin-left: 17px;
  margin-top: 5px;
  color: rgb(243, 243, 243)
}

.technique{
  width: 100%;
  height: 95vh;
  background-size: cover;
  background-color: rgb(15, 15, 17);
  position: relative;
  padding: 0;

}
.technique p,h2{
  color:white
}
.technique p{
  font-size: 13px
}

.under{
  display: block;
  height: 4px;
  text-align: center;
  width: 50px;
  margin-left: 48%;
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

@media (max-width: 992px) {
  #header-default {
    padding: 12px 0;
  }
}
</style>