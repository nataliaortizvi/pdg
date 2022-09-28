<script>
import { RouterLink, RouterView } from "vue-router";
import Modal from "./components/Modal.vue";
import Help from './components/Help.vue';

export default {
  components: {
    RouterLink,
    RouterView,
    Modal,
    Help,
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
};
</script>


<template>
  <!--------------------------GLOBAL HEADER---------------------->
  <header id="navbar" :class="{ onScroll: !view.topOfPage }">
    <h1>LOGO</h1>
    <nav>
      <RouterLink to="/" id="linkss" class="link">Home</RouterLink>
      <RouterLink to="/analisis" id="linkss" class="link"
        >Tipos de análisis</RouterLink
      >
      <RouterLink to="/calculadora" id="linkss" class="link"
        >Calculadora</RouterLink
      >
    </nav>
  </header>

  <button class="btn helpBtn" @click="openModal">?</button>
  <Modal
    :showButton="true"
    v-if="showModal"
    @close="closeModal"
    class="modal"
  >
    <Help></Help>
  </Modal>

  <!------------------------BODY------------------------->
  <RouterView />
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

.link {
  margin-left: 80px;
  color: $MainColorBlue;
}
</style>
