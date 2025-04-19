import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts, selectNameFilter } from "../../redux/selectors";


function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchName = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchName);
  });

  return (
    <ul className={css.list}>
      {visibleContacts.length !== 0 &&
        visibleContacts.map((contact) => {
          return <Contact contact={contact} key={contact.id} />;
        })}
    </ul>
  );
}

export default ContactList;
