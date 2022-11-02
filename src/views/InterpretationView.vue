<script>
export default {
  data() {
    return {
      tipoAnalisis: "",
      h1: "",
      h0: "",
      nivelSignificancia: "",
      valorP: "",
      isLess: Boolean,
      analize: false,

      showH1: "",
      showH0: "",
      showSignificancia: "",
      showPvalue: "",
    };
  },

  methods: {
    analizeResults() {
      if (
        this.tipoAnalisis != "" &&
        this.h1 != "" &&
        this.h0 != "" &&
        this.nivelSignificancia != "" &&
        this.valorP != ""
      ) {
        this.showH1 = this.h1;
        this.showH0 = this.h0;
        this.showSignificancia = this.nivelSignificancia;
        this.showPvalue = this.valorP;

        if (this.valorP > this.nivelSignificancia) {
          this.isLess = false;
        } else {
          this.isLess = true;
        }
        this.analize = true;
      } else {
        alert("Llene todos los espacios");
        this.analize = false;
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
      <p class="header__description">
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
          <select class="input --short" v-model="tipoAnalisis">
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
            Hipótesis Alternativa(H1)
          </label>
          <input
            class="input --short"
            placeholder="Ingresa tu H1..."
            type="text"
            v-model="this.h1"
          />
        </div>

        <div class="theInput">
          <label class="titlesStyle --blue --bodyTextSmall">
            Hipótesis Nula(H0)
          </label>
          <input
            class="input --short"
            placeholder="Ingresa tu H0..."
            type="text"
            v-model="this.h0"
          />
        </div>

        <div class="theInput">
          <label class="titlesStyle --blue --bodyTextSmall">
            Nivel de significancia (decimales)
          </label>
          <input
            placeholder="0"
            type="number"
            class="input --number"
            v-model="this.nivelSignificancia"
          />
        </div>

        <div class="theInput">
          <label class="titlesStyle --blue --bodyTextSmall"> Valor P </label>
          <input
            placeholder="0"
            type="number"
            class="input --number"
            v-model="this.valorP"
          />
        </div>
        <div class="dataInputs__btnclass">
          <button class="btn" @click="analizeResults">Interpretar</button>
        </div>
      </div>

      <div class="dataInterpretation">
        <b class="titlesStyle --bodyTextSmall --thin nivelInfo">
          <strong><p class="reminder">Recordemos que:</p></strong>
          <strong>Nivel de significancia: </strong>es normalmente del 5% (0.05)
          dependiendo del nivel de confianza, que normalmente en del 95% (0.95).
          <br /><br />
          <strong>Valor P: </strong> sale a partir de la prueba realizada y es
          el porcentaje de que tu hipótesis nula(H0) ocurra. <br /><br />Si tu valor P es menor
          al nivel de significancia entonces se rechaza la hipótesis nula((H0)) porque
          hay muy poca probabilidad de que ocurra.
        </b>

        <p class="" v-if="this.analize">Eso quiere decir que si:</p>

        <h1
          class="titlesStyle --bodyTextBig --blue pvalueInfo"
          v-if="this.analize"
        >
          valor P &lt; 0.01 =
          <span class="titlesStyle --bodyTextSmall --blue --thin">
            H1✅ y H0🚫 (resultado muy significativo)</span
          ><br />
          valor P &lt; 0.05 =<span
            class="titlesStyle --bodyTextSmall --blue --thin"
          >
            H1✅ y H0🚫 (resultado significativo)</span
          ><br />
          valor P > 0.05 =<span
            class="titlesStyle --bodyTextSmall --blue --thin"
          >
            H1🚫 y H0✅ (resultado no significativo)</span
          ><br />
        </h1>

        <p v-if="this.analize">Así que según tus resultados:</p>

        <p class="dataInfo" v-if="this.analize">
          Tu valor P
          <strong class="interPvalue">({{ this.showPvalue }})</strong> es
          <strong v-if="!this.isLess">mayor</strong>
          <strong v-if="this.isLess">menor</strong>
          que tu nivel de significancia
          <strong class="interPvalue">({{ this.showSignificancia }}).</strong>
          <br /><br />Es decir, que tu hipótesis alternativa(H1) de:
          <span>{{ this.showH1 }}. </span>
          <strong v-if="this.isLess"><br />Es aceptada ✅</strong>
          <strong v-if="!this.isLess"><br />Es rechazada 🚫</strong>
          <br /><br />Y tu hipótesis nula(H0) de:
          <span>{{ this.showH1 }}. </span>
          <strong v-if="!this.isLess"><br />Es aceptada ✅</strong>
          <strong v-if="this.isLess"><br />Es rechazada 🚫</strong>
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
  width: 100%;
  padding: 0px 30px;
  color: $MainColorBlue;

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
          padding: 0px 15px;
        }


        fieldset {
          width: 100%;
          height: 50px;
        }
      }

      ::placeholder {
        padding-left: 15px;
      }

      &__btnclass {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
    }
    .dataInterpretation {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 50%;
      gap: 30px;

  
      .nivelInfo {
        border: 1px solid $SecondPink;
        padding: 20px;
        width: 94%;
      }
      .dataInfo {
        

        .reminder {
          font-size: $BodyTextSize2;
          color: $SecondPink;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>