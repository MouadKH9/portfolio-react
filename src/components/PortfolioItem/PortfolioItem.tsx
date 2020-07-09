import React from "react";
import { ProjectInterface } from "../../parts/Portfolio/types";
import "./PortfolioItem.css";
import TagImage from "../TagImage/TagImage";

export default function PortfolioItem({ project }: { project: any }) {
	return (
		<>
			<div className="laptop">
				<div className="laptop-screen">
					<div className="laptop-content">
						<img
							className="img-fluid"
							src={project.image}
							alt=""
							data-top="0"
							style={{ top: 0 }}
						/>
					</div>
				</div>
				<div className="laptop-base">
					<div className="laptop-trackpad"></div>
				</div>
			</div>
			<h3 className="text-center bold mt-3 text-dark">{project.title}</h3>
			<div>
				{project.tags.map((tag: string) => (
					<TagImage name={tag} />
				))}
			</div>
		</>
	);
}
