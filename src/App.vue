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

