import React from 'react';

const ContactCard = ({ contact }) => {
  const { name, email } = contact;

  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div className="header">{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: 'red', marginTop: "1vh" }}></i>
    </div>
  );
};

export default ContactCard;
