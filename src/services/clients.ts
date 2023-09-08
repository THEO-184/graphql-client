import { useMutation, useQuery } from "@apollo/client";
import { ADD_CLIENT, DELETE_CLIENT, GET_CLIENTS } from "../apis/client";

export const useFetchClients = () => {
	return useQuery(GET_CLIENTS);
};

export const useDeleteClient = () => {
	return useMutation(DELETE_CLIENT, {
		update(cache, { data: { deleteClient } }) {
			const { clients } = cache.readQuery({ query: GET_CLIENTS }) as any;
			cache.writeQuery({
				query: GET_CLIENTS,
				data: {
					clients: clients.filter(
						(client: any) => client.id !== deleteClient.id
					),
				},
			});
		},
	});
};

export const useAddClient = () => {
	return useMutation(ADD_CLIENT, {
		refetchQueries: [{ query: GET_CLIENTS }],
		onError(error, clientOptions) {
			console.log("error", error);
		},
	});
};
