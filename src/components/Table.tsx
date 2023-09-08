import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export interface Props {
	data: any;
	onEdit: (id: string) => void;
	onDelete: (id: string) => void;
}

const Table = ({ data, onDelete, onEdit }: Props) => {
	return (
		<table className="min-w-full divide-y divide-gray-200">
			<thead>
				<tr>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Name
					</th>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Email
					</th>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Phone
					</th>
					<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
						Actions
					</th>
				</tr>
			</thead>
			<tbody className="bg-white divide-y divide-gray-200 ">
				{data &&
					data?.clients?.map((client: any) => (
						<tr key={client?.id}>
							<td className="px-6 py-4 whitespace-nowrap">{client?.name}</td>
							<td className="px-6 py-4 whitespace-nowrap">{client?.email}</td>
							<td className="px-6 py-4 whitespace-nowrap">{client?.phone}</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<button
									onClick={() => onEdit(client?.id!)}
									className="text-indigo-600 hover:text-indigo-900"
								>
									<FaEdit />
								</button>
								<button
									onClick={() => onDelete(client?.id!)}
									className="ml-2 text-red-600 hover:text-red-900"
								>
									<FaTrash />
								</button>
							</td>
						</tr>
					))}
			</tbody>
		</table>
	);
};

export default Table;
