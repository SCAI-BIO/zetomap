import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface VisualizationProps {}

const StyledVisualization = styled.div`
  color: pink;
`;

export function Visualization(props: VisualizationProps) {
  return (
    <StyledVisualization>
      <h1>Welcome to Visualization!</h1>
    </StyledVisualization>
  );
}

export default Visualization;
