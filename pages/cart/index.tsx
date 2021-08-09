import React from "react";
import styled from "styled-components";
import NoItems from "../../components/Cart/NoItems";
import ProductCard from "../../components/ProductCard";
import { useAppSelector } from "../../redux/store/store";

const CartPage = () => {
	const CartItems = useAppSelector((state) => state.Cart.CartItems);
	return (
		<Flexbox Center={CartItems.length === 0}>
			{CartItems.length !== 0 ? (
				CartItems.map((Item) => (
					<ProductCard Product={Item} Variant={"Cart"} key={Item.product_id} />
				))
			) : (
				<NoItems />
			)}
		</Flexbox>
	);
};
const Flexbox = styled.div<{ Center: boolean }>`
	height: fit-content;
	min-height: calc(100vh - 80px);
	width: 100vw;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: ${(props) => (props.Center ? "center" : "flex-start")};
`;

export default CartPage;
