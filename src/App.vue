<template>
 <div class="container-fluid p-0">
  <div class="d-flex justify-content-between">
    <router-link to="/"><img src="./assets/logo.png" alt="Logo"></router-link>
    <a href="#"><ion-icon name="person-add"></ion-icon></a>
  </div>
 
    <nav class="navbar navbar-expand-lg navbar-primary mb-4">
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useGestionStore} from '@/stores'

const store = useGestionStore()
import Home from './components/Home.vue'
import Projet from './components/projets/Projet.vue'

</script>


<style scoped>
ion-icon{
 color: #391b5c;
 margin-top: 20px;
 width: 100px;
 height: 30px;
}
.navbar {
  background-color: #391b5c;
  padding: 10px 150px;
}
.nav-link{
  font-weight: 700;
  font-size: 20px;
}
img {
  width: 100px;
}
</style>
