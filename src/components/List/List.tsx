import { FixedSizeList as List } from "react-window";
import styles from "./List.module.css";

type Item = {
  id: number;
  title: string;
  [key: string]: any;
};

type ListProps = {
  items: Item[];
};

const Row = ({
  index,
  style,
  data,
}: {
  index: number;
  style: React.CSSProperties;
  data: Item[];
}) => (
  <div
    style={style}
    className={`${styles.tableRow} ${index % 2 === 0 ? styles.evenRow : ""}`}
  >
    <div className={styles.tableCell}>{data[index].id}</div>
    <div className={styles.tableCell}>{data[index].title}</div>
    {/* Añade más celdas según necesites */}
  </div>
);

export const ListVirtualizada = ({ items }: ListProps) => {
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableHeader}>
        <div className={styles.headerCell}>ID</div>
        <div className={styles.headerCell}>Título</div>
      </div>

      <List
        height={600} // Altura fija del contenedor
        itemCount={items.length}
        itemSize={50} // Altura de cada fila
        width="100%"
        itemData={items}
      >
        {Row}
      </List>
    </div>
  );
};
