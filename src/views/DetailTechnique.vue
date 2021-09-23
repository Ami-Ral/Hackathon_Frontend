<template>
    <div>
        <header id="header-default"  >
            <Header :bgcolor="bgcolor" :active2="active2" :fontWeight2="fontWeight2"/>
        </header>
    </div>
</template>
<script>
import Header from "../components/Header"

export default {
    name:'DetailTechnique',
     components: {
      Header
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
         active2:'white',
        fontWeight2:'bolder',
      }
   },
}
</script>
<style scoped>

</style>