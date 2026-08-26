export interface CurrenciesResponse {
    [code: string]: string;
}

export interface LatestRateResponse {
    base: string;
    date: string;
    rates: {
        [code: string]: number;
    }
}