import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/header';
import { v4 as uuidv4 } from 'uuid';
import AddContact from './components/addContact';
import ContactList from './components/contactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState( JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

  const addContactHandler = contact => {
    if (contact.email == undefined || contact.name == undefined) {
      return null;
    }
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    console.log(contacts);
  };

  const deleteContact = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  };
  useEffect(() => {
    const retrievedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrievedContacts) {
      setContacts(retrievedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
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
