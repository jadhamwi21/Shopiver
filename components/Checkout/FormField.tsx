import React from "react";
import styled from "styled-components";

interface Props {
	name: string;
	placeholder: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({ name, placeholder, type, value, onChange }: Props) => {
	return (
		<InputElement
			name={name}
			placeholder={placeholder}
			type={type}
			spellCheck={false}
			autoComplete="off"
			required
			value={value}
			onChange={onChange}
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
