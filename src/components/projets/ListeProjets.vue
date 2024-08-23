<template>
    <div class="container">
        <Projet />
        <table class="table table-bordered table-sm">
            <thead>
                <tr>
                    <th scope="col">Id Projet</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Date de début</th>
                    <th scope="col">Date de fin</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(projet, index) in store.projets" :key="index">
                    <td>{{ projet.id }}</td>
                    <td>{{ projet.nom }}</td>
                    <td>{{ projet.debut }}</td>
                    <td>{{ projet.fin }}</td>
                    <td>
                        <button class="btn btn-xs btn-danger" @click="destroy(index)"><ion-icon
                                name="trash"></ion-icon></button>
                        <router-link to="/editProjet" class="btn btn-xs btn-primary" @click="edit(index)"><ion-icon
                                name="eyedrop"></ion-icon></router-link>
                        <button class="btn btn-xs btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            @click="view(projet)"><ion-icon name="eye"></ion-icon></button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-danger" id="exampleModalLabel">Informations du projet</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Nom : {{ show?.nom }}</p>
                        <p>Date de debut: {{ show?.debut }}</p>
                        <p>Date de fin : {{ show?.fin }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGestionStore } from '@/stores'
const store = useGestionStore()
import Projet from './Projet.vue'
import { ref } from 'vue';

const destroy = (index) => {
    store.delProjet(index)
}
const edit = (index) => {
    store.editProjet(index)
}
const show = ref(null)

const view = (projet) => {
    show.value = projet
}

</script>

<style>
.btn-xs{
    margin: 5px;
}
</style>
