export type Currency = "dollar" | "euro" | "pound";

type Image = {
	name: string;
};

export interface ProductInterface {
	product_name: string;
	price: number;
	currency: Currency;
	product_id: number;
	product_image: Image;
	quantity: string;
	wantedQuantity: string;
}

export default ProductInterface;
