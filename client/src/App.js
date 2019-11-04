import React, { Component } from "react";
import NoteComponent from "./components/NoteComponent";
import "./App.css";

class App extends Component {
  state = {
    notes: [],
    loading: true
  };

  fetchAPI = () => {
    fetch("/api/notes")
      .then(res => res.json())
      .then(noteData => this.setState({ notes: [...noteData], loading: false }))
      .catch(err => err);
  };

  componentDidMount() {
    this.fetchAPI();
  }

  componentDidUpdate() {
    this.fetchAPI();
  }

  addNote = () => {
    const newNote = prompt("Enter a new note");

    if (newNote) {
      fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          note: newNote
        })
      });
    }
  };

  deleteNote = noteId => {
    fetch(`api/notes/${noteId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: noteId
      })
    })
      .then(console.log("DELETION SUCCESSFUL"))
      .catch(err => err);
  };

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Notes</h1>
        </div>

        {this.state.loading ? (
          <h1>Loading notes...</h1>
        ) : (
          <NoteComponent data={this.state} deleteNote={this.deleteNote} />
        )}

        <div>
          <button className="add-note" onClick={this.addNote}>
            + Add Note
          </button>
        </div>
      </div>
    );
  }
}

export default App;
