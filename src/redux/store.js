import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer, filterReducer } from './contacts/contacts-reducers';

// const state = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
