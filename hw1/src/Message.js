function Message({ num, text }) {
	return (
		<div class="message container">
			<p class="message__title">Message {num}</p>
			<p class="message__text">{text}</p>
		</div>
	);
}

export default Message;
