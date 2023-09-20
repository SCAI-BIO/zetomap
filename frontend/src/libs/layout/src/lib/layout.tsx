import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LayoutProps {}

const StyledLayout = styled.div`
  min-height: 100vh;
  background: rgba(232, 238, 248, 0.4);
`;

export function Layout(props: LayoutProps) {
  return (
    <StyledLayout>
      <h1>Welcome to Layout!</h1>
    </StyledLayout>
  );
}

export default Layout;
