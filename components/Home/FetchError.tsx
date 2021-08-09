import React from "react";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
const FetchError = () => {
	const router = useRouter();
	return (
		<Wrapper>
			<div>
				<BlueWrapper>An Error Has Occured</BlueWrapper>
				<br />
				<LinkElement onClick={() => router.reload()}>
					Click On This Link To Refresh
				</LinkElement>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	display: grid;
	place-items: center;
	text-align: center;
`;
const BlueWrapper = styled.div`
	color: var(--blue);
`;
const LinkElement = styled.a`
	color: inherit;
	&:visited {
		color: inherit;
	}
	&:hover {
		cursor: pointer;
	}
`;

export default FetchError;
