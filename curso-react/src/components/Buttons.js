import React from "react";

export default function Buttons(props) {
  const { fnShowName } = props;

  return (
    <div>
      <button onClick={() => fnShowName("Roberto Led")}>Click</button>
    </div>
  );
}
