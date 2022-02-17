import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllJSDocTagsOfKind } from 'typescript';
import { ApiContext } from '../../utils/api_context';
import { Button } from '../common/button';
import { Notes } from './notes';

export const Home = () => {
  const api = useContext(ApiContext);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noteContents, setNoteContents] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(async () => {
    const { notes } = await api.get('/notes');
    setLoading(false);
    setNotes(notes);
  }, []);

  if (loading) return <div>Loading...{notes}</div>;

  const saveNote = async () => {
    setErrorMessage('');

    if (noteContents === '') {
      setErrorMessage("Note contents can't be empty");
      return;
    }
    const noteBody = {
      contents: noteContents,
    };
    const { note } = await api.post('/notes', noteBody);

    setNotes([...notes, note]);
  };

  const deleteNote = async (note) => {
    const { success } = await api.del(`/notes/${note.id}`);
    if (success) {
      setNotes(notes.filter((n) => n !== note));
    } else {
      setErrorMessage('Deletion failed. Please refresh and try again.');
    }
  };

  console.log(notes);

  return (
    <div className="flex flex-col h-full w-1/2 p-4">
      <h3 className="text-xl">Note Contents</h3>
      <Link to="demo">Link to demo</Link>
      <textarea
        className="p-2 border-2 rounded flex"
        value={noteContents}
        onChange={(e) => setNoteContents(e.target.value)}
      />
      <Button onClick={saveNote}>Save</Button>
      <div className="text-red-600">{errorMessage}</div>
      <Notes notes={notes} deleteNote={deleteNote} />
    </div>
  );
};
