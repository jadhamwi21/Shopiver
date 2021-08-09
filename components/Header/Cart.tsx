import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "next/link";
import { useAppSelector } from "../../redux/store/store";
import { useRouter } from "next/dist/client/router";

const Cart = () => {
	const NumberOfItemsInCart = useAppSelector(
		(state) => state.Cart.CartItems.length
	);
	const Router = useRouter();
	return (
		<>
			{Router.pathname !== "/cart" && (
				<Link href="/cart" passHref={true}>
					<CartWrapper>
						<ShoppingCartIcon />
						{NumberOfItemsInCart !== 0 && (
							<CartItemsCountContainer>
								{NumberOfItemsInCart}
							</CartItemsCountContainer>
						)}
					</CartWrapper>
				</Link>
			)}
		</>
	);
};
const CartWrapper = styled.div`
	height: 100%;
	width: fit-content;
	position: relative;
	padding: 0px 1.2em;
	border-radius: 4px;
	display: grid;
	place-items: center;
	transition: background-color 0.1s ease;
	&:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.1);
	}
	&:active {
		background-color: rgba(0, 0, 0, 0.2);
	}
`;
const CartItemsCountContainer = styled.div`
	position: absolute;
	top: 10px;
	right: 4px;
	height: fit-content;
	width: fit-content;
	padding: 1px 4px;
	background-color: var(--blue);
	border-radius: 15px;
	line-height: 1;
	color: white;
`;

export default Cart;
