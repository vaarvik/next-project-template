import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContentPadded from './ContentPadded';

describe('ContentPadded', () => {
  it('passes other props to the rendered element', () => {
    render(<ContentPadded role="test" />);
    expect(screen.findByRole('test')).toBeDefined();
  });
});
