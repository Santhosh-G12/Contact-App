
import { useState } from 'react';
import AddContact from './components/addcontact/addcontact';
import Contactlist from './components/Contactlist/contactlist';
import Profile from './components/Profile/profile';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  const[allContacts,setallContacts] = useState(()=>{
    const savedContacts = localStorage.getItem('contacts')
    return savedContacts?JSON.parse(savedContacts):[];
  })
  const handleNewContact = (updatedcontacts)=>{
    setallContacts(updatedcontacts)
  }
  const handleDelete =(index)=>{
    const all = JSON.parse(localStorage.getItem('contacts'))
    const updatedcontacts = all.filter((_,i)=>i!==index)
    localStorage.setItem('contacts',JSON.stringify(updatedcontacts))
    setallContacts(updatedcontacts)

  }
  
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Profile/>}/>
          <Route path = "/components/addcontact/addcontact" element={<AddContact sendNewContact={handleNewContact}/>}/>
          <Route path = "/components/Contactlist/contactlist" element={<Contactlist deletefunc = {handleDelete}receiveContacts = {allContacts}/>}/>  
          
  
        </Routes>
      </Router>
        
        
    </div>
  );
}

export default App;
