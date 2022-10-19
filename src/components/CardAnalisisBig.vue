<script>
export default {

    props: {
        img: String,
        title: String,
        descrip: String,
        what: String,
        how: String,
  },

}
</script>

<template>
    <section class="container">
        <div class="container__title">
            <h1 class="titlesStyle --pink">{{this.title}}</h1>
        </div>
        <div class="container__definition">
            <strong><p>{{this.descrip}}</p></strong>
        </div>
        <strong><p>¿Qué es?</p></strong>
        <div class="container__what">
            <p>{{this.what}}</p>
        </div>
        <strong><p>¿Cómo realizarlo?</p></strong>
        <div class="container__how">
            <p v-for="one in how" :key="one">
               {{one.info}}</p>
        </div>


    </section>
  
</template>

<style lang="scss">
@import "src/assets/main.scss";

.container {
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    padding: 30px;

    &__definition {
        margin-bottom: 30px;
    }

    &__what {
        margin-bottom:30px;
    }
}

</style>