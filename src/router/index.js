import { createMemoryHistory, createRouter } from "vue-router";

import Home from "@/components/Home.vue";
import Projet from "@/components/projets/Projet.vue";
import AddProjet from "@/components/projets/AjouterProjet.vue";
import ListeProjet from "@/components/projets/ListeProjets.vue";
import EditProjet from "@/components/projets/ModifierProjet.vue";

import Tache from "@/components/taches/Tache.vue";
import AjoutTache from "@/components/taches/AjoutTache.vue";
import ListTache from "@/components/taches/ListTache.vue";
import ModifierTache from "@/components/taches/ModifierTache.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projet", component: Projet },
  { path: "/addProjet", component: AddProjet },
  { path: "/listProjet", component: ListeProjet },
  { path: "/editProjet", component: EditProjet },
  { path: "/tache", component: Tache },
  { path: "/ajouTache", component: AjoutTache },
  { path: "/listeTache", component: ListTache },
  { path: "/modifierTache", component: ModifierTache }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
