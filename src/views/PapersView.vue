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
      showModalNotFound: false,
      currentVariable: {},
      resultsNumber: "...",
    };
  },

  methods: {

    //modal not found
    closeModalNotFound() {
      this.showModalNotFound = false;
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
      this.showModalNotFound = true;
    }else{
      this.resultsNumber = this.currentVariable.papers.length;
    }
  },
};
</script>

<template>
  <Modal :showButton="false" v-if="showModalNotFound" @close="closeModalNotFound" class="modal">
    <div class="modalInfo">
      <h2>Ups! La variable que ingresaste no se encuentra.</h2>
      <p>
        Puedes volver al Home o hacer una solicitud para que la variable que
        agregaste sea agregada.
      </p>
      <div class="modalButtons">
        <RouterLink to="/">
          <button class="btn --small --pink btnHere">Volver al home</button>
        </RouterLink>
        <button class="btn --small --pink">Solicitar</button>
      </div>
    </div>
  </Modal>

  <section class="searcher">
    <h2 class="titlesStyle titleVar">Buscar otra variable</h2>
    <div class="rightItems">
      <input
        class="input input--variable"
        id="search"
        placeholder="Escribe tu variable"
      />
      <button class="btn --small --pink">Buscar</button>
    </div>
  </section>

  <section class="results">
    <div>
      <img src="/imgs/list.png" />
      <h2 class="titlesStyle --pink">Resultados</h2>
    </div>

    <p class="titlesStyle titleResultsFind">{{this.resultsNumber}} Resultados encontrados
    </p>

    <h2 class="titlesStyle --blue titleFind">
      Encontramos {{this.resultsNumber}} formas para medir {{this.currentVariable.name}}
    </h2>

    <CardPaperSmall class="cardItem"
      :name="this.currentVariable.name"
      :papers="this.currentVariable.papers"
    >
    </CardPaperSmall>
  </section>
</template>
  
  
<style lang="scss" scoped>
@import "src/assets/main.scss";


.modal {
  .modalInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  
    h2 {
      color: $SecondPink;
      font-size: $TitleSize;
    }

    p {
      color: $MainColorBlue;
      font-size: $BodyTextSize;
      margin-top: 20px;
    }
  }

  .modalButtons {
    margin-top: 30px;

    .btnHere {
      margin-right: 20px;
    }
  }

}
.results {
  width: 100vw;
  height: 100vh;
  padding: 30px 50px;

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
    padding: 10px 370px;
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