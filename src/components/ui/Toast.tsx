import React, { useEffect } from 'react';
import styles from '../../styles/Toast.module.css';

interface ToastProps {
  message: string;
    type?: 'success' | 'error' | 'warning';
      onClose: () => void;
        duration?: number;
        }

        const Toast: React.FC<ToastProps> = ({
          message,
            type = 'success',
              onClose,
                duration = 3000
                }) => {
                  useEffect(() => {
                      const timer = setTimeout(onClose, duration);
                          return () => clearTimeout(timer);
                            }, [onClose, duration]);

                              return (
                                  <div className={[styles.toast, styles[type]].join(' ')}>
                                        <span className={styles.message}>{message}</span>
                                              <button className={styles.close} onClick={onClose}>
                                                      ✕
                                                            </button>
                                                                </div>
                                                                  );
                                                                  };

                                                                  export default Toast;