<template>
  <DefaultLayout>
    <SearchComponent/>
    <ResultListComponent/>
  </DefaultLayout>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
</style>

<script setup lang="ts">
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import SearchComponent from "@/components/SearchComponent/SearchComponent.vue";
import ResultListComponent from "@/components/ResultListComponent/ResultListComponent.vue";
</script>

<!--<template>-->
<!--  <div>-->

<!--    <div>{{input}}</div>-->
<!--    <input type="text" v-model="input"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--  name: 'App',-->
<!--  data: () => {-->
<!--    return {-->
<!--      input: '2'-->
<!--    }-->
<!--  },-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->
