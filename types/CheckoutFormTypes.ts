export type CheckoutStatusType = "Initial" | "Success" | "Error";

export interface CheckoutFormState {
	fullname: string;
	email: string;
	status: CheckoutStatusType;
}

export enum CheckoutActionTypeKeys {
	UpdateFieldValue,
	UpdateCheckoutStatus,
}
export interface UpdateFieldValue {
	type: CheckoutActionTypeKeys.UpdateFieldValue;
	payload: {
		name: string;
		value: string;
	};
}
export interface UpdateCheckoutStatus {
	type: CheckoutActionTypeKeys.UpdateCheckoutStatus;
	payload: {
		Status: CheckoutStatusType;
	};
}
export type CheckoutActionType = UpdateFieldValue | UpdateCheckoutStatus;
