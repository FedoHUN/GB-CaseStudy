import '@/app/globals.css';
import type {Metadata} from 'next';
import {ReactNode} from 'react';

export const metadata: Metadata = {
    title: 'GymBeam Store',
    description: 'Product list and details from Fake Store API',
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-black text-gray-900" suppressHydrationWarning={true}>
        {children}</body>
        </html>
    );
}