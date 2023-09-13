import { useState } from "react";
import Clients from "./components/Clients";
import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

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
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home isOpen={isModalOpen} onClose={closeModal} />,
		},
		{
			path: "projects/:id",
			element: <Project />,
		},
	]);

	return (
		<div className="mx-6">
			<ApolloProvider client={client}>
				<Header openModal={openModal} />
				<RouterProvider router={router} />
			</ApolloProvider>
		</div>
	);
}

export default App;
