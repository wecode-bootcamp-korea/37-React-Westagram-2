import "./Comment.scss";

function Comment({ content }) {
  return (
    <li>
      <p>{content}</p>
      <div className="comment-icon-container">
        <img
          className="comment-like-icon"
          src="/images/Leeyunseung/heart.png"
          alt="comment-like-icon"
        />
        <img
          className="comment-delete-icon"
          src="/images/Leeyunseung/x.png"
          alt="comment-delete-icon"
        />
      </div>
    </li>
  );
}

export default Comment;
