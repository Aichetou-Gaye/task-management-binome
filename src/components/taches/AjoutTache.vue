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
          id="Description"
          v-model="description"
          required
        />
      </div>
      <div class="col-sm-2">
        <label for="date">Date de début</label>
        <input
          type="date"
          class="form-control"
          id="date"
          v-model="dateDebut"
          required
        />
      </div>

      <div class="col-sm-2">
        <label for="date">Date de fin</label>
        <input
          type="Date"
          class="form-control"
          id="date_fin"
          v-model="dateFin"
          required
        />
      </div>

      <div class="col-sm-2">
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="col-auto">
        <button type="submit" class="btn mt-4 btn-primary">Ajouter</button>
      </div>
    </form>
  </div>
</template>
<script setup>
// import { ref, defineExpose } from "vue";
import { useGestionStore } from "@/stores";
import { ref } from "vue";

const store = useGestionStore();

const nom = ref("");
const description = ref("");
const dateDebut = ref("");
const dateFin = ref("");

const onSubmit = () => {
  store.addTache(nom, description, dateDebut, dateFin);

  nom.value = "";
  description.value = "";
  dateDebut.value = "";
  dateFin.value = "";
};
</script>

<style scoped></style>
