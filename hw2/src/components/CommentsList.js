import React, { useState } from "react";

export function CommentsList() {
	const [comments, setComments] = useState([
		{ id: 1, display: true, text: "Это первый комментарий" },
		{ id: 2, display: true, text: "Это второй комментарий" },
		{ id: 3, display: true, text: "Это третий комментарий" },
	]);

	return comments.map((comment) => (
		<div key={comment.id} className="comment">
			<p>{comment.text}</p>
			<button className="btn-delete-comment"
				onClick={() => {
					setComments(comments.filter((thisComment) => thisComment.id !== comment.id));
				}}
			>
				Удалить комментарий
			</button>
		</div>
	));
}

export default CommentsList;
