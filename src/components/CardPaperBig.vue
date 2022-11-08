    
<script>
export default {

    props: {
        currentResume: {},
        /*title: String,
        author: String,
        year: String,
        definition: String,
        requirements: String,
        formula: String,
        definitionFormula: String,
        context: String,*/
  },

};
</script>

<template>
    <section class="resume">
        <div class="resume__title">
            <h1>{{this.currentResume.title}}</h1>
        </div>
        <div class="resume__definition">
            <p><strong>{{this.currentResume.definition}}</strong></p>
        </div>
        <div class="resume__requirements">
            <div class="requirementsText">
                <p class="requirementsText__definition">{{this.currentResume.requirement}}</p>
                <div class="requirementsText__hereIsTheFormula">
                    <strong>
                        <ul>
                            <li>Entendiendo esta definición,</li>
                            <li class="important2">aquí te presentamos la formula:</li>
                        </ul>
                    </strong>
                </div>
            </div>
            <img class="imgDefinition" src="../../public/imgs/trust.png">
        </div>  
        <div class="resume__formula">
            <strong><p>{{this.currentResume.formula}}</p></strong>
        </div>
        <div class="resume__definitionFormula">
            <strong><p>Donde:</p></strong>
            <p>{{this.currentResume.definitionFormula}}</p>
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
            <p>{{this.currentResume.context}}</p>
        </div>
        <div class="resume_nextStep">
            <strong><p>Entendiendo la formula y dimensiones de la confianza. Podemos ir al siguiente paso:</p></strong>
        </div>
        <div class="resume__btns">
            <button class="btn --pink">Ver ejemplo</button>
            <RouterLink to="/analisis">
                <button class="btn --pink">Ir a tipos de análisis</button>
            </RouterLink>
            <a href="https://www.interaction-design.org/literature/article/trust-building-the-bridge-to-our-users" target="_blank">Leer artículo completo</a>
        </div>
        
    </section>
</template>

<style lang="scss">
@import "src/assets/main.scss";

.resume {
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    padding: 30px;

    h1 {
        font-size: $TitleSize;
        color: $SecondPink;
    }
    p{
        color:$MainColorBlue;
    }
    &__title {
        text-align: center;
        margin-bottom: 20px;
    }

    &__definition {
        text-align: center;
        width: 600px;
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
                    color:$MainColorBlue;
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
        padding:0px 30px 30px 30px;
        text-align: start;
    }

    &__introTextContect {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-left: 30px;
        ul {
            color:$MainColorBlue;
        }
    }

    &__context {
        padding:20px 30px 30px 30px;
        text-align: start;
    }

    &__btns {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:20px;
        margin-top: 20px;
    }


}

</style>