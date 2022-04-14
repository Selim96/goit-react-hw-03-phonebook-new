import React, { Component } from 'react';
import { nanoid } from 'nanoid'

class App extends Component {
  state = {
  contacts: ['Selim Fazylov'],
  name: ''
  }

  
  render() {
    return (
      <div>
      <h1>Phonbook</h1>
      <form>
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
          {this.state.contacts.map(contact => (
          
            <li>{contact}</li>
            
          ))}
        </ul>
    </div>
    )
    
  };
};

export default App;