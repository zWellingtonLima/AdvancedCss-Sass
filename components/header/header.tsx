import Image from "next/image";

import styles from "@/app/page.module.css";
import HeadingPrimary from "../HeadingPrimary";
import logoImage from '@/public/images/logo-white.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <Image
          alt="Natours logo"
          src={logoImage}
          className={styles.header__logoBox_image}
        />
      </div>
      <div className={styles.header__textBox}>
        <HeadingPrimary />

        <a href="#tours" className={`${styles.btn_animated} ${styles.btn} ${styles.btn_white}`}>
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
