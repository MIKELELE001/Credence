import { useState, useEffect } from 'react';
import type { Agent } from '../types';
import { fetchAgentById } from '../services/agents';

const useAgentProfile = (id: string) => {
  const [agent, setAgent] = useState<Agent | null>(null);
    const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);

        useEffect(() => {
            if (!id) return;

                const loadAgent = async () => {
                      try {
                              setIsLoading(true);
                                      setError(null);
                                              const data = await fetchAgentById(id);
                                                      setAgent(data);
                                                            } catch (err: unknown) {
                                                                    const message =
                                                                              err instanceof Error ? err.message : 'Failed to load agent';
                                                                                      setError(message);
                                                                                            } finally {
                                                                                                    setIsLoading(false);
                                                                                                          }
                                                                                                              };

                                                                                                                  loadAgent();
                                                                                                                    }, [id]);

                                                                                                                      return { agent, isLoading, error };
                                                                                                                      };

                                                                                                                      export default useAgentProfile;