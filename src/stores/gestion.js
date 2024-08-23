import { defineStore } from 'pinia'

export const useGestionStore = defineStore('gestion', {
  state: () => ({
    taches: [],
    projets: [],
  }),
  actions: {
    addProjet(objet) {
      this.projets.push(objet)
    },
    delProjet(id) {
      this.projets.splice(id, 1)
    },
    updateProjet(update) {
      const index = this.projets.findIndex(projet => projet.id === this.selected.id)
      if (index !== -1) {
        this.projets[index] = update;
      }
    },
    // viewProjet(projet) {
    //   this.projets = projet
    // }
  },
})