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
        <div class="infoType">
          <strong><p class="subtitle">¿Qué es?</p></strong>
          <p>{{ this.currentAnalisis.what }}</p>
        </div>
        <div class="infoType">
          <strong><p class="subtitle">¿Cómo realizarlo?</p></strong>
          <p v-for="one in this.currentAnalisis.how" :key="one">
            {{ one.info }}
          </p>
        </div>
        <div class="infoType">
          <strong><p class="subtitle">Ejemplo</p></strong>
          <p>{{ this.currentAnalisis.example }}</p>
        </div>
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
      <div class="buttons">
        <button class="btn">
          <a :href="this.currentAnalisis.calculatorlink" target="_blank"
            >Ir a calculadora</a
          >
        </button>
        <RouterLink to="/interpretation/">
          <button class="btn" @click="p">Interpretar datos</button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "src/assets/main.scss";

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70vw;
  padding: 10px 30px;
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

  .cardBody {
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: $Background;
    border-radius: 20px;
    padding: 30px 40px;
    margin-top: 20px;
    gap: 20px;

    .subtitle {
      font-size: $BodyTextSize2;
      color: $ThirdViolet;
      margin: 0px 0px 3px 0px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 20px;

    .btn {
      margin: 20px 0px 10px 0px;

      a {
        color: $Background;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .container {
    padding: 10px 10px;
    width: 100%;

    .buttons {
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;

      .btn {
        margin: 0px;
      }
    }

    .cardBody {
      width: 100%;
      padding: 15px 15px;
    }
  }
}
</style>