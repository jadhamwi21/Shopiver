import React from "react";
import styled from "styled-components";
import AppTitle from "./AppTitle";
import Cart from "./Cart";
import { useRouter } from "next/router";
import Checkout from "./Checkout";
const Header = () => {
	const Router = useRouter();
	return (
		<HeaderLayout>
			<AppTitle />
			{/*This Conditional Rendering Statement Means That If The Pathname Was On The Home Page Show Cart Button, Otherwise Show Checkout Button(On Cart Page)*/}
			{Router.pathname === "/" ? <Cart /> : <Checkout />}
		</HeaderLayout>
	);
};
const HeaderLayout = styled.header`
	width: 100%;
	height: 80px;
	background-color: var(--whitesmoke);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0px 2em;
	user-select: none; ;
`;

export default Header;
