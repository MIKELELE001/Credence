import React from 'react';
import styles from '../../styles/LoadingSpinner.module.css';

interface LoadingSpinnerProps {
  message?: string;
  }

  const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    message = 'Loading...'
    }) => {
      return (
          <div className={styles.wrapper}>
                <div className={styles.spinner} />
                      <p className={styles.message}>{message}</p>
                          </div>
                            );
                            };

                            export default LoadingSpinner;