import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Container from './Container';

describe('Container', () => {
  it('passes other props to the rendered element', () => {
    render(<Container role="test" />);
    expect(screen.findByRole('test')).toBeDefined();
  });
});
