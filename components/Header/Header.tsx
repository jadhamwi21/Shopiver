import React, { useEffect } from "react";
import styled from "styled-components";
import { fetchProducts } from "../../api/strapi";
import AppTitle from "./AppTitle";
import Cart from "./Cart";

const Header = () => {
	return (
		<HeaderLayout>
			<AppTitle />
			<Cart />
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
