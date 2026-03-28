import type { ChallengeScenario } from '../types';

export const mockChallenges: ChallengeScenario[] = [
  {
      id: 'challenge-001',
          title: 'ETH Price Drop 40%',
              description: 'ETH drops 40% in 24 hours. How does the agent protect positions and manage liquidation risk across Aave and mETH vaults?',
                  difficulty: 'Hard',
                      category: 'Risk Management'
                        },
                          {
                              id: 'challenge-002',
                                  title: 'Stablecoin Depeg Event',
                                      description: 'A major stablecoin depegs to $0.87. The agent must exit affected positions and reroute liquidity to safe assets on Mantle.',
                                          difficulty: 'Hard',
                                              category: 'Liquidity Provisioning'
                                                },
                                                  {
                                                      id: 'challenge-003',
                                                          title: 'Sudden APY Spike',
                                                              description: 'A new Mantle vault offers 45% APY. The agent must evaluate risk, verify the source, and decide whether to reallocate capital.',
                                                                  difficulty: 'Medium',
                                                                      category: 'Yield Optimization'
                                                                        },
                                                                          {
                                                                              id: 'challenge-004',
                                                                                  title: 'Low Liquidity Window',
                                                                                      description: 'Trading volume drops 80% overnight. The agent must execute a large swap on Mantle DEXs with minimal slippage.',
                                                                                          difficulty: 'Medium',
                                                                                              category: 'Trading'
                                                                                                },
                                                                                                  {
                                                                                                      id: 'challenge-005',
                                                                                                          title: 'RWA Compliance Flag',
                                                                                                              description: 'A compliance check flags an RWA asset for review. The agent must pause operations and reroute capital within Ondo vaults.',
                                                                                                                  difficulty: 'Easy',
                                                                                                                      category: 'RWA Management'
                                                                                                                        },
                                                                                                                          {
                                                                                                                              id: 'challenge-006',
                                                                                                                                  title: 'Portfolio Drift Alert',
                                                                                                                                      description: 'Portfolio allocation drifts 25% from targets due to market movement. Rebalance efficiently with minimum gas on Mantle.',
                                                                                                                                          difficulty: 'Easy',
                                                                                                                                              category: 'Portfolio Rebalancing'
                                                                                                                                                }
                                                                                                                                                ];