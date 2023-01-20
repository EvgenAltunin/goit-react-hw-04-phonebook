import { BsFillPersonFill, BsTelephoneFill } from 'react-icons/bs';


import PropTypes from 'prop-types'
import {ContactsList, ContactItem, ContactText, ContactButton} from 'components/ContactList/ContactList.styled'

export const ContactList = ({ contacts, onDeleteContact }) => (
    <ContactsList>
        {contacts.map(({id, name, number}) => (
            <ContactItem key={id}>
                <ContactText><BsFillPersonFill style={{ fill: 'orange', marginRight: '5px'}} />{name}</ContactText>
                <ContactText><BsTelephoneFill style={{fill: 'orange', marginRight: '5px'}}/>{number}</ContactText>
                <ContactButton type='button' aria-label='Add new contact' onClick={() => onDeleteContact(id)}>Delete</ContactButton>
            </ContactItem>
        ))}
    </ContactsList>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
}