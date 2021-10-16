import React from "react";

export default function LogInView() {
  return (
    <div>
      <h2>Log In page</h2>
      <form
      //</div>onSubmit={handleSubmit}
      >
        <label>
          Email
          <input
            type="email"
            name="email"
            //value={email}
            //onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            //value={password}
            //onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
