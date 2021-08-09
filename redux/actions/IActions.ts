import ProductInterface from "../../types/ProductInterface";
import { CartActionTypeKeys } from "./ActionTypeKey";

export interface UpdateCart {
	type: CartActionTypeKeys.UpdateCart;
	payload: {
		UpdatedCartItems: ProductInterface[];
	};
}
