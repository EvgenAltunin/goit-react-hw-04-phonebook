import React, { Component } from 'react';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
    filter: '',
 
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState)
    // console.log(this.state)
    if (this.state.contacts !== prevState.contacts) {
      // console.log('Components field was updated');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
      
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  // Add new contact at the beginning of contacts list
  formSubmitHandler = newContactData => {
    const { contacts } = this.state;
    const isContactNameInContactsList = contacts.some(contact => contact.name === newContactData.name)
    
    
    if (isContactNameInContactsList) {
      alert(`${newContactData.name} is already in contacts!`)
    } else {
        const newContact = {
        id: shortid.generate(),
        ...newContactData,
      }
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }))
    }

    
  } 

  changeFilter = (event) => {
    const { value } = event.currentTarget;
    this.setState({filter: value})
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  

  render() { 
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h1 style={{textAlign:'center', fontWeight: '700'}}>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
        />
        <h2 style={{textAlign:'center', fontWeight: '700'}}>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        
      </div>
    )
  }
}
 
export default App;