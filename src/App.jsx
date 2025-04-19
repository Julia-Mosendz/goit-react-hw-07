import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "the-new-css-reset/css/reset.css";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("phoneBook") ?? [];
    return savedContacts.length ? JSON.parse(savedContacts) : savedContacts;
  });

  const [searchContact, setSearchContact] = useState("");

  useEffect(() => {
    const serealizedContacts = JSON.stringify(contacts);
    localStorage.setItem("phoneBook", serealizedContacts);
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  };
  const visibleContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchContact.toLowerCase());
  });

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(filteredContacts);
  };

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={searchContact} onSearchChange={setSearchContact} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </>
  );
}

export default App;
