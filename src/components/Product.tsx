'use client';
import { ProductType } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

const Product: FC<{ c: ProductType }> = ({ c }) => {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<Link
			href={`/product/${c.id}`}
			className='bg-white p-6 rounded-lg border hover:scale-105 transition-transform ease-out duration-200'
		>
			<div className=' h-60 relative'>
				<Image
					objectFit='fill'
					className={`${
						isLoading
							? 'scale-110 blur-2xl grayscale'
							: "'scale-100 blur-0 grayscale'"
					}`}
					src={c.image}
					alt={c.title}
					fill
					onLoadingComplete={() => setIsLoading(false)}
				/>
			</div>
			<h3 className='mt-5 tracking-widest text-indigo-500 text-xs font-medium title-font'>
				{c.category}
			</h3>
			<div className='flex justify-between items-center'>
				<h2 className='text-md text-gray-900 font-medium title-font mb-4 line-clamp-2 truncate w-40'>
					{c.title}
				</h2>
				<h2 className='text-md text-gray-900 font-medium title-font mb-4 line-clamp-2'>
					{c.price}$
				</h2>
			</div>

			<p className='leading-relaxed text-base line-clamp-3'>
				{c.description}
			</p>
		</Link>
	);
};

export default Product;
