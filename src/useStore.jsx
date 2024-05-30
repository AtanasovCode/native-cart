import { create } from 'zustand';
import * as Crypto from 'expo-crypto';

const useStore = create((set) => ({
    cartCount: 0,
    items: [
        {
            name: "Samsung Galaxy A24",
            price: 1250,
            id: Crypto.randomUUID(),
        },
        {
            name: "Samsung Galaxy A24 Pro",
            price: 1450,
            id: Crypto.randomUUID(),
        },
        {
            name: "Samsung Galaxy A23 Pro",
            price: 750,
            id: Crypto.randomUUID(),
        },
        {
            name: "Samsung Galaxy Z Fold 5",
            price: 1650,
            id: Crypto.randomUUID(),
        },
    ],
    saved: [],
    increaseCartCount: () => set((state) => ({ cartCount: state.cartCount + 1 })),
    addItemToCart: (id) => set((state) => {
        const itemToAdd = state.items.find((item) => item.id === id);
        if (itemToAdd) {
            return {
                saved: [...state.saved, itemToAdd],
                cartCount: state.cartCount + 1,
            };
        }
        return state;
    }),
}));

export default useStore;
