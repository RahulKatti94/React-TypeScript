import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CommentsProps, PostProps } from "../ApiProps";
import axios from "axios";
import ListItem from "../components/ListItem";

const PostDetails = () => {
  const { id } = useParams();
  const [postbody, setPostBody] = useState<PostProps | null>(null);
  const [comments, setComments] = useState<CommentsProps[] | null>(null);

  useEffect(() => {
    bodyData();
  }, [id]);

  const bodyData = async () => {
    try {
      const res = await axios.get<PostProps>(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPostBody(res.data);
      const commentVal = await axios.get<CommentsProps[]>(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setComments(commentVal.data);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(comments);
  return (
    <div className="p-4">
      <>
        {postbody ? (
          <ul className="border rounded-lg shadow-md p-4 mb-6">
            <li>
              <strong>User ID:</strong> {postbody.userId}
              <br />
              <strong>Post ID:</strong> {postbody.id}
              <br />
              <strong>Title:</strong> {postbody.title}
              <br />
              <strong>Body:</strong> {postbody.body}
            </li>
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </>
      <>
        {comments ? (
          <ul className="border rounded-lg shadow-md p-4">
            {comments.map((comment) => (
              <li key={comment.id} className="mb-6">
                <strong>User ID:</strong> {comment.postId}
                <br />
                <strong>Post ID:</strong> {comment.id}
                <br />
                <strong>Name:</strong> {comment.name}
                {/* <br />
                <strong>Email :</strong>
                {comment.email}
                <br />
                <strong>Body :</strong>
                {comment.body} */}
                <ListItem title={comment.email} subtitle={comment.body} />
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </>
      <Link
        to={"/"}
        className="px-4 py-2 text-lg text-white bg-yellow-500 rounded shadow cursor-pointer mb-10 hover:bg-yellow-300"
      >
        Home
      </Link>
    </div>
  );
};

export default PostDetails;

//[ { name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Bob', age: 35 } ]
//{ fruits: ['apple', 'banana', 'orange'], colors: ['red', 'green', 'blue'], numbers: [1, 2, 3] }
