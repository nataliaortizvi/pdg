<script setup>
  import { RouterLink, RouterView } from 'vue-router'


</script>



<template>

   <!-----------------------------GLOBAL HEADER------------------------------->
   <header>

    <h1>VALIDATA</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/nosotros">Nosotros</RouterLink>
      <RouterLink to="/calculadora">Calculadora</RouterLink>
      <RouterLink to="/analisis">Tipos de análisis</RouterLink>
    </nav>
        
  </header>

   <!---ICON LIBRARY--->
   <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">

  <RouterView />
</template>


<style lang="scss">



  //----STYLE RESET-----
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

</style>
