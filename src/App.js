import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevState) => {
      return [...prevState, note];
    });
  };

  const deleteNote = (id) => {
    setNotes(prevState => {
      return prevState.filter(note => note.id !== id)
    })
  }

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Form addNote={addNote}  />
      <Notes notes={notes} deleteNote={deleteNote} />
      <Modal />
    </div>
  );
}

export default App;
