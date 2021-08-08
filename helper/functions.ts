import { Currency } from "../types/ProductInterface";
export const GetCurrencySymbol = (Curr: Currency) => {
	switch (Curr) {
		case "dollar":
			return "$";
		case "euro":
			return "€";
		case "pound":
			return "£";
	}
};
