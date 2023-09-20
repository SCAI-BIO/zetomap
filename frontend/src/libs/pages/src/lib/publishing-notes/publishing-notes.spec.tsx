import React from 'react';
import { render } from '@testing-library/react';

import PublishingNotes from './publishing-notes';

describe('PublishingNotes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublishingNotes />);
    expect(baseElement).toBeTruthy();
  });
});
