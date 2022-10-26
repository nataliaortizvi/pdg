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
    tiposAnalisis: {
      type: Array,
      default: () => ["img", "title", "descrip", "what", "how", "example", "link"],
    },
  },

  methods: {
    //modal analisis full
    openModalAnalisis(analisisSelect) {
      this.showModalAnalisis = true;

      this.currentAnalisis = this.tiposAnalisis.filter(
        (type) => type.title === analisisSelect
      );

      console.log(analisisSelect)
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
    v-if="this.showModalAnalisis"
    @close="closeModalAnalisis"
  >
    <CardAnalisisBig
      :img="this.currentAnalisis[0].img"
      :title="this.currentAnalisis[0].title"
      :descrip="this.currentAnalisis[0].descrip"
      :what="this.currentAnalisis[0].what"
      :how="this.currentAnalisis[0].how"
      :example="this.currentAnalisis[0].example"
      :link="this.currentAnalisis[0].link"

    >
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
    <img :src="cadaTipoAnalisis.img" />
    <div class="cardContainerAnalisis__title">
      <h2>{{ cadaTipoAnalisis.title }}</h2>
      <p>{{ cadaTipoAnalisis.descrip }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/main.scss";


.modalAnalisis {
  top:0px;
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
  padding: 20px;
  position: relative;
  margin-top: 20px;
  transition: 0.2s linear;


  &:hover {
    transform: scale(1.03);
  }

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