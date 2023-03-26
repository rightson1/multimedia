import React from "react";

import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { Fade } from "react-reveal";

const Projects = () => {
	return projects && (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-laptop text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-info">Gallery</h4>
					</div>
				</div>
				<Row className="row-grid align-items-center">
					{images.map((data, i) => {
						return <ProjectsCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};
const images = [
	{
		url: '/images/1.mp4',
		caption: 'Slide 1',
		video: true,
	},
	{
		url: '/images/1.jpg',
		caption: 'Slide 1'
	},


	{
		url: '/images/2.jpg',
		caption: 'Slide 3'
	},
	{
		url: '/images/3.jpg',
		caption: 'Slide 3'
	},
	{
		url: '/images/4.jpg',
		caption: 'Slide 3'
	},
	{
		url: '/images/5.jpg',
		caption: 'Slide 3'
	},
	{
		url: '/images/6.jpg',
		caption: 'Slide 3'
	},


];

export default Projects;
