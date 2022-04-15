import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

export default function ContactList ({contacts, toDelete}) {
    return (
        <ul className={s.list}>
            <ContactItem contacts={contacts} toDelete={toDelete}/>
        </ul>
    );
}