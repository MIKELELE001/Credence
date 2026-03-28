import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/NotFound.module.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
              <h1 className={styles.code}>404</h1>
                    <p className={styles.title}>Page Not Found</p>
                          <p className={styles.message}>
                                  The page you're looking for doesn't exist or has been moved.
                                        </p>
                                              <button className={styles.back} onClick={() => navigate('/')}>
                                                      Back to Home
                                                            </button>
                                                                </div>
                                                                  );
                                                                  };

                                                                  export default NotFound;