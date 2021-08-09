import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import ProductInterface from "../../types/ProductInterface";
import { CartActionTypeKeys } from "../actions/ActionTypeKey";
export interface StateInterface {
	CartItems: ProductInterface[];
}

const InitialState: StateInterface = {
	CartItems: [],
};

export const CartReducer = (
	state: StateInterface = InitialState,
	action: AnyAction
): StateInterface => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload };
		case CartActionTypeKeys.UpdateCart:
			return { ...state, CartItems: action.payload.UpdatedCartItems };
		default:
			return state;
	}
};
