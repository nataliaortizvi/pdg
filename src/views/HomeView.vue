<template>

  <section class="searcher">
    <h2 class="titlesStyle titleVar">¿Qué variable necesitas medir hoy?</h2>
    <div class="rightItems">
      <input class="input input--variable" id="search" placeholder="Escribe tu variable"/>
      <button class="btn btn--small" >Siguiente</button>
    </div>

  </section>
  <section class="banner">
    <img class="banner__img" src="src/assets/imgs/banner.png">
      <h2 class="titlesStyle banner__text">Validata te apoya en los procesos de validación de tus hipótesis</h2>
  </section>

  <section class="manual">
    <h1>¿Cómo usar Validata?</h1>
  </section>

</template>

<script>

  export default {
    components: {
  
},
  }
</script>

<style lang="scss" scoped>

@import 'src/assets/main.scss';

  .searcher {
    padding: 100px 30px 50px 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .titleVar {
      width: 400px;
    }

    .rightItems {
      display: flex;
      flex-direction: row;

      .input--variable {
        margin-right: 17px;
      }
    }
  }

  .banner {
    width: 100%;
    display: flex;
    align-items: center;
    height: 507px;
    background-color: rgba(24, 29, 61, 0.5);;
    

    .banner__img {
      display:flex;
      position: absolute;
      top: 232px;
      z-index: -5;
    }

    .banner__text {
      margin-left: 30px;
      color: $White;
      width: 40%;
      font-size: $BannerTextSize;
    }
  }

</style>