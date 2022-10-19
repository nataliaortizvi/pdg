<script>
import CardAnalisisSmall from "../components/CardAnalisisSmall.vue";

import { mapStores } from "pinia";
import { useAnalisisStore } from "../stores/tiposAnalisis";

export default {
  components: {
    CardAnalisisSmall,
  },

  data() {
    return {
      currentAnalisis: {},
    };
  },

  methods: {
    prueba2() {
      console.log(this.currentAnalisis);
    },
  },

  computed: {
    ...mapStores(useAnalisisStore),
    allAnalisis() {
      return this.analisisStore.getAnalisis;
    },
  },

  mounted() {
    this.currentAnalisis = this.analisisStore.getAnalisis;
  },
};
</script>

<template>
  <section class="allAnalisis">
    <div class="allAnalisis__header">
      <div class="header__title">
        <img src="../../public/icons/analisis.svg" />
        <h2 class="titlesStyle --pink">Tipos de análisis</h2>
      </div>
      <p class="header__description" @click="prueba2">
        En este paso, debes definir tu muestra, cuál es el análisis para validar
        hipótesis que mejor te funciona.
        <strong>¡Vamos a ver cuáles hay!</strong>
      </p>
    </div>

    <div class="groupAnalisis">
      <h2 class="titlesStyle --pink">Análisis de grupos</h2>
      <div class="cardSection">
        <CardAnalisisSmall
        :tiposAnalisis="this.currentAnalisis[0]"
        > </CardAnalisisSmall>
      </div>
    </div>

    <div class="correlacionAnalisis">
      <h2 class="titlesStyle --pink">Correlación</h2>
      <p>La correlación es útil para describir relaciones entre datos variables.<br> <strong>Por ejemplo: </strong>las horas que se dedican a estudiar una asignatura y la calificación obtenida en el examen correspondiente</p>
      <div class="cardSection">
        <CardAnalisisSmall
        :tiposAnalisis="this.currentAnalisis[0]"
        > </CardAnalisisSmall>
      </div>
    </div>

  </section>
</template>


<style lang="scss" scoped>
@import "src/assets/main.scss";

.allAnalisis {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  color: $MainColorBlue;

  &__header {
    .header__title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      margin: 50px 0px 10px 0px;

      img {
        width: 30px;
        height: 30px;
      }
    }
    .header__description {
      width: 600px;
    }
  }

  .groupAnalisis {
    margin: 50px 0px;

    .cardSection {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 0px 50px;
    }
  }
}
</style>