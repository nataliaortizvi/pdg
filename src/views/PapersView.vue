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
      searchInput: "",
      stopOverFlow: false,
    };
  },

  methods: {
    //modal not found
    closeModalNotFound() {
      this.showModalNotFound = false;
    },
    search() {
      this.$router.push(`/papers/${this.searchInput}`);
    },
  },

  computed: {
    ...mapStores(useVariablesStore),

    getPapers() {
      this.currentVariable = this.variablesStore.getVariableById(
        this.$route.params.paperId
      );
      return this.currentVariable.length;
    },
  },

  watch: {
    getPapers(newChanges) {
      if (newChanges != 0) {
        this.resultsNumber = this.currentVariable.length;
        this.showModalNotFound = false;
      }
    },
  },

  mounted() {
    if (this.getPapers == 0) {
      this.showModalNotFound = true;
    } else {
      this.resultsNumber = this.currentVariable.length;
    }
  },

  updated() {
    if (this.getPapers === 0) {
      this.showModalNotFound = true;
    } else {
      this.resultsNumber = this.currentVariable.length;
    }
  },
};
</script>

<template>
  <Modal
    :showButton="false"
    v-if="showModalNotFound"
    @close="closeModalNotFound"
    class="modal"
  >
    <div class="modalInfo">
      <h2>Ups! La variable que ingresaste no se encuentra.</h2>
      <p>
        Puedes volver al Home o hacer una solicitud para que la variable que
        agregaste sea agregada.
      </p>
      <div class="modalButtons">
        <RouterLink to="/">
          <button class="btn --pink btnHere">Volver al home</button>
        </RouterLink>
        <RouterLink to="/form">
          <button class="btn --pink">Agregar variable</button>
        </RouterLink>
      </div>
    </div>
  </Modal>

  <div>
    <section class="searcher">
      <h2 class="titlesStyle titleVar">Buscar otra variable</h2>
      <div class="rightItems">
        <input
          class="input input--variable"
          id="search"
          placeholder="Escribe tu variable"
          v-model="this.searchInput"
          v-on:keyup.enter="search"
        />
        <RouterLink :key="this.searchInput" :to="`/papers/${this.searchInput}`">
          <button
            class="btn --small --pink"
            @click="
              () => {
                this.searchInput = '';
              }
            "
          >
            Buscar
          </button>
        </RouterLink>
      </div>
    </section>

    <section class="results">
      <div>
        <img src="/imgs/list.png" />
        <h2 class="titlesStyle --pink">Resultados</h2>
      </div>

      <p class="titlesStyle titleResultsFind">
        {{ this.resultsNumber }} Resultados encontrados
      </p>

      <h2 class="titlesStyle --blue titleFind">
        Encontramos {{ this.resultsNumber }} formas para medir
        {{ this.$route.params.paperId }}
      </h2>

      <CardPaperSmall
        :papers="this.currentVariable"
      >
      </CardPaperSmall>
    </section>
  </div>
</template>
  
  
<style lang="scss" scoped>
@import "src/assets/main.scss";
.modal {
  .modalInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px;

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
  padding: 30px;

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

@media screen and (max-width: 600px) {

  .modalButtons {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

}
</style>