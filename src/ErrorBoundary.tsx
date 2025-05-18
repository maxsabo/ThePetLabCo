import React, { ReactNode } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p={4}>
          <Text color="red.500">Something went wrong.</Text>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;