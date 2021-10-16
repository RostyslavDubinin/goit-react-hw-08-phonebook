import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import styles from "./UserMenu.module.css";
import Button from "@material-ui/core/Button";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome, {name}</span>
      <Button
        variant="contained"
        size="small"
        color="primary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Sign out
      </Button>
    </div>
  );
}
