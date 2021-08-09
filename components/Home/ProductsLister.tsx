import React from "react";
import ProductInterface from "../../types/ProductInterface";
import ProductCard from "../ProductCard";

interface Props {
	Products: ProductInterface[];
}

const ProductsLister = ({ Products }: Props) => {
	console.log(Products);
	return (
		<>
			{Products.map((Product) => (
				<ProductCard
					Product={Product}
					key={Product.product_id}
					Variant={"Regular"}
				/>
			))}
		</>
	);
};

export default ProductsLister;
