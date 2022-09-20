<script>

  import { RouterLink, RouterView } from 'vue-router';
  import Help from "../src/components/Help.vue";
import Help1 from '../src/components/Help.vue';

  export default {

    components: {
    Help,
    Help1
},
    
    el: '#navbar',
    data () {
      return {
        view: {
          topOfPage: true
        }
      }
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll(){
        if(window.pageYOffset>-0){
          if(this.view.topOfPage) this.view.topOfPage = false
        } else {
          if(!this.view.topOfPage) this.view.topOfPage = true
        }
      }
    }
  }
  

</script>



<template>

   <!-----------------------------GLOBAL HEADER------------------------------->
   <header id="navbar" :class="{'onScroll': !view.topOfPage}">
    <h1>LOGO</h1>
    <nav >
      <RouterLink to="/" id="linkss" class="link">Home</RouterLink>
      <RouterLink to="/calculadora" id="linkss" class="link">Calculadora</RouterLink>
      <RouterLink to="/analisis" id="linkss" class="link">Tipos de análisis</RouterLink>
    </nav>
  </header>
  
 
   <!---ICON LIBRARY--->
   <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">

  <RouterView />
  <Help1></Help1>
</template>

<style lang="scss">

@import 'src/assets/main.scss';

  //----STYLE RESET-----
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  .link{
    margin-left: 80px;
    color: $MainColorBlue;
  }

</style>
