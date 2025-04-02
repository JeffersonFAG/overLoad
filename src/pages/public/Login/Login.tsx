import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Button } from "../../../components/ui/Button/Button";
import { Input } from "../../../components/ui/Input/Input";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Bienvenido</h1>
        <p className={styles.subtitle}>Ingresa tus credenciales</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className={styles.inputField}
            />
          </div>
          <Button type="submit" className={styles.loginButton}>
            Iniciar sesión
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
