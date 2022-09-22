<script>
export default {
  data() {
    return {
      currentstep: 1,
      steps: [
        {
          num: 1,
          paso: "Paso 1",
          nombre: "Hipótesis",
          descrip: "la info",
        },
        {
          num: 2,
          paso: "Paso 2",
          nombre: "Hipótesis nula y alternativa",
          descrip: "la info",
        },
        {
          num: 3,
          paso: "Paso 3",
          nombre: "Buscar la variable",
          descrip: "la info",
        },
        {
          num: 4,
          paso: "Paso 4",
          nombre: "Buscar la variable",
          descrip: "la info",
        },
        {
          num: 5,
          paso: "Paso 5",
          nombre: "Buscar la variable",
          descrip: "la info",
        },
        {
          num: 6,
          paso: "Paso 6",
          nombre: "Buscar la variable",
          descrip: "la info",
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
      arrayStep(x) {
        return this.x;
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
        <div v-if="currentstep === step.num">
          <h1>{{ step.paso }}</h1>
          <h3>{{ step.nombre }}</h3>
          <a>{{ step.descrip }}</a>
        </div>
      </div>

      <div class="buttons">
        <button class="btn btn--small" @click="back" v-if="!isFirstStep">
          Anterior
        </button>
        <button class="btn btn--small" @click="next" v-if="!isLastStep">
          Siguiente
        </button>
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
  padding: 20px;

  .progress {
    display: flex;
    padding: 20px;
    //background-color: rgb(150, 212, 238);

    .stillBar {
      height: 540px;
      width: 2px;
      margin-top: 5px;
      margin-left: 24px;
      position: absolute;
      background-color: rgb(178, 178, 178);
    }

    .progressCircles {
      display: flex;
      flex-direction: column;
      gap: 50px;

      .circle {
        height: 50px;
        width: 50px;
        border-radius: 50px;
        border-style: solid;
        border-width: 2px;
        border-color: rgb(178, 178, 178);
        transition: all 0.3s ease-in-out 0.4s;
        background-color: $Background;
        z-index: 10;
        color: rgb(178, 178, 178);
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
      margin-left: 24px;

      .animatedBar {
        width: 2px;
        height: 40px;
        transition: all 0.5s ease-in-out 0.1s;
      }
      .activeBar {
        height: 100px;
        background-color: $ThirdViolet;
      }
    }
  }

  .data {
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
    padding: 50px;
    background-color: $White;
    border-radius: 20px;
    width: 900px;
    height: 540px;

    .buttons {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
}
</style>
