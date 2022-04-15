import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  formSubmitData = (data) => {
    const objName = {
        id: nanoid(),
        name: data.name,
        number: data.number,
        }
    
    this.setState(p => (
      { contacts: [objName, ...p.contacts], }));
  }

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  toDoFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  render() {
    const contactsArr = this.toDoFilter();
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData}/>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.filter}
            onChange={this.filterChange}
          />
        </label>
        <ul>
          {contactsArr.map(contact => {
            return (
              <li key={contact.id}>{contact.name}: {contact.number}</li>
            );
          })}
        </ul>
    </div>
    )
    
  };
};

export default App;