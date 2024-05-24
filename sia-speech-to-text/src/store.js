import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
export const useChatHistoryStore = create(persist(
    (set) => ({
        messages: [],
        addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),

    }),
    {
        name: 'chat-history-storage',
        storage: createJSONStorage(() => localStorage),
    }
))

