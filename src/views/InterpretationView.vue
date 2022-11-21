<script>
export default {
  data() {
    return {
      tipoAnalisis: "",
      h1: "",
      h0: "",
      nivelSignificancia: null,
      valorP: null,
      valorR: null,
      isAcepted: Boolean,

      remember: true,
      analize: false,
      conclusion: false,
      analisisSelected: 0,

      showH1: "",
      showH0: "",
      showSignificancia: "",
      showPvalue: "",

      showRvalue: "",
      nivelCorrelacion: 0,
      correlacionPositiva: "",

      message: "",
    };
  },

  methods: {
    selectType(value) {
      if (value == "paired" || value == "unpaired" || value == "anova") {
        this.analisisSelected = 1;
      } else if (value == "spearman" || value == "pearson") {
        this.analisisSelected = 2;
      }
    },

    analizeResults() {
      if (this.tipoAnalisis != "" && this.h1 != "" && this.h0 != "") {
        if (this.analisisSelected == 1) {
          if (
            this.tipoAnalisis != "" &&
            this.h1 != "" &&
            this.h0 != "" &&
            this.nivelSignificancia != null &&
            this.valorP != null
          ) {
            this.showH1 = this.h1;
            this.showH0 = this.h0;
            this.showSignificancia = this.nivelSignificancia;
            this.showPvalue = this.valorP;

            if (this.valorP > this.nivelSignificancia) {
              this.isAcepted = false;
            } else {
              this.isAcepted = true;
            }

            this.remember = false;
            this.analize = true;
          } else {
            alert("Llene todos los espacios");
            this.remember = true;
            this.analize = false;
          }
        } else if (this.analisisSelected == 2) {
          if (
            this.tipoAnalisis != "" &&
            this.h1 != "" &&
            this.h0 != "" &&
            this.valorR != null
          ) {
            console.log(this.valorR);
            this.showH1 = this.h1;
            this.showH0 = this.h0;
            this.showRvalue = this.valorR;

            if (this.valorR > 0.1 || this.valorR < -0.1) {
              this.isAcepted = true;
            } else if (this.valorR > -0.1 || this.valorR < 0.1) {
              this.isAcepted = false;
            }

            if (
              (0.1 < this.valorR && this.valorR < 0.3) ||
              (-0.1 > this.valorR && this.valorR > -0.3)
            ) {
              this.nivelCorrelacion = 1;
              console.log("1");
            }
            if (
              (0.3 <= this.valorR && this.valorR < 0.5) ||
              (-0.3 >= this.valorR && this.valorR > -0.5)
            ) {
              this.nivelCorrelacion = 2;
              console.log("2");
            }
            if (
              (0.5 <= this.valorR && this.valorR < 0.7) ||
              (-0.5 >= this.valorR && this.valorR > -0.7)
            ) {
              this.nivelCorrelacion = 3;
              console.log("3");
            }
            if (0.7 <= this.valorR || -0.7 >= this.valorR) {
              this.nivelCorrelacion = 4;
              console.log("4");
            }

            if (this.valorR > 0) {
              this.correlacionPositiva = true;
            } else {
              this.correlacionPositiva = false;
            }

            this.remember = false;
            this.analize = true;
          } else {
            alert("Llene todos los espacios");
            this.remember = true;
            this.analize = false;
          }
        }
      } else {
        alert("Llene todos los espacios");
        this.remember = true;
        this.analize = false;
      }
    },

    concludeResults() {
      console.log("Antes: ",this.message)
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
      console.log("hhhhhh", this.message);
      navigator.clipboard.writeText(this.message)
      .then (()=> {
        alert("¡Copiado!");
      }).catch (()=> {
        alert("Error al copia. Intentalo de nuevo");
      });
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
            >Tipo de análisis que usaste</label
          >
          <select
            class="input --short"
            @change="() => selectType(tipoAnalisis)"
            v-model="tipoAnalisis"
          >
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

        <div class="theInput" v-if="this.analisisSelected == 1">
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

        <div class="theInput" v-if="this.analisisSelected == 1">
          <label class="titlesStyle --blue --bodyTextSmall"> Valor P </label>
          <input
            placeholder="0"
            type="number"
            class="input --number"
            v-model="this.valorP"
          />
        </div>

        <div class="theInput" v-if="this.analisisSelected == 2">
          <label class="titlesStyle --blue --bodyTextSmall"> Valor R </label>
          <input
            placeholder="0"
            type="number"
            class="input --number"
            v-model="this.valorR"
          />
        </div>

        <div class="divBtn">
        <button class="btn interpretationBtn" @click="analizeResults">
          Interpretar
        </button>
      </div>
      </div>

      <div class="dataInterpretation">
        <div
          class="titlesStyle --bodyTextSmall --thin nivelInfo"
          v-if="this.remember"
        >
          <strong><p class="reminder">Recordemos que:</p></strong>
          <p v-if="this.analisisSelected == 0||1">
            <strong>1. </strong>Cuando definas la varible y construyas tu hipótesis, debes definir
            tu hipótesis nula(H0) y alternativa(H1).<br /><br />
            <strong>La hipótesis alternativa: </strong>es el enunciado de lo que
            quieres afirmar o demostrar con la validación.<br />
            <strong>La hipótesis nula: </strong>es lo contrario a la hipótesis
            alternartiva.
          </p>

          <p v-if="this.analisisSelected == 1">
            <br />
            <strong>2. Nivel de significancia: </strong>es normalmente del 5%
            (0.05) dependiendo del nivel de confianza, que normalmente es del
            95% (0.95), por lo que podrías utilizar un nivel del 0.05.
            <br /><br>
          </p>

          <p v-if="this.analisisSelected == 1">
            <strong>3. Valor P: </strong> se obtiene a partir de la prueba
            realizada y es el porcentaje de que tu hipótesis nula(H0) ocurra.
            <br /><br />Si tu valor P es menor al nivel de significancia,
            entonces se rechaza la hipótesis nula(H0) porque hay muy poca
            probabilidad de que ocurra.
          </p>

          <p v-if="this.analisisSelected == 2">
            <br>
            <strong>2. Valor R: </strong> se obtiene a partir de la prueba
            realizada y es el coeficiente de correlación entre las variables,
            con posibles valores entre -1 y 1. <br /><br />Si tu valor R es
            positivo, quiere decir que hay una correlación donde los valores de
            ambas variables tienden a incrementarse juntos. Pero si es negativo,
            quiere decir que hay una correlación donde los valores de una
            variable tienden a incrementarse mientras que los valores de la otra
            variable descienden.
          </p>
        </div>

        <div class="dataInterpretation" v-if="this.analize">
          <div class="pvalueData" v-if="this.analisisSelected == 1">
            <strong><p class="reminder">Eso quiere decir que:</p></strong>

            <h1 class="titlesStyle --bodyTextBig --blue">
              valor P &lt; 0.01 ->
              <span class="titlesStyle --bodyTextSmall --blue --thin">
                H1✅ y H0🚫 (resultado muy significativo)</span
              >
              <br />
              valor P &lt; 0.05 -><span
                class="titlesStyle --bodyTextSmall --blue --thin"
              >
                H1✅ y H0🚫 (resultado significativo)</span
              >
              <br />
              valor P > 0.05 -><span
                class="titlesStyle --bodyTextSmall --blue --thin"
              >
                H1🚫 y H0✅ (resultado no significativo)</span
              >
            </h1>
          </div>

          <div class="pvalueData" v-if="this.analisisSelected == 2">
            <strong><p class="reminder">Eso quiere decir que:</p></strong>

            <h1 class="titlesStyle --bodyTextBig --blue">
              valor R = (0 - 0.1) ->
              <span class="titlesStyle --bodyTextSmall --blue --thin">
                H1🚫 y H0✅ (No hay correlación)</span
              >
              <br />
              valor R = (0.1 - 0.3) ->
              <span class="titlesStyle --bodyTextSmall --blue --thin">
                H1✅ y H0🚫 (Poca correlación)</span
              >
              <br />
              valor R = (0.3 - 0.5) ->
              <span class="titlesStyle --bodyTextSmall --blue --thin">
                H1✅ y H0🚫 (Correlación media)</span
              >
              <br />
              valor R = (0.5 - 0.7) ->
              <span class="titlesStyle --bodyTextSmall --blue --thin">
                H1✅ y H0🚫 (Alta correlación)</span
              >
              <br />
              valor R = (0.7 - 1) ->
              <span class="titlesStyle --bodyTextSmall --blue --thin">
                H1✅ y H0🚫 (Correlación muy alta)</span
              >
              <br />
            </h1>
            <br />
            Estos valores funcionan si el valor R es un número positivo o
            también uno negativo.
          </div>

          <br />

          <div class="pvalueData" v-if="this.analisisSelected == 1">
            <strong
              ><p class="reminder">Así que según tus resultados:</p></strong
            >
            <p>
              Tu valor P
              <strong class="interPvalue">({{ this.showPvalue }})</strong> es
              <strong v-if="!this.isAcepted">mayor</strong>
              <strong v-if="this.isAcepted">menor</strong>
              que tu nivel de significancia
              <strong class="interPvalue"
                >({{ this.showSignificancia }}).</strong
              >
              <br /><br />Es decir que, tu hipótesis alternativa(H1) de:
              <span>{{ this.showH1 }}. </span>
              <strong v-if="this.isAcepted"><br />Es aceptada ✅</strong>
              <strong v-if="!this.isAcepted"><br />Es rechazada 🚫</strong>
              <br /><br />Y tu hipótesis nula(H0) de:
              <span>{{ this.showH0 }}. </span>
              <strong v-if="!this.isAcepted"><br />Es aceptada ✅</strong>
              <strong v-if="this.isAcepted"><br />Es rechazada 🚫</strong>
            </p>
          </div>

          <div class="pvalueData" v-if="this.analisisSelected == 2">
            <strong
              ><p class="reminder">Así que según tus resultados:</p></strong
            >
            <p>
              Tu valor R es <strong>{{ this.showRvalue }}</strong
              ><br /><br />
              Es decir que,
              <strong>
                <span v-if="this.isAcepted">si</span>
                <span v-if="!this.isAcepted">no</span>
                existe una correlación
              </strong>

              <span v-if="this.isAcepted">
                <span v-if="this.correlacionPositiva">positiva </span>
                <span v-if="!this.correlacionPositiva">negativa </span>
              </span>

              <span v-if="this.isAcepted">
                <span v-if="this.nivelCorrelacion == 1">muy poca</span>
                <span v-if="this.nivelCorrelacion == 2">media</span>
                <span v-if="this.nivelCorrelacion == 3">alta</span>
                <span v-if="this.nivelCorrelacion == 4">muy alta</span>
              </span>
              entre las variables.

              <br /><br />Osea que, tu hipótesis alternativa(H1) de:
              <span>{{ this.showH1 }}. </span>
              <strong v-if="this.isAcepted"><br />Es aceptada ✅</strong>
              <strong v-if="!this.isAcepted"><br />Es rechazada 🚫</strong>
              <br /><br />Y tu hipótesis nula(H0) de:
              <span>{{ this.showH0 }}. </span>
              <strong v-if="!this.isAcepted"><br />Es aceptada ✅</strong>
              <strong v-if="this.isAcepted"><br />Es rechazada 🚫</strong>
            </p>
          </div>

          <button class="btn" @click="concludeResults" v-if="this.analize">
            Concluir
          </button>
        </div>
      </div>
    </div>

    <div v-if="this.conclusion" class="conclusion">
      <img
        @click="pruebas"
        class="conclusion__paste"
        src="../../public/icons/copy.svg"
      />
      <strong><p class="conclusion__title">Para concluir:</p></strong>

      <p id="pruebaUno" v-if="this.analisisSelected == 1">
        Luego de realizar el experimento, recolectar los datos y utilizar el
        tipo de análisis correcto para validar, podemos observar que al obtener
        un Valor P del
        <strong>{{ this.showPvalue }}</strong
        >, el cual es <strong v-if="!this.isAcepted">mayor</strong
        ><strong v-if="this.isAcepted">menor</strong> que el valor de
        significancia (<strong>{{ this.showSignificancia }}</strong
        >), podemos concluir que
        <span v-if="this.isAcepted">
          tu hipótesis alternativa "<strong>{{ this.showH1 }}"</strong>
          es<strong> aceptada</strong> porque hay poca probabilidad de que
          ocurra la hipótesis nula
        </span>
        <span v-if="!this.isAcepted">
          tu hipótesis nula "<strong>{{ this.showH0 }}"</strong> es<strong>
            aceptada
          </strong>
          porque hay una probabilidad mayor de que ocurra</span
        >
      </p>

      <p id="pruebaUno" v-if="this.analisisSelected == 2">
        Luego de realizar el experimento, recolectar los datos y utilizar el
        tipo de análisis correcto para validar, podemos observar que al obtener
        un Valor R de
        <strong>{{ this.showRvalue }}</strong
        >, se puede afirmar que

        <strong>
          <span v-if="this.isAcepted">si</span>
          <span v-if="!this.isAcepted">no</span>
          existe una correlación

          <span v-if="this.isAcepted">
            <span v-if="this.correlacionPositiva">positiva </span>
            <span v-if="!this.correlacionPositiva">negativa </span>
          </span>

          <span v-if="this.isAcepted">
            <span v-if="this.nivelCorrelacion == 1">muy poca</span>
            <span v-if="this.nivelCorrelacion == 2">media</span>
            <span v-if="this.nivelCorrelacion == 3">alta</span>
            <span v-if="this.nivelCorrelacion == 4">muy alta</span>
          </span>
        </strong>
        entre las variables. Asi que, podemos concluir que
        <span v-if="this.isAcepted">
          tu hipótesis alternativa "<strong>{{ this.showH1 }}"</strong>
          es<strong> aceptada.</strong>
        </span>
        <span v-if="!this.isAcepted">
          tu hipótesis nula "<strong>{{ this.showH0 }}"</strong> es<strong>
            aceptada.
          </strong></span
        >
      </p>

      <div class="conclusion__btn">
        <button
          class="btn backBtn"
          @click="backToAnalize"
          v-if="this.conclusion"
        >
          Atras
        </button>

        <button
          class="btn newBtn"
          @click="backToRemember"
          v-if="this.conclusion"
        >
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
    &__title {
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

      .divBtn {
        display:flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
    }
    .dataInterpretation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;

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
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 600px) {
  .interpretationSection{
    padding: 30px 20px;

    .header {
      &__title {
        align-items:flex-start;
        img {
        margin-top: 7px;
      }
      }
    }

    .body {
      flex-direction: column;
      margin: 30px 0px;
      .dataInputs {
        width: 100%;
        padding: 15px;
      }
    }
    
    .conclusion {
      margin: 0px 0px;
    }
  }
}
</style>