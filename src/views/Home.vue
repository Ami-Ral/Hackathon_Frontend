
<template>
  <div>
    <h1>HELLO WORLD!!</h1><br>
    <h1>{{text}}</h1>
    <button type="button" name="" id="" class="btn" @click="testclick()">Test connexion</button>
  </div>
</template>

<script>
  
import Admin from '../service/Admin'

  export default {
    name: 'Home',
    components: {
  

    },
    computed: {

    },
    created(){
      
    },
    destroyed() {
     
    },
    data:function() {
      return{
        text:""
      }
   },
  methods: {
    testclick(){
      Admin.test()
        .then((res)=>{this.text = res.data})
        .catch((error)=>console.log(error))
    }
  }
}
</script>
<style >

</style>