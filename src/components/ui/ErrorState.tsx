import React from 'react';
import styles from '../../styles/ErrorState.module.css';

interface ErrorStateProps {
  title?: string;
    message: string;
      onRetry?: () => void;
      }

      const ErrorState: React.FC<ErrorStateProps> = ({
        title = 'Something went wrong',
          message,
            onRetry
            }) => {
              return (
                  <div className={styles.wrapper}>
                        <div className={styles.icon}>⚠</div>
                              <h3 className={styles.title}>{title}</h3>
                                    <p className={styles.message}>{message}</p>
                                          {onRetry && (
                                                  <button className={styles.retry} onClick={onRetry}>
                                                            Try Again
                                                                    </button>
                                                                          )}
                                                                              </div>
                                                                                );
                                                                                };

                                                                                export default ErrorState;