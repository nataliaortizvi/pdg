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

      remember: true,
      analize: false,
      conclusion: false,

      showH1: "",
      showH0: "",
      showSignificancia: "",
      showPvalue: "",
      message:"",
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
        this.remember = false;
        this.analize = true;
      } else {
        alert("Llene todos los espacios");
        this.remember = true;
        this.analize = false;
      }
    },

    concludeResults() {
      this.remember = false;
      this.analize = false;
      this.conclusion = true;
    },

    backToAnalize() {
      this.remember = false;
      this.analize = true;
      this.conclusion = false;
    },

    backToRemember() {
      location.reload();
    },

    pruebas() {
      this.message = document.getElementById("pruebaUno").textContent;
      console.log("hhhhhh",this.message);
      try {
        navigator.clipboard.writeText(this.message);
        alert("¡Copiado!")
      } catch (e) {
        alert("Error al copia. Intentalo de nuevo");
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
      <div class="dataInputs" v-if="!this.conclusion">
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
            class="input --short --shortHeight"
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
        <button class="btn interpretationBtn" @click="analizeResults">
          Interpretar
        </button>
      </div>

      <div class="dataInterpretation">
        <div
          class="titlesStyle --bodyTextSmall --thin nivelInfo"
          v-if="this.remember"
        >
          <strong><p class="reminder">Recordemos que:</p></strong>
          <strong>Nivel de significancia: </strong>es normalmente del 5% (0.05)
          dependiendo del nivel de confianza, que normalmente es del 95% (0.95),
          por lo que podrías utilizar un nivel del 0.05.
          <br /><br />
          <strong>Valor P: </strong> se obtine a partir de la prueba realizada y es
          el porcentaje de que tu hipótesis nula(H0) ocurra. <br /><br />Si tu
          valor P es menor al nivel de significancia, entonces se rechaza la
          hipótesis nula(H0) porque hay muy poca probabilidad de que ocurra.
        </div>

        <div class="dataInterpretation" v-if="this.analize">
          <div class="pvalueData">
            <strong><p class="reminder">Eso quiere decir que:</p></strong>

            <h1 class="titlesStyle --bodyTextBig --blue">
              valor P &lt; 0.01 =
              <span class="titlesStyle --bodyTextSmall --blue --thin">
                H1✅ y H0🚫 (resultado muy significativo)</span
              >
              <br />
              valor P &lt; 0.05 =<span
                class="titlesStyle --bodyTextSmall --blue --thin"
              >
                H1✅ y H0🚫 (resultado significativo)</span
              >
              <br />
              valor P > 0.05 =<span
                class="titlesStyle --bodyTextSmall --blue --thin"
              >
                H1🚫 y H0✅ (resultado no significativo)</span
              >
            </h1>
          </div>

          <br />

          <div class="pvalueData">
            <strong
              ><p class="reminder">Así que según tus resultados:</p></strong
            >
            <p>
              Tu valor P
              <strong class="interPvalue">({{ this.showPvalue }})</strong> es
              <strong v-if="!this.isLess">mayor</strong>
              <strong v-if="this.isLess">menor</strong>
              que tu nivel de significancia
              <strong class="interPvalue"
                >({{ this.showSignificancia }}).</strong
              >
              <br /><br />Es decir, que tu hipótesis alternativa(H1) de:
              <span>{{ this.showH1 }}. </span>
              <strong v-if="this.isLess"><br />Es aceptada ✅</strong>
              <strong v-if="!this.isLess"><br />Es rechazada 🚫</strong>
              <br /><br />Y tu hipótesis nula(H0) de:
              <span>{{ this.showH0 }}. </span>
              <strong v-if="!this.isLess"><br />Es aceptada ✅</strong>
              <strong v-if="this.isLess"><br />Es rechazada 🚫</strong>
            </p>
          </div>
          <button class="btn" @click="concludeResults" v-if="this.analize">
            Concluir
          </button>
        </div>
      </div>
    </div>

    <div v-if="this.conclusion" class="conclusion">
      <img @click="pruebas" class="conclusion__paste" src="../../public/icons/copy.svg">
      <strong><p class="conclusion__title">Para concluir:</p></strong>
      
      <p id="pruebaUno">
        Luego de realizar el experimento, recolectar los datos y utilizar el tipo
        de análisis correcto para validar, podemos observar que al obtener un Valor P del 
        <strong><span>{{ this.showPvalue }}</span></strong>,
        el cual es <strong v-if="!this.isLess">mayor</strong
        ><strong v-if="this.isLess">menor</strong> que valor de significancia 
        (<strong><span>{{ this.showSignificancia }}</span></strong>), 
        podemos concluir que
        <span v-if="this.isLess"> tu hipótesis alternativa "<strong>{{ this.showH1 }}"</strong> es<strong> aceptada</strong> porque hay poca probabilidad de que ocurra la hipótesis nula </span>
        <span v-if="!this.isLess"> tu hipótesis nula "<strong>{{ this.showH0 }}"</strong> es<strong> aceptada </strong> porque hay una probabilidad mayor de que ocurra</span>
      </p>
      <!--<p>{{this.message}}</p>-->

      <div class="conclusion__btn">
      <button class="btn backBtn" @click="backToAnalize" v-if="this.conclusion">
        Atras
      </button>

      <button class="btn newBtn" @click="backToRemember" v-if="this.conclusion">
        Volver a interpretar
      </button>
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
  padding: 30px 30px;
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
    justify-content: flex-start;
    gap: 50px;
    margin: 30px 20px;

    .dataInputs {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 30%;
      height: 100%;
      background-color: $Background2;
      border-radius: 20px;
      padding: 25px;
      gap: 30px;
      position: relative;

      .theInput {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;

        select {
          padding: 0px 10px;
        }
      }
    }
    .dataInterpretation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;

      .btn {
      }

      .pvalueData {
        display: flex;
        flex-direction: column;
        border: 1px solid $SecondPink;
        padding: 20px;
        width: 80%;
        margin-bottom: 20px;
      }

      .nivelInfo {
        border: 1px solid $SecondPink;
        padding: 20px;
        width: 100%;
      }
      .reminder {
        margin-bottom: 10px;
      }
    }
  }
  .conclusion {
    display: flex;
    flex-direction: column;
    margin: 0px 40px;
    background-color: $Background2;
    padding: 25px;
    border-radius: 20px;
    position: relative;

    &__title {
      font-size: $BodyTextSize2;
      margin-bottom: 10px;
    }

    &__btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-top: 30px;
    }

    &__paste {
      width: 30px;
      position: absolute;
      top:20px;
      right: 20px;
      cursor: pointer;
    }
  }
}
</style>