import { Heart, Map, Globe, Compass } from "lucide-react";

import styles from "@/app/page.module.css";

const SectionFeatures = () => {
  return (
    <section className={styles.sectionFeature}>
      <div className={styles.sectionFeatureDesign}>
        <div className={styles.featureBox}>
          <Globe size={80} strokeWidth={1} className={styles.featureBoxIcon} />
          <h3
            className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}
          >
            Explore the world
          </h3>
          <p className={styles.featureBoxText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            officia ad consequatur animi aliquid quaerat! Molestias repudiandae
            reprehenderit
          </p>
        </div>
        <div className={styles.featureBox}>
          <Compass
            size={80}
            strokeWidth={1}
            className={styles.featureBoxIcon}
          />
          <h3
            className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}
          >
            Meet Nature
          </h3>
          <p className={styles.featureBoxText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            officia ad consequatur animi aliquid quaerat! Molestias repudiandae
            reprehenderit
          </p>
        </div>
        <div className={styles.featureBox}>
          <Map size={80} strokeWidth={1} className={styles.featureBoxIcon} />
          <h3
            className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}
          >
            Find your way
          </h3>
          <p className={styles.featureBoxText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            officia ad consequatur animi aliquid quaerat! Molestias repudiandae
            reprehenderit
          </p>
        </div>
        <div className={styles.featureBox}>
          <Heart size={80} strokeWidth={1} className={styles.featureBoxIcon} />
          <h3
            className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}
          >
            Live a Healthier life
          </h3>
          <p className={styles.featureBoxText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            officia ad consequatur animi aliquid quaerat! Molestias repudiandae
            reprehenderit
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
