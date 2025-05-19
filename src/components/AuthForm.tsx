'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

type AuthFormProps = {
    mode: 'sign-in' | 'register';
    onSubmit: (form: { username: string; password: string; email?: string }) => Promise<{
        success: boolean;
        error?: string
    }>;
};

type Field = {
    name: 'username' | 'email' | 'password';
    label: string;
    type: 'text' | 'email' | 'password';
    required: boolean;
    visible: boolean;
};

export default function AuthForm({mode, onSubmit}: AuthFormProps) {
    const isLogin = mode === 'sign-in';

    const fields: Field[] = [
        {name: 'username', label: 'Username', type: 'text', required: true, visible: true},
        {name: 'email', label: 'Email', type: 'email', required: true, visible: !isLogin},
        {name: 'password', label: 'Password', type: 'password', required: true, visible: true},
    ];

    const [form, setForm] = useState<{ username: string; password: string; email: string }>({
        username: '',
        password: '',
        email: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});

    const handleChange = (field: keyof typeof form, value: string) => {
        setForm((prev) => ({...prev, [field]: value}));
        setErrors((prev) => ({...prev, [field]: undefined, form: undefined}));
    };

    const validate = () => {
        const newErrors: typeof errors = {};

        fields.forEach(({name, required, visible}) => {
            if (required && visible && !form[name].trim()) {
                newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
            }
            if (name === 'email' && visible && form.email && !form.email.includes('@')) {
                newErrors.email = 'Valid email is required';
            }
        });

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const {success, error} = await onSubmit(form);
        if (!success && error) {
            setErrors({form: error});
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-md w-full m-4 border-4 border-gymbeam-orange text-black p-6 bg-white shadow rounded">
                <div className=" mb-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">{isLogin ? 'Sign In' : 'Register'}</h1>
                    <Image src="/logo-white.jpg" alt="Logo" width={120} height={120}/>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {fields
                        .filter((field) => field.visible)
                        .map((field) => (
                            <div key={field.name}>
                                <input
                                    type={field.type}
                                    placeholder={field.label}
                                    value={form[field.name]}
                                    onChange={(e) => handleChange(field.name, e.target.value)}
                                    className={`w-full p-2 border rounded ${errors[field.name] ? 'border-red-500' : ''}`}
                                />
                                {errors[field.name] &&
                                    <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>}
                            </div>
                        ))}

                    {errors.form && <p className="text-red-500 text-sm">{errors.form}</p>}

                    <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-gymbeam-orange">
                        {isLogin ? 'Sign In' : 'Register'}
                    </button>

                    <p className="text-sm mt-2 text-center">
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                        <Link href={isLogin ? '/auth/register' : '/auth/sign-in'}
                              className="text-gymbeam-orange hover:underline">
                            {isLogin ? 'Register here' : 'Sign in'}
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
