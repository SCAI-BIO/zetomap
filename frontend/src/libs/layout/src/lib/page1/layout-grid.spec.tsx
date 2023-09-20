import React from 'react';
import { render } from '@testing-library/react';

import FixedLayout from './fixed-layout';

describe('LayoutGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FixedLayout />);
    expect(baseElement).toBeTruthy();
  });
});
