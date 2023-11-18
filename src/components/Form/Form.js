import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isActiveForm, setIsActiveForm] = useState(false);

  const handleTitleChange = (event) => setTitle(event.target.value);

  const handleTextChange = (event) => {
    setText(event.target.value);
    setIsActiveForm(true);
  };
  

  function submitFormHandler(event) {
    event.preventDefault();

    const note = {
      id: Math.random() + "now",
      title: title,
      text: text,
    };

    props.addNote(note);
    setTitle("");
    setText("");

    setIsActiveForm(false);
  }

  const handleFormClick = () => {
    setIsActiveForm(true);
  };

  return (
    <>
      <div className="form-container active-form" onClick={handleFormClick}>
        <form
          onSubmit={submitFormHandler}
          className={isActiveForm ? "main-form form" : "main-form"}
          id="form"
        >
          {isActiveForm && (
            <input
              type="text"
              id="note-title"
              className="note-title"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
          )}

          <input
            type="text"
            id="note-text"
            className="note-text"
            placeholder="Take a note..."
            value={text}
            onChange={handleTextChange}
          />
          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    add_alert
                  </span>
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    person_add
                  </span>
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    palette
                  </span>
                  <span className="tooltip-text">Background options</span>
                </div>
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    image
                  </span>
                  <span className="tooltip-text">Add image</span>
                </div>
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    archive
                  </span>
                  <span className="tooltip-text">Archive</span>
                </div>
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    more_vert
                  </span>
                  <span className="tooltip-text">More</span>
                </div>
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button className="close-btn">Close</button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-icons-outlined hover">check_box</span>
                <span className="tooltip-text">New list</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover">brush</span>
                <span className="tooltip-text">New note with drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover">image</span>
                <span className="tooltip-text">New note with image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
