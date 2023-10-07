"use client";

import { useEffect } from "react";

import styles from "@/app/page.module.css";
import { useStoreModal } from "@/hooks/useModalStore";

const ToursPage = () => {
  const { onOpen, onClose } = useStoreModal();

  useEffect(() => {
    const handleCloseModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleCloseModal);

    return () => {
      window.removeEventListener("keydown", handleCloseModal);
    };
  }, [onClose]);

  return (
    <section className={styles.sectionTours}>
      <div className={styles.uCenterText}>
        <h2 className={styles.headingSecondary}>
          Most Popular Tours
        </h2>
      </div>
      <article>
        {/*TODO: Transform this into a Card component */}
        <div className={styles.toursCardLayout}>
          <div className={styles.toursCard}>
            <div
              className={`${styles.toursCardSide__front} ${styles.toursCardSide__front_1} ${styles.toursCardSide}`}
            >
              <div
                className={`${styles.toursCard_picture} ${styles.toursCard_picture__1}`}
              />

              <h4 className={styles.toursCard_heading}>
                <span
                  className={`${styles.toursCard_headingSpan} ${styles.toursCard_headingSpan__1}`}
                >
                  The sea explorer
                </span>
              </h4>
              <div className={styles.toursCard_details}>
                <ul>
                  <li>3 day tours</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.toursCardSide__back} ${styles.toursCardSide__back_1} ${styles.toursCardSide}`}
            >
              <div className={styles.toursCard_cta}>
                <div className={styles.toursCard_priceBox}>
                  <p className={styles.toursCard_priceBox_only}>Only</p>
                  <p className={styles.toursCard_priceBox_value}>$297</p>
                </div>
                <button
                  onClick={onOpen}
                  className={`${styles.btn_animated} ${styles.btn_white} ${styles.btn}`}
                >
                  {/* TODO: add a page to BOOK NOW and push user to it */}
                  Book now!
                </button>
              </div>
            </div>
          </div>

          <div className={styles.toursCard}>
            <div
              className={`${styles.toursCardSide__front} ${styles.toursCardSide__front_2} ${styles.toursCardSide}`}
            >
              <div
                className={`${styles.toursCard_picture} ${styles.toursCard_picture__2}`}
              />

              <h4 className={styles.toursCard_heading}>
                <span
                  className={`${styles.toursCard_headingSpan} ${styles.toursCard_headingSpan__2}`}
                >
                  The forest hiker
                </span>
              </h4>
              <div className={styles.toursCard_details}>
                <ul>
                  <li>7 day tours</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided tends</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.toursCardSide__back} ${styles.toursCardSide__back_2} ${styles.toursCardSide}`}
            >
              <div className={styles.toursCard_cta}>
                <div className={styles.toursCard_priceBox}>
                  <p className={styles.toursCard_priceBox_only}>Only</p>
                  <p className={styles.toursCard_priceBox_value}>$497</p>
                </div>
                <button
                  onClick={onOpen}
                  className={`${styles.btn_animated} ${styles.btn_white} ${styles.btn}`}
                >
                  Book now!
                </button>
              </div>
            </div>
          </div>

          <div className={styles.toursCard}>
            <div
              className={`${styles.toursCardSide__front} ${styles.toursCardSide__front_3} ${styles.toursCardSide}`}
            >
              <div
                className={`${styles.toursCard_picture} ${styles.toursCard_picture__3}`}
              />

              <h4 className={styles.toursCard_heading}>
                <span
                  className={`${styles.toursCard_headingSpan} ${styles.toursCard_headingSpan__3}`}
                >
                  The snow adventurer
                </span>
              </h4>
              <div className={styles.toursCard_details}>
                <ul>
                  <li>5 day tours</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tends</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.toursCardSide__back} ${styles.toursCardSide__back_3} ${styles.toursCardSide}`}
            >
              <div className={styles.toursCard_cta}>
                <div className={styles.toursCard_priceBox}>
                  <p className={styles.toursCard_priceBox_only}>Only</p>
                  <p className={styles.toursCard_priceBox_value}>$897</p>
                </div>
                <button
                  onClick={onOpen}
                  className={`${styles.btn_animated} ${styles.btn_white} ${styles.btn}`}
                >
                  Book now!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.uCenterText} ${styles.uMarginTop}`}>
          <a href="#" className={`${styles.btn} ${styles.btn_green}`}>
            Discover all tours
          </a>
        </div>
      </article>
    </section>
  );
};

export default ToursPage;
