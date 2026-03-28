import React from 'react';
import styles from '../../styles/Button.module.css';

interface ButtonProps {
  label: string;
    onClick?: () => void;
      variant?: 'primary' | 'secondary' | 'ghost';
        size?: 'sm' | 'md' | 'lg';
          disabled?: boolean;
            fullWidth?: boolean;
              type?: 'button' | 'submit';
              }

              const Button: React.FC<ButtonProps> = ({
                label,
                  onClick,
                    variant = 'primary',
                      size = 'md',
                        disabled = false,
                          fullWidth = false,
                            type = 'button'
                            }) => {
                              return (
                                  <button
                                        type={type}
                                              onClick={onClick}
                                                    disabled={disabled}
                                                          className={[
                                                                  styles.button,
                                                                          styles[variant],
                                                                                  styles[size],
                                                                                          fullWidth ? styles.fullWidth : ''
                                                                                                ].join(' ')}
                                                                                                    >
                                                                                                          {label}
                                                                                                              </button>
                                                                                                                );
                                                                                                                };

                                                                                                                export default React.memo(Button);