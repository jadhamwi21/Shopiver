import ProductInterface from "../types/ProductInterface";
import axios from "axios";
import { ProductFetchResponseType } from "../types/ProductsFetchResponseType";
export const fetchProducts = async (): Promise<ProductFetchResponseType> => {
	return await axios
		.get(`http://localhost:1337/products`)
		.then((response) => {
			const { data } = response;
			return data;
		})
		.catch((error: Error) => {
			return error;
		});
};
