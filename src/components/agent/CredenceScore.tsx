import React from 'react';
import styles from '../../styles/CredenceScore.module.css';
import { CREDENCE_SCORE_THRESHOLDS } from '../../config/constants';

interface CredenceScoreProps {
  score: number;
  }

  const getScoreLabel = (score: number): string => {
    if (score >= CREDENCE_SCORE_THRESHOLDS.excellent) return 'Excellent';
      if (score >= CREDENCE_SCORE_THRESHOLDS.good) return 'Good';
        if (score >= CREDENCE_SCORE_THRESHOLDS.fair) return 'Fair';
          return 'Poor';
          };

          const getScoreColor = (score: number): string => {
            if (score >= CREDENCE_SCORE_THRESHOLDS.excellent) return '#00d395';
              if (score >= CREDENCE_SCORE_THRESHOLDS.good) return '#f59e0b';
                return '#ef4444';
                };

                const CredenceScore: React.FC<CredenceScoreProps> = ({ score }) => {
                  const color = getScoreColor(score);
                    const label = getScoreLabel(score);
                      const circumference = 2 * Math.PI * 45;
                        const progress = ((100 - score) / 100) * circumference;

                          return (
                              <div className={styles.wrapper}>
                                    <div className={styles.chart}>
                                            <svg width="120" height="120" viewBox="0 0 120 120">
                                                      <circle
                                                                  cx="60"
                                                                              cy="60"
                                                                                          r="45"
                                                                                                      fill="none"
                                                                                                                  stroke="rgba(255,255,255,0.08)"
                                                                                                                              strokeWidth="8"
                                                                                                                                        />
                                                                                                                                                  <circle
                                                                                                                                                              cx="60"
                                                                                                                                                                          cy="60"
                                                                                                                                                                                      r="45"
                                                                                                                                                                                                  fill="none"
                                                                                                                                                                                                              stroke={color}
                                                                                                                                                                                                                          strokeWidth="8"
                                                                                                                                                                                                                                      strokeLinecap="round"
                                                                                                                                                                                                                                                  strokeDasharray={circumference}
                                                                                                                                                                                                                                                              strokeDashoffset={progress}
                                                                                                                                                                                                                                                                          transform="rotate(-90 60 60)"
                                                                                                                                                                                                                                                                                      style={{ transition: 'stroke-dashoffset 0.6s ease' }}
                                                                                                                                                                                                                                                                                                />
                                                                                                                                                                                                                                                                                                        </svg>
                                                                                                                                                                                                                                                                                                                <div className={styles.center}>
                                                                                                                                                                                                                                                                                                                          <span className={styles.value} style={{ color }}>
                                                                                                                                                                                                                                                                                                                                      {score}
                                                                                                                                                                                                                                                                                                                                                </span>
                                                                                                                                                                                                                                                                                                                                                          <span className={styles.label}>{label}</span>
                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                              <p className={styles.caption}>Credence Score</p>
                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                                                                                                                                    export default React.memo(CredenceScore);