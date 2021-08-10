import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { FormEvent, useReducer, useState } from "react";
import {
	CheckoutActionType,
	CheckoutActionTypeKeys,
	CheckoutFormState,
} from "../types/CheckoutFormTypes";
const Reducer = (
	state: CheckoutFormState,
	action: CheckoutActionType
): CheckoutFormState => {
	switch (action.type) {
		case CheckoutActionTypeKeys.UpdateFieldValue:
			return { ...state, [action.payload.name]: action.payload.value };
		case CheckoutActionTypeKeys.UpdateCheckoutStatus:
			return { ...state, status: action.payload.Status };
		default:
			return state;
	}
};

export const useCheckoutForm = () => {
	const StripeElements = useElements();
	const StripeInstance = useStripe();
	const [{ fullname, email, status }, dispatch] = useReducer(Reducer, {
		fullname: "",
		email: "",
		status: "Initial",
	});
	const handleField = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: CheckoutActionTypeKeys.UpdateFieldValue,
			payload: {
				name: e.target.name,
				value: e.target.value,
			},
		});
	};
	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		if (StripeElements !== null && StripeInstance !== null) {
			const { error, paymentMethod } = await StripeInstance.createPaymentMethod(
				{
					type: "card",
					card: StripeElements.getElement(CardElement)!,
				}
			);
			if (!error) {
				dispatch({
					type: CheckoutActionTypeKeys.UpdateCheckoutStatus,
					payload: { Status: "Success" },
				});
			} else {
				dispatch({
					type: CheckoutActionTypeKeys.UpdateCheckoutStatus,
					payload: { Status: "Error" },
				});
			}
		}
	};
	return {
		handleSubmit,
		handleField,
		fullname,
		email,
		status,
	};
};
