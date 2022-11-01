<script>
export default {
  props: {
    currentAnalisis: {},
    img: String,
    title: String,
    descrip: String,
    what: String,
    how: String,
    example: String,
    link: String,
  },
};
</script>

<template>
  <section class="container">
    <div class="cardHeader">
      <h1 class="titlesStyle --pink">{{ this.currentAnalisis.title }}</h1>
      <img class="imgCard" :src="this.currentAnalisis.img" />
      <strong>
        <p>{{ this.currentAnalisis.descrip }}</p>
      </strong>

      <div class="cardBody">
        <strong><p class="subtitle">¿Qué es?</p></strong>
        <p>{{ this.currentAnalisis.what }}</p>
        <strong><p class="subtitle">¿Cómo realizarlo?</p></strong>
        <div>
          <p v-for="one in this.currentAnalisis.how" :key="one">
            {{ one.info }}
          </p>
        </div>
        <strong><p class="subtitle">Ejemplo</p></strong>
        <p>{{ this.currentAnalisis.example }}</p>
      </div>

      <p class="infoCard">
        Si deseas leer más, mira el siguiente video tutorial:
        <strong>
          <a
            :href="this.currentAnalisis.link"
            class="container__link"
            target="_blank"
            >Clic aquí
          </a>
        </strong>
      </p>
      <div>
        <button class="btn">
          <a :href="this.currentAnalisis.calculatorlink" target="_blank"
            >Ir a calculadora</a
          >
        </button>
      </div>
    </div>

    <!--div class="container__calculator">
      <strong><p class="subtitle">Ingresa tus datos</p></strong>
      <div class="inputs">
        <div class="inputs__each">
          <strong><label>Agrega los datos de x:</label></strong>
          <input type="number" for="valorX" class="valores valorX" />
        </div>
        <div class="inputs__each">
          <strong><label>Agrega los datos de y:</label></strong>
          <input type="number" class="valores valorY" />
        </div>
      </div>
      <button class="btn btnCalcular">Calcular</button>
    </div-->
  </section>
</template>

<style lang="scss">
@import "src/assets/main.scss";

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70vw;
  padding: 30px 70px;
  justify-content: center;

  .imgCard {
    display: flex;
    height: 40px;
    object-fit: contain;
    margin: 10px 0px;
  }

  .cardHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .infoCard {
      margin-top: 20px;
    }
  }

  &__link {
    color: $MainColorBlue;
    text-decoration: underline;
  }

  &__calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid $SecondPink;
    margin: 30px 0px;

    .inputs {
      display: flex;
      padding: 30px;
      gap: 20px;

      &__each {
        display: flex;
        flex-direction: column;
      }
    }

    .valores {
      height: 300px;
    }

    .btnCalcular {
      margin-bottom: 30px;
    }
  }

  .subtitle {
    font-size: $BodyTextSize2;
    color: $ThirdViolet;
    margin-top: 20px;
  }

  .btn {
    margin: 20px 0px 0px 0px;

    a {
      color: $Background;
    }
  }
}
</style>