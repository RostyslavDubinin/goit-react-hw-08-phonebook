import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "../../components/ContactsList/ContactsList";
import ContactForm from "../../components/FormContact/FormContact";
import Filter from "../../components/Filter/Filter";
import operations from "../../redux/contacts/contacts-operations";
import styles from "./ContactsView.module.css";

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
