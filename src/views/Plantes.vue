<template>
    <div>
        <header id="header-default"  >
            <Header :bgcolor="bgcolor" :active4="active4" :fontWeight4="fontWeight4"/>
        </header>
    </div>
</template>
<script>
import Header from "../components/Header"

export default {
    name:'Plantes',
     components: {
      Header
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
         active4:'white',
        fontWeight4:'bolder',
      }
   },
}
</script>
<style scoped>

</style>

