import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Info2 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("effect");
    console.log({ name });
    return () => {
      console.log("unmount");
      //console.log(name);
    };
  }, []);
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>이름: {name}</div>
        <div>닉네임: {nickname}</div>
      </div>
    </div>
  );
};

export default Info2;
