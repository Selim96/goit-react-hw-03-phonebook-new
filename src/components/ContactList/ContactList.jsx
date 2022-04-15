import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

export default function ContactList ({contacts}) {
    return (
        <ul className={s.list}>
            <ContactItem contacts={contacts}/>
        </ul>
    );
}