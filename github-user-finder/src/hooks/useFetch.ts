import axios from "axios";
import { useEffect, useState } from "react";

export const api = axios.create({
    baseURL: 'https://api.github.com'
})

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | undefined>();
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get(url)
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
            setError(err);
        }) 
        .finally(() => {
            setIsFetching(false);
        })
    }, []);

    return { data, error, isFetching };
}