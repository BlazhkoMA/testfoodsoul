<template>
  <div :class="classes.result_item">
    <div :class="classes.result_item_title">{{props.name}}</div>
    <div :class="classes.result_item_type">{{props.type}}</div>
  </div>
</template>

<script setup lang="ts">
import classes from '@/components/ResultItemComponent/ResultItemComponent.module.scss'
import {defineProps} from "vue";

const props = defineProps({
      name: String,
      type: String
    }
)

</script>