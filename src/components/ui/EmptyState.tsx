import React from 'react';
import styles from '../../styles/EmptyState.module.css';

interface EmptyStateProps {
  title: string;
    message: string;
      action?: () => void;
        actionLabel?: string;
        }

        const EmptyState: React.FC<EmptyStateProps> = ({
          title,
            message,
              action,
                actionLabel
                }) => {
                  return (
                      <div className={styles.wrapper}>
                            <div className={styles.icon}>◎</div>
                                  <h3 className={styles.title}>{title}</h3>
                                        <p className={styles.message}>{message}</p>
                                              {action && actionLabel && (
                                                      <button className={styles.action} onClick={action}>
                                                                {actionLabel}
                                                                        </button>
                                                                              )}
                                                                                  </div>
                                                                                    );
                                                                                    };

                                                                                    export default EmptyState;