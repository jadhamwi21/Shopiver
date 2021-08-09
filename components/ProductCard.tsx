import React from "react";
import styled from "styled-components";
import ProductInterface from "../types/ProductInterface";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { GetCurrencySymbol } from "../helper/functions";
import { AddToCart } from "../redux/actions/ActionCreators";
import { useAppDispatch } from "../redux/store/store";
import IncrementDecrementComponent from "./Cart/IncrementDecrementComponent";
import RemoveButton from "./Cart/RemoveButton";
interface Props {
	Product: ProductInterface;
	Variant: "Cart" | "Regular";
}

const ProductCard = ({ Product, Variant }: Props) => {
	const Dispatch = useAppDispatch();
	return (
		<Card>
			<ImageElement
				src={Product.product_image.name}
				alt={Product.product_name}
			/>
			<DetailElement>
				Product Name : <BlueWrapper>{Product.product_name}</BlueWrapper>
			</DetailElement>
			<DetailElement>
				Price :{" "}
				<BlueWrapper>
					{Product.price} {GetCurrencySymbol(Product.currency)}
				</BlueWrapper>
			</DetailElement>
			{Variant === "Regular" ? (
				<AddToCartElement onClick={() => Dispatch(AddToCart(Product))}>
					<AddShoppingCartIcon />
				</AddToCartElement>
			) : (
				<CartVariantFlexbox>
					<IncrementDecrementComponent Product={Product} />
					<RemoveButton Product={Product} />
				</CartVariantFlexbox>
			)}
		</Card>
	);
};
const Card = styled.div`
	height: fit-content;
	width: fit-content;
	background-color: var(--whitesmoke);
	border-radius: 4px;
	margin: 2em 4em;
	user-select: none;
	padding: 2em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;
const ImageElement = styled.img`
	width: 225px;
	height: 225px;
	pointer-events: none;
`;
const BlueWrapper = styled.span`
	color: var(--blue);
`;
const DetailElement = styled.div`
	margin: 1em;
	width: 100%;
`;
const AddToCartElement = styled.div`
	position: absolute;
	bottom: 25px;
	right: 30px;
	border-radius: 4px;
	box-sizing: initial;
	padding: 4px;
	transition: background-color 0.2s ease;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
		background-color: rgba(0, 0, 0, 0.1);
	}
	&:active {
		background-color: rgba(0, 0, 0, 0.4);
	}
`;
const CartVariantFlexbox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export default ProductCard;
