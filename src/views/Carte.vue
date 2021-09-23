<template>
    <div>
        <header id="header-default"  >
            <Header :bgcolor="bgcolor" :active3="active3" :fontWeight3="fontWeight3"/>
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
        active3:'white',
        fontWeight3:'bolder',
      }
   },
}
</script>
<style scoped>

</style>

