<template>
  <div :class="classes.result_list">
    <template v-if="search.searchState !== 'start'">
      <div v-if="search.searchState === 'loading'">
        <LoaderComponent/>
      </div>
      <template v-else>
        <template v-if="search.items.length">
        <ResultItemComponent :key="item.name" v-for="item in search.items" :name="item.name" :type="item.type"/>
        </template>
        <div :class="classes.result_list_empty" v-else>
          Ничего не найдено
        </div>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import classes from '@/components/ResultListComponent/ResultListComponent.module.scss'

import {useSearchStore} from "@/store/search";
import ResultItemComponent from "@/components/ResultItemComponent/ResultItemComponent.vue";
import LoaderComponent from "@/components/Loader/LoaderComponent.vue";

const search = useSearchStore()

</script>