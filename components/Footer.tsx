import Image from "next/image";

import styles from "@/app/page.module.css";
import logoImage from "@/public/images/logo-green-2x.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_logoBox}>
        <Image
          src={logoImage}
          alt="Full logo"
          fill
          objectFit="contain"
          // className={styles.footer_logo}
        />
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.footer_navigation}>
          <ul className={styles.footer_list}>
            <li className={styles.footer_item}>
              <a href="#" className={styles.footer_link}>
                Company
              </a>
            </li>
            <li className={styles.footer_item}>
              <a href="#" className={styles.footer_link}>
                Contact us
              </a>
            </li>
            <li className={styles.footer_item}>
              <a href="#" className={styles.footer_link}>
                Carrers
              </a>
            </li>
            <li className={styles.footer_item}>
              <a href="#" className={styles.footer_link}>
                Privacy Policy
              </a>
            </li>
            <li className={styles.footer_item}>
              <a href="#" className={styles.footer_link}>
                Terms
              </a>
            </li>
          </ul>
        </div>

        <p className={styles.footer_copyright}>
          Built my <a href="#" className={styles.footer_link}>Jonas Schmedtmann</a> for his online Udemy CSS online course.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
