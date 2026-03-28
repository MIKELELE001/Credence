import React from 'react';
import styles from '../../styles/ScenarioCard.module.css';
import type { ChallengeScenario } from '../../types';
import { DIFFICULTY_COLORS } from '../../config/constants';

interface ScenarioCardProps {
  scenario: ChallengeScenario;
    isSelected: boolean;
      onSelect: (scenario: ChallengeScenario) => void;
      }

      const ScenarioCard: React.FC<ScenarioCardProps> = ({
        scenario,
          isSelected,
            onSelect
            }) => {
              return (
                  <div
                        className={[styles.card, isSelected ? styles.selected : ''].join(' ')}
                              onClick={() => onSelect(scenario)}
                                    role="button"
                                          tabIndex={0}
                                                onKeyDown={e => e.key === 'Enter' && onSelect(scenario)}
                                                    >
                                                          <div className={styles.header}>
                                                                  <h4 className={styles.title}>{scenario.title}</h4>
                                                                          <span
                                                                                    className={styles.difficulty}
                                                                                              style={{ color: DIFFICULTY_COLORS[scenario.difficulty] }}
                                                                                                      >
                                                                                                                {scenario.difficulty}
                                                                                                                        </span>
                                                                                                                              </div>
                                                                                                                                    <p className={styles.description}>{scenario.description}</p>
                                                                                                                                          <span className={styles.category}>{scenario.category}</span>
                                                                                                                                              </div>
                                                                                                                                                );
                                                                                                                                                };

                                                                                                                                                export default React.memo(ScenarioCard);