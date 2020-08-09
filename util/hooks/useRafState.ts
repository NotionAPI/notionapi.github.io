import { useRef, useState, useCallback, StateUpdater } from "preact/hooks";

import useUnmount from "./useUnmount";

const useRafState = <S>(initialState: S | (() => S)): [S, StateUpdater<S>] => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  useUnmount(() => {
    cancelAnimationFrame(frame.current);
  });

  return [state, setRafState];
};

export default useRafState;