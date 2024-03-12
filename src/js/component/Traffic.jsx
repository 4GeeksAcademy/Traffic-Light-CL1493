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
			<div onClick={()=> {setColor("red")}} className= {"red" + (color === "red" ? "red": "")}></div>
			<div onClick={()=> {setColor("yellow")}} className= {"yellow" + (color === "yellow" ? "glow": "")}></div>
			<div onClick={()=> {setColor("green")}} className= {"green" + (color === "green" ? "glow": "")}></div>
		</div>
		<button onClick={()=> {
			handleClick();
			}}>Cambia el semáforo</button></>
	);
};

export default Traffic;
