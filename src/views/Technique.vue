<template>
    <div>
        <header id="header-default"  >
            <Header :bgcolor="bgcolor" :active2="active2" :fontWeight2="fontWeight2"/>
        </header>
        <div class="recherche">
            <div class="container-fluid">
                <div class="row row-cols-lg-4 row-cols-4 row-cols-md-4 row-cols-sm-4">
                    <div class="col col-lg-1 col-sm-2 col-md-2 col-12">
                        <label for="searchValue" class="recherchep">Rechercher:</label>
                    </div>
                    <div class="col-lg-9 col-sm-4 col-md-6 col-3 responsive2 inputresponsive">
                        <input type="text" v-model="searchValue" class="form-control bg-white mt-2" id="searchValue" value="">
                    </div>
                    <div class="col-lg-1 col-sm-3 col-md-2 col mt-lg-2 mt-sm-2  mt-md-2 pt-lg-0 pt-sm-0  pt-md-0 responseSelect responsive2 pt-2">
                        <select class="form-select form-select-md mb-3" v-model="typeSearch" aria-label=".form-select-lg example">
                            <option value="tout">Tout</option>
                            <option value="technique">Technique</option>
                            <option value="region">Région</option>
                            <option value="plante">Plante</option>
                        </select>
                    </div>
                    <div class="col col-lg-1 col-sm-2 col-md-2 mt-lg-2 mt-sm-2 mt-md-2  pt-lg-0 pt-sm-0  pt-md-0 responsive2 pt-2">
                        <button type="submit"  class="btn btn-success">Rechercher</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="listTechnique">
            <div class="container">
               <div class="row row-cols-lg-3 row-cols-1 row-cols-md-1 row-cols-sm-1 ml-lg-6 justify-content-lg-center justify-content-center">
                    <div class="col col-lg-3 col-sm-12 col-md-12 col-12 mr-4">

                    </div>
                </div>
                <div class="row row-cols-lg-1 row-cols-1 row-cols-md-1 row-cols-sm-1 ml-lg-6 justify-content-lg-center text-center justify-content-center">
                    <div class="col-12 col-lg-3 col-sm-12 col-md-12 col-12 mr-4">
                        <button type="button" class="btn btn-success mx-4 mt-5">Afficher plus</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
    name:'Technique',
     components: {
       Header,
       Footer
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        active2:'white',
        fontWeight2:'bolder',
        searchValue:'',
        typeSearch:'tout'
      }
   },
}
</script>
<style scoped>
.recherche{
  width: 100%;
  height: 20vh;
  background: rgb(182, 182, 182);
  background-size: cover;
  position: relative;
  padding-top: 70px
}
.listTechnique{
  width: 100%;
  background: rgb(15, 15, 17) top center;
  padding-bottom: 20vh !important; 
  background-size: cover;
  position: relative;
  padding: 0;
}
.recherchep{
    margin-top: 15px;
    color: black !important;
    font-size: 16px
}
.responseSelect{
    margin-left: -20px
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
   .responsive2{
       margin-top: -40px
   }
   .inputresponsive{
       margin-left: 100px;

   }
}
</style>

