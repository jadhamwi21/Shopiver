import { fetchProducts } from "../api/stripe";
import React from "react";
import ProductsLayout from "../components/Home/ProductsLayout";
import ProductsLister from "../components/Home/ProductsLister";
import ProductInterface from "../types/ProductInterface";
import { ProductsListGetServerSidePropsType } from "../types/ProductsListGetServerSidePropsType";
import FetchError from "../components/Home/FetchError";
export const getServerSideProps =
	async (): Promise<ProductsListGetServerSidePropsType> => {
		const Response = await fetchProducts();
		if (Response instanceof Error) {
			return { props: { Error: true, ProductsList: [] } };
		} else {
			const FetchedProducts = Response;
			return { props: { ProductsList: FetchedProducts, Error: false } };
		}
	};
interface HomeProps {
	ProductsList: ProductInterface[];
	Error: boolean;
}

export default function Home({ ProductsList, Error }: HomeProps) {
	return (
		<React.Fragment>
			{Error ? (
				<FetchError />
			) : (
				<ProductsLayout>
					<ProductsLister Products={ProductsList} />
				</ProductsLayout>
			)}
		</React.Fragment>
	);
}
