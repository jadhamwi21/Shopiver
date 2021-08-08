import React from "react";
import styled from "styled-components";

interface Props {}

const AppTitle = (props: Props) => {
	return <AppTitleElement>Shopiver</AppTitleElement>;
};
const AppTitleElement = styled.h2`
	color: var(--blue);
	font-weight: 600;
`;
export default AppTitle;
