import Image from "next/image";

import styles from "@/app/page.module.css";
import HeadingPrimary from "../HeadingPrimary";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image
          alt="Natours logo"
          className="logo"
          width={80}
          height={40}
          src="/images/logo-white.png"
        />
      </div>
      <div className={styles.textBox}>
        <HeadingPrimary />

        <a href="#" className={`${styles.btnAnimated} ${styles.btn} ${styles.btnWhite}`}>
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
