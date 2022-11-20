<script>
export default {
  data() {
    return {
      currentstep: 1,
      steps: [
        {
          num: 1,
          paso: "Protocolo de investigación:",
          nombre: "Definir hipótesis y variable",
          descripOne:
            "Antes de iniciar debes saber que todos los proyectos de investigación en áreas creativas también necesitan una hipótesis que debe ser comprobada.",
          descripTwo:
            "Esta hipótesis debe tener al menos una variable, que es la que necesitas medir.",
          descripThree: "Ejemplo",
          descripFour:
            "Hipótesis: Mientras más alta este del suelo una manzana, su velocidad de caída es mayor.",
          descripFive: "Variable: Velocidad.",
        },
        {
          num: 2,
          paso: "Protocolo de investigación:",
          nombre: "Hipótesis nula(H0) y alternativa(H1)",
          descripOne:
            "Cuando definas la varible y construyas tu hipótesis, debes definir tu hipótesis nula(H0) y alternativa(H1).",
          descripTwo:
            "La hipótesis alternativa(H1) es el enunciado de lo que quieres afirmar o demostrar con la validación.",
          descripThree:
            "La hipótesis nula(H0) es lo contrario a la hipótesis alternartiva(H1)",
          descripFour:
            "Las manzanas caen del árbol más rápido si estan más altas.",
          descripFive:
            "Las manzanas NO caen del árbol más rápido si estan más altas",
          descripSix: "Ejemplo",
        },
        {
          num: 3,
          paso: "Protocolo de investigación:",
          nombre: "¿Cómo medir la variable?",
          descripOne:
            "Cuando tengas las hipótesis definidas, escribe en la barra de búsqueda de Validata la variable que vas a medir.",
          descripTwo: "Así conocerás diferentes formas de medir esa variable.",
          /*descripThree: "Ejemplo",
          descripFour:
            "La velocidad es el cambio de posición dividido el tiempo",
          descripFive: "Velocidad: cambio de posición / tiempo",*/
        },
        {
          num: 4,
          paso: "Protocolo de investigación:",
          nombre: "Definir tipo de análisis y muestra",
          descripOne:
            "En Validata encontrarás diferentes tipos de análisis para validar tu hipótesis. Elige la que mejor le convenga a tu proyecto según la muestra que definas.",
          descripTwo: "Ejemplo",
          descripThree:
            "Muestra: 2 grupos con 10 manzanas cada una. (Un grupo con manzanas ubicadas más altas que el otro grupo). Puedes hacer un Paired T-test con dos grupos de igual cantidad de manzanas, uno que esta más alto que el otro y recolectar los datos con cada uno.",
          descripFour: "Opcion 1: Paired T-test",
          descripFive: "Opcion 2: Unpaired T-test",
          descripSix:
            "Muestra: 2 grupos, uno con 7 manzanas ubicadas más altas y otro con 10 manzanas más bajas. Puedes hacer un Unpaird T-test ya que tu muestra tiene dos grupos con cantidad diferente de elementos",
        },
        {
          num: 5,
          paso: "Fase de análisis:",
          nombre: "Calculadora y resultados",
          descripOne:
            "Validata te llevará a una calculadora que realizará los calculos automaticos, y te dará los resultados.",
          descripTwo:
            "Con estos resultados podrás volver a Validata e ingresarlos en la sección de interpretación de resultados para entenderlos mejor.",
          descripThree: "Ejemplo",
          descripFour: "Datos obtenidos de manzanas altas: 4,5,4,4,3,4,3,4,4,6",
          descripFive:
            "Datos obtenidos de manzanas bajas: 8,8,9,10,7,11,6,8,9,8",
          descripSix:
            "Resultado: El valor P es menor a 0,05, por criterio convencional esta diferencia es considerada extremadamente significativa estadísticamente.",
        },
        {
          num: 6,
          paso: "Fase de analisis:",
          nombre: "Conclusión",
          descripOne:
            "Validata te ayudará a entender mejor los resultados para que puedas presentarlos y dar una conclusión en tu investigación.",
          descripTwo: "Ejemplo",
          descripThree: "Según tus resultados:",
          descripFour:
            "Tu valor P (0.0001) es menor que tu nivel de significancia (0.05).",
          descripFive:
            "Es decir, que tu hipótesis alternativa(H1) de: ''Las manzanas caen del árbol más rápido si están más altas'', es aceptada ✅",
        },
      ],

      get totalSteps() {
        return this.steps.length;
      },
      get isFirstStep() {
        return this.currentstep === 1;
      },
      get isLastStep() {
        return this.currentstep === this.totalSteps;
      },
    };
  },

  props: {
    modalOff: Boolean,
  },

  methods: {
    next() {
      this.currentstep++;
    },
    back() {
      this.currentstep--;
    },
    scrollWin() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <section class="help">
    <!------------------------circles and bar------------------------>
    <div class="progress">
      <div class="stillBar"></div>

      <div class="progressCircles">
        <div
          v-for="step in totalSteps"
          :key="step"
          class="circle"
          :class="{ active: step <= currentstep }"
          @click="
            () => {
              this.currentstep = step;
            }
          "
        >
          <a class="circle__number">{{ step }}</a>
        </div>
      </div>

      <div class="progressBar">
        <div
          v-for="step in totalSteps"
          :key="step"
          class="animatedBar"
          :class="{ activeBar: step + 1 <= currentstep }"
        ></div>
      </div>
    </div>

    <!------------------------steps info------------------------>
    <div class="data">
      <div v-for="step in steps" :key="step.paso" class="relative">
        <!------------Step 1---------->
        <div
          class="cardInfo"
          :class="{ stepOneShow: step.num == 1 }"
          v-if="currentstep === step.num"
        >
          <div class="cardInfo__header">
            <h1 class="step">{{ step.paso }}</h1>
            <h3 class="name">{{ step.nombre }}</h3>
          </div>
          <div class="cardInfo__descrip">
            <p class="descripOne">{{ step.descripOne }}</p>
            <p class="descripTwo">{{ step.descripTwo }}</p>
            <div class="cardInfo__ejemploOne">
              <strong
                ><p class="descripThree">{{ step.descripThree }}</p></strong
              >
              <p>{{ step.descripFour }}</p>
              <p>{{ step.descripFive }}</p>
            </div>
          </div>
          <div class="buttons buttons--buttonOne">
            <button class="btn" @click="back" v-if="!isFirstStep">
              Anterior
            </button>
            <button class="btn --noResponsive" @click="next" v-if="!isLastStep">
              Siguiente
            </button>
            <div class="btnInicial" @click="next" v-if="!isLastStep">.</div>
            <button class="btn --responsive" @click="next" v-if="!isLastStep">
              <img src="../../public/icons/goForward.svg"/>
            </button>
          </div>
        </div>

        <!------------Step 2---------->
        <div
          class="cardInfo"
          :class="{ stepTwoShow: step.num === 2 }"
          v-if="currentstep === step.num"
        >
          <div class="cardInfo__header">
            <h1 class="step">{{ step.paso }}</h1>
            <h3 class="name">{{ step.nombre }}</h3>
          </div>
          <div class="textIntro">
            <p class="textIntro__text">{{ step.descripOne }}</p>
          </div>
          <div class="gridText">
            <div class="gridText__top">
              <p class="Left">{{ step.descripTwo }}</p>
              <div class="line"></div>
              <p class="Right">{{ step.descripThree }}</p>
            </div>

            <div class="gridText__center">
              <p>
                <strong>{{ step.descripSix }}</strong>
              </p>
            </div>

            <div class="gridText__bottom">
              <p class="Left italic">{{ step.descripFour }}</p>
              <div class="line"></div>
              <p class="Right italic">{{ step.descripFive }}</p>
            </div>
          </div>
          <div class="buttons buttons--buttonTwo">
            <button
              class="btn --noResponsive"
              @click="back"
              v-if="!isFirstStep"
            >
              Anterior
            </button>
            <button class="btn --noResponsive" @click="next" v-if="!isLastStep">
              Siguiente
            </button>
            <button class="btn --responsive" @click="back" v-if="!isLastStep">
              <img src="../../public/icons/goBack.svg"/>
            </button>
            <button class="btn --responsive" @click="next" v-if="!isLastStep">
              <img src="../../public/icons/goForward.svg"/>
            </button>
          </div>
        </div>

        <!------------Step 3---------->
        <div
          class="cardInfo"
          :class="{ stepThreeShow: step.num === 3 }"
          v-if="currentstep === step.num"
        >
          <div class="cardInfo__header">
            <h1 class="step">{{ step.paso }}</h1>
            <h3 class="name">{{ step.nombre }}</h3>
          </div>
          <div class="textIntro">
            <p class="textIntro__text">{{ step.descripOne }}</p>
            <p class="textIntro__text">{{ step.descripTwo }}</p>
          </div>

          <div class="cardInfo__ejemplo">
            <img class="ejemploGif" src="../../public/imgs/gifBusqueda.gif" />
          </div>

          <div class="buttons buttons--buttonThree">
            <button
              class="btn --noResponsive"
              @click="back"
              v-if="!isFirstStep"
            >
              Anterior
            </button>
            <button class="btn --noResponsive" @click="next" v-if="!isLastStep">
              Siguiente
            </button>
            <button class="btn --responsive" @click="back" v-if="!isLastStep">
              <img src="../../public/icons/goBack.svg"/>
            </button>
            <button class="btn --responsive" @click="next" v-if="!isLastStep">
              <img src="../../public/icons/goForward.svg"/>
            </button>
          </div>
        </div>

        <!------------Step 4---------->
        <div
          class="cardInfo"
          :class="{ stepFourShow: step.num === 4 }"
          v-if="currentstep === step.num"
        >
          <div class="cardInfo__header">
            <h1 class="step">{{ step.paso }}</h1>
            <h3 class="name">{{ step.nombre }}</h3>
          </div>
          <div class="textIntro">
            <p class="textIntro__text">{{ step.descripOne }}</p>
          </div>
          <div class="cardInfo__ejemplo">
            <p class="ejemploText">
              <strong>{{ step.descripTwo }}</strong>
            </p>
            <p>
              <strong>{{ step.descripFour }}</strong>
            </p>
            <p>{{ step.descripThree }}</p>
            <br />
            <strong
              ><p>{{ step.descripFive }}</p></strong
            >
            <p>{{ step.descripSix }}</p>
          </div>

          <div class="buttons buttons--buttonFour">
            <button
              class="btn --noResponsive"
              @click="back"
              v-if="!isFirstStep"
            >
              Anterior
            </button>
            <button class="btn --noResponsive" @click="next" v-if="!isLastStep">
              Siguiente
            </button>
            <button class="btn --responsive" @click="back" v-if="!isLastStep">
              <img src="../../public/icons/goBack.svg"/>
            </button>
            <button class="btn --responsive" @click="next" v-if="!isLastStep">
              <img src="../../public/icons/goForward.svg"/>
            </button>
          </div>
        </div>

        <!------------Step 5---------->
        <div
          class="cardInfo"
          :class="{ stepFiveShow: step.num === 5 }"
          v-if="currentstep === step.num"
        >
          <div class="cardInfo__header">
            <h1 class="step">{{ step.paso }}</h1>
            <h3 class="name">{{ step.nombre }}</h3>
          </div>
          <div class="textIntro">
            <p class="textIntro__text">{{ step.descripOne }}</p>
            <p class="textIntro__texts">{{ step.descripTwo }}</p>
            <!--<button class="btn btn--disabled">Calcular</button>-->
          </div>
          <div class="textExample">
            <strong
              ><p class="textExample__ejem">{{ step.descripThree }}</p></strong
            >
            <p>{{ step.descripFour }}</p>
            <p>{{ step.descripFive }}</p>
            <p class="textExample__result">{{ step.descripSix }}</p>
          </div>

          <div class="buttons buttons--buttonFive">
            <button
              class="btn --noResponsive"
              @click="back"
              v-if="!isFirstStep"
            >
              Anterior
            </button>
            <button class="btn --noResponsive" @click="next" v-if="!isLastStep">
              Siguiente
            </button>
            <button class="btn --responsive" @click="back" v-if="!isLastStep">
              <img src="../../public/icons/goBack.svg"/>
            </button>
            <button class="btn --responsive" @click="next" v-if="!isLastStep">
              <img src="../../public/icons/goForward.svg"/>
            </button>
          </div>
        </div>

        <!------------Step 6---------->
        <div
          class="cardInfo"
          :class="{ stepSixShow: step.num === 6 }"
          v-if="currentstep === step.num"
        >
          <div class="cardInfo__header">
            <h1 class="step">{{ step.paso }}</h1>
            <h3 class="name">{{ step.nombre }}</h3>
          </div>
          <div class="textIntro">
            <p class="textIntro__text">{{ step.descripOne }}</p>
          </div>

          <div class="textExample">
            <strong
              ><p class="textExample__ejem">{{ step.descripTwo }}</p></strong
            >
            <p>{{ step.descripThree }}</p>
            <p>{{ step.descripFour }}</p>
            <p>{{ step.descripFive }}</p>
          </div>

          <div class="buttons buttons--buttonSix">
            <button
              class="btn --noResponsive"
              @click="back"
              v-if="!isFirstStep"
            >
              Anterior
            </button>
            <button class="btn --noResponsive" @click="next" v-if="!isLastStep">
              Siguiente
            </button>
            <button class="btn --responsive" @click="back" v-if="!isFirstStep">
              <img src="../../public/icons/goBack.svg"/>
            </button>
            <button
              class="btn"
              v-if="!isFirstStep && modalOff"
              @click="scrollWin()"
            >
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>
@import "src/assets/main.scss";

.help {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 30px;

  .progress {
    display: flex;
    padding: 30px;
    margin-left: 30px;

    .stillBar {
      height: 470px;
      width: 2px;
      margin-top: 5px;
      margin-left: 25px;
      position: absolute;
      background-color: rgb(209, 209, 209);
    }

    .progressCircles {
      display: flex;
      flex-direction: column;
      gap: 35px;
      cursor: pointer;

      .circle {
        height: 50px;
        width: 50px;
        border-radius: 50px;
        border-style: solid;
        border-width: 2px;
        border-color: rgb(209, 209, 209);
        transition: all 0.3s ease-in-out 0.4s;
        background-color: $Background;
        z-index: 10;
        color: rgb(209, 209, 209);
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          font-size: $TitleSize;
          font-family: $MainTypo;
          color: $Hint;
        }
      }

      .active {
        background-color: $ThirdViolet;
        border-color: $ThirdViolet;
        color: $White;

        a {
          color: $White;
        }
      }
    }

    .progressBar {
      display: flex;
      flex-direction: column;
      gap: 0px;
      position: absolute;
      border-radius: 50px;
      margin-top: 5px;
      margin-left: 25px;

      .animatedBar {
        width: 2px;
        height: 40px;
        transition: all 0.5s ease-in-out 0.1s;
      }
      .activeBar {
        height: 90px;
        background-color: $ThirdViolet;
      }
    }
  }

  .data {
    display: flex;
    flex-direction: column;
    background-color: $White;
    border-radius: 20px;
    width: 800px;
    height: 550px;
    position: relative;
    padding: 50px;

    .cardInfo {
      display: none;

      .step {
        font-size: 20px;
        color: $Hint;
        font-weight: 300;
      }

      .name {
        font-size: $TitleSize;
        color: $ThirdViolet;
        font-weight: 700;
      }

      .descripOne {
        color: $MainColorBlue;
        font-size: $BodyTextSize;
        margin-top: 50px;
      }

      .descripTwo {
        color: $MainColorBlue;
        font-size: $BodyTextSize;
        margin-top: 30px;
      }

      .cardInfo__ejemploOne {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid $SecondPink;
        padding: 10px 20px;
        margin-top: 30px;
      }
    }

    .stepOneShow {
      display: flex;
      flex-direction: column;
    }

    .stepTwoShow {
      display: flex;
      flex-direction: column;
      align-items: center;

      .cardInfo__header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .textIntro {
        display: flex;
        justify-items: center;
        margin-top: 30px;
        width: 500px;
        text-align: center;
        color: $MainColorBlue;
        font-size: $BodyTextSize;
      }

      .gridText {
        margin-top: 40px;
        color: $MainColorBlue;

        &__top {
          display: flex;
          gap: 50px;
          text-align: center;
        }

        &__center {
          display: flex;
          justify-content: center;
          margin: 0px 0px 20px 0px;
        }

        &__bottom {
          display: flex;
          text-align: center;
          gap: 40px;
        }

        .Left {
          width: 50%;
        }
        .Right {
          width: 50%;
        }

        .line {
          width: 2px;
          height: 50px;
          background-color: $SecondPink;
        }
      }
    }

    .stepThreeShow {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        color: $MainColorBlue;
        text-align: start;
      }

      .cardInfo__header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .cardInfo {
        &__ejemplo {
          display: flex;
          flex-direction: column;
          align-items: center;
          /*background-image: url(../../public/imgs/gifBusqueda.gif);
          background-size: cover;
          background-position: center center;
          width: 100%;
          height: 200px;*/
          border: 2px solid $SecondPink;
          .ejemploGif {
            width: 100%;
          }
        }
      }

      .textIntro {
        display: flex;
        flex-direction: column;
        justify-items: center;
        margin-top: 30px;
        width: 100%;
        text-align: center;
        font-size: $BodyTextSize;

        &__text {
          margin-bottom: 10px;
        }
      }
    }

    .stepFourShow {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        color: $MainColorBlue;
        text-align: center;
      }

      .cardInfo__header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .textIntro {
        width: auto;
        margin: 20px;
        font-size: $BodyTextSize;
      }

      .cardInfo__ejemplo {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid $SecondPink;
        padding: 10px 20px;

        .ejemploText {
          margin-bottom: 10px;
        }
      }
    }

    .stepFiveShow {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        color: $MainColorBlue;
        text-align: start;
      }

      .cardInfo__header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .textIntro {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        font-size: $BodyTextSize;

        &__text {
          margin-bottom: 20px;
        }
        &__texts {
          margin-bottom: 20px;
        }
      }
      .textExample {
        border: 1px solid $SecondPink;
        padding: 10px 20px;

        &__ejem {
          margin-bottom: 10px;
        }
        &__result {
          margin-top: 10px;
        }
      }
    }

    .stepSixShow {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        color: $MainColorBlue;
        text-align: start;
      }

      .cardInfo__header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .textIntro {
        margin: 30px 0px;
        font-size: $BodyTextSize;
      }

      .textExample {
        border: 1px solid $SecondPink;
        padding: 10px;

        &__ejem {
          margin-bottom: 10px;
        }
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      position: absolute;
      bottom: 25px;
      left: 0;
      right: 0;
    }
  }
}

