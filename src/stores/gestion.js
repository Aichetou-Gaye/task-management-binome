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
    // Gestion des projets
    addProjet(objet) {
      this.projets.push(objet);
    },
    editProjet(id) {
      this.selected = this.projets[id];
    },
    delProjet(id) {
      this.projets.splice(id, 1);
    },
    updateProjet(update) {
      const index = this.projets.findIndex(projet => projet.id === this.selected.id);
      if (index !== -1) {
        this.projets[index] = update;
      }
    },
    view(projet) {
      this.project = projet;
    },
    
    // Gestion des tâches
    addTache(objet) {
      this.taches.push(objet);
    },
    editTache(id) {
      this.selectedTache = this.taches.find(tache => tache.id === id);
    },
    delTache(id) {
      const index = this.taches.findIndex(tache => tache.id === id);
      if (index !== -1) {
        this.taches.splice(index, 1);
      }
    },
    updateTache(id, updatedTache) {
      const index = this.taches.findIndex(tache => tache.id === id);
      if (index !== -1) {
        this.taches[index] = updatedTache;
      }
    },
    view(tache) {
      this.tacheShow = tache;
    },
    getTacheById(id) {
      return this.taches.find(tache => tache.id === id);
    }
  },
});
