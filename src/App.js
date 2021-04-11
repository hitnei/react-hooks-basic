// import HomePage from "./pages";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      {/* <HomePage /> */}
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <Hero name="Easy yaaa!" />
    </div>
  );
}

export default App;
