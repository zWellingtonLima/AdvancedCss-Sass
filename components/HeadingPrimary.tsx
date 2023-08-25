import styles from "@/app/page.module.css";

const HeadingPrimary = () => {
  return (
    <h1 className={styles.headingPrimary}>
      <span className={styles.headingPrimaryMain}>Outdoors</span>
      <span className={styles.headingPrimarySub}>is where life happens</span>
    </h1>
  );
};

export default HeadingPrimary;
