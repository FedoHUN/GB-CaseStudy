'use client';
import {usePathname, useRouter} from 'next/navigation';
import AuthForm from '@/components/AuthForm';
import {useAuth} from '@/hooks/useAuth';

export default function AuthPage() {
    const {login, register} = useAuth();
    const router = useRouter();
    const path = usePathname();
    const mode = path.includes('register') ? 'register' : 'sign-in';

    const handleSubmit = async (form: { username: string; password: string; email?: string }) => {
        const result = mode === 'sign-in'
            ? await login(form.username, form.password)
            : await register(form.username, form.email || '', form.password);

        if (result.success) router.push('/private/products');
        return result;
    };

    return <AuthForm mode={mode as 'sign-in' | 'register'} onSubmit={handleSubmit}/>;
}