@media screen and (max-width: 600px) {
  .help {
    margin-right: 0px;

    .progress {
      display: none;
    }

    .data {
      padding: 25px 25px 50px 25px;
      position: relative;
      height: fit-content;

      .cardInfo {
        .step {
          font-size: $BodyTextSize;
        }
        .name {
          font-size: $SubtitleSize;
        }
        .descripOne {
          margin-top: 20px;
        }

        .descripTwo {
          margin-top: 10px;
        }

        .cardInfo__ejemploOne {
          margin: 20px 0px;
          font-size: 14px;
        }
      }

      .stepTwoShow {
        .textIntro {
          margin-top: 20px;
          width: 100%;
        }

        .gridText {
          margin-top: 20px;
          font-size: 14px;

          &__top {
            gap: 20px;
          }

          &__center {
            justify-content: center;
          }

          &__bottom {
            gap: 20px;
          }

          .line {
            height: 100px;
          }
        }
      }

      .stepThreeShow {
        .cardInfo {
          &__ejemplo {
            margin-bottom: 25px;
          }
        }
        .textIntro {
          &__text {
            margin-bottom: 10px;
          }
        }
      }

      .stepFourShow {

        .cardInfo__ejemplo {
          margin-bottom: 25px;
          font-size: 14px;
        }
      }

      .stepFiveShow {

        .textIntro {
          &__text {
            margin-bottom: 10px;
          }
          &__texts {
            margin-bottom: 20px;
          }
        }
        .textExample {
          font-size: 14px;
          margin-bottom: 20px;
        }
      }

      .stepSixShow {
        .textIntro {
          margin: 20px 0px;
        }

        .textExample {
          margin-bottom: 30px;
        }
      }

      .buttons {

        .btn {
          width: 140px;
        }
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        bottom: 15px;
        right: 15px;
        left: 15px;
        .btnInicial {
          color: transparent;
        }


      }
    }
  }
}
</style>
