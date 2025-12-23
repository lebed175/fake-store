import { useGetProductsQuery } from "../../../entities/productCard/api/productApi";
import styles from "./styles.module.css";

interface Props {
  text: string;
  onClick: () => void;
  type: "blue" | "dark";
}

export const Button = ({ text, onClick, type }: Props) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[type]}`}>
      {text}
    </button>
  );
};
