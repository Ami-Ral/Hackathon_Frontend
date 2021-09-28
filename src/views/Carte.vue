<template>
    <div>
        <transition name="fade">
            <div v-if="!overlay">
                <header id="header-default"  >
                    <Header :bgcolor="bgcolor" :active3="active3" :fontWeight3="fontWeight3"/>
                </header>
                <div class="content-fluid">
                    <div class="map-container">
                        <Map />   
                    </div>
                  <div class="right-part">
                    <img src="https://lesvolsdalexi.s3.ca-central-1.amazonaws.com/blog/20201009155125/visiter-madagascar-cover-1152x605.jpg" alt="Madagascar" class="couvert" />
                    <div class="madagascar-content">
                      <h1>Madagascar</h1>
                      <p class="madagascar-desc">
                          Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur porro libero voluptate itaque similique totam quidem numquam quibusdam doloribus sit, mollitia dolorem, modi. Modi ut molestiae ipsum, adipisci aut quis!
                      </p>

                      <SearchForm />

                    </div>
                  </div>
                </div>
            </div>
        </transition>
        <div class="d-flex justify-content-center overlay"  v-if="overlay">
            <div class="spinner-border text-success" role="status">
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/Header"
import Map from "../components/Map"
import SearchForm from "../components/SearchForm"

export default {
    name:'Plantes',
     components: {
      Header,
      Map,
      SearchForm
    },
    created(){
      this.setTimeout(() => {
          this.overlay = false
      })
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        active3:'white !important',
        fontWeight3:'bolder',
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

.content-fluid{
    background: linear-gradient(331deg, #222222, #0f322a);
    display: flex;
}
.content-fluid .map-container{
    width: 50%;
}

.right-part{
    position: relative;
    width: 60%;
    box-shadow: -10px 0 20px #0004;
    background-color: #0e2625;
    color: white;
}

.right-part .couvert{
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(30%);
}

.right-part h1{
    text-align: right;
    margin-right: 2rem;
    font-family: serif;
    font-size: 5rem;
    margin-top: 2.5rem;
}

.madagascar-content{
    min-height: 100vh;
    overflow-y: auto;
    padding: 64px 10px 20px 24px;
    position: relative;
    z-index: 2;
    background: linear-gradient(90deg, #022e2c 60%, transparent);

}

.madagascar-desc{
    margin-top: 3rem;
    width: 80%;
    padding: 1rem 3rem;
    font-size: .9rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 768px){
    .content-fluid{
        flex-wrap: wrap;
    }
    .content-fluid .map-container{
        width: 100%;
    }
    .content-fluid .right-part{
        width: 100%;
    }

    .right-part h1{
        font-size: 3.5rem;
    }
}
</style>

