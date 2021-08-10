import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import CheckoutModal from "../Checkout/CheckoutModal";
import { useAppSelector } from "../../redux/store/store";

const Checkout = () => {
	const [modal, setModal] = useState(false);
	const shouldShowButton = useAppSelector(
		(state) => state.Cart.CartItems.length !== 0
	);
	return (
		<>
			{shouldShowButton && (
				<>
					<CheckoutButton onClick={() => setModal(true)}>
						Check out
					</CheckoutButton>
					{modal &&
						ReactDOM.createPortal(
							<CheckoutModal closeModal={() => setModal(false)} />,
							document.getElementById("portal")!
						)}
				</>
			)}
		</>
	);
};
const CheckoutButton = styled.button`
	border: solid 1px rgba(0, 0, 0, 0.2);
	line-height: 1;
	color: var(--blue);
	background-color: transparent;
	padding: 1em 1.25em;
	border-radius: 5px;
	transition: all 0.3s ease;
	&:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.4);
		color: white;
	}
`;

export default Checkout;
