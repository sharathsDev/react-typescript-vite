import { useReducer } from 'react';
import { CounterAction, CounterState } from '../../types/componentTypes';

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + action.payload,
      };
    case 'decrement':
      return {
        count: state.count - action.payload,
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {state.count}</div>
      <button
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 "
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 "
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: 'reset' })}
        className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 "
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
