import React, { useState, useEffect } from 'react';

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newContact, setNewContact] = useState({});

  const add = async e => {
    console.log(name, email);
    e.preventDefault();
    if (name === '' || email === '') {
      alert('All fields are mandatory');
      return null;
    }
    setNewContact({ name: name, email: email });
    setName('');
    setEmail('');
  };
  
  
  useEffect(() => {
    addContactHandler(newContact);
  }, [newContact]);

  return (
    <div className="ui main">
      <h3>Add Contact</h3>
      <form action="" className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;

// import React from 'react';

// class AddContact extends React.Component {
//   state = {
//     name: '',
//     email: '',
//   };

//   add = e => {
//     e.preventDefault();
//     if (this.state.name === '' || this.state.email === '') {
//       alert('ALl the fields are mandatory!');
//       return null;
//     }
//     console.log(this.state);
//   };
//   render() {
//     return (
//       <div className="ui main">
//         <h2>Add Contact</h2>
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={e => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={e => this.setState({ email: e.target.value })}
//             />
//           </div>
//           <button className="ui button blue">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;
