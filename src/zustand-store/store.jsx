import { create } from "zustand";

const useStore = create((set)=>({
    baseUrl : 'https://timesyncofficial.onrender.com/api/v1',
    otpTime : localStorage.getItem('otpTime' || 600),
    setOtpTime: (otpTime)=>{
        const updateTime=()=>{
            // console.log(otpTime)
            let newTime
                console.log(otpTime)
                if(otpTime > 0){
                    localStorage.setItem('otpTime', otpTime - 1)
                     newTime = parseInt(localStorage.getItem('otpTime'))
                    return newTime
                } else{
                }
                return newTime
        }
        set(()=>({ otpTime: updateTime(otpTime)
    }))
},
    token: localStorage.getItem('token') || null,
    updateToken: (token)=>set(()=>({token: token}))
}))

export default useStore;