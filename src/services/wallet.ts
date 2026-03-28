import type { WalletState } from '../types';

const MANTLE_CHAIN_ID = '0x1388';
const MANTLE_CHAIN_PARAMS = {
  chainId: MANTLE_CHAIN_ID,
    chainName: 'Mantle',
      nativeCurrency: {
          name: 'MNT',
              symbol: 'MNT',
                  decimals: 18
                    },
                      rpcUrls: ['https://rpc.mantle.xyz'],
                        blockExplorerUrls: ['https://explorer.mantle.xyz']
                        };

                        const getProvider = (): unknown => {
                          if (typeof window === 'undefined') return null;
                            return (window as unknown as { ethereum?: unknown }).ethereum ?? null;
                            };

                            export const connectWallet = async (): Promise<WalletState> => {
                              try {
                                  const provider = getProvider();

                                      if (!provider) {
                                            return {
                                                    address: null,
                                                            isConnected: false,
                                                                    isConnecting: false,
                                                                            error: 'No wallet detected. Please install MetaMask or a Web3 wallet.'
                                                                                  };
                                                                                      }

                                                                                          const ethereum = provider as {
                                                                                                request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
                                                                                                    };

                                                                                                        const accounts = await ethereum.request({
                                                                                                              method: 'eth_requestAccounts'
                                                                                                                  }) as string[];

                                                                                                                      try {
                                                                                                                            await ethereum.request({
                                                                                                                                    method: 'wallet_switchEthereumChain',
                                                                                                                                            params: [{ chainId: MANTLE_CHAIN_ID }]
                                                                                                                                                  });
                                                                                                                                                      } catch {
                                                                                                                                                            await ethereum.request({
                                                                                                                                                                    method: 'wallet_addEthereumChain',
                                                                                                                                                                            params: [MANTLE_CHAIN_PARAMS]
                                                                                                                                                                                  });
                                                                                                                                                                                      }

                                                                                                                                                                                          return {
                                                                                                                                                                                                address: accounts[0],
                                                                                                                                                                                                      isConnected: true,
                                                                                                                                                                                                            isConnecting: false,
                                                                                                                                                                                                                  error: null
                                                                                                                                                                                                                      };
                                                                                                                                                                                                                        } catch (err: unknown) {
                                                                                                                                                                                                                            const message = err instanceof Error ? err.message : 'Failed to connect wallet';
                                                                                                                                                                                                                                return {
                                                                                                                                                                                                                                      address: null,
                                                                                                                                                                                                                                            isConnected: false,
                                                                                                                                                                                                                                                  isConnecting: false,
                                                                                                                                                                                                                                                        error: message
                                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                              };

                                                                                                                                                                                                                                                              export const disconnectWallet = (): WalletState => {
                                                                                                                                                                                                                                                                return {
                                                                                                                                                                                                                                                                    address: null,
                                                                                                                                                                                                                                                                        isConnected: false,
                                                                                                                                                                                                                                                                            isConnecting: false,
                                                                                                                                                                                                                                                                                error: null
                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                  };