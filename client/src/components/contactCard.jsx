import React from 'react';
import user from '../assets/images/user.png';
import '../assets/styles/index.css';

const ContactCard = ({ contact, deletecontact }) => {
  const { name, email } = contact;
  console.log(deletecontact);

  return (
    <div className="item relative">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <p className="header">{name}</p>
        <p className="header">{email}</p>
      </div>
      <i
        className="trash alternate outline icon position_to_right"
        style={{ color: 'red', marginTop: '1vh' }}
        onClick={() => deletecontact(contact)}></i>
    </div>
  );
};

export default ContactCard;
