'use client';
import React, {ReactNode} from 'react';
import {useAuth} from '@/hooks/useAuth';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import Image from "next/image";

export default function AuthenticatedLayout({children}: { children: ReactNode }) {
    const {user, loading, logout} = useAuth();
    const router = useRouter();

    if (loading) return <p className="p-4">Loading...</p>;

    if (!user) {
        router.push('/auth/sign-in');
        return null;
    }

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4 bg-black">
                <h1 className="text-2xl font-bold">
                    <Link href="/private/products" className="hover:underline">
                        Products
                    </Link>
                </h1>
                <div className=''>
                    <Image src="/logo.png" alt="Logo" width={120} height={120}/>
                </div>
                <div>
                    <span className="text-gray-600 mr-4">Hi, {user}</span>
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
            {children}
        </div>
    );
}
