import { useState, useEffect } from "react";
import { AiFillProject } from "react-icons/ai";

interface Props {
	openModal: () => void;
}

const Header: React.FC<Props> = ({ openModal }) => {
	const [isSticky, setIsSticky] = useState(false);

	// Function to handle scroll event
	const handleScroll = () => {
		if (window.scrollY > 112) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`bg-white top-0 p-4 sticky transition-all duration-300 h-28 ${
				isSticky ? "z-50  shadow-lg " : ""
			}`}
		>
			<div className="flex items-center justify-between h-full">
				<div className="text-xl text-blue-800 font-extrabold">PMT</div>

				<div className="flex items-center gap-x-3">
					<button
						className="px-5 py-1 rounded-md hover:bg-blue-600 transition-colors bg-blue-500 text-white"
						onClick={openModal}
					>
						Add Client
					</button>
					<h4>ProjectMgmt</h4>
				</div>
			</div>
		</nav>
	);
};

export default Header;
