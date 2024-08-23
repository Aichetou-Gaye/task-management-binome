<template>
    <div class="container">
        <h1 class="text-center border-bottom mb-5">Application de <span>Gestion</span></h1>
        <div class="images">
            <div>
                <router-link to="/tache" class="tache">Gestion de Tâches</router-link>
                <router-link to="/tache"><img src="../assets/taches.jpg" alt="tache"></router-link>
            </div>

            <div>
                <router-link to="/projet"><img src="../assets/projets.jpg" alt="projet"></router-link>
                <router-link to="/projet" class="projet">Gestion de projet</router-link>
            </div>

        </div>

    </div>
</template>

<style scoped>
.images {
    display: flex;
    justify-content: space-between;
}
img {
    width: 500px;
    border-radius: 10px;
    margin: 15px 0px;
}
.tache,
.projet{
    color: #000;
    margin-top: 10px;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
}
</style>
