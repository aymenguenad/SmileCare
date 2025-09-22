import { create } from "zustand";

export const useMenuState = create ((set)=>({
    open: false, 
    toggleMenu : () => set((state) => ({open: !state.open}))
}))

