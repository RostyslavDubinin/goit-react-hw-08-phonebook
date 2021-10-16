import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import operations from "../../redux/contacts/contacts-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";

import styles from "./FormContact.module.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;

    const contactNames = contacts.map((contact) => contact.name.toLowerCase());
    if (contactNames.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(operations.addContact(name, number));

    setName("");
    setNumber("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          id="standard-basic"
          label="Name"
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          className={styles.formInput}
          onChange={handleNameChange}
        />

        <TextField
          id="standard-basic"
          label="Number"
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          className={styles.formInput}
          onChange={handleNumberChange}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="small"
          className={styles.button}
        >
          Add contact
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
