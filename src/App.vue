<template>
 <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-primary mb-4">
      <a class="navbar-brand text-white ms-3" href="#"><img src="./assets/logo.png" alt="Logo"></a>
      <div class="collapse navbar-collapse d-flex justify-content-evenly">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/taches">Tâches</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projet">Projets</router-link>
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
.navbar {
  background-color: #d4c4e4;
}
.nav-link{
  font-weight: 700;
}
img {
  width: 100px;
}
</style>
