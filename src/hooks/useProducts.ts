'use client';
import {useEffect, useState} from 'react';

export function useProducts(user: string | null, loading: boolean) {
    const [products, setProducts] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!loading && user) {
            console.log('[useProducts] Fetching products...');
            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((data) => {
                    console.log('[useProducts] Products fetched:', data.length);
                    setProducts(data);
                })
                .catch((error) => {
                    console.error('[useProducts] Failed to fetch products:', error);
                    setError('Failed to load products');
                });
        }
    }, [user, loading]);

    return {products, error};
}
