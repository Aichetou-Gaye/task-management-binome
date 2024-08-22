import { defineStore } from 'pinia'

export const useGestionStore = defineStore('gestion', {
  state: () => ({
    taches: [],
    projets: [],
    selected: null,
    project : null,
    id : 1
  }),
  actions: {
    addProjet(nom, debut, fin) {
      this.projets.push({
        id: this.id++,
        nom: nom,
        debut: debut,
        fin: fin,
      })
    },
    editProjet(id) {
      this.selected = this.projets[id]
       
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
    view(projet) {
      this.project = projet
    }
  },
})