import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContentMargined from './ContentMargined';

describe('ContentMargined', () => {
  it('passes other props to the rendered element', () => {
    render(<ContentMargined role="test" />);
    expect(screen.findByRole('test')).toBeDefined();
  });
});
