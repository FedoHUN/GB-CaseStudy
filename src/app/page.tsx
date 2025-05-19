'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('user');
        router.replace(user ? '/private/products' : '/auth/sign-in');
    }, [router]);

    return null;
}
