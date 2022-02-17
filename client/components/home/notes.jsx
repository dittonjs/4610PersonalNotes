import { Note } from './note';

export const Notes = ({ notes, deleteNote }) => {
  return (
    <div className="flex-1">
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};
