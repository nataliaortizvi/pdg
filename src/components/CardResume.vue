    
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

};
</script>

<template>
    <h1>{{this.title}}</h1>
    <b>{{this.definition}}</b>
    <b>{{this.requirements}}</b>
    <b>{{this.formula}}</b>
    <b>{{this.definitionFormula}}</b>
    <b>{{this.context}}</b>
</template>

<style>

</style>