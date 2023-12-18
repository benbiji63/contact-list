import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/header';
import AddContact from './components/addContact';
import ContactList from './components/contactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';

  const [contacts, setContacts] = useState([]);

  const addContactHandler = contact => {
    if (contact.email == undefined || contact.name == undefined) {
      return null;
    }
    contact.id = contacts.length + 1;
    setContacts(contacts.concat(contact));
    console.log(contacts);
  };

  const deleteContact = contact => {
    const id = contact.id;
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };
  useEffect(() => {
    const retrievedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    console.log(retrievedContacts);
    if (retrievedContacts) {
      setContacts(retrievedContacts)
    }
  }, []);

  useEffect(() => {
    if (contacts.length!==0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <>
      <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} deletecontact={deleteContact} />
      </div>
    </>
  );
}

export default App;
