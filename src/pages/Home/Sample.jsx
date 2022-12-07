import { useMemo, useReducer } from "react";
import { useEffect, useRef } from "react";
import {
  delay,
  forkJoin,
  fromEvent,
  interval,
  of,
  startWith,
  switchMap,
  take,
} from "rxjs";

const Sample = () => {
  const initialState = { count: 0 };
  const renderCount = useRef(0);
  const reducer = (state, action) => {
    const { count } = state;
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: count + 1,
        };
      case "decrement":
        return {
          ...state,
          count: count - 1,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const complexResult = useMemo(() => {
    return complexOperation(state.count);
  }, [state.count]);

  useEffect(() => {
    renderCount.current += 1;
    console.log(of(1, 2, 3));
    console.log("%cLogging the last emitted value", "color: blue");
    const forkjoin = forkJoin({
      sourceOne: of("first", "last").pipe(delay(1000)),
      sourceTwo: interval(500).pipe(take(4)),
    }).subscribe((val) => console.log(val));

    const fromevent = fromEvent(document, "click")
      .pipe(
        switchMap((event) => {
          console.log(event);
          return interval(1000).pipe(startWith(4));
        })
      )
      .subscribe(console.log);

    return () => {
      forkjoin.unsubscribe();
      fromevent.unsubscribe();
    };
  }, []);

  useEffect(() => {
    renderCount.current += 1;
  }, [state.count]);

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
          Number of times Sample component rendered:{renderCount.current}
        </div>
      </div>
    </>
  );
};

const complexOperation = (num) => {
  console.log("Calculating..some complex operation");
  for (let i = 1; i < 6; i++) num *= i;
  return num;
};

export default Sample;
