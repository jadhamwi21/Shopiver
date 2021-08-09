import React from "react";
import styled from "styled-components";
import {
	DecrementWantedQuantityOfProduct,
	IncrementWantedQuantityOfProduct,
} from "../../redux/actions/ActionCreators";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import ProductInterface from "../../types/ProductInterface";

interface Props {
	Product: ProductInterface;
}

const IncrementDecrementComponent = ({ Product }: Props) => {
	const { Quantity, WantedQuantity } = useAppSelector((state) => {
		const ProductItem = state.Cart.CartItems.filter(
			(currentProduct) => currentProduct.product_id === Product.product_id
		)[0];
		return {
			Quantity: ProductItem.quantity,
			WantedQuantity: ProductItem.wantedQuantity,
		};
	});
	const Dispatch = useAppDispatch();
	return (
		<Container>
			<IncrementDecrementButton
				onClick={() =>
					Dispatch(DecrementWantedQuantityOfProduct(Product.product_id))
				}
				disabled={WantedQuantity === "1"}
			>
				-
			</IncrementDecrementButton>
			<CurrentWantedQuantity>{WantedQuantity}</CurrentWantedQuantity>
			<IncrementDecrementButton
				onClick={() =>
					Dispatch(IncrementWantedQuantityOfProduct(Product.product_id))
				}
				disabled={WantedQuantity === Quantity}
			>
				+
			</IncrementDecrementButton>
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-align: center;
`;
const IncrementDecrementButton = styled.button`
	height: fit-content;
	width: fit-content;
	padding: 1em;
	line-height: 1;
	outline: none;
	background-color: transparent;
	border: solid 1px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	&:hover {
		cursor: pointer;
	}
	&:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
`;
const CurrentWantedQuantity = styled.div`
	height: fit-content;
	width: 40px;
	padding: 1em 0px;
`;

export default IncrementDecrementComponent;
