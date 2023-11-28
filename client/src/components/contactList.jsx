import React from 'react';
import ContactCard from './contactCard';

const ContactList = ({ contacts }) => {
  const renderList = contacts.map(contact => {
    return (
      <>
        <ContactCard contact={contact} />
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
