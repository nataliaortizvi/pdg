<script setup>
  import { RouterLink, RouterView } from 'vue-router'


</script>



<template>

   <!-----------------------------GLOBAL HEADER------------------------------->
   <header>

    <h1>LOGO</h1>

    <nav class="nav">
      <RouterLink to="/" class="link">Home</RouterLink>
      <RouterLink to="/calculadora" class="link">Calculadora</RouterLink>
      <RouterLink to="/analisis" class="link">Tipos de análisis</RouterLink>
    </nav>
        
  </header>

   <!---ICON LIBRARY--->
   <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">

  <RouterView />
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
