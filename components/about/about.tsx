import Image from "next/image";

import styles from "@/app/page.module.css";
import compPhoto1 from "@/public/images/nat-1-large.jpg";
import compPhoto2 from "@/public/images/nat-2-large.jpg";
import compPhoto3 from "@/public/images/nat-3-large.jpg";

const About = () => {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.uCenterText}>
        <h2 className={`${styles.headingSecondary} ${styles.uMarginBottomBig}`}>
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className={styles.sectionAbout__layout}>
        <div>
          <h3
            className={`${styles.headingTertiary} ${styles.uMarginBottomSmaller}`}
          >
            You&apos;re going to fall in love with nature
          </h3>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            consequatur, voluptatibus numquam natus doloremque, quis quae magni
            saepe illum quas quam beatae consectetur? Consequuntur iusto beatae
            eveniet. Fugiat, nam delectus!
          </p>

          <h3
            className={`${styles.headingTertiary} ${styles.uMarginBottomSmaller}`}
          >
            Live adventures like you never have before
          </h3>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            aliquam quis iusto aspernatur quasi quos excepturi veniam architecto
            reprehenderit voluptates consequuntur quam laudantium
            necessitatibus, sapiente ipsa nihil voluptas libero ea?
          </p>
          <a href="#" className={styles.btnText}>
            Learn more &rarr;
          </a>
        </div>
        <div className={styles.compositionLayout}>
          <div className={styles.composition}>
            <Image
              src={compPhoto1}
              width={1000}
              height={667}
              layout="responsive"
              sizes="(min-width: 740px) calc(50vw - 255px), calc(99vw - 608px)"
              alt="Nature forest photo"
              className={`${styles.composition__photo} ${styles.composition__photo_p1}`}
            />

            <Image
              src={compPhoto2}
              width={1000}
              height={664}
              layout="responsive"
              sizes="(min-width: 740px) calc(50vw - 255px), calc(99vw - 608px)"
              alt="Nature hills photo"
              className={`${styles.composition__photo} ${styles.composition__photo_p2}`}
            />
            <Image
              src={compPhoto3}
              width={1000}
              height={667}
              layout="responsive"
              sizes="(min-width: 740px) calc(50vw - 255px), calc(99vw - 608px)"
              alt="Nature top mountains photo"
              className={`${styles.composition__photo} ${styles.composition__photo_p3}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
