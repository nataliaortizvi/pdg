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
      <h2 class="modalAdded">La variable se agreg?? correctamente</h2>
    </div>
  </Modal>


  <section class="containerForm">
    <h1 class="titlesStyle --pink">Agrega la nueva variable</h1>
    <p class="containerForm__explain">
    Para agregar una variable y su forma de medici??n es necesario que hayas investigado sobre esta. Para esto puedes basarte en un documento o art??culo de investigaci??n y seg??n este llenar los campos a continuaci??n.
    </p>
    <div class="paperForm">
      <div class="itemForm">
        <label class="text">??Cu??l variable vas a agregar? </label>
        <input
          class="input"
          placeholder="Ej: Velocidad"
          v-model="variable"
          type="text"
          required
        />
      </div>
      <div class="itemForm">
        <label class="text"> ??Cu??l es el t??tulo del documento donde explican la variable</label>
        <input
          class="input"
          placeholder="Ej: C??mo calcular la velocidad"
          v-model="title"
          type="text"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text"> ??Qui??n es el o los autores del documento?</label>
        <input
          class="input"
          placeholder="Ej: PhD Nicolas V"
          v-model="author"
          type="text"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">??En que a??o se public?? el documento?</label>
        <input
          class="input"
          placeholder="Ej: 2018"
          v-model="year"
          type="text"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">Escribe un resumen del documento</label>
        <input
          class="input"
          placeholder="Ej: Este art??culo explica que la velocidad es la rapidez..."
          v-model="resumen"
          type="text"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">??C??mo defines la variable? Explica</label>
        <input
          class="input"
          placeholder="Ej: La velocidad es la rapidez en la que viaja un objeto en una direcci??n en espec??fico..."
          type="text"
          v-model="definition"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">??C??mo se genera la variable?</label>
        <input
          class="input"
          placeholder="Debe ocurrir un cambio de posici??n de un objeto en determinado tiempo"
          type="text"
          v-model="requirement"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">??Cual es la formula para calcular esta variable?</label>
        <input
          class="input"
          placeholder="Ej: Velocidad=cambio de posici??n / timepo"
          type="text"
          v-model="formula"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          Explica la formula. ??Qu?? significa cada parte de ella?</label
        >
        <input
          class="input"
          placeholder="Ej: cambio de posici??n: posici??n final menos posici??n inicial"
          type="text"
          v-model="formulameaning"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          ??Cu??les son los actores y el contexto en el que se aplica la
          formula?</label
        >
        <input
          class="input"
          placeholder="Ej: El principal actor es el objeto y su contexto es donde..."
          type="text"
          v-model="context"
          required
        />
      </div>

      <strong><p class="divExample">Ahora agrega un ejemplo para explicar c??mo utilizar la formula y calcular la variable</p></strong>

      <div class="itemForm">
        <label class="text">
          Escribe el enunciado del ejemplo</label>
        <input
          class="input"
          placeholder="Ej: Se necesita saber si las manzanas m??s altas caen m??s r??pido"
          type="text"
          v-model="exampleContext"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          Explica cada parte de la fomula seg??n tu ejemplo</label
        >
        <input
          class="input"
          placeholder="Ej: cambio de poscici??n: posici??n final 0mt - posicion inicial 5mt"
          type="text"
          v-model="eachFormulaVariable"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          Explica el experimento que se realiza para calcular los datos
        </label>
        <input
          class="input"
          placeholder="Ej: Ubica 10 manzanas a 5mt del suelo y otras 10 a 15 mt y las lanza..."
          type="text"
          v-model="descriptionExperiment"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          ??Cuales preguntas realizaste para obtener los
          datos?</label
        >
        <input
          class="input"
          placeholder="Ej: ??Cu??nto tiempo tardo cada manzana en caer al suelo?"
          type="text"
          v-model="developExperiment"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">
          Cuando obtienes todos los datos necesarios, ??qu?? se har??a luego?
         </label
        >
        <input
          class="input"
          placeholder="Se realiz?? un Paired T-test con los datos obtenidos para validar si..."
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
            <p v-if="imgUpdated" class="alert">*La imagen se agreg?? correctamente</p>
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
  text-align: center;
  color: $MainColorBlue;
}

.containerForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 30px;

  &__explain {
    margin-top: 20px;
    width: 80%;
    text-align: center;
  }

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
    width: min-content;

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
      display: flex;
      padding: 20px;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      .imgInput {
        width: 40px;
      }
    }

    .divExample {
      margin-bottom: 30px;
      width: 100%;
      text-align: center;
      font-size: $BodyTextSize2;
    }
  }
}

@media screen and (max-width: 600px) {
  .containerForm {
    padding: 80px 20px;

    &__explain {
    margin-top: 20px;
    width: 100%;
    text-align: start;
  }

  .paperForm {
    width: 100%;
    .itemForm {

      .input {
        width: 100%;
      }
    }
  }
  }
}
</style>