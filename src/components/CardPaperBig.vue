    
<script>
export default {
  props: {
    currentResume: {},
  },

  data() {
    return {
      goToExample: false,
    }
  },

  methods: {
    showExample() {
      this.goToExample = true
    },

    hideExample() {
      this.goToExample = false
    }
  }
};
</script>

<template>
  <section class="resume" v-if="!goToExample">
    <div class="resume__title">
      <h1>{{ this.currentResume.title }}</h1>
    </div>
    <div class="resume__definition">
      <p>
        <strong>{{ this.currentResume.definition }}</strong>
      </p>
    </div>
    <div class="resume__requirements">
      <div class="requirementsText">
        <p class="requirementsText__definition">
          {{ this.currentResume.requirement }}
        </p>
        <div class="requirementsText__hereIsTheFormula">
          <strong>
            <ul>
              <li>Entendiendo esta definición,</li>
              <li class="important2">aquí te presentamos la formula:</li>
            </ul>
          </strong>
        </div>
      </div>
      <img class="imgDefinition" :src="this.currentResume.image.url" />
    </div>
    <div class="resume__formula">
      <strong
        ><p>{{ this.currentResume.formula }}</p></strong
      >
    </div>
    <div class="resume__definitionFormula">
      <strong><p>Donde:</p></strong>
      <p>{{ this.currentResume.formulameaning }}</p>
    </div>
    <div class="resume__introTextContect">
      <strong>
        <ul>
          <li>Dimensiones de la variable:</li>
        </ul>
      </strong>
      <p></p>
    </div>
    <div class="resume__context">
      <p>{{ this.currentResume.context }}</p>
    </div>
    <div class="resume_nextStep">
      <strong
        ><p>
          Entendiendo la formula y dimensiones de la confianza. Podemos ir al
          siguiente paso:
        </p></strong
      >
    </div>
  </section>

  <section class="resume" v-else>
    <div class="resume__title">
      <h1>Ejemplo</h1>
    </div>
    <div class="resume__definition">
      <p>{{this.currentResume.exampleContext}}</p>
    </div>
    <div class="resume__subtitle">
      <strong>
        <ul>
          <li>Recordemos la formula:</li>
        </ul>
      </strong>
    </div>
    <div class="resume__formula">
      <strong>
        <p>{{ this.currentResume.formula }}</p>
      </strong>
    </div>
    <div class="resume__definitionFormula">
      <strong><p>Donde:</p></strong>
      <p>{{this.currentResume.eachFormulaVariable}}</p>
    </div>
    <div class="resume__subtitle">
      <strong>
        <ul>
          <li>Experimento:</li>
        </ul>
      </strong>
    </div>
    <div class="resume__definitionFormula">
      <p class="descriptionExperiment">{{this.currentResume.descriptionExperiment}}</p>
      <p>{{this.currentResume.developExperiment}}</p>
    </div>
    <div class="resume__definitionFormula">
      <strong><p>Siguiente paso:</p></strong>
      <p>{{this.currentResume.conclusionExperiment}}</p>
    </div>
  </section>


  <div class="resume__btns">
    <button class="btn --pink" @click="showExample" v-if="!goToExample">Ver ejemplo</button>
    <button class="btn --pink" @click="hideExample" v-else>Volver</button>
    <RouterLink to="/analisis">
      <button class="btn --pink">Ir a tipos de análisis</button>
    </RouterLink>
    <a class="linkPaper"
      href="https://www.interaction-design.org/literature/article/trust-building-the-bridge-to-our-users"
      target="_blank"
      >Leer artículo completo</a
    >
  </div>
</template>

<style lang="scss">
@import "src/assets/main.scss";

.resume {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  padding: 30px;

  h1 {
    font-size: $TitleSize;
    color: $SecondPink;
  }
  p {
    color: $MainColorBlue;
  }
  &__title {
    text-align: center;
    margin-bottom: 20px;
  }

  &__definition {
    text-align: center;
    width: 700px;
    margin-bottom: 30px;
  }

  &__requirements {
    display: flex;
    flex-direction: row;

    .requirementsText {
      &__definition {
        margin: 60px 0px 30px 0px;
      }
      &__hereIsTheFormula {
        padding-left: 30px;
        font-size: $BodyTextSize2;
        ul {
          color: $MainColorBlue;
        }
        .important2 {
          list-style-type: none;
          color: $SecondPink;
        }
      }
    }

    .imgDefinition {
      margin-left: 30px;
      width: 300px;
      border-radius: 10px;
    }
  }

  &__formula {
    margin: 30px 0px;
    font-size: $SubtitleSize;
    p {
      color: $ThirdViolet;
    }
  }

  &__definitionFormula {
    padding: 0px 30px 30px 30px;
    text-align: start;

    .descriptionExperiment {
      margin: 20px 0px;
    }
  }

  &__introTextContect {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 30px;
    ul {
      color: $MainColorBlue;
    }
  }

  &__context {
    padding: 20px 30px 30px 30px;
    text-align: start;
  }

  &__btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 30px;

    .linkPaper {
      text-decoration: underline;
    }
  }

  &__subtitle {
    font-size: $BodyTextSize2;
    color: $MainColorBlue;
    width: 100%;
    padding-left:30px;

  }
}
</style>