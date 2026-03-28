import type { Agent, FilterState } from '../types';
import { mockAgents } from '../data/mockAgents';

export const fetchAgents = async (): Promise<Agent[]> => {
  try {
      await new Promise(resolve => setTimeout(resolve, 800));
          return mockAgents;
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : 'Failed to fetch agents';
                    throw new Error(message);
                      }
                      };

                      export const fetchAgentById = async (id: string): Promise<Agent> => {
                        try {
                            await new Promise(resolve => setTimeout(resolve, 600));
                                const agent = mockAgents.find(a => a.id === id);
                                    if (!agent) throw new Error(`Agent with id ${id} not found`);
                                        return agent;
                                          } catch (err: unknown) {
                                              const message = err instanceof Error ? err.message : 'Failed to fetch agent';
                                                  throw new Error(message);
                                                    }
                                                    };

                                                    export const filterAgents = (
                                                      agents: Agent[],
                                                        filters: FilterState
                                                        ): Agent[] => {
                                                          let filtered = [...agents];

                                                            if (filters.specialty !== 'All') {
                                                                filtered = filtered.filter(a => a.specialty === filters.specialty);
                                                                  }

                                                                    if (filters.status !== 'All') {
                                                                        filtered = filtered.filter(a => a.status === filters.status);
                                                                          }

                                                                            filtered = filtered.filter(a => a.credenceScore >= filters.minScore);

                                                                              filtered.sort((a, b) => {
                                                                                  switch (filters.sortBy) {
                                                                                        case 'credenceScore':
                                                                                                return b.credenceScore - a.credenceScore;
                                                                                                      case 'successRate':
                                                                                                              return b.successRate - a.successRate;
                                                                                                                    case 'avgReturn':
                                                                                                                            return b.avgReturn - a.avgReturn;
                                                                                                                                  case 'stakedMNT':
                                                                                                                                          return b.stakedMNT - a.stakedMNT;
                                                                                                                                                default:
                                                                                                                                                        return 0;
                                                                                                                                                            }
                                                                                                                                                              });

                                                                                                                                                                return filtered;
                                                                                                                                                                };