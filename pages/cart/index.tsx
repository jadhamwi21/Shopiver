import React from "react";
import { useAppSelector } from "../../redux/store/store";

interface Props {}

const Cart = (props: Props) => {
	const CartItems = useAppSelector((state) => state.Cart.CartItems);
	console.log(CartItems);
	return <div></div>;
};

export default Cart;
