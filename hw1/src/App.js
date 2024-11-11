import logo from "./logo.svg";
import "./App.css";

//import Message from "./Message";

function App() {
	return (
		<div className="App">
			<Message num="1" text="Message text 1" />
			<Message num="2" text="Message text 2" />
		</div>
	);
}

function Message({num, text}) {
  return (
    <div>
      <p>Message {num}: {text}</p>
    </div>
  )
}

export default App;
