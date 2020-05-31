import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const UserList = () => {
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
		<div>
			{users.map((user) => {
				return (
					<Link
						to={`/profile/${user.id}`}
						key={user.id}
						className="users"
					>
						<header
							style={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<img
								src={`https://robohash.org/${
									user.id + 1
								}?set=set4&size=30x30`}
								alt="profile"
							/>
							<h4
								style={{
									marginLeft: "5px",
								}}
							>
								{user.name}
							</h4>
						</header>
					</Link>
				);
			})}
		</div>
	);
};
