import { useState, useEffect } from "react";

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const updateMousePosition = (ev: MouseEvent) => {
			setMousePosition({ x: ev.pageX, y: ev.pageY });
		};
		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);
	return mousePosition;
};
export default useMousePosition;
