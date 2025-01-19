import React from "react";

const Select = ({chooseText,optionsArr}) => {
	let htmlOptions= [];
	optionsArr.forEach(opt => {
		htmlOptions.push(<option key={opt} value={opt}>{opt}</option>)
	});
	return (
		// <select style={{fontSize: 18 + 'px',marginLeft: 66 + 'px'}} name="size">
		<select name="size">
			<option value="">{chooseText}</option>
			{htmlOptions}
		</select>)
};

export default Select;
