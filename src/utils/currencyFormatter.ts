import { CurrencyCode } from '../store/currencyStore';

export function formatPrice(priceINR: number, currency: CurrencyCode, rates: Record<CurrencyCode, number>): string {
    const convertedAmount = priceINR * (rates[currency] || 1);

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
        maximumFractionDigits: 2,
    }).format(convertedAmount);
}
