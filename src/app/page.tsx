import Hero from '@/components/Hero';
import Product from '@/components/Product';
import Testemonial from '@/components/Testemonial';
import { ProductType } from '@/interfaces';

export default async function Home() {
	const res = await fetch(
		'https://fakestoreapi.com/products?limit=8'
	);
	const products: ProductType[] = await res.json();

	return (
		<>
			<div className='container mx-auto'>
				<Hero />
				<h1 className=' text-center text-5xl p-5 font-[600] text-gray-800 '>
					Popular Products
				</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					{products.map(c => (
						<Product key={c.id} c={c} />
					))}
				</div>
				<Testemonial />
			</div>
		</>
	);
}
