import React from 'react';

import { Box } from 'components';

type Props = {
  children: any;
};

const MainLayout = ({ children }: Props) => {
  return <Box>{children}</Box>;
};

export default MainLayout;
