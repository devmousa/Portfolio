import MousaImage from "../images/MousaImage.png";

const Header = () => {
	return (
		<header className="h-screen flex flex-col sm:flex-row relative">
			{/* <div className="absolute -left-1/3 right-0 -top-1/3 h-80 max-w-lg bg-transparent bg-gradient-to-br from-indigo-400 via-teal-900 to-pink-400 gradient-change-animation blur-[118px] z-0"></div> */}
			<div className="absolute -left-1/3 right-0 -top-1/3 h-80 max-w-sm bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-400 bg-transparent blur-[118px] z-0"></div>
			<section className="w-full sm:w-8/12 h-full flex flex-col justify-center items-center">
				<div className="p-4 bg-opacity-20 bg-slate-950 rounded backdrop-blur">
					<h1 className="text-white text-3xl sm:text-6xl">Hi, I'm Mousa</h1>
					<h2 className="text-slate-100 text-xl sm:text-4xl">
						Frontend Developer
					</h2>
				</div>
			</section>
			<section className="w-full sm:w-4/12 h-full relative">
				<div className="absolute inset-0 m-auto h-80 max-w-sm rounded-full bg-transparent opacity-50 bg-gradient-to-b from-indigo-400 via-cyan-300 to-pink-400 blur-[118px] z-0"></div>
				<img
					className="absolute inset-0 m-auto aspect-square w-[95%] bg-sky-400 bg-opacity-10 rounded-t-full rounded-b-[30rem]"
					src={MousaImage}
					alt="Mousa Image"
				/>
			</section>
		</header>
	);
};

export default Header;
