import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './contacts-actions';
import initialContacts from '../../initialContacts.json';

const initial = () => {
  const contactsJSON = localStorage.getItem('contacts');
  const contacts = JSON.parse(contactsJSON);
  if (contacts !== null) {
    return contacts;
  }
  return initialContacts;
};

export const contactsReducer = createReducer(initial, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => payload !== contact.id),
});

export const filterReducer = createReducer('', {
  [filterContacts]: (state, { payload }) => payload,
});
