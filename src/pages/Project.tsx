import { ImPhone, ImMail, ImProfile } from "react-icons/im";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProject } from "../services/project";

const Project = () => {
	const { id } = useParams();
	const { data, error, loading } = useGetSingleProject(id as string);

	if (loading) {
		return <div>loading....</div>;
	}

	if (error) {
		return <div>error occured..</div>;
	}

	return (
		<div>
			<div className="p-4 border rounded-lg max-w-2xl mx-auto">
				<div className="flex justify-between items-center">
					<h2 className="text-xl font-semibold mb-2">{data?.project?.name}</h2>
					<Link to="/">Back</Link>
				</div>
				<p className="text-xl font-semibold mb-2">
					{data?.project?.description}
				</p>
				<div>
					<h6>Project Status</h6>
					<p className="text-gray-600 mb-4">{data?.project?.status}</p>
				</div>

				<div className="">
					<h1 className="font-bold">Client Information</h1>

					<div className="p-2 border divide-y rounded-lg space-y-4 mx-auto">
						<div className="flex space-x-2 items-center">
							<span>
								<ImProfile />
							</span>
							<span>{data?.project?.client?.name}</span>
						</div>
						<div className="flex space-x-2 items-center">
							<span>
								<ImMail />
							</span>
							<span>{data?.project?.client?.email}</span>
						</div>
						<div className="flex space-x-2 items-center">
							<span>
								<ImPhone />
							</span>
							<span>{data?.project?.client?.phone}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
