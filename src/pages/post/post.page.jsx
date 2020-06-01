import React, { useState, useEffect } from "react";

const PostPage = ({ match }) => {
	const [comments, setComments] = useState([]);
	// const [sendMessage, setSendMessage] = useState([]);

	console.log(match.params.postId);

	const { postId } = match.params;

	useEffect(() => {
		const getComments = async () => {
			const get = await fetch(
				`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
			);
			const result = await get.json();
			setComments(result);
		};

		getComments();
	}, []);

	// const handleChange = (e) => {
	// 	let message = e.target.value;
	// 	setSendMessage(message);
	// };

	// const postMessage = () => {
	// 	fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`, {
	// 		method: "POST",
	// 		body: JSON.stringify({
	// 			title: "foo",
	// 			body: sendMessage,
	// 			userId: idUser,
	// 		}),
	// 		headers: {
	// 			"Content-type": "application/json; charset=UTF-8",
	// 		},
	// 	})
	// 		.then((response) => response.json())
	// 		.then((json) => console.log(json));
	// };

	return (
		<div>
			{comments.map((comm) => {
				return (
					<div key={comm.id} className="comments">
						<h5
							style={{
								marginLeft: "15px",
								marginBottom: "-10px",
							}}
						>
							{comm.email}
						</h5>
						<p style={{ marginLeft: "15px" }}>{comm.body}</p>
					</div>
				);
			})}
			<input
				type="text"
				placeholder="type comment"
				style={{ marginBottom: "20px" }}
			/>
			<button id="send" onClick={postMessage}>
				send
			</button>
		</div>
	);
};

export default PostPage;
