import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade bottom duration={2000} >
				<Card className="shadow-lg--hover shadow mt-4">
					<CardBody>
						<div className="d-flex ">
							<div className="">
								{
									data.video ?
										<video src={data.url} className='img' controls />
										: <img src={data.url} alt="" className='img' />
								}
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ProjectsCard;
