import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { notificationParams } from 'settings/settings';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import shortid from 'shortid';

//============ Custom hook useLocalStorage =================
const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) || defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
// ====================== instead of using =================
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   const contacts = window.localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(window.localStorage.getItem('contacts'));

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []); 
  // =======================================================

export default function App() {
  //============ Custom hook useLocalStorage =================
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  // ====================== instead of using =================
  //  const [contacts, setContacts] = useState([]);
  // =======================================================
  const [filter, setFilter] = useState('');

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const deleteContact = contactId => {
    if (window.confirm('Do you really want to delete the contact?')) {
      setContacts(contacts.filter(contact => contact.id !== contactId));
      toast.success('The contact was deleted succsesfully!');
    } else return
    

  };

  // Add new contact at the beginning of contacts list
  const formSubmitHandler = (newContactData) => {
    const isContactNameInContactsList = contacts.some(
      contact => contact.name === newContactData.name
    );

    if (isContactNameInContactsList) {
      toast.error(`${newContactData.name} is already in contacts!`, {
        notificationParams,
      });
    } else {
      setContacts(prevState => {
        const newContact = {
          id: shortid.generate(),
          ...newContactData,
        };
        toast.success(`${newContactData.name} added to your contacts!`);
        return [newContact, ...prevState];
        
      })
    };
  }
  const filteredContacts = contacts.filter(value =>
    value.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: '700' }}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2 style={{ textAlign: 'center', fontWeight: '700' }}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
      <ToastContainer
        theme="colored"
        autoClose={notificationParams.autoClose}
      />
    </div>
  );
}
