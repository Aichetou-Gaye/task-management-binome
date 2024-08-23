<template>
  <div class="container">
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom</th>
          <th scope="col">Description</th>
          <th scope="col">Date de début</th>
          <th scope="col">Date de fin</th>
          <!-- <th scope="col">Id Tâche</th> -->
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tache, index) in taches" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ tache.nom }}</td>
          <td>{{ tache.description }}</td>
          <td>{{ tache.dateDebut }}</td>
          <td>{{ tache.dateFin }}</td>
          <td>{{ tache.id }}</td>
          <td>
            <button class="btn btn-xs btn-danger" @click="destroy(tache.id)">
              <ion-icon name="trash"></ion-icon>
            </button>
            <button class="btn btn-xs btn-primary" @click="edit(tache.id)">
              <ion-icon name="eyedrop"></ion-icon>
            </button>
            <button class="btn btn-xs btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="view(tache)">
              <ion-icon name="eye"></ion-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal pour voir les détails de la tâche -->
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
            <!-- <p>Id tache : {{ tacheShow?.id }}</p> -->
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
import { useRouter } from 'vue-router';

const store = useGestionStore();
const router = useRouter();
const tacheShow = ref(null);  // Pour stocker la tâche sélectionnée pour l'affichage

const taches = store.taches;  // Accéder aux tâches depuis le store

const destroy = (id) => {
  if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche?")) {
    store.deleteTache(id);  // Appeler la méthode pour supprimer la tâche
  }
};

const edit = (id) => {
  router.push(`/tasks/${id}/edit`);  // Rediriger vers la page d'édition de la tâche
};

const view = (tache) => {
  tacheShow.value = tache;  // Mettre à jour la tâche à afficher dans le modal
};
</script>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>
