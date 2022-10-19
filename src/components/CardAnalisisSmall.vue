<script>
import Modal from "../components/Modal.vue";
import CardAnalisisBig from "../components/CardAnalisisBig.vue";

export default {
  data() {
    return {
      showModalAnalisis: false,
      currentAnalisis: {},
    };
  },

  components: {
    Modal,
    CardAnalisisBig,
  },

  props: {
    tiposAnalisis: {
      type: Array,
      default: () => ["img", "title", "descrip", "what", "how"],
    },
  },

  methods: {
     //modal analisis full
     openModalResume(analisisSelect) {
      this.showModalAnalisis = true;

      this.currentAnalisis = this.tiposAnalisis.filter(
        (type) => type.title === analisisSelect
      );
    },

    closeModalResume() {
      this.showModalResume = false;
    },
  },
};
</script>

<template>
  <div
    class="cardContainerAnalisis"
    v-for="cadaTipoAnalisis in this.tiposAnalisis"
    :key="cadaTipoAnalisis.title"
    @click="prueba"
  >
    <div class="cardContainerAnalisis__line"></div>
    <img :src="cadaTipoAnalisis.img" />
    <div class="cardContainerAnalisis__title">
      <h2>{{ cadaTipoAnalisis.title }}</h2>
      <p>{{ cadaTipoAnalisis.descrip }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/main.scss";

.cardContainerAnalisis {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 250px;
  background-color: $White;
  border-radius: 0px 0px 20px 20px;
  box-shadow: $Shadow;
  padding: 20px;
  position: relative;
  margin-top: 20px;

  &__line {
    width: 100%;
    height: 5px;
    background-color: $Orange;
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    position: absolute;
    width: 100px;
    top: 25px;
    left: 100px;
  }

  &__title {
    text-align: center;
    h2 {
      font-size: $SubtitleSize;
      color: $ThirdViolet;
      margin-bottom: 10px;
    }
  }
}
</style>