import * as React from 'react';

import { useOnMouseMove } from '../../hooks/useDisallowMouseMove';
import { useMouseDownHandlers } from '../../hooks/useMouseDownHandlers';
import { useOnScroll } from '../../hooks/useOnScroll';
import { useBodyRef } from '../context/ElementRefContext';

import { EmojiList } from './EmojiList';
import { EmojiVariationPicker } from './EmojiVariationPicker';

import './Body.css';

export function Body() {
  const BodyRef = useBodyRef();
  useOnScroll(BodyRef);
  useMouseDownHandlers(BodyRef);
  useOnMouseMove();

  return (
    <div className="epr-body" ref={BodyRef}>
      <EmojiVariationPicker />
      <EmojiList />
    </div>
  );
}
