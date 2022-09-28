<script>
//js

export default {
  props: {
    name: String,
    papers: {
      type: Array,
      default: () => ["title", "author", "about", "year"],
    },
    title: String,
    author: String,
    about: String,
    year: Number,
  },
};
</script>
            
              
<template>

    <section class="cardContainer" v-for="paper in papers" :key="paper.title">
      <p>{{paper.title}}</p>
      <!--h2 class="titleTxt">{{this.title}}</h2>
      <p class="authorTxt">{{this.author}}</p>
      <p class="aboutTxt">{{this.about}}</p>
      <p class="yearTxt">{{this.year}}</p-->

    </section>

</template>
            
                 
<style lang="scss" scoped>
@import "src/assets/main.scss";

.cardContainer {
    height: 200px;
    background-color: $White;
    border-radius: 20px;
    box-shadow: 0px 5px 10px 1px rgb(216, 216, 216);
    margin: 30px 40px;
    display: flex;
    flex-direction: column;
}

</style>