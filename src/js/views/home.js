import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import RestImg1 from "../../img/restaurant-img-1.jpg";
import FoodImg1 from "../../img/food-img-1.jpg";
import FoodImg2 from "../../img/food-img-2.jpg";

import "../../styles/home.scss";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => (
	<div>
		<Carousel>
			<Carousel.Item>
				<img className="d-block carousel-img " src={RestImg1} alt="First slide" />
				{/* <Carousel.Caption>
					
				</Carousel.Caption> */}
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block carousel-img  " src={FoodImg1} alt="Third slide" />

				{/* <Carousel.Caption>
					<h3>Second slide label</h3>
				</Carousel.Caption> */}
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block carousel-img " src={FoodImg2} alt="Third slide" />

				{/* <Carousel.Caption>
					<h3>Third slide label</h3>
				</Carousel.Caption> */}
			</Carousel.Item>
		</Carousel>
	</div>
);
