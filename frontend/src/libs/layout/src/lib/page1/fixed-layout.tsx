import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
// export { Footer } from '@scaibio-frontend/layout';

/* eslint-disable-next-line */
export interface LayoutGridProps {}

const FixedLayout = styled(Layout)`
  min-height: 100vh;
  background: rgba(232, 238, 248, 0.4);
`;

export default FixedLayout;
