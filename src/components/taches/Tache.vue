<template>
  <AjoutTache class="border-bottom pb-4" @on-add="add"/>
  <ListTache />
</template>

<script setup>
import {ref} from 'vue'
import AjoutTache from './AjoutTache.vue';
import ListTache from './ListTache.vue';
</script>


<style scoped>

</style>
