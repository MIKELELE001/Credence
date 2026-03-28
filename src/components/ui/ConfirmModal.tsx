import React from 'react';
import styles from '../../styles/ConfirmModal.module.css';

interface ConfirmModalProps {
  title: string;
    message: string;
      confirmLabel?: string;
        cancelLabel?: string;
          onConfirm: () => void;
            onCancel: () => void;
            }

            const ConfirmModal: React.FC<ConfirmModalProps> = ({
              title,
                message,
                  confirmLabel = 'Confirm',
                    cancelLabel = 'Cancel',
                      onConfirm,
                        onCancel
                        }) => {
                          return (
                              <div className={styles.overlay}>
                                    <div className={styles.modal}>
                                            <h3 className={styles.title}>{title}</h3>
                                                    <p className={styles.message}>{message}</p>
                                                            <div className={styles.actions}>
                                                                      <button className={styles.cancel} onClick={onCancel}>
                                                                                  {cancelLabel}
                                                                                            </button>
                                                                                                      <button className={styles.confirm} onClick={onConfirm}>
                                                                                                                  {confirmLabel}
                                                                                                                            </button>
                                                                                                                                    </div>
                                                                                                                                          </div>
                                                                                                                                              </div>
                                                                                                                                                );
                                                                                                                                                };

                                                                                                                                                export default ConfirmModal;