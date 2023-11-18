import React from "react";
import "./notes.css";
import Note from "./Note";

const Notes = (props) => {
  return (
    <div className="notes">
      {props.notes.length === 0 ? (
        <p>Notes you add will appear here.</p>
      ) : (
        props.notes.map((note, key) => {
          return (
            <Note
              key={key}
              note={note}
              deleteNote={props.deleteNote}
              toggleModal={props.toggleModal}
              setSelectedNote={props.setSelectedNote}
            />
          );
        })
      )}
    </div>
  );
};

export default Notes;
