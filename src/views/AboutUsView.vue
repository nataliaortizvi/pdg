<template>
  <section>
    <div class="header__title">
      <img src="../../public/icons/aboutUs.svg" />
      <h1 class="titlesStyle --pink">Nosotros</h1>
    </div>
    <div class="containerAbout">
      <strong><p class="tagline">Validata, tu guía y ayuda para validar hipótesis.</p></strong>
      <div class="containerAbout__bodytext">
        <p class="containerAbout__text">
          Las investigaciones en el área creativa necesitan una o varias
          hipótesis que deben ser validadas, y este proceso en ocaciones puede
          ser confuso para el investigador. Es por esto, que diseñamos
          <strong class="strongName">Validata,</strong>
          una plataforma pensada para que las personas que trabajan en el campo
          creativo pueda realizar validaciones de tipo cualitativo, utilizando
          herramientas estadísticas.
        </p>
        <p class="containerAbout__text">
          <strong class="strongName">Validata</strong> cuenta con dos momentos
          claves en los que le aportará al investigador las herramientas
          necesarias para realizar su proceso de validación:
        </p>
        <div class="containerAbout__list">
          <ul>
            <li>
              <p class="text">
                El primero, será una guía para el investigador durante el
                protocolo de investigación, donde se le explicarán pasos
                importantes, como formular hipótesis alternativas y nula,
                identificar la variable, conocer formas de medición de la
                variable, definir la muestra, planificar el experimento para la
                recolección de datos y seleccionar el tipo de análisis
                estádistico que permita validar según lo definido anteriormente.
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p class="">
                El segundo, es la fase de análisis, donde al obtener los datos y
                calcularlos en la calculadoras estadística del tipo de análisis,
                <strong class="strongName">Validata</strong> le brindará al
                investigador una explicación de los resultados y finalmente una
                conclusión basada en su hipótesis alternativa y nula y los
                resultados estádisticos obtenidos, para así presentar su
                investigación validada.
              </p>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <div class="team">
      <h1 class="titlesStyle">Equipo</h1>
      <div class="containerimg">
        <div class="containerimg__eachImg">
          <img
            class="containerimg__img"
            src="../../public/imgs/javier.png"
            alt=""
          />
          <strong><p>Javier Aguirre</p></strong>
          <p>Lead</p>
        </div>
        <div class="containerimg__eachImg">
          <img
            class="containerimg__img"
            src="../../public/imgs/natalia.png"
            alt=""
          />
          <strong><p>Natalia Ortiz</p></strong>
          <p>Diseñadora de Medios Interactivos</p>
        </div>
        <div class="containerimg__eachImg">
          <img
            class="containerimg__img"
            src="../../public/imgs/matt.png"
            alt=""
          />
          <strong><p>Matheus Vidarte</p></strong>
          <p>Diseñador de Medios Interactivos</p>
        </div>
      </div>
    </div>
  </section>
</template>
  
  
<script>
</script>
  
  
<style lang="scss" scoped>
@import "src/assets/main.scss";

.strongName {
  color: $SecondPink;
}
section {
  padding: 30px;
  display: flex;
  flex-direction: column;

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

  .containerAbout {
    display: flex;
    flex-direction: column;
    align-items: center;

    .tagline {
      font-size: $BodyTextSize2;
      color: $ThirdViolet;
      font-style: italic;
      margin: 50px 0px;
      width: 100%;
    }

    &__bodytext {
      margin: 0px 100px;
      color: $MainColorBlue;
      text-align: justify;
    }

    &__text {
      margin-bottom: 20px;
    }

    &__list {
      padding-left: 30px;

      .text {
        margin-bottom: 20px;
      }
    }
  }

  .team {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .containerimg {
      display: flex;
      flex-direction: row;
      gap: 100px;
      margin-top: 30px;
      background-color: $Background2;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      padding: 50px 50px 40px 50px;

      &__eachImg {
        text-align: center;
      }

      &__img {
        width: 200px;
        height: 200px;
        background-color: $White;
        border-radius: 20px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  section {
    padding: 20px;

    .containerAbout {
      &__bodytext {
      margin: 0px;
    }

    &__list {
      padding-left: 20px;

    }
    }
    .team {
      .containerimg {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 50px 20px 40px 20px;
        width: 100%;
      }
    }
  }

  
}
</style>