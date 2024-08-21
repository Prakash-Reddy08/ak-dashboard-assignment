import { decrement, increment } from "./features/dashboard/dashboardSlice";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";

function App() {
  const count = useAppSelector((state) => state.dashboard.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </>
  );
}

export default App;
