import Image from "next/image";

import styles from "@/app/page.module.css";
import HeadingPrimary from "../HeadingPrimary";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <Image
          alt="Natours logo"
          className="logo"
          width={80}
          height={40}
          src="/images/logo-white.png"
        />
      </div>
      <div className={styles.header__textBox}>
        <HeadingPrimary />

        <a href="#" className={`${styles.btn_animated} ${styles.btn} ${styles.btn_white}`}>
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
