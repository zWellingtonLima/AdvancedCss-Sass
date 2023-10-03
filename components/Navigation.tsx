"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import styles from "@/app/page.module.css";

const Navigation = () => {
  const [isNavModalOpen, setIsNavModalOpen] = useState(false);

  return (
    <div className={styles.navigation}>
      <button
        onClick={() => setIsNavModalOpen((value) => !value)}
        className={styles.navigation_button}
      >
        <Menu
          strokeWidth={1.5}
          className={styles.navigation_button_icon}
          size={60}
        />
      </button>
      <div
        className={
          isNavModalOpen ? styles.navigation_bg : styles.navigation_bg_inactive
        }
      >
        &nbsp;
      </div>

      <nav
        className={
          isNavModalOpen
            ? styles.navigation_nav
            : styles.navigation_nav_inactive
        }
      >
        <ul className={styles.navigation_list}>
          <li>
            <a href="#" className={styles.navigation_link}>
              About Natours
            </a>
          </li>
          <li className={styles.navigation_item}>
            <a href="#" className={styles.navigation_link}>
              Your benefits
            </a>
          </li>
          <li className={styles.navigation_item}>
            <a href="#" className={styles.navigation_link}>
              Popular tours
            </a>
          </li>
          <li className={styles.navigation_item}>
            <a href="#" className={styles.navigation_link}>
              Stories
            </a>
          </li>
          <li className={styles.navigation_item}>
            <a href="#" className={styles.navigation_link}>
              Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
