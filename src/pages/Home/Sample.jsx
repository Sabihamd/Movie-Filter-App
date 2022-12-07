import { useMemo, useReducer } from "react";
import { useEffect, useRef } from "react";
import {
  delay,
  forkJoin,
  fromEvent,
  interval,
  of,
  switchMap,
  take,
} from "rxjs";

const Sample = () => {
  const initialState = { count: 0 };
  const renderCount = useRef(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        renderCount.current = renderCount.current + 1;
        return { count: state.count + 1 };
      case "decrement":
        renderCount.current = renderCount.current + 1;
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const complexResult = useMemo(() => {
    return complexOperation(state.count);
  }, [state.count]);

  const complexOperation = (num) => {
    console.log("Calculating..some complex operation");
    for (let i = 1; i < 6; i++) num *= i;
    return num;
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("%cLogging the last emitted value", "color: blue");
    const forkjoin = forkJoin({
      sourceOne: of("first", "last").pipe(delay(1000)),
      sourceTwo: interval(500).pipe(take(4)),
    }).subscribe((val) => console.log(val));

    const fromevent = fromEvent(document, "click")
      .pipe(switchMap(() => interval(1000)))
      .subscribe(console.log);

    return () => {
      forkjoin.unsubscribe();
      fromevent.unsubscribe();
    };
  }, []);

  return (
    <>
      <div>
        <div>count is: {state.count}</div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Click to increase count
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Click to decrease count
        </button>
        <div>complex operation output is: {complexResult}</div>
        <div>
          Number of times Sample component rendered: {renderCount.current}
        </div>
      </div>
    </>
  );
};

export default Sample;
