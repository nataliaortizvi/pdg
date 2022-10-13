<script>
import Help from "../components/Help.vue";

export default {
  components: {
    Help,
  },

  data() {
    return {
      searchInput: "",
    };
  },

  methods: {
    p(){
      console.log(this.searchInput)
    }
  },
};
</script>

<template>
  <section class="searcher">
    <h2 class="titlesStyle titlesStyle--blue titleVar">¿Qué variable necesitas medir hoy?</h2>
    <div class="rightItems">
      <input
        class="input input--variable"
        id="search"
        placeholder="Escribe tu variable"
        v-model="this.searchInput"
      />
      <RouterLink :key="this.searchInput" :to="`/papers/${this.searchInput}`">
        <button class="btn --small --pink" @click="p">Buscar</button>
      </RouterLink>
    </div>
  </section>

  <section class="banner">
    <img class="banner__img" src="/imgs/banner.png" />
    <h2 class="titlesStyle banner__text">
      Validata te apoya en los procesos de validación de tus hipótesis
    </h2>
  </section>

  <section class="manual">
    <h3 class="manual__titleOne">¿Aún no sabes cómo usar validata?</h3>
    <h1 class="manual__titleTwo">Aquí te enseñamos</h1>
    <Help></Help>
  </section>
</template>

<style lang="scss" scoped>
@import "src/assets/main.scss";

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
      padding-left: 20px;
      font-family: $MainTypo;
      font-size: 18px;
      color: $MainColorBlue;
      margin-right: 17px;

      &::placeholder {
        color: $Hint;
      }
    }
  }
}

.banner {
  width: 100%;
  display: flex;
  align-items: center;
  height: 450px;
  background-color: rgba(24, 29, 61, 0.5);

  .banner__img {
    display: flex;
    position: absolute;
    top: 232px;
    z-index: -5;
    width: 100%;
    height: 450px;
  }

  .banner__text {
    margin-left: 30px;
    color: $White;
    width: 40%;
    font-size: $BannerTextSize;
  }
}

.manual {
  margin: 30px;
  &__titleOne {
    font-family: $MainTypo;
    font-weight: 300;
    font-size: $TitleSize;
    color: $MainColorBlue
  }

  &__titleTwo {
    font-family: $MainTypo;
    font-weight: 700;
    font-size: $TitleSize;
    color: $SecondPink;
  }
}
</style>