import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  }

  interface ErrorBoundaryState {
    hasError: boolean;
      message: string;
      }

      class ErrorBoundary extends React.Component<
        ErrorBoundaryProps,
          ErrorBoundaryState
          > {
            constructor(props: ErrorBoundaryProps) {
                super(props);
                    this.state = { hasError: false, message: '' };
                      }

                        static getDerivedStateFromError(error: Error): ErrorBoundaryState {
                            return { hasError: true, message: error.message };
                              }

                                handleReset = () => {
                                    this.setState({ hasError: false, message: '' });
                                      };

                                        render() {
                                            if (this.state.hasError) {
                                                  return (
                                                          <div
                                                                    style={{
                                                                                display: 'flex',
                                                                                            flexDirection: 'column',
                                                                                                        alignItems: 'center',
                                                                                                                    justifyContent: 'center',
                                                                                                                                minHeight: '100vh',
                                                                                                                                            gap: '1rem',
                                                                                                                                                        padding: '2rem',
                                                                                                                                                                    textAlign: 'center',
                                                                                                                                                                                backgroundColor: '#000000',
                                                                                                                                                                                            color: '#ffffff'
                                                                                                                                                                                                      }}
                                                                                                                                                                                                              >
                                                                                                                                                                                                                        <div style={{ fontSize: '2.5rem' }}>⚠</div>
                                                                                                                                                                                                                                  <h2 style={{ fontSize: '1.4rem', fontWeight: 600 }}>
                                                                                                                                                                                                                                              Something went wrong
                                                                                                                                                                                                                                                        </h2>
                                                                                                                                                                                                                                                                  <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '360px' }}>
                                                                                                                                                                                                                                                                              {this.state.message || 'An unexpected error occurred.'}
                                                                                                                                                                                                                                                                                        </p>
                                                                                                                                                                                                                                                                                                  <button
                                                                                                                                                                                                                                                                                                              onClick={this.handleReset}
                                                                                                                                                                                                                                                                                                                          style={{
                                                                                                                                                                                                                                                                                                                                        marginTop: '1rem',
                                                                                                                                                                                                                                                                                                                                                      padding: '0.65rem 1.4rem',
                                                                                                                                                                                                                                                                                                                                                                    backgroundColor: '#00d395',
                                                                                                                                                                                                                                                                                                                                                                                  color: '#000000',
                                                                                                                                                                                                                                                                                                                                                                                                fontWeight: 600,
                                                                                                                                                                                                                                                                                                                                                                                                              borderRadius: '10px',
                                                                                                                                                                                                                                                                                                                                                                                                                            border: 'none',
                                                                                                                                                                                                                                                                                                                                                                                                                                          cursor: 'pointer'
                                                                                                                                                                                                                                                                                                                                                                                                                                                      }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Try Again
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            return this.props.children;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              export default ErrorBoundary;