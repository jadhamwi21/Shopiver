import React from "react";
import styled from "styled-components";
import Link from "next/link";
interface Props {}

const AppTitle = (props: Props) => {
	return (
		<Link href="/">
			<AppTitleElement>Shopiver</AppTitleElement>
		</Link>
	);
};
const AppTitleElement = styled.h2`
	color: var(--blue);
	font-weight: 600;
	&:hover {
		cursor: pointer;
	}
`;
export default AppTitle;
