<script>
import { RouterLink, RouterView } from "vue-router";
import Modal from "./components/Modal.vue";
import Help from "./components/Help.vue";

import { mapStores } from "pinia";
import { useVariablesStore } from "./stores/variables";

export default {
  components: {
    RouterLink,
    RouterView,
    Modal,
    Help,
  },

  computed: {
    ...mapStores(useVariablesStore),
  },

  el: "#navbar",
  data() {
    return {
      showModal: false,
      view: {
        topOfPage: true,
      },
    };
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.pageYOffset > -0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },

    openModal() {
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },
  },

  mounted() {
    this.variablesStore.readVariable();
  },
};
</script>


<template>
  <!-----------------------GLOBAL HEADER--------------------->
  <header id="navbar" :class="{ onScroll: !view.topOfPage }">
    <RouterLink to="/">
    <h1 class="logo">ValiData</h1>
  </RouterLink>
    <nav>
      <RouterLink to="/" id="linkss" class="link" class-active="active"
        >Inicio</RouterLink
      >
      <RouterLink to="/analisis" id="linkss" class="link" class-active="active"
        >Tipos de análisis</RouterLink
      >
      <RouterLink to="/interpretation" id="linkss" class="link" class-active="active"
        >Resultados</RouterLink
      >
    </nav>
  </header>

  <button class="btn helpBtn" @click="openModal">?</button>
  <Modal :showButton="true" v-if="showModal" @close="closeModal">
    <Help :modalOff="false" class="helper"></Help>
  </Modal>

  <!------------------------BODY------------------------->
  <!-----------------------FOOTER------------------------>
  <RouterView />
  <footer>
    <div class="footer">
      <h1 class="logo logoFooter">ValiData</h1>
      <div class="footer__links">
        <RouterLink to="/" id="linkss" class="linkWhite">Home</RouterLink>
        <RouterLink to="/analisis" id="linkss" class="linkWhite"
          >Tipos de análisis</RouterLink
        >
        <RouterLink to="/calculadora" id="linkss" class="linkWhite"
          >Calculadora</RouterLink
        >
      </div>
      <div class="footer__CR">
        <p class="copyright">
          Validata Digital Library designed. Copyright © 2022 Validata
        </p>
      </div>
    </div>
  </footer>
</template>


<style lang="scss">
@import "src/assets/main.scss";

//----STYLE RESET-----
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.logo {
  color: $SecondPink;
}

nav {
  .link {
    margin-left: 80px;
    color: $MainColorBlue;
    position: relative;
    padding: 5px;
    transition: 0.5 ease-in-out;
  }
  .link:hover {
    color: $SecondPink;
  }

  .vue-school-active-link {
    color: $SecondPink;
  }
}

.helper {
  height: 80vh;
  width: 800px;
}

.footer {
  background-color: $MainColorBlue;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logoFooter {
    margin-top: 30px;
  }
  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0px;

    .linkWhite {
      color: $White;
      margin-bottom: 10px;
    }
  }

  &__CR {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100vw;
    margin-bottom: 30px;

    .copyright {
      color: $White;
      margin-left: 25px;
      font-size: 13px;
    }
  }
}
</style>
