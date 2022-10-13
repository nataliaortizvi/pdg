    
<script>
export default {

    props: {
        title: String,
        definition: String,
        requirements: String,
        formula: String,
        definitionFormula: String,
        context: String,
  },

  methods: {
    prueba() {
      console.log(this.title)
    },
  },
};
</script>

<template>
    <h1>{{this.title}}</h1>
    <h1>hola</h1>
    <button @click="pruebaa">prueba</button>
</template>

<style>

</style>