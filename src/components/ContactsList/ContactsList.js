import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import operations from "../../redux/contacts/contacts-operations";

import styles from "./ContactsList.module.css";
import Button from "@material-ui/core/Button";

function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  const onDeleteContact = (id) => dispatch(operations.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.listItem}>
            <span className={styles.name}>{name}:</span>
            <span className={styles.number}>{number}</span>

            <Button
              variant="contained"
              color="default"
              size="small"
              onClick={() => onDeleteContact(id)}
              className={styles.button}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
