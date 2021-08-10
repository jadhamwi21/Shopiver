import React from "react";
import styled from "styled-components";

const PayButton = () => {
	return <ButtonElement type="submit">Pay</ButtonElement>;
};
const ButtonElement = styled.button`
	border: solid 1px rgba(0, 0, 0, 0.2);
	background-color: var(--blue);
	color: white;
	font-size: 18px;
	padding: 0.25em 1em;
	border-radius: 6px;
	margin: 1em auto;
	display: block;
`;

export default PayButton;
