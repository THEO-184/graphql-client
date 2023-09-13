import React from "react";

export interface IProject {
	id: string;
	name: string;
	status: string;
}

interface ProjectCardProps {
	project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<div className="p-4 border rounded-lg shadow-md">
			<h2 className="text-xl font-semibold mb-2">{project.name}</h2>
			<p className="text-gray-600 mb-4">{project.status}</p>
			<a
				href={project?.id} // Replace with the actual link you want to use
				className="text-blue-500 hover:underline"
			>
				View
			</a>
		</div>
	);
};

export default ProjectCard;
