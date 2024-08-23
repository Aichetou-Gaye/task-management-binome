<template>
     <div class="container">
    <h4 class="text-center mb-4">Ajoutez un projet : </h4>
    <form class="row align-items-center" @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" id="nom" v-model="nom" required />
      </div>
      <div class="mb-3">
        <label for="date">Date de début</label>
        <input type="date" class="form-control" id="date" v-model="debut" required />
      </div>
      <div class="mb-3">
        <label for="date">Date de fin</label>
        <input type="date" class="form-control" id="date" v-model="fin" required />
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-success">
          Ajouter
        </button>
        <router-link to="/projet" class="btn btn-secondary">Fermer</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useGestionStore } from '@/stores'
import { ref } from "vue";

const store = useGestionStore()

const id = ref(1)
const nom = ref("")
const debut = ref("")
const fin = ref("")

const onSubmit = () => {
  store.addProjet({
    id: id.value++,
    nom: nom.value,
    debut: debut.value,
    fin: fin.value,
  })

  nom.value = "";
  debut.value = "";
  fin.value = "";
}

</script>