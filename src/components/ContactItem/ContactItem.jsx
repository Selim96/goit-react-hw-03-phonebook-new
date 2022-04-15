import s from './ContactItem.module.css';

export default function ContactItem({contacts}) {
    return (
        contacts.map(contact => {
                return (
                    <li key={contact.id} className={s.item}>{contact.name}: {contact.number}</li>
                );
            })
        );
}