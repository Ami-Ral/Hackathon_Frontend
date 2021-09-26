<template>
    <div>
        <transition name="fade">
            <div v-if="!overlay">
                <header id="header-default"  >
                    <Header :bgcolor="bgcolor" :active4="active4" :fontWeight4="fontWeight4"/>
                </header>
            </div>
        </transition>
        <div class="d-flex justify-content-center overlay"  v-if="overlay">
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/Header"

export default {
    name:'DetailPlante',
     components: {
      Header
    },
    created(){
      this.setTimeout(() => {
          this.overlay = false
      })
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        active4:'white!important',
        fontWeight4:'bolder',
        overlay:true,
        timeout: null,
      }
   },
    methods:{
        clearTimeout() {
			if (this.timeout) {
				clearTimeout(this.timeout)
				this.timeout = null
				}
			},
		setTimeout(callback) {
			this.clearTimeout()
			this.timeout = setTimeout(() => {
				this.clearTimeout()
				callback()
			}, 1000)
        },
   }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>