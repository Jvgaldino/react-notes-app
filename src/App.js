import { useEffect, useState } from 'react';
import{ nanoid } from 'nanoid';
import NotesList from './componentes/NotesList';
import Search from './componentes/Search';
import Header from './componentes/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
       id: nanoid(),
       text: 'Minha Primeira nota',
       date: '05/06/2023',
    },
   {
      id: nanoid(),
      text:'Segunda Anotação!',
      date:'01/06/2023',
   },
   
]);

const [searchText, setSearchText] = useState('');

const [darkMode, setDarkModel] = useState('false');

useEffect(()=> {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
}, [notes]);

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
    );
  }, [notes]);


const AddNote = (text) => {
   const date = new Date();
   const newNote ={
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
   }
   const newNotes = [...notes, newNote];
   setNotes(newNotes);
};

const deleteNote = (id) => {
 const newNotes = notes.filter((note)=> note.id !== id);
 setNotes(newNotes);
}

  return (
    <div className={`${darkMode && `dark-mode`}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkModel}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
           notes={notes.filter((note)=> 
             note.text.toLowerCase().includes(searchText)
        )}
       handleAddNote={AddNote}
       handleDeleteNote={deleteNote}
       />
     </div>
    </div>
  );
};

export default App;