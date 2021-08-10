import React from "react";
import styled, { keyframes } from "styled-components";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

interface Props {
	closeModal: () => void;
}
const stripePromise = loadStripe(
	"pk_test_51JMuG0I5RmpmwgripCR0qbn6FNhr89goc84VuejDmzcvzEV3JenIM8yVxLFCdfPX6PiuDnL5JLSgGVVP4dF8dBvE00YcQ4gfUW"
);

const CheckoutModal = ({ closeModal }: Props) => {
	return (
		<Container onClick={() => closeModal()}>
			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements>
		</Container>
	);
};
const FadeIn = keyframes`
from{
    opacity:0;
}to{
    opacity:1;
}
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: grid;
	place-items: center;
	background-color: rgba(0, 0, 0, 0.5);
	animation-name: ${FadeIn};
	animation-timing-function: ease;
	animation-duration: 0.3s;
`;

export default CheckoutModal;
