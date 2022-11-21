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
      menuResponsive: false,
    };
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    menuActive() {
      this.menuResponsive = !this.menuResponsive;
    },

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
      <img class="logo" src="../public/icons/logoHorizontalAzul.svg" />
      <img class="logoW" src="../public/icons/logoHorizontalBlanco.svg" />
    </RouterLink>

    <nav class="navFull">
      <RouterLink to="/" id="linkss" class="link" class-active="active"
        >Inicio</RouterLink
      >
      <RouterLink to="/analisis" id="linkss" class="link" class-active="active"
        >Tipos de análisis</RouterLink
      >
      <RouterLink
        to="/interpretation"
        id="linkss"
        class="link"
        class-active="active"
        >Resultados</RouterLink
      >
      <RouterLink to="/nosotros" id="linkss" class="link" class-active="active"
        >Nosotros</RouterLink
      >
    </nav>

    <div
      v-if="menuResponsive"
      class="backdropResponsive"
      @click="menuActive"
    ></div>
    <div
      class="hamburger"
      @click="menuActive"
      :class="{ is_active: !menuResponsive }"
    >
      <div class="_layer -top"></div>
      <div class="_layer -mid"></div>
      <div class="_layer -bottom"></div>
    </div>

    <nav
      class="navResponsive"
      :class="{ is_active: !menuResponsive }"
      @click="menuActive"
    >
      <ul>
        <li>
          <RouterLink to="/" id="linkss" class="link" class-active="active"
            >Inicio</RouterLink
          >
        </li>

        <li>
          <RouterLink
            to="/analisis"
            id="linkss"
            class="link"
            class-active="active"
            >Tipos de análisis</RouterLink
          >
        </li>

        <li>
          <RouterLink
            to="/interpretation"
            id="linkss"
            class="link"
            class-active="active"
            >Resultados</RouterLink
          >
        </li>

        <li>
          <RouterLink
            to="/nosotros"
            id="linkss"
            class="link"
            class-active="active"
            >Nosotros</RouterLink
          >
        </li>
      </ul>
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
      <img class="footer__logo" src="../public/icons/logoVerticalBlanco.svg" />
      <div class="footer__links">
        <RouterLink to="/" id="linkss" class="linkWhite">Inicio</RouterLink>
        <RouterLink to="/analisis" id="linkss" class="linkWhite"
          >Tipos de análisis</RouterLink
        >
        <RouterLink to="/interpretation" id="linkss" class="linkWhite"
          >Resultados</RouterLink
        >
        <RouterLink to="/nosotros" id="linkss" class="linkWhite"
          >Nosotros</RouterLink
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
  width: 150px;
  padding-top: 5px;
  display: block;
}

.logoW {
  display: none;
}
.navFull {
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
.backdropResponsive {
  display: none;
}
.hamburger {
  display: none;
}
.navResponsive {
  display: none;
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

  &__logo {
    width: 150px;
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

@media screen and (max-width: 600px) {
  .navFull {
    display: none;
  }

  .backdropResponsive {
    display: flex;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 119;
  }

  .hamburger {
    display: block;
    position: absolute;
    right: 30px;
    top: 0px;
    height: 30px;
    width: 30px;
    padding: 23px;
    z-index: 120;
  }

  ._layer {
    background: $MainColorBlue;
    margin-bottom: 4px;
    border-radius: 2px;
    width: 28px;
    height: 3.5px;
    transition: all 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
  }

  .navResponsive {
    display: block;
    backdrop-filter: blur(3px);
    background-color: $MainColorBlue;
    bottom: 0;
    height: 230px;
    width: 100vw;
    left: 0;
    top: 0;
    position: fixed;
    transform: translate(0px, 0px);
    transition: transform 0.35s cubic-bezier(0.05, 1.04, 0.72, 0.98) 0s;
    z-index: 1001;

    &.is_active {
      transform: translate(0px, -100%);
    }
  }

  .navResponsive ul li {
    list-style: none;
    text-align: center;
    margin-top: 25px;
    color: $White;

    .link {
      color: $White;
    }
  }

  .helper {
    height: 80%;
    width: 100%;
  }
}
</style>
