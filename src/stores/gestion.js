import { defineStore } from 'pinia';

export const useGestionStore = defineStore('gestion', {
  state: () => ({
    taches: [],
    projets: [],
    selected: null,
    project: null,
    selectedTache: null,  
    tacheShow: null,       
  }),
  actions: {
    addProjet(objet) {
      this.projets.push(objet);
    },
    delProjet(id) {
      this.projets.splice(id, 1);
    },
    updateProjet(update) {
      const index = this.projets.findIndex(projet => projet.id === update.id);
      if (index !== -1) {
        this.projets[index] = update;
      }
    },
    view(projet) {
      this.project = projet;
    },
    addTache(objet) {
      this.taches.push(objet);
    },
    delTache(id) {
      this.taches.splice(id, 1);
    },
    updateTache(id, updatedTache) {
      const index = this.taches.findIndex(tache => tache.id === id);
      if (index !== -1) {
        this.taches[index] = updatedTache;
      }
    },
    getTacheById(id) {
      return this.taches.find(tache => tache.id === id);
    }
  },
});
