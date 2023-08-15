import { create } from "zustand";

interface IBook {
    amount:number
    author:string
    title:string
    updateAmount:(newAmount:number) => void
}

export const useBookStore = create<IBook>((set,get) => ({
    amount:40,
    author:"Benjim Parker",
    title:'Alice Adventure in Wonderland',
    updateAmount:(newAmount:number) => {
        const amountState = get().amount 
        set({amount:newAmount+amountState})
    },
}))