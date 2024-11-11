import logo from "./logo.svg";
import "./App.css";

import Message from "./Message";

let text1 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo deserunt reiciendis dolore eligendi recusandae delectus tempora dicta nostrum quibusdam vero, ipsum totam, sint magni aliquid. Ipsa, debitis? Molestias, officia minus."

let text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti at minus fugiat error magni ducimus vitae saepe officia a?"

function App() {
	return (
		<div className="App">
			<Message num="1" text={text1} />
			<Message num="2" text={text2} />
		</div>
	);
}

// function Message({num, text}) {
//   return (
//     <div>
//       <p>Message {num}: {text}</p>
//     </div>
//   )
// }

export default App;
