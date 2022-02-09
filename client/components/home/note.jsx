import { Button } from '../common/button';

export const Note = ({ note, deleteNote }) => {
  return (
    <div className="border-2 rounded p-4">
      {note.contents}
      <div>
        <Button onClick={() => deleteNote(note)}>Delete ME!!!</Button>
      </div>
    </div>
  );
};
