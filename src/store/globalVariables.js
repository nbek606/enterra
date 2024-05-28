import { defineStore } from 'pinia'

export const useGlobalVariablesStore = defineStore('test', () => {
    const logoText = 'Крым'
    
    return {
       logoText
    }
})