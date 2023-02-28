import { useState } from 'react';
import './PostForm.css';

export default function PostForm({ title = '', description = ' ', submitHandler }) {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitHandler(titleInput, descriptionInput);
  };

  return (
    <form className="new-post-form" onSubmit={handleFormSubmit}>
      <div>
        <label className="form-title">Title</label>
        <input
          className="title-input"
          type="text"
          name="title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </div>
      <div>
        <label className="form-title">Description</label>
        <textarea
          className="description-input"
          type="text"
          name="description"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
