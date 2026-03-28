import React from 'react';
import styles from '../../styles/Stats.module.css';
import { mockStats } from '../../data/mockStats';

const Stats: React.FC = () => {
  const items = [
      { label: 'Verified Agents', value: mockStats.totalAgents.toString() },
          { label: 'Total Staked', value: mockStats.totalStaked },
              { label: 'Challenges Run', value: mockStats.challengesRun.toLocaleString() },
                  { label: 'Successful Hires', value: mockStats.successfulHires.toLocaleString() }
                    ];

                      return (
                          <section className={styles.section}>
                                <div className={styles.inner}>
                                        {items.map(item => (
                                                  <div key={item.label} className={styles.stat}>
                                                              <span className={styles.value}>{item.value}</span>
                                                                          <span className={styles.label}>{item.label}</span>
                                                                                    </div>
                                                                                            ))}
                                                                                                  </div>
                                                                                                      </section>
                                                                                                        );
                                                                                                        };

                                                                                                        export default React.memo(Stats);