/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectSortedContacts } from '../../redux/selectors';

function ContactList() {
  const contacts = useSelector(selectSortedContacts);

  return (
    <ul className={css.ul}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
