import axios from 'axios';
import type { CurrenciesResponse, LatestRateResponse } from '../types/fx';

const BASE_URL = 'https://api.frankfurter.dev/v1';

export const fetchCurrencies = async (): Promise<CurrenciesResponse> => {
    const response = await axios.get<CurrenciesResponse>(`${BASE_URL}/currencies`);
    return response.data;
}

export const convertCurrency = async (amount: number, from: string, to: string): Promise<number> => {
    if (isNaN(amount) || from === to) return amount;
    const response = await axios.get<LatestRateResponse>(`${BASE_URL}/latest?amount=${amount}&from=${from}&to=${to}`);
    return response.data.rates[to];
}