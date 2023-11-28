import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/header';
import AddContact from './components/addContact';
import ContactList from './components/contactList';

function App() {
  const contacts = [
    {
      id: 1,
      name: 'Eren Yeager',
      email: 'erenyeager@gmail.com',
    },
    {
      id: 2,
      name: 'Hachiman Hikigaya',
      email: 'hachimanhikigaya@gmail.com',
    },
  ];

  return (
    <>
      <div className="ui container">
        <Header />
        <AddContact />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
