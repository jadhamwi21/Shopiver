import React, { FormEvent, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import FormField from "./FormField";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CardInput from "./CardInput";
import PayButton from "./PayButton";
import CheckoutDetails from "./CheckoutDetails";
import { useCheckoutForm } from "../../hooks/useCheckoutForm";
const CheckoutForm = () => {
	const { handleField, handleSubmit, status, email, fullname } =
		useCheckoutForm();
	return (
		<CheckoutFormBox
			onClick={(e) => e.stopPropagation()}
			Center={status === "Initial" || status === "Error"}
		>
			{status !== "Success" ? (
				<Form onSubmit={handleSubmit}>
					<FormField
						placeholder="Full Name"
						name="fullname"
						type="text"
						value={fullname}
						onChange={handleField}
					/>
					<FormField
						placeholder="Email"
						name="email"
						type="email"
						value={email}
						onChange={handleField}
					/>
					<CardInput />
					<PayButton />
				</Form>
			) : (
				<CheckoutDetails FullName={fullname} Email={email} />
			)}
		</CheckoutFormBox>
	);
};
const SlideupAnimation = keyframes`
from{
    transform:translateY(10%);
    opacity:0;
}
to{
    transform:translateY(0%);
    opacity:1;
}
`;

const CheckoutFormBox = styled.div<{ Center: boolean }>`
	height: fit-content;
	width: 50%;
	background-color: white;
	animation-name: ${SlideupAnimation};
	animation-timing-function: ease;
	animation-duration: 0.3s;
	animation-delay: 0.2s;
	animation-fill-mode: backwards;
	border-radius: 6px;
	display: ${(props) => (props.Center ? "grid" : "block")};
	place-items: center;
`;
const Form = styled.form`
	width: 70%;
	height: 100%;
	padding: 2em;
`;

export default CheckoutForm;
