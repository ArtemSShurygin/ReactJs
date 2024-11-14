import React, {useState} from 'react';

export function CommentsList(params) {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
    ]);

    return comments.map((comment) => <div key={comment.id}>
      <p>{comment.text}</p>
      <button>удалить</button>
      </div>)
}

export default CommentsList;