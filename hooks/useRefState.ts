import { useEffect, useRef, useState } from 'react';

export const useRefState = (initialValue: any): [any, (value: any) => void] => {
  const [state, setState] = useState(initialValue);
  const refState = useRef(state);
  useEffect(
    () => {
      refState.current = state;
    },
    [state],
  );

  return [refState, setState];
};
