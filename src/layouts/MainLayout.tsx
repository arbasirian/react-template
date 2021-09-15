import React from 'react';

import { Box, ErrorBoundary } from 'components';

type Props = {
  children: any;
};

const MainLayout = ({ children }: Props) => {
  return (
    <Box>
      <ErrorBoundary> {children}</ErrorBoundary>
    </Box>
  );
};

export default MainLayout;
