<template>
 <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-primary bg-primary text-white mb-4">
      <a class="navbar-brand text-white ms-3" href="#"><img src="./assets/logo.png" alt="Logo"></a>
      <div class="collapse navbar-collapse d-flex justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/taches">Tâches</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/projet">Projets</router-link>
          </li>
        </ul>
      </div>
    </nav>


    <router-view />
  </div>
</template>

<script setup>
import { useGestionStore} from '@/stores'

const store = useGestionStore()

</script>


<style scoped>

</style>
