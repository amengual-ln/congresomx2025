'use client';

import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

export function NewsBody({ html }) {
  const clean = DOMPurify.sanitize(html);
  return <>{parse(clean)}</>;
}