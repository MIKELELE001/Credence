import type { ChallengeResult, Agent, ChallengeScenario } from '../types';

export const runChallenge = async (
  agent: Agent,
    scenario: ChallengeScenario
    ): Promise<ChallengeResult> => {
      try {
          const response = await fetch('/api/challenge', {
                method: 'POST',
                      headers: {
                              'Content-Type': 'application/json'
                                    },
                                          body: JSON.stringify({
                                                  agentName: agent.name,
                                                          agentSpecialty: agent.specialty,
                                                                  agentCredenceScore: agent.credenceScore,
                                                                          agentSuccessRate: agent.successRate,
                                                                                  scenarioTitle: scenario.title,
                                                                                          scenarioDescription: scenario.description,
                                                                                                  scenarioDifficulty: scenario.difficulty
                                                                                                        })
                                                                                                            });

                                                                                                                if (!response.ok) {
                                                                                                                      throw new Error('Challenge simulation failed. Please try again.');
                                                                                                                          }

                                                                                                                              const data = await response.json() as {
                                                                                                                                    passed: boolean;
                                                                                                                                          score: number;
                                                                                                                                                analysis: string;
                                                                                                                                                      recommendations: string[];
                                                                                                                                                          };

                                                                                                                                                              return {
                                                                                                                                                                    agentId: agent.id,
                                                                                                                                                                          scenarioId: scenario.id,
                                                                                                                                                                                passed: data.passed,
                                                                                                                                                                                      score: data.score,
                                                                                                                                                                                            analysis: data.analysis,
                                                                                                                                                                                                  recommendations: data.recommendations,
                                                                                                                                                                                                        timestamp: new Date().toISOString()
                                                                                                                                                                                                            };
                                                                                                                                                                                                              } catch (err: unknown) {
                                                                                                                                                                                                                  const message = err instanceof Error ? err.message : 'Challenge failed';
                                                                                                                                                                                                                      throw new Error(message);
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        };