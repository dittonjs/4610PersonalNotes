import { useState, useContext, useEffect } from 'react';
import { ApiContext } from '../../utils/api_context';
import { Button } from '../common/button';

export const Home = () => {
  const api = useContext(ApiContext);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noteContents, setNoteContents] = useState('');
  useEffect(async () => {
    const { notes } = await api.get('/notes');
    setLoading(false);
    setNotes(notes);
  }, []);

  if (loading) return <div>Loading...{notes}</div>;

  const saveNote = async () => {
    const noteBody = {
      contents: noteContents,
    };
    const { note } = await api.post('/notes', noteBody);
    setNotes([...notes, note]);
  };

  console.log(notes);

  return (
    <div>
      <textarea
        value={noteContents}
        onChange={(e) => setNoteContents(e.target.value)}
        className="p-2 border-2 rounded"
      />
      <Button onClick={saveNote}>Save</Button>
    </div>
  );
};
