<template>
    <div>
       <div class="container-fluid px-0">
           <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1">
               <div class="col-lg-2 col-sm-2 col-md-2 col-2 bg-color bg-dark">
                   <Tabs/>
               </div>
               <div class="col-lg-10 col-sm-10 col-md-10 col-10 px-0">
                   <div class="header">
                      <HeaderAdmin/>
                   </div>
                   <div class="body">
                       <form action="">
                           <div class="row mt-2  d-flex justify-content-center row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 " style="height:80vh">
                                <div class="col-lg-4 pt-4 col-sm-2 col-md-2 col-2 bg-dark">
                                   <div class="mb-3">
                                        <label for="exampleFormControlInput11" class="form-label">Nom en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput11" v-model="technique.nom_mg" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1f" class="form-label">Nom en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1f" v-model="technique.nom_fr" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1s" class="form-label">Description en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1s" v-model="technique.description_mg" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1q" class="form-label">Description en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1q"  v-model="technique.description_fr" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1ss" class="form-label">Avantage en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1ss" v-model="technique.avantage_fr" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1aa" class="form-label">Avantage en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1a" v-model="technique.avantage_mg" required>
                                    </div> 
                                    
                                </div>
                                <div class="col-lg-4 pt-4 col-sm-2 col-md-2 col-2 bg-dark">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1zz" class="form-label">Materiel en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1zz" v-model="technique.materiel_fr" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1zzz" class="form-label">Materiel en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1zzz" v-model="technique.materiel_mg" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Information en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.info_mg" required>
                                    </div> 
                                     <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Information en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.info_fr" required>
                                    </div> 
                                     <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Source*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.source" required>
                                    </div> 
                                     <div class="mb-3">
                                        <label for="exampleFormControlInput1oo" class="form-label">Couverture*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1oo" v-model="technique.couverture" required>
                                    </div> 
                                    <div class="mb-3 d-flex justify-content-center">
                                        <button type="button" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ajouter</button>
                                        <button type="button" class="btn btn-danger mx-4">Annuler</button>
                                    </div>
                                </div>
                            </div>
                       </form>
                   </div>
                   <div>

                   </div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
import HeaderAdmin from "../components/HeaderAdmin"
import Tabs from "../components/Tabs"
export default {
    name:'AddTechnique',
    components: {
      HeaderAdmin,
      Tabs
    },
     data:function() {
      return{
        technique:{
            nom_mg:'',
            nom_fr:'',
            description_mg:'',
            description_fr:'',
            info_mg:'',
            info_fr:'',
            avantage_fr:'',
            avantage_mg:'',
            materiel_mg:'',
            materiel_fr:'',
            source:'',
            couverture:'',
        },
        baseUrl:'https://api.tanimboly.org'
      }
   },
    computed: {
     
    },
    created(){
      
    },
    mounted() {
      
    },
    destroyed() {
      
    },
    methods: {
       sendTechnique(){
          
       }
    }
}
</script>
<style scoped>
.body label{
    font-size: 16px;
    color: white !important
}
.red{
    text-align: center;
    color:red;
    margin-top: 0%;
}
</style>

