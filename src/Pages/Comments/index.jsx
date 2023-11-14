import { useState, useEffect } from "react";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5005/comments")
      .then(response => {
        setComments(response.data);
      })
      .catch(error => console.error("Error fetching comments:", error));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editCommentId) {
        // If editing, perform an update
        await axios.put(`http://localhost:5005/comments/${editCommentId}`, {
          author: author,
          description: comment,
        });
        setEditCommentId(null);
      } 
      else {
        // If not editing, perform an add
        const response = await axios.post("http://localhost:5005/comments", {
          author: author,
          description: comment,
        });
        setComments([...comments, response.data]);
      }
      setComment("");
      setAuthor("");
      // Fetch the updated comments after a successful edit
      const updatedComments = await axios.get("http://localhost:5005/comments");
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
      await axios.delete(`http://localhost:5005/comments/${commentId}`);
      setComments((prevComments) => prevComments.filter((c) => c.id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          Comment:
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button type="submit">{editCommentId ? "Update" : "Submit"}</button>
        {editCommentId && (
          <button type="button" onClick={handleCancelEdit}>
            Cancel Edit
          </button>
        )}
      </form>
      <div>
        <h2>Comments:</h2>
        <ul>
          {comments.map((c) => (
            <li key={c.id} className="comment-item">
              <strong>Author: {c.author}:</strong> Description: {c.description}
              <button onClick={() => handleEdit(c.id)}>Edit</button>
              <button onClick={() => handleDelete(c.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Comments;