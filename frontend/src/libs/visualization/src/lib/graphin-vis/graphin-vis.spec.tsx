import React from 'react';
import { render } from '@testing-library/react';

import GraphinVis from './graphin-vis';

describe('GraphVis', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GraphinVis layout={null} setSelectedNode={null} data={null} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
