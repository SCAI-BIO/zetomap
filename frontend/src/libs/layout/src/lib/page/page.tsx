import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

/* eslint-disable-next-line */
// export interface PageProps {}

export const Page = styled(Layout)`
  min-height: 100vh;
  background: rgba(232, 238, 248, 0.4);
`;

/*export function Page(props: PageProps) {
  return (
    <StyledPage>
      <h1>Welcome to Page!</h1>
    </StyledPage>
  );
}*/

export default Page;
