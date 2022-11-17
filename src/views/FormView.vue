<script>
import { mapStores } from "pinia";
import { useVariablesStore } from "../stores/variables";
import Modal from "../components/Modal.vue";

export default {
  components: {
    Modal,
  },

  data() {
    return {
      image: [],
      title: "",
      author: "",
      year: "",
      resumen: "",
      definition: "",
      requirement: "",
      formula: "",
      formulameaning: "",
      context: "",
      variable: "",

      exampleContext: "",
      eachFormulaVariable: "",
      descriptionExperiment: "",
      developExperiment: "",
      conclusionExperiment: "",

      newPaper: [],

      showVariableAdded: false,
      mustFill: false,
      imgUpdated: false,

      ask: false,
    };
  },

  computed: {
    ...mapStores(useVariablesStore),
  },

  methods: {
    onFileChange(e) {
      var files = e.target.files;
      this.image = files[0];
      this.variablesStore.uploadImage(this.image);
      this.imgUpdated= true;
      
    },

    addNewPaper() {
      if (
        this.title == "" ||
        this.author == "" ||
        this.year == "" ||
        this.resumen == "" ||
        this.definition == "" ||
        this.requirement == "" ||
        this.formula == "" ||
        this.formulameaning == "" ||
        this.context == "" ||
        this.variable == "" ||
        this.image == "" ||
        this.exampleContext == "" ||
        this.eachFormulaVariable == "" ||
        this.descriptionExperiment == "" ||
        this.developExperiment == "" ||
        this.conclusionExperiment == ""
      ) {
        //alert("Debes llenar todos los campos")
        this.mustFill = true;
      } else {
        this.mustFill = false;
        this.newPaper = {
          image: this.image.name,
          title: this.title,
          author: this.author,
          year: this.year,
          resumen: this.resumen,
          definition: this.definition,
          requirement: this.requirement,
          formula: this.formula,
          formulameaning: this.formulameaning,
          context: this.context,
          variable: this.variable,
          exampleContext: this.exampleContext,
          eachFormulaVariable: this.eachFormulaVariable,
          descriptionExperiment: this.descriptionExperiment,
          developExperiment: this.developExperiment,
          conclusionExperiment: this.conclusionExperiment,
        };

        this.variablesStore.newPaper(this.newPaper);
        this.showVariableAdded = true;
      }
    },

    closeModalAdded() {
      (this.showVariableAdded = false),
        (this.title = ""),
        (this.author = ""),
        (this.year = ""),
        (this.resumen = ""),
        (this.definition = ""),
        (this.requirement = ""),
        (this.formula = ""),
        (this.formulameaning = ""),
        (this.context = ""),
        (this.variable = ""),
        (this.example = ""),
        (this.exampleContext = ""),
        (this.eachFormulaVariable = ""),
        (this.descriptionExperiment = ""),
        (this.developExperiment = ""),
        (this.conclusionExperiment = "");
        this.imgUpdated = false;
    },

    nextStep() {
      this.ask = true;
    },
  },
};
</script>
<template>
  <Modal
    :showButton="true"
    v-if="showVariableAdded"
    @close="closeModalAdded"
    class="modal"
  >
    <div class="modalInfo">
      <h2 class="modalAdded">La variable se agregó correctamente</h2>
    </div>
  </Modal>

  <section class="containerQuestion" v-if="!this.ask">
    <div class="containerBack">
      <h1>Elige que quieres hacer:</h1>

      <div>
        <div>
          <input type="radio" id="suggest" value="sugerir" />
          <label for="suggest">
            Sugerirnos una nueva variable que deberiamos agregar.</label
          >
        </div>
        <div>
          <input type="radio" id="addNew" value="sugerir" />
          <label for="addNew">
            Agregar una nueva variable con toda la información de su método de
            medición.</label
          >
        </div>
      </div>
      <button class="btn" @click="nextStep">Siguiente</button>
    </div>
  </section>

  <!--section>
    <input></input>
  </section-->

  <section class="containerForm" v-if="this.ask">
    <h1 class="titlesStyle --pink">Agrega la nueva variable</h1>
    <p>
    Para agregar una variable y su forma de medición es necesario haber investigado sobre esta, para esto puedes basarte en un documento de investigación y según este llenar los campos a continuación.
    </p>
    <div class="paperForm">
      <div class="itemForm">
        <label class="text"> ¿Cuál variable vas a agregar? </label>
        <input
          class="input"
          placeholder="Variable"
          v-model="variable"
          type="text"
          required
        />
      </div>
      <div class="itemForm">
        <label class="text"> ¿Cuál es el título del documento donde explican la variable</label>
        <input
          class="input"
          placeholder="Escribe el título del documento donde explican la variable"
          v-model="title"
          type="text"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text"> ¿Quién(es) es(son) el(los) autor(es) del documento?</label>
        <input
          class="input"
          placeholder="Escribe el (los) autor(es) del documento"
          v-model="author"
          type="text"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">¿En que año se publicó el documento?</label>
        <input
          class="input"
          placeholder="Año de publicación del documento"
          v-model="year"
          type="text"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">Escribe un resumen del documento</label>
        <input
          class="input"
          placeholder="Resumen"
          v-model="resumen"
          type="text"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">Escribe una definición de la variable</label>
        <input
          class="input"
          placeholder="Definición"
          type="text"
          v-model="definition"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text"
          >Escribe los requerimientos para esta variable:</label
        >
        <input
          class="input"
          placeholder="Requerimiento"
          type="text"
          v-model="requirement"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">Escribe la formula para calcular la variable</label>
        <input
          class="input"
          placeholder="Formula"
          type="text"
          v-model="formula"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          Explica la formula. ¿Qué significa cada parte de ella?</label
        >
        <input
          class="input"
          placeholder="¿Qué significa la formula?"
          type="text"
          v-model="formulameaning"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          ¿Cuáles son los actores y el contexto en el que se aplica la
          formula?</label
        >
        <input
          class="input"
          placeholder="Actores y contexto"
          type="text"
          v-model="context"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          Describe el ejemplo. ¿Cuál es el caso del ejemplo?</label
        >
        <input
          class="input"
          placeholder="Caso del ejemplo"
          type="text"
          v-model="exampleContext"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          Explica según el ejemplo que significa cada parte de la formula</label
        >
        <input
          class="input"
          placeholder="Caso del ejemplo"
          type="text"
          v-model="eachFormulaVariable"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          ¿Cómo es el experimento que se realizaría para obtener los datos y
          utilizar la formula?
        </label>
        <input
          class="input"
          placeholder="Caso del ejemplo"
          type="text"
          v-model="descriptionExperiment"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          ¿Cuales preguntas realizaste o que realizaste para obtener los
          datos?</label
        >
        <input
          class="input"
          placeholder="Caso del ejemplo"
          type="text"
          v-model="developExperiment"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          Cuando obtienes todos los datos necesarios, ¿qué se haría luego?
          Concluye</label
        >
        <input
          class="input"
          placeholder="Caso del ejemplo"
          type="text"
          v-model="conclusionExperiment"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text imglabel">
          Agrega una imagen de referencia:
          <input
            class=""
            id="myFile"
            type="file"
            accept=".jpg, .jpeg, .png"
            @change="onFileChange"
            required
          />
          <img class="imgInput" src="../../public/icons/image.svg" />
          <div class="alertContainer">
            <p v-if="imgUpdated" class="alert">*La imagen se agregó correctamente</p>
          </div>
        </label>
      </div>
      <div class="alertContainer">
        <p v-if="mustFill" class="alert">*Debes llenar todos los campos</p>
      </div>
    </div>
    <bottom class="btn" @click="addNewPaper">Agregar</bottom>
  </section>
</template>

<style lang="scss">
@import "src/assets/main.scss";

.modalAdded {
  padding: 30px;
}

.containerQuestion {
  padding-top: 100px;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .containerBack {
    background-color: $Background2;
    border-radius: 20px;
    width: 50%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    gap: 20px;
  }
}

.containerForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 30px;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .paperForm {
    display: flex;
    flex-direction: column;
    margin: 30px 0px;
    background-color: $Background2;
    border-radius: 20px;

    padding: 20px;

    .alertContainer {
      text-align: center;
      .alert {
        color: $SecondPink;
      }
    }

    .itemForm {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;

      .input--paper {
        padding-left: 20px;
        font-family: $MainTypo;
        font-size: 18px;
        color: $MainColorBlue;
        margin-right: 17px;
      }
    }
    input[type="file"] {
      display: none;
    }

    .imglabel {
      border: 1px solid $MainColorBlue;
      border-radius: 20px;
      margin-right: 20px;
      display: flex;
      padding: 20px;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      .imgInput {
        width: 40px;
      }
    }
  }
}
</style>