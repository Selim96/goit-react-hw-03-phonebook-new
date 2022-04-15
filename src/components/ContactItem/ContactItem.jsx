import s from './ContactItem.module.css';

export default function ContactItem({contacts, toDelete}) {
    return (
        contacts.map(contact => {
                return (
                    <li key={contact.id} className={s.item}>{contact.name}: <span className={s.itemNumber}>{contact.number}</span>
                    <button className={s.button} onClick={() => toDelete(contact.id)} >Delete</button>
                    </li>
                );
            })
        );
}