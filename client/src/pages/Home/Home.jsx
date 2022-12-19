import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.scss";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  });

  return (
    <div className="Home">
      {posts.map((post, i) => {
        return (
          <div key={i}>
            <div>{post.username}</div>
            <div>{post.title}</div>
            <div>{post.desc}</div>
            <div>{post.createdAt}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
