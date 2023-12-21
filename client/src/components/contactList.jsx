import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './contactCard';

const ContactList = ({ contacts, deleteContact }) => {
  const renderList = contacts.map(contact => {
    return (
      <ContactCard
        contact={contact}
        deleteContact={deleteContact}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <br/>
      <h2 className="relative">
        Contact List
        <Link to="/add">
          <button className="ui button blue position_to_right">
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui celled list">{renderList}</div>
    </div>
  );
};

export default ContactList;
