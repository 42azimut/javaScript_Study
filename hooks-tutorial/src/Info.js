import React, { useEffect, useReducer, useState } from "react";

function infoReducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [name, dispacth] = useReducer(infoReducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispacth(e.target);
  };

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChange} />
        <input type="text" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
