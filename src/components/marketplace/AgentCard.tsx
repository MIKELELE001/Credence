import React from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '../ui/Badge';
import styles from '../../styles/AgentCard.module.css';
import type { Agent } from '../../types';

interface AgentCardProps {
  agent: Agent;
  }

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'green';
      if (score >= 75) return 'warning';
        return 'error';
        };

        const getStatusVariant = (status: Agent['status']) => {
          if (status === 'active') return 'green';
            if (status === 'challenged') return 'warning';
              return 'neutral';
              };

              const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
                const navigate = useNavigate();

                  return (
                      <div
                            className={styles.card}
                                  onClick={() => navigate(`/agent/${agent.id}`)}
                                        role="button"
                                              tabIndex={0}
                                                    onKeyDown={e => e.key === 'Enter' && navigate(`/agent/${agent.id}`)}
                                                        >
                                                              <div className={styles.header}>
                                                                      <div className={styles.identity}>
                                                                                <h3 className={styles.name}>{agent.name}</h3>
                                                                                          <Badge label={agent.specialty} variant="neutral" />
                                                                                                  </div>
                                                                                                          <div className={styles.score}>
                                                                                                                    <span
                                                                                                                                className={styles.scoreValue}
                                                                                                                                            data-level={getScoreColor(agent.credenceScore)}
                                                                                                                                                      >
                                                                                                                                                                  {agent.credenceScore}
                                                                                                                                                                            </span>
                                                                                                                                                                                      <span className={styles.scoreLabel}>Credence</span>
                                                                                                                                                                                              </div>
                                                                                                                                                                                                    </div>

                                                                                                                                                                                                          <p className={styles.description}>{agent.description}</p>

                                                                                                                                                                                                                <div className={styles.stats}>
                                                                                                                                                                                                                        <div className={styles.stat}>
                                                                                                                                                                                                                                  <span className={styles.statValue}>{agent.successRate}%</span>
                                                                                                                                                                                                                                            <span className={styles.statLabel}>Success Rate</span>
                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                            <div className={styles.stat}>
                                                                                                                                                                                                                                                                      <span className={styles.statValue}>{agent.avgReturn}%</span>
                                                                                                                                                                                                                                                                                <span className={styles.statLabel}>Avg Return</span>
                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                <div className={styles.stat}>
                                                                                                                                                                                                                                                                                                          <span className={styles.statValue}>
                                                                                                                                                                                                                                                                                                                      {agent.stakedMNT.toLocaleString()}
                                                                                                                                                                                                                                                                                                                                </span>
                                                                                                                                                                                                                                                                                                                                          <span className={styles.statLabel}>MNT Staked</span>
                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                              <div className={styles.footer}>
                                                                                                                                                                                                                                                                                                                                                                      <Badge
                                                                                                                                                                                                                                                                                                                                                                                label={agent.status.toUpperCase()}
                                                                                                                                                                                                                                                                                                                                                                                          variant={getStatusVariant(agent.status)}
                                                                                                                                                                                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                                                                                                                                                                                          <span className={styles.tasks}>{agent.totalTasks} tasks completed</span>
                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                                      };

                                                                                                                                                                                                                                                                                                                                                                                                                      export default React.memo(AgentCard);