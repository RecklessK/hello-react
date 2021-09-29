import React, { useState } from "react";

const Counter = () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{val}</b>입니다.
      </p>
      <button onClick={() => setVal(val + 1)}>
        <h1>+1</h1>
      </button>
      <button onClick={() => setVal(val + -1)}>
        <h1>-1</h1>
      </button>
    </div>
  );
};

export default Counter;
