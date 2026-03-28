import React from 'react';
import styles from '../../styles/Badge.module.css';

interface BadgeProps {
  label: string;
    variant?: 'green' | 'warning' | 'error' | 'neutral';
    }

    const Badge: React.FC<BadgeProps> = ({ label, variant = 'neutral' }) => {
      return (
          <span className={[styles.badge, styles[variant]].join(' ')}>
                {label}
                    </span>
                      );
                      };

                      export default React.memo(Badge);