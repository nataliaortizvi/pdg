<template>

  <section class="searcher">
    <h2 class="titleVar">¿Qué variable necesitas medir hoy?</h2>
    <div class="rightItems">
      <input class="imput" id="search" placeholder="Search..."/>
      <button class="btn--small">Siguiente</button>
      
      <!--input type="search" id="search" placeholder="Search..."/-->
    </div>

  </section>

  <section class="manual">
    <h1>¿Cómo usar Validata?</h1>
  </section>

</template>

<script>

</script>

<style lang="scss" scoped>

@import 'src/assets/main.scss';

  .searcher {
    padding: 100px 30px 50px 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: $MainTypo;
    color: $MainColorBlue;
    font-size: $TitleSize;
    width: 100%;

    .titleVar {
      width: 400px;
    }

    .rightItems {
      display: flex;
      flex-direction: row;
      
    }

  }

</style>