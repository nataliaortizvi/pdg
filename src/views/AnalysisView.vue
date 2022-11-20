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

  computed: {
    ...mapStores(useAnalisisStore),
    allAnalisis() {
      return this.analisisStore.getAnalisis;
    },
  },

  mounted() {
    this.currentAnalisis = this.analisisStore.getAnalisis[0];
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
      <p class="header__description">
        En este paso, con tu muestra ya definida, debes elegir cuál es el tipo
        <br />de análisis que mejor te ayudará a validar la hipótesis de tu
        proyecto. <br />
        <strong>¡Vamos a ver cuáles hay!</strong>
      </p>
    </div>

    <div class="containerAnalisis">
      <div class="groupAnalisis">
        <h2 class="titlesStyle --blue --subtitle">Análisis de grupos</h2>
        <p>
          Análisis de grupos o agrupamiento es la tarea de agrupar objetos por
          similitud, en grupos o conjuntos de manera que los miembros del mismo
          grupo tengan características similares.
        </p>
        <div class="cardSection">
          <CardAnalisisSmall
            :tiposAnalisis="this.currentAnalisis.grupoDeAnalisis"
          >
          </CardAnalisisSmall>
        </div>
      </div>
    </div>

    <div class="containerAnalisis">
      <div class="groupAnalisis">
        <h2 class="titlesStyle --blue --subtitle">Correlación</h2>
        <p>
          La correlación es útil para describir relaciones entre datos
          variables.<br />
          <strong>Por ejemplo: </strong>las horas que se dedican a estudiar una
          asignatura y la calificación obtenida en el examen correspondiente
        </p>
        <div class="cardSection">
          <CardAnalisisSmall :tiposAnalisis="this.currentAnalisis.correlacion">
          </CardAnalisisSmall>
        </div>
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

  .containerAnalisis {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $Background2;
    border-radius: 20px;
    margin: 30px 100px 20px 100px;

    .groupAnalisis {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;
      text-align: center;

      h2 {
        margin-bottom: 10px;
      }

      p {
        width: 800px;
      }

      .cardSection {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 50px;
        padding: 0px 50px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .allAnalisis {
    width: 100%;
    padding: 30px 20px;

    &__header {
      .header__description {
        width: 80%;
      }
    }

    .containerAnalisis {
      margin: 30px 0px 10px 0px;

      .groupAnalisis {
        padding: 30px 0px;

        p {
          width: 75vw;
        }

        .cardSection {
          flex-direction: column;
          gap: 10px;
        }
      }
    }
  }
}
</style>