import React from 'react';
import styles from '../../styles/WalletButton.module.css';
import type { WalletState } from '../../types';

interface WalletButtonProps {
  wallet: WalletState;
    onConnect: () => void;
      onDisconnect: () => void;
      }

      const truncateAddress = (address: string): string => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
        };

        const WalletButton: React.FC<WalletButtonProps> = ({
          wallet,
            onConnect,
              onDisconnect
              }) => {
                if (wallet.isConnecting) {
                    return (
                          <button className={styles.button} disabled>
                                  Connecting...
                                        </button>
                                            );
                                              }

                                                if (wallet.isConnected && wallet.address) {
                                                    return (
                                                          <button className={styles.connected} onClick={onDisconnect}>
                                                                  <span className={styles.dot} />
                                                                          {truncateAddress(wallet.address)}
                                                                                </button>
                                                                                    );
                                                                                      }

                                                                                        return (
                                                                                            <button className={styles.button} onClick={onConnect}>
                                                                                                  Connect Wallet
                                                                                                      </button>
                                                                                                        );
                                                                                                        };

                                                                                                        export default React.memo(WalletButton);