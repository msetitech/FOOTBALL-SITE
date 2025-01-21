import React, { useState, useEffect } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/blogData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="blog">
      <h1>Inter Miami Blog</h1>
      <div className="blog-container">
        {posts.length === 0 ? (
          <p>Loading blog posts...</p>
        ) : (
          posts.map((post) => (
            <div className="blog-card" key={post.id}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <div className="author-section">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <h4>{post.author}</h4>
                    <p>{post.date}</p>
                  </div>
                </div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
