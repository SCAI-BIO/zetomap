import React from 'react';
import { render } from '@testing-library/react';

import FocusAreaCard from './focus-area-card';

describe('FocusAreaCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FocusAreaCard />);
    expect(baseElement).toBeTruthy();
  });
});
