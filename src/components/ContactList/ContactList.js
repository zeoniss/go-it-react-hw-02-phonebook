import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from '../ContactList/ContactList.module.css';

const ContactList = ({ contactsForList, onDeleteContact }) => (
  <ul className={s.contactList}>
    {contactsForList.map(contact => (
      <li key={uuidv4()} className={s.contactList_item}>
        <span className={s.contactList_elem}> {contact.name}:</span>
        <span>{contact.number} </span>
        <button
          type="button"
          className={s.contactList_button}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contactsForList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
