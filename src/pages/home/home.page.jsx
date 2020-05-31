import React from "react";
import { UserList } from "../../components/user-list/user-list.component";
import { Header } from "../../components/header/header.component";

const HomePage = () => {
	return (
		<div className="homepage">
			<Header />
			<UserList />
		</div>
	);
};

export default HomePage;
