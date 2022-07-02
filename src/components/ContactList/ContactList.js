import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';

import s from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().startsWith(filter.toLowerCase())
  );
  return (
    <>
      <ul className={s.list}>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id} className={s.item}>
              <p>
                <span className={s.name}>{contact.name}</span>: {contact.number}
              </p>
              <button
                onClick={() => dispatch(deleteContact(contact.id))}
                className={s.button}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
