import { useState } from "react";
import dataCatalogProducts from "data/catalogProducts";

const Filter = ({ names }) => {
  // const parseDataCatalogProducts = JSON.parse(dataCatalogProducts);
	// const [checkedState, setCheckedState] = useState(new Array(names.length).fill(false));
	// console.log(checkedState);

	// const handleOnChange = (position, checkboxNames = names) => {
	// 	//console.log(position);
  //   names = checkboxNames;
  //   // console.log(names);
	// 	const updatedCheckedState = checkedState.map((item, index) => {
	// 		if (index === position) {
	// 			if (item === false) {
	// 				return names[index];
	// 			} else {
	// 				return false;
	// 			}
	// 		}
  //     return item;
	// 	});

	// 	setCheckedState(updatedCheckedState);

	// };
	return (
		<details className="filter__sort__item">
			<summary className="filter__sort__item__summary">
				SIZE
				<svg width="11" height="5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M5.002 5.002a.714.714 0 0 1-.457-.164L.258 1.266a.715.715 0 0 1 .915-1.1l3.83 3.2L8.831.28a.714.714 0 0 1 1.007.107.714.714 0 0 1-.1 1.043L5.452 4.88a.714.714 0 0 1-.45.122Z"
						fill="#6F6E6E"
					/>
				</svg>
			</summary>
			<div className="filter__sort__item__box">
				{names.map((name, index) => {
					return (
						<div key={`sort-${index}`} className="filter__sort__item__box__check">
							<input
								id={`sort__check-${index}`}
								type="checkbox"
								checked={checkedState[index]}
								onChange={() => handleOnChange(index)}
							/>
							<label htmlFor="#">{name}</label>
						</div>
					);
				})}
			</div>
		</details>
	);
};

export default Filter;
