import ProductInterface from "../../types/ProductInterface";
import { StateInterface } from "../reducers/CartReducer";
import store from "../store/store";
import { CartActionTypeKeys } from "./ActionTypeKey";
import { CartActions } from "./ActionTypes";
export const AddToCart = (Product: ProductInterface): CartActions => {
	const OldCartItems = store.getState().Cart.CartItems;
	let DoesExist = false;
	OldCartItems.forEach((Item) => {
		if (Item.product_name === Product.product_name) {
			DoesExist = true;
		}
	});
	if (DoesExist) {
		return {
			type: CartActionTypeKeys.UpdateCart,
			payload: {
				UpdatedCartItems: OldCartItems,
			},
		};
	}
	const NewCartItems = [...OldCartItems, Product];

	return {
		type: CartActionTypeKeys.UpdateCart,
		payload: {
			UpdatedCartItems: NewCartItems,
		},
	};
};
export const RemoveFromCart = (ProductID: number): CartActions => {
	const OldCartItems = store.getState().Cart.CartItems;
	return {
		type: CartActionTypeKeys.UpdateCart,
		payload: {
			UpdatedCartItems: OldCartItems.filter(
				(Product) => Product.product_id !== ProductID
			),
		},
	};
};
export const IncrementWantedQuantityOfProduct = (
	ProductID: number
): CartActions => {
	const OldCartItems = store.getState().Cart.CartItems;
	return {
		type: CartActionTypeKeys.UpdateCart,
		payload: {
			UpdatedCartItems: OldCartItems.map((Product) => {
				if (Product.product_id === ProductID) {
					return { ...Product, quantity: Product.quantity + 1 };
				} else {
					return Product;
				}
			}),
		},
	};
};
export const DecrementWantedQuantityOfProduct = (
	ProductID: number
): CartActions => {
	const OldCartItems = store.getState().Cart.CartItems;
	return {
		type: CartActionTypeKeys.UpdateCart,
		payload: {
			UpdatedCartItems: OldCartItems.map((Product) => {
				if (Product.product_id === ProductID) {
					return { ...Product, quantity: Product.quantity - 1 };
				} else {
					return Product;
				}
			}),
		},
	};
};
