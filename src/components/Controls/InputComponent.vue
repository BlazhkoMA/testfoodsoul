<template>
  <input
      type="text"
      :class="classes.input"
      @keyup="onKeyUp"
      :placeholder="props.placeholder"
      :value="props.value"
  />
</template>
<script setup lang="ts">
  import classes from '@/components/Controls/InputComponent.module.scss'

  import {defineEmits, defineProps} from "vue";

  const props = defineProps({
    value: String,
    placeholder: String || undefined
  })
  const emit = defineEmits(['keyup'])
  const onKeyUp = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('keyup', target.value)
  }

</script>