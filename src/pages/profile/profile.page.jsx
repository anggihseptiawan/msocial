import React, { useState, useEffect } from "react";
import { Post } from "../../components/post/post.component";

const ProfilePage = (props) => {
	const [users, setUser] = useState([]);

	useEffect(() => {
		const getUser = async () => {
			const get = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const result = await get.json();
			setUser(result);
		};
		getUser();
	}, []);

	return (
		<div className="profile">
			<h2>Profile Page</h2>
			{users
				.filter((user) => user.id === Number(props.match.params.userId))
				.map((item) => {
					return (
						<div
							key={item.id}
							className="profile"
							style={{ display: "flex", marginBottom: "20px" }}
						>
							<img
								src={`https://robohash.org/${
									item.id + 1
								}?set=set4&size=120x120`}
								alt="profile"
							/>

							<div className="bio" style={{ marginLeft: "20px" }}>
								<h4 style={{ margin: "0 auto" }}>
									{item.name}
								</h4>
								<p style={{ margin: "0 auto" }}>{item.email}</p>
								<p
									style={{ margin: "0 auto" }}
								>{`${item.address.suite}, ${item.address.street}, ${item.address.city}`}</p>
								<p style={{ margin: "0 auto" }}>{item.phone}</p>
							</div>
						</div>
					);
				})}
			<Post idUser={props.match.params.userId} />
		</div>
	);
};

export default ProfilePage;
