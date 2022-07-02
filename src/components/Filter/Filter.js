import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts-actions';

import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const query = useSelector(state => state.filter);
  return (
    <>
      <div className={s.container}>
        <form className={s.form} onSubmit={e => e.preventDefault()}>
          <label className={s.label}>Find Contacts by name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={query}
            onChange={e => dispatch(filterContacts(e.currentTarget.value))}
            className={s.input}
          />
        </form>
      </div>
    </>
  );
}
