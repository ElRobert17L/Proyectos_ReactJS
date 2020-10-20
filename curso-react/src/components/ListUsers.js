import React from "react";

export default function ListUsers(props) {
  const { listUsers } = props;

  return (
    <div>
      <h4>Lista de Usuarios</h4>
      <ul>
        {listUsers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
