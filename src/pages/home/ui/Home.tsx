import styles from "./styles.module.css";

import ButtonStart from "../../../features/ButtonStart/ui/ButtonStart";
import ButtonAbout from "../../../features/ButtonAbout/ui/ButtonAbout";
import { useGetProductsQuery } from "../../../entities/productCard/api/productApi";

export function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>
        Make your Outfit <span className={styles.special}>wonderful</span>
      </h2>
      <p className={styles.info}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere soluta
        iusto expedita veniam asperiores, cumque id, tempora numquam
        voluptatibus.
      </p>
      <div className={styles.buttons}>
        <ButtonStart type={"blue"}></ButtonStart>
        <ButtonAbout type={"dark"}></ButtonAbout>
      </div>
    </main>
  );
}
