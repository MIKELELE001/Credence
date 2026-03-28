import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AgentProfile from '../components/agent/AgentProfile';
import ChallengeArena from '../components/challenge/ChallengeArena';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorState from '../components/ui/ErrorState';
import useAgentProfile from '../hooks/useAgentProfile';
import styles from '../styles/AgentProfilePage.module.css';

const AgentProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
      const { agent, isLoading, error } = useAgentProfile(id ?? '');
        const [showChallenge, setShowChallenge] = useState(false);

          if (isLoading) {
              return <LoadingSpinner message="Loading agent profile..." />;
                }

                  if (error || !agent) {
                      return (
                            <ErrorState
                                    message={error ?? 'Agent not found.'}
                                            onRetry={() => navigate('/marketplace')}
                                                  />
                                                      );
                                                        }

                                                          return (
                                                              <main className={styles.page}>
                                                                    <AgentProfile
                                                                            agent={agent}
                                                                                    onChallenge={() => setShowChallenge(true)}
                                                                                          />
                                                                                                {showChallenge && (
                                                                                                        <div className={styles.arena}>
                                                                                                                  <ChallengeArena agent={agent} />
                                                                                                                          </div>
                                                                                                                                )}
                                                                                                                                    </main>
                                                                                                                                      );
                                                                                                                                      };

                                                                                                                                      export default AgentProfilePage;