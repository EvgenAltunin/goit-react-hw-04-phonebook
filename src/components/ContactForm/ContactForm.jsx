import {useState} from 'react';
import { ContactEditor, Lable, Input, Submit } from "components/ContactForm/ContactForm.styled";

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const handleNameChange = event => {
  //   setName(event.target.value);
  // };

  // const handleNumberChange = event => {
  //   setNumber(event.target.value);
  // };

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContactData = { name, number };
    onSubmit(newContactData);
    setName('');
    setNumber('');
  };

  return (
    <ContactEditor onSubmit={handleSubmit}>
      <Lable>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </Lable>
      <Lable>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </Lable>
      <Submit type="submit">Add contact</Submit>
    </ContactEditor>
  );
}
