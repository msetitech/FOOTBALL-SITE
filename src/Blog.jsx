import { Delete, Edit } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
    image: "",
    avatar: "",
  });
  const [editPostId, setEditPostId] = useState(null);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleAddPost = () => {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
    setNewPost({
      title: "",
      content: "",
      author: "",
      date: "",
      image: "",
      avatar: "",
    });
    handleClosePopup();
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleEditPost = (postId) => {
    const postToEdit = posts.find((post) => post.id === postId);
    setNewPost(postToEdit);
    setEditPostId(postId);
    handleOpenPopup();
  };

  const handleUpdatePost = () => {
    const updatedPosts = posts.map((post) =>
      post.id === editPostId ? { ...newPost, id: editPostId } : post
    );
    setPosts(updatedPosts);
    setNewPost({
      title: "",
      content: "",
      author: "",
      date: "",
      image: "",
      avatar: "",
    });
    setEditPostId(null);
    handleClosePopup();
  };

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
      <button onClick={handleOpenPopup}>Add Post</button>
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
                <div className="menu">
                  <button>...</button>
                  <div className="menu-options">
                    <button onClick={() => handleEditPost(post.id)}>
                      <Edit></Edit>
                    </button>
                    <button onClick={() => handleDeletePost(post.id)}>
                      <Delete></Delete>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Overlay for Popup */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={handleClosePopup}></div>
      )}

      {/* Add/Edit Post Popup */}
      {isPopupOpen && (
        <div className="popup">
          <h2>{editPostId ? "Edit Post" : "Add New Post"}</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newPost.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newPost.author}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="date"
            value={newPost.date}
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            placeholder="Content"
            value={newPost.content}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newPost.image}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="avatar"
            placeholder="Avatar URL"
            value={newPost.avatar}
            onChange={handleInputChange}
          />
          <div>
            <button onClick={editPostId ? handleUpdatePost : handleAddPost}>
              {editPostId ? "Update Post" : "Add Post"}
            </button>
            <button onClick={handleClosePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
