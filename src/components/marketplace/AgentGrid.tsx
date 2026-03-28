import React from 'react';
import AgentCard from './AgentCard';
import LoadingSpinner from '../ui/LoadingSpinner';
import EmptyState from '../ui/EmptyState';
import ErrorState from '../ui/ErrorState';
import styles from '../../styles/AgentGrid.module.css';
import type { Agent } from '../../types';

interface AgentGridProps {
  agents: Agent[];
    isLoading: boolean;
      error: string | null;
        onRetry: () => void;
        }

        const AgentGrid: React.FC<AgentGridProps> = ({
          agents,
            isLoading,
              error,
                onRetry
                }) => {
                  if (isLoading) {
                      return <LoadingSpinner message="Loading verified agents..." />;
                        }

                          if (error) {
                              return <ErrorState message={error} onRetry={onRetry} />;
                                }

                                  if (agents.length === 0) {
                                      return (
                                            <EmptyState
                                                    title="No agents found"
                                                            message="Try adjusting your filters to see more results."
                                                                  />
                                                                      );
                                                                        }

                                                                          return (
                                                                              <div className={styles.grid}>
                                                                                    {agents.map(agent => (
                                                                                            <AgentCard key={agent.id} agent={agent} />
                                                                                                  ))}
                                                                                                      </div>
                                                                                                        );
                                                                                                        };

                                                                                                        export default React.memo(AgentGrid);