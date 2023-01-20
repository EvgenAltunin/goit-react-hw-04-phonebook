import React, { Component } from 'react';
import { ContactEditor, Lable, Input, Submit } from "components/ContactForm/ContactForm.styled";

export class ContactForm extends Component {
    state = {
        name: '', 
        number: '',
    } 
    
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value, })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state);

        this.formReset()
      }

    formReset(){
    this.setState({name: '', number: ''})
  }

    render() { 
        const {name, number} = this.state
        return (
            <ContactEditor onSubmit={this.handleSubmit}>
                <Lable>Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                        value={name}
                    />
                </Lable>
                <Lable>Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                        value={number}
                    />
                </Lable>
                <Submit type='submit'>Add contact</Submit>
        </ContactEditor>
        );
    }
}
