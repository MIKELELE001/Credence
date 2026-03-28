import { useState, useCallback } from 'react';
import type { FilterState, AgentSpecialty, AgentStatus } from '../types';

const initialFilters: FilterState = {
  specialty: 'All',
    minScore: 0,
      status: 'All',
        sortBy: 'credenceScore'
        };

        const useFilter = () => {
          const [filters, setFilters] = useState<FilterState>(initialFilters);

            const setSpecialty = useCallback(
                (specialty: AgentSpecialty | 'All') => {
                      setFilters(prev => ({ ...prev, specialty }));
                          },
                              []
                                );

                                  const setMinScore = useCallback((minScore: number) => {
                                      setFilters(prev => ({ ...prev, minScore }));
                                        }, []);

                                          const setStatus = useCallback(
                                              (status: AgentStatus | 'All') => {
                                                    setFilters(prev => ({ ...prev, status }));
                                                        },
                                                            []
                                                              );

                                                                const setSortBy = useCallback(
                                                                    (sortBy: FilterState['sortBy']) => {
                                                                          setFilters(prev => ({ ...prev, sortBy }));
                                                                              },
                                                                                  []
                                                                                    );

                                                                                      const resetFilters = useCallback(() => {
                                                                                          setFilters(initialFilters);
                                                                                            }, []);

                                                                                              return {
                                                                                                  filters,
                                                                                                      setSpecialty,
                                                                                                          setMinScore,
                                                                                                              setStatus,
                                                                                                                  setSortBy,
                                                                                                                      resetFilters
                                                                                                                        };
                                                                                                                        };

                                                                                                                        export default useFilter;