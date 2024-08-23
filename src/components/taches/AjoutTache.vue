<template>
  <div class="container">
    <h4 class="text-center mb-4">Ajoutez une tâche :</h4>
    <form class="row align-items-center" @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" id="nom" v-model="nom" required />
      </div>
      <div class="mb-3">
        <label for="Description">Description</label>
        <input type="text" class="form-control" id="description" v-model="description" required />
      </div>
      <div class="mb-3">
        <label for="date_debut">Date de début</label>
        <input type="date" class="form-control" id="date_debut" v-model="dateDebut" required />
      </div>

      <div class="mb-3">
        <label for="date_fin">Date de fin</label>
        <input type="date" class="form-control" id="date_fin" v-model="dateFin" required />
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
        <button type="submit" class="btn btn-success">
          Ajouter
        </button>
        <router-link to="/tache" class="btn btn-secondary">Fermer</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGestionStore } from "@/stores";

const store = useGestionStore();

const id = ref(1)
const nom = ref("");
const description = ref("");
const dateDebut = ref("");
const dateFin = ref("");
const projet = ref("");


const onSubmit = () => {
  store.addTache({
    id: id.value++,
    nom: nom.value,
    description: description.value,
    dateDebut: dateDebut.value,
    dateFin: dateFin.value,
    projet: projet.value
  });


  nom.value = "";
  description.value = "";
  dateDebut.value = "";
  dateFin.value = "";
  projet.value = "";
};
</script>

<style scoped>
form {
  width: 500px;
  margin: auto;
}
</style>
