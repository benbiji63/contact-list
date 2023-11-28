import React from 'react';

const AddContact = () => {
  return (
    <div className="ui main">
      <h3>Add Contact</h3>
      <form action="" className="ui form">
        <div className="field">
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" placeholder="Number" />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
