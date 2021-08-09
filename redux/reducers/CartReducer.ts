import ProductInterface from "../../types/ProductInterface";
import { CartActionTypeKeys } from "../actions/ActionTypeKey";
import { CartActions } from "../actions/ActionTypes";
export interface StateInterface {
	CartItems: ProductInterface[];
}

const InitialState: StateInterface = {
	CartItems: [],
};

export const CartReducer = (
	state: StateInterface = InitialState,
	action: CartActions
): StateInterface => {
	switch (action.type) {
		case CartActionTypeKeys.UpdateCart:
			return { ...state, CartItems: action.payload.UpdatedCartItems };
		default:
			return state;
	}
};
