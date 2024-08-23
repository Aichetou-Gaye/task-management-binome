<template>
  <div class="container">
    <h4>Modifier le projet : </h4>
    <form class="row gx-3 gy-2 align-items-center" @submit.prevent="onUpdate(index)">
      <div class="col-sm-3">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" id="nom" v-model="nom" required />
      </div>
      <div class="col-sm-2">
        <label for="date">Date de début</label>
        <input type="date" class="form-control" id="date" v-model="debut" required />
      </div>
      <div class="col-sm-2">
        <label for="date">Date de fin</label>
        <input type="date" class="form-control" id="date" v-model="fin" required />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn mt-4 me-4 btn-primary">
          Modifier
        </button>
        <router-link to="/projet" class="btn mt-4 btn-primary">Terminer</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useGestionStore } from '@/stores'
import { ref } from "vue";

const store = useGestionStore()

const nom = ref("")
const debut = ref("")
const fin = ref("")

const onUpdate = (index) => {
  store.updateProjet({
    id: index,
    nom: nom.value,
    debut: debut.value,
    fin: fin.value,
  })
  nom.value = "";
  debut.value = "";
  fin.value = "";
}

</script>