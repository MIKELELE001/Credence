import { useState, useCallback } from 'react';
import type { ChallengeResult, Agent, ChallengeScenario } from '../types';
import { runChallenge } from '../services/challenge';

const useChallenge = () => {
  const [result, setResult] = useState<ChallengeResult | null>(null);
    const [isRunning, setIsRunning] = useState(false);
      const [error, setError] = useState<string | null>(null);

        const startChallenge = useCallback(
            async (agent: Agent, scenario: ChallengeScenario) => {
                  try {
                          setIsRunning(true);
                                  setError(null);
                                          setResult(null);
                                                  const data = await runChallenge(agent, scenario);
                                                          setResult(data);
                                                                } catch (err: unknown) {
                                                                        const message =
                                                                                  err instanceof Error ? err.message : 'Challenge failed';
                                                                                          setError(message);
                                                                                                } finally {
                                                                                                        setIsRunning(false);
                                                                                                              }
                                                                                                                  },
                                                                                                                      []
                                                                                                                        );

                                                                                                                          const resetChallenge = useCallback(() => {
                                                                                                                              setResult(null);
                                                                                                                                  setError(null);
                                                                                                                                    }, []);

                                                                                                                                      return {
                                                                                                                                          result,
                                                                                                                                              isRunning,
                                                                                                                                                  error,
                                                                                                                                                      startChallenge,
                                                                                                                                                          resetChallenge
                                                                                                                                                            };
                                                                                                                                                            };

                                                                                                                                                            export default useChallenge;