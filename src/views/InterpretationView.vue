<script>
export default {
  data() {
    return {
      tipoAnalisis: "",
      h1: "",
      h0: "",
      nivelConfianza: 0,
      valorP: 0,
    };
  },

  methods: {
    prueba() {
      if (
        this.tipoAnalisis != "" ||
        this.h1 != "" ||
        this.nivelConfianza != 0 ||
        this.valorP != 0
      ) {
        let resultados = {
          tipoAnalisis: this.tipoAnalisis,
          h1: this.h1,
          h0: this.h0,
          nivelConfianza: this.nivelConfianza,
          valorP: this.valorP,
        };
        console.log("RESULTADOS: ", resultados);
      } else {
        alert("Llene todos los espacios");
      }
    },
  },
};
</script>

<template>
  <section class="interpretationSection">
    <div class="header">
      <div class="header__title">
        <img src="../../public/imgs/results.png" />
        <h2 class="titlesStyle --pink">Interpretación de resultados</h2>
      </div>
      <p class="header__description" @click="prueba2">
        A continuación, podrás ingresar los datos que te arrojó la
        calculadora<br />
        estadística y nosotros te ayudaremos a entender mejor los resultados.<br />
        <strong>Ingresa los siguientes datos para poder ayudarte:</strong>
      </p>
    </div>

    <div class="body">
      <div class="dataInputs">
        <div class="theInput">
          <label class="titlesStyle --blue --bodyTextSmall"
            >Tipo de análisis</label
          >
          <select v-model="tipoAnalisis">
            <option value="">Selecciona...</option>
            <option value="paired">Paired T-test</option>
            <option value="unpaired">Unpaired T-test</option>
            <option value="anova">Anova</option>
            <option value="spearman">Spearman</option>
            <option value="pearson">Pearson</option>
          </select>
        </div>

        <div class="theInput">
          <label class="titlesStyle --blue --bodyTextSmall">
            Hipótesis Alternativa
          </label>
          <input placeholder="Ingresa tu H1..." type="text" v-model="this.h1" />
        </div>

        <div class="theInput">
          <label class="titlesStyle --blue --bodyTextSmall">
            Hipótesis Nula
          </label>
          <input placeholder="Ingresa tu H0..." type="text" v-model="this.h0" />
        </div>

        <div class="theInput">
          <label class="titlesStyle --blue --bodyTextSmall">
            Nivel de significancia
          </label>
          <input
            placeholder="0"
            type="number"
            class="inputNum"
            v-model="this.nivelConfianza"
          />
        </div>

        <div class="theInput">
          <label class="titlesStyle --blue --bodyTextSmall"> Valor P </label>
          <input
            placeholder="0"
            type="number"
            class="inputNum"
            v-model="this.valorP"
          />
        </div>

        <button class="btn" @click="prueba">Interpretar</button>
      </div>

      <div class="dataInterpretation">
        <p>
          Tu p-value es de 0.003, esto significa que tu hipótesis alternativa ha
          sido aceptada. Es decir, que tu hipótesis de: las manzanas caen más
          rápido entre más arriba esten, es verdadera.
        </p>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import "src/assets/main.scss";

.interpretationSection {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 30px;
  color: $MainColorBlue;
  margin: 0px 0px 50px 0px;

  .header {
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
  }

  .body {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
    margin: 50px 0px;

    .dataInputs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 40%;
      background-color: $Background2;
      border-radius: 20px;
      padding: 30px;
      gap: 30px;

      .theInput {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;

        select {
          border: 1px solid $MainColorBlue;
          border-radius: 10px;
          color: $MainColorBlue;
          background: transparent;
          height: 30px;
          width: 100%;
          padding-left: 10px;
        }

        .--bodyTextSmall {
          margin-bottom: 5px;
        }

        input {
          display: block;
          width: 100%;
          height: 30px;
          background: transparent;
          border: 1px solid $MainColorBlue;
          color: $MainColorBlue;
          padding-left: 10px;
          border-radius: 10px;
        }
        .inputNum {
          width: 15%;
        }

        fieldset {
          width: 100%;
          height: 50px;
        }
      }
    }
    .dataInterpretation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 60%;
    }
  }
}
</style>