import s from './ContactItem.module.css';

export default function ContactItem({contacts, toDelete}) {
    return (
        contacts.map(contact => {
                return (
                    <li key={contact.id} className={s.item}><p className={s.itemNumber}>{contact.name}: {contact.number}</p>
                    <button className={s.button} onClick={() => toDelete(contact.id)} >Delete</button>
                    </li>
                );
            })
        );
}