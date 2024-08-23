<template>
  <div class="container">
    <h3 class="text-center border-bottom mb-2">Gestion des Tâches :</h3>
    <router-link to="/ajouTache" class="btn mt-3">+ Ajouter</router-link>

    <h4 class="mt-3 mb-4">Listes des tâches : </h4>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  margin-top: 20px;
}

h3 {
  margin-bottom: 20px;
}

.btn {
  margin-right: 10px;
  color: #fff;
  background-color: #8474a4;
  border: none;
}
</style>
