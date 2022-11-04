<template>
  <div :class="classes.block">
    <InputComponent
        :value="searchQuery"
        @keyup="changeField"
        placeholder="Поиск"
    />
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";

import classes from '@/components/SearchComponent/SearchComponent.module.scss'
import InputComponent from "@/components/Controls/InputComponent.vue";
import {useSearchStore} from "@/store/search";

const search = useSearchStore()

const searchQuery = ref(search.defaultValue)
const interval = ref(0)
const changeField = (value: string) => {
  searchQuery.value = value
}

onMounted(() => {
  if(searchQuery.value){
    search.startInput()
    search.getItems(searchQuery.value)
  }
})

watch(searchQuery, () => {
  search.startInput()
  search.clearItems()
  if(interval.value){
    clearTimeout(interval.value)
  }
  interval.value = setTimeout(() => {
    search.getItems(searchQuery.value)
  }, 700)
})
</script>
