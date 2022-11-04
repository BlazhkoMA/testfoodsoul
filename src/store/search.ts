import { defineStore, acceptHMRUpdate } from 'pinia'
import {API_URL} from "@/config/config";
import {searchStateEnum, StateInterface} from "@/store/searchStoreTypes";

async function apiFetch(query: string) {
    const response = await fetch(API_URL + query)
    if(response.status < 400){
        const data = await response.json()
        return data.data.items
    }
    return []
}

export const useSearchStore = defineStore({
    id: 'search',
    state: () => ({
        items: [],
        searchState: searchStateEnum.START,
        defaultValue: 'testing ssr',
    } as StateInterface),

    actions: {
        async getItems(query: string) {
            const data = await apiFetch(query)
            this.$patch({
                items: data,
                searchState: searchStateEnum.FINISH
            })
        },
        clearItems () {
            this.$patch({
                items: []
            })
        },
        startInput () {
            this.$patch({
                searchState: searchStateEnum.LOADING
            })
        },
    },
})
