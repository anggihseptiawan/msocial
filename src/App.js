import React from "react";
import HomePage from "./pages/home/home.page";
import { Route } from "react-router-dom";
import ProfilePage from "./pages/profile/profile.page";
import PostPage from "./pages/post/post.page";

function App() {
	return (
		<div className="App">
			<div className="container">
				<Route exact path="/" component={HomePage} />
				<Route exact path="/profile/:userId" component={ProfilePage} />
				<Route exact path="/post-detail/:postId" component={PostPage} />
			</div>
		</div>
	);
}

export default App;
