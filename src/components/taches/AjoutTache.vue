<template>
  <div class="container">
    <h1>Ajoutez une tâche :</h1>
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
        <label for="Description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="description"
          required
        />
      </div>
      <div class="col-sm-2">
        <label for="date_debut">Date de début</label>
        <input
          type="date"
          class="form-control"
          id="date_debut"
          v-model="dateDebut"
          required
        />
      </div>

      <div class="col-sm-2">
        <label for="date_fin">Date de fin</label>
        <input
          type="date"
          class="form-control"
          id="date_fin"
          v-model="dateFin"
          required
        />
      </div>

      <div class="col-sm-2">
        <label for="projet">Projet</label>
        <select 
          class="form-select" 
          id="projet" 
          v-model="projet" 
          required
        >
          <option >Sélectionnez un projet</option>
          <option v-for="projet in projets" :key="projet.id" :value="projet.nom">
            {{ projet.nom }}
          </option>
        </select>
      </div>

      <div class="col-auto">
        <button type="submit" class="btn mt-4 btn-primary">Ajouter</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGestionStore } from "@/stores";

const store = useGestionStore();

// const id = ref(1)
const nom = ref("");
const description = ref("");
const dateDebut = ref("");
const dateFin = ref("");
const projet = ref("");

const projets = ref([
  { id: 1, nom: "Projet A" },
  { id: 2, nom: "Projet B" },
  { id: 3, nom: "Projet C" },
  // Ajoutez ici les projets existants
]);

const onSubmit = () => {
 
  store.addTache({
    // id: id.value++,
  nom: nom.value, 
  description: description.value, 
  dateDebut: dateDebut.value,
   dateFin: dateFin.value, 
   projet: projet.value});

  // Réinitialiser les champs du formulaire
  nom.value = "";
  description.value = "";
  dateDebut.value = "";
  dateFin.value = "";
  projet.value = "";
};
</script>

<style scoped></style>
