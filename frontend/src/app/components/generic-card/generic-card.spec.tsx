import React from 'react';
import { render } from '@testing-library/react';

import GenericCard from './generic-card';

describe('GenericCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenericCard />);
    expect(baseElement).toBeTruthy();
  });
});
