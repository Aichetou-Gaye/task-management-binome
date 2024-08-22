import { createMemoryHistory, createRouter } from "vue-router";

import Home from "@/components/Home.vue";
import Projet from "@/components/projets/Projet.vue";
import AddProjet from "@/components/projets/AjouterProjet.vue";
import ListeProjet from "@/components/projets/ListeProjets.vue";
import EditProjet from "@/components/projets/ModifierProjet.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projet", component: Projet },
  { path: "/addProjet", component: AddProjet },
  { path: "/listProjet", component: ListeProjet },
  { path: "/editProjet", component: EditProjet },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
