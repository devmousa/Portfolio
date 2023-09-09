import CodingLaptopImage from "../images/coding-laptop-image.webp";

const Intro = () => {
	return (
		<section className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-12 px-2 sm:px-24 py-2 sm:py-24 bg-slate-50 text-slate-950">
			<p className="basis-full sm:basis-2/3 p-4 text-center sm:text-left text-lg sm:text-3xl">
				My name is Mousa Aboubaker Hamed, <br />
				I was born in 2005, <br />
				I love programming and technology, <br />
				I try every day to optimize my programming knowledge, <br />
				currently, I'm building websites using my frontend experience
				{/* I learned a lot
				of techniques and tried them all in make simple proejcts this is my rate
				for the techniques that I learned */}
			</p>
			<div className="basis-full sm:basis-1/3 p-4">
				<img
					className="w-full h-full coding-laptop-image-shadow bg-slate-700"
					src={CodingLaptopImage}
					alt="Coding Laptop Image"
				/>
			</div>
		</section>
	);
};

export default Intro;
