import React from "react";
import styled from "styled-components";
import { RemoveFromCart } from "../../redux/actions/ActionCreators";
import { useAppDispatch } from "../../redux/store/store";
import ProductInterface from "../../types/ProductInterface";

interface Props {
	Product: ProductInterface;
}

const RemoveButton = ({ Product }: Props) => {
	const Dispatch = useAppDispatch();
	return (
		<ButtonElement onClick={() => Dispatch(RemoveFromCart(Product.product_id))}>
			Remove
		</ButtonElement>
	);
};
const ButtonElement = styled.button`
	background-color: transparent;
	outline: none;
	border: solid 1px rgba(0, 0, 0, 0.2);
	padding: 1em;
	border-radius: 5px;
	&:hover {
		cursor: pointer;
	}
`;

export default RemoveButton;
