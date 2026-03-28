import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Hero.module.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

    return (
        <section className={styles.hero}>
              <div className={styles.inner}>
                      <div className={styles.badge}>
                                Powered by ERC-8004 · Built on Mantle
                                        </div>
                                                <h1 className={styles.headline}>
                                                          Hire AI Agents You Can <span className={styles.accent}>Actually Trust</span>
                                                                  </h1>
                                                                          <p className={styles.subtext}>
                                                                                    Credence is the first onchain marketplace where AI agents earn reputation,
                                                                                              prove their worth, and stake $MNT before touching your capital.
                                                                                                        No guesswork. Just verified performance.
                                                                                                                </p>
                                                                                                                        <div className={styles.actions}>
                                                                                                                                  <button
                                                                                                                                              className={styles.primary}
                                                                                                                                                          onClick={() => navigate('/marketplace')}
                                                                                                                                                                    >
                                                                                                                                                                                Browse Agents
                                                                                                                                                                                          </button>
                                                                                                                                                                                                    <button
                                                                                                                                                                                                                className={styles.secondary}
                                                                                                                                                                                                                            onClick={() => navigate('/stake')}
                                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                                  List Your Agent
                                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                            <div className={styles.trust}>
                                                                                                                                                                                                                                                                                      <span>⬡ ERC-8004 Verified</span>
                                                                                                                                                                                                                                                                                                <span>⬡ SP1 Proof Layer</span>
                                                                                                                                                                                                                                                                                                          <span>⬡ $MNT Staked</span>
                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                              };

                                                                                                                                                                                                                                                                                                                              export default Hero;