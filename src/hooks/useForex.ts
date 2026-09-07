import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { fetchCurrencies, convertCurrency } from '../services/fxApi';
import type { CurrenciesResponse } from '../types/fx';
import { useDebouncedValue } from './useDebouncedValue';

const DEBOUNCE_MS = 350;

export function useForex() {
    const [currencies, setCurrencies] = useState<CurrenciesResponse>({});
    const [amount, setAmount] = useState<number | ''>(1);
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('EUR');
    const [loading, setLoading] = useState<boolean>(false);

    // Holds the outcome of the last completed network conversion only —
    // never written to for the amount==='' or same-currency cases, since
    // those are derived synchronously below instead of round-tripping
    // through state + an effect.
    const [fetchedResult, setFetchedResult] = useState<number | null>(null);
    const [fetchedRate, setFetchedRate] = useState<number | null>(null);

    const debouncedAmount = useDebouncedValue(amount, DEBOUNCE_MS);
    const numericAmount = debouncedAmount === '' ? null : Number(debouncedAmount);
    const isValidAmount = numericAmount !== null && !isNaN(numericAmount);
    const isSameCurrency = fromCurrency === toCurrency;
    const needsFetch = isValidAmount && !isSameCurrency;

    useEffect(() => {
        fetchCurrencies()
            .then(data => setCurrencies(data))
            .catch(err => console.error("Failed to load currencies", err));
    }, []);

    useEffect(() => {
        if (!needsFetch) return; // sync cases are derived at render time, nothing to fetch

        const controller = new AbortController();
        // Intentional: this effect synchronizes with the network request it starts here,
        // so setting the in-flight flag is the effect's job, not derivable render state.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        // oxlint-disable-next-line react/set-state-in-effect
        setLoading(true);

        convertCurrency(numericAmount as number, fromCurrency, toCurrency, controller.signal)
            .then(convertedValue => {
                setFetchedResult(convertedValue);
                setFetchedRate(convertedValue / (numericAmount as number));
                setLoading(false);
            })
            .catch(err => {
                if (axios.isCancel(err) || err?.name === 'CanceledError') return; // superseded by a newer request
                setLoading(false);
            });

        return () => controller.abort();
    }, [needsFetch, numericAmount, fromCurrency, toCurrency]);

    const result = useMemo(() => {
        if (!isValidAmount) return null;
        if (isSameCurrency) return numericAmount;
        return fetchedResult;
    }, [isValidAmount, isSameCurrency, numericAmount, fetchedResult]);

    const rateInfo = useMemo(() => {
        if (!isValidAmount) return '';
        if (isSameCurrency) return `1 ${fromCurrency} = 1 ${toCurrency}`;
        if (fetchedRate === null) return '';
        return `1 ${fromCurrency} = ${fetchedRate.toFixed(4)} ${toCurrency}`;
    }, [isValidAmount, isSameCurrency, fromCurrency, toCurrency, fetchedRate]);

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
        loading: needsFetch ? loading : false,
        rateInfo,
        handleSwap
    };
}
