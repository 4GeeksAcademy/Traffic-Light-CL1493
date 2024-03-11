import React from "react";
import { useState, useEffect } from "react";
import "./Traffic.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Traffic = () => {
	const [color,setColor] = useState("red")

	const handleClick = () => {
	useEffect(() => {
		setColor ("yellow");
		setColor ("green");
	},[color])	
};
const handleClick1 = () => {
	setColor ("green");
};

	return (
		<><div className="text-center container">
			<div className="red">{color}
			</div>
			<div className="yellow">
			</div>
			<div className="green">
			</div>
		</div><button onClick={handleClick, handleClick1}></button></>
	);
};

export default Traffic;
