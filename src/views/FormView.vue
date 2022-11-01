<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/variables";

export default {
  data() {
    return {
      image: [],
      title: "",
      definition: "",
      requirement: "",
      formula: "",
      formulameaning: "",
      context: "",

      newPaper: [],
    };
  },

  computed: {
    ...mapStores(useProductsStore),
  },

  methods: {
    addNewVariable() {
      this.newPaper = {
        image: this.image,
        title: this.title,
        definition: this.definition,
        requirement: this.requirement,
        formula: this.formula,
        formulameaning: this.formulameanind,
        context: this.context,
      };
      console.log("newPaper", newPaper);
      this.productsStore.newProduct(this.newPaper);
    },

    newFile(e) {
      var files = e.target.files;
      this.image = files[0];
      console.log("image", files[0]);
    },
  },
};
</script>
<template>
  <section class="containerForm">
    <h1 class="titlesStyle --pink">Agrega la nueva variable</h1>
    <div class="paperForm">
      <div class="itemForm">
        <label class="text"> Escribe el título del documento</label>
        <input
          class="input"
          placeholder="Nombre"
          v-model="title"
          type="text"
          required
        />
      </div>

      <div class="itemForm">
        <label class="text">Escribe la definición de la variable:</label>
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
          class="input input--paper"
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
        <label class="text imglabel">
          Agrega una imagen de referencia:
          <input
            class=""
            id="myFile"
            type="file"
            accept=".jpg, .jpeg, .png"
            @change="newFile"
            required
          />
          <img class="imgInput" src="../../public/icons/image.svg" />
        </label>
      </div>
    </div>
    <bottom class="btn" @click="addNewVariable">Agregar</bottom>
  </section>
</template>

<style lang="scss">
@import "src/assets/main.scss";

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
    margin-top: 30px;
    background-color: $Background2;
    
    padding: 20px;

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