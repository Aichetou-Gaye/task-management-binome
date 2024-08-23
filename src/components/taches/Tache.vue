<template>
  <div class="container">
    <h3>Gestion des Tâches :</h3>
    <div class="d-flex justify-content-between mb-3">
      <router-link to="/ajouTache" class="btn btn-primary">
        Ajouter une Tâche
      </router-link>
      <router-link to="/listeTache" class="btn btn-secondary">
        Voir la Liste des Tâches
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { useGestionStore } from '@/stores';

const store = useGestionStore();
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
}
</style>
