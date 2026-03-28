export const MANTLE_CHAIN_ID = 5000;

export const MANTLE_RPC_URL = 'https://rpc.mantle.xyz';

export const CREDENCE_SCORE_THRESHOLDS = {
  excellent: 90,
    good: 75,
      fair: 60,
        poor: 0
        } as const;

        export const STAKE_MINIMUM_MNT = 1000;

        export const STAKE_MAXIMUM_MNT = 50000;

        export const MAX_CHALLENGE_RETRIES = 3;

        export const AGENT_SPECIALTY_OPTIONS = [
          'Yield Optimization',
            'Trading',
              'Risk Management',
                'Liquidity Provisioning',
                  'RWA Management',
                    'Portfolio Rebalancing'
                    ] as const;

                    export const SORT_OPTIONS = [
                      { value: 'credenceScore', label: 'Credence Score' },
                        { value: 'successRate', label: 'Success Rate' },
                          { value: 'avgReturn', label: 'Avg Return' },
                            { value: 'stakedMNT', label: 'Staked MNT' }
                            ] as const;

                            export const DIFFICULTY_COLORS = {
                              Easy: '#22c55e',
                                Medium: '#f59e0b',
                                  Hard: '#ef4444'
                                  } as const;

                                  export const STATUS_COLORS = {
                                    active: '#22c55e',
                                      inactive: '#6b7280',
                                        challenged: '#f59e0b'
                                        } as const;