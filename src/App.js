import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

function App() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActiveSidebar, setIsActiveSidebar] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const addNote = (note) => {
    setNotes((prevState) => {
      return [...prevState, note];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevState) => {
      return prevState.filter((note) => note.id !== id);
    });
  };

  const editNote = (note) => {
    setNotes((prevState) => {
      return prevState.map((item) => {
        if (item.id === note.id) {
          return {
            id: item.id,
            title: note.title,
            text: note.text,
          };
        }
        return item;
      });
    });
  };

  return (
    <div className="App">
      <Navbar setIsActiveSidebar={setIsActiveSidebar} />
      <Sidebar isActiveSidebar={isActiveSidebar} setIsActiveSidebar={setIsActiveSidebar} />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          selectedNote={selectedNote}
          editNote={editNote}
        />
      )}
    </div>
  );
}

export default App;
