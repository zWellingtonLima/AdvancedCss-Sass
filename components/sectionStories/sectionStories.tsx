import styles from "@/app/page.module.css";
import Image from "next/image";

import story1 from "@/public/images/nat-8.jpg";
import story2 from "@/public/images/nat-9.jpg";

const SectionStories = () => {
  return (
    <section className={styles.sectionStories}>
      <div className={styles.bgVideo}>
        <video className={styles.bgVideo_content} autoPlay muted loop>
          <source src="/vid/video.mp4" type="video/mp4" />
          <source src="/vid/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className={`${styles.uCenterText} ${styles.uMarginBottomBig}`}>
        <h2 className={styles.headingSecondary}>
          We make people genuinely happy
        </h2>
      </div>

      <div className={styles.story}>
        {/* Transform this into a component*/}
        <figure className={styles.storyShape}>
          <Image
            alt="Person on a tour"
            src={story1}
            fill
            objectFit="cover"
            className={styles.storyImage}
          />
          <figcaption className={styles.storyImageCaption}>
            Mary Smith
          </figcaption>
        </figure>
        <div className={styles.storyText}>
          <h3
            className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}
          >
            I had the best week ever with my family.
          </h3>
          <p className={styles.storyComment}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            blanditiis qui, quam tenetur, autem quis nostrum est voluptatem
            eveniet unde, recusandae placeat consequatur magni vero. Vero beatae
            perferendis doloribus maiores?tatem eveniet unde, recusandae placeat
            consequatur magni
          </p>
        </div>
      </div>

      <div className={styles.story}>
        {/* Transform this into a component*/}
        <figure className={styles.storyShape}>
          <Image
            alt="Person on a tour"
            src={story2}
            fill
            objectFit="cover"
            className={styles.storyImage}
          />
          <figcaption className={styles.storyImageCaption}>
            Jack Wilson
          </figcaption>
        </figure>
        <div className={styles.storyText}>
          <h3
            className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}
          >
            WOW! My life is completely different now!
          </h3>
          <p className={styles.storyComment}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            blanditiis qui, quam tenetur, autem quis nostrum est voluptatem
            eveniet unde, recusandae placeat consequatur magni vero. Vero beatae
            perferendis doloribus maiores?tatem eveniet unde, recusandae placeat
            consequatur magni
          </p>
        </div>
      </div>

      <div className={`${styles.uCenterText} ${styles.uMarginTopBig}`}>
        <a href="#" className={styles.btnText}>
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default SectionStories;
