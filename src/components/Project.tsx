import ProjectCard, { IProject } from "./ProjectCard";

interface ProjectProps {
	projects: IProject[];
	isLoading?: boolean;
}

const Project: React.FC<ProjectProps> = ({ projects, isLoading }) => {
	if (isLoading) {
		return <div>Loading projects...</div>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
};

export default Project;
