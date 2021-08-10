import { useRef } from "react";

interface Args {
	CollectionOfSetIntervalFunctions: { [key: string]: () => void };
	delay: number;
	UpperLimit: number;
	WantedQuantity: number;
}

const useButtonInterval = ({
	CollectionOfSetIntervalFunctions,
	delay,
	UpperLimit,
	WantedQuantity,
}: Args): {
	[key: string]: {
		onMouseDown: () => void;
		onMouseUp: () => void;
		onMouseLeave: () => void;
		onClick: () => void;
	};
} => {
	const IntervalRef = useRef<null | NodeJS.Timer>(null);
	if (WantedQuantity === UpperLimit || WantedQuantity === 1) {
		clearInterval(IntervalRef.current!);
	}
	const onUp = () => clearInterval(IntervalRef.current!);
	const onLeave = () => clearInterval(IntervalRef.current!);
	const onDown = (fn: () => void) => () =>
		(IntervalRef.current = setInterval(fn, delay));
	let ComponentsPropsObject = {};
	Object.entries(CollectionOfSetIntervalFunctions).forEach((Func) => {
		ComponentsPropsObject = {
			...ComponentsPropsObject,
			[Func[0]]: {
				onMouseDown: onDown(Func[1]),
				onClick: Func[1],
				onMouseUp: onUp,
				onMouseLeave: onLeave,
			},
		};
	});
	return ComponentsPropsObject;
};

export default useButtonInterval;
