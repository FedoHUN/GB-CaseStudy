'use client';
import AuthenticatedLayout from '@/components/AuthenticatedLayout';

export default function PrivateLayout({children}: { children: React.ReactNode }) {
    return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}
