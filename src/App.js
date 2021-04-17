import { Component } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import './index.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContact = ({ name, number }) => {
    const contactData = {
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contactData, ...contacts],
    }));
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contacts => contacts.id !== contactId,
      ),
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getVisible = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisible();
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onFormSubmit={this.addContact} existContacts={contacts} />
        <Filter value={filter} onFilterValue={this.changeFilter} />

        {contacts.length > 0 && (
          <div>
            <h2 className="subtitle">Contacts</h2>
            <ContactList
              contactsForList={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </div>
        )}
      </div>
    );
  }
}
