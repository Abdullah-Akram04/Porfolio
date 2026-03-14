import React, { useEffect, useRef, useState } from 'react';

const INTERACTIVE_SELECTOR = [
  'a',
  'button',
  'input',
  'textarea',
  'select',
  '[role="button"]',
  '[data-cursor="interactive"]',
].join(', ');

const AnimatedCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const frameRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const ringRefPosition = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');

    const updateEnabledState = () => {
      setIsEnabled(mediaQuery.matches);
      if (!mediaQuery.matches) {
        document.body.classList.remove('custom-cursor-enabled');
      }
    };

    updateEnabledState();
    mediaQuery.addEventListener('change', updateEnabledState);

    return () => mediaQuery.removeEventListener('change', updateEnabledState);
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return undefined;
    }

    document.body.classList.add('custom-cursor-enabled');

    const moveCursor = (event) => {
      const nextX = event.clientX;
      const nextY = event.clientY;

      targetRef.current = { x: nextX, y: nextY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%)`;
      }

      if (!isVisible) {
        ringRefPosition.current = { x: nextX, y: nextY };
        setIsVisible(true);
      }
    };

    const updateCursorState = (event) => {
      const interactiveElement = event.target instanceof Element
        ? event.target.closest(INTERACTIVE_SELECTOR)
        : null;
      setIsInteractive(Boolean(interactiveElement));
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    const animateRing = () => {
      const current = ringRefPosition.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.16;
      current.y += (target.y - current.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }

      frameRef.current = window.requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', updateCursorState);
    window.addEventListener('mouseout', updateCursorState);
    window.addEventListener('mousedown', showCursor);
    window.addEventListener('mouseleave', hideCursor);
    window.addEventListener('blur', hideCursor);

    frameRef.current = window.requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', updateCursorState);
      window.removeEventListener('mouseout', updateCursorState);
      window.removeEventListener('mousedown', showCursor);
      window.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('blur', hideCursor);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isEnabled, isVisible]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isVisible ? 'custom-cursor-visible' : ''} ${isInteractive ? 'custom-cursor-interactive' : ''}`}
      />
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isVisible ? 'custom-cursor-visible' : ''} ${isInteractive ? 'custom-cursor-interactive' : ''}`}
      />
    </>
  );
};

export default AnimatedCursor;