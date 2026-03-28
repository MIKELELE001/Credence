import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/ui/ErrorBoundary';
import LoadingSpinner from './components/ui/LoadingSpinner';
import NotFound from './components/ui/NotFound';
import useWallet from './hooks/useWallet';
import './styles/globals.css';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const MarketplacePage = lazy(() => import('./pages/MarketplacePage'));
const AgentProfilePage = lazy(() => import('./pages/AgentProfilePage'));
const ChallengePage = lazy(() => import('./pages/ChallengePage'));
const StakePage = lazy(() => import('./pages/StakePage'));

const App: React.FC = () => {
  const { wallet, connect, disconnect } = useWallet();

    return (
        <BrowserRouter>
              <ErrorBoundary>
                      <Navbar
                                wallet={wallet}
                                          onConnect={connect}
                                                    onDisconnect={disconnect}
                                                            />
                                                                    <Suspense fallback={<LoadingSpinner message="Loading..." />}>
                                                                              <Routes>
                                                                                          <Route path="/" element={<LandingPage />} />
                                                                                                      <Route path="/marketplace" element={<MarketplacePage />} />
                                                                                                                  <Route path="/agent/:id" element={<AgentProfilePage />} />
                                                                                                                              <Route path="/challenge" element={<ChallengePage />} />
                                                                                                                                          <Route path="/stake" element={<StakePage />} />
                                                                                                                                                      <Route path="*" element={<NotFound />} />
                                                                                                                                                                </Routes>
                                                                                                                                                                        </Suspense>
                                                                                                                                                                                <Footer />
                                                                                                                                                                                      </ErrorBoundary>
                                                                                                                                                                                          </BrowserRouter>
                                                                                                                                                                                            );
                                                                                                                                                                                            };

                                                                                                                                                                                            export default App;