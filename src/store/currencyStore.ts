import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CurrencyCode = 'INR' | 'USD' | 'GBP';

interface CurrencyState {
    currency: CurrencyCode;
    rates: Record<CurrencyCode, number>;
    setCurrency: (currency: CurrencyCode) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
    persist(
        (set) => ({
            currency: 'INR',
            // Base is INR
            rates: {
                INR: 1,
                USD: 0.012,
                GBP: 0.0094,
            },
            setCurrency: (currency) => set({ currency }),
        }),
        {
            name: 'currency-storage',
        }
    )
);
