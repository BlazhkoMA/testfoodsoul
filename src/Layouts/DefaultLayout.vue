<template>
  <div :class="classes.layout">
    <Header/>
    <div :class="classes.page_content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import classes from '@/Layouts/DefaultLayout.module.scss'
import Header from '@/components/Header/HeaderComponent'
</script>