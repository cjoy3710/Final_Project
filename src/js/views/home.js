import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import FoodImg3 from "../../img/food-img-3.jpg";
import FoodImg4 from "../../img/food-img-4.jpg";
import FoodImg5 from "../../img/food-img-5.jpg";
import "../../styles/index.scss";
import Carousel from "react-bootstrap/Carousel";
import { Footer } from "../component/footer";

export const Home = () => (
	<div>
		<Carousel>
			<Carousel.Item>
				<img className="d-block carousel-img img-responsive" src={FoodImg3} alt="First slide" />
				{/* <Carousel.Caption>
					
				</Carousel.Caption> */}
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block carousel-img img-responsive" src={FoodImg4} alt="Third slide" />

				{/* <Carousel.Caption>
					<h3>Second slide label</h3>
				</Carousel.Caption> */}
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block  carousel-img img-responsive" src={FoodImg5} alt="Third slide" />

				{/* <Carousel.Caption>
					<h3>Third slide label</h3>
				</Carousel.Caption> */}
			</Carousel.Item>
		</Carousel>
		<Footer />
	</div>
);
