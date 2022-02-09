import { Button } from '../common/button';

export const Notes = ({ notes, deleteNote }) => {
  return (
    <div className="flex-1">
      {notes.map((note) => (
        <div key={note.id} className="border-2 rounded p-4">
          {note.contents}
          <div>
            <Button onClick={() => deleteNote(note)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
