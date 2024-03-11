import React from "react";
import { useState, useEffect } from "react";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Traffic = () => {
	const [color,setColor] = useState("red")

	const handleClick = () => {
		const colour = ["red", "yellow", "green"];
		if (color=="red") {
			setColor("yellow");
			console.log(color);
		} else if (color=="yellow") {
			setColor("green");
			console.log(color);
		} else if (color=="green") {
			setColor("red");
			console.log(color);
		}	
};

	return (
		<><div className="text-center container">
			<div className="red">
			</div>
			<div className="yellow">
			</div>
			<div className="green">
			</div>
		</div>
		<button onClick={()=> {
			handleClick();
			}}>Holi holi</button></>
	);
};

export default Traffic;
