<script>
export default {
  props: {
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
    <div class="container__title">
      <h1 class="titlesStyle --pink">{{ this.title }}</h1>
    </div>
    <div>
      <img :src="{ img }" />
    </div>
    <div class="container__definition">
      <strong
        ><p>{{ this.descrip }}</p></strong
      >
    </div>
    <strong><p class="subtitle">¿Qué es?</p></strong>
    <div class="container__what">
      <p>{{ this.what }}</p>
    </div>
    <strong><p class="subtitle">¿Cómo realizarlo?</p></strong>
    <div class="container__how">
      <p v-for="one in how" :key="one">
        {{ one.info }}
      </p>
    </div>
    <strong><p class="subtitle">Ejemplo</p></strong>
    <div class="container__example">
      <p>{{ this.example }}</p>
    </div>

    <p>Si deseas complementar, mira el siguiente video tutorial:</p>
    <strong><a :href="{ link }" class="container__link">Clic aquí</a></strong>

    <div class="container__calculator">
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
    </div>
  </section>
</template>

<style lang="scss">
@import "src/assets/main.scss";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  padding: 30px;

  &__example {
    margin-bottom: 30px;
  }

  &__link {
    text-decoration: none;
    color: $MainColorBlue;
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
    margin-top: 30px;
  }
}
</style>