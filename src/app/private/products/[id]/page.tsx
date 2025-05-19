'use client';
import {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import {getProductById, Product} from '@/api/products';

export default function ProductDetailPage() {
    const {id} = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (typeof id === 'string') {
            getProductById(id).then(setProduct);
        }
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="w-full h-full bg-white p-6 mt-4 rounded shadow grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr]">
            <img
                src={product.image}
                alt={product.title}
                className="h-96 object-contain mx-auto mb-4"
            />
            <div className="flex flex-col items-start">
                <h1 className="text-2xl font-bold text-black">{product.title}</h1>
                <p className="text-sm text-gray-500 mb-1 capitalize">{product.category}</p>
                <p className="text-gray-700 text-base my-4">{product.description}</p>
                <p className="text-lg text-gymbeam-orange font-semibold">{product.price} €</p>
                <button
                    className="mt-auto mb-2 bg-gymbeam-orange border-2 border-gymbeam-orange text-white font-bold text-lg px-18 py-2 rounded hover:bg-black"
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
}
