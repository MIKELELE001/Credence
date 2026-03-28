import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import WalletButton from '../ui/WalletButton';
import styles from '../../styles/Navbar.module.css';
import type { WalletState } from '../../types';

interface NavbarProps {
  wallet: WalletState;
    onConnect: () => void;
      onDisconnect: () => void;
      }

      const Navbar: React.FC<NavbarProps> = ({ wallet, onConnect, onDisconnect }) => {
        const navigate = useNavigate();
          const location = useLocation();

            const isActive = (path: string) => location.pathname === path;

              return (
                  <nav className={styles.navbar}>
                        <div className={styles.inner}>
                                <button className={styles.logo} onClick={() => navigate('/')}>
                                          <span className={styles.logoMark}>⬡</span>
                                                    <span className={styles.logoText}>Credence</span>
                                                            </button>

                                                                    <div className={styles.links}>
                                                                              <button
                                                                                          className={[styles.link, isActive('/marketplace') ? styles.active : ''].join(' ')}
                                                                                                      onClick={() => navigate('/marketplace')}
                                                                                                                >
                                                                                                                            Marketplace
                                                                                                                                      </button>
                                                                                                                                                <button
                                                                                                                                                            className={[styles.link, isActive('/stake') ? styles.active : ''].join(' ')}
                                                                                                                                                                        onClick={() => navigate('/stake')}
                                                                                                                                                                                  >
                                                                                                                                                                                              List Agent
                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                        <WalletButton
                                                                                                                                                                                                                                  wallet={wallet}
                                                                                                                                                                                                                                            onConnect={onConnect}
                                                                                                                                                                                                                                                      onDisconnect={onDisconnect}
                                                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                        </nav>
                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                                                          export default React.memo(Navbar);