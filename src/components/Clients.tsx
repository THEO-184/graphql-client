import Table from "./Table";
import {
	useAddClient,
	useDeleteClient,
	useFetchClients,
} from "../services/clients";
import Modal, { ModalProps } from "./Modal";
import AddClientForm, { IClientFormData } from "./addClientForm";
import { useGetProjects } from "../services/project";
import Project from "./Project";

const Clients: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const { data, loading, error } = useFetchClients();
	const { data: projects, loading: gettingProjects } = useGetProjects();
	const [deleteClient] = useDeleteClient();
	const [addClient, { loading: adding }] = useAddClient();

	const handleDelete = (clientId: string) => {
		deleteClient({ variables: { id: clientId } });
	};

	console.log({ projects: projects?.projects, gettingProjects });

	const handleAddClient = (data: IClientFormData) => {
		addClient({ variables: { ...data } });
	};

	const handleEdit = (clientId: string) => {};

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error</p>;
	}

	return (
		<div className="mt-28">
			<Project projects={projects?.projects} isLoading={gettingProjects} />
			<div className="my-14"></div>
			<Table data={data} onDelete={handleDelete} onEdit={handleEdit} />
			<Modal isOpen={isOpen} onClose={onClose}>
				<AddClientForm onSubmit={handleAddClient} isSubmitting={adding} />
			</Modal>
		</div>
	);
};

export default Clients;
