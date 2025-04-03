import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [ color, setColor] = useState("red");
 
	return (
		<div>
			<div className = "trafic-light">
				<div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " brillo" : "" )}></div>
				<div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " brillo" : "" )}></div>
				<div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " brillo" : "" )}></div>
			</div>
		</div>
	);
};

export default Home;