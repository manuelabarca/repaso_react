import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
	let { user } = useParams();

	return <h1>Contacto: {user}</h1>;
};

export default Contact;
