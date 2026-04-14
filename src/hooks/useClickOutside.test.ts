import { renderHook } from '@testing-library/react';
import { createRef } from 'react';
import type { RefObject } from 'react';
import { useClickOutside } from './useClickOutside';

describe('useClickOutside', () => {
  let element: HTMLDivElement;
  let handler: jest.Mock;
  let ref: RefObject<HTMLElement>;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
    handler = jest.fn();
    ref = { current: element };
  });

  afterEach(() => {
    document.body.removeChild(element);
    jest.clearAllMocks();
  });

  test('does not call handler when clicking inside element', () => {
    renderHook(() => useClickOutside(ref, handler));

    const event = new MouseEvent('mousedown', { bubbles: true });
    element.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  test('calls handler when clicking outside element', () => {
    renderHook(() => useClickOutside(ref, handler));

    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);

    const event = new MouseEvent('mousedown', { bubbles: true });
    outsideElement.dispatchEvent(event);

    expect(handler).toHaveBeenCalledTimes(1);

    document.body.removeChild(outsideElement);
  });

  test('does nothing when ref is null', () => {
    const nullRef = createRef<HTMLDivElement>();
    renderHook(() => useClickOutside(nullRef as RefObject<HTMLElement>, handler));

    const event = new MouseEvent('mousedown', { bubbles: true });
    document.body.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });
});