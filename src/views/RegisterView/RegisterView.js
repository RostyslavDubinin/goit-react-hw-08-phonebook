import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";

import styles from "./RegisterView.module.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Name"
          type="name"
          name="name"
          value={name}
          variant="outlined"
          className={styles.label}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
          value={email}
          variant="outlined"
          className={styles.label}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          name="password"
          value={password}
          variant="outlined"
          className={styles.label}
          onChange={handleChange}
        />

        <Button variant="outlined" color="primary" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}
