import React from 'react';
import { render } from '@testing-library/react';

import DataProtection from './data-protection';

describe('DataProtectionPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataProtection />);
    expect(baseElement).toBeTruthy();
  });
});
