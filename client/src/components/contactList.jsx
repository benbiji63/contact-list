import React from 'react';
import ContactCard from './contactCard';

const ContactList = ({ contacts,deletecontact }) => {

  const renderList = contacts.map(contact => {
    return (
      <>
        <ContactCard contact={contact} deletecontact={deletecontact} key={contact.id}/>
      </>
    );
  });
  return (
    <>
      <div className="ui celled list">{renderList}</div>
    </>
  );
};

export default ContactList;
