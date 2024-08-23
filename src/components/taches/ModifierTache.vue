<template>
  <div class="container">
    <h1>Modifier une tâche :</h1>
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onSubmit">
      <div class="col-sm-3">
        <label for="nom">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          v-model="nom"
          required
        />
      </div>
      <div class="col-sm-3">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="description"
          required
        />
      </div>
      <div class="col-sm-2">
        <label for="dateDebut">Date de début</label>
        <input
          type="date"
          class="form-control"
          id="dateDebut"
          v-model="dateDebut"
          required
        />
      </div>
      <div class="col-sm-2">
        <label for="dateFin">Date de fin</label>
        <input
          type="date"
          class="form-control"
          id="dateFin"
          v-model="dateFin"
          required
        />
      </div>
      <div class="col-sm-2">
        <label for="projet">Projet</label>
        <select
          class="form-select"
          id="projet"
          v-model="selectedProjet"
        >
          <option v-for="projet in projets" :key="projet.id" :value="projet.id">
            {{ projet.nom }}
          </option>
        </select>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn mt-4 btn-primary">Mettre à jour</button>
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
const selectedProjet = ref(null);

const tacheId = route.params.id; // Assume the task ID is passed as a route parameter

onMounted(() => {
  const tache = store.getTacheById(tacheId);
  if (tache) {
    nom.value = tache.nom;
    description.value = tache.description;
    dateDebut.value = tache.dateDebut;
    dateFin.value = tache.dateFin;
    selectedProjet.value = tache.projetId;
  }
});

const onSubmit = () => {
  const updatedTache = {
    id: tacheId,
    nom: nom.value,
    description: description.value,
    dateDebut: dateDebut.value,
    dateFin: dateFin.value,
    projetId: selectedProjet.value
  };
  
  store.updateTache(tacheId, updatedTache);
  router.push('/listeTache'); // Redirect to task list after update
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
