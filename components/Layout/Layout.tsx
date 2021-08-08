import React from "react";
import Header from "../Header/Header";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
