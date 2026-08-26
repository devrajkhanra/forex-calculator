import { useState, useEffect } from 'react';
import { fetchCurrencies, convertCurrency } from '../services/fxApi';
import type { CurrenciesResponse } from '../types/fx';

export function useForex() {
    const [currencies, setCurrencies] = useState<CurrenciesResponse>({});
    const [amount, setAmount] = useState<number | ''>(1);
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('EUR');
    const [result, setResult] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [rateInfo, setRateInfo] = useState<string>('');

    useEffect(() => {
        fetchCurrencies()
            .then(data => setCurrencies(data))
            .catch(err => console.error("Failed to load currencies", err));
    }, []);

    useEffect(() => {
        if (amount === '' || isNaN(Number(amount))) {
            setResult(null);
            return;
        }

        if (fromCurrency === toCurrency) {
            setResult(Number(amount));
            setRateInfo(`1 ${fromCurrency} = 1 ${toCurrency}`);
            return;
        }

        setLoading(true);
        convertCurrency(Number(amount), fromCurrency, toCurrency)
            .then(convertedValue => {
                setResult(convertedValue);
                const singleRate = (convertedValue / Number(amount)).toFixed(4);
                setRateInfo(`1 ${fromCurrency} = ${singleRate} ${toCurrency}`);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [amount, fromCurrency, toCurrency]);

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return {
        currencies,
        amount,
        setAmount,
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        result,
        loading,
        rateInfo,
        handleSwap
    };
}