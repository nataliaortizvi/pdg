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
            "Esta hipótesis debe tener al menos una variable que es la que necesitas medir.",
          descripThree: 'Ejemplo',
          descripFour: 'Hipótesis: Mientras más alta este del suelo una manzana, su velocidad de caida es mayor.', 
          descripFive: 'Variable: Velocidad',
        },
        {
          num: 2,
          paso: "Protocolo de investigación:",
          nombre: "Definir hipótesis nula y alternativa",
          descripOne:
            "Cuando definas la varible y construyas tu hipótesis debes definir tu hipótesis nula y su alternativa. ",
          descripTwo:
            "La hipótesis alternativa es el enunciado de lo que quieres afirmar o demostrar con la validación.",
          descripThree:
            "La hipótesis nula es lo contrario a la hipótesis alternartiva",
          descripFour: "Las manzanas caen del árbol más rápido si estan más altas.",
          descripFive: "Las manzanas NO caen del árbol más rápido si estan más altas",
          descripSix: "Ejemplo",
        },
        {
          num: 3,
          paso: "Protocolo de investigación:",
          nombre: "¿Cómo medir la variable?",
          descripOne:
            "Cuando tengas las hipótesis definidas, ve a la barra de búsqueda de Validata y escribe la variable que necesitas medir",
          descripTwo: "Así conocerás diferentes formas de medir esa variable",
          descripThree: "Ejemplo",
          descripFour: "La velocidad es el cambio de posición dividido el tiempo",
          descripFive:
            "Velocidad: cambio de posición / tiempo",
        },
        {
          num: 4,
          paso: "Protocolo de investigación:",
          nombre: "Definir tipo de análisis y muestra",
          descripOne:
            "Validata te mostrará cuál será el mejor tipo de análisis para validar la hipótesis y así puedas desarrollar el experimento y obtener los datos a analizar.",
          descripTwo: "Ejemplo",
          descripThree:
            "Puedes hacer un Paired T-test con dos grupos de igual cantidad de manzanas, uno que esta más alto que el otro y recolectar los datos con cada uno",
          descripFour: "Paired T-test",
        },
        {
          num: 5,
          paso: "Fase de analisis:",
          nombre: "Calculadora y resultados",
          descripOne: "En Validata encontrarás una calculadora especializada que realizará los calculos automáticos.",
          descripTwo: "Solo tendrás que ingresar los datos recolectados y presionar:"
        },
        {
          num: 6,
          paso: "Fase de analisis:",
          nombre: "Conclusión",
          descripOne: "Validata te ayudará a interpretar los datos y entenderlos para que puedas presentarlos y dar una conclusión en tu investigación",
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

  methods: {
    next() {
      this.currentstep++;
    },
    back() {
      this.currentstep--;
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
          @click="()=>{this.currentstep = step}"
        >
          <a>{{ step }}</a>
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
              <strong><p class="descripThree">{{ step.descripThree}}</p></strong>
              <p>{{ step.descripFour}}</p>
              <p> {{step.descripFive}} </p>
            </div>
          </div>
          <div class="buttons buttons--buttonOne">
            <button class="btn btn--small" @click="back" v-if="!isFirstStep">
              Anterior
            </button>
            <button class="btn btn--small" @click="next" v-if="!isLastStep">
              Siguiente
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
              <p class="Left">{{ step.descripFour }}</p>
              <div class="line"></div>
              <p class="Right">{{ step.descripFive }}</p>
            </div>
          </div>
          <div class="buttons buttons--buttonTwo">
            <button class="btn btn--small" @click="back" v-if="!isFirstStep">
              Anterior
            </button>
            <button class="btn btn--small" @click="next" v-if="!isLastStep">
              Siguiente
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
            <p>
              <strong>{{ step.descripThree }}</strong>
            </p>
            <div class="ejemploInput">
              <input
                class="input input--desabled"
                id="search"
                placeholder="Velocidad"
              />
              <button class="btn btn--disabled">Buscar</button>
            </div>
            <p>{{ step.descripFour }}</p>
            <p>
              <strong>{{ step.descripFive }}</strong>
            </p>
          </div>

          <div class="buttons buttons--buttonThree">
            <button class="btn btn--small" @click="back" v-if="!isFirstStep">
              Anterior
            </button>
            <button class="btn btn--small" @click="next" v-if="!isLastStep">
              Siguiente
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
          </div>
          <div class="buttons buttons--buttonFour">
            <button class="btn btn--small" @click="back" v-if="!isFirstStep">
              Anterior
            </button>
            <button class="btn btn--small" @click="next" v-if="!isLastStep">
              Siguiente
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
            <p class="textIntro__texts">{{step.descripTwo}}</p>
            <button class="btn btn--disabled">Calcular</button>
          </div>
         
          <div class="buttons buttons--buttonFive">
            <button class="btn btn--small" @click="back" v-if="!isFirstStep">
              Anterior
            </button>
            <button class="btn btn--small" @click="next" v-if="!isLastStep">
              Siguiente
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
         
          <div class="buttons buttons--buttonSix">
            <button class="btn btn--small" @click="back" v-if="!isFirstStep">
              Anterior
            </button>
            <button class="btn btn--small" @click="next" v-if="!isLastStep">
              Siguiente
            </button>
            <button class="btn btn--small" v-if="!isFirstStep">
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

  .progress {
    display: flex;
    padding: 30px;
    //background-color: rgb(150, 212, 238);

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
        }
      }

      .active {
        background-color: $ThirdViolet;
        border-color: $ThirdViolet;
        color: $White;
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
    width: 900px;
    position: relative;
    padding: 30px;
    margin-right: 30px;

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
        margin-top: 20px;
      }

      .cardInfo__ejemploOne {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid $SecondPink;
        padding: 10px;
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
        margin-top: 20px;
        width: 400px;
        text-align: center;
        color: $MainColorBlue;
      }

      .gridText {
        margin-top: 20px;
        color: $MainColorBlue;

        &__top {
          display: flex;
          gap: 50px;
        }

        &__center {
          display: flex;
          justify-content: center;
          margin: 10px 0px 20px 0px;
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
          height: 70px;
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
          border: 1px solid $SecondPink;
          padding: 10px;
          .ejemploInput {
            input {
              margin: 10px;
              width: 350px;
            }

            ::placeholder {
              padding-left: 10px;
            }
          }
        }
      }

      .textIntro {
        display: flex;
        flex-direction: column;
        justify-items: center;
        margin-top: 20px;
        width: 450px;
        text-align: center;

        &__text {
          margin-bottom: 20px;
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
        margin: 70px 0px 20px 0px;
      }
      
      .cardInfo__ejemplo {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid $SecondPink;
        padding: 10px;

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
        text-align: center;
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
        margin-top: 70px;
        &__text {
          width: 400px;
          margin-bottom: 20px;
        }
        &__texts {
          margin-bottom: 10px;
        }
      }
    }

    .stepSixShow {
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
        width: 500px;
        margin-top: 140px;
      }      

    }

    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;

      &--buttonOne {
        margin-top: 50px;
      }

      &--buttonTwo {
        margin-top: 30px;
      }

      &--buttonThree {
        margin-top: 30px;
      }

      &--buttonFour {
        margin-top: 52px;
      }

      &--buttonFive {
        margin-top: 98px;
      }

      &--buttonSix {
        margin-top: 122px;
      }
    }
  }
}
</style>
