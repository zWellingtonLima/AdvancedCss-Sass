import styles from "@/app/page.module.css";

const HeadingPrimary = () => {
  return (
    <h1 className={styles.headingPrimary}>
      <span className={styles.headingPrimary_main}>Outdoors</span>
      <span className={styles.headingPrimary_sub}>is where life happens</span>
    </h1>
  );
};

export default HeadingPrimary;
