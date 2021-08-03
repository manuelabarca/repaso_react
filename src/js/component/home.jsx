import React from "react";
import { Link } from "react-router-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let personajes = [
		{
			name: "Luke",
			id: 1
		}
	];
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			{personajes.map(personaje => (
				<Link
					to={`/character/${personaje.id}`}
					className="btn btn-success">
					Ver más
				</Link>
			))}

			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
