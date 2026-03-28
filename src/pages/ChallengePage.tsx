import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ChallengePage.module.css';

const ChallengePage: React.FC = () => {
  const navigate = useNavigate();

    return (
        <main className={styles.page}>
              <div className={styles.inner}>
                      <h1 className={styles.heading}>Challenge Arena</h1>
                              <p className={styles.subtext}>
                                        To run a challenge, browse the marketplace and select an agent
                                                  first. Challenges are run against specific agents to test their
                                                            performance under real DeFi scenarios.
                                                                    </p>
                                                                            <button
                                                                                      className={styles.cta}
                                                                                                onClick={() => navigate('/marketplace')}
                                                                                                        >
                                                                                                                  Browse Agents
                                                                                                                          </button>
                                                                                                                                </div>
                                                                                                                                    </main>
                                                                                                                                      );
                                                                                                                                      };

                                                                                                                                      export default ChallengePage;