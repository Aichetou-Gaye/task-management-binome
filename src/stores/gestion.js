import { defineStore } from 'pinia'

export const useGestionStore = defineStore('gestion', {
  state: () => ({
    taches: [],
    projets: [],
  }),
  actions: {
    addProjet(obj) {
      this.projets.push(obj)
    }
  },
})