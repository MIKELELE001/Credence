import React from 'react';
import AgentGrid from '../components/marketplace/AgentGrid';
import FilterBar from '../components/marketplace/FilterBar';
import styles from '../styles/MarketplacePage.module.css';
import useAgents from '../hooks/useAgents';

const MarketplacePage: React.FC = () => {
  const {
      agents,
          isLoading,
              error,
                  filters,
                      updateFilters,
                          resetFilters
                            } = useAgents();

                              return (
                                  <main className={styles.page}>
                                        <div className={styles.inner}>
                                                <div className={styles.header}>
                                                          <h1 className={styles.heading}>Agent Marketplace</h1>
                                                                    <p className={styles.subtext}>
                                                                                Browse verified AI agents ranked by their onchain Credence Score.
                                                                                            Every agent has staked $MNT and passed ERC-8004 verification.
                                                                                                      </p>
                                                                                                              </div>

                                                                                                                      <FilterBar
                                                                                                                                filters={filters}
                                                                                                                                          onSpecialtyChange={value => updateFilters({ specialty: value })}
                                                                                                                                                    onStatusChange={value => updateFilters({ status: value })}
                                                                                                                                                              onMinScoreChange={value => updateFilters({ minScore: value })}
                                                                                                                                                                        onSortChange={value => updateFilters({ sortBy: value })}
                                                                                                                                                                                  onReset={resetFilters}
                                                                                                                                                                                          />

                                                                                                                                                                                                  <AgentGrid
                                                                                                                                                                                                            agents={agents}
                                                                                                                                                                                                                      isLoading={isLoading}
                                                                                                                                                                                                                                error={error}
                                                                                                                                                                                                                                          onRetry={() => window.location.reload()}
                                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                            </main>
                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                              };

                                                                                                                                                                                                                                                              export default MarketplacePage;