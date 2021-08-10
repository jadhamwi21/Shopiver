import React from "react";
import styled from "styled-components";
import ProductInterface from "../../types/ProductInterface";

interface Props {
	Item?: ProductInterface;
}

const TableRow = ({ Item }: Props) => {
	return (
		<>
			{Item ? (
				<TableRowElement>
					<TableCell>{Item.product_name}</TableCell>
					<TableCell>{Item.price}</TableCell>
					<TableCell>{Item.wantedQuantity}</TableCell>
					<TableCell>{Item.price * parseInt(Item.wantedQuantity)}</TableCell>
				</TableRowElement>
			) : (
				<TableRowElement>
					<TableCell>Product Name</TableCell>
					<TableCell>Product Price</TableCell>
					<TableCell>Wanted Quantity</TableCell>
					<TableCell>Total</TableCell>
				</TableRowElement>
			)}
		</>
	);
};
const TableRowElement = styled.tr`
	width: 100%;
`;
const TableCell = styled.td`
	text-align: left;
	padding: 1em;
`;

export default TableRow;
