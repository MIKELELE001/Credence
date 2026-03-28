import { useState, useCallback } from 'react';
import type { WalletState } from '../types';
import { connectWallet, disconnectWallet } from '../services/wallet';

const initialState: WalletState = {
  address: null,
    isConnected: false,
      isConnecting: false,
        error: null
        };

        const useWallet = () => {
          const [wallet, setWallet] = useState<WalletState>(initialState);

            const connect = useCallback(async () => {
                setWallet(prev => ({ ...prev, isConnecting: true, error: null }));
                    try {
                          const result = await connectWallet();
                                setWallet(result);
                                    } catch (err: unknown) {
                                          const message = err instanceof Error ? err.message : 'Connection failed';
                                                setWallet(prev => ({
                                                        ...prev,
                                                                isConnecting: false,
                                                                        error: message
                                                                              }));
                                                                                  }
                                                                                    }, []);

                                                                                      const disconnect = useCallback(() => {
                                                                                          setWallet(disconnectWallet());
                                                                                            }, []);

                                                                                              return { wallet, connect, disconnect };
                                                                                              };

                                                                                              export default useWallet;