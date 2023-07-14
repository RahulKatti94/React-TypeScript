import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetails from "./container/PostDetails";
import UserInfo from "./container/UserInfo";
import UserPosts from "./container/UserPosts";
import Users from "./container/Users";

function App() {
  return (
    <div>
      {/* <PlayList /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:id" element={<UserInfo />} />
          <Route path="/:id/posts" element={<UserPosts />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
