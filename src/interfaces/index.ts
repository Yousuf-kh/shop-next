export interface ProductType {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	raiting: { rate: number; count: number };
}
