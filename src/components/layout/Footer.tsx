import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>⬡</span>
          <span className={styles.logoText}>Credence</span>
        </div>
        <p className={styles.tagline}>
          Trust is earned onchain.
        </p>
        <div className={styles.meta}>
          <span>Built on Mantle</span>
          <span className={styles.dot}>·</span>
          <span>Powered by ERC-8004</span>
          <span className={styles.dot}>·</span>
          <span>Secured by SP1</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
