import ProductInterface from "../../types/ProductInterface";
import { StateInterface } from "../reducers/CartReducer";
import store from "../store/store";
import { CartActionTypeKeys } from "./ActionTypeKey";
import { AppAction, CartActions } from "./ActionTypes";

export const EmptyCart = (): AppAction => {
	return {
		type: CartActionTypeKeys.UpdateCart,
		payload: {
			UpdatedCartItems: [],
		},
	};
};

export const AddToCart = (Product: ProductInterface): AppAction => {
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
	const NewCartItems = [...OldCartItems, { ...Product, wantedQuantity: "1" }];
	console.log(NewCartItems);
	return {
		type: CartActionTypeKeys.UpdateCart,
		payload: {
			UpdatedCartItems: NewCartItems,
		},
	};
};
export const RemoveFromCart = (ProductID: number): AppAction => {
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
): AppAction => {
	const OldCartItems = store.getState().Cart.CartItems;
	return {
		type: CartActionTypeKeys.UpdateCart,
		payload: {
			UpdatedCartItems: OldCartItems.map((Product) => {
				if (Product.product_id === ProductID) {
					return {
						...Product,
						wantedQuantity: (parseInt(Product.wantedQuantity) + 1).toString(),
					};
				} else {
					return Product;
				}
			}),
		},
	};
};
export const DecrementWantedQuantityOfProduct = (
	ProductID: number
): AppAction => {
	const OldCartItems = store.getState().Cart.CartItems;
	return {
		type: CartActionTypeKeys.UpdateCart,
		payload: {
			UpdatedCartItems: OldCartItems.map((Product) => {
				if (Product.product_id === ProductID) {
					return {
						...Product,
						wantedQuantity: (parseInt(Product.wantedQuantity) - 1).toString(),
					};
				} else {
					return Product;
				}
			}),
		},
	};
};
