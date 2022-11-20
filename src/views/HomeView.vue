<script>
import Help from "../components/Help.vue";
import { mapStores } from "pinia";
import { useVariablesStore } from "../stores/variables";

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
    isVariable() {
      if (this.searchInput != "") {
        this.$router.push(`/papers/${this.searchInput}`);
      } else {
        alert("Escribe una variable");
      }
    },
    search() {
      console.log(this.searchInput);
      this.$router.push(`/papers/${this.searchInput}`);
    },
  },

  computed: {
    ...mapStores(useVariablesStore),

    searchbtn() {
      this.searchInput != null;
    },
  },

  mounted() {},
};
</script>

<template>
  <section class="searcher">
    <h2 class="titlesStyle titlesStyle--blue titleVar">
      ¿Qué variable necesitas medir hoy?
    </h2>
    <div class="rightItems">
      <input
        class="input input--variable"
        id="search"
        placeholder="Escribe tu variable"
        v-model="this.searchInput"
        v-on:keyup.enter="search"
      />
      <RouterLink :key="this.searchInput" to="">
        <button class="btn --small --pink" @click="isVariable">Buscar</button>
      </RouterLink>
    </div>
  </section>

  <section class="banner">
    <h2 class="titlesStyle banner__text">
      Validata te apoya en los procesos de validación de tus hipótesis
    </h2>
  </section>

  <section class="manual">
    <h3 class="manual__titleOne">¿Aún no sabes cómo usar validata?</h3>
    <h1 class="manual__titleTwo">Aquí te enseñamos</h1>
    <Help :modalOff="true"></Help>
  </section>
</template>

<style lang="scss" scoped>
@import "src/assets/main.scss";

.searcher {
  padding: 100px 30px 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .titleVar {
    width: auto;
    margin-bottom: 20px;
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
  background-image: url(../../public/imgs/banner.png);
  background-size: cover;
  background-position: center center;
  width: 100%;
  display: flex;
  align-items: center;
  height: 450px;
  background-color: rgba(24, 29, 61, 0.5);
  position: relative;

  .banner__text {
    margin-left: 30px;
    color: $White;
    width: 40%;
    font-size: $BannerTextSize;
    z-index: 1;
  }
}

.banner:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(24, 29, 61, 0.4);
}

.manual {
  margin: 30px;
  &__titleOne {
    font-family: $MainTypo;
    font-weight: 300;
    font-size: $TitleSize;
    color: $MainColorBlue;
  }

  &__titleTwo {
    font-family: $MainTypo;
    font-weight: 700;
    font-size: $TitleSize;
    color: $SecondPink;
  }
}

@media screen and (max-width: 600px) {
  .searcher {
    padding-bottom: 40px;

    .titleVar {
      text-align: center;
    }

    .rightItems {
      width: 100%;
      flex-direction: column;
      align-items: center;

      .btn {
        display: none;
      }

      .input--variable {
        margin-bottom: 0px;
        width: 100%;
      }
    }
  }

  .banner {
    background-position: 55% 75%;
    height: 300px;
    justify-content: center;

    .banner__text {
      margin: 0px;
      width: 80%;
      font-size: $TitleSize;
    }
  }

  .manual {
    &__titleOne {
      font-size: $SubtitleSize;
    }

    &__titleTwo {
      font-size: $SubtitleSize;
      margin-bottom: 20px;
    }
  }
}
</style>