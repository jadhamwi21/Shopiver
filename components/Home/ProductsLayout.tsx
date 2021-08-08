import React from "react";
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
}

const ProductsLayout = ({ children }: Props) => {
	return <Layout>{children}</Layout>;
};
const Layout = styled.main`
	height: fit-content;
	width: 100%;
	padding: 2em 3em;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

export default ProductsLayout;
