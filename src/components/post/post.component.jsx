import React, { useState, useEffect } from "react";

export const Post = ({ idUser }) => {
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);
	const [sendMessage, setSendMessage] = useState([]);

	useEffect(() => {
		const getPost = async () => {
			const get = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			const result = await get.json();
			setPost(result);
		};

		const getComments = async () => {
			const get = await fetch(
				"https://jsonplaceholder.typicode.com/comments"
			);
			const result = await get.json();
			setComments(result);
		};

		getComments();
		getPost();
	}, [comments]);

	const handleChange = (e) => {
		let message = e.target.value;
		setSendMessage(message);
	};

	const postMessage = () => {
		fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`, {
			method: "POST",
			body: JSON.stringify({
				title: "foo",
				body: sendMessage,
				userId: idUser,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	};

	return post
		.filter((user) => user.userId === Number(idUser))
		.map((each) => {
			return (
				<div key={each.id}>
					<small>posted on may, 25 2020</small>
					<p style={{ margin: "0px auto" }}>{each.body}</p>
					<small style={{ marginTop: "0px" }}>
						{" "}
						<strong>
							{
								comments.filter(
									(comm) => comm.postId === each.id
								).length
							}{" "}
						</strong>
						comments
					</small>
					{comments
						.filter((comm) => comm.postId === each.id)
						.map((comm) => {
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
									<p style={{ marginLeft: "15px" }}>
										{comm.body}
									</p>
								</div>
							);
						})}
					<input
						type="text"
						placeholder="type comment"
						style={{ marginBottom: "20px" }}
						onChange={handleChange}
					/>
					<button id="send" onClick={postMessage}>
						send
					</button>
				</div>
			);
		});
};
