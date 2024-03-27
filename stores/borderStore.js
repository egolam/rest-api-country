import { create } from "zustand";

const initialState = {
    searchInput: "",
    filterChoice: "",

}

export const useBorderStore = create((set) => ({
    ...initialState,

    setFilterChoice: (payload) => set((state) => ({filterChoice: payload})),
    setSearchInput: (payload) => set((state) => ({searchInput: payload})),

    reset: () => set(initialState)

}))