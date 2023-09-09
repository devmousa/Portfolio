import { useRef, useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";

const MouseFollower = () => {
	const div = useRef<HTMLDivElement>(null);
	const mousePosition = useMousePosition();

	useEffect(() => {
		if (div.current) {
			div.current.style.left = mousePosition.x - 50 + "px";
			div.current.style.top = mousePosition.y - 50 + "px";
		}
	}, [mousePosition]);
	return (
		<div
			className="absolute w-20 h-20 rounded-full bg-sky-400 blur-3xl -z-10"
			ref={div}
		></div>
	);
};

export default MouseFollower;
