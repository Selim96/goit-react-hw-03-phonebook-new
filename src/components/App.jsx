import React, { Component } from 'react';
import { nanoid } from 'nanoid'

class App extends Component {
  state = {
  contacts: [],
  name: ''
  }

  handlClick = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.name.value);
    this.setState(prev => {
      console.log(prev.contacts);
      return {
        contacts: prev.contacts.push(5),
      };
    });
  }
  
  render() {
    const { contacts, name } = this.state;
    return (
      <div>
      <h1>Phonbook</h1>
      <form onSubmit={this.handlClick}>
        <label>
          Name
          <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </label>
        <button type="submit">Add contact</button> 
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li>{contact}</li>
          ))}
        </ul>
    </div>
    )
    
  };
};

export default App;