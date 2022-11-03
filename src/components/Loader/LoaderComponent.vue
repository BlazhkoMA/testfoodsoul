<template>
  <div :class="classes.loader_wrap">
    <div :class="classes.loader"><span></span></div>
  </div>
</template>

<script setup lang="ts">
import classes from '@/components/Loader/LoaderComponent.module.scss'
</script>