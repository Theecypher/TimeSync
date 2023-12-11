import { create } from "zustand";

const useStore = create((set)=>({
    baseUrl : 'https://timesyncofficial.onrender.com/api/v1',
    token: localStorage.getItem('token') || null,
    updateToken: (token)=>set(()=>({token: token}))
}))

export default useStore;