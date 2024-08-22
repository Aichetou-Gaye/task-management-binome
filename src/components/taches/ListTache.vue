<template>
  <div class="container">
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">mon</th>
          <th scope="col">description</th>
          <th scope="col">Date de début</th>
          <th scope="col">Date de fin</th>
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

          <td>
            <button class="btn btn-xs btn-danger" @click="destroy(index)"><ion-icon name="trash"></ion-icon></button>
            <button class="btn btn-xs btn-primary" @click="edit(index)"><ion-icon name="eyedrop"></ion-icon></button>
            <button class="btn btn-xs btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="view(tache)"><ion-icon
                name="eye"></ion-icon></button>
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
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>


<style scoped>

</style>
