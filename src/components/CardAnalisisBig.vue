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
            <h1>{{this.title}}</h1>
        </div>
        <div class="container__definition">
            <p>{{this.descrip}}</p>
        </div>
        <div class="container__what">
            <p>{{this.what}}</p>
        </div>
        <div class="container__how">
            <p>{{this.how}}</p>
        </div>


    </section>
  
</template>

<style>

</style>