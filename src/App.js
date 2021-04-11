// import HomePage from "./pages";
import Hero from "./components/Hero";
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const dumpFunc = null;
  useCallback(() => {
    dumpFunc = () => {};
  }, []);

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
      <Hero onClick={dumpFunc} name="Easy yaaa!" />
    </div>
  );
}

export default App;
