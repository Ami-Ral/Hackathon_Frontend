<template>
    <div class="contact">
        <div class="container">
          <form action="" @submit.prevent="handleEmail()">
            <div class="row row-cols-lg-1  justify-content-lg-center">
              <div class="col col-lg-10 text-justify my-lg-10 pl-4">
                    <div class="row align-items-center pt-3 ml-2">
                      <div class="col col-lg-12 text-justify connresponive">
                        <h2>Contactez-nous</h2>
                      </div>
                    </div>
                    <div class="row align-items-center pt-1">
                      <div class="col col-lg-12 text-center my-lg-10">
                        <span class="under2"></span>
                      </div>
                    </div>
                    <div class="row justify-content-md-center pt-3 mt-3">
                      <div class="col-6 col-lg-6 col-sm-6 col-md-6">
                        <label for="nom">Nom*</label>
                        <input type="text" v-model="bodyEmail.nom"  class="form-control bg-white mt-2" id="nom" value="">
                      </div>
                      <div class="col-6 col-lg-6 col-sm-6 col-md-6">
                        <label for="prenom">Prénom *</label>
                        <input type="text" v-model="bodyEmail.prenom" class="form-control bg-white mt-2" id="prenom" value="">
                      </div>
                    </div>
                    <div class="row justify-content-md-center pt-3">
                      <div class="col-6 col-lg-6 col-sm-6 col-md-6">
                        <label for="email">Email *</label>
                        <input type="email" v-model="bodyEmail.email"  class="form-control bg-white mt-2" id="email" value="">
                      </div>
                      <div class="col-6 col-lg-6 col-sm-6 col-md-6">
                        <label for="telephone">Téléphone</label>
                         <input type="telephone" v-model="bodyEmail.telephone" class="form-control bg-white mt-2" id="telephone" value="">
                      </div>
                    </div>
                    <div class="row justify-content-md-center pt-3">
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label for="objet">Objet*</label>
                        <input type="text" v-model="bodyEmail.objet"  class="form-control bg-white mt-2" id="objet" value="">
                      </div>
                    </div>
                    <div class="row justify-content-md-center pt-3">

                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label for="message">Message</label>
                        <input type="textarea" v-model="bodyEmail.message" class="form-control bg-white mt-2 pb-5" id="message" value="">
                      </div>
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-3">
                          <transition name="fade">
                                <div class="up" v-if="status">
                                  <p :style="{color:statusColor}"><i class="fas fa-long-arrow-alt-up"></i>{{textStatus}}</p>
                                </div>
                          </transition>
                        <button type="submit" class="btn btn-success">Envoyer</button>
                      </div>
                    </div>
              </div>
            </div>
          </form>
        </div>
      </div>
</template>
<script>
import baseUrl from '../service/baseUrl'
const axios = require('axios');

export default {
    name:'Contact',
   data:function() {
      return{
          bodyEmail:{
              nom:'',
              prenom:'',
              email:'',
              telephone:'',
              message:'',
              objet:'',
          },
          status:false,
          textStatus:'',
          statusColor:'white'
      }
   },
    methods: {
        handleEmail(){
            axios.post(baseUrl + 'autre/contacter',this.bodyEmail)
            .then(()=>{
                this.status = true
                this.textStatus= 'Envoie succes'
                this.statusColor = 'green'
            })
            .catch(()=>{
                this.status = true
                this.textStatus= 'Envoie erreur'
                this.statusColor = 'red'
            })
        }
    }
}
</script>
 <style>
/*conctact*/
.contact{
  width: 100%;
  height: 90vh;
  background-size: cover;
  background-color: rgb(15, 15, 17);
  position: relative;
  padding: 0;

}
.contact label{
  font-size: 16px;
  color: white
}
/*conctact*/
.contact{
  width: 100%;
  height: 90vh;
  background-size: cover;
  background-color: rgb(15, 15, 17);
  position: relative;
  padding: 0;

}
.contact label{
  font-size: 16px;
  color: white
}
 </style>
 