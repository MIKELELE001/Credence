import { useState, useEffect } from 'react';
import type { Agent, FilterState } from '../types';
import { fetchAgents, filterAgents } from '../services/agents';

const initialFilters: FilterState = {
  specialty: 'All',
    minScore: 0,
      status: 'All',
        sortBy: 'credenceScore'
        };

        const useAgents = () => {
          const [agents, setAgents] = useState<Agent[]>([]);
            const [filtered, setFiltered] = useState<Agent[]>([]);
              const [filters, setFilters] = useState<FilterState>(initialFilters);
                const [isLoading, setIsLoading] = useState(true);
                  const [error, setError] = useState<string | null>(null);

                    useEffect(() => {
                        const loadAgents = async () => {
                              try {
                                      setIsLoading(true);
                                              setError(null);
                                                      const data = await fetchAgents();
                                                              setAgents(data);
                                                                      setFiltered(filterAgents(data, initialFilters));
                                                                            } catch (err: unknown) {
                                                                                    const message = err instanceof Error ? err.message : 'Failed to load agents';
                                                                                            setError(message);
                                                                                                  } finally {
                                                                                                          setIsLoading(false);
                                                                                                                }
                                                                                                                    };

                                                                                                                        loadAgents();
                                                                                                                          }, []);

                                                                                                                            useEffect(() => {
                                                                                                                                setFiltered(filterAgents(agents, filters));
                                                                                                                                  }, [filters, agents]);

                                                                                                                                    const updateFilters = (newFilters: Partial<FilterState>) => {
                                                                                                                                        setFilters(prev => ({ ...prev, ...newFilters }));
                                                                                                                                          };

                                                                                                                                            const resetFilters = () => {
                                                                                                                                                setFilters(initialFilters);
                                                                                                                                                  };

                                                                                                                                                    return {
                                                                                                                                                        agents: filtered,
                                                                                                                                                            isLoading,
                                                                                                                                                                error,
                                                                                                                                                                    filters,
                                                                                                                                                                        updateFilters,
                                                                                                                                                                            resetFilters
                                                                                                                                                                              };
                                                                                                                                                                              };

                                                                                                                                                                              export default useAgents;