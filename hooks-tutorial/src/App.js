import { useState } from "react/cjs/react.development";
//import Info from "./Info";
import Info2 from "./Info2";
import Counter from "./Counter";
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info2 />}
      <Counter />
    </div>
  );
};
export default App;
