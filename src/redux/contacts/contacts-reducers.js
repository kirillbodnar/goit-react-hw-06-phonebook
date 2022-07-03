import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './contacts-actions';
import initialContacts from '../../initialContacts.json';

export const contactsReducer = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => payload !== contact.id),
});

export const filterReducer = createReducer('', {
  [filterContacts]: (state, { payload }) => payload,
});
