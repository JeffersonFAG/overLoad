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
    fetchPosts().then((data: any) => setPosts(data.slice(0, 2000)));
  }, []);

  useEffect(() => {
    const fakeItems = Array.from({ length: 2000 }, (_, i) => ({
      id: i + 2001,
      title: `Elemento ${i + 1}`,
      body: `Descripción del elemento ${i + 1}`,
    }));
    setItems(fakeItems);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <button onClick={logout} className={styles.logoutButton}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Cerrar sesión
        </button>
      </div>

      <div className={styles.listContainer}>
        <ListVirtualizada items={[...posts, ...items]} />
      </div>
    </div>
  );
};
