import React, { useState, useEffect } from "react";
import axios from "axios";
const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://ik.imagekit.io/eps5mlna0/image_1p4gb4U9m.jpg",
      caption: "Beautiful scenery",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <section className="feed-section">
      <h1>Feed</h1>

      <div className="posts-container">
        {posts.map((post) => (
          <div className="post-card" key={post._id}>
            <img src={post.image} alt="post" />

            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feed;
