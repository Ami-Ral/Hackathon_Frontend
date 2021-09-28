<template>
    <form>
      <input list="country" type="text" name="country" />

      <datalist id="country">

        <option v-for="path in paths" v-bind:value="path.nom" />
      </datalist>

      <input type="submit" value="Voir une région">
   </form>
</template>
<script>
import langue from '../service/Multilangue.js'
import MapService from '../service/Map.js'

export default {
    name:'List',
    data:function() {
        return{
            paths:[],
        }
    },
    beforeMount(){
        const self = this;
        const d = MapService.all();
        d.then(res => {
            self.paths = res.data;
        })
    },
    methods:{
        test(){
            alert("clicked");
        },
    },
}
</script>

<style scoped>

form{
    padding-left: 3rem;
}

form input{
    padding: 10px;
    border: none;
}

form input[type=text]{
    background-color: #0006;
    color: white;
    caret-color: white;
}

form input:focus{
    outline: none;
}

form input[type=submit]{
    background-color: #1c6d41;
    color: white;
}

</style>
