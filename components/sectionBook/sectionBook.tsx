import styles from "@/app/page.module.css";

const SectionBook = () => {
  return (
    <section className={styles.sectionBook}>
      <div className={styles.book}>
        {/* TODO: Add functionality to this form. Send data to DB and so on. */}
        <div className={styles.book_form}>
          <form action="#" className={styles.form}>
            <div>
              <h2 className={`${styles.headingSecondary} ${styles.uMarginBottomSmall}`}>Start booking now</h2>
            </div>

            <div className={styles.form_group}>
              <input
                type="text"
                required
                className={styles.form_input}
                id="name"
                placeholder="Full name"
              />
              <label htmlFor="name" className={styles.form_label}>
                Full name
              </label>
            </div>

            <div className={styles.form_group}>
              <input
                type="email"
                required
                className={styles.form_input}
                id="email"
                placeholder="Email"
              />
              <label htmlFor="email" className={styles.form_label}>
                Email
              </label>
            </div>

            <div
              className={`${styles.form_group_radios_check} ${styles.uMarginBottomMedium}`}
            >
              <div className={styles.form_radio_group}>
                <input
                  name="size"
                  type="radio"
                  className={styles.form_radio_input}
                  id="small"
                />
                {/* TODO: Add a function to listen "space" keyboard event when a label is on tab to select the element */}
                <label tabIndex={0} htmlFor="small" className={styles.form_radio_label}>
                  <span className={styles.form_radio_button}></span>
                  Small tour group
                </label>
              </div>

              <div className={styles.form_radio_group}>
                <input
                  name="size"
                  type="radio"
                  className={styles.form_radio_input}
                  id="large"
                />
                <label tabIndex={0} htmlFor="large" className={styles.form_radio_label}>
                  <span className={styles.form_radio_button}></span>
                  Large tour group
                </label>
              </div>
            </div>

            <button className={`${styles.btn} ${styles.btn_green}`}>
              Next Step &rarr;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionBook;
