import React from 'react';
import { render } from '@testing-library/react';

import ImprintHolger from './imprint-holger';

describe('Imprint', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImprintHolger />);
    expect(baseElement).toBeTruthy();
  });
});
