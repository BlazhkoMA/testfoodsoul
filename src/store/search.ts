import { defineStore, acceptHMRUpdate } from 'pinia'
import {API_URL} from "@/config/config";

async function apiFetch(query: string) {
    const response = await fetch(API_URL + query)
    if(response.status < 400){
        const data = await response.json()
        return data.data.items
    }
    return []

}
interface item {
    name: string,
    type: string
}
export const useSearchStore = defineStore({
    id: 'search',
    state: () => ({
        items: [],
        searchState: 'start'
    }),

    actions: {
        async getItems(query: string) {
            const data = await apiFetch(query)
            this.$patch({
                items: data,
                searchState: 'finish'
            })
        },
        clearItems () {
            this.$patch({
                items: []
            })
        },
        startInput () {
            this.$patch({
                searchState: 'loading'
            })
        },
    },
})
