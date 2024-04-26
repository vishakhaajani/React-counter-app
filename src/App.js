import { useState } from "react";
import Counter from "./Counter";

function App() {

  const [no , setNo] = useState(0)

  const Increment = () => {
    setNo(no + 1)
  }

  const Decrement = () => {
    setNo(no - 1)
  }

  const Reset = () => {
    let count = 0;
    setNo(count)
  }

  return (
    <div className="App">
      <Counter cnt={no} plus={Increment} minus={Decrement} reset={Reset}/>
    </div>
  );
}

export default App;
