import React, { useState } from "react";

const Note = (props) => {
  // const [title, setTitle] = useState(props.note.title);
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleNoteClick() {
    console.log("");
  }

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  const deleteHandler = () => props.deleteNote(props.note.id)

  return (
    <div
      className="note"
      id={props.note.id}
      onClick={handleNoteClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      // onmouseover="" onmouseout=""
    >
      <span
        className="material-icons check-circle"
        style={{ visibility: isMouseOver ? "visible" : "hidden" }}
      >
        check_circle
      </span>

      <span className="title">{props.note.title}</span>
      <span className="text">{props.note.text}</span>
      <div
        className="note-footer"
        style={{ visibility: isMouseOver ? "visible" : "hidden" }}
      >
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
        <div className="tooltip archive" onClick={deleteHandler}>
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
      </div>
    </div>
  );
};

export default Note;
