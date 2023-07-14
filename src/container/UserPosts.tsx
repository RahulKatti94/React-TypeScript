import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostProps } from "../ApiProps";
import axios from "axios";
import ListItems from "../components/ListItem";

const UserPosts = () => {
  const [posts, setPosts] = useState<PostProps[] | null>(null);
  const param = useParams();

  useEffect(() => {
    appData();
  }, [param]);

  const appData = async () => {
    try {
      const response = await axios.get<PostProps[]>(
        `https://jsonplaceholder.typicode.com/users/${param.id}/posts`
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(posts);

  return (
    <div className="p-4">
      {posts ? (
        <ul className="border rounded-lg shadow-md p-4">
          {posts.map((post) => (
            <li key={post.id} className="mb-6">
              <strong>User ID:</strong> {post.userId}
              <br />
              <strong>Post ID:</strong> {post.id}
              <br />
              <ListItems
                title={post.title}
                subtitle={post.body}
                btnName={"Details"}
                link={`/posts/${post.id}`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserPosts;
