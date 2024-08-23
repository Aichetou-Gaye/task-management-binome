<template>
    <div class="container">
        <h3  class="text-center border-bottom mb-2">Gestion de projet</h3>
        <router-link to="/addProjet" class="btn mt-3 btn-primary">+ Ajouter</router-link>
        
        <h4 class= "mt-3 mb-4">Listes des projets : </h4>
        <router-link to="/listProjet"></router-link>
    </div>
</template>

<script setup>
import { useGestionStore} from '@/stores'

const store = useGestionStore()

</script>

<style scoped>
.btn {
color: #fff;
   background-color: #8474a4;
   border: none;
}
</style>