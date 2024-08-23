<template>
   <div class="container">
        <h3>Gestion des Tâches  : </h3>
        <router-link to="/ajouTache" >Ajouter</router-link>
        <router-link to="/listeTache"></router-link>
    </div>
</template>

<script setup>

import { useGestionStore} from '@/stores'

const store = useGestionStore()
</script>


<style scoped>

</style>
