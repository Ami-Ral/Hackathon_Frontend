<template>
    <div>
        <header id="header-default"  >
            <Header :bgcolor="bgcolor" :active5="active5" :fontWeight5="fontWeight5"/>
        </header>
    </div>
</template>
<script>
import Header from "../components/Header"

export default {
    name:'Climat',
     components: {
      Header
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        active5:'white',
        fontWeight5:'bolder',
      }
   },
}
</script>
<style scoped>

</style>

