import { create } from "zustand";

export const useMenuState = create ((set)=>({
    open: false, 
    toggleMenu : () => set((state) => ({open: !state.open}))
}))

export const usePopUpState = create ((set)=>({
    appointmentConfirmation: false,
    messageConfirmation: false,

    setAcTrue : () => set(()=>({appointmentConfirmation: true})),
    setAcFalse : () => set(()=>({appointmentConfirmation: false})),

    setMcTrue : () => set(()=>({messageConfirmation: true})),
    setMcFalse : () => set(()=>({messageConfirmation: false})),

}))