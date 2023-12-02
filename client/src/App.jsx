import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/header';
import AddContact from './components/addContact';
import ContactList from './components/contactList';

function App() {
  const [contacts, setContacts] = useState([]);

  // const contacts = [
  //   {
  //     id: 1,
  //     name: 'Eren Yeager',
  //     email: 'erenyeager@gmail.com',
  //   },
  //   {
  //     id: 2,
  //     name: 'Hachiman Hikigaya',
  //     email: 'hachimanhikigaya@gmail.com',
  //   },
  // ];

  const addContactHandler = contact => {
    contact.id = contacts.length + 1;
    setContacts(contacts.concat(contact));
    console.log(contact);
  };

  const deleteContact = contact => {
    const id = contact.id;
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts)
  };

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
