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
import {ref, watch} from "vue";

import classes from '@/components/SearchComponent/SearchComponent.module.scss'
import InputComponent from "@/components/Controls/InputComponent.vue";
import {useSearchStore} from "@/store/search";

const search = useSearchStore()

const searchQuery = ref('')
const interval = ref(0)
const changeField = (value: string) => {
  searchQuery.value = value
}

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