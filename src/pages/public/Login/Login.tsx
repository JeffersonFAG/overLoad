import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Button } from "../../../components/ui/Button/Button";
import { Input } from "../../../components/ui/Input/Input";
import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password); // Fake login
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
        />
        <Input
          type="password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <Button type="submit">Iniciar sesión</Button>
      </form>
    </div>
  );
};
