import React, { useState } from "react";
import InputTextField from "./Forms/InputTextField";

export interface IClientFormData {
	name: string;
	email: string;
	phone: string;
}

interface IFormProps {
	onSubmit: (data: IClientFormData) => void;
	isSubmitting?: boolean;
}

const AddClientForm: React.FC<IFormProps> = ({ onSubmit, isSubmitting }) => {
	const [formData, setFormData] = useState<IClientFormData>({
		name: "",
		email: "",
		phone: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<div className="p-4 max-w-md mx-auto">
			<h2 className="text-2xl font-semibold mb-4">Client Information</h2>
			<form onSubmit={handleSubmit}>
				<InputTextField
					type="text"
					id="name"
					label="Name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<InputTextField
					type="email"
					id="email"
					label="Email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<InputTextField
					type="tel"
					id="phone"
					name="phone"
					label="Phone"
					value={formData.phone}
					onChange={handleChange}
					required
				/>

				<div className="mt-4">
					<button
						disabled={isSubmitting}
						type="submit"
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
					>
						{isSubmitting ? "creating client..." : "Submit"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddClientForm;
