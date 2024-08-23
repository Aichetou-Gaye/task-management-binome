<template>
  <div class="container">
    <h1>Modifier une tâche :</h1>
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onUpdate">
      <div class="mb-3">
        <label for="nom">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          v-model="nom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="description"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dateDebut">Date de début</label>
        <input
          type="date"
          class="form-control"
          id="dateDebut"
          v-model="dateDebut"
          required
        />
      </div>
      <div class="mb-3">
        <label for="dateFin">Date de fin</label>
        <input
          type="date"
          class="form-control"
          id="dateFin"
          v-model="dateFin"
          required
        />
      </div>
      <div class="mb-3">
        <label for="projet">Projet</label>
        <select class="form-select" id="projet" v-model="projet" required>
          <option v-for="projet in store.projets" :key="projet.id" :value="projet.nom">
            {{ projet.nom }}
          </option>
        </select>
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn btn-success">
          Modifier
        </button>
        <router-link to="/tache" class="btn btn btn-secondary">Terminer</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGestionStore } from '@/stores';

const store = useGestionStore();
const route = useRoute();
const router = useRouter();

const nom = ref('');
const description = ref('');
const dateDebut = ref('');
const dateFin = ref('');
const projet = ref('');

const tacheId = route.params.id; 

onMounted(() => {
  const tache = store.getTacheById(tacheId);
  if (tache) {
    nom.value = tache.nom;
    description.value = tache.description;
    dateDebut.value = tache.dateDebut;
    dateFin.value = tache.dateFin;
    projet.value = tache.projet;
  }
});

const onUpdate = () => {
  updatedTache = {
    id: tacheId,
    nom: nom.value,
    description: description.value,
    dateDebut: dateDebut.value,
    dateFin: dateFin.value,
    projet: projet.value
  };
  
  store.updateTache(tacheId, updatedTache);
};
</script>

<style scoped>
form {
  width: 500px;
  margin: auto;
}
</style>
