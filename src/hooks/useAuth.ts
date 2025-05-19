'use client';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import * as authApi from '@/api/auth'; // Adjust path to where you placed auth.ts

export function useAuth() {
    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        setUser(token && storedUser ? storedUser : null);
        setLoading(false);
    }, []);

    const login = async (username: string, password: string) => {
        const result = await authApi.login(username, password);
        if (result.success) setUser(username);
        return result;
    };

    const register = async (username: string, email: string, password: string) => {
        const result = await authApi.register(username, email, password);
        if (result.success) setUser(username);
        return result;
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        router.push('/auth/sign-in');
    };

    return {user, loading, login, register, logout};
}
