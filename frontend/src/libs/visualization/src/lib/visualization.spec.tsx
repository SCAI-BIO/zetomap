import React from 'react';
import { render } from '@testing-library/react';

import Visualization from './visualization';

describe('Visualization', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Visualization />);
    expect(baseElement).toBeTruthy();
  });
});
