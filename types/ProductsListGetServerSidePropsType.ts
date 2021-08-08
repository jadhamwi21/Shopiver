import ProductInterface from "./ProductInterface";

export type ProductsListGetServerSidePropsType = {
	props: {
		Error: boolean;
		ProductsList: ProductInterface[];
	};
};
