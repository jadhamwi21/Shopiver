import React from "react";
import styled from "styled-components";

export const NoItems = () => {
	return <Wrapper>No Cart Items</Wrapper>;
};
const Wrapper = styled.h3`
	color: var(--blue);
	font-size: 40px;
`;

export default NoItems;
