<script>
import Help from "../components/Help.vue";
import Modal from "../components/Modal.vue";
import CardPaperSmall from "../components/CardPaperSmall.vue";

import { mapStores } from "pinia";
import { useVariablesStore } from "../stores/variables";

export default {
  components: {
    Help,
    Modal,
    CardPaperSmall,
  },

  data() {
    return {
      showModal: false,
      currentVariable: {},
    };
  },

  methods: {
    openModal() {
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },

    p() {
      console.log(this.currentVariable.name);
      console.log("route: " + this.$route.params.varId);
    },
  },

  computed: {
    ...mapStores(useVariablesStore),
    allVariables() {
      return this.variablesStore.getVariables;
    },

   
  },

  mounted() {
    this.currentVariable = this.variablesStore.getVariableById(
      this.$route.params.varId
    );

    if (this.currentVariable.name === undefined) {
      console.log("returnnnnn");
      this.showModal = true;
    }

  },
};
</script>

<template>
  <Modal
    :showButton="false"
    title="Are you sure you want to add this book to Bookie?"
    v-if="showModal"
    @close="closeModal"
    class="modal"
  >
    <h2>Ups! La variable que ingresaste no se encuentra.</h2>
    <p>Puedes volver al Home o hacer una solicitud para que la variable que agregaste sea agregada.</p>
    <RouterLink to="/">
      <button class="btn --small --pink">Volver al home</button>
    </RouterLink>
    <button class="btn --small --pink">Solicitar</button>
  </Modal>

  <section class="searcher">
    <h2 class="titlesStyle titleVar">Buscar otra variable</h2>
    <div class="rightItems">
      <input
        class="input input--variable"
        id="search"
        placeholder="Escribe tu variable"
      />
      <button class="btn --small --pink" @click="p">Buscar</button>
    </div>
  </section>

  <section class="results">
    <div>
      <img src="/imgs/list.png" />
      <h2 class="titlesStyle --pink">Resultados</h2>
    </div>

    <p class="titlesStyle titleResultsFind">
      <span class="resultsNumber">0</span> Resultados encontrados
    </p>

    <h2 class="titlesStyle --blue titleFind">
      Encontramos 3 formas para medir la Confianza
    </h2>

    <CardPaperSmall
      :name="this.currentVariable.name"
      :papers="this.currentVariable.papers"
    >
    </CardPaperSmall>
  </section>
</template>
  
  
<style lang="scss" scoped>
@import "src/assets/main.scss";

.results {
  width: 100vw;
  height: 100vh;
  padding: 30px 30px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .titleResultsFind {
    font-size: $BodyTextSize;
    font-weight: 300;
  }

  .titleFind {
    display: block;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 10px 470px;
  }
}
.searcher {
  padding: 100px 30px 50px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: $MainColorBlue;

  .titleVar {
    width: 400px;
    color: $White;
  }

  .rightItems {
    display: flex;
    flex-direction: row;

    .input--variable {
      padding-left: 20px;
      font-family: $MainTypo;
      font-size: 18px;
      color: $White;
      border: 1px solid $White;
      margin-right: 17px;

      &::placeholder {
        color: $White;
      }
    }
  }
}
</style>