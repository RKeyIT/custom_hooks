import { useInput } from "../../hooks/useInput";
import styles from "./Form.module.css";

export const Form = () => {
  const [name, setName] = useInput("");
  const [mail, setMail] = useInput("");
  const [pass, setPass] = useInput("");

  return (
    <form className={styles.form}>
      <label htmlFor='name'>Name: </label>
      <input type='text' name='name' id='name' value={name} onChange={setName} />
      <label htmlFor='email'>Email: </label>
      <input type='email' name='email' id='email' value={mail} onChange={setMail} />
      <label htmlFor='pass'>Password: </label>
      <input type='password' name='pass' id='pass' value={pass} onChange={setPass} />
    </form>
  );
};
