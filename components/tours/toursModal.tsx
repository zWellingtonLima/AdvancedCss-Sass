"use client"

import Image from "next/image";
import { X } from "lucide-react";

import styles from "@/app/page.module.css";
import girlImage from "@/public/images/nat-8.jpg";
import boyImage from "@/public/images/nat-9.jpg";
import { useStoreModal } from "@/hooks/useModalStore";

const ToursModal = () => {
  const { isOpen, onClose } = useStoreModal();

  if (isOpen) {
    return (
      <section className={styles.toursModal}>
        <div className={styles.toursModal_baseLayout}>
          <div className={styles.toursModal_photos}>
            <div className={styles.toursModal_photos_layout}>
              <Image
                src={girlImage}
                alt="Girl in a lake"
                fill
                objectFit="cover"
              />
            </div>
            <div className={styles.toursModal_photos_layout}>
              <Image
                src={boyImage}
                alt="Man looking at mountains"
                fill
                objectFit="cover"
              />
            </div>
          </div>

          <div className={styles.content}>
            <button onClick={onClose} className={styles.content_button}>
              <X />
            </button>
            <h3 className={styles.headingSecondary}>Start booking now</h3>
            <p
              className={`${styles.headingTertiary} ${styles.content_paragraph}`}
            >
              Important - please read the terms and conditions first
            </p>
            <div className={styles.content_info}>
              <p className={styles.content_info_detail}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                laborum, explicabo earum aspernatur modi autem sunt ratione amet
                quae officiis consequatur velit, error, nisi fugiat ullam iusto
                et perferendis. Dignissimos.equatur velit, error, nisi fugiat
                ullam iusto et perferendis. Dignissimos.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
                ea corporis odit sint quo beatae perferendis sunt expedita quod
                veniam. Nihil officiis quam iure sed, in ullam aliquam
                perferendis equatur velit, error, nisi fugiat ullam iusto et
                perferendis. Dignissimos. assumenda.
              </p>
            </div>

            <div
              className={`${styles.uCenterText} ${styles.uMarginTopMedium} ${styles.content_cta}`}
            >
              <a href="#" className={`${styles.btn} ${styles.btn_green}`}>
                Book now
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default ToursModal;
