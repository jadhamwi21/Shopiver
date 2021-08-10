import { useRouter } from "next/router";
import React, { useContext } from "react";
import styled from "styled-components";
import { EmptyCart } from "../../redux/actions/ActionCreators";
import { CartActionTypeKeys } from "../../redux/actions/ActionTypeKey";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import { ModalContext } from "./CheckoutModal";
import TableRow from "./TableRow";

interface Props {
	FullName: string;
	Email: string;
}

const CheckoutDetails = ({ FullName, Email }: Props) => {
	const CartItems = useAppSelector((state) => state.Cart.CartItems);
	const TotalPrice = useAppSelector((state) =>
		state.Cart.CartItems.map(
			(item) => parseInt(item.wantedQuantity) * item.price
		).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
	);
	const closeModal = useContext(ModalContext);
	const Dispatch = useAppDispatch();
	const Router = useRouter();
	return (
		<>
			<CheckoutDetailsHeader>Checkout Details</CheckoutDetailsHeader>
			<InfoElement>Full Name : {FullName.toString()}</InfoElement>
			<InfoElement>Email : {Email.toString()}</InfoElement>
			<Table>
				<TableRow Item={undefined} />
				{CartItems.map((item) => (
					<TableRow Item={item} key={item.product_id} />
				))}
			</Table>
			<TotalPriceElement>Total Price Is : {TotalPrice}</TotalPriceElement>
			<ConfirmButton
				onClick={() => {
					alert("Payment Successful, Enjoy :)");
					closeModal!();
					Router.push("/");
					Dispatch(EmptyCart());
				}}
			>
				Confirm
			</ConfirmButton>
		</>
	);
};
const CheckoutDetailsHeader = styled.h3`
	margin: 0 auto;
	color: var(--blue);
`;
const InfoElement = styled.div`
	font-size: 20px;
	margin: 2em auto;
	width: fit-content;
`;
const Table = styled.table`
	width: 100%;
	height: fit-content;
`;
const TotalPriceElement = styled.div`
	margin: 3em auto;
	color: var(--blue);
	width: fit-content;
`;
const ConfirmButton = styled.button`
	background-color: var(--blue);
	border: initial;
	outline: none;
	padding: 1em 2em;
	margin: 1em auto;
	display: block;
	border-radius: 4px;
	color: white;
	&:hover {
		cursor: pointer;
	}
`;

export default CheckoutDetails;
