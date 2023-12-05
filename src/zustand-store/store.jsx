import { create } from "zustand";

const useStore = create((set)=>({
    baseUrl : 'https://timesyncofficial.onrender.com'
}))

export default useStore;