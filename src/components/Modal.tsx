import React from "react";
import "../styles/modal.css";

export interface ModalProps extends React.PropsWithChildren {
	isOpen: boolean;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className="fixed inset-0 bg-black opacity-50"></div>
			<div className="modal-container">
				<div className="modal-content">
					<button
						className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
						onClick={onClose}
					>
						Close
					</button>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
