import React, { useState } from "react";
import Clients from "../components/Clients";
import { ModalProps } from "../components/Modal";

const Home: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	return (
		<div className="h-[210vh]">
			<Clients isOpen={isOpen} onClose={onClose} />
		</div>
	);
};

export default Home;
