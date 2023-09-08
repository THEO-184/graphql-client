import { useState } from "react";
import Clients from "./components/Clients";
import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Modal from "./components/Modal";

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				clients: {
					merge(existing, incoming) {
						return incoming;
					},
				},
				projects: {
					merge(existing, incoming) {
						return incoming;
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	uri: "http://localhost:5002/graphql",
	cache,
});

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<ApolloProvider client={client}>
				<Header openModal={openModal} />
				<div className="h-[210vh]">
					<Clients isOpen={isModalOpen} onClose={closeModal} />
				</div>
			</ApolloProvider>
		</>
	);
}

export default App;
