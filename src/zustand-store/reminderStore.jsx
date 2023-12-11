import { create } from "zustand"
import { persist } from "zustand/middleware"

const useReminderStore = create((set) => ({
    reminders: [],
    createReminders: (value) => 
    persist (
    set((state) => ({
        reminders: [
            ...state.reminders,
            {
                id: Date.now(),
                value,
                status: "pending",
            },
        ],
    })),
    )
}));

export default useReminderStore;