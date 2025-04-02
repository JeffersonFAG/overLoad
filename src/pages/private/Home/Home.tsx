import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { fetchPosts } from "../../../api/publicApi/posts";
import { ListVirtualizada } from "../../../components/List/List";
import styles from "./Home.module.css";

export const Home = () => {
  const { logout } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    // Fetch de 2000 elementos (ejemplo con JSONPlaceholder)
    fetchPosts().then((data: any) => setPosts(data.slice(0, 2000)));
  }, []);

  useEffect(() => {
    // Simula carga de 2000 items
    const fakeItems = Array.from({ length: 2000 }, (_, i) => ({
      id: i + 1,
      title: `Elemento ${i + 1}`,
      body: `Descripción del elemento ${i + 1}`,
    }));
    setItems(fakeItems);
  }, []);

  return (
    <div className={styles.container}>
      <button onClick={logout} className={styles.logoutButton}>
        Cerrar sesión
      </button>
      <ListVirtualizada items={[...posts, ...items]} />
    </div>
  );
};
