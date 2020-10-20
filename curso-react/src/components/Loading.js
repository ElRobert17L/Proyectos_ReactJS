import React from "react";

function Loading(props) {
  const { data } = props;

  return (
    <div>
      <h2>{data.title}</h2>
      <small>Tiempo estimado {data.time} segundos.</small>
    </div>
  );
}

export default Loading;
