import { useState, useEffect } from "react";
import axios from "axios";

function AddComment({launchId}) {

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);

  useEffect(() => {
    axios.get("https://spacex-backend-project.onrender.com/comments")
      .then(response => {
        setComments(response.data);
      })
      .catch(error => console.error("Error fetching comments:", error));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editCommentId) {
        await axios.put(`https://spacex-backend-project.onrender.com/comments/${editCommentId}`, {
          author: author,
          description: comment,
          rocketId: launchId,
        });
        setEditCommentId(null);
      }
      else {
        const response = await axios.post("https://spacex-backend-project.onrender.com/comments", {
          author: author,
          description: comment,
          rocketId: launchId,
        
        });
        setComments([...comments, response.data]);
      }
      setComment("");
      setAuthor("");
      const updatedComments = await axios.get("https://spacex-backend-project.onrender.com/comments");
      setComments(updatedComments.data);
      } catch (error) {
      console.error("Error adding/updating comment: ", error);
    }
  }

  const handleEdit = (commentId) => {
    setEditCommentId(commentId);
    const commentToEdit = comments.find((c) => c.id === commentId);
    setAuthor(commentToEdit.author);
    setComment(commentToEdit.description);
  };

  const handleCancelEdit = () => {
    setComment("");
    setAuthor("");
    setEditCommentId(null);
  };

  const handleDelete = async (commentId) => {
    try {
      await axios.delete(`https://spacex-backend-project.onrender.com/comments/${commentId}`);
      setComments((prevComments) => prevComments.filter((c) => c.id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="add-comment">
      <form className="add-comment__form" onSubmit={handleSubmit}>
        <div className="add-comment__field">
          <label className="add-comment__label">
            Author:
            <input
              type="text"
              name="author"
              className="add-comment__input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
        </div>
        <div className="add-comment__field">
          <label className="add-comment__label">
            Comment:
            <input
              type="text"
              name="comment"
              className="add-comment__input"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
        </div>
        <button className="add-comment__submit-btn" type="submit">
          {editCommentId ? "Update" : "Submit"}
        </button>
        {editCommentId && (
          <button
            className="add-comment__cancel-btn"
            type="button"
            onClick={handleCancelEdit}
          >
            Cancel Edit
          </button>
        )}
      </form>
      <div className="add-comment__comments-section">
        <h2 className="add-comment__comments-title">Comments:</h2>
        <ul className="add-comment__comments-list">
          {comments.filter(comment => comment.rocketId === launchId).map((c) => (
            <li key={c.id} className="add-comment__comment-item">
              <strong>Author: </strong>{c.author}<strong> Description: </strong>{c.description}
              <button className="add-comment__edit-btn" onClick={() => handleEdit(c.id)}>Edit</button>
              <button className="add-comment__delete-btn" onClick={() => handleDelete(c.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default AddComment;