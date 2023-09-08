import React from "react";

export interface InputFieldProps
	extends React.ComponentPropsWithoutRef<"input"> {
	label?: string;
}

const InputTextField: React.FC<InputFieldProps> = ({
	label,
	...restOfProps
}) => {
	return (
		<div className="mb-4">
			{label ? (
				<label
					htmlFor={label}
					className="block text-sm font-medium text-gray-700"
				>
					{label}
				</label>
			) : null}
			<input
				{...restOfProps}
				id={label}
				className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
				required
			/>
		</div>
	);
};

export default InputTextField;
