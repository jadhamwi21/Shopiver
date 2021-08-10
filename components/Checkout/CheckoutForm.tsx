import React, { FormEvent } from "react";
import styled, { keyframes } from "styled-components";
import FormField from "./FormField";
import {
	CardElement,
	Elements,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import CardInput from "./CardInput";
import PayButton from "./PayButton";
const CheckoutForm = () => {
	return (
		<CheckoutFormBox onClick={(e) => e.stopPropagation()}>
			<Form onSubmit={(e) => e.preventDefault()}>
				<FormField placeholder="Full Name" name="fullname" type="text" />
				<FormField placeholder="Email" name="email" type="email" />
				<CardInput />
				<PayButton />
			</Form>
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

const CheckoutFormBox = styled.div`
	height: 50%;
	width: 50%;
	background-color: white;
	animation-name: ${SlideupAnimation};
	animation-timing-function: ease;
	animation-duration: 0.3s;
	animation-delay: 0.2s;
	animation-fill-mode: backwards;
	border-radius: 6px;
	display: grid;
	place-items: center;
`;
const Form = styled.form`
	width: 70%;
	height: 100%;
	padding: 2em;
`;

export default CheckoutForm;
