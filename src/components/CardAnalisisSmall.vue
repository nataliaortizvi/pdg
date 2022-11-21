<script>
import Modal from "../components/Modal.vue";
import CardAnalisisBig from "../components/CardAnalisisBig.vue";

export default {
  components: {
    Modal,
    CardAnalisisBig,
  },

  data() {
    return {
      showModalAnalisis: false,
      currentAnalisis: {},
    };
  },

  props: {
    tiposAnalisis: {},
  },

  methods: {
    //modal analisis full
    openModalAnalisis(analisisSelect) {
      this.showModalAnalisis = true;

      this.currentAnalisis = this.tiposAnalisis.filter(
        (type) => type.title === analisisSelect
      );
    },

    closeModalAnalisis() {
      this.showModalAnalisis = false;
    },
  },
};
</script>

<template>
  <Modal
    class="modalAnalisis"
    :showButton="true"
    :showFlecha="true"
    v-if="this.showModalAnalisis"
    @close="closeModalAnalisis"
  >
    <CardAnalisisBig :currentAnalisis="this.currentAnalisis[0]">
    </CardAnalisisBig>
  </Modal>

  <div
    class="cardContainerAnalisis"
    v-for="cadaTipoAnalisis in this.tiposAnalisis"
    :key="cadaTipoAnalisis.title"
    @click="
      () => {
        openModalAnalisis(cadaTipoAnalisis.title);
      }
    "
  >
    <div class="cardContainerAnalisis__line"></div>
    <img class="imgCard" :src="cadaTipoAnalisis.img" />
    <div class="cardContainerAnalisis__title">
      <h2>{{ cadaTipoAnalisis.title }}</h2>
      <p>{{ cadaTipoAnalisis.descrip }}</p>
      <p class="readMore">Leer más</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/main.scss";

.modalAnalisis {
  top: 0px;
  width: 80%;
  overflow: auto;
}
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
  padding: 30px;
  position: relative;
  margin-top: 20px;
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  .imgCard {
    height: 40px;
    object-fit: fill;
    width: auto;
    margin-bottom: 15px;
  }

  &__line {
    width: 100%;
    height: 5px;
    background-color: $Babyblue;
    position: absolute;
    top: 0;
    left: 0;
  }

  &__title {
    text-align: center;
    h2 {
      font-size: $SubtitleSize;
      color: $ThirdViolet;
      margin-bottom: 10px;
    }
  }

  .readMore{
    text-decoration: underline;
    color: $Hint;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 14px;
  }
}

@media screen and (max-width: 600px) {
  .modalAnalisis {
  left: 0;
  top: 0;
}
}
</style>