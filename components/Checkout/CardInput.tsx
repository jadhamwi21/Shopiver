import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

const cardInput = () => {
	return (
		<CardElement
			options={{
				style: {
					base: {
						fontSize: "16px",
						color: "#4d4dff",
						"::placeholder": {
							color: "#4d4dff",
						},
					},
					invalid: {
						color: "#9e2146",
					},
				},
			}}
		/>
	);
};

export default cardInput;
