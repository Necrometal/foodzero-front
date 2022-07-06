import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
    state: () => {
        return {
            current: null,
        }
    },

    actions: {
        navigate(data){
            this.current = data;
        },
    }
})