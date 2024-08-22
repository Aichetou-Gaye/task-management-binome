<template>
    <div class="container">
        <h3>Gestion de projet : </h3>
        <router-link to="/addProjet" >+ Ajouter</router-link>
        <router-link to="/listProjet"></router-link>
    </div>
</template>

<script setup>
import { useGestionStore} from '@/stores'

const store = useGestionStore()

</script>