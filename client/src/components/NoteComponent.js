import React from "react";

const NoteComponent = props => {
  return (
    <div className="note-list">
      {props.data.notes.map(({ _id, note }) => (
        <div className="list-item">
          <h3 key={_id}>{note}</h3>
          <button className="delete-note" onClick={() => props.deleteNote(_id)}>
            &times; Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteComponent;
