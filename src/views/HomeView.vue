<template>

  <section class="buscador">

    <h1 class="titlesStyle">Bienvenido a “Validata”</h1>
    <br>
    <h2>¿Qué variable necesitas medir hoy?</h2>
    <section class="RightItems">
      <button class="btnMain">Siguiente</button>
      <input id="search" placeholder="Search..."/>
      <span class="icon"><i class="fa fa-search"></i></span>
      
      <!--input type="search" id="search" placeholder="Search..."/-->
    </section>
    
    <a>¿No está tu variable? Pidenos que la agregemos</a>

  </section>

  <section class="manual">
    <h1>¿Cómo usar Validata?</h1>
  </section>

</template>



<script>

</script>



<style lang="scss" scoped>

@import 'src/assets/main.scss';

  .buscador{
    padding-top: 100px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>