import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
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

  checkFunction = (name) => {
    return this.state.contacts.some(v => v.name.toLowerCase() === name.toLowerCase()); 
  }

  render() {
    const contactsArr = this.toDoFilter();
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData} check={this.checkFunction} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterChange}/>
        <ContactList contacts={contactsArr}/>
    </div>
    )
    
  };
};

export default App;