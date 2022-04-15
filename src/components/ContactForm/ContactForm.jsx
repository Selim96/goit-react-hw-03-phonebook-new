import s from './ContactForm.module.css';
import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handlChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }
    
    handlSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '', });
    }

    render() {
        const { name, number,} = this.state;
        return (
        <form className={s.form} onSubmit={this.handlSubmit}>
          <label className={s.formLabel}>
            Name
            <input
              type='text'
              name="name"
              className={s.formInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handlChange} />
          </label>
          <label>
            Number
          <input
            type="tel"
            name="number"
            className={s.formInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handlChange}
            />
          </label>
          <button type='submit' className={s.button}>Add contact</button>
        </form>
        );
    }
}

export default ContactForm;