<template>
  <div class="container">
    <Tache />
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th scope="col">ID de la tâche</th>
          <th scope="col">Nom</th>
          <th scope="col">Description</th>
          <th scope="col">Date de début</th>
          <th scope="col">Date de fin</th>
          <th scope="col">Nom du projet</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tache, index) in store.taches" :key="index">
          <td>{{ tache.id }}</td>
          <td>{{ tache.nom }}</td>
          <td>{{ tache.description }}</td>
          <td>{{ tache.dateDebut }}</td>
          <td>{{ tache.dateFin }}</td>
          <td>{{ tache.projet }}</td>
          <td>
            <button class="btn btn-xs btn-danger" @click="destroy(index)">
              <ion-icon name="trash"></ion-icon>
            </button>
            <router-link to="/modifierTache" class="btn btn-xs btn-primary">
              <ion-icon name="eyedrop"></ion-icon>
            </router-link>
            <button class="btn btn-xs btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="view(tache)">
              <ion-icon name="eye"></ion-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-danger" id="exampleModalLabel">Informations sur la tâche</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Nom : {{ tacheShow?.nom }}</p>
            <p>Description : {{ tacheShow?.description }}</p>
            <p>Date de début : {{ tacheShow?.dateDebut }}</p>
            <p>Date de fin : {{ tacheShow?.dateFin }}</p>
            <p>Projet : {{ tacheShow?.projet }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useGestionStore } from '@/stores';
import Tache from './Tache.vue';

const store = useGestionStore();
const tacheShow = ref(null); 

const destroy = (index) => {
    store.delTache(index);  
};


const view = (tache) => {
  tacheShow.value = tache;  
};
</script>

<style scoped>
</style>
