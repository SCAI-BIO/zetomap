import React from 'react';
import { render } from '@testing-library/react';

import ExpDataCard from './exp-data-card';

describe('ExpDataCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpDataCard />);
    expect(baseElement).toBeTruthy();
  });
});
