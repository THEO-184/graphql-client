import { useQuery } from "@apollo/client";
import { GET_PROJECT, GET_PROJECTS } from "../apis/project";

export const useGetProjects = () => {
	return useQuery(GET_PROJECTS);
};

export const useGetSingleProject = (id: string) => {
	return useQuery(GET_PROJECT, {
		variables: { id },
	});
};
