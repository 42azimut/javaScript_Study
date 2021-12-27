import React from "react";
import { useState } from "react/cjs/react.development";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "snowman" },
    { id: 2, text: "ice" },
    { id: 3, text: "snow" },
    { id: 4, text: "wind" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값에 1을 더함!
    setNames(nextNames); //  names 키와 값을 없데이트함
    setInputText(""); // inputText 를 비운다(초기화)
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    console.log(nextNames);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
