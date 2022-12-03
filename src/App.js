import NotesList from "./Components/NotesList";
import {useState} from 'react';
import {nanoid} from 'nanoid';

function App() {
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note!",
    date: "15/04/2022"
  },
    {
    id: nanoid(),
    text: "This is my second note!",
    date: "15/04/2022"
  },
    {
    id: nanoid(),
    text: "This is my third note!",
    date: "15/04/2022"
  }
])
 const addNote= (text)=>{
  const date= new Date();
  const newNote ={
    id:nanoid,
    text:text,
    date:date.toLocaleDateString
  }
  const newNotes = [...notes,newNote];
  setNotes(newNotes);
  console.log(text);
 }
  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  );
}

export default App;
