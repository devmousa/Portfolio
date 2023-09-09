const Separator = ({ flipped }: { flipped?: boolean }) => {
	return (
		<div
			className={`w-screen h-12 bg-gradient-to-b from-50% ${
				flipped
					? "from-slate-50 to-transparent"
					: "from-transparent to-slate-50"
			}`}
		></div>
	);
};

export default Separator;
