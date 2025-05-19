'use client';
import Link from 'next/link';
import {useAuth} from '@/hooks/useAuth';
import {useProducts} from '@/hooks/useProducts';

export default function ProductsPage() {
    const {user, loading} = useAuth();
    const {products} = useProducts(user, loading);


    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 bg-black">
            {products.map((product) => (
                <Link key={product.id} href={`/private/products/${product.id}`}>
                    <div
                        className="bg-white p-4 w-full h-full rounded shadow hover:shadow-md flex flex-col items-start [&:hover_.product-title]:underline">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-48 w-full object-contain"
                        />
                        <span className="text-sm font-bold text-black line-clamp-2 my-2 product-title">
                            {product.title}
                        </span>
                        <p className="w-full text-sm font-bold text-gymbeam-orange mt-auto">
                            {product.price} €
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
