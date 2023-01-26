import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { countState, decrementCount, incrementCount } from './recoil';
import TodoList from './TodoList';

const useCounter = () => ({
  count: useRecoilValue(countState),
  increment: useSetRecoilState(incrementCount),
  decrement: useSetRecoilState(decrementCount),
  reset: useResetRecoilState(countState),
});

export default function Counter() {
  let { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <div>
        <TodoList />
      </div>
      
      <div>

        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={() => increment()}>+1</button>
        <button onClick={() => decrement()}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>


    </div>

  );
}
