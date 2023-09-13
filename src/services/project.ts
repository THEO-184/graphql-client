import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../apis/project";

export const useGetProjects = () => {
	return useQuery(GET_PROJECTS);
};
