import { gql } from "@apollo/client";

export const GET_CLIENTS = gql(`
	query getClients {
		clients {
			id
			name
			email
			phone
		}
	}
`);

export const DELETE_CLIENT = gql(`
    mutation deleteClient($id: ID!) {
            deleteClient(id: $id){
				id
				name
				email
				phone
			} 
    }
    `);

export const ADD_CLIENT = gql(`
		mutation addClient($name:String!, $email:String!, $phone:String!){
			addClient(name:$name,email:$email,phone:$phone){
				id
				name
				email
				phone
			}
		}
	`);
