import React from "react";
import styled from "styled-components";

interface Props {
	name: string;
	value: string;
	placeholder: string;
	type: string;
}

const FormField = ({ name, value, placeholder, type }: Partial<Props>) => {
	return (
		<InputElement
			name={name}
			placeholder={placeholder}
			type={type}
			spellCheck={false}
			autoComplete="off"
			required
		/>
	);
};
const InputElement = styled.input`
	width: 80%;
	border: solid 1px rgba(0, 0, 0, 0.4);
	font-size: 17px;
	outline: none;
	color: var(--blue);
	border-radius: 2px;
	display: block;
	margin: 1em auto;
	padding: 0.25em;

	padding-left: 0.5em;
	&::placeholder {
		color: var(--blue);
		font-size: 17px;
	}
`;

export default FormField;
