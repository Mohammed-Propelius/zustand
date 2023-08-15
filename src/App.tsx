import { shallow } from "zustand/shallow";
import "./App.css";
import { useBookStore } from "./store/bookStore";

function App() {
  const { amount, title, updateAmount } = useBookStore(
    (state) => ({
      amount: state.amount,
      title: state.title,
      updateAmount: state.updateAmount,
    }),
    shallow
  );
  return (
    <div>
      <h1>Books : {amount}</h1>
      <h4>Title: {title}</h4>
      <button onClick={() => updateAmount(10)}>Update Amount</button>
    </div>
  );
}

export default App;
